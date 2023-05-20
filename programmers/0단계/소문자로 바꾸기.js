function solution(myString) {
    return myString.split('').map(v => v.toLowerCase()).join('');
}

console.log(solution("aBcDeFg"))