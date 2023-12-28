/*

제목 : 배열 만들기 6
참고:
1. i <arr.length
2. stk == [] ? stk = arr[i]; i++ : 3
3. stk[stk.length-1] == arr[i] ? stk.pop(); i++ : 4 
4. stk[stk.length-1] != arr[i] ? stk.push(arr[i]), i++; : 5
5. 모든 과정 후 stk == [] ? return -1

*/
function solution(arr) {
    var stk = [];
    for(let i=0; i<arr.length; i++){
        var len = stk.length;
        if(len == 0) stk.push(arr[i]);
        else {
            if(stk[len-1] == arr[i])  stk.pop();
            else stk.push(arr[i]); 
        }
    }
    return stk.length !=0 ? stk : [-1];
}

let arr1 = [0, 1, 1, 1, 0]	
let arr2 = [0, 1, 0, 1, 0]	
let arr3 = [0, 1, 1, 0]	

console.log(solution(arr1));
console.log(solution(arr2));
console.log(solution(arr3));