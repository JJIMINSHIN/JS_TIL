// n 번째 원소까지

function solution(num_list, n) {
    return num_list.splice(0,n);
}

let num_list= [2,1,6];
console.log(solution(num_list, 1));