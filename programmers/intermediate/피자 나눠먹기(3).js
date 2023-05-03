// 피자 나눠먹기(3)

function solution(slice, n) {
    return n % slice !== 0 ? Math.floor(n /slice)+1 : Math.floor(n /slice)
}

console.log(solution(7,10))