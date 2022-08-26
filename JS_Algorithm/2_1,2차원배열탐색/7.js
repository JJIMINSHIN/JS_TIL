function sol(n, arr) {

    let result = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1; //1이면 참
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k]; //x좌표
                let ny = j + dy[k]; //y좌표
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
                    //현재 좌표보다 가려고 하는 좌표가 크면 봉우리가 아님
                    flag = 0;
                    break;
                }
            }
            if(flag) result++;

        }
        console.log('result', result)
    }
    return result;
}

let n = 5
let arr = [[5, 3, 7, 2, 3],
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];

console.log(sol(n, arr))