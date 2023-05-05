// 배열 회전시키기
function solution(numbers, direction) {

    let answer = []
    
    if (direction == "rignt") {
        for(let i=0; i<numbers.length-1; i++){
            //console.log("numbers  : ", numbers[i]);
            answer[i] = numbers[i+1];
            console.log("i  : "+i +"  answer  :  ",answer[i-1]+"  numbers  :  "+numbers[i]);
            
        }
        
    } else {

    }
 return answer;

}

let arr = [1, 2, 3];

console.log(solution(arr, "rignt"));