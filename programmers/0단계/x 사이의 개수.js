//x 사이의 개수

function solution(myString) {
    return myString.split("x").map((x) => x.length);
}
console.log(solution("xabcxdefxghi"));
