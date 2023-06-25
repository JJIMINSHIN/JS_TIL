//이어 붙인 수

function solution(num_list) {
    var answer =0;
    var val1 = Number(num_list.filter(v => v%2 !== 0).join(''));
    var val2 = Number(num_list.filter(v => v%2 === 0).join(''));
    answer = val1 + val2;
    return answer;
}

let arr =[5, 7, 8, 3];
console.log(solution(arr));