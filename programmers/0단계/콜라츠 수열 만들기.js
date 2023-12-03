//콜라츠 수열 만들기


function solution(n) {
    var answer = [];
   
    while(n>0){
        answer.push(n);

        if(n==1) break;

        if(n%2==0){
            n= n/2;
        }else if(n %2 !=0){
            n = 3*n+1;
        }
    }
    return answer;
}

console.log(solution(10));