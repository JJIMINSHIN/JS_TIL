//수열과 구간 쿼리 1


function solution(arr, queries) {
    queries.forEach(([a,b]) => {
       //console.log(a," = ",b);
       for(let i=a; i<=b; i++) {
          //console.log("before = "+arr);
          arr[i]++;
          //console.log("after = "+arr);
       }
    });
    return arr;
 }
 
 let arr =[0, 1, 2, 3, 4];
 let queries=[[0, 1],[1, 2],[2, 3]];
 console.log(solution(arr,queries));