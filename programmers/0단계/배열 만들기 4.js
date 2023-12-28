/*
제목 : 배열 만들기 4

1. stk == [] ? stk.push(arr[i]), i++; :  2로 가기
2. stk[stk.length-1] < arr[i] : str[i].push(arr[i]), i++ : 3
3. stk[skt.length-1] > arr[i] : stk.pop()
*/

function solution(arr) {
    var stk = [];
    for(let i = 0; i<arr.length; i++){
        var len = stk.length;
        if(len == 0){
            stk.push(arr[i]);
        }else{
            if(arr[i] <= stk[len-1]) {
                stk.pop(); 
                i -= 1;
            }
            else {
                stk.push(arr[i]); 
            }
        }
    }
    return stk;
}

console.log(solution([1, 4, 2, 5, 3]));