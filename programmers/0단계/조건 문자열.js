//조건 문자열

function solution(ineq, eq, n, m) {
    if(ineq == "<"){
        if(eq == "=") return n <= m ? 1 :0
        else return n < m ? 1 :0
    }else if(ineq == ">"){
        if(eq == "=") return n >= m ? 1 :0
        else  return n > m ? 1 :0
    }
}

console.log(solution(">", "!",41,78))