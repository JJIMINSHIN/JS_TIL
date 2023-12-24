//수 조작하기 2


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