
const sol = (str) => {
    str = str + '';
    let answer = '';
    let cnt = 1;


    for (let i = 0; i < str.length-1; i++) {
        if (str[i]===str[i + 1]) cnt++
        else {
            answer += str[i];
            if (cnt > 1) {
                answer += String(cnt);
                cnt = 1  //같지 않으면 1로 다시 초기화
            }
        }
    }
    return answer
}

console.log(sol('KKHSSSSSSSE'))