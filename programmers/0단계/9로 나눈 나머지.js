//9로 나눈 나머지


function solution(number) {
    return [...number].reduce((acr, cur) =>{
        acr += Number(cur);
        return acr %9;
    },0)
}

let str = "78720646226947352489";
console.log(solution(str));
