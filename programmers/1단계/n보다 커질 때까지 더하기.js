// n보다 커질 때까지 더하기


function solution(numbers, n) {
    var answer = 0;
    for(let i =0; i<numbers.length; i++){
        answer <= n ?  answer += numbers[i] : answer;
        //console.log('i  : ', numbers[i] , "   answer  :  ", answer);
    }
    return answer;
}


let arr = [58, 44, 27, 10, 100];
console.log(solution(arr, 139));