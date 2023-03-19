// 러시안 룰렛

while (true) { // 게임 시작

    // 참가할 인원 입력
    var playerOfNum = +prompt(`참가할 게임 인원 입력 [ 2 ~ 4명 ]`);

    // 플레이어 등록 배열
    var player = [];
    alert(`플레이어 이름을 등록합니다.`);
    while (true) {

        for (var i = 1; i <= playerOfNum; i++) {
            var playerNum = prompt(`${i}번 플레이어 이름:`);
            player.push(playerNum);
        }
        alert(`[${player}] 참가!`);

        if (player.length === playerOfNum) {
            break;
        }

    }
    // 참가 인원 범위 초과/미만 시
    if (`${playerOfNum}` < 2 || `${playerOfNum}` > 4) {
        alert(`참가할 게임 인원 수를 다시 입력하세요 [ 2 ~ 4명 ] `);
        continue;
    }

    // 실탄 배열
    var gun=[0, 0, 0, 0, 0, 0];

    // 실탄 입력
    var bullet= +prompt(`실탄 개수 (1 ~ 5개)`);

    // 실탄을 모두 소비하기 전까지 반복
    while (bullet != 0){

        // 실탄 배열안에 1부터 6까지의 난수 생성
        var gunIdx = Math.floor(Math.random() * 6);
        
        // 실탄 배열 [gunIdx]에 난수 0이 나오면
        // 0이 나온 [gunIdx]에 1을 대입 후 bullet(입력한 실탄 개수) 1개 감소
        if(gun[gunIdx]===0){
            gun[gunIdx]=1;
            bullet--;
        }

        

    }




}