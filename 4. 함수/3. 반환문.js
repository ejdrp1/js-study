function add(n1, n2) {

    return n1 + n2; // 탈출문

    // console.log(`메롱`);

}

// 반환값 : 함수 호출 이후에 함수밖으로 전달되는 값
var r1 = add(5, 7);
console.log(r1);
console.log(r1, r1 * 2);

// 가장 안쪽에 있는 왼쪽부터 실행
var r2 = add(add(2, 3), add(add(3, 4), add(6, 2)));
console.log(`r2: ${r2}`);

// return이 없는 함수 (void 함수) / (consume 함수)
function multi(n1, n2) {
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}

// 리턴이 없는 함수는 변수에 담지 말고, 다른 함수에 인수로 전달 하지 않기
multi(10, 3);
// console.log(`r3: ${r3}`);

multi(add(4, 5), add(5, 5));

var r4 = add(multi(3, 2), 40);
console.log(`r4: ${r4}`);

// return 탈출문
function callName(nickName) {

    var prohibits = ['멍청이', '돌아이', '홍길동'];

    if (prohibits.includes(nickName)) {
        console.log(`잘못된 닉네임은 인사를 못해줘`);
        return;
    }

    console.log(`${nickName}님 안녕하세요!`);
}
callName('돌아이');






function stopLoop(flag) {

    while (true) {

        var flag = prompt('명령어를 입력하세요!');

        if (flag === '멈춰') {
            return;
        }
        alert(flag);
    }
    alert('수고용~~');
}
stopLoop();