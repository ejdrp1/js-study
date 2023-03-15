var n = +prompt('양의 정수를 입력: ');

var a=1;
var sum='';

while (a <= n){

    if(a % 2 === 1){
        sum += '+';
    } else {
        sum += '-';
    }
    a++;
}

alert(sum);
















