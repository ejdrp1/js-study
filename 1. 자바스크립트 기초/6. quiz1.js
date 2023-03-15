// x ~ y까지의 누적합

var x = +prompt('첫번째 숫자를 입력!');
var y = +prompt('두번째 숫자를 입력!');

if (x > y) {
    // swap
    var t;
    t = x;
    x = y;
    y = t;
}

var total = 0;
var n = x;

while (n <= y) {

    total += n;

    n++;
}

alert(`${x} ~ ${y}까지의 누적합 : ${total}`);