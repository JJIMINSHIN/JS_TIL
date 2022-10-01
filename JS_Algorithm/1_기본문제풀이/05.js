function solution(arr){
    let min = arr[0];
    for(let i =1; i<arr.length; i++){
        if(arr[i]<min) {
            min = arr[i];
        }
    }
    return min
}
console.log('solution',solution([5, 3, 7, 11, 2, 15, 17]))


//5번 추가보충(for문 사용 X)
function sol2(arr){
    let answer = Math.min(...arr);  //Math.min.apply(null, arr)
    return answer;
}
console.log('sol',solution([5, 3, 7, 11, 2, 15, 17]))

