const findStr =(n,m) =>{
    let cnt =0
    let result = n.split('').map((item) => item === m ? cnt++: '');
    return cnt;
}

const findStr2 = (n, m) => {
    let cnt = 0;
    for (let i of n) {
        if (i === m) cnt++
    }
    return cnt;
}

console.log(findStr('COMPUTERPROGRAMMING', 'R'));
console.log(findStr2('COMPUTERPROGRAMMING', 'R'));