var preMember = [];

preMember.push('유노윤호');
preMember.push('최강창민');
preMember.push('영웅재중');
preMember.push('믹키유천');
preMember.push('시아준수');

console.log(preMember);

while (true) {

    var modTarget = prompt(`현재 멤버 : [${preMember}]\n수정할 이름을 입력하세요.`);

    if (preMember.includes(delMember)) { // 수정할 데이터가 존재함

        var newMemberName = prompt(`새로운 멤버 이름을 입력하세요.`);

        preMember[preMember.indexOf(modTarget)] = newMemberName;
        alert(`수정 완료!\n현재 멤버 : [${preMember}]`);

        break;

    } else { // 수정할 데이터가 존재하지 않음
        alert(`${delMember}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }

}