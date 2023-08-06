//더 크게 합치기

function solution(a, b) {
    return Number(a+""+b) >= Number(b+""+a) ? Number(a+""+b): Number(b+""+a);
}

console.log(solution(89,8));