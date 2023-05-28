// 마지막 두 원소

function solution(num_list) {
    let i = num_list.length-1;
    if(num_list[i]>num_list[i-1]) num_list.push(num_list[i] - num_list[i-1]);
    else num_list.push(num_list[i]*2)
    return num_list;
}


let arr= [5, 2, 1, 7, 5];
console.log(solution(arr));