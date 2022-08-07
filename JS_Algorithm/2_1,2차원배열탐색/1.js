const test = (arr) =>{
    let newOut =[];
    arr.reduce((acc, cur) =>{
        if(cur > acc) newOut.push(cur);
        return cur;
    },0)

    return newOut;
}

console.log(test([7, 3, 9, 5, 6, 12]))