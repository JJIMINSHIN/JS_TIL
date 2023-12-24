/*
 수 조작하기 2
 num[1]-num[0] = 1 이면 w
 num[1]-num[0] = -1 이면 s
 num[1]-num[0] = 10 이면 d
 num[1]-num[0] = -10 이면 a
 문제 이해하는데 시간을 제일 오래 잡아먹은 문제..
*/


function solution(numLog) {
    var answer = '';
    for(let i =0; i<numLog.length; i++){
       var tmp = numLog[i+1]-numLog[i];
       switch (tmp) {
          case 1:
             answer += 'w'
             break;
          case -1:
             answer += 's'
             break;
          case 10:
             answer += 'd'
             break;
          case -10:
             answer += 'a'
             break;
          default:
             break;
       }
       //console.log("tmp = "+tmp);
    }
    
    return answer;
 }
 
 let arr =[0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1];
 console.log(solution(arr));