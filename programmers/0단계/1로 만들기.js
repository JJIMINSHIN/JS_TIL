/*
제목 : 1로 만들기
날짜 : 23.12.27
*/


function solution(num_list) {
    var answer = 0;
    num_list.forEach((v) => {
       while (v > 1) {
          v = v % 2 == 0 ? v / 2 : (v - 1)/2;
          answer++;
       }
    })
    return answer;
 }
 
 let arr = [12, 4, 15, 1, 14];
 console.log(solution(arr));