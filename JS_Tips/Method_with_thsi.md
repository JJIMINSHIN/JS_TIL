- 객체는 사용자, 주문 등과 같이 실제 존재하는 개체(entity)를 표현하고자 할 때 생성됨
    - 사용자는 행동을 하는 대상
    - 자바 스크립트에선 객체의 프로퍼티에 함수를 할당해 객체에게 행동할 수 있는 능력 부여

### 메서드 만들기

- 객체 user에게 인사할 수 있는 능력 부여
    
    ```jsx
    let user = {
        name : 'John',
        age :30
    };
    
    user.sayHi =function(){
        console.log("안녕하세요");
    };
    
    user.sayHi(); // 안녕하세요
    ```
    
    - **메서드** : 객체 프로퍼티에 할당된 함수
        - 위 예시에선 user에 할당된 `sayHI`가 메서드
        - 메서드는 이미 정의된 함수를 이용해서 만들 수도 있음\
            
            ```jsx
            let user = {
                name : 'John',
                age :30
            };
            
            function sayHi(){
                console.log("하이룽!");
            }
            
            user.sayHi = sayHi;
            
            user.sayHi();
            ```
            

### 메서드 단축 구문

- 아래 두 객체는 동일하게 동작
    
    ```jsx
    user = {
      sayHi: function() {
        alert("Hello");
      }
    };
    
    // 단축 구문을 사용하니 더 깔끔해 보이네요.
    user = {
      sayHi() { // "sayHi: function()"과 동일합니다.
        alert("Hello");
      }
    };
    ```
    

### 메서드와 this

- 메서드는 객체에 저장된 정보에 접근할 수 있어야 함
- 대부분의 메서드 객체 프로퍼티 값 활용
- 메서드 내부에서 this 키워드 사용하면 객체에 접근 가능
- ‘.’앞의 this 는 메서드 호출할 때 사용된 객체 나타냄
    
    ```jsx
    let user = {
        name : 'John',
        age :30,
    
        sayHi(){
            console.log(this.name); // == user.name
        }
    };
    
    user.sayHi(); //John
    ```
    
- 외부 변수 사용시 객체 참조하면 원하지 않는 값(null)을 참조할 수 있는 에러 발생
    
    ```jsx
    let user1 = {
      name: "John",
      age: 30,
    
      sayHi() {
          console.log( user1.name ); // Error: Cannot read property 'name' of null
      }
    
    };
    
    let admin = user1;
    user1 = null; // user를 null로 덮어씁니다.
    
    admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생했습니다.
    ```
    

### 자유로운 this

- 동일한 함수라도 다른 객체에서 호출했다면 ‘this’가 참조하는 값 달라짐
    
    ```jsx
    user.sayHi(); //John
    
    let user1 = {name : "John"};
    let admin = {name: "Admin"};
    
    function sayy(){
        console.log(this.name);
    };
    
    user1.f = sayy;
    admin.f = sayy;
    
    // 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
    // this 값이 달라짐
    user1.f();
    admin.f();
     
    admin['f'](); //점과 대괄호는 동일하게 동작
    ```
    
- obj.f()를 호출했다면 this는 f를 호출하는 동안의 obj

※ 객체 없이 호출하기 : **this == undefined**

- 객체 없어도 함수 호출 가능
    
    ```jsx
    function sayHi(){
    	console.log(this)
    }
    
    sayHi() // undefined
    ```
    
- this에 undefined 할당, this. name으로 name에 접근하려면 에러 발생
- 엄격모드가 아닐 시에는 this가 전역 개체 참조 →  window라는 전역객체 참조

⇒ “use strict” 도입된 배경

※ 자유로운 this가 만드는 결과

- this는 런타임에 결정됨
- 메서드가 어디서 정의 되었는지에 상관없이 this는 **점(’.’)앞**의 객체가 무엇인가에 따라 자유롭게 결정
    - 장점 : 함수(메서드)를 하나만 만들어 여러 객체에서 재사용할 수 있음
    - 단점 : 이러한 유연함이 실수로 이어질 수 있음

### this가 없는 화살표 함수

- 화살표 함수는 고유한 this를 가지지 않음
- 화살표 함수에서 this를 참조하면, 평범한 외부함수에서 this 값을 가져옴

```jsx
let user2 = {
    firstName: "보라",
    sayHi() {
//arrow의 this는 외부함수 user.sayHi()의 this가 됨
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user2.sayHi(); // 보라
```

### 요약

- 객체 프로퍼티에 저장된 함수를 '메서드’라 함
- `object.doSomthing()`은 객체를 '행동’할 수 있게 해준다.
- 메서드는 `this`로 객체를 참조 ⇒ `this` 값은 런타임에 결정
- 함수를 선언할 때 `this`사용 가능, 단, 함수가 호출되기 전까지 `this`엔 값이 할당되지 않음
- 함수를 복사해 객체 간 전달할 수 있음
- 함수를 객체 프로퍼티에 저장해 `object.method()`같이 ‘메서드’ 형태로 호출하면 `this`는 `object`  참조
- 화살표 함수는 자신만의 `this`를 가지지 않는다는 점에서 차이 있음.
- 화살표 함수 안에서 `this`를 사용하면, 외부에서 `this` 값을 가져온다.

### 과제

1. **[객체 리터럴에서 'this' 사용하기](https://ko.javascript.info/object-methods#ref-323)**
- name의 속성값을 찾지 못해 에러 발생
- makeUser() 내 this는 undefined가 됨 ⇒ 메서드 호출이 아니라 함수로써 호출됨
- ref:this는 함수의 현재 this 값 가져옴
    
    ```jsx
    function makeUser() {
      return {
        name: "John",
        ref() {
          return this;
        }
      };
    };
    
    let user = makeUser();
    
    console.log( user.ref().name ); // John
    ```
    

1. **[계산기 만들기](https://ko.javascript.info/object-methods#ref-324)**
    
    ```jsx
    let calculator = {
        sum(){
            return this.a +this.b;
        },
        mul(){
            return this.a * this.b;
        },
        read(){
            this.a = prompt('첫 번째 값 : ', 0);
            this.b = prompt('두 번째 값 : ', 0);
        }
    };
    
    calculator.read();
    console.log( calculator.sum() );
    console.log( calculator.mul() );
    ```
    

1. **[체이닝](https://ko.javascript.info/object-methods#ref-325)**
    
    ```jsx
    let ladder = {
      step: 0,
      up() {
        this.step++;
        return this;
      },
      down() {
        this.step--;
        return this;
      },
      showStep() {
        alert( this.step );
        return this;
      }
    }
    
    ladder
      .up()
      .up()
      .down()
      .up()
      .down()
      .showStep(); // 1
    ```