//카운트 다운

function solution(start, end) {
    var answer = [];
    for(let i=start; i>=end; i--){
        answer.push(i);
    }
    return answer;
}

console.log(solution(10,3));