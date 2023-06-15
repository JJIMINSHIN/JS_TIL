// 길이에 따른 연산

function solution(num_list) {
    return num_list.length > 10 ? num_list.reduce((acc, cur) => acc + cur) : num_list.reduce((acc, cur) => acc * cur);
}

let arr =[2, 3, 4, 5];
console.log(solution(arr));