//https://junghyeonsu.tistory.com/283

let input = []

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function(line) {
    input.push(line.trim())
  })
  .on('close', function solution(T, number) {
    const cases =  [...Array(1)];

    cases[1] = 1;
    cases[2] = 2;
    cases[3] = 4; //3일때 4개나옴

    for(let i =0; i< 11; i++){
        cases[i] = cases[i-1] + cases[i-2] +cases[i-3];
    }

    for(let i =0; i<T; i +=1){
        console.log(cases[number[i]]);
    }

  })