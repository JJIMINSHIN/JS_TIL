// 원소들의 곱과 합

function solution(num_list) {
    return num_list.reduce((v, k) => v*k ) > Math.pow(num_list.reduce((v, k) => v +k),2) ? 0:1 ;
}

let arr = [3, 4, 5, 2, 1]
console.log(solution(arr));