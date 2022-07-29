const studentList = [
    {name: 'jichi', age: 1, score: 97},
    {name: 'meow', age: 3, score: 97},
    {name: 'nana', age: 5, score: 97},
    {name: 'chuuuu', age: 7, score: 97},
    {name: 'u0u', age: 7, score: 97},
];

let result = '';
for(let idx = 0; idx<studentList.length; idx++){
    if(studentList[idx].name === 'chuuuu'){
        result = studentList[idx];
        console.log(`break에 걸려 나오지 못한 사람은 ${studentList[4].name} 입니다.`)
        break;
        return result
    }
    console.log(`저는 ${studentList[idx].name} 입니다.`);
}

console.log(result)