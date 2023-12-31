/*
제목 : 문자열 묶기
참고:
1. strArr에 있는 배열의 최대 길이를 구해 for문 돌림ㄴ
2. for문 돌리면서 기존 원소의 길이와 i의 값이 동일한 값의 길이를 구해서 
3. 그 길이가 answer값보다 크면 answer값에 할당
결과 : 
- 채점 값 83.3 나옴=> 문자열의 길이가 1부터 시작하니 i=1; i<=maxLen;로 변경
- 통과
 
*/

function solution(strArr) {
    var answer = 0;
    let maxLen =  Math.max(...strArr.map((v) => v.length))
    
    for(let i=1; i<=maxLen; i++){
        let len = strArr.filter((x)=> x.length == i).length;
        if(len >= answer) answer = len;
    }
    return answer;
}

let arr= ["a","bc","d","efg","hi"];
console.log(solution(arr))