/*
제목 : 이차원 배열 대각선 순회하기
참고 :
- 처음 테스트 케이스는 통과하였는데 테스트 8 말고는 다 실패처리
- j문 돌렸을때 j<board.length로 돌려서 실패가 났던것
- j는 i의 원소만큼 돌아야 하므로 j<board[i].length 처리
*/

function solution(board, k) {
    var answer = 0;
   for(let i =0; i<board.length; i++){
    for(let j=0; j<board[i].length;j++){
        if(i+j <=k)  answer += board[i][j] 
    }
   }
   return answer;
}


let board = [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]];
console.log(solution(board,2));