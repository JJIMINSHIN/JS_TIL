const trans = (str) =>{
    let newStr = str
        .split('')
        .map((item) => item === item.toUpperCase()? item.toLowerCase() : item.toUpperCase())
        .join('')
    return newStr;
}

console.log(trans('StuDY'));