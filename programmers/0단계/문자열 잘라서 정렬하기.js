//문자열 잘라서 정렬하기
function solution(myString) {
    return myString.split('x').filter((v) =>v != "").sort();
}