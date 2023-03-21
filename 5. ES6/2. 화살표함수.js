// 함수 선언문 방식
// function multi(n1, n2) {
//     return n1 * n2;
// }


// 함수 표현식
// const multi = function(n1, n2) {
//     return n1 * n2;
// }


// 화살표 함수
const multi = (n1, n2) => n1 * n2;

const r1 = multi(10, 3);
console.log(`r1: ${r1}`);



// function sayHello(){
//     console.log('안녕하세요');
// }

// const sayHello = function(){
//     console.log('안녕하세요');
// }

const sayHello = () => console.log('안녕하세요');
sayHello();



const kim = {
  name: '김철수',
  age: 30,
  greeting: sayHello,
  dance: () => console.log('춤을 신나게 춥니다.'),
};

// console.log(kim.greeting());
kim.dance();


// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표함수 pow 작성해보세요.

const pow = n => n ** 2;
console.log(pow(4));


// 함수 선언문과 함수 표현식(화살표함수)의 차이
console.log('===================');

const r2 = sub(20, 10);

function sub(n1, n2) {
  return n1 - n2;
}
console.log(`r2: ${r2}`);

const r3 = divide(30, 6);
const divide = (n1, n2) => n1 / n2;
console.log(`r3: ${r3}`);