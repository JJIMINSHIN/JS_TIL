// n개 간격의 원소들

function solution(num_list, n) {
    var answer = [];
    for(let i=0; i<num_list.length; i++){
        if(i %n ==0 ) answer.push(num_list[i]);
    }
    return answer;
}

let arr = [4, 2, 6, 1, 7, 6]
console.log(solution(arr,4));