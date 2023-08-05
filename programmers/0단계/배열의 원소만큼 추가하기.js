//배열의 원소만큼 추가하기

function solution(arr) {
    var answer = [];
    for(let i=0;i<arr.length; i++){
        for(let j=0; j<arr[i]; j++){
            //console.log("i  :  "+i , "   j  : "+j+"  arr[i] : ",arr[i])
            answer.push(arr[i])
        }
    }
    return answer;
}

//console.log(solution([5,1,4]));


//참고할만한 코드
function solution2(arr) {
    var answer = [];

    arr.map((a)=>{
        for(let i= 0; i<a; i++){
            //console.log(a)
            answer.push(a)
        }
    })

    return answer;
}

console.log(solution2([5,1,4]))