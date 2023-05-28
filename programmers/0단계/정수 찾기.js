//정수 찾기

function solution(num_list, n) {
    return num_list.filter(v => v==n).length >= 1 ? 1 :0

     /*
    // 방법 2 includes 사용
    return num_list.includes(n) ? 1 :0;
    */
}



let arr = [15, 98, 23, 2, 15];
console.log(solution(arr, 3))