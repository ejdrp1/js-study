// 나머지 연산
console.log(27 % 5); // 2

// 뒤에 숫자가 더 크면 앞의 숫자가 나머지
console.log(4 % 10); // 4

// console.log(77 % 0); // NaN
console.log(0 % 77); // 0

// 거듭제곱 연산
var num = 2;
console.log(num ** 3); // 2의 3제곱

// 증감 연산자
var x = 3;  // 3
x++;        // 4
++x;        // 4
x--;        // 4
--x;        // 3

console.log(`x: ${x}`);

// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++;

console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3;

console.log(`n3: ${n3}, n4: ${n4}`);


x += 1; // x = x + 1;
x++;

x += 3; // x = x + 3;

var z = 10;
console.log(z -= 5);
console.log(z);