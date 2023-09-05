//두 수의 연산값 비교하기

function solution(a, b) {
    var answer = Number(a+''+b)
    var result = 2*a*b
    return answer >= result ? answer : result;
}

console.log(solution(2,91));
