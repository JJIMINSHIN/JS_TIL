// 문자열의 뒤의 n글자

function solution(my_string, n) {
    return my_string.split('').slice(my_string.length-n,).join('');
}