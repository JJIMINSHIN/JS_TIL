<br>

## 배열 : 순서가 있는 컬렉션을 저장할 때 쓰는 자료구조<br><br>

### 배열선언

- 빈 배열 만들기
    
    ```jsx
    let arr = new Array();
    let arr = [];
    ```
    
- 대괄호 안에 초기 요소 넣을 수 있음
    
    ```jsx
    let fruits =["사과", "오렌지", "자두"];
    ```
    
- 각 배열 요소는 0부터 시작하는 숫자(인덱스)가 매겨져 있음
    - 배열 내 순서를 나타냄
    - 배열 내 특정 요소를 얻고 싶으면 대괄호 안에 순서를 나타내는 인덱스를 넣어주면 됨
        
        ```jsx
        let fruits =["사과", "오렌지", "자두"];
        console.log(fruits[1]); //오렌지
        ```
        
    - 같은 방법으로 요소 수정 가능
        
        ```jsx
        fruits[2] ='배'; //["사과", "오렌지", "배"]
        ```
        
    - 추가 가능
        
        ```jsx
        fruits[3] = '레몬'; //["사과", "오렌지", "배", "레몬"]
        ```
        
    - length 사용하면 배열에 담긴 요소가 몇 개인지 알 수 있음
        
        ```jsx
        let fruits =["사과", "오렌지", "자두"];
        console.log(fruits.length); //3
        ```
        
    - 배열 요소의 자료형엔 제약 없음
        
        ```jsx
        let arr = ['사과', {name: '이보라'}, true, function (){console.log("hi");}];
        
        console.log(arr); //[ '사과', { name: '이보라' }, true, [Function (anonymous)] ]
        ```
        
    

### **pop·push와 shift·unshift**

- 큐(queue)는 배열을 사용해 만들 수 있는 대표적인 자료구조
    - FIFO (First In First Out) 선입선출 방식
    - 순서가 있는 컬렉션 저장
    - push : 맨 끝에 요소 추가
    - shift : 제일 앞 요소를 꺼내 제거한 후 남아있는 요소들을 앞으로 밀어줌
        - 두번째 요소가 첫 번째 요소가 됨
- 스택은  한쪽 끝에 요소를 더하거나 뺄 수 있게해주는 자료구조
    - LIFO (Last In First Out) 후입선출 방식
    - push : 요소를 스택 끝에 집어넣음
    - pop : 스택 끝 요소 추출

⇒ 데큐(deque) : 처음이나 끝에 요소를 더하거나 뺴주는 연산 제공하는 자료구조

### 배열의 끝에 무언가 해주는 메서드

- **pop**
    - 배열 끝 요소 제거, 제거한 요소 반환
    
    ```jsx
    let fruits = ["사과", "오렌지", "배"];
    console.log(fruits.pop()); // 배
    console.log(fruits); //[ '사과', '오렌지' ]
    ```
    
- push
    - 배열 끝에 요소 추가
    
    ```jsx
    let fruits = ["사과", "오렌지"];
    fruits.push("배");
    console.log(fruits); //[ '사과', '오렌지', '배' ]
    ```
    
    - fruits.push(...) 호출은 fruits[fruits.length] = ... 하는 것과 같은 효과

### 배열 앞에 무언가 해주는 메서드

- shift
    - 배열 앞 요소 제거 후 제거한 요소 반환
    
    ```jsx
    let fruits = ["사과", "오렌지", "배"];
    console.log(fruits.shift()); // 사과
    console.log(fruits); //[ '오렌지', '배' ]
    ```
    
- unshift
    - 배열 앞 요소 추가
    
    ```jsx
    let fruits = ["오렌지", "배"];
    fruits.unshift('사과');
    console.log(fruits); // 사과,오렌지,배
    ```
    
