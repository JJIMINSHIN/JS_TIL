/*
제목 : 수열과 구간 쿼리 3

참고 : ES6 문법 사용 (Array destructuring) -- 출처 https://jinist.tistory.com/30

아래와 같이 정말 간단하게 forEach 사용할 수 도 있다. 참고!
function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}

*/


function solution(arr, queries) {
    for(let i=0; i<queries.length; i++){
        [arr[queries[i][0]], arr[queries[i][1]]] = [arr[queries[i][1]], arr[queries[i][0]]]
    }
    return arr;
}


let arr = [0, 1, 2, 3, 4];
let queries =[[0, 3],[1, 2],[1, 4]];

console.log(solution(arr, queries));