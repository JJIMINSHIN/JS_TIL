const listUser = [
    {name: 'jichi', age: 1, score: 97},
    {name: 'meow', age: 3, score: 97},
    {name: 'nana', age: 5, score: 97},
    {name: 'chuuuu', age: 7, score: 97},
    {name: 'u0u', age: 7, score: 97}
]
;

listUser.forEach(function(user){
    console.log(user.name);
});

console.log('---------------');

listUser.forEach((user)=> console.log(user.name))