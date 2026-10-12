# -*- coding: utf-8 -*-
"""문제(original-converted-md) + 정답(answer2) → example/quiz-data.js 생성.

사용법:
    python example/build-quiz-data.py

입력
    gamri/original-converted-md/{연도}-A.md   문제 본문과 보기
    gamri/answer2/{연도}/{번호}.md            정답(## 정답 섹션), 주제(title)
    gamri/answer/{연도}-A.md                  해설(**[해설]** 이후), 정답(**[정답]** 줄)
                                              — answer2 가 없는 연도(2015~2020)는 여기서 정답을 읽는다
    gamri/category/05.보안목차-result.md      보안 과목 목차

출력
    example/quiz-data.js   window.QUIZ_DATA = {...}
"""
import io
import json
import os
import re
import shutil
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
QDIR = os.path.join(ROOT, 'gamri', 'original-converted-md')
ADIR = os.path.join(ROOT, 'gamri', 'answer2')
EDIR = os.path.join(ROOT, 'gamri', 'answer')
TOC_SEC = os.path.join(ROOT, 'gamri', 'category', '05.보안목차-result.md')
OUT = os.path.join(ROOT, 'example', 'quiz-data.js')
IMGDIR = os.path.join(ROOT, 'example', 'images')

YEARS = list(range(2015, 2026))

# 긴 과목명 → 화면에 쓸 짧은 이름
SUBJECTS = [
    ('감리 및 사업관리', '감리'),
    ('소프트웨어 공학', '소공'),
    ('데이터베이스', 'DB'),
    ('시스템 구조', 'CA'),
    ('보안', '보안'),
]
SHORT = dict(SUBJECTS)

CIRCLED = '①②③④'

warnings = []


def warn(msg):
    warnings.append(msg)


# --------------------------------------------------------------------
# 문제 파싱
# --------------------------------------------------------------------

def parse_questions(year):
    """{번호: {subject, stem, options[]}} 반환."""
    path = os.path.join(QDIR, '%d-A.md' % year)
    src = io.open(path, encoding='utf-8').read()

    # 과목 구간: '## 과목명' 위치
    subs = [(m.start(), m.group(1).strip()) for m in re.finditer(r'^## (.+)$', src, re.M)]
    for _, name in subs:
        if name not in SHORT:
            warn('%d: 알 수 없는 과목명 %r' % (year, name))

    heads = [(m.start(), m.end(), int(m.group(1)))
             for m in re.finditer(r'^### (\d+)\.\s*$', src, re.M)]

    out = {}
    for i, (s, e, num) in enumerate(heads):
        end = heads[i + 1][0] if i + 1 < len(heads) else len(src)
        body = src[e:end]

        # 다음 과목 헤딩이 끼어 있으면 잘라낸다
        nx = re.search(r'^## .+$', body, re.M)
        if nx:
            body = body[:nx.start()]

        subject = [nm for p, nm in subs if p < s][-1]
        stem, options = split_stem_options(body, year, num)
        out[num] = dict(subject=subject, stem=stem, options=options)

    if len(out) != 120:
        warn('%d: 문제 수가 120이 아님 (%d)' % (year, len(out)))
    return out


def split_stem_options(body, year, num):
    """문제 본문을 지문과 보기 4개로 분리."""
    lines = body.rstrip().split('\n')

    # 보기는 본문 끝의 '1.' ~ '4.' 블록. 뒤에서부터 각 번호의 시작 줄을 찾는다.
    starts = {}
    for idx, ln in enumerate(lines):
        m = re.match(r'^(\d)\.\s+(.*)$', ln)
        if m and m.group(1) in '1234':
            starts.setdefault(int(m.group(1)), []).append(idx)

    if not all(k in starts for k in (1, 2, 3, 4)):
        # 보기가 그림 안에만 있는 문항(예: 2018-016) — 번호만 고를 수 있게 한다
        warn('%d-%03d: 보기 1~4를 찾지 못해 (그림 참조)로 채움' % (year, num))
        return '\n'.join(lines).strip(), ['(그림 참조)'] * 4

    # 1<2<3<4 순서로 증가하는 마지막 조합을 고른다 (지문 안의 번호 목록과 구분)
    i4 = starts[4][-1]
    i3 = max([i for i in starts[3] if i < i4], default=None)
    i2 = max([i for i in starts[2] if i3 is not None and i < i3], default=None)
    i1 = max([i for i in starts[1] if i2 is not None and i < i2], default=None)
    if i1 is None:
        warn('%d-%03d: 보기 순서를 특정하지 못함' % (year, num))
        return '\n'.join(lines).strip(), []

    bounds = [i1, i2, i3, i4, len(lines)]
    options = []
    for k in range(4):
        chunk = lines[bounds[k]:bounds[k + 1]]
        chunk[0] = re.sub(r'^\d\.\s+', '', chunk[0])
        options.append('\n'.join(chunk).strip())

    stem = '\n'.join(lines[:i1]).strip()
    if not stem:
        warn('%d-%03d: 지문이 비어 있음' % (year, num))
    return stem, options


