//세 개의 구분자


function solution(myStr) {
    let answer = myStr.split(/[abc]/g).filter((v) => v != "");
    return answer.length == 0 ? ["EMPTY"] : answer;
 }
 
 
 console.log(solution("cabab"));