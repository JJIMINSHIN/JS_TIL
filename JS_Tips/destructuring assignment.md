# 구조 분해 할당

- 객체나 배열을 변수로 '분해'할 수 있게 해주는 문법
- 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에서 구조 분해가 이루어짐

### 배열 분해하기

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
