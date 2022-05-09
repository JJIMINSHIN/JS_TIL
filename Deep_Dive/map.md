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


- 맵은 키로 객체를 허용
    
    ```jsx
    let john = {name :"john"};
    
    let visitsCountMap = new Map();
    
    visitsCountMap.set(john, 123);
    
    console.log(visitsCountMap.get(john)); //123
    ```
    
- 객체를 키로 사용할 수 있다는 점은 맵의 가장 중요한 기능 중 하나
- 객체에는 문자열 키 사용할 수 있음 하지만 객체키는 사용할 수 없다
- 객체형 키 객체
    
    ```jsx
    let map_key = {name: "shin"};
    let visitCountObj = {}
    visitCountObj[shin] = 123;
    console.log(visitCountObj); // shin is not defined
    visitCountObj['shin'] = 123;
    console.log(visitCountObj)//{ shin: 123 }
    ```
    
    - visitCountObj는 객체이기 때문에 모든 키 문자형으로 변환
    - shin은 문자형으로 변환되어 “[object Object]”가 됨

※ 맵이 키를 비교하는 방식

- 알고리즘 사용해 값의 등가 여부 확인
- 일치 연산자(===)와 거의 유사 | 차이 : NaN과 NaN을 같다고 취급
- 맵에선 NaN도 키로 사용

⇒ 수정하거나 커스터 마이징 불가

※ 체이닝

- map.set 호출할 때마다 맵 자신 반환 → 체이닝 할 수 잇음
    
    ```jsx
    map.set('1', 'str1')
      .set(1, 'num1')
      .set(true, 'bool1');
    ```
    

### 맵 요소 반복 작업

- 맵 반복작업 메서드
    - map.keys() : 각 요소의 키를 모은 반복 가능한(iterable) 객체 반환
    - map.values() : 각 요소의 값을 모은 이터러블 객체 반환
    - map.entries(): 요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체 반환 → for..of 반복문의 기초
        
        ```jsx
        let recipeMap = new Map([
            ['cucumber', 500],
            ['tomatoes', 350],
            ['onion', 50],
        ]);
        
        for(let vegetable of recipeMap.values()){
            console.log('vegetable', vegetable);
        }
        
        for(let amount of recipeMap.values()){
            console.log('amount', amount);
        }
        
        for(let entry of recipeMap){
            console.log('entry',entry);
        }
        ```
        
        - 결과
            
            ```jsx
            vegetable 500
            vegetable 350
            vegetable 50
            amount 500
            amount 350
            amount 50
            entry [ 'cucumber', 500 ]
            entry [ 'tomatoes', 350 ]
            entry [ 'onion', 50 ]
            ```
            
        - 맵 삽입 순서를 기억해야됨 → 삽입된 순서대로 순회 실시, 객체가 프로퍼티 순서를 기억 못하는 것과 다름
        - 맵은 배열과 유사하게 내장 매서드 forEach도 지원
        

### Object.fromEntries : 맵을 객체로 바꾸기

- 이 메서드는 각 요소가 [키, 값]쌍인 배열을 객체로 바꿔줌

```jsx
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

console.log(prices);  //{ banana: 1, orange: 2, meat: 4 }
console.log(prices.meat); //4
```

- 맵을 객체로 바꾸기

```jsx
let obj = Object.fromEntries(map.entries()); 
```

- map.entries 호출하면 맵의 [키,값]을 요소로 가지는 이터러블 반환
    - (*)로 표시한 줄을 좀 더 짧게 줄이는 것도 가능
    
    ```jsx
    let obj = Object.fromEntries(map) //.entries() 생략
    ```
    
    - `Object.fromEntries`는 인수로 이터러블 객체를 받기 때문에 짧게 줄인 코드도 이전 코드와 동일하게 동작