- push와 unshift는 요소 여러개를 한번에 더해 줄 수 있음
    
    ```jsx
    let fruits = ["사과"];
    fruits.push("바나나", "오랑지");
    fruits.unshift("빠인에뽈", "체리");
    console.log(fruits); //[ '빠인에뽈', '체리', '사과', '바나나', '오랑지' ]
    ```
    
### 배열의 내부 동작 원리

- 배열은 객체와 마찬가지로 참조를 통해 복사됨
    
    ```jsx
    fruits = ["바나나"]
    let arr1 = fruits;
    console.log( arr1 === fruits ); // true
    arr1.push("배"); // 참조를 이용해 배열을 수정합니다.
    console.log( fruits );바나나,배
    ```
    
- 배열을 '순서가 있는 자료의 컬렉션’처럼 다루지 않고 일반 객체처럼 다룰 경우
    
    ```jsx
    let fruits = [];
    fruits[9999] = 5;
    fruits.age =25;
    ```
    
    - 프로퍼티 추가해도 문제 발생 X
        - JS 엔진이 배열을 일반 객체처럼 다루게 되어 배열을 일반 객체처럼 다루게 되어 배열을 다룰 때만 적용되는 최적화 기법이 동작하지 않아 배열 특유의 이점 사라짐
        - 잘못된 방법 예)
            - arr.test = 5 같이 숫자 아닌 값을 프로퍼티 키로 사용하는 경우
            - arr[0]과 arr[1000]만 추가하고 그 사이에 아무런 요소도 없는 경우
            - arr[1000], arr[999] 같이 요소를 역순으로 채우는 경우
- 배열은 순서가 있는 자료를 저장하는 용도로 만들어진 특수한 자료구조

### 성능

- pop과 push는 빠르지만 shift와 unshift는 느림


```jsx
fruits.shift();
```

- `shift` 메서드를 호출한 것과 동일한 효과를 보려면 인덱스가 0인 요소 제거하는 것만으론 충분하지 않다.
    - 제거 대상이 아닌 나머지 요소들의 인덱스 수정
    1. 인덱스 0인 요소 제거
    2. 모든 요소 왼쪽으로 이동 | 인덱스 1 → 0, 2 → 1로 변환
    3. length 프로퍼티 값 갱신
    
    
    - **배열에 요소가 많으면 요소가 이동하는 데 걸리는 시간이 길고 메모리 관련 연산도 많아짐**
- `unshift` 실행했을 때도 이와 유사한 일이 일어남
- 요소를 배열 앞에 추가하려면 일단 기존 요소들을 오른쪽으로 이동 → 인덱스도 바꿔줘야함

- `pop 메서드`로 요소를 끝에서 제거하려면 마지막 요소 제거 후 length 프로퍼티 값을 줄여 주기만 하면 됨
- `pop 메서드` 호출시


- `pop 메서드`는 요소를 옮기지 않으므로 각 요소는 기존 인덱스 유지**
    - 배열 끝에 무언가 해주는 메서드의 실행속도가 빠른 이유


### 반복문

- for 문은 배열을 순회할 때 쓰는 가장 오래된 방법
    - 순회시 인덱스 사용
    
    ```jsx
    let arr = ['사과', '오렌지', '베'];
    
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]); //사과 오렌지 배
    }
    ```
    
- 또 다른 순회 문법 : for ... of ...
    
    ```jsx
    let fruits = ["사과", "오렌지", "자두"];
    
    // 배열 요소를 대상으로 반복 작업 수행
    for (let fruit of fruits) {
        console.log( fruit ); // 사과 오렌지 자두
    }
    ```
    
    - for ... of 를 사용하면 현재 요소의 인덱스는 얻을 수 없고 값만 얻을 수 있음
    - 배열의 요소를 대상으로 반복 작업할 때 사용 바람
