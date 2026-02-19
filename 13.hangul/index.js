/**
 * 작성날짜: 2018-05-31
 * 유니코드 변환
 * mac: NFD -> windows: NFC
 * 
 * 출처: 
 * https://namu.wiki/w/%ED%98%84%EB%8C%80%20%ED%95%9C%EA%B8%80%20NFC%20%E2%86%94%20NFD%20%EB%B3%80%ED%99%98%20%ED%85%8C%EC%9D%B4%EB%B8%94/%E3%84%B1
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
 * 
 */
function ch1(){
    var a = document.getElementById("t1");
    if(a === null || a === undefined || a === ""){
        return;
    }
    // var original = "개발리소스";        // 맥에서 만든 String
    var original = a.value;
    console.log(original);

    var b = getUnicode(original);
    console.log("b", b);
    document.getElementById("d1").innerHTML = b;
    b = eval("'" + b + "'");    // eval로 안하면 유니코드가 아닌 그냥 \u 글자로 인식된다.

    c = b.normalize("NFC");
    var t2 = document.getElementById("t2");
    t2.value = c.trim();
    
    document.getElementById("d2").innerHTML = getUnicode(c);
    
    t2.focus();
    t2.select();

    // clipboard copy
    if(document.getElementById("chk").checked){
        document.execCommand("copy");
    }

    // test
    // var str = "\u1100\u1162\u1107\u1161\u11af\u1105\u1175\u1109\u1169\u1109\u1173";
    // console.log(str.normalize("NFC"));
}

function getUnicode(original){
    var b = "";
    for (let index = 0; index < original.length; index++) {
        var numString = original[index].charCodeAt(0).toString(16);
        console.log(numString);
        if(numString.length === 1){
            numString = "000" + numString;
        }else if(numString.length === 2){
            numString = "00" + numString;
        }else if(numString.length === 3){
            numString = "0" + numString;
        }
        b += "\\u" + numString;
    }
    return b;
}