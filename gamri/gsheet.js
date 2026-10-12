/* ====================================================================
 * gsheet.js — Google Sheets 연동 (OAuth2 + Sheets API v4 직접 호출)
 *
 * 사용법
 *   <script src="gsheet.js"></script>
 *   <script>
 *     GSheet.configure({
 *       spreadsheetId: '1Sk2oB...',
 *       clientId: '1234567890-xxxx.apps.googleusercontent.com',
 *     });
 *     const { signedIn } = await GSheet.init();   // GIS 로드 + 토큰 복원
 *     if (!signedIn) await GSheet.Auth.signIn();  // 버튼 클릭 등 사용자 동작에서 호출
 *
 *     const { header, rows } = await GSheet.list();
 *     await GSheet.update(2, { 이름: '홍길동' });
 *   </script>
 *
 * ── 사전 준비 (Google Cloud Console) ─────────────────────────────────
 *  1. 프로젝트에서 "Google Sheets API" 사용 설정
 *  2. API 및 서비스 > 사용자 인증 정보 > OAuth 클라이언트 ID 만들기
 *     - 애플리케이션 유형: 웹 애플리케이션  ← 데스크톱 앱으로 만들면
 *       "OAuth 2.0 정책을 준수하지 않습니다" 오류가 납니다
 *     - 승인된 JavaScript 원본: 페이지를 서빙하는 origin
 *       (포트 포함, 끝에 / 없이. 예: http://localhost:5500)
 *  3. OAuth 동의 화면이 "테스트" 상태면 본인 계정을 테스트 사용자로 추가
 *
 * ── 권한 ─────────────────────────────────────────────────────────────
 *  공개(링크 공유) 시트라도 "쓰기"는 로그인 계정에 편집 권한이 있어야 합니다.
 *  읽기만 필요하면 scopes 를 spreadsheets.readonly 로 낮추세요.
 * ==================================================================== */

