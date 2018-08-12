function customForEach(callback) {
    console.log("started");
    console.log(this);
    var length = 0;
    while (length < this.length) {
        var elem = this[length];
        var index = length;

        callback(elem, index);
        // callback.call(this, elem, index);
        // callback.apply(this, [elem, index]);
        length++;
    }

    console.log(Arr1);
    callback();
    console.log("end");
}

/* 클래스 내의 메서드를 볼수 있고, 정의 할때 prototype을 */
/* customForEach();  소괄호;을 해줘야 실행이 된다 */
Array.prototype.customForEach = customForEach;

var Arr1 = ["ace", "bear", "cat"];

Arr1.customForEach(function (elem, index) {
    console.log("processing");
    console.log("elem : ", elem);
    console.log("index : ", index);
});


// console.log(Array);



