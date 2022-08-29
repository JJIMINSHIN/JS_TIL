
function isPrime(num) {
    if (num <2) return false;
    for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false
    }
    return true;
}
const solution = (arr) => {
    let result = [];
    arr.forEach(item => {
        let n = Number(item.toString().split('').reverse().join(''));
        console.log(n)
        if (isPrime(n)) {
            // console.log(n)
            result.push(n)
        }
    });
    return result
}


let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr))