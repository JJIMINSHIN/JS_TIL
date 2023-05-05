//대문자로 바꾸기

function solution(myString) {
   return myString.split('').map(v => v.toUpperCase()).join('');
}

console.log(solution("aBcDeFg"))