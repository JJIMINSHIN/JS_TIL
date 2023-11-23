//리스트 자르기


function solution(n, slicer, num_list) {
    var answer = [];
    switch (n){
        case 1:
            answer = num_list.slice(0,slicer[1]+1);
            break;
        case 2:
            answer = num_list.slice(slicer[0],);
            break;
        case 3:
            answer = num_list.slice(slicer[0],slicer[1]+1);
            break;
        case 4:
            answer = num_list.slice(slicer[0],slicer[1]+1).filter((v,idx) => idx%slicer[2] ==0);
            break;
        default :
            answer;
    }

    return answer;
}

let n=4;
let arr1=[1, 5, 2];
let arr2=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(n,arr1,arr2));