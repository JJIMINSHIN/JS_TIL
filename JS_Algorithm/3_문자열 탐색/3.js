//정규식 이용
const regNum = (s) => {
    s = Number(s.replace(/[^0-9]/g, ''))
    return s
}

// isNaN 이용1
const isNanNum1 = (s) => {
    let res = '';
    for (let x of s) {
        if (!isNaN(x)) res = res * 10 + Number(x);
    }
    return res
}

// isNaN 이용2
const isNanNum2 = (s) => {
    let res = '';
    for (let x of s) {
        if (!isNaN(x)) res += x;
    }
    return +res
}

// 아스키코드
const ascNum = (s)=>{
    let res ='';
    for(let x of s){
        console.log('x', x, 'x.charCodeAt()', x.charCodeAt())
        xNum= x.charCodeAt();
        
        if( xNum >= 48 && xNum <=57) res += x;
    }
    return +res;
}


console.log(regNum('g0en2T0s8eSoft'))
console.log(isNanNum1('g0en2T0s8eSoft'))
console.log(isNanNum2('g0en2T0s8eSoft'))
console.log(ascNum('g0en2T0s8eSoft'))
