// 1. 한 변의 길이를 입력받는다
var length = +prompt('정사각형을 그립니다.\n높이는 얼마입니까?');

var star = ``;

// 2. 

for (var i = 0; i < length; i++) {

    for (var j = 0; j < length; j++) {
        star += `* `;
    }
    star += '\n';

}
alert(star);