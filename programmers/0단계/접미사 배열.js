/*
제목 : 접미사 배열
참고
- 결과값에 힌트가 있다.! 항상 결과값 잘 분석하기
- 뒤에서부터 하나씩 잘라서 return 하는 형태
- 마지막에 sort()(기본 오름차순)해주기 
*/


function solution(my_string) {
    var answer =[];
    for(let i=my_string.length;i>0; i--){
     answer.push(my_string.slice(-i,))
    }
    return answer.sort();
 }
 
 
 
 
 console.log(solution("banana"));