// 방법1

const input = (str) =>{
    let cnt = 0;
    str.split('').map((item) => item === item.toUpperCase() ? cnt++ : '')
    return cnt
};

console.log(input('KoreaTimeGood'));

// 방법2
function solution(s){         
    let answer=0;
    for(let x of s){
        let n = x.charCodeAt();
        if(n >=65 && n<=90) answer ++;
    }
    return answer;
    
}

