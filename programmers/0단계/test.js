// 배열에서 문자열 대소문자 변환하기

// 홀수 인덱스는 대문자, 짝수는 소문자, 0 == 소문자

const solution = (strArr) => {

    let answer = [];
    for (x of strArr) {
        if (strArr.indexOf(x) % 2 == 0)
            answer.push(x.toUpperCase())
        else
            answer.push(x.toUpperCase())
    }
    return answer;

}

function solution2(strArr) {
    return strArr.map((v, idx) => idx % 2 === 0 ? v.toLowerCase() : v.toUpperCase());

}

let arr = ["AAA", "BBB", "CCC", "DDD"];
console.log(solution(arr))
