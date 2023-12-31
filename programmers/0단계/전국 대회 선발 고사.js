/*
제목 : 전국 대회 선발 고사
참고 :
1. attendance의 true만 뽑아낸 다음 sort()해주기
2. 1,2,3위의 값이 아니라 이 순위들이 rank에서의 "인덱스"값을 곱해주는것
3. sort() 기본값이 오름차순이라 따로 지정 안해줬더니 오류 발생
4. sort((a,b) => a-b) 로 오차없이 오름차순해줌.

*/

function solution(rank, attendance) {
    var answer = rank.filter((a,i) => attendance[i]).sort((a,b) => a-b);
    return 10000 *rank.indexOf(answer[0]) + 100 *rank.indexOf(answer[1])+ rank.indexOf(answer[2]);
}

let rank = [3, 7, 2, 5, 4, 6, 1];
let att = [false, true, true, true, true, false, false];
console.log(solution(rank, att));