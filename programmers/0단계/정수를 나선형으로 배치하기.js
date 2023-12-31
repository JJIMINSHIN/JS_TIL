/*
제목 : 정수를 나선형으로 배치하기
참고 :
- 이건 도저히 생으로 푸는 것 말고는 답이 없어 보여서 남풀문 햇다 ㅎ
*/


function solution(n) {
    const move = [[0, 1], [1, 0], [0, -1], [-1, 0]]; //이동값(우,하,좌,상)
    const answer = Array.from(Array(n), () => Array(n).fill(0)) // 길이가 n인 배열 만들어줌
  
    let x = 0, y = 0, dir = 0, num = 1;
    while(num <= n**2) {
        answer[x][y] = num; //answer[0][0] =1부터 시작
        // 다음 위치 값 구하기
        let nextX = x + move[dir][0];
        let nextY = y + move[dir][1];
        if (nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || answer[nextX][nextY] !== 0) {
            dir = (dir + 1) % 4;  //길이가 제한 길이를 오버하면, 다음 방향, 다음 행으로 가게끔 (상하좌우 4종류니깐 %4)
            nextX = x + move[dir][0];
            nextY = y + move[dir][1];
        }
        x = nextX;
        y = nextY;
        num++;
    }
    return answer;
}

console.log(solution(4))