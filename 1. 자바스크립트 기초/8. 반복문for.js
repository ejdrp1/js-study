var i = 1; // 1. 제어변수 선언
while (i <= 5;) { // 2. 조건식

    console.log('hello'); // 3. 반복실행

    i++ // 4. 증감식
}

// 횟수 지정 반복문 5바퀴 루프
for (var i = 1; i <= 5; i++) {
    console.log('hello');
}

var n = +prompt('양의 정수를 입력: ');
var resultMark = '';
for (var k = 1; k <= n; k++) {
    if (k % 2 === 1) {
        resultMark += '+';
    } else {
        resultMark += '-';
    }
}
alert(resultMark);