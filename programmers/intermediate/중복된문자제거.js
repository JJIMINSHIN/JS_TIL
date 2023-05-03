// 중복된 문자 제거

function solution(my_string) {
    return my_string.split('').filter((x, idx) => my_string.indexOf(x) === idx).join('')
}

console.log(solution("We are the world"	));