/*자바스크립트는 기본형, 참조형이 아닌 원시값 과 객체로 구성되어있다.*/

/*객체 : {} 로 표현되고, 나머지는 원시값이다.*/

/* 원시값 : Number, String, boolean, null, undefined */

var num1 = 1;
var num2 = 1;

console.log("Number ==> ", num1==num2);

var str1 = "str";
var str2 = "str";

console.log("String ==> ", str1==str2);

var bool1 = true;
var bool2 = true;

console.log("boolean ==> ", bool1==bool2);

var obj1 = {};
var obj2 = {};
console.log("Object ==> ", obj1==obj2); /*false 일것이다*/