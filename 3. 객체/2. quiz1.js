/*
- 요구사항
1. 사용자에게 계정을 입력받으세요.
2. 입력된 계정이 존재하는 계정이 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 계정이 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "xxx님 환영합니다!"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
var userInfo = {
    userList: [{
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한'
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호'
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동'
        },
    ]
};


// 회원목록 배열
var uu = userInfo.userList;

while (true) { // 로그인을 성공할 때까지 반복

    // 계정 입력받기
    var inputAccount = prompt(`아이디를 입력하세요!`);

    // 회원목록을 반복하여 입력한 계정명과 일치하는 객체를 탐색
    var foundUser = null; // 로그인 시도하는 회원의 정보객체

    for (var user of userList) { // user는 변수, userList에서 꺼낸 값을 user에 저장
        if (inputAccount === user.account) { // 입력한 계정이 존재하는 계정이면
            foundUser = user; // user의 값을 foundUser에 저장
            break; // foundUser에 값이 저장되면 조건문에서 탈출
        }
    }

    // foundUser에는 로그인을 시도하는 회원의 정보가 들어있다.
    // 로그인을 시도하는 회원이 잘못된 계정을 입력하면 foundUser값이 null로 유지되어 있다.

    if (foundUser !== null) { // 회원가입은 되어 있는 상태

        // 비밀번호 검증
        var inputPassword = prompt(`비밀번호를 입력하세요!`);

        if (inputPassword === foundUser.password) { // 입력한 비밀번호가 존재하는 비밀번호와 같다면
            alert(`${foundUser.username}님 환영합니다~~!`); // 로그인된 회원이름을 출력
            break; // 로그인 성공 시 조건문에서 탈출
        } else { // 입력한 비밀번호가 존재하지 않다면
            alert(`비밀번호가 틀렸습니다.`); // 로그인 실패 시 출력
        }

    } else { // 회원가입이 되어 있지 않다면
        alert(`존재하지 않는 회원입니다.`); // 회원가입이 되어 있지 않다면 출력
    }
}