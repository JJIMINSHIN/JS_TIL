/*
제목:무작위로 K개의 수 뽑기
참고 : 
1. arr[i]와 answer 값 비교해서 없으면 push
2. k가 answer.length보다 작으면 k만큼 -1 push해서 길이 맞춰주기
3. answer 길이가 k보다 크면 splice해서 k만큼 잘라주기
*/

function solution(arr, k) {
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if(!answer.includes(arr[i])) answer.push(arr[i]);
    }
    
    while(answer.length <k){
        answer.push(-1);
        if(answer.length >= k) break;
    }
    
    return answer.length > k ? answer.splice(0,k) : answer;
}

let arr =[0, 1, 1, 2, 2, 3];
let arr2 =[0, 1, 1, 1, 1];
console.log(solution(arr,3));
console.log(solution(arr2,4));