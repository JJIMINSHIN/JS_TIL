/*
제목 : 정사각형으로 만들기
참고 :  
- i =col, i=row 부터 하는 이유는 부족한 수만큼만 행, 열에 더해주면 되기때문!
*/


function solution(arr) {
    let row = arr.length;
    let col = arr[0].length;
    //console.log("### row = ",row ," ### col = ",col)

    if(row >col){ //행이 열보다 클때 

    for(let i=col; i<row; i++){ //row보다 작을 경우만 넣으면 되니깐
        for(let j=0; j<row; j++){
                arr[j].push(0)
            }
        }
    }else {
        for(let i=row; i<col; i++){
            arr.push(new Array(col).fill(0))
        }
    }
    return arr;
}

let arr = [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]];
arr= [[57, 192, 534, 2], [9, 345, 192, 999]];
console.log(solution(arr));

