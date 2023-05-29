// 뒤에서 5등 위로

function solution(num_list) {
    return num_list.sort((a,b)=> a-b).splice(5,);
}

let arr =[12, 4, 15, 46, 38, 1, 14, 56, 32, 10];
console.log(solution(arr));