(function (global) {
  'use strict';

  const API_BASE = 'https://sheets.googleapis.com/v4/spreadsheets';
  const GIS_SRC = 'https://accounts.google.com/gsi/client';
  const SCOPE_RW = 'https://www.googleapis.com/auth/spreadsheets';
  const SCOPE_RO = 'https://www.googleapis.com/auth/spreadsheets.readonly';

  const config = {
    spreadsheetId: null,
    clientId: null,
    scopes: SCOPE_RW,
    defaultSheet: null,  // 지정하면 모든 호출이 이 탭을 사용 (미지정 시 첫 번째 탭)
    tokenKey: null,      // 미지정 시 'gsheet.token.<spreadsheetId>'
  };

  /** 설정 주입. init() 전에 호출하세요. */
  function configure(opts) {
    Object.assign(config, opts || {});
    if (!config.tokenKey) config.tokenKey = 'gsheet.token.' + config.spreadsheetId;
    SheetAPI.spreadsheetId = config.spreadsheetId;
    if (config.defaultSheet) SheetAPI.sheet = config.defaultSheet;
    return global.GSheet;
  }

  /* ------------------------------------------------------------------
   * 사전 점검 — 흔한 설정 실수를 로그인 전에 잡아냅니다
   * ------------------------------------------------------------------ */

  /**
   * OAuth 클라이언트 ID 는 "프로젝트번호-랜덤문자열.apps.googleusercontent.com" 형식.
   * 프로젝트 ID(예: my-project-450922-h7...)를 넣으면 Google 이
   * "The OAuth client was not found" 로 거부합니다.
   */
  function clientIdError(clientId) {
    if (!clientId) return 'clientId 가 설정되지 않았습니다. GSheet.configure({ clientId }) 를 호출하세요.';
    if (!/^\d+-[\w-]+\.apps\.googleusercontent\.com$/.test(clientId)) {
      return 'clientId 형식이 올바르지 않습니다. 프로젝트 ID 가 아니라 OAuth 클라이언트 ID 를 넣어야 합니다. ' +
             '(Cloud Console > API 및 서비스 > 사용자 인증 정보 > OAuth 2.0 클라이언트 ID, ' +
             '예: 407408718192-xxxxxxxx.apps.googleusercontent.com)';
    }
    return null;
  }

  /**
   * Google 은 localhost / 127.0.0.1 외에는 https origin 만 허용하고,
   * file:// 은 origin 이 "null" 이라 거부합니다.
   * (거부되면 "앱이 Google 의 OAuth 2.0 정책을 준수하지 않습니다" 가 뜹니다)
   */
  function originError() {
    const loc = global.location;
    if (!loc) return null;

    if (loc.protocol === 'file:') {
      return 'file:// 로 열면 OAuth 가 동작하지 않습니다 (origin 이 null). ' +
             '로컬 서버로 띄우세요. 예: npx serve example → http://localhost:3000';
    }
    const isLocal = loc.hostname === 'localhost' || loc.hostname === '127.0.0.1' || loc.hostname === '[::1]';
    if (loc.protocol !== 'https:' && !isLocal) {
      return 'origin 이 ' + loc.origin + ' 입니다. Google 은 localhost / 127.0.0.1 외에는 https 만 허용합니다.';
    }
    return null;
  }

  /* ------------------------------------------------------------------
   * GIS 스크립트 로딩
   * ------------------------------------------------------------------ */

  let gisPromise = null;

  function loadGis() {
    if (global.google && global.google.accounts && global.google.accounts.oauth2) {
      return Promise.resolve();
    }
    if (gisPromise) return gisPromise;

    gisPromise = new Promise((resolve, reject) => {
      // 페이지가 이미 GIS 를 넣어 두었다면 그 태그의 로드를 기다립니다
      let el = document.querySelector('script[src^="' + GIS_SRC + '"]');
      if (!el) {
        el = document.createElement('script');
        el.src = GIS_SRC;
        el.async = true;
        el.defer = true;
        document.head.appendChild(el);
      }
      el.addEventListener('load', () => resolve());
      el.addEventListener('error', () => reject(new Error('Google Identity Services 스크립트를 불러오지 못했습니다.')));
      // 이미 로드가 끝난 태그라면 load 이벤트가 다시 오지 않으므로 직접 확인
      if (global.google && global.google.accounts && global.google.accounts.oauth2) resolve();
    });
    return gisPromise;
  }

  /* ------------------------------------------------------------------
   * OAuth2 토큰 관리 (Google Identity Services)
   * ------------------------------------------------------------------ */

  const Auth = {
    tokenClient: null,
    accessToken: null,
    expiresAt: 0,

    /** GIS 로드 후 1회 호출. 저장된 토큰이 있으면 복원합니다. */
    init() {
      this.tokenClient = global.google.accounts.oauth2.initTokenClient({
        client_id: config.clientId,
        scope: config.scopes,
        callback: () => {},        // 요청마다 교체
      });
      this.restore();
    },

    isSignedIn() {
      // 만료 1분 전부터는 만료된 것으로 취급
      return !!this.accessToken && Date.now() < this.expiresAt - 60000;
    },

    /* ---------- 토큰 보관 (새로고침 대응) ----------
     * 액세스 토큰은 1시간 정도 유효합니다. sessionStorage 에 두면
     * 새로고침해도 만료 전까지는 재인증 없이 그대로 이어서 쓸 수 있습니다.
     * (탭을 닫으면 사라집니다. localStorage 로 바꾸면 더 오래 남지만
     *  XSS 에 토큰이 노출될 위험이 커집니다.)
     */

    _store() {
      try {
        sessionStorage.setItem(config.tokenKey, JSON.stringify({
          accessToken: this.accessToken,
          expiresAt: this.expiresAt,
          scope: config.scopes,
        }));
      } catch (e) { /* 시크릿 모드 등에서 실패해도 무시 */ }
    },

    /** 저장된 토큰을 복원. 유효한 토큰을 되살렸으면 true */
    restore() {
      try {
        const saved = JSON.parse(sessionStorage.getItem(config.tokenKey) || 'null');
        // 스코프를 바꿨다면 예전 토큰은 버립니다
        if (!saved || saved.scope !== config.scopes) return false;
        if (Date.now() >= saved.expiresAt - 60000) {
          sessionStorage.removeItem(config.tokenKey);
          return false;
        }
        this.accessToken = saved.accessToken;
        this.expiresAt = saved.expiresAt;
        return true;
      } catch (e) {
        return false;
      }
    },

    _clearStore() {
      try { sessionStorage.removeItem(config.tokenKey); } catch (e) { /* noop */ }
    },

    /* ---------- 토큰 발급 ---------- */

    /**
     * 액세스 토큰 확보. 유효한 토큰이 있으면 재사용합니다.
     * @param {{force?: boolean, prompt?: string}} opts
     *        force  - 만료 전이라도 새로 발급 (401 재시도용)
     *        prompt - 'consent' 면 동의 화면을 강제로 표시 (계정 재선택용)
     */
    getToken(opts) {
      opts = opts || {};
      if (!this.tokenClient) {
        return Promise.reject(new Error('GSheet.init() 이 끝나기 전에 호출되었습니다.'));
      }
      if (!opts.force && this.isSignedIn()) {
        return Promise.resolve(this.accessToken);
      }

      return new Promise((resolve, reject) => {
        this.tokenClient.callback = (res) => {
          if (res.error) {
            return reject(new Error(res.error_description || res.error));
          }
          this.accessToken = res.access_token;
          this.expiresAt = Date.now() + Number(res.expires_in || 3600) * 1000;
          this._store();
          resolve(this.accessToken);
        };
        this.tokenClient.error_callback = (err) => {
          const type = (err && (err.type || err.message)) || 'unknown';
          if (type === 'popup_failed_to_open') {
            return reject(new Error(
              '팝업이 차단되어 토큰을 갱신하지 못했습니다. 팝업을 허용하거나 로그인을 다시 시도하세요.'
            ));
          }
          if (type === 'popup_closed') {
            return reject(new Error('로그인 창이 닫혔습니다.'));
          }
          reject(new Error('OAuth 실패: ' + type));
        };
        // prompt: '' → 이미 동의한 계정이면 동의 화면 없이 바로 토큰 발급
        this.tokenClient.requestAccessToken({ prompt: opts.prompt || '' });
      });
    },

    /**
     * 로그인. 팝업을 띄우므로 사용자 동작(클릭) 안에서 호출해야 합니다.
     * 이미 동의한 계정이면 동의 화면이 뜨지 않습니다.
     * @param {boolean} chooseAccount 계정을 다시 고르고 싶을 때 true
     */
    signIn(chooseAccount) {
      return this.getToken({ force: true, prompt: chooseAccount ? 'consent' : '' });
    },

    signOut() {
      const token = this.accessToken;
      this.accessToken = null;
      this.expiresAt = 0;
      this._clearStore();
      SheetAPI._meta = null;
      SheetAPI._header = null;
      SheetAPI.sheet = config.defaultSheet;
      if (token && global.google) global.google.accounts.oauth2.revoke(token, () => {});
    },
  };

  /* ------------------------------------------------------------------
   * Sheets API v4 래퍼
   * ------------------------------------------------------------------ */

  const SheetAPI = {
    spreadsheetId: null,
    sheet: null,          // 현재 시트 탭 이름 (null 이면 첫 번째 탭)
    _meta: null,          // 탭 메타데이터 캐시 ({ title, sheetId }[])
    _header: null,        // 탭별 헤더 캐시 ({ 탭이름: string[] })

    /* ---------- 내부 통신 ---------- */

    /** 인증 헤더를 붙여 호출하고, 401 이면 토큰을 갱신해 1회 재시도 */
    async _request(path, opts) {
      opts = opts || {};
      if (!this.spreadsheetId) throw new Error('spreadsheetId 가 설정되지 않았습니다.');
      const url = API_BASE + '/' + this.spreadsheetId + path;

      const send = (token) => fetch(url, {
        method: opts.method || 'GET',
        headers: Object.assign(
          { Authorization: 'Bearer ' + token },
          opts.body ? { 'Content-Type': 'application/json' } : {}
        ),
        body: opts.body ? JSON.stringify(opts.body) : undefined,
      });

      let res = await send(await Auth.getToken());
      if (res.status === 401) {
        res = await send(await Auth.getToken({ force: true }));
      }

      const text = await res.text();
      let data = null;
      try { data = text ? JSON.parse(text) : null; } catch (e) { /* noop */ }

      if (!res.ok) {
        const msg = (data && data.error && data.error.message) || text.slice(0, 200);
        throw new Error('Sheets API ' + res.status + ': ' + msg);
      }
      return data;
    },

    /* ---------- 메타데이터 ---------- */

    /** 시트 탭 목록 (이름 + sheetId). 결과는 캐시됩니다. */
    async sheets(refresh) {
      if (!this._meta || refresh) {
        const data = await this._request('?fields=sheets.properties(sheetId,title)');
        this._meta = data.sheets.map((s) => ({
          title: s.properties.title,
          sheetId: s.properties.sheetId,
        }));
        if (!this.sheet) this.sheet = this._meta[0].title;
      }
      return this._meta;
    },

    async _sheetIdOf(name) {
      const meta = await this.sheets();
      const found = meta.find((s) => s.title === name);
      if (!found) throw new Error('SHEET_NOT_FOUND: ' + name);
      return found.sheetId;
    },

    /** 탭 이름이 비어 있으면 첫 번째 탭으로 채웁니다 */
    async _resolveSheet(sheet) {
      if (sheet) return sheet;
      if (this.sheet) return this.sheet;
      await this.sheets();
      return this.sheet;
    },

    /* ---------- 조회 ---------- */

    /**
     * 전체조회. 1행을 헤더로 사용합니다.
     * @returns {Promise<{header: string[], rows: object[], values: string[][]}>}
     *          rows 의 각 객체에는 실제 시트 행 번호인 _row 가 들어 있습니다.
     */
    async list(sheet) {
      const name = await this._resolveSheet(sheet);
      const data = await this._request(
        '/values/' + encodeURIComponent(a1(name)) + '?majorDimension=ROWS'
      );
      const values = data.values || [];
      if (values.length === 0) return { header: [], rows: [], values: [] };

      const header = values[0];
      this._header = this._header || {};
      this._header[name] = header;        // 방금 읽었으므로 캐시를 갱신한다

      const rows = values.slice(1).map((line, i) => {
        const obj = { _row: i + 2 };               // 헤더가 1행이므로 데이터는 2행부터
        header.forEach((h, c) => {
          obj[h || ('col' + (c + 1))] = line[c] != null ? line[c] : '';
        });
        return obj;
      });
      return { header, rows, values };
    },

    /**
     * 헤더 행만 조회. 결과는 탭별로 캐시한다.
     * update()/bulkUpdate() 가 헤더명을 열 번호로 바꿀 때 매번 호출하므로,
     * 캐시가 없으면 답안 한 건을 쓸 때마다 요청이 한 번 더 나간다.
     * @param refresh 캐시를 무시하고 다시 읽을 때 true
     */
    async header(sheet, refresh) {
      const name = await this._resolveSheet(sheet);
      if (!refresh && this._header && this._header[name]) return this._header[name];

      const data = await this._request('/values/' + encodeURIComponent(a1(name, '1:1')));
      const row = (data.values && data.values[0]) || [];
      this._header = this._header || {};
      this._header[name] = row;
      return row;
    },

    /** 한 행 조회 (row: 실제 시트 행 번호, 2부터) */
    async get(row, sheet) {
      assertRow(row);
      const name = await this._resolveSheet(sheet);
      const header = await this.header(name);
      const data = await this._request(
        '/values/' + encodeURIComponent(a1(name, 'A' + row + ':' + colLetter(header.length) + row))
      );
      const line = (data.values && data.values[0]) || [];
      const obj = { _row: row };
      header.forEach((h, i) => { obj[h || ('col' + (i + 1))] = line[i] != null ? line[i] : ''; });
      return obj;
    },

    /* ---------- 수정 ---------- */

    /**
     * 행 수정.
     *   update(3, { name: '홍길동', score: 90 })   // 헤더명으로 지정한 열만
     *   update(3, ['홍길동', 90])                   // A열부터 통째로 덮어쓰기
     */
    async update(row, dataOrValues, sheet) {
      assertRow(row);
      const name = await this._resolveSheet(sheet);

      if (Array.isArray(dataOrValues)) {
        const range = a1(name, 'A' + row + ':' + colLetter(dataOrValues.length) + row);
        return this._request(
          '/values/' + encodeURIComponent(range) + '?valueInputOption=USER_ENTERED',
          { method: 'PUT', body: { range, majorDimension: 'ROWS', values: [dataOrValues] } }
        );
      }

      // 헤더명 기반 부분 수정 → 열마다 ValueRange 를 만들어 batch 로 한 번에
      const header = await this.header(name);
      const ranges = Object.keys(dataOrValues).map((key) => {
        const idx = header.indexOf(key);
        if (idx < 0) throw new Error('COLUMN_NOT_FOUND: ' + key);
        return { range: a1(name, colLetter(idx + 1) + row), values: [[dataOrValues[key]]] };
      });
      if (ranges.length === 0) throw new Error('NO_DATA');

      return this._request('/values:batchUpdate', {
        method: 'POST',
        body: { valueInputOption: 'USER_ENTERED', data: ranges },
      });
    },

    /** 셀 하나 수정. col 은 헤더명('name') 또는 열 번호(1-based) */
    async updateCell(row, col, value, sheet) {
      assertRow(row);
      const name = await this._resolveSheet(sheet);
      let idx;
      if (typeof col === 'number' || /^\d+$/.test(String(col))) {
        idx = Number(col);
      } else {
        const header = await this.header(name);
        idx = header.indexOf(String(col)) + 1;
        if (idx <= 0) throw new Error('COLUMN_NOT_FOUND: ' + col);
      }
      const range = a1(name, colLetter(idx) + row);
      return this._request(
        '/values/' + encodeURIComponent(range) + '?valueInputOption=USER_ENTERED',
        { method: 'PUT', body: { range, values: [[value]] } }
      );
    },

    /**
     * 여러 행을 한 번의 요청으로 수정.
     * items: [{ row, data: {헤더명: 값} } | { row, values: [...] }, ...]
     */
    async bulkUpdate(items, sheet) {
      if (!Array.isArray(items) || items.length === 0) throw new Error('NO_ITEMS');
      const name = await this._resolveSheet(sheet);
      const header = await this.header(name);
      const data = [];

      items.forEach((item) => {
        const row = Number(item.row);
        assertRow(row);

        if (Array.isArray(item.values)) {
          data.push({
            range: a1(name, 'A' + row + ':' + colLetter(item.values.length) + row),
            values: [item.values],
          });
          return;
        }
        Object.keys(item.data || {}).forEach((key) => {
          const idx = header.indexOf(key);
          if (idx < 0) throw new Error('COLUMN_NOT_FOUND: ' + key);
          data.push({
            range: a1(name, colLetter(idx + 1) + row),
            values: [[item.data[key]]],
          });
        });
      });

      if (data.length === 0) throw new Error('NO_DATA');
      return this._request('/values:batchUpdate', {
        method: 'POST',
        body: { valueInputOption: 'USER_ENTERED', data },
      });
    },

    /** 마지막 행 뒤에 추가. append({name:'...'}) 또는 append(['...', 10]) */
    async append(dataOrValues, sheet) {
      const name = await this._resolveSheet(sheet);
      let values;
      if (Array.isArray(dataOrValues)) {
        values = dataOrValues;
      } else {
        const header = await this.header(name);
        values = header.map((h) => (h in dataOrValues ? dataOrValues[h] : ''));
      }
      return this._request(
        '/values/' + encodeURIComponent(a1(name)) +
        ':append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS',
        { method: 'POST', body: { values: [values] } }
      );
    },

    /** 행 삭제 (시트에서 행 자체를 제거) */
    async remove(row, sheet) {
      assertRow(row);
      const name = await this._resolveSheet(sheet);
      const sheetId = await this._sheetIdOf(name);
      return this._request(':batchUpdate', {
        method: 'POST',
        body: {
          requests: [{
            deleteDimension: {
              range: { sheetId, dimension: 'ROWS', startIndex: row - 1, endIndex: row },
            },
          }],
        },
      });
    },

    /** 값만 지우기 (행은 남김) */
    async clearRow(row, sheet) {
      assertRow(row);
      const name = await this._resolveSheet(sheet);
      const header = await this.header(name);
      const range = a1(name, 'A' + row + ':' + colLetter(header.length) + row);
      return this._request('/values/' + encodeURIComponent(range) + ':clear', { method: 'POST', body: {} });
    },
  };

  /* ------------------------------------------------------------------
   * A1 표기 헬퍼
   * ------------------------------------------------------------------ */

  /** a1('Sheet 1', 'A2:C2') → "'Sheet 1'!A2:C2" / 범위 생략 시 탭 전체 */
  function a1(sheet, range) {
    const name = "'" + String(sheet).replace(/'/g, "''") + "'";
    return range ? name + '!' + range : name;
  }

  /** 1 → 'A', 27 → 'AA' */
  function colLetter(n) {
    if (!n || n < 1) throw new Error('INVALID_COLUMN: ' + n);
    let s = '';
    while (n > 0) {
      const rem = (n - 1) % 26;
      s = String.fromCharCode(65 + rem) + s;
      n = Math.floor((n - 1) / 26);
    }
    return s;
  }

  function assertRow(row) {
    if (!row || isNaN(row) || row < 2) throw new Error('INVALID_ROW: ' + row + ' (1행은 헤더)');
  }

  /* ------------------------------------------------------------------
   * 초기화
   * ------------------------------------------------------------------ */

  /**
   * GIS 를 로드하고 토큰 클라이언트를 준비합니다.
   * 저장된 토큰이 살아 있으면 복원하므로, 새로고침 직후에는
   * 재인증 없이 바로 API 를 호출할 수 있습니다.
   * @returns {Promise<{signedIn: boolean}>}
   */
  async function init() {
    const cfgError = clientIdError(config.clientId) || originError();
    if (cfgError) throw new Error(cfgError);

    await loadGis();
    Auth.init();
    return { signedIn: Auth.isSignedIn() };
  }

  /* ------------------------------------------------------------------
   * 공개 API
   * ------------------------------------------------------------------ */

  const GSheet = {
    configure,
    init,
    Auth,
    SheetAPI,

    // 자주 쓰는 함수는 최상위로도 노출 (GSheet.list() 처럼 호출)
    list:        (...a) => SheetAPI.list(...a),
    get:         (...a) => SheetAPI.get(...a),
    header:      (...a) => SheetAPI.header(...a),
    update:      (...a) => SheetAPI.update(...a),
    updateCell:  (...a) => SheetAPI.updateCell(...a),
    bulkUpdate:  (...a) => SheetAPI.bulkUpdate(...a),
    append:      (...a) => SheetAPI.append(...a),
    remove:      (...a) => SheetAPI.remove(...a),
    clearRow:    (...a) => SheetAPI.clearRow(...a),
    sheets:      (...a) => SheetAPI.sheets(...a),
    signIn:      (...a) => Auth.signIn(...a),
    signOut:     (...a) => Auth.signOut(...a),
    isSignedIn:  () => Auth.isSignedIn(),

    // 유틸 / 진단
    a1,
    colLetter,
    clientIdError,
    originError,
    SCOPE_RW,
    SCOPE_RO,
    get config() { return config; },
  };

  global.GSheet = GSheet;
})(window);
