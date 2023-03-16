var line = 1;

// while (line <= 9) {
//     console.log(`3x${line}=${3*line}`);
//     line++;
// }

// for (var line = 1; line <= 9; line++) {
//     console.log(`3x${line}=${3*line}`);
// }

var x=1;

for(var i=0; i<3; i++){
    for(var j=0; j<4; j++){
        console.log(`hello${x++}`);
    }
}
console.log('============');









// 2단 출력
for (var level = 2; level <= 9; level++) {

    for (var line = 1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level*line}`);
    }

    console.log('===============');
}