// 순서 바꾸기

function solution(num_list, n) {
    var answer = num_list.slice(n,);
    var result =  num_list.slice(0,n);
    return [...answer,...result];
}

/*
참고하기 좋은 코드
function solution(num_list, n) {
    num_list.push(...num_list.splice(0, n));
    return num_list
}
fn(...arr)는 배열의 요소들이 개별 매개변수로 전달됨

*/
let arr =[5, 2, 1, 7, 5];
console.log(solution(arr,1));