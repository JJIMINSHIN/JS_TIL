// 조건에 맞게 수열 변환하기 3

function solution(arr, k) {
    return k % 2 == 0 ? arr.map((v) => v+k) : arr.map((v) => v*k);
}

let arr = [1, 2, 3, 100, 99, 98];
console.log(solution(arr, 2));