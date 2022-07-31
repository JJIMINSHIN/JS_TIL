const input =(n, str) =>{
   let result = '';
   for(let i=0; i<n; i++){
    if(str[i].length > result.length) result = str[i]
   }
   return result;
}

const input2 =(n, str) =>{
    let wordLength = str.map((item) => item.length);
    let maxLength = Math.max(...wordLength);
    let result = wordLength.indexOf(maxLength);
    return str[result]
    
}

console.log(input(5, ['teacher','time','student','beautiful','good']));
console.log(input2(5, ['teacher','time','student','beautiful','good']))