//배열의 길이에 따라 다른 연산하기

function solution(arr, n) {
    var answer = [];
    if(arr.length %2 ==0 ){
        for(let i=0; i<arr.length; i++){
            i % 2 !==0 ? answer.push(arr[i]+n) : answer.push(arr[i]); 
        }
    }else{
        for(let i=0; i<arr.length; i++){
            i % 2 ==0 ? answer.push(arr[i]+n) : answer.push(arr[i]); 
        }
    }
    return answer;
}

let arr = [49, 12, 100, 276, 33];
console.log(solution(arr, 27));