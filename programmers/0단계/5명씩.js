//5명씩

function solution(names) {
    return names.filter((v,idx) => idx % 5 == 0);
}

let arr = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];

console.log(solution(arr));