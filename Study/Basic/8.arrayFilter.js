var arr1 = [1, 2, 3, 5, 6, 8];


//filter : callback함수의 리턴값이 true인 결과값만 반환을 해준다.
var arr2 = arr1.filter(function(elem){
    return elem != undefined;
});

console.log(arr2);



