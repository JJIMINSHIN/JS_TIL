const logger = require('./logger');


//길이가 5인 배열 arr을 만들고 원하는 값으로 초기화 해 보세요.


let arr = [1, 2, 3, 4, 5];
logger.info(arr);


//함수 solution을 수정해서 인자로 받는 배열 arr의 첫번째 엘리먼트를 return하도록 만들어 보세요.

function solution(arr){
    return arr[0]
}

let result = solution([1,2,3,4,5])
logger.info(result);

//배열 arr의 앞에 "begin", 뒤에 "end" 문자열을 엘리먼트로 추가하세요.

var arr=[1,2,3];
arr.push("end");
arr.unshift("begin");

console.log(arr);