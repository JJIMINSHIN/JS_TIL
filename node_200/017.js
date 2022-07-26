const arNumbers = [];
arNumbers.push(1);
arNumbers.push(2);
arNumbers.push(3);
arNumbers.push(2);

const arTexts = [];
arTexts.push('hello', 'welcome', 'here');

console.log('arNumbers : ', arNumbers); //arNumbers :  [ 1, 2, 3, 2 ]
console.log('arTexts : ',arTexts) //arTexts :  [ 'hello', 'welcome', 'here' ]

arNumbers.pop(2);
console.log('arNumbers pop : ', arNumbers); //arNumbers pop :  [ 1, 2, 3 ]