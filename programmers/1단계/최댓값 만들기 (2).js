// 최댓값 만들기 (2)

function solution(numbers) {
    var len = numbers.length;
    let answer = numbers.sort((a,b) => a-b);

    let max = answer[len-1]*answer[len-2];
    let min = answer[0]*answer[1];

    if(min > max ) return min
    else return max
}

let arr = [1, 2, -3, 4, -5];
console.log(solution(arr))