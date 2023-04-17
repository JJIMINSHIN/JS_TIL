# 구조 분해 할당

- 객체나 배열을 변수로 '분해'할 수 있게 해주는 문법
- 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에서 구조 분해가 이루어짐

## <B> 배열 분해하기</B>

```
let arr = ["Bora", "Lee"];

let [firstName, surname] = arr;

console.log(firstName)// Bora
console.log(surname) //Lee
```

- 인덱스를 이용해 배열에 접근하지 않고도 변수로 이름, 성 사용 가능
- split()을 사용하여 값이 배열인 메서드를 함께 사용할 수 있음

```
let [firstName, surname] = "Bora,Lee".split(',');
```

* <b>'분해(destructuring)'</b>는 파괴(destructive)와 다른 의미
    - 구조 분해 할당이란 명칭은 어떤 것을 <b>복사</b>한 이후에 변수로 '분해' 해준다는 의미
    - 분해 대상을 수정, 파괴 하지 않음
    - 배열의 요소를 직접 변수에 할당하는 것보다 코드양이 줄어든다는 점만 다름
* 쉼표를 사용해 요소 무시
    - 쉼표를 사용하면 필요하지 않은 배열 요소 버릴 수 있음
        ```
        let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
        console.log(title) // Consul
        ```
    - 2번째, 4번째 요소 생략됨
* 할당 연산자 좌측엔 할당할 수 있는 뭐든 올 수 있음 ( 프로퍼티도 가능 )
    - [user.name, user.surname] = "Bora Lee".split(' ');

* .entries() 반복
    - Object.entries(obj)와 구조 분해를 조합하면 객체의 키: 값을 순회해 변수로 해당할 수 있음
        ```
           let user = {
            name: "John",
            age: 30
            }; 
           for (let [key, value] of Object.entries(user)) {
                console.log(`${key}:${value}`); // name:John, age:30 
            } 
        ```
    - Map() 사용도 가능
        ```
            let user = new Map();
            user.set("name", "John");
            user.set("age", "30");

            for (let [key, value] of user) {
               console.log(`${key}:${value}`); // name:John, then age:30
            }
        ```
* 변수 교환 트릭
    -  두 변수에 저장된 값을 교환할 때 사용 가능 
    (임시 배열 만들어 사용시 두 개 이상 변수도 교환 가능)
        ```
            let guest = "Jane";
            let admin ="Pete";

            [guest, admin] =  [admin, guest];
            console.log(`${guest} ${admin}`);
        ```
