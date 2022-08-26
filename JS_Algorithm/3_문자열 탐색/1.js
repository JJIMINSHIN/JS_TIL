const input =(str) =>{
    let newStr = str.toUpperCase().split('').reverse()
    if(str.toUpperCase() == newStr){
        return 'YES'
    }else{
        return 'NO';
    } 
}

console.log(input('gooG'))