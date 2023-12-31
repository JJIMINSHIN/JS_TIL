/*
제목:조건에 맞게 수열 변환하기 2
참고:
- 남이 풀어준 문제 ㅠ_ㅜ..
- v > 50 && v %2 ==0 ? v/2 : (v*2)+1
- if(arr == tmp) return cnt;
- while문을 돌려 변화를 주고 tmp 값을 answer에 넣어주면서 이전 배열과 비교
- flag를 만들어서 이전 배열과 현재의 배열이 같으면 break;
*/


function solution(arr) {
    let cnt = 0;
    let answer = [...arr];

    while (true) {
        const tmp = answer.map((v) => {
            if (v >= 50 && v % 2 === 0) {
                return (v / 2);
            } else if (v < 50 && v % 2 === 1) {
                return (v * 2) + 1;
            }
            return v;
        });

        const isEqual = answer.every((v, i) => v === tmp[i]);

        if (isEqual) break;
        answer = tmp;
        cnt++;
    }

    return cnt;
}

let arr = [1, 2, 3, 100, 99, 98];
console.log(solution(arr))