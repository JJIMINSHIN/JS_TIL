/*
제목 : 문자열 여러 번 뒤집기

난관 1. reverse하는 과정에서  my_string.slice(...).reverse is not a function 에러 발생
- slice 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환하는 함수로 array.from을 해서 진짜 배열로 만들어 준다음 reverse 진행
난관 2. 잘못된 slice...?
 1) answer에 my_string  할당 하지 않고 slice를 my_string 기준으로 진행했을 경우와
 2)  answer에 my_string 값 할당하고 answer을 기준으로  slice 진행한 경우
결과 값이 다르게 나오는 현상 발견

결론적으로 다른 부분은 아래와 같다.
똑같이 5~9를 리버스 하는데
왜 1번 부분에서부터 잘못된 값을 가져오는지... 아직도 미궁이다..
1)
---------------------------
### a = 5  ### b =  9
### 1answer =  progmrersam
### 1 = rermg pro gmrer sam  || mrers 이값을 리버스..
### 2 = aspro pro       sa 
### 3 = m 
### 2answer = rermgasprom
---------------------------
2)
---------------------------
### a = 5  ### b =  9      
### 1answer =  progrmersam 
### 1 = progr
### 2 = asrem
### 3 = m
### 2answer = prograsremm  
---------------------------

*/

function solution(my_string, queries) {
    var answer =my_string;
    queries.forEach(([a,b]) =>{
        answer = answer.slice(0,a)+Array.from(answer.slice(a,b+1)).reverse().join('') +answer.slice(b+1);
    })
    return answer;
}




let str ="rermgorpsam";
let queries=[[2, 3], [0, 7], [5, 9], [6, 10]];
//console.log(solution(str, queries));
console.log("progmrersam".slice(0,5))

/*

### answer에 my_string  할당 하지 않고 slice를 my_string 기준으로 진행했을 경우
function solution(my_string, queries) {
    var answer ='';
    queries.forEach(([a,b]) =>{
        console.log("### a =",a ," ### b = ",b);
        console.log("### 1answer = ",answer);
        console.log("### 1 = "+my_string.slice(0,a));
        console.log("### 2 = "+Array.from(my_string.slice(a,b+1)).reverse().join(''));
        console.log("### 3 = "+my_string.slice(b+1));
        answer = my_string.slice(0,a)+Array.from(my_string.slice(a,b+1)).reverse().join('') +my_string.slice(b+1);
        console.log("### 2answer = "+answer);
        console.log("---------------------------");
    })
    return answer;
}

### a = 2  ### b =  3
### 1answer =
### 1 = re
### 2 = mr
### 3 = gorpsam
### 2answer = remrgorpsam  
---------------------------
### a = 0  ### b =  7      
### 1answer =  remrgorpsam 
### 1 =
### 2 = progmrer
### 3 = sam
### 2answer = progmrersam  
---------------------------
### a = 5  ### b =  9
### 1answer =  progmrersam
### 1 = rermg
### 2 = aspro
### 3 = m
### 2answer = rermgasprom
---------------------------
### a = 6  ### b =  10
### 1answer =  rermgasprom
### 1 = rermgo
### 2 = maspr
### 3 =
### 2answer = rermgomaspr
---------------------------


### answer에 my_string 값 할당하고 answer을 기준으로  slice 진행한 경우

function solution(my_string, queries) {
    var answer =my_string;
    queries.forEach(([a,b]) =>{
        console.log("### a =",a ," ### b = ",b);
        console.log("### 1answer = ",answer);
        console.log("### 1 = "+answer.slice(0,a));
        console.log("### 2 = "+Array.from(answer.slice(a,b+1)).reverse().join(''));
        console.log("### 3 = "+answer.slice(b+1));
        answer = answer.slice(0,a)+Array.from(answer.slice(a,b+1)).reverse().join('') +answer.slice(b+1);
        console.log("### 2answer = "+answer);
        console.log("---------------------------");
    })
    return answer;
}


### a = 2  ### b =  3
### 1answer =  rermgorpsam 
### 1 = re
### 2 = mr
### 3 = gorpsam
### 2answer = remrgorpsam  
---------------------------
### a = 0  ### b =  7      
### 1answer =  remrgorpsam 
### 1 =
### 2 = progrmer
### 3 = sam
### 2answer = progrmersam  
---------------------------
### a = 5  ### b =  9      
### 1answer =  progrmersam 
### 1 = progr
### 2 = asrem
### 3 = m
### 2answer = prograsremm  
---------------------------
### a = 6  ### b =  10     
### 1answer =  prograsremm 
### 1 = progra
### 2 = mmers
### 3 =
### 2answer = programmers  
---------------------------


*/