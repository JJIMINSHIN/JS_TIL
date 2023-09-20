//할 일 목록

function solution(todo_list, finished) {
    return todo_list.filter((v,idx) => finished[idx ]== false);
  }
  
  let arr1 = ["problemsolving", "practiceguitar", "swim", "studygraph"];
  let arr2 = [true, false, true, false];
  console.log(solution(arr1, arr2));
  