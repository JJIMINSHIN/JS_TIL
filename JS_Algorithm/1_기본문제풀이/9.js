const Atoshap = (str) => {
    str = str.toUpperCase();
    if (str.indexOf('A')) {
        let newStr = str.replaceAll('A', '#');
        return newStr;
    }
}

console.log( Atoshap('banana'));