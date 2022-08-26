function sol(n,arr){
    let result = diagonal = reverse = 0;

    // row, column
    for(let i=0; i<n; i++){
        //row, col은 한번 돌면 초기화 해줘야한다.
        let row = col = 0
        for(let j=0; j<n; j++){
            row += arr[i][j]
            col += arr[j][i]
            // console.log('row : ' ,row,'col : ' , col)
        }
        result = Math.max(row, col)
    }
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