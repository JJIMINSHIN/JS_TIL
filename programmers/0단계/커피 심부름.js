//커피 심부름


function solution(order) {
    var answer = 0;
    for (x of order) {
        if(x.includes("latte")) answer += 5000
        else answer += 4500
    }
    return answer;
}

let order = ["americanoice", "americano", "iceamericano"];
console.log(solution(order))