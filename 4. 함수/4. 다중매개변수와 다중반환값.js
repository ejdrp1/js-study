// multi parameter : 매개변수가 n개인 경우

// 집합 자료구조를 매개변수로 사용
// [배열, 객체]

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

// 스프레드 (ES6)
function addAll(...numbers) {
    var total = 0;

    for (var n of numbers) {
        total += n;
    }
    return total;

}

var r1 = addAll([1, 3, 5, 10, 20]);
console.log(`r1 : ${r1}`);


function foo(arr1, arr2) {

}
foo([10, 20], [500, 1000, 1500]);

// function foo(...arr1, ...arr2){

// }

// foo(10,20,500,1000,1500);


console.log('=====================');

// 함수의 return값은 언제나 하나
// 2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 return받고 싶을 때

function operateAll(n1, n2) {

    return {
        plus: addAll(n1, n2),
        minus: n1 - n2,
        multiply: n1 * n2,
        divide: n1 / n2
    };

}

var result = operateAll(10, 5);
console.log(`덧셈결과 : ${result.plus}`);
console.log(`뺄셈결과 : ${result.minus}`);
console.log(`곱셈결과 : ${result.multiply}`);
console.log(`나눗셈결과 : ${result.divide}`);