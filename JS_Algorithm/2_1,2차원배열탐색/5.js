const solution = (n, arr) => {
    let result = Array.from({ length: n }, () => 1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) result[i] ++
        }
        console.log(result)
    }
    return result
}

console.log(solution(5, [87, 89, 92, 100, 76]))

/* 
 중첩문 안에서의 result값
[ 4, 1, 1, 1, 1 ]
[ 4, 3, 1, 1, 1 ]
[ 4, 3, 2, 1, 1 ]
[ 4, 3, 2, 1, 1 ]
[ 4, 3, 2, 1, 5 ]
[ 4, 3, 2, 1, 5 ]

*/