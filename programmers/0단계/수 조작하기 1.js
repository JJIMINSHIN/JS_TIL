// 수 조작하기 1

function solution(n, control) {
    let str = control.split('');
    for(let x  of str){
        if(x=="w") n +=1;
        else if(x == "s") n -= 1;
        else if(x == "d") n += 10;
        else if(x == "a") n -= 10;
    }
    return n;
}

let str = "wsdawsdassw"	
console.log(solution(0, str));