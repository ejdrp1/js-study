while (true) {


    alert(`[프리미어리그 BIG6 승점 비교 계산기]\n\n▶확인 / Enter키를 입력하면 다음 화면으로 넘어갑니다.◀`);

    let teamList = [];
    let firstTeam;
    let secondTeam;

    outer: while (true) {

        for (let i = 1; i < 2; i++) {
            firstTeam = prompt(`첫 번째팀을 입력해주세요 [최대 2팀]`);
            teamList.push(firstTeam);
            alert(`첫 번째팀 : [${firstTeam}]`);

            secondTeam = prompt(`두 번째팀을 입력해주세요 [최대 2팀]`);
            teamList.push(secondTeam);
            alert(`두 번째팀 : [${secondTeam}]`);

        }

        let inputTeam = prompt(`입력 : [${firstTeam}, ${secondTeam}]\n다시 입력 : ㅂㅂ\n\n▶확인 / Enter를 입력하시면 다음 화면으로 넘어갑니다.◀`);
        if (inputTeam === 'ㅂㅂ') {
            continue;
        } else {
            break outer;
        }

    }

    while (true) {

        let inputTeamRecord = 0;
        inputTeamRecord = prompt(`${firstTeam}의 전적 기록을 입력해주세요.\n\n▶확인 / Enter키를 입력하면 다음 화면으로 넘어갑니다.◀`);
        firstScoreCal();

        let quit = prompt(`계속하기 : Enter\n종료 : ㅂ`);
        if (`${quit}` === 'ㅂ') {
            break;
        } else {
            continue;
        }

    }

    function firstScoreCal() {

        while (true) {

            let winScore1; // 승리 횟수
            let drawScore1; // 무승부 횟수
            let loseScore1; // 패배 횟수

            let winScore2; // 승리 횟수
            let drawScore2; // 무승부 횟수
            let loseScore2; // 패배 횟수

            outer1: while (true) {

                // 승리 횟수 입력
                winScore1 = +prompt(`${firstTeam}의 승리한 경기 수를 입력하세요 [최대 38경기]`);
                if (winScore1 === 38) {
                    alert(`최대 경기 수를 입력하셨습니다. 승점 출력 화면으로 넘어갑니다\n현재 입력 : ${winScore1}승`);
                    drawScore1 = 0;
                    loseScore1 = 0;
                    break outer1;
                } else if (winScore1 >= 39) {
                    alert(`승리한 경기의 수가 ${winScore1-38} 초과되었습니다. 다시 입력해주세요 [최대 38경기]\n현재 입력: [${winScore1}]승`);
                    continue;
                }

                // 무승부 횟수 입력
                while (true) {

                    drawScore1 = +prompt(`${firstTeam}의 무승부한 경기 수를 입력하세요 [최대 38경기]\n현재 입력 : [${winScore1}]승`);
                    if (drawScore1 === 38) {
                        alert(`최대 경기 수를 입력하셨습니다. 승점 출력 화면으로 넘어갑니다\n현재 입력 : ${winScore1}승 ${drawScore1}무`);
                        loseScore1 = 0;
                        break outer1;
                    } else if (winScore1 + drawScore1 > 38) {
                        loseScore1 = 0;
                        alert(`이미 최대 경기 수를 초과하였습니다. 다음 화면으로 넘어갑니다\n현재 입력 : ${winScore1}승 ${drawScore1}무`);
                        break outer1;
                    } else {
                        loseScore1 = 0;
                        break;
                    }

                }

                // 패배 횟수 입력
                while (true) {

                    loseScore1 = +prompt(`${firstTeam}의 패배한 경기 수를 입력하세요 [최대 38경기]\n현재 입력 : [${winScore1}]승 [${drawScore1}]무`);
                    if (loseScore1 === 38) {
                        alert(`최대 경기 수를 입력하셨습니다. 승점 출력 화면으로 넘어갑니다\n현재 입력 : [${winScore1}]승 [${drawScore1}]무 [${loseScore1}]패`);
                        break outer1;
                    } else if (winScore1 + drawScore1 + loseScore1 > 38) {
                        alert(`최대 경기 수를 초과하였습니다. 다시 입력해주세요\n현재 입력 : [${winScore1}]승 [${drawScore1}]무 [${loseScore1}]패`);
                        continue;
                    } else if (winScore1 + drawScore1 + loseScore1 === 0) {
                        alert(`입력값을 다시 확인해주세요.\n현재 입력 : [${winScore1}]승 [${drawScore1}]무 [${loseScore1}]패`);
                        break;
                    } else {
                        break outer1;
                    }
                }
            }

            outer2: while (true) {

                // 승리 횟수 입력
                winScore2 = +prompt(`${secondTeam}의 승리한 경기 수를 입력하세요 [최대 38경기]`);
                if (winScore2 === 38) {
                    alert(`최대 경기 수를 입력하셨습니다. 승점 출력 화면으로 넘어갑니다\n현재 입력 : ${winScore2}승`);
                    drawScore2 = 0;
                    loseScore2 = 0;
                    break outer2;
                } else if (winScore2 >= 39) {
                    alert(`승리한 경기의 수가 ${winScore2-38} 초과되었습니다. 다시 입력해주세요 [최대 38경기]\n현재 입력: [${winScore2}]승`);
                    continue;
                }

                // 무승부 횟수 입력
                while (true) {

                    drawScore2 = +prompt(`${secondTeam}의 무승부한 경기 수를 입력하세요 [최대 38경기]\n현재 입력 : [${winScore2}]승`);
                    if (drawScore2 === 38) {
                        alert(`최대 경기 수를 입력하셨습니다. 승점 출력 화면으로 넘어갑니다\n현재 입력 : ${winScore2}승 ${drawScore2}무`);
                        loseScore2 = 0;
                        break outer2;
                    } else if (winScore2 + drawScore2 > 38) {
                        loseScore2 = 0;
                        alert(`이미 최대 경기 수를 초과하였습니다. 다음 화면으로 넘어갑니다\n현재 입력 : ${winScore2}승 ${drawScore2}무`);
                        break outer2;
                    } else {
                        loseScore2 = 0;
                        break;
                    }

                }

                // 패배 횟수 입력
                while (true) {

                    loseScore2 = +prompt(`${secondTeam}의 패배한 경기 수를 입력하세요 [최대 38경기]\n현재 입력 : [${winScore2}]승 [${drawScore2}]무`);
                    if (loseScore2 === 38) {
                        alert(`최대 경기 수를 입력하셨습니다. 승점 출력 화면으로 넘어갑니다\n현재 입력 : [${winScore2}]승 [${drawScore2}]무 [${loseScore2}]패`);
                        break outer2;
                    } else if (winScore2 + drawScore2 + loseScore2 > 38) {
                        alert(`최대 경기 수를 초과하였습니다. 다시 입력해주세요\n현재 입력 : [${winScore2}]승 [${drawScore2}]무 [${loseScore2}]패`);
                        continue;
                    } else if (winScore2 + drawScore2 + loseScore2 === 0) {
                        alert(`입력값을 다시 확인해주세요.\n현재 입력 : [${winScore2}]승 [${drawScore2}]무 [${loseScore2}]패`);
                        break;
                    } else {
                        break outer2;
                    }
                }
            }

            // 입력한 숭, 무, 패 총합
            let over1 = (winScore1 + drawScore1 + loseScore1);

            // 승, 무, 패를 입력한 횟수가 최대 경기수를 초과했을 때
            if (over1 >= 39) {
                alert(`총 경기의 수가 ${over1-38} 초과되었습니다. 다시 입력해주세요 [총 38경기]\n현재 입력: [${winScore1}]승 [${drawScore1}]무 [${loseScore1}]패`);
                continue;
            }

            function total1(winScore1, drawScore1, loseScore1) {
                let win1 = winScore1 * 3;
                let draw1 = drawScore1;
                let lose1 = loseScore1 * 0;

                let total1 = (+win1 + +draw1 + +lose1);

                let sum1 = total1;

                return sum1;
            }

            // 입력한 숭, 무, 패 총합
            let over2 = (winScore2 + drawScore2 + loseScore2);

            // 승, 무, 패를 입력한 횟수가 최대 경기수를 초과했을 때
            if (over2 >= 39) {
                alert(`총 경기의 수가 ${over2-38} 초과되었습니다. 다시 입력해주세요 [총 38경기]\n현재 입력: [${winScore2}]승 [${drawScore2}]무 [${loseScore2}]패`);
                continue;
            }

            function total2(winScore2, drawScore2, loseScore2) {
                let win2 = winScore2 * 3;
                let draw2 = drawScore2;
                let lose2 = loseScore2 * 0;

                let total2 = (+win2 + +draw2 + +lose2);

                let sum2 = total2;

                return sum2;
            }
            let changeBox = 0;
            let finalTotal1 = total1(winScore1, drawScore1, loseScore1);
            let finalTotal2 = total2(winScore2, drawScore2, loseScore2);

            if (finalTotal2 > finalTotal1) {
                changeBox = finalTotal1;
                finalTotal1 = finalTotal2;
                finalTotal2 = changeBox;
                alert(`[${firstTeam}]의 전적 기록 : [${winScore1}]승 [${drawScore1}]무 [${loseScore1}]패\n총 승점 : [${total1(`${winScore1}`,`${drawScore1}`,`${loseScore1}`)}]점\n\n[${secondTeam}]의 전적 기록 : [${winScore2}]승 [${drawScore2}]무 [${loseScore2}]패\n총 승점 : [${total2(`${winScore2}`,`${drawScore2}`,`${loseScore2}`)}]점\n\n\n[${secondTeam}]의 승점이 [${firstTeam}]의 승점보다 [${total2(`${winScore2}`,`${drawScore2}`,`${loseScore2}`) - total1(`${winScore1}`,`${drawScore1}`,`${loseScore1}`)}]점 더 높습니다.`);
            } else {
                alert(`[${firstTeam}]의 전적 기록 : [${winScore1}]승 [${drawScore1}]무 [${loseScore1}]패\n총 승점 : [${total1(`${winScore1}`,`${drawScore1}`,`${loseScore1}`)}]점\n\n[${secondTeam}]의 전적 기록 : [${winScore2}]승 [${drawScore2}]무 [${loseScore2}]패\n총 승점 : [${total2(`${winScore2}`,`${drawScore2}`,`${loseScore2}`)}]점\n\n\n[${firstTeam}]의 승점이 [${secondTeam}]의 승점보다 [${total1(`${winScore1}`,`${drawScore1}`,`${loseScore1}`) - total2(`${winScore2}`,`${drawScore2}`,`${loseScore2}`)}]점 더 높습니다.`);
            }
            break;

        }

    }

}