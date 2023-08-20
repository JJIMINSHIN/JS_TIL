//대소문자 바꿔서 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str= input[0];
    console.log([...str].map(x => x.toLowerCase() === x ? x.toUpperCase() : x.toLowerCase()).join(""));

});