

var rnum = Math.floor(Math.random() * 48) + 1; // 난수 생성

while (true) { // 전체 반복

    while (true) { // 숫자 입력 반복
        var n = +prompt('~~~~~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~~~~~~\n               [ 1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!! ]');
        var cnt = 5; // 기회

        if (n < 0 || n > 50 || n === '') { // 숫자 지정 범위 미만/초과 시
            alert('범위 안의 숫자를 입력!!!!');
            break;
        }

        while (true) {

            while (true) {
                
                while (true) {
                    cnt--;

                    if (rnum > n) {
                        alert('UP!!!!');
                        break;
                    } else if (rnum < n) {
                        alert('DOWN!!!!');
                        break;
                    } else {
                        alert('딩동댕~~~~ !!');
                        break;
                    }
                }

                alert(`기회가 ${cnt}번 남았습니다`);
                if (cnt === 0) {
                    alert('기회를 모두 소진했습니다. GAME OVER!!');
                    break;
                }

                break;
            }
            break;
        }

    }
}