// 1 ~ 100의 난수
/* 
    Math.random()             -       0.0 <= ~ < 1.0
    Math.random() * 100       -       0.0 <= ~ < 100.0

    공식 : x이상 y이하의 정수 난수

    Math.floor(Math.random() * (y - x + 1)) + x;
*/
var age = Math.floor(Math.random() * 100) + 1;

alert(`age : ${age}살`);







// var age = +prompt('당신의 나이는??'); // +붙여서 형변환
// alert(`내 나이 : ${age+1}살`);

if (age > 19) {
    alert('성인입니다.');
    alert('주류를 구매할 수 있습니다.');
} else(age <= 19) {
    alert('미성년자입니다.');
}