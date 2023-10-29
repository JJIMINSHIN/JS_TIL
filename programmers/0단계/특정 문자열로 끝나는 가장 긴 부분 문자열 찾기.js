//특정 문자열로 끝나는 가장 긴 부분 문자열 찾기


function solution(myString, pat) {
    var answer = myString.lastIndexOf(pat);
    return myString.slice(0,answer+(pat.length));
}

let str = "AbCdEFG";
//str ="AAAAaaaa";
console.log(solution(str, "FG"));