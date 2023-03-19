/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. 변수에 배열 
    ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 
   해당 멤버를 배열에서 삭제시킨 뒤
   삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면
   'xxx는 잘못된 이름입니다.'라고 출력한 후
   다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

// ======================================= 1
var preMember = [];

preMember.push('유노윤호');
preMember.push('최강창민');
preMember.push('영웅재중');
preMember.push('믹키유천');
preMember.push('시아준수');

console.log(preMember);



// ======================================= 2

while (preMember.length > 0) {

    var delMember = prompt(`현재 멤버 : [${preMember}]\n삭제할 이름을 입력하세요.`);

    if (preMember.includes(delMember)) { // 삭제할 데이터가 존재함

        if (`${delMember}` === `${preMember[0]}`) {
            preMember.splice(0, 1);
            alert(`삭제완료!\n남은 멤버 : [${preMember}]`);

        } else if (`${delMember}` === `${preMember[1]}`) {
            preMember.splice(1, 1);
            alert(`삭제완료!\n남은 멤버 : [${preMember}]`);

        } else if (`${delMember}` === `${preMember[2]}`) {
            preMember.splice(2, 1);
            alert(`삭제완료!\n남은 멤버 : [${preMember}]`);

        } else if (`${delMember}` === `${preMember[3]}`) {
            preMember.splice(3, 1);
            alert(`삭제완료!\n남은 멤버 : [${preMember}]`);

        } else if (`${delMember}` === `${preMember[4]}`) {
            preMember.splice(4, 1);
            alert(`삭제완료!\n남은 멤버 : [${preMember}]`);

        }

    } else { // 삭제할 데이터가 존재하지 않음
        alert(`${delMember}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }

    // if (preMember.length === 0) {
    //     alert(`모든 멤버가 삭제되었습니다.`);
    //     break;
    // }

}