//배열 만들기 5


function solution(intStrs, k, s, l) {
    return intStrs.map((v) => Number(v.slice(s,s+l))).filter((v) => v>k);
}

let intStrs =["0123456789","9876543210","9999999999999"];
let k = 50000;
console.log(solution(intStrs,k,5,5))