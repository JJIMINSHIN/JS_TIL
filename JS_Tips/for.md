## forEach 

- Array의 prototyoe을 상속받는 객체가 사용
- 반복문이 아닌 **함수**
- 인자로 함수를 받아 각 배열의 요소에 해당하는 함수 적용
- Array만 반복

```
const arr = [1,2,3]
arr.forEach(item =>{
    console.log(item) //1 2 3
})
```
<br>

## for...in

- 객체 키에 차례로 접근
- Array 보다는 Object 위주로 사용 권장 -> 메모리 낭비


## for..of
- 이터러블한 객체 순회 (Array, Object 포함)
- 강력한 반복문