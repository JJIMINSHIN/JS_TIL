/*
제목 : 배열 조각하기
참고 :
1. idx %2 != 0 ? 뒷부분 splice : 앞부분 splice
2. 
- slice  : 원본 배열은 변화 X, 배열의 일부분을 추출하여 새로운 배열을 반환  
- splice : 원본 배열은 변화 O, 배열에서 요소를 추가, 제거 또는 교체하는 작업을 수행
*/

function solution(arr, query) {
    query.forEach((v,idx)=>{
        idx %2 ==0 ? arr.splice(v+1,) : arr.splice(0,v);
    });
    return arr;
}

let arr =[0, 1, 2, 3, 4, 5];
let query =[4, 1, 2];
console.log(solution(arr,query));