/*
제목 : 세로 읽기
참고 :
- 4개씩 slice한 값에 c-1의 값을 반환해주기
*/

function solution(my_string, m, c) {
    var answer = '';
    for(let i=0; i<my_string.length; i+=m){
        answer += my_string.slice(i,i+m)[c-1];
    }
    return answer;
}

let my_string ="programmers";
console.log(solution(my_string,1,1));