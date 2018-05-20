
(function(){
    /**
     * 01. opener 체크
     */
    if(opener === null){
        console.error("opener is null");
        return;
    }

    /**
     * 02. 기본 html 주입
     */
    var bodyString = ''
    +'<div class="filterHeader">'
    +'    <button id="__monitoringStopButton__">STOP</button>'
    +'    <button id="__monitoringStartButton__">START</button>'
    +'    | interval : <select id="__intervalTime__">'
    +'      <option value="100">100</option>'
    +'      <option value="500">500</option>'
    +'      <option value="1000" selected>1000</option>'
    +'      <option value="2000">2000</option>'
    +'      <option value="5000">5000</option>'
    +'    </select> ms'
    +'    | intervalSeq : <span id="__monitoringintervalSeqValid__"></span> / <span id="__monitoringintervalSeq__"></span>'
    +'    | cell width : <select id="__cellWidth100__">'
    +'      <option value="m20">20</option>'
    +'      <option value="m50">50</option>'
    +'      <option value="m100" selected>100</option>'
    +'      <option value="m200">200</option>'
    +'      <option value="m300">300</option>'
    +'      <option value="m400">400</option>'
    +'      <option value="m500">500</option>'
    +'    </select>'
    +'    | <input type="checkbox" id="__wordWrapCheckbox__" /><label for="__wordWrapCheckbox__">word-wrap & beauty</label>'
    +'    | <input type="checkbox" id="__scrollCheckbox__" checked="checked" /><label for="__scrollCheckbox__">autoScroll</label>'
    +'    | exceptList : <span id="exceptListSpan"></span>'
    +'</div>'

    +'<div class="m0" id="__monitoringResult__" style="margin-top:30px;">'
    +'    <div class="m1 desc" id="__monitoringInterval__">'
    +'        <div class="m2_head desc">intervalSeq</div>'
    +'        <div class="m2_right desc" id="__right__monitoringInterval__">intervalSeq</div>'
    +'    </div>'

    +'    <div class="m1" id="__monitoringTime__">'
    +'        <div class="m2_head desc">HH:MM:SS</div>'
    +'        <div class="m2_right" id="__right__monitoringTime__">HH:MM:SS, SSS, spendTime(ms)</div>'
    +'    </div>'

    +'    <div class="m1 desc" id="__monitoringReloadCount__">'
    +'        <div class="m2_head desc">monitoringReloadCount</div>'
    +'        <div class="m2_right desc" id="__right__monitoringReloadCount__">monitoringReloadCount</div>'
    +'    </div>'
    +'<br/>'
    +'</div>'

    +'<div style="clear:both;"></div>'
    +'<br/>'
    +'<div id="__monitoringTextarea__" style="position:relative;">'
    +'    <textarea id="__monitoringTextarea1__" cols="130" rows="55">Exception Log :</textarea>'
    +'    <textarea id="__monitoringTextarea2__" cols="130" rows="55">Clicked Content :</textarea>'
    +'</div>'
    ;
    var pDiv = document.createElement('div');
    pDiv.innerHTML = bodyString;
    pDiv.style.postion="relative";
    document.getElementsByTagName("body")[0].appendChild(pDiv);

    /**
     * 03. 함수 정의
     */
    /* textArea 출력 */
    function c(){
        var str="";
        for (var index = 0; index < arguments.length; index++) {
            if(index != 0){
                str += ",";
            }
            str += arguments[index];
        }
        var ta = document.getElementById("__monitoringTextarea1__");
        ta.value = ta.value + "\n[[[ intervalSeq=" + intervalSeq + " ]]]";
        ta.value = ta.value + "\n" + str;
    }
    /* textArea 출력 */
    function c2(){
        var str="";
        for (var index = 0; index < arguments.length; index++) {
            if(index != 0){
                str += ",";
            }
            str += arguments[index];
        }
        var ta = document.getElementById("__monitoringTextarea2__");
        ta.value = ta.value + "\n" + str;
    }
    /* dom 생성 */
    function createElement2(elString, key, clazz, html, parent, callBackFn, isAppendChild){
        var iDiv = document.createElement(elString);
        iDiv.setAttribute("idx", ++elementInx);
        if(key !== null){
            iDiv.id = key;
        }
        if(clazz !== null){
            iDiv.className = clazz;
        }
        if(html !== null){
            iDiv.innerHTML = html;
        }
        if(callBackFn){   /* false인 경우는 실행 안하기 위해서 */
            iDiv.addEventListener("click", callBackFn);
            // mouse right button for diff text
            iDiv.oncontextmenu = function(event) {
                var tickerNum = toggleTickerCount();

                var ticker = document.createElement("div");
                ticker.className = "ticker";
                ticker.style.top = iDiv.offsetTop + "px";
                ticker.style.left = iDiv.offsetLeft + "px";
                ticker.innerHTML = tickerNum;
                ticker.setAttribute("num", tickerNum);
                document.getElementById("__monitoringResult__").appendChild(ticker);

                tickerArr[tickerNum] = Number(iDiv.getAttribute("idx"));

                // diff
                if(tickerNum === 1){
                    diffFn();
                }

                event.preventDefault(); // context menu가 나오지 않도록 막기
            };
        }
        if(typeof isAppendChild === "undefined" || isAppendChild === true){   /* false인 경우는 실행 안하기 위해서 */
            document.getElementById(parent).appendChild(iDiv);
        }
        return iDiv;
    }
    var toggleTickerCount = (function(){
        var tickerCount = 1;    // 0 or 1   , private
        function toggleFn(){
            tickerCount = 1 - tickerCount;

            // 이전 데이터 삭제
            if(tickerCount === 0){
                var arr = document.getElementsByClassName("ticker");
                var len = arr.length;   // 배열의 요소를 지울때, len이 변동된다.
                for (var i = 0; i < len; i++) {
                    arr[0].remove();
                }
            }
            return tickerCount;
        }
        return toggleFn;
    }());
    function toggleTickerCount(){

    }
    /**
     * 04. 변수 정의
     */
    var tickerArr = [];     // length = 2
    var elementInx = 0;     // idx
    var value = "";
    var autoScroll;         // width autoScroll
    var intervalSeq = 0;  // run 함수 실행 순서
    var colCount = 0;       // opener의 new change, delete 로 인해 result에 추가된 col의 개수
    var __monitoringReloadCount__ = 0;  // opener 페이지가 reload된 횟수
    var blackList = [];         // JSON.stringify 가 안되는 Object를 보관해서 아예 감시에서 제외한다. ex) Window 객체
    var exceptList = [];             // blackList에는 포함되지 않았지만, 일시적으로 화면에서 제외할 항목(나중에 다시 볼 수 있다.)
    var intervalTime = 1000;        // setInterval 파라메터, 1초, 화면에서 변경 가능
    var M100 = "m100";                // content cell의 기본 width값
    var isWordWrap = "";

    var winKeyArr = Object.keys(window);    // 현재의 window객체 (opener의 window객체에서 제거할 항목)
    var pastObj = {};   // 바로 직전 과거 데이터

    /**
     * 05. window.localStorage 초기화 및 값이 있는 경우 적용
     */
    // exceptionList
    if(window.localStorage.getItem("exceptList") === null || window.localStorage.getItem("exceptList") === ""){
        exceptList = [];
    }else{
        // localStorage는 배열이라도 문자열로 저장됨.
        exceptList = window.localStorage.getItem("exceptList").split(",");
        // 화면 초기화
        for (var i = 0; i < exceptList.length; i++) {
            makeExceptSpan(exceptList[i]);  // 상단에 항목들이 추가됨
        }
    }
    // intervalTime
    if(window.localStorage.getItem("intervalTime") === null || window.localStorage.getItem("intervalTime") === ""){
        intervalTime = 1000;
    }else{
        intervalTime = window.localStorage.getItem("intervalTime");
        document.getElementById("__intervalTime__").value = intervalTime;
    }
    // autoScroll
    if(window.localStorage.getItem("autoScroll") === null || window.localStorage.getItem("autoScroll") === ""){
        autoScroll = true;  // default
    }else{
        autoScroll = window.localStorage.getItem("autoScroll") === "true";
    }
    document.getElementById("__scrollCheckbox__").checked = autoScroll;
    // cell width
    if(window.localStorage.getItem("M100") === null || window.localStorage.getItem("M100") === ""){
        M100 = "m100";
    }else{
        M100 = window.localStorage.getItem("M100");
        document.getElementById("__cellWidth100__").value = M100;
    }
    // wordWrap
    if(window.localStorage.getItem("isWordWrap") === null || window.localStorage.getItem("isWordWrap") === ""){
        isWordWrap = "";
        document.getElementById("__wordWrapCheckbox__").checked = false;
    }else{
        isWordWrap = window.localStorage.getItem("isWordWrap");
        document.getElementById("__wordWrapCheckbox__").checked = isWordWrap === "wordWrap";
    }    

    /**
     * 06. run
     */
    function run(){
        intervalSeq++;
        var startTime = new Date().getTime();

        var isChange = false;

        if(opener === null){
            // TODO
            //stop setInterval
            clearInterval(runInterval);
            console.error("opener is null");
            return;
        }
        var targetObj = opener.window;   

        // 페이지 신규로딩 확인
        if(typeof targetObj.__monitoringReloadCount__ === "undefined"){
            c(">>>> parent loading");
            targetObj.__monitoringReloadCount__ = ++__monitoringReloadCount__;
            blackList = []; // 초기화
            isChange = true;
        }

        var tKeyArr = Object.keys(targetObj);
        //console.log(tKeyArr.join())
        var newObj = {};
        for(i in tKeyArr){
            var k = tKeyArr[i];
            if(typeof targetObj[k] === "function"){
                continue;
            }
            if(blackList.indexOf(k) !== -1){
                continue; 
            }
            if(exceptList.indexOf(k) !== -1){
                continue; 
            }

            if(winKeyArr.indexOf(k) === -1){
                var tVal,status;

                try{
                    // 과거 데이터와 비교
                    if(Object.keys(pastObj).indexOf(k) === -1){
                        // 같은 키가 없으므로 새로 추가된 것
                        isChange = true;
                        status = "n";   //new
                        tVal = JSON.stringify(targetObj[k]);
                        // c(k+" 신규추가");
                    }else{
                        var pStr = pastObj[k].v;
                        var tStr = JSON.stringify(targetObj[k]);
                        if(pStr === tStr){
                            // 기존의 것과 키와 값이 같다.
                            // tVal = pastObj[k].v;
                            tVal = pastObj[k].v;  // 그래도 혹시 모르니 deep copy하자
                            status = "s";   //same
                            // c(k+" 완전히 동일");
                        }else{
                            // 키는 같지만 내용이 다름
                            isChange = true;
                            status = "c";
                            tVal = JSON.stringify(targetObj[k]);
                            // c(k+" 의 내용이 달라짐, v="+tVal);
                        }
                    }
                }catch(e){
                    if(e.toString() === "TypeError: Converting circular structure to JSON"){
                        c(e + ", key=" + k, " value=" + targetObj[k]);
                    }else{
                        c(e);
                    }
                    blackList.push(k);  // JSON.stringify 안되는 객체 이름은 따로 관리
                    continue;
                }
                // TODO deep copy
                newObj[k] = {s:status, v:tVal};
            }
        }

        // past에서 삭제된 데이터 확인(past에는 있었지만 target에서 사라진 경우)
        var deleteList = [];
        for(k in pastObj){
            if(tKeyArr.indexOf(k) === -1){
                // 사라진 데이터 !!
                c(k + " deleted");
                deleteList.push(k);
                isChange = true;
            }
        }

        pastObj = newObj;   // pastObj에 저장해서, 다음 run에서 비교값으로 사용함.

        // 변수에 변경사항이 있는 경우만 처리함
        if(isChange){
            var resultDiv =  document.getElementById("__monitoringResult__");

            for(k in newObj){
                if(newObj[k].s === "n"){
                    // new
                    var existDiv = document.getElementById(k);
                    var addSize = colCount;
                    if(existDiv === null){
                        // 신규 추가
                        var pDiv = document.createElement('div');
                        pDiv.id = k;
                        pDiv.className = 'm1';
                        resultDiv.appendChild(pDiv);
                    }else{
                        // 삭제 되지 않고, 계속 쌓아오던 항목들은 size결과가 0이다.
                        addSize = addSize - (existDiv.childElementCount - 1);
                    }
                    // 빈공간 채우기(중간에 신규 생성 또는 삭제후 다시 생성)
                    if(addSize > 0){
                        for (var index = 0; index < addSize; index++) {
                            if(index === 0 && existDiv === null){ // existDiv 가 null 이면 위에서 추가하지만, 새로추가한 경우만
                                // 좌측에 key 표시
                                createElement2('div', null, 'm2_head desc po_copy', k, k, removeRowFn);
                                // 우측에 key 표시
                                createElement2('div', "__right__"+k, 'm2_right desc po_copy', k, k, removeRowFn);
                            }else{
                                var iDiv = createElement2('div', null, 'm2 po ' + M100 + ' ' + isWordWrap, '', k, false);  // 빈공간
                                document.getElementById(k).insertBefore(iDiv, document.getElementById("__right__"+k));
                            }
                        }
                    }else if(document.getElementById(k).childElementCount === 0){   // 정상적인 경우 제일 처음
                        // 좌측에 key 표시
                        createElement2('div', null, 'm2_head desc po_copy', k, k, removeRowFn);
                        // 우측에 key 표시
                        createElement2('div', "__right__"+k, 'm2_right desc po_copy', k, k, removeRowFn);
                    }
                }
                
                /**
                 *  value
                 */
                var className = '';
                if(newObj[k].s === "n"){    // new
                    className = 'm2 m5 po ' + M100 + ' ' + isWordWrap;
                }else if(newObj[k].s === "c"){  // change
                    className = 'm2 m3 po ' + M100 + ' ' + isWordWrap;
                }else{  // same
                    className = 'm2 po ' + M100 + ' ' + isWordWrap;
                }
                
                if(isWordWrap === "wordWrap"){
                    value = beautyContentWithPre(newObj[k].v);
                }else{
                    value = newObj[k].v;
                }                    
                var iDiv = createElement2('div', null, className, value, k, contentClickFn, false);
                // 우측 description의 좌측 insert
                document.getElementById(k).insertBefore(iDiv, document.getElementById("__right__"+k));                

            }

            // 삭제처리
            if(deleteList.length > 0){
                for(i in deleteList){
                    var iDiv = createElement2('div', null, 'm2 m4 po ' + M100 + ' ' + isWordWrap, 'deleted', deleteList[i], contentClickFn, false);
                    document.getElementById(deleteList[i]).insertBefore(iDiv, document.getElementById("__right__"+deleteList[i]));
                }
            }

            // interval
            var iDiv = createElement2('div', null, 'm2 po ' + M100 + ' ' + isWordWrap, intervalSeq, '__monitoringInterval__', contentClickFn, false);
            document.getElementById("__monitoringInterval__").insertBefore(iDiv, document.getElementById("__right__monitoringInterval__"));
            // date
            var myDate = new Date();
            var dateStr = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + ", " + myDate.getMilliseconds() + ", " + (myDate.getTime() - startTime) + "ms";
            var iDiv = createElement2('div', null, 'm2 po ' + M100 + ' ' + isWordWrap, dateStr, '__monitoringTime__', contentClickFn, false);
            document.getElementById("__monitoringTime__").insertBefore(iDiv, document.getElementById("__right__monitoringTime__"));

            // 매회
            if(colCount === 0){
                colCount += 2;
            }else{
                colCount++;
            }
            windowWidthResize();

            // if(colCount === 2){
            //     // __monitoringReloadCount__ 위로 올리기 (1회)
            //     document.getElementById("__monitoringResult__").insertBefore(document.getElementById("__monitoringReloadCount__"), document.getElementById("__monitoringInterval__").nextSibling);

            //     // style을 직접 주입해야 다음에 계속 사용가능
            //     // document.getElementById("__monitoringResult__").style.width = "100px";
            // }else{
            //     // document.getElementById("__monitoringResult__").style.width = parseInt(document.getElementById("__monitoringResult__").style.width) + 100 + "px";
            // }

            //scroll 처리
            /*
                htmlMain.scrollWidth : 스크롤 포함해서 전체 width
                htmlMain.offsetWidth : 스크롤 제외한 width
                htmlMain.scrollLeft : 사용자의 스크롤 위치, 기본 0, 제일 마지막은 htmlMain.scrollWidth - htmlMain.offsetWidth 과 같다.
            */
            scrollAutoLast();

            // 마지막 실행한 유효한 intervalSeq
            document.getElementById("__monitoringintervalSeqValid__").innerHTML = intervalSeq;
        }   // end of if(isChange)


        document.getElementById("__monitoringintervalSeq__").innerHTML = intervalSeq;
    }   // end of run
    
    /**
     * 기타 event 함수들
     */
    var isStart = false;
    var runInterval;
    function startIntervalFn(){
        if(opener !== null){
            if(!isStart){
                isStart = true;
                runInterval = setInterval(run, intervalTime);   // 1초 주기
            }else{
                // 이미 시작했음
                return;
            }
        }else{
            console.error("opener is null");
        }
    }
    function stopIntervalFn(){
        if(isStart){
            isStart = false;
            clearInterval(runInterval);
        }else{
            // 이미 중지됨
            return;
        }
    }
    // textarea에 출력해준다.
    function contentClickFn(){
        // div내에 pre가 들어있는 경우 제거한다.
        var v = removePre(this.innerHTML);
        c2(beautyContent(v));
    }
    function removePre(str){
        str = str.replace("<pre>", "");
        str = str.replace("</pre>", "");
        
        str = str.replace(/<span class="ht1">/g, "");
        str = str.replace(/<span class="ht2">/g, "");
        str = str.replace(/<\/span>/g, "");

        console.log(str);
        return str;
    }
    function beautyContent(content){
        try{
            var obj = JSON.parse(content);
            if(obj instanceof Object){
                return JSON.stringify(obj, null, 4);
            }else{
                return content;
            }
        }catch(e){
            // parse 에러일때
            return content;
        }        
    }
    function beautyContentWithPre(content){
        try{
            var obj = JSON.parse(content);
            if(obj instanceof Object){
                return "<pre>" + JSON.stringify(obj, null, 4) + "</pre>";
            }else{
                return content;
            }
        }catch(e){
            // parse 에러일때
            return content;
        }        
    }
    function autoScrollFn(){
        if(this.checked){
            autoScroll = true;
            scrollAutoLast();
        }else{
            autoScroll = false;
        }
        window.localStorage.setItem("autoScroll", autoScroll);
    }
    function scrollAutoLast(){
        var htmlMain = document.getElementsByTagName("html")[0];
        if(autoScroll){
            htmlMain.scrollLeft = htmlMain.scrollWidth - htmlMain.offsetWidth;
        }
    }
    function wordWrapFn(){
        // 기존에 생성된 cell의 class를 변경해주어야 한다.
        var m2Cells = document.getElementsByClassName("m2");

        if(this.checked){
            isWordWrap = "wordWrap";

            for (var i = 0; i < m2Cells.length; i++) {
                m2Cells[i].classList.add("wordWrap");
                m2Cells[i].innerHTML = beautyContentWithPre(m2Cells[i].innerHTML);
            }        
        }else{
            isWordWrap = "";

            for (var i = 0; i < m2Cells.length; i++) {
                m2Cells[i].classList.remove("wordWrap");
                m2Cells[i].innerHTML = removePre(m2Cells[i].innerHTML);
            }        
        }
        window.localStorage.setItem("isWordWrap", isWordWrap);
        // location.href = location.href;   // 대신

    }    
    function scrollEventFn(){
        // textarea 위치를 자동으로 조절해줌
        document.getElementById("__monitoringTextarea__").style.left = document.getElementsByTagName("html")[0].scrollLeft + "px";
    }
    function removeRowFn(){
        this.parentElement.style.display = "none";
        var k = this.innerHTML;
        exceptList.push(k);
        window.localStorage.setItem("exceptList", exceptList);   // 새로 갱신

        makeExceptSpan(k);
    }
    function makeExceptSpan(k){
        var iDiv = document.createElement("span");
        iDiv.className = "exceptionItem po_copy";
        iDiv.innerHTML = k;
        iDiv.addEventListener("click", function(){
            iDiv.parentElement.removeChild(iDiv);
            exceptList.splice(exceptList.indexOf(k), 1);
            window.localStorage.setItem("exceptList", exceptList);   // 새로 갱신

            try{
                document.getElementById(k).style.display = "block";;
            }catch(e){
                // 기존 localStorage에 저장되었다가, 페이지 시작때부터 생성된 경우 객체가 없을 수도 있다.
                console.log(e.message);
            }
        });
        document.getElementById("exceptListSpan").appendChild(iDiv);        
    }
    function intervalChangeFn(){
        intervalTime = this.value;
        window.localStorage.setItem("intervalTime", intervalTime);
        stopIntervalFn();
        startIntervalFn();
    }
    function cellWidthChangeFn(){
        M100 = this.value;
        window.localStorage.setItem("M100", M100);
        // location.href = location.href;   // 대신

        // 기존에 생성된 cell의 width를 변경해주어야 한다.
        var m2Cells = document.getElementsByClassName("m2");
        for (var i = 0; i < m2Cells.length; i++) {
            // TODO 한번에 할 수 없나???
            m2Cells[i].classList.remove("m20");
            m2Cells[i].classList.remove("m50");
            m2Cells[i].classList.remove("m100");
            m2Cells[i].classList.remove("m200");
            m2Cells[i].classList.remove("m300");
            m2Cells[i].classList.remove("m400");
            m2Cells[i].classList.remove("m500");
            m2Cells[i].classList.add(M100);
        }
        windowWidthResize();
    }
    function windowWidthResize(){
        // 100은 m2의 값, 400은 left, right의 합.
        //document.getElementById("__monitoringResult__").style.width = 100 * (colCount - 1) + 400 + "px";
        // m100 -> 100        
        document.getElementById("__monitoringResult__").style.width = Number(M100.replace("m", "")) * (colCount - 1) + 400 + "px";
    }
    function diffFn(){
        try{
            // console.log(tickerArr[0], tickerArr[1]);
            var arr = document.getElementsByClassName("m2");
            var selectedEle = [];   // lenght = 2;
            for (var i = 0; i < arr.length; i++) {
                if(Number(arr[i].getAttribute("idx")) === tickerArr[0]){
                    selectedEle[0] = arr[i];
                }
                if(Number(arr[i].getAttribute("idx")) === tickerArr[1]){
                    selectedEle[1] = arr[i];
                }                        
            }
            if(!selectedEle[0] || !selectedEle[1]){
                c2("firstE or secondE is undefined.");
                console.log(selectedEle[0], selectedEle[1]);
                return;
            }
            
            var innerHtmlsWithoutPre = [];  // innerHTML 임시 보관, 마지막에 다시 사용할 예정
            var objs = [];
            for (var i = 0; i < selectedEle.length; i++) {
                var v = selectedEle[i].innerHTML;
                v = removePre(v);
                innerHtmlsWithoutPre[i] = v;
    
                objs[i] = JSON.parse(v);
            }
    
            if(!objs[0] instanceof Object || !objs[1] instanceof Object){
                c2("objs is not Object.");
                console.log("objs is not Object.");
                return;
            }
            if(objs[0] instanceof Array || objs[1] instanceof Array){
                c2("objs is Array. diff ignore...");
                console.log("objs is Array. diff ignore...");
                return;                
            }

            // diff
            console.log(objs);
            var diff_new = [];
            var diff_delete = [];
            var diff_change = [];
            var firstKeyArr = Object.keys(objs[0]);
            var secondKeyArr = Object.keys(objs[1]);
            for(k in objs[1]){ // second
                if(typeof k !== "string"){
                    // string key가 아닌 경우 pass
                    c(k + " is not a string key.");
                    continue;
                }

                if(firstKeyArr.indexOf(k) === -1){
                    // new key
                    diff_new.push(k);
                }else{
                    var pStr = JSON.stringify(objs[0][k]);
                    var tStr = JSON.stringify(objs[1][k]);
                    if(pStr === tStr){
                        // 기존의 것과 키와 값이 같다. (무시)
                    }else{
                        // 키는 같지만 내용이 다름
                        diff_change.push(k);
                    }                
                }
            }
            // key 가 삭제된 경우
            for(k in objs[0]){  // first
                if(typeof k !== "string"){
                    // string key가 아닌 경우 pass
                    c(k + " is not a string key.");
                    continue;
                }                
                if(secondKeyArr.indexOf(k) === -1){
                    // 사라진 데이터 !!
                    diff_delete.push(k);
                }
            }        
            c2();
            c2("new key="+diff_new)
            c2("changed key="+diff_change)
            c2("deleted key="+diff_delete);

            // new
            for (var i = 0; i < diff_new.length; i++) {
                // second obj
                objs[1]['<span class=\'ht1\'>' + diff_new[i] + '</span>'] = objs[1][diff_new[i]];
                delete objs[1][diff_new[i]];
            }
            // change
            for (var i = 0; i < diff_change.length; i++) {
                // first obj
                objs[0]['<span class=\'ht2\'>' + diff_change[i] + '</span>'] = objs[0][diff_change[i]];
                delete objs[0][diff_change[i]];                
                // second obj
                objs[1]['<span class=\'ht2\'>' + diff_change[i] + '</span>'] = objs[1][diff_change[i]];
                delete objs[1][diff_change[i]]; 
            }
            // delete (시간의 흐름상 new와 delete는 같은 색상으로 표시)
            for (var i = 0; i < diff_delete.length; i++) {
                // first obj
                objs[0]['<span class=\'ht1\'>' + diff_delete[i] + '</span>'] = objs[0][diff_delete[i]];
                delete objs[0][diff_delete[i]];                                
            }
            // // new
            // for (var i = 0; i < diff_new.length; i++) {
            //     // second obj
            //     innerHtmlsWithoutPre[1] = innerHtmlsWithoutPre[1].replace(diff_new[i], '<span class=\'ht1\'>' + diff_new[i] + '</span>');
            // }
            // // change
            // for (var i = 0; i < diff_change.length; i++) {
            //     // first obj
            //     innerHtmlsWithoutPre[0] = innerHtmlsWithoutPre[0].replace(diff_change[i], '<span class=\'ht2\'>' + diff_change[i] + '</span>');
            //     // second obj
            //     innerHtmlsWithoutPre[1] = innerHtmlsWithoutPre[1].replace(diff_change[i], '<span class=\'ht2\'>' + diff_change[i] + '</span>');
            // }
            // // delete
            // for (var i = 0; i < diff_delete.length; i++) {
            //     // first obj
            //     innerHtmlsWithoutPre[0] = innerHtmlsWithoutPre[0].replace(diff_delete[i], '<span class=\'ht3\'>' + diff_delete[i] + '</span>');
            // }

            // 다시 주입
            // selectedEle[0].innerHTML = "<pre>" + innerHtmlsWithoutPre[0] + "</pre>";
            // selectedEle[1].innerHTML = "<pre>" + innerHtmlsWithoutPre[1] + "</pre>";
            selectedEle[0].innerHTML = "<pre>" + JSON.stringify(objs[0], null, 4) + "</pre>";
            selectedEle[1].innerHTML = "<pre>" + JSON.stringify(objs[1], null, 4) + "</pre>";


        }catch(e){
            c2(e);
            console.log(e);
        }
    }
    document.getElementById("__monitoringStartButton__").addEventListener("click", startIntervalFn);
    document.getElementById("__monitoringStopButton__").addEventListener("click", stopIntervalFn);
    document.getElementById("__scrollCheckbox__").addEventListener("change", autoScrollFn);
    document.getElementById("__wordWrapCheckbox__").addEventListener("change", wordWrapFn);
    document.getElementById("__intervalTime__").addEventListener("change", intervalChangeFn);
    document.getElementById("__cellWidth100__").addEventListener("change", cellWidthChangeFn);
    document.addEventListener("scroll", scrollEventFn);

    /**
     *  시작
     */
    opener.__monitoringReloadCount__ = 0; // 초기화
    startIntervalFn();
}());