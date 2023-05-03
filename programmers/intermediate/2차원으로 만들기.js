// 2차원으로 만들기

function solution(num_list, n) {
    var answer = [];
    for(let i =0; i<num_list.length; i+n){
        console.log("i  :  ",i,  "   n  :  ", n)
        answer.push(num_list.splice(0,n));
    }
    return answer;
}


let arr =[100, 95, 2, 4, 5, 6, 18, 33, 948]	;
console.log(solution(arr, 3))