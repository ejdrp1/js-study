// var player1='대한민국 LW 23TOTY 손흥민 130,000,000,000';
// var player2='벤제마';
// var player3='음바페';
// var player4='더브라위너';
// var player5='메시';
// var player6='쿠르투아';
// var player7='하키미';
// var player8='모드리치';
// var player9='벨링엄';
// var player10='반데이크';
// var player11='밀리탕';
// var player12='테오';


while (true) {

    while (true) {

        // 23TOTY 선수 목록
        var TOTY12 = Math.floor(Math.random() * 12) + 1;

        // 선수팩 개봉
        var open = +prompt(`[ 1. 1장 개봉 2. 모두 개봉 ]`);
        if(open <= 0 || open > 2){
            alert(`다시 입력하세요!`);
            break;
        }

        // 1장 개봉 선택 시
        if (open === 1) {

            if (TOTY12 === 1) {
                alert(`대한민국`);
                alert(`LW`);
                alert(`23TOTY`);
                alert(`손흥민 130,000,000,000`);
            } else if (TOTY12 === 2) {
                alert(`프랑스`);
                alert(`CF`);
                alert(`23TOTY`);
                alert(`벤제마 45,000,000,000`);
            } else if (TOTY12 === 3) {
                alert(`프랑스`);
                alert(`ST`);
                alert(`23TOTY`);
                alert(`음바페 35,000,000,000`);
            } else if (TOTY12 === 4) {
                alert(`벨기에`);
                alert(`CAM`);
                alert(`23TOTY`);
                alert(`더브라위너 28,000,000,000`);
            } else if (TOTY12 === 5) {
                alert(`아르헨티나`);
                alert(`RW`);
                alert(`23TOTY`);
                alert(`메시 28,000,000,000`);
            } else if (TOTY12 === 6) {
                alert(`벨기에`);
                alert(`GK`);
                alert(`23TOTY`);
                alert(`쿠르투아 20,000,000,000`);
            } else if (TOTY12 === 7) {
                alert(`모로코`);
                alert(`RB`);
                alert(`23TOTY`);
                alert(`하키미 7,000,000,000`);
            } else if (TOTY12 === 8) {
                alert(`크로아티아`);
                alert(`CM`);
                alert(`23TOTY`);
                alert(`모드리치 7,000,000,000`);
            } else if (TOTY12 === 9) {
                alert(`잉글랜드`);
                alert(`CM`);
                alert(`23TOTY`);
                alert(`벨링엄 6,900,000,000`);
            } else if (TOTY12 === 10) {
                alert(`네덜란드`);
                alert(`CB`);
                alert(`23TOTY`);
                alert(`반데이크 6,900,000,000`);
            } else if (TOTY12 === 11) {
                alert(`브라질`);
                alert(`CB`);
                alert(`23TOTY`);
                alert(`밀리탕 4,200,000,000`);
            } else {
                alert(`프랑스`);
                alert(`LB`);
                alert(`23TOTY`);
                alert(`테오 2,600,000,000`);
            }
            break;

        } else { // end selectedNumber1
            // 모두 개봉 선택 시
            while (true) {

                var open = '';
                var allOpen = +prompt('개봉할 카드의 개수를 입력하세요!');

                for (var selectCard = 0; selectCard < allOpen; selectCard++) {

                    // 가격 내림차순
                    // 첫 번째만 나라, 포지션, 클래스 출력

                    var TOTY12 = Math.floor(Math.random() * 12) + 1;

                    if (TOTY12 === 1) {
                        open += `23TOTY 손흥민 130,000,000,000`;
                    }
                    if (TOTY12 === 2) {
                        open += `23TOTY 벤제마 45,000,000,000`;
                    }
                    if (TOTY12 === 3) {
                        open += `23TOTY 음바페 35,000,000,000`;
                    }
                    if (TOTY12 === 4) {
                        open += `23TOTY 더브라위너 28,000,000,000`;
                    }
                    if (TOTY12 === 5) {
                        open += `23TOTY 메시 28,000,000,000`;
                    }
                    if (TOTY12 === 6) {
                        open += `23TOTY 쿠르투아 20,000,000,000`;
                    }
                    if (TOTY12 === 7) {
                        open += `23TOTY 하키미 7,000,000,000`;
                    }
                    if (TOTY12 === 8) {
                        open += `23TOTY 모드리치 7,000,000,000`;
                    }
                    if (TOTY12 === 9) {
                        open += `23TOTY 벨링엄 6,900,000,000`;
                    }
                    if (TOTY12 === 10) {
                        open += `23TOTY 반데이크 6,900,000,000`;
                    }
                    if (TOTY12 === 11) {
                        open += `23TOTY 밀리탕 4,200,000,000`;
                    }
                    if (TOTY12 === 12) {
                        open += `23TOTY 테오 2,600,000,000`;
                    }

                    open += '\n';
                } // end select openCardNumber
                alert(open);
                break;

            } // end selectedNumber2

        } // end selectedCard

    } // end openCard

} // end each openCard