// 배열 회전시키기

function solution(numbers, direction) {
    var answer = [];
    let len = numbers.length;
    if(direction == "right"){
        answer.push(numbers[len-1]);
        for(let i=0; i<len-1; i++){
            answer.push(numbers[i]);       
        }
    }else{
        for(let i=1; i<len; i++){
            answer.push(numbers[i]);       
        }
        answer.push(numbers[0])
    }
    return answer;
}

let arr = [4, 455, 6, 4, -1, 45, 6]	;
console.log(solution(arr,"left"));