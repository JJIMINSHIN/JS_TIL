// 문자열 바꿔서 찾기

function solution(myString, pat) {
    return myString.split('')
                    .map((x) => x == "A" ? "B" : "A").join('')
                    .includes(pat) ? 1 : 0
}


let str = "ABAB";
let pat = "ABAB";
console.log(solution(str, pat));