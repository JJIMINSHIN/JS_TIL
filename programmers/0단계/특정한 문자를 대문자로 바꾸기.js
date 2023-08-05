// 특정한 문자를 대문자로 바꾸기


function solution(my_string, alp) {
    let answer = '';
    for(let x of my_string){
        if(x == alp) answer += x.toUpperCase() 
        else answer+= x
    }
    return answer;
}

console.log(solution("lowercase","p"))