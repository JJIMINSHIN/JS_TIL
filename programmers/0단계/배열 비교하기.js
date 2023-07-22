// 배열 비교하기

function solution(arr1, arr2) {

    let answer = -1;
    let a_compare = arr1.reduce((v, x) => x + v);
    let b_compare = arr2.reduce((v, x) => x + v);

    if (arr1.length > arr2.length) answer = 1;
    else if (arr1.length == arr2.length) {
        if (a_compare > b_compare) answer = 1;
        else if (a_compare == b_compare) answer = 0;
    }
    return answer;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 3, 3, 3, 3];

console.log(solution(arr1, arr2));