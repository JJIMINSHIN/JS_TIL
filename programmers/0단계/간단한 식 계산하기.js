// 간단한 식 계산하기


function solution(binomial) {
    let tmp = binomial.split(" ");
    return tmp[1] == "+" ? Number(tmp[0]) +Number(tmp[2]) : tmp[1] == "-" ? Number(tmp[0]) - Number(tmp[2]) : Number(tmp[0]) *Number(tmp[2]) ;
}


let result = "40000 * 40000";
console.log(solution(result))