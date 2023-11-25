//글자 지우기


function solution(my_string, idc) {
    return my_string.split("").filter((v, idx) => !idc.includes(idx)).join("");
}

let str ="apporoograpemmemprs";
let idc = [1, 16, 6, 15, 0, 10, 11, 3];
console.log(solution(str,idc))