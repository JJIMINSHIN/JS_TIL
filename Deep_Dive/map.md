# Map()

- 키가 있는 데이터 저장 ≒ 객체
- 주요 메서드 및 프로퍼티
    
    ```markdown
    1. new Map() : 맵 생성
    2. map.set(key, value) : key를 이용해 value 저장
    3. map.get(key) : key에 해당하는 값 반환 | 없으면 undefined
    4. map.has(key) : key : key ? true : false
    5. map.delete(key) : key 값 삭제
    6. map.clear() : 맵 안의 모든 요소 제거
    7. map.size : 요소 개수 반환
    ```
    
- 맵 : 키의 타입 변환시키지 않고 그대로 유지됨
    - 객체 : 키 문자형으로 반환키

```jsx
let map = new Map();

map.set('10', 'str');
map.set(1, 'num1');
map.set(true, 'boolean');

console.log(map.get(1)); //num1
console.log(map.get('10')); //str
console.log(map.size); //3
```

- map[key]는 map을 쓰는 바른 방법 X
    - 사용할 수는 있으나 map을 일반객체처럼 취급하게됨 ⇒ 여러 제약 생김
    - map 전용 메서드인 set, get 등 활용
