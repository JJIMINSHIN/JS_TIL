// 코드 처리하기

function solution(code) {
    var answer = code.split("");
    let mode =0 ;
    let len = code.length;
    let ret = "";

    for (let i = 0; i < len; i++) {

        if(answer[i] == "1") mode ==0 ? mode =1 :  mode =0;
        else{
            if(mode == 0 && i%2 ==0  ) ret += answer[i]; 
            if(mode == 1 && i%2 !=0 ) ret += answer[i];
        }

    }

    return ret == "" ? ret = "EMPTY" : ret;

}