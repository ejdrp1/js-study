while (true) {

    var Upgrade = +prompt(` [ 장비 강화 시작 : (1)번을 입력해주세요 ]\n[모든 확률 50%, 강화 실패시 처음 화면으로 돌아갑니다!]`);

    // 난이도 선택
    var easy;
    var normal;
    var hard;
    


    
    if (Upgrade === 1) {

        while (true) {

            var Star1 = Math.floor(Math.random() * 2) + 1;

            if (Star1 === 1) {
                alert(`2성 강화 성공!`);
                var Star2 = Math.floor(Math.random() * 2) + 1;

                if (Star2 === 1) {
                    alert(`3성 강화 성공!`);
                    var Star3 = Math.floor(Math.random() * 2) + 1;

                    if (Star3 === 1) {
                        alert(`4성 강화 성공!`);
                        var Star4 = Math.floor(Math.random() * 2) + 1;

                        if (Star4 === 1) {
                            alert(`5성 강화 성공!`);
                            var Star5 = Math.floor(Math.random() * 2) + 1;

                            if (Star5 === 1) {
                                alert(`6성 강화 성공!`);
                                var Star6 = Math.floor(Math.random() * 2) + 1;

                                if (Star6 === 1) {
                                    alert(`6성 강화 성공!`);
                                    var Star7 = Math.floor(Math.random() * 2) + 1;

                                    if (Star7 === 1) {
                                        alert(`7성 강화 성공!`);
                                        var Star8 = Math.floor(Math.random() * 2) + 1;

                                        if (Star8 === 1) {
                                            alert(`8성 강화 성공!`);
                                            var Star9 = Math.floor(Math.random() * 2) + 1;

                                            if (Star9 === 1) {
                                                alert(`9성 강화 성공!`);
                                                var Star10 = Math.floor(Math.random() * 2) + 1;

                                                if (Star10 === 1) {
                                                    alert(`10성 축하합니다!`);
                                                    break;
                                                } else {
                                                    alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                                                    break;
                                                }

                                            } else {
                                                alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                                                break;
                                            }

                                        } else {
                                            alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                                            break;
                                        }

                                    } else {
                                        alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                                        break;
                                    }

                                } else {
                                    alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                                    break;
                                }

                            } else {
                                alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                                break;
                            }

                        } else {
                            alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                            break;
                        }

                    } else {
                        alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                        break;
                    }

                } else {
                    alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                    break;
                }

            } else {
                alert(`강화 실패! 처음 화면으로 돌아갑니다!`);
                break;
            }

        }

    }

}