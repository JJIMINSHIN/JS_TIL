const Atoshap = (str) => {
    str = str.toUpperCase();
    if (str.indexOf('A')) {
        let newStr = str.replaceAll('A', '#');
        return newStr;
    }
};
console.log( Atoshap('banana'));



const Atoshap2 = (str) => {
    str = str.toUpperCase();
    str = str.split('').map((item) => item === 'A' ? '#' : item).join('')
    return str;
};

console.log(Atoshap2('banana'));
