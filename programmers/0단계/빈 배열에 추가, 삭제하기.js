/*
제목 : 빈 배열에 추가, 삭제하기

- repeat은 문자열 반복하는 함수
- slice( 0, -a) : -a 만큼 제거

*/

function solution(arr, flag) {
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (flag[i] == 1) {
            for (let j = 0; j < arr[i] * 2; j++) {
                answer.push(arr[i])
            }
        } else {
            answer = answer.slice(0, -arr[i])
        }
    }

    return answer;
}

let arr = [3, 2, 4, 1, 3];
let flag = [true, false, true, false, false];
console.log(solution(arr, flag));