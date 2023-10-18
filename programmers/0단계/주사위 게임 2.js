//주사위 게임 2


function solution(a, b, c) {
    if(a == b &&  b == c) return (a + b + c) * pow(a,b,c,2)*(pow(a,b,c,3));
    else if (a === b || a === c || b === c) return  (a + b + c) * (pow(a,b,c,2));
    else return a+b+c;
}

const pow = (a,b,c,n) =>{
    return Math.pow(a, n) + Math.pow(b, n) + Math.pow(c, n);
}


console.log(solution(5,3,3));
