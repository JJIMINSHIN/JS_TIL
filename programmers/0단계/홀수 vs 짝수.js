//홀수 vs 짝수
function solution(num_list) {
    var answer = 0;
    var result =0;
    for(let i=0; i<num_list.length; i++){
      if(i%2 == 0 ) answer += num_list[i];
      else if(i%2 !=0){
        result += num_list[i];
      }
    }
    return answer >= result ? answer : result;
  }
  
  
  let arr = [4, 2, 6, 1, 7, 6];
  console.log(solution(arr))