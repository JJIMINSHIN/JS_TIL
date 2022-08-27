function solution(str) {
    //소문자일땐 a-z
    str = str.toUpperCase().replaceAll(/[^A-Z]/g, '');
    if(str.split('').reverse().join('') === str) return 'YES'
    else return 'NO'
}


let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));