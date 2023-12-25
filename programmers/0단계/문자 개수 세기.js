/*
제목 : 문자 개수 세기
대문자 A-Z : 65 - 90
소문자 a-z : 97 -122
문자의 아스키코드를 구하는 함수 : charCodeAt()
아스키코드의 문자를 구하는 함수 : String.fromCharCode()
대소문자 판별하는 부분 ch>= 97 && ch<=122 이렇게 했어도 됐었겠지만 함수 써보고 싶어서 아래와 같이 구현함!
*/


function solution(my_string) {
    var answer = Array(52).fill(0);
    for(let i=0; i<my_string.length;i++){
        let ch =  my_string.charCodeAt(i);
        if(String.fromCharCode(ch) >='a'&& String.fromCharCode(ch)<='z') answer[ch-71]++;
        else answer[ch-65]++;
    }
    
    return answer;
}

console.log(solution("Programmers"))