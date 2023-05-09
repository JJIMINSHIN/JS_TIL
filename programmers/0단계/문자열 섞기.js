// 문자열 섞기

function solution(str1, str2) {
    var answer = '';
    for(let i=0; i<str1.length; i++){
        answer += str1[i]+str2[i];
    }
    return answer;
}


let str1 = "aaaaa";
let str2 = "bbbbb";
console.log(solution(str1, str2));