# --------------------------------------------------------------------
# 정답 파싱
# --------------------------------------------------------------------

def parse_answer(year, num):
    """정답 번호 리스트(1-based) 반환. 복수정답/전항정답 지원."""
    path = os.path.join(ADIR, str(year), '%03d.md' % num)
    if not os.path.exists(path):
        warn('%d-%03d: 정답 파일 없음' % (year, num))
        return []

    src = io.open(path, encoding='utf-8').read()
    m = re.search(r'^## 정답\s*$(.*?)(?=^## |\Z)', src, re.M | re.S)
    if not m:
        warn('%d-%03d: ## 정답 섹션 없음' % (year, num))
        return []

    nums = sorted({CIRCLED.index(ch) + 1 for ch in m.group(1) if ch in CIRCLED})
    if not nums:
        warn('%d-%03d: 정답 기호를 찾지 못함' % (year, num))
    return nums


def parse_title(year, num):
    """answer2 프론트매터의 title에서 주제만 뽑아낸다."""
    path = os.path.join(ADIR, str(year), '%03d.md' % num)
    if not os.path.exists(path):
        return ''
    src = io.open(path, encoding='utf-8').read(400)
    m = re.search(r'^title:\s*(.+)$', src, re.M)
    if not m:
        return ''
    # '001번 · PERT 완료확률과 계획기간' → 'PERT 완료확률과 계획기간'
    return re.sub(r'^\d+번\s*·\s*', '', m.group(1).strip())


# --------------------------------------------------------------------
# 해설
# --------------------------------------------------------------------

def parse_explanations(year):
    """{번호: (정답 리스트, 해설 md)} 반환.
    정답은 '**[정답] ②**' 줄, 해설은 '**[해설]**' 이후 ~ 다음 헤딩 전까지."""
    path = os.path.join(EDIR, '%d-A.md' % year)
    if not os.path.exists(path):
        warn('%d: 해설 파일 없음' % year)
        return {}

    src = io.open(path, encoding='utf-8').read()
    heads = [(m.end(), int(m.group(1)))
             for m in re.finditer(r'^### (\d+)번\s*$', src, re.M)]

    out = {}
    for i, (e, num) in enumerate(heads):
        end = heads[i + 1][0] if i + 1 < len(heads) else len(src)
        body = src[e:end]
        nx = re.search(r'^#{2,3} .+$', body, re.M)      # 다음 과목/문항 헤딩
        if nx:
            body = body[:nx.start()]

        a = re.search(r'^\*\*\[정답\](.*)', body, re.M)
        ans = sorted({CIRCLED.index(ch) + 1 for ch in (a.group(1) if a else '') if ch in CIRCLED})

        m = re.search(r'^\*\*\[해설\]\*\*\s*', body, re.M)
        if not m:
            warn('%d-%03d: 해설 없음' % (year, num))
            out[num] = (ans, '')
            continue
        text = body[m.end():].strip()
        # 이미지 경로를 문제와 같은 형태(./images/...)로 맞춰 copy_images 가 처리하게 한다
        text = text.replace('](../original-converted-md/images/', '](./images/')
        out[num] = (ans, text)
    return out


# --------------------------------------------------------------------
# 보안 목차
# --------------------------------------------------------------------

def parse_security_toc():
    """보안 목차 매칭표를 읽어 {(연도, 번호): (순번, 목차명)} 반환.

    파일 형식은 마크다운 표다. 첫 열이 SECTION, 나머지 열이 연도이고
    각 셀에 '키워드(문제번호), 키워드(문제번호)' 형태로 적혀 있다.

        | SECTION | 2015 | ... | 2025 |
        | 01. 정보보호관리의 개념 | - | ... | - |
        | 02. 암호학 개요 | 위장공격 대응 암호기술(115) | ... |
    """
    if not os.path.exists(TOC_SEC):
        warn('보안 목차 파일 없음: %s' % TOC_SEC)
        return {}

    src = io.open(TOC_SEC, encoding='utf-8').read()
    toc = {}
    cols = None          # 열 인덱스 → 연도

    for ln in src.split('\n'):
        if not ln.lstrip().startswith('|'):
            continue
        cells = [c.strip() for c in ln.strip().strip('|').split('|')]

        # 헤더 행에서 연도 열 위치를 잡는다
        if cols is None:
            if cells and cells[0].upper() == 'SECTION':
                cols = {}
                for i, c in enumerate(cells):
                    if re.fullmatch(r'20\d{2}', c):
                        cols[i] = int(c)
            continue

        if not cells or set(cells[0]) <= set('- :'):     # 구분선
            continue

        m = re.match(r'^(\d+)\.\s*(.+)$', cells[0])
        if not m:
            continue
        order, section = int(m.group(1)), m.group(2).strip()

        for i, year in cols.items():
            if i >= len(cells) or year not in YEARS:
                continue
            for num in re.findall(r'\((\d{1,3})\)', cells[i]):
                num = int(num)
                if 1 <= num <= 120:
                    toc[(year, num)] = (order, section)

    if cols is None:
        warn('보안 목차 표의 헤더(SECTION 행)를 찾지 못했습니다.')
    return toc


