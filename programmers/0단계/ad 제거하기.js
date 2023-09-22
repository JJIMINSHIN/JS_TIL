// ad 제거하기

function solution(strArr) {
    return strArr.filter((v) => !v.includes("ad"));
}

let arr =["there","are","no","a","ds"];
console.log(solution(arr));