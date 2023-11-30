function solution(l, r) {
  let answer = [];
	let tmp;

	for(let i=l; i<=r; i++){
		tmp=String(i);
		//console.log(tmp);
    if(![...tmp].every(x=>x==='5'||x==='0'))continue;
		answer.push(i);
	}
	
    return answer.length ? answer : [-1];
}
