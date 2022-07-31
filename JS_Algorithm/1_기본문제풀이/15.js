const outStr = (str) => {
    let mid = Math.floor(str.length/2);
    return str.length % 2 === 0 ? str.substring(mid-1, mid+1) : str.substring(mid, mid+1);
}

console.log(outStr('study'))
