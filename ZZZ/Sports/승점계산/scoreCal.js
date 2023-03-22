while (true) {

    alert(`[승점계산기]\n승 : 3점\n무 : 1점\n패 : 0점\n\n▶확인/Enter키를 입력하면 다음 화면으로 넘어갑니다.◀`);

    let winScore; // 승리 횟수
    let drawScore; // 무승부 횟수
    let loseScore; // 패배 횟수

    outer: while (true) {

        // 승리 횟수 입력
        winScore = +prompt(`승리한 경기 수를 입력하세요 [최대 38경기]`);
        if (winScore === 38) {
            alert(`최대 경기 수를 입력하셨습니다. 승점 출력 화면으로 넘어갑니다\n현재 입력 : ${winScore}승`);
            drawScore = 0;
            loseScore = 0;
            break outer;
        } else if (winScore >= 39) {
            alert(`승리한 경기의 수가 ${winScore-38} 초과되었습니다. 다시 입력해주세요 [최대 38경기]\n현재 입력: [${winScore}]승`);
            continue;
        }

        // 무승부 횟수 입력
        while (true) {

            drawScore = +prompt(`무승부한 경기 수를 입력하세요 [최대 38경기]\n현재 입력 : [${winScore}]승`);
            if (drawScore === 38) {
                alert(`최대 경기 수를 입력하셨습니다. 승점 출력 화면으로 넘어갑니다\n현재 입력 : ${winScore}승 ${drawScore}무`);
                loseScore = 0;
                break outer;
            } else if (winScore + drawScore > 38) {
                loseScore = 0;
                alert(`이미 최대 경기 수를 초과하였습니다. 다음 화면으로 넘어갑니다\n현재 입력 : ${winScore}승 ${drawScore}무`);
                break outer;
            } else {
                loseScore = 0;
                break;
            }

        }

        // 패배 횟수 입력
        while (true) {

            loseScore = +prompt(`패배한 경기 수를 입력하세요 [최대 38경기]\n현재 입력 : [${winScore}]승 [${drawScore}]무`);
            if (loseScore === 38) {
                alert(`최대 경기 수를 입력하셨습니다. 승점 출력 화면으로 넘어갑니다\n현재 입력 : [${winScore}]승 [${drawScore}]무 [${loseScore}]패`);
                break outer;
            } else if (winScore + drawScore + loseScore > 38) {
                alert(`최대 경기 수를 초과하였습니다. 다시 입력해주세요\n현재 입력 : [${winScore}]승 [${drawScore}]무 [${loseScore}]패`);
                continue;
            } else if(winScore + drawScore + loseScore === 0){
                alert(`입력값을 다시 확인해주세요.\n현재 입력 : [${winScore}]승 [${drawScore}]무 [${loseScore}]패`);
                break;
            } else {
                break outer;
            }
        }
    }
    // 입력한 숭, 무, 패 총합
    let over = (winScore + drawScore + loseScore);

    // 승, 무, 패를 입력한 횟수가 최대 경기수를 초과했을 때
    if (over >= 39) {
        alert(`총 경기의 수가 ${over-38} 초과되었습니다. 다시 입력해주세요 [총 38경기]\n현재 입력: [${winScore}]승 [${drawScore}]무 [${loseScore}]패`);
        continue;
    } 

    function total(winScore, drawScore, loseScore) {
        let win = winScore * 3;    
        let draw = drawScore;      
        let lose = loseScore * 0;

        let total = (+win + +draw + +lose);

        let sum = total;

        return sum;
    }

    alert(`결과 : [${winScore}]승 [${drawScore}]무 [${loseScore}]패\n승점 : [${total(`${winScore}`,`${drawScore}`,`${loseScore}`)}]점`);

}