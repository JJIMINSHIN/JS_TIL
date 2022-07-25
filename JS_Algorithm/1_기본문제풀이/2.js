function solution(a, b, c){
    let max = a;
    let sum = a+b+c;
    if(max <b ) max = b;
    else if(max<c) max=c;
    if((sum - max) <= max) return "NO"
    return "YES"
}

console.log(solution(1, 7, 3));