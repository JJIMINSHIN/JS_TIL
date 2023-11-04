//날짜 비교하기


function solution(date1, date2) {
    return new Date(date1) < new Date(date2) ? 1 : 0;
}

let d1 = [2022, 5, 4];
let d2 = [2022, 5, 5];
console.log(solution(d1,d2))
