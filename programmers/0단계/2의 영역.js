// 2의 영역

function solution(arr) {
    var answer= [];
    let idx = arr.indexOf(2);
    let len = arr.lastIndexOf(2);
    if(idx != -1){
        answer = arr.slice(idx,len+1);
    }
    else{
        answer.push(-1);
    }
    
    return answer;
}

// 더 간결하게 
const solution2 = (arr) =>{
    let idx = arr.indexOf(2);
    let len = arr.lastIndexOf(2);
    return !arr.includes(2) ? [-1] : arr.slice(idx,len+1);   
}

//let arr = [1, 1, 1]
let arr =[1, 2, 1, 2, 1, 10, 2, 1];
console.log(solution2(arr))
