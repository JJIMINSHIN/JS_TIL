function solution(day, arr){
    let answer = 0;
    for(let x of arr){
        if(x%10===day) answer++;
    }
    return answer;
}

function solution2(day, arr){
    let cars = arr.filter((answer) => answer % 10 === day);
    return cars.length
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3,arr))
console.log(solution2(3,arr))