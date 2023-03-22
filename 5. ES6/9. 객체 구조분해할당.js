const emp = {
    empName: '빡빡이',
    age: 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};

// const empName = emp.empName;
// const age = emp.age;
// const birthDay = emp.birthDay;
// 
// const { empName, birthDay, age } = emp; // { key 값 } 순서 상관없음
// 
// console.log(`${empName}님의 나이는 ${age}살이고 생일은 ${birthDay}입니다.`);


const {
    empName: en,
    birthDay: bd,
    age: a
} = emp;

console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다.`);

console.log('=============================');

const {
    birthDay,
    age,
    ...rest
} = emp;

console.log(birthDay);
console.log(age);
console.log(rest);

// 객체 안전 복사 : 스프레드
const copyEmp = {
    ...emp,
    address: '서울시',
    hobbies: ['놀고먹기', '낮잠'],
    empName: '망둥어'
};

console.log(copyEmp); // 복사본
console.log(emp); // 원본 (상태유지)

































