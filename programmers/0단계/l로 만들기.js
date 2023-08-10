// l로 만들기

function solution(myString) {
    //console.log( "l".charCodeAt(0))   
    return myString.split('').map((x) => x.charCodeAt(0) <108 ? x.replace(x, "l")  : x).join('');
    
}

console.log(solution("abcdevwxyz"));

/*
문자자체로도 비교가 되어서
    return [...myString].map((v) => v < 'l' ? 'l' : v).join('');
이런식으로도 가능
*/

