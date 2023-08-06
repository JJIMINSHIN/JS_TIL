//A 강조하기

function solution(myString) {   
    return myString.split("").map((v)=> v =="a" ? v.toUpperCase() : v !== "A"? v.toLowerCase() : v).join('');
}

console.log(solution("abstract algebra"));