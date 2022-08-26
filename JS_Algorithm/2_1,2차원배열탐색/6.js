function sol(n,arr){
    let result = diagonal = reverse = 0;

    // row, column
    for(let i=0; i<n; i++){
        //row, col은 한번 돌면 초기화 해줘야한다.
        let row = col = 0
        for(let j=0; j<n; j++){
            row += arr[i][j]
            col += arr[j][i]
        }
        result = Math.max(row, col)
    }

    //대각선 구하기
    for(let i=0; i<n; i++){
        diagonal += arr[i][i];
        //반대 대각선
        reverse += arr[i][n-i-1];

    }

    result = Math.max(result, diagonal, reverse);
    return result
}

let n = 5;
let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(sol(n, arr))