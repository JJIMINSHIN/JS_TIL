//홀짝에 따라 다른 값 반환하기

function solution(n) {
    var answer = 0;
    for(let i=1; i<=n; i++){
        if(n%2 !=0 && i%2 !=0 ){
            answer += i;
        }else if(n%2 ==0 && i%2 ==0){
            answer += i*i;
            
        }
    }
    return answer;
}


console.log(solution(10));