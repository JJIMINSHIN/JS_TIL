/*
제목 : qr code
참고 : 
1. code의 => split
2. 인덱스를 q로 나누었을때 나머지가 r인 위치의 문자 값 구하기 => filter 이용
3. 앞에서부터 순서대로 이어 붙인다. => join('')

*/

function solution(q, r, code) {
    return code.split("").filter((v,idx) => idx%q == r ).join('');
}

let str = "programmers";
console.log(solution(1,0,str))