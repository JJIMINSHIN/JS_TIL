let k = 1;
const i =3;

switch(i){
    case 1: k += 1;
    case 2: k ++;
    case 3: k =0;
    case 4: k +=3;
    case 5: k -= 10;
    default : k--;

}
console.log(k); // -8

switch(i){
    case 1: k += 1;
    case 2: k ++;
    case 3: k =0;
    case 4: k +=3;
    break;
    case 5: k -= 10;
    default : k--;

}

console.log(k) // 3