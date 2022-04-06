function solution(numbers) {
    let cnt = 0;
    for(let i=0; i<10; i++){
        if(!(numbers.includes(i))) cnt+= i
    }
    return cnt

}