# Map() |  Set()

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
    

# Set()

- 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션
- 셋에 키가 없는 값이 저장됨
- 주요 매서드

```jsx
1. new Set(iterable)
: 셋을 만듦, 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줌
2. set.add(value)
: 값 추가, 셋 자신을 반환
3. set.delete(value)
: 값 제거, 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false
4. set.has(value)
: 셋 내에 값 존재 -true, 아니면 false
5. set.clear()
: 셋 비움
6. set.size()
:셋에 몇개 의 값이 있는지 세줌
```

- 셋 내에 동일값(value) 있으면 `set.add(value)`를 아무리 많이 호출하더라도 아무런 반응 없음
    - 셋 내의 중복값이 없는 이유
- 단 한번만 사용될 때 적합

```jsx
let set = new Set();

let john = {name : "john"};
let pete = {name : "pete"};
let mary = {name : "mary"};

set.add(john);
set.add(pete);
set.add(mary);
set.add(pete);

console.log(set.size); //3 

for(let item of set){
    console.log(item); 
}
```

```jsx
{ name: 'john' }
{ name: 'pete' }
{ name: 'mary' }
```

- 셋 대신 배열을 사용해 정보 저장 후 중복값 여부는 배열 메서드인 `arr.find`이용해 확인할 수 있음
- `arr.find`는 배열 내 요소 **전체**를 뒤져 중복 값을 찾기 때문에, 셋보다 성능면에서 떨어짐
- 값의 유일무이함을 확인하는데 최적화됨

 

### 셋의 값에 반복 작업하기

for..of 나 forEach 사용해 셋의 값을 대상으로 반복작업 수행가능

```jsx
let set = new Set(['oranges', 'apples', 'banana']);

for(let value of set) console.log(value);

//내가 쓴 forEach
set.forEach(function (item){
    console.log(item)
})

//책에서 사용한 forEach
set.forEach((value, valueAgain, set) => {
  console.log(value);
});
```

- 책에서 인수 3개 사용한 이유
    - 첫 번째는 값, 두번째도 같은 값인 valueAgain, 세 번째는 목표로하는 객체(set)
    - 동일값 인수 두번 등장 ⇒ 맵과의 호환성 때문
    - 맵을 셋으로, 셋을 맵으로 교체하기 쉽기 때문
- 셋 반복 작업 메서드

```jsx
1. set.keys() 
: 셋 내의 모든 값 포함하는 이터러블 객체 반환
2. set.values()
: set.keys와 동일 작업, 맵과의 호환성을 위해 만들어진 메서드
3. set.entries()
: 셋 내의 각 값을 이용해 만든 [ value, value] 배열을 포함하는 이터러블 객체 반환
-> 맵과의 호환성을 위해 만들어짐
```

- 맵과 셋이 반복 작업 수행할땐, 해당 컬렉션에 요소나 값이 추가된 **순서대로** 수행됨
- 두 컬렉션은 정렬이 되어있지 않다고 할 수 없다
- 컬렉션 내 요소나 값을 재정렬하거나 숫자를 이용해 특정 요소 및 값을 가지고 오는것은 불가능

### 과제

1. [배열에서 중복 요소 제거하기](https://ko.javascript.info/map-set#ref-968)

내가 작성한 답                                                               해답

```jsx
function unique(arr){
  arr = [];
    for(let item of arr){
        console.log(item)
    }
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))
```

```jsx
function unique(arr){

    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))
```

- 오류
    - 중복값을 제거하기 위해 루프를 돌아야 된다고 생각
    - `Array.from` 메서드를 활용해서 유사 배열객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체 만듦
    
1. **[애너그램 걸러내기](https://ko.javascript.info/map-set#ref-969)**

```jsx
const sol =(arr) =>{
    let map = new Map();
    arr.forEach(e => {
        let sorted = e.toLowerCase().split('').sort().join('');
        map.set(sorted, e);
    });

    return Array.from(map.values())
}

console.log(sol(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))
```

1. **[반복 가능한 객체의 키](https://ko.javascript.info/map-set#ref-2228)**

```jsx
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
consoel.log(keys)
```