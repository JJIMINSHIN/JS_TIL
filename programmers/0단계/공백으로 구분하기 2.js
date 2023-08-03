// 공백으로 구분하기 2

function solution(my_string) {
    return my_string.split(" ").filter((v) => v != "");
}

let str = " i    love  you"	;
console.log(solution(str));