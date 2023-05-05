// 한 번만 등장한 문자

const solution = (s) =>{
    return [...s].filter(v => [...s].filter(x => x ==v).length == 1).sort().join('');
}


function solution2(s) {
    var answer = [];
    for(let x of s){
        if(s.indexOf(x) == s.lastIndexOf(x)) answer.push(x);
    }
    return answer.sort().join('');
}

console.log(solution("hello"));


/*
arr.indexOf() => 배열 요소 중 찾을 수 있는 첫번째 인덱스 반환
arr.lastIndexOf() => 배열 요소 중 찾을 수 있는 마지막 인덱스 반환

이 둘이 같다 => 문자가 한번만 등자했다.
*/