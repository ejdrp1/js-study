const playerList = [{
        name: '디디에 드로그바',
        nationality: '코트디부아르',
        team: 'CHELSEA',
        position: 'ST',
        age: 45,
        height: 188,
        weight: 80
    },
    {
        name: '프랭크 램파드',
        nationality: '잉글랜드',
        team: 'CHELSEA',
        position: ['CAM', 'CM', 'CDM', 'CF'],
        age: 44,
        height: 184,
        weight: 80
    },
    {
        name: '마이클 에시앙',
        nationality: '가나',
        team: 'CHELSEA',
        position: ['CAM', 'CM', 'CDM', 'CB', 'RM', 'RB'],
        age: 41,
        height: 177,
        weight: 85
    },
    {
        name: '존 테리',
        nationality: '잉글랜드',
        team: 'CHELSEA',
        position: ['CB', 'GK'],
        age: 43,
        height: 188,
        weight: 90
    },
    {
        name: '애슐리 콜',
        nationality: '잉글랜드',
        team: 'CHELSEA',
        position: ['LB', 'LWB'],
        age: 44,
        height: 176,
        weight: 66
    },
    {
        name: '이바노비치',
        nationality: '세르비아',
        team: 'CHELSEA',
        position: ['CB', 'RB', 'RWB'],
        age: 39,
        height: 185,
        weight: 91
    },
    {
        name: '다비드 루이스',
        nationality: '브라질',
        team: 'CHELSEA',
        position: ['CB', 'CDM'],
        age: 36,
        height: 189,
        weight: 86
    },
    {
        name: '페트르 체흐',
        nationality: '체코',
        team: 'CHELSEA',
        position: 'GK',
        age: 41,
        height: 196,
        weight: 90
    },
    {
        name: '에덴 아자르',
        nationality: '벨기에',
        team: 'CHELSEA',
        position: ['LW', 'RW', 'CAM', 'CF', 'ST'],
        age: 32,
        height: 175,
        weight: 74
    },
    {
        name: '은골로 캉테',
        nationality: '프랑스',
        team: 'CHELSEA',
        position: ['CM', 'CDM'],
        age: 32,
        height: 168,
        weight: 72
    },
    {
        name: '세자르 아스필리쿠에타',
        nationality: '스페인',
        team: 'CHELSEA',
        position: ['RB', 'RWB'],
        age: 34,
        height: 178,
        weight: 78
    },
    {
        name: '리스 제임스',
        nationality: '잉글랜드',
        team: 'CHELSEA',
        position: ['RB', 'RWB', 'CM', 'CB'],
        age: 34,
        height: 178,
        weight: 78
    },
    {
        name: '벤 칠웰',
        nationality: '잉글랜드',
        team: 'CHELSEA',
        position: ['LB', 'LWB'],
        age: 27,
        height: 180,
        weight: 78
    },
    {
        name: '티아구 실바',
        nationality: '브라질',
        team: 'CHELSEA',
        position: ['CB', 'SW', 'CDM'],
        age: 39,
        height: 181,
        weight: 82
    },
    {
        name: '윌리안',
        nationality: '브라질',
        team: 'CHELSEA',
        position: ['RW', 'LW', 'CAM', 'CM'],
        age: 35,
        height: 175,
        weight: 77
    },
    {
        name: '메이슨 마운트',
        nationality: '잉글랜드',
        team: 'CHELSEA',
        position: ['CAM', 'LW', 'RW', 'CM'],
        age: 24,
        height: 181,
        weight: 74
    },
    {
        name: '코너 갤러거',
        nationality: '잉글랜드',
        team: 'CHELSEA',
        position: ['CAM', 'LM', 'RM', 'CM', 'CF', 'CDM'],
        age: 24,
        height: 181,
        weight: 74
    },
    {
        name: '마테오 코바치치',
        nationality: '크로아티아',
        team: 'CHELSEA',
        position: ['CM', 'CAM', 'CDM'],
        age: 28,
        height: 176,
        weight: 82
    }
];

// filter() : 조건
// map() : 데이터 수정
// forEach() : 반복 출력


playerList
    .filter(player => player.team === 'CHELSEA')
    .forEach(player => {
        console.log(`선수명 : [${player.name}]`);
    });