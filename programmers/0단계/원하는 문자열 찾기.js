// 원하는 문자열 찾기

function solution(myString, pat) {
    return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

let myString = "AbCdEfG";
let pat = "aBc";
console.log(solution(myString, pat));