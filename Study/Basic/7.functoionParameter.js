function fnParameterTest(element) {
    console.log("arguments : ", arguments);
    console.log("parameter : ", element);
}
// parameter 값을 추가적으로 넣어줘도 arguments를 이용하여 parameter를 처리할 수 있다.
var test = "Test";
fnParameterTest(test, "testParam");

// fnParameterTest();  //undefined


