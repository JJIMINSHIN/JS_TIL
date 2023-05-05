// 영어가 싫어요

let numToStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
]

function solution(numbers) {
    numToStr.forEach((item, idx) =>{
        //console.log("item  :  "+item, "   idx  :",idx);
        numbers = numbers.replace(item, idx);
    })

    return Number(numbers)
    
}

let numbers = "onefourzerosixseven";
console.log(solution(numbers));