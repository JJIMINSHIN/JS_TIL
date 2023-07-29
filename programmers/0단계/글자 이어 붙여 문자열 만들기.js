// 글자 이어 붙여 문자열 만들기

function solution(my_string, index_list) {
    var answer = '';
    for(let i=0; i<index_list.length; i++){
        answer += my_string.split('')[index_list[i]];
    }
    return answer;
}


// map 사용

function solution_2(my_string, index_list) {
    return index_list.map((e) => my_string[e]).join('');
}


let str = "zpiaz";
let arr = [1, 2, 0, 0, 3];
console.log(solution_2(str, arr));