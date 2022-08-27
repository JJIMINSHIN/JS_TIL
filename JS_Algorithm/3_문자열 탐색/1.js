const inputIndex =(str) =>{
    str = str.toUpperCase();
    let n = str.length
    for(let i =0; i<n; i++){
        if(str[i] == str[n-i-1]) return 'YES'
        else return 'NO'
    }
    
}

const inputSplit =(str) =>{

    str = str.toLowerCase()
    if(str.split('').reverse().join('') == str) return 'YES'
    else return 'NO' 
}

console.log(inputIndex('gooG'))
console.log(inputSplit('gooG'))