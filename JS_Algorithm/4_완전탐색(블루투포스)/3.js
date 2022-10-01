const solution = (arr) =>{
    let answer = 0;
    m =arr.length //테스트 횟수
    n = arr[0].length; //학생

    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=n; j++){
            let cnt =0;
            // console.log(i,j)
            for(let k=0; k<m; k++){
                let pi=pj=0;
                for(let s=0; s<n; s++){
                    // i,j 학생 등수 구하기
                    if(arr[k][s] === i) pi =s;
                    if(arr[k][s] === j) pj =s;
                }
                // i,j의 등수 정해졌으니 테스트 통과
                if(pi<pj) cnt ++;
            }
            // cnt와 테스트 횟수가 같아야 멘토, 멘티가 결정된다
            if(cnt ===m) answer++
        }
    }
    return answer;
};

let arr =[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]; 
console.time();
console.log('solution', solution(arr));
console.timeEnd();