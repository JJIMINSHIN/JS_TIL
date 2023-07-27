//꼬리 문자열

function solution(str_list, ex) {
    return str_list.filter((v) => !v.includes(ex)).join("");
}

let str_list = ["abc", "def", "ghi"];
let ex = "ef";
console.log(solution(str_list, ex));