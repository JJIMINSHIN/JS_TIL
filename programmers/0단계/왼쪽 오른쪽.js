//왼쪽 오른쪽


function solution(str_list) {
   
    for(let i =0; i<str_list.length; i++)
    {
       console.log(str_list[i] );
       if(str_list[i] =="l") return str_list.splice(0,i); 
       else if(str_list[i]  =="r") return str_list.splice(i+1,);
 
    }
    return [];
 }
 
 let arr =["u", "u", "l", "r"]	;
 console.log(solution(arr));