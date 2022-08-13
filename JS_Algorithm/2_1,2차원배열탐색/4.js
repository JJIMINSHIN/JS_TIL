const solution = (arr) => {
    let result = 0, cnt = 0;
    arr.forEach((item) => {
            if(item >0){
                cnt ++;
                result += cnt;
            } else {
                cnt=0;
            }
        })
        return result
}

function solution2(arr){
    arr.forEach((item) =>{
        item>0 ? (cnt++, result +=cnt) : cnt =0;
    })
}



console.log('solution', solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
console.log('solution2', solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
