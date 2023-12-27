/*
제목 : 특별한 이차원 배열 2
*/

function solution(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i][j] == arr[j][i]) return 1;
            else return 0;
        }
    }
}

var arr =[[5, 192, 33], [192, 72, 95], [33, 95, 999]];
//arr =[[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]	
console.log(solution(arr))