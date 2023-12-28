/*
제목 : 배열 만들기 3
아래처럼 구조분해 할당으로 배열값을 준 다음 스프레이드로 처리하면 깔끔!
function solution(arr, intervals) {
    const [[a,b],[c,d]] = intervals;
    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}

*/

function solution(arr, intervals) {
    var answer = [];
    intervals.forEach(([a,b]) =>{
        let tmp = arr.slice(a,b+1);
        answer.push(...tmp)
    });
    return answer;
}

let arr = [1, 2, 3, 4, 5];
let intervals = [[1, 3], [0, 4]];

console.log(solution(arr,intervals));