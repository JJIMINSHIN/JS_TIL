// 조건에 맞게 수열 변환하기 1
function solution(arr) {
    var answer = [];
    arr.forEach((item)=>{
        if(item >=50 && item %2 ==0) answer.push(item/2)
        else if(item <50 && item %2 != 0) answer.push(item*2);
        else answer.push(item);
    });
    return answer;
}

//map 이용
function solution2(arr) {
    return arr.map(x => (x >= 50 && x%2 == 0) ? x/2 : (x < 50 && x%2 != 0) ? x*2 : x);
}