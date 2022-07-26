const user = {};
user.name = 'jimin';
user.age = 28;
user.nation = 'Korea';

console.log(user); //{ name: 'jimin', age: 28, nation: 'Korea' }
console.log('user.name : ', user.name); //user.name :  jimin
console.log('user.nation: ', user.nation); //user.nation:  Korea

const memberNation='nation'
console.log(user[memberNation]); // Korea
