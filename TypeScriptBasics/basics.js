var a = 4;
//a=5;
var b = "hello";
//b=3;
var c = 4;
var list = [1, 2, 3];
var dynamic;
dynamic = 3;
dynamic = "hello";
var flag = false;
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
