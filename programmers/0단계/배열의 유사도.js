// 배열의 유사도

function solution(s1, s2) {
    return s1.filter((v)=> s2.includes(v)).length
}

let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];

console.log(solution(s1, s2));