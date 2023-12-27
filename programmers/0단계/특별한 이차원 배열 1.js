/*
제목 : 
참고 : 
- Array.from()은 ES6에 새로 추가된 문법
- Array.from() 의 첫 번째 인자는 배열로 만들 이터러블한 객체가 되며, 두 번째 인자는 생성한 배열의 모든 원소에 대해 수행할 맵핑 함수
   => Array.map()

const arr = Array.from(Array(31), (_, index) => index + 1);
console.log(arr);
[
   1,  2,  3,  4,  5,  6,  7,  8,  9,
  10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31
]

function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}
=> 테스트 케이스가 몇개 안되어서 그런지 이중 for문이랑 시간차는 거의 안나는듯
그래도 알아두면 좋으니깐 공부해놓기!

 

*/

function solution(n) {
    let answer =[]
    for(let i=0; i<n; i++){
       let arr =[];
       for(let j=0; j<n; j++){
          if(i ==j) arr.push(1)
          else arr.push(0)
       }  
       answer.push(arr)
    }
    return answer;
 }
 
 console.log(solution(3));
 
  