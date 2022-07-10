function solution(arr){
    let filter = arr.filter((item) => item%2 !== 0)
    let sumOdd = filter.reduce((sum, curVal)=> {return sum+curVal},0)

    console.log(sumOdd);
    console.log(Math.min(...filter));

}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));

