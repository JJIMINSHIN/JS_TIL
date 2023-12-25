/*
 * 제목 : 수열과 구간 쿼리 2 
 * 처음 짠 코드 : 테스트 코드 외에는 다 실패 처리남. 
 * 사유 : forEach는 반환값이 없으므로, arr의 배열값을 반환을 못해서 테스트 실패가 나지 않았나 생각이 든다.. 
 * 원인에 대해서는 다시 한번 생각해보기!
    function solution(arr, queries) {
        var answer = [];
        queries.forEach(([s,e,k]) =>{
            let tmp =  arr.filter((v,idx) => (s<= idx && e>=idx && v > k)).sort()[0];
        // console.log(tmp)
        answer.push(tmp?tmp:-1)
        })
        return answer; 
    }
 */

function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        let answer = arr.filter((v, idx) => (s <= idx && e >= idx && v > k));
        return answer.length ? Math.min(...answer) : -1;
    })
}

let arr = [0, 1, 2, 4, 3];
let queries = [[0, 4, 2], [0, 3, 2], [0, 2, 2]];
console.log(solution(arr, queries))