- 배열은 객체형에 속하므로 for ... in 사용하는 것도 가능
    
    ```jsx
    let arr = ['사과', '오렌지', '베'];
    
    for(let key in arr){
        console.log(arr[key]); // 사과, 오렌지, 배
    }
    ```
    
    - for ... in 단점
        - for ... in 반복문은 모든 프로퍼티 대상으로 순회
        - 키가 숫자가 아닌 프로퍼티도 순회 대상에 포함
        
        ⇒ 필요없는 프로퍼티들이 문제 일으킬 가능성 생김
        

### length 프로퍼티

- 배열 내 요소의 개수가 아니라 가장 큰 인덱스에 1을 더한 값

```jsx
let fruits =[];
fruits[123] ='사과';
console.log(fruits.length)
```

- 쓰기 가능
- 값을 수동으로 증가시 변화 X → 값을 감소시키면 배열이 잘림 → 짧아진 배열은 다시 되돌릴 수 없음

```jsx
let fruits =[];
fruits[123] ='사과';
// console.log(fruits.length)

let arr = [1, 2, 3, 4, 5];

arr.length =2;
console.log(arr); //[ 1, 2 ]

arr.length =5;
console.log(arr); //[ 1, 2, <3 empty items> ]
```

### new Array()

- [ ] 사용시 더 짧은 문법으로 배열을 만들수 있고 다루기 까다로워 잘 사용되지 않음

```jsx
let arr = new Array("사과", "배", "기타");
console.log(arr); //[ '사과', '배', '기타' ]
```

- 숫자형 인수 하나를 넣어 new Array 호출 → 배열 만들어짐
    - 요소가 없는 반면 길이는 인수와 같아짐
    
    ```jsx
    let arr = new Array(2);
    console.log(arr[0]); //undefined
    console.log(arr[1]); //undefined
    console.log(arr.length); //2
    ```
    
    - new Array(num) 이용해 만든 배열의 요소는 모두 undefined

### 다차원 배열

- 배열 역시 배열의 요소가 될 수 있음
- 행렬을 저장하는 용도

```jsx
console.log(matrix[0][0]); //1
```

### toString

- 요소를 쉼표로 구분한 문자열 반환

```jsx
let arr = [1, 2, 3];

console.log( arr ); // 1,2,3
console.log( String(arr) === '1,2,3' ); // true
```

예1)

```jsx
console.log([]+1); //1
console.log([1]+1); //11
console.log([1,2]+1); //1, 21
```

- 배열엔 `Symbol.toPrimitive`나 `valueOf` 메서드 없음
- 문자열로의 형 변환이 일어나 `[]`는 빈 문자열, `[1]`은 문자열 `“1”`, `[1,2]`는 문자열 `"1,2"`
- +는 피연산자 중 하나가 문자열인 경우 나머지 피연산자도 문자열로 변환

예2) 위와 동일하게 작용

```jsx
console.log( "" + 1 ); // "1"
console.log( "1" + 1 ); // "11"
console.log( "1,2" + 1 ); // "1,21"
```

### 요약

배열은 특수한 형태의 객체로, 순서가 있는 자료를 저장하고 관리하는 용도에 최적화된 자료구조

- 선언 방법
    
    ```jsx
    // 대괄호 (가장 많이 쓰이는 방법임)
    let arr = [item1, item2...];
    
    // new Array (잘 쓰이지 않음)
    let arr = new Array(item1, item2...);
    ```
    

- 연산을 사용하면 배열을 데큐처럼 사용할 수 있음
    - `push(...items)` - items 배열 끝에 더해줌
    - `pop()` - 배열 끝 요소 제거  → 제거한 요소 반환
    - `shift()` - 배열 처음요소 제거 → 제거한 요소 반환
    - `unshift(...items)` - items 배열 처음에 더해줌

- 아래 방법을 사용하면 모든 요소를 대상으로 반복 작업을 할 수 있음
    - `for ( let i =0; i<arr.length; i++)` - 가장 빠른 방법이고 오래된 브라우저와도 호환
    - `for ( let item of arr)` - 배열 요소에만 사용되는 모던한 문법
    - `for ( let i in arr )` - 배열에서는 절대 사용 X !!
