const outPut = (str) =>{
    let result ='';
    for(let i=0; i<str.length; i++){
        if(str.indexOf(str[i]) === i) result += str[i]
    }
    return result;
}

console.log(outPut('ksekkset'))


function solution(s) {
    return [...new Set(s)].join('');
}

console.log(solution('ksetkset'));