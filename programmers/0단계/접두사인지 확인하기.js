// 접두사인지 확인하기

function solution(my_string, is_prefix) {
    let len = is_prefix.length;
    return my_string.slice(0,len) == is_prefix ? 1 : 0

}


console.log(solution("banana","bananan"	));
