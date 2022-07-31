const outPut = (n, s) =>{
    return [... new Set(s)].join('\n')
}

console.log(outPut(5, ["good", "time", "good", "time", "student"]));

const outPut2 = (n, s) => {
    let newStr = s.filter((item, idx) => s.indexOf(item) === idx);
    return newStr.join('\n');
}

console.log(outPut2(5, ["good", "time", "good", "time", "student"]));
