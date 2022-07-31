// for..of : 개수만큼 반 하나씩 뽑아 반복문 실행

const userList = [
    {name: 'jichi', age: 1, score: 97},
    {name: 'meow', age: 3, score: 97},
    {name: 'nana', age: 5, score: 97},
    {name: 'chuuuu', age: 7, score: 97},
    {name: 'u0u', age: 7, score: 97}
];

for( let user of userList){
    if(user.age >= 5){
        console.log('user.name : ', user.name)
        /* 
        user.name :  nana
        user.name :  chuuuu
        user.name :  u0u
        */
    }
}