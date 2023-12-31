/*
제목 : 그림 확대
*/

function solution(picture, k) {
    var answer = [];
   
    for (let i = 0; i < picture.length; i++) {
        let tmp = picture[i].split('').map((v)=>v.repeat(k)).join("");
        for (let j = 0; j < k; j++) {
            answer.push(tmp)
        }
    }
    return answer;
}

let pic = [".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."];
console.log(solution(pic, 2));
