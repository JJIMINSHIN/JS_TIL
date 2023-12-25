/*
제목 : 가까운 1 찾기

다른 사람 풀이 참조 보니
    return arr.indexOf(1,idx);
이렇게 간단하게도 사용 가능
indexOf(찾을 요소, 시작 인덱스); 
findIndex() 배열에서 조건에 맞는 값의 첫번째 index를 리턴하는 함수
*/

function solution(arr, idx) {
    return arr.findIndex((v,i) => (i >=idx && v ==1));
}

let arr=[1, 0, 0, 1, 0, 0]	;
console.log(solution(arr,4));