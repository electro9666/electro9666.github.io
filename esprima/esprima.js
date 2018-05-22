// http://esprima.org/demo/parse.html
var __DEL__ = "###";
function checkArray(array, address){
    for (var i = 0; i < array.length; i++) {
        // checkTypeCommon(array[i], address + __DEL__ + i);
        checkTypeCommon(array[i], address);
    }
}
function checkObject(obj, address){
    // address (type은 항상 있다는 가정)
    if(typeof obj["id"] !== "undefined" && obj["id"] !== null && typeof obj["id"]["name"] !== "undefined"){
        var isAble = false;
        if(typeof obj["init"] !== "undefined" &&  obj["init"] !== null){ // init이 존재할 때, 예) var c = a.fn11(); 이런 경우 c를 캡처하지 않기 위해
            if(obj["init"]["type"] !== "CallExpression"){
                isAble = true;
            }
        }else{
            isAble = true;
        }
        if(isAble){
            // address = address + __DEL__ + obj["type"] + "(" + obj["id"]["name"] + ")"; 
            address = address + __DEL__ + obj["id"]["name"]; 
        }
    }else if(obj["type"] === "AssignmentExpression"){
        if(obj["left"]["type"] === "MemberExpression" && obj["right"]["type"] !== "CallExpression"){
            // address = address + __DEL__ + obj["type"] + "(" + loopMemberExpressionAddress(obj["left"]) + ")"; 
            address = address + __DEL__ + loopMemberExpressionAddress(obj["left"]); 
        }else if(obj["left"]["type"] === "Identifier" && obj["right"]["type"] !== "CallExpression"){
            // address = address + __DEL__ + obj["type"] + "(" + obj["left"]["name"] + ")"; 
            address = address + __DEL__ + obj["left"]["name"]; 
        }else{
            if(obj["type"] === "CallExpression"){
                address = address + __DEL__ + obj["type"];
            }
            // address = address + __DEL__ + obj["type"];
        }
    }else{
        if(obj["type"] === "CallExpression"){
            address = address + __DEL__ + obj["type"];
        }        
        // address = address + __DEL__ + obj["type"];
    }

    // loop
    for(key in obj){
        if(key === "type" && obj["type"] === "FunctionDeclaration"){
            console.log(address, "FunctionDeclaration", obj["id"]["name"]);
            functionAddressList.push({type:"fn", address:address});
        }else if(key === "type" && obj["type"] === "VariableDeclarator" && obj["init"] !== null && typeof obj["init"] !== "undefined" && obj["init"]["type"] === "FunctionExpression"){
            console.log(address, "FunctionExpression", obj["id"]["name"]);
            functionAddressList.push({type:"fn", address:address, isFn:true});
        }else if(key === "type" && obj["type"] === "AssignmentExpression" && obj["left"]["type"] === "MemberExpression" && obj["right"]["type"] === "FunctionExpression"){
            console.log(address, "AssignmentExpression", "function");
            functionAddressList.push({type:"fn", address:address, isFn:true});
        }else if(key === "type" && obj["type"] === "AssignmentExpression" && obj["left"]["type"] === "Identifier" && obj["right"]["type"] === "FunctionExpression"){
            console.log(address, "AssignmentExpression", obj["left"]["name"]);
            functionAddressList.push({type:"fn", address:address, isFn:true});
        }else if(key === "type" && obj["type"] === "CallExpression"){
            // call
            if(obj["callee"]["type"] === "Identifier"){
                console.log(address, "CallExpression", obj["callee"]["name"]);
                address = address.substring(0, address.lastIndexOf("###CallExpression"));
                functionAddressList.push({type:"call", address:address, call:obj["callee"]["name"]});   // TODO undefined될 수 있다.(예: handstudio1.js)
            }else if(obj["callee"]["type"] === "MemberExpression"){
                console.log(address, "callee", loopMemberExpressionValue(obj["callee"]));
                address = address.substring(0, address.lastIndexOf("###CallExpression"));
                functionAddressList.push({type:"call", address:address, call:loopMemberExpressionValue(obj["callee"])});
            }
        }else{
            checkTypeCommon(obj[key], address);
        }
    }
}
function loopMemberExpressionAddress(obj){
    return loopMemberExpressionValue(obj);
}
function loopMemberExpressionValue(obj){
    if(obj["type"] === "MemberExpression"){
        var re = loopMemberExpressionValue(obj["object"]);
        if(re !== ""){
            return re + "." + obj["property"]["name"];
        }else{
            return obj["property"]["name"];
        }
    }else if(obj["type"] === "Identifier"){
        return obj["name"];
    }
    return "";
}
function checkTypeCommon(value, address){
    var typeOf = typeof value;
    if(typeOf === "object"){
        if(value === null){
            // console.log("null");
        }else if(value instanceof Array){
            //console.log("array");
            checkArray(value, address);
        }else if(value instanceof Object){
            // console.log("object");
            checkObject(value, address)
        }
    }else if(typeOf === "string"){
        // console.log("string");
    }else if(typeOf === "number"){  // including NaN
        // console.log("number");
    }else if(typeOf === "undefined"){
        // console.log("undefined");
    }
}

