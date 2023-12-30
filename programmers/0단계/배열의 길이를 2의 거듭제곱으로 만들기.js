/*
제목 : 배열의 길이를 2의 거듭제곱으로 만들기
참고 : 
- arr의 길이가 2의 거듭제곱이 아니면 arr.push(0)
- 2의 거듭제곱의 값이 arr.length 보다 작을때까지(최소한의 개수를 만들어주기위해) 
  while 문을 돌려서 2의 거듭 제곱값을 answer에 담기
- arr가 거듭제곱이 아니라면 거듭제곱 길이에서 arr.length 값 뺀 만큼 0 넣어주기
*/

function solution(arr) {
    let len = arr.length;
    let answer = 0;
    while(Math.pow(2,answer)<len) answer++;
    for(let i=0; i<Math.pow(2,answer) -len; i++){
        arr.push(0)
    }
    return arr;
    
}


console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));