# --------------------------------------------------------------------
# 이미지 복사
# --------------------------------------------------------------------

def copy_images(questions):
    """문제에서 참조하는 이미지를 example/images 로 복사하고 경로를 바꾼다.

    원본 경로   gamri/original-converted-md/images/2021/page2_img0.png
    복사 경로   example/images/2021/page2_img0.png
    md 참조     ./images/2021/page2_img0.png → images/2021/page2_img0.png

    연도 하위 폴더를 유지해야 연도별로 같은 파일명(page2_img0.png)이
    서로 덮어쓰지 않는다.
    """
    copied, missing, seen = 0, [], set()

    def fix(text, where):
        nonlocal copied

        def sub(m):
            nonlocal copied
            rel = m.group(1)                      # 'images/2021/page2_img0.png'
            src = os.path.join(QDIR, rel.replace('/', os.sep))
            dst = os.path.join(IMGDIR, rel[len('images/'):].replace('/', os.sep))

            if rel not in seen:
                seen.add(rel)
                if os.path.exists(src):
                    os.makedirs(os.path.dirname(dst), exist_ok=True)
                    # 내용이 같으면 다시 복사하지 않는다
                    if not os.path.exists(dst) or os.path.getsize(dst) != os.path.getsize(src):
                        shutil.copyfile(src, dst)
                    copied += 1
                else:
                    missing.append('%s: %s' % (where, rel))
            return '](' + rel + ')'

        return re.sub(r'\]\(\./(images/[^)]+)\)', sub, text)

    for it in questions:
        where = '%d-%03d' % (it['y'], it['n'])
        it['q'] = fix(it['q'], where)
        it['o'] = [fix(o, where) for o in it['o']]
        if it.get('e'):
            it['e'] = fix(it['e'], where)

    for m in missing:
        warn('이미지 없음 %s' % m)
    return copied, missing


# --------------------------------------------------------------------

def main():
    toc = parse_security_toc()
    questions = []

    for year in YEARS:
        qs = parse_questions(year)
        expl = parse_explanations(year)
        for num in sorted(qs):
            q = qs[num]
            e_ans, e_text = expl.get(num, ([], ''))
            if os.path.isdir(os.path.join(ADIR, str(year))):
                ans = parse_answer(year, num)
                if e_ans and e_ans != ans:
                    warn('%d-%03d: 정답 불일치 answer2=%s answer=%s' % (year, num, ans, e_ans))
            else:
                ans = e_ans
                if not ans:
                    warn('%d-%03d: 정답 없음 (answer)' % (year, num))
            item = dict(
                y=year,
                n=num,
                s=SHORT.get(q['subject'], q['subject']),
                t=parse_title(year, num),
                q=q['stem'],
                o=q['options'],
                a=ans,
            )
            if e_text:
                item['e'] = e_text      # 해설 (md)
            g = toc.get((year, num))
            if g:
                item['go'] = g[0]    # 목차 순번
                item['g'] = g[1]     # 목차명
            questions.append(item)

    # 참조된 이미지를 example/images 로 복사하고 경로를 그에 맞게 바꾼다.
    # (md: ./images/2021/page2_img0.png → images/2021/page2_img0.png)
    copied, missing = copy_images(questions)

    payload = dict(
        years=YEARS,
        subjects=[short for _, short in SUBJECTS],
        questions=questions,
    )

    body = 'window.QUIZ_DATA = %s;\n' % json.dumps(payload, ensure_ascii=False, separators=(',', ':'))
    io.open(OUT, 'w', encoding='utf-8').write(
        '/* 자동 생성 파일 — build-quiz-data.py 로 다시 만드세요. 직접 수정하지 마세요. */\n' + body
    )

    # ---- 요약 ----
    no_ans = [q for q in questions if not q['a']]
    no_opt = [q for q in questions if len(q['o']) != 4]
    multi = [q for q in questions if len(q['a']) > 1]
    tagged = [q for q in questions if q.get('g')]
    explained = [q for q in questions if q.get('e')]

    print('생성: %s (%.2f MB)' % (OUT, os.path.getsize(OUT) / 1048576))
    print('문항 %d개 / 정답 없음 %d / 보기 4개 아님 %d / 복수정답 %d / 보안목차 태깅 %d'
          % (len(questions), len(no_ans), len(no_opt), len(multi), len(tagged)))
    print('해설 %d개' % len(explained))
    print('이미지 %d개 → %s (누락 %d)' % (copied, IMGDIR, len(missing)))

    for label, group in (('정답 없음', no_ans), ('보기 이상', no_opt)):
        for q in group[:10]:
            print('  [%s] %d-%03d' % (label, q['y'], q['n']))

    if warnings:
        print('\n경고 %d건:' % len(warnings))
        for w in warnings[:30]:
            print('  ' + w)

    return 1 if (no_ans or no_opt) else 0


if __name__ == '__main__':
    sys.exit(main())
