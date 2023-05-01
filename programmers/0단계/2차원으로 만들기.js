// 2차원으로 만들기

function solution(num_list, n) {
    var answer = [];
    while(num_list.length !=0){
        answer.push(num_list.splice(0,n))
    }
    return answer;
}


let arr =[1, 2, 3, 4, 5, 6, 7, 8]	;
console.log(solution(arr, 2))