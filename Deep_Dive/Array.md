- 배열 : 순서가 있는 컬렉션을 저장할 때 쓰는 자료구조

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


- `**pop 메서드`는 요소를 옮기지 않으므로 각 요소는 기존 인덱스 유지**
    - 배열 끝에 무언가 해주는 메서드의 실행속도가 빠른 이유
