//문자열 겹쳐쓰기

function solution(my_string, overwrite_string, s) {
    return my_string.slice(0,s)+overwrite_string+my_string.slice(overwrite_string.length+s,);
}

let str1 ="Program29b8UYP";
let str2 = "merS123";
let n = 7;

console.log(solution(str1, str2, n));