function sol(num) {
    let max = 0, result;

    for (let n of num) {
        let sum=0, tmp = n;
        while (tmp) {
            sum += tmp % 10
            console.log('n : ',n,' sum : ', sum, ' tmp : ', tmp)
            tmp = Math.floor(tmp / 10)
        }

        // tmp가 더 클 경우 max에 넣어주기(비교), 원숫자 maxNum에 넣어주기
        if(sum > max) {
            max = sum;
            result = n; // 원본 넣어주기
            console.log('result의 값 : ',n)
        }else if(sum == max){
            if(n > result) result = n // 128과 137 비교
        }
    }
    return result;
}

const reduceSol = (arr) =>{
    let result, max=0;

    arr.forEach((item)=>{
        let tmp = item, sum=0;
        tmp = tmp.toString().split('').map(Number); //.map(Number)는 [ '1', '2', '8' ] ->[ 1, 2, 8 ]
        // console.log(tmp)
        tmp = tmp.reduce((a,b)=>{ 
            return a+b
        }, 0)

        if(tmp> max){
            max = tmp;
            result = item;
        }else if(tmp == max){
            if(item > result){
                result = item;
            }
        }
    });
    return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123];

// console.log(sol(arr));
console.log(reduceSol(arr))
