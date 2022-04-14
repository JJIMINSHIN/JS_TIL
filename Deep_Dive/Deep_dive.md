### 네임 스페이스

- 담당할 객체 생성, 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가
    
    ```jsx
    let MYAPP = {};
    
    MYAPP.person = {
        name : 'LEE',
        address : 'Seoul'
    };
    
    console.log(MYAPP.person.name);
    ```
    

### var

1. 중복 선언 가능 → 의도치 않게 먼저 선언된 변수 값이 변경되는 부작용 발생
    
    ```jsx
    var a = 1;
    var b = 1;
    
    var a = 100;
    var b;
    
    console.log(a) // 100
    console.log(b) // 1
    ```
    
2. var로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정 → 외부에서 선언하면 코드 블록 내에서 선언해도 모두 전역 변수가 됨
    
    ```jsx
    var x = 1;
    
    if(true){
    	var x =10 
    }
    
    console.log(x) // 10
    ```
    

1. for 문의 변수 선언문에서 var로 선언한 변수는 전역변수가 된다
    
    ```jsx
    var c = 10;
    
    for(var c=0; c<5; c++){
        console.log(c);
    }
    console.log(c); // 5
    ```
    

1. 변수 호이스팅 : 변수 선언문이 스코프의  선두로 끌어 올려진 것처럼 동작

### let

- var 키워드 단점 보완을 위해 ES6에서 나온 새로운 변수 키워드

1. 변수 중복 선언 금지

```jsx
let bar = 123;
let bar  = 456; //SyntaxError : Identifier 'bar' haas alerady been declared
```

1. 블록 레벨 스코프
- 모든 코드 블록(함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따름
    
    ```jsx
    let fooo = 1;
    
    {
        let fooo = 2;
        let bar = 3;
    }
    
    console.log(fooo); //1
    console.log(bar); //ReferenceError: bar is not defined
    ```
    
- 함수도 코드 블록이므로 스코프 만듬 → 함수 내의 코드 블록은 함수 레벨 스코프에 중첩
    
    ```jsx
    //전역 스코프
    let i = 10;
    //함수레벨 스코프
    function ffoo() {
        let i = 100;
        //블록레벨 스코프
        for(let i =1; i<3; i++){
            console.log(i);
        }
        console.log(i);
    }
    ffoo();
    console.log(i)
    ```
    

1. 함수 변수 호이스팅
- var와 달리 변수 호이스팅이 발생하지 않음
- 선언단계와 초기화 단계 분리되어 진행
- 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을 **일시적 사각지대(TDZ)** 라고 부른다.
- 하지만 자바스크립트는 ES6에서 도입된 let, const를 포함해 모든 선언(var, let, const, funcion, class 등) 호이스팅 함 →  let, const, class는 호이스팅 발생하지 않은 것처럼 동작

### const

- 상수(constant)를 선언하기 위해 사용
- let 키워드와 대부분 동의

1. 선언과 초기화
- const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야함

1. 재할당 금지
- var, let 키워드는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당 금지

1. 상수
- 상수는 재할당이 금지된 변수
- 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 함
- **상수의 이름은 대문자로 선언**해 상수임을 명확히 나타냄
- 여러 단어로 이루어진 경우 언더스코어(_)로 구분해 스네이크 케이스로 표현하는 것이 일반적

```jsx
//세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값
const TAX_RATE = 0.1;

let preTaxPrice = 300;

let afterTaxPrice = preTaxPrice +(preTaxPrice*TAX_RATE);
console.log(afterTaxPrice);
```

1. const 키워드와 객체
- const 키워드로 선언한 변수에 객체를 할당한 경우 값을 변경할 수 있다.

- 변수선언에는 기본적으로 const를 사용하고 let은 재할당이 필요한 경우 한정해 사용
- car, let, const 권장 사항
    - ES6를 사용한다면 var 키워드 사용 X
    - 재할당이 필요한 경우 한정해 let 키워드 사용, 변수의 스코프는 최대한 좁게 만든다
    - 변경이 발생하지 않고 읽기 전용으로 사용하는 원시값과 객체에는 const 키워드를 사용
