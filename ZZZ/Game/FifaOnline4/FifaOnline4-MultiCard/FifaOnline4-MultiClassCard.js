while (true) {

    var open= +prompt('[ 1. 1개 개봉 ]');

    if(open != 1){
        alert(`다시 입력하세요!`);
        continue;
    }

    if(open === 1){

        
        // 시즌
        var season = Math.floor(Math.random() * 3) + 1;
        if (season === 1) {
            alert('ICON');
        }
        if (season === 2) {
            alert('LN');
        }
        if (season === 3) {
            alert('CHA');
        }
        
        
        // 선수
        var player = Math.floor(Math.random() * 3) + 1;
        if (player === 1) {
            alert('코트디부아르');
            alert('ST');
            alert('드로그바');
        }
        if (player === 2) {
            alert('잉글랜드');
            alert('CAM');
            alert('램파드');
        }
        if (player === 3) {
            alert('체코');
            alert('GK');
            alert('체흐');
        }
        
    } 
    continue;
}