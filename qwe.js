// function showNumber(n, code) {

//     for (let i = 1; i <= n; i++) {
//         if (code(i)) {
//             console.log(i);
//         }
//     }
// }

// showNumber(50, n => n % 10 === 0);











function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}

calculate(10, 20, function(result){
    console.log(result);
});











function printArray(array, callback){

    for(let i=0; i<array.length; i++){
        callback(array[i]);
    }

}

const myArray = [1, 2, 3, 4, 5];

printArray(myArray, function(item){
    console.log(item);
});
