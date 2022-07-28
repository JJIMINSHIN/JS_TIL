const input = (str) =>{
    let result = str.
        split('')
        .map((item) => item === item.toUpperCase() ? item : item.toUpperCase())
        .join('');
    return result
}

console.log(input('ItisTimeToStudy'))

