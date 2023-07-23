//부분 문자열인지 확인하기


function solution(my_string, target) {
    let answer = 0;
    let len = target.length;
    for(let i = 0; i<my_string.length; i++){
        if(my_string.slice(i,len+i) == target) answer =1;
    }  
    return answer; 

}

//includes 사용
const sol2 = (my_string, target) => my_string.includes(target) ? 1 :0;


console.log(solution("banana","wxyz"));
console.log(sol2("banana","ana"));