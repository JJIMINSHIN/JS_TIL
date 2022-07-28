const findStr = (n, m) => {
    let cnt = 0;
    for (let i of n) {
        if (i === m) cnt++
    }
    return cnt;
}

console.log(findStr('COMPUTERPROGRAMMING', 'R'));