// 시작
var functionAddressList = [];

// 초기값 넣어서 예외 처리
// var functionList = ["setItem", "getItem"];  // only function name
var functionList = [];  // only function name
var resultList = [];
checkArray(data["body"], "ROOT");

// functionList만들기
for (var i = 0; i < functionAddressList.length; i++) {
    var type = functionAddressList[i].type; 
    if(type === "fn"){
        var arr = functionAddressList[i].address.split("###");
        for (var j = 0; j < arr.length; j++) {
            functionList.push(arr[j]);
        }
    }
}
// making element
for (var i = 0; i < functionAddressList.length; i++) {
    var type = functionAddressList[i].type; 
    if(type === "fn"){
        var arr = functionAddressList[i].address.split("###");

        var id = "";
        for (var j = 0; j < arr.length; j++) {
            if(j === 0){
                id += arr[j];
            }else{
                id += "###" + arr[j];
            }

            if(document.getElementById(id) === null){

                var parent = id.substring(0, id.lastIndexOf("###"));

                var iDiv = document.createElement("div");
                iDiv.id = id;
                iDiv.className = "m1";

                if(functionAddressList[i].isFn){
                    iDiv.setAttribute("val", arr[j] + " = ");
                }else{
                    iDiv.setAttribute("val", arr[j]);
                }
                document.getElementById(parent).appendChild(iDiv);
            }else{
                //
            }
        }
    }else{
        // TODO : functionList에 있는 것만
        var call = functionAddressList[i].call;
        if(typeof call === "undefined"){
            console.error("typeof call is undefined.", functionAddressList[i]);
            continue;
        }
        var fnName = "";
        if(call.indexOf(".") !== -1){
            fnName = call.substring(call.lastIndexOf(".") + 1)
        }else{
            fnName = call;
        }

        if(functionList.indexOf(fnName) !== -1){
            // call
            var parent = functionAddressList[i].address;
            var iDiv = document.createElement("span");
            iDiv.className = "call"
            iDiv.innerHTML = call + "()";
            if(document.getElementById(parent) === null){   // TODO parent를 못 찾으면 못 넣는다.
                console.error(functionAddressList[i]);
            }else{
                document.getElementById(parent).appendChild(iDiv);
            }
        }
    }
}

// functionList다 다 만들어진 후 다시 실행
for (var i = 0; i < functionAddressList.length; i++) {
    var type = functionAddressList[i].type; 
    if(type === "call"){

    }
}

// 이름 넣기
var m1s = document.getElementsByClassName("m1");
for (var i = 0; i < m1s.length; i++) {
    var element = m1s[i];
    if(element.hasChildNodes() === 0){
        element.innerHTML = element.getAttribute("val") + "<br/>";
    }else{
        
        var iSpan = document.createElement("span");
        iSpan.innerHTML = element.getAttribute("val");
        element.insertBefore(iSpan, element.firstChild);

        var br = document.createElement("br");
        element.insertBefore(br, iSpan.nextSibling);
    }
    
}

// 함수 실행할때, 존재하는 것만.
// 함수 실행하는 위치를 잡을 수가 없다. > 미리 넣어놔야 하나? > array 순서를 매길까?
// 
/*
    call 함수는... 다음 케이스에서 안걸림...
    document.getElementsByTagName("body")[0].appendChild(pDiv);
    var a = b.appendChild(pDiv);
    // parent인 a를 못찾으면..ㅜㅜ;;
*/