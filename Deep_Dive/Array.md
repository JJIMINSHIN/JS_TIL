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
