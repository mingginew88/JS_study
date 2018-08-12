var test = [1, 2, 3];

for (var i = 0; i < test.length; i++){
    console.log("index : ", i);
    console.log("elem : ", test[i]);
}

console.log("______________________");

test.forEach(function (elem, index) {
    console.log("index : ", index);
    console.log("elem : ", elem);
});
