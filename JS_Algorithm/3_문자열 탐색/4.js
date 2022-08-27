function solution(s, t) {
    let res = ans = fin = [];
    let cnt = 1000;
    let num = s.length

    for (let i = 0; i < num; i++) {
        if (s[i] === t) {
            cnt = 0;
            res.push(cnt)
        }
        else {
            cnt++;
            res.push(cnt);
        }
    }

    //cnt 재초기화
    cnt = 1000;

    for (let i = num - 1; i>=0; i--) {
        if (s[i] === t) cnt = 0
        else {
            cnt++
            res[i] = Math.min(res[i], cnt);
        }
    }
    return res


}

console.log(solution('teachermode', 'e'))