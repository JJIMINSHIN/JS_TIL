// 등차수열의 특정한 항만 더하기


function solution(a, d, included) {
    var answer = [a];
    var result = 0;
    for(let i=0; i<included.length; i++){
        answer[i+1] =  answer[i] +d;
        if(included[i]) result += answer[i];
    }
    return result;
}

// 참고하기 좋은 코드
function solution2(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    },0)
}

let inc =[true, false, false, true, true];

console.log(solution(3,4,inc));
console.log(solution2(3,4,inc));