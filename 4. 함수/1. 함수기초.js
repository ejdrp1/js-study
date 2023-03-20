/*
console.log(`김철수님 안녕하세요! 방가방가!`);
console.log(`오늘도 좋은 하루되세요~~~`);


console.log(`박영희님 안녕하세요! 방가방가!`);
console.log(`오늘도 좋은 하루되세요~~~`);


console.log(`김두한님 안녕하세요! 방가방가!`);
console.log(`오늘도 좋은 하루되세요~~~`);
*/


// 함수 정의 - 만든다는 의미
function happyGreeting(yourName) {
    console.log(`${yourName}님 안녕하세요! 방가방가!`);
    console.log(`오늘도 좋은 하루되세요~~~`);
}

// 함수 호출 - 사용한다는 의미
happyGreeting(`뽀로로`);
happyGreeting(`김두한`);

function makeLine() {
    console.log('========================');
}

for (var i = 0; i < 5; i++) {
    makeLine();
}

// 함수 사용 이유
// 1.재사용성
// 2.코드의 모듈화 = 유지보수에 도움
// 3. 함수의 역할 설명


// 원의 넓이를 자주 구한다.
// 원주율 * 반지름 ^ 2

function calAreaCircle(r) {
    var PI = 3.14159265;
    var area = PI * r ** 2;
    return area;
}

var r1 = calAreaCircle(5);
console.log(r1);

console.log(calAreaCircle(15));

var r3 = calAreaCircle(20);
console.log(r3);