const solution = (arr) =>{
    let answer =1, max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]> max) {
            answer++; 
            max = arr[i];
        }
    }
    return answer
}


const sol = (arr) =>{
    return arr.sort((a,b) => a-b).filter((item) =>{
        let idx = arr.indexOf(item);
        if(arr[idx] < arr[idx+1]) return item
    }).length
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]))
console.log(sol([130, 135, 148, 140, 145, 150, 150, 153]))