/*
제목 : 수열과 구간 쿼리 4
참고
- arr[i]의 배열의 값과 k의 배수 관계가 아닌 인덱스 값과 k의 배수 관계를 구하는..
- 0은 모든 수의 배열
- 1의 배수: 모든 수는 1의 배수
- 2의 배수 : 0,2,4,8...
*/

function solution(arr, queries) {
    queries.forEach(([s,e,k]) =>{
        for(let i=0; i<arr.length; i++){
            if(s<=i && i<=e){
                if(i%k==0) arr[i]++;
            }
        }
    });
    return arr;
}

let arr=[0, 1, 2, 4, 3];
let queries = [[0, 4, 1], [0, 3, 2], [0, 3, 3]];
console.log(solution(arr,queries))

/*

for - of를 사용해서 더 간결하게 가눙

function solution(arr, queries) {
    for(let [s, e, k] of queries) {
        for(let i = s; i <= e; i++) {
            if(i % k === 0) arr[i]++;
        }
    }
    return arr;
}


*/