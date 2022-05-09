### 따옴표

```jsx
let single = '작은따옴표';
let doble  = "큰따옴표";
let backticks = `백틱`;

```

- 템플릿 리터널(template literal) :  표현식을 ${}로 감싸고 이를 백틱으로 감싼 문자열 중간에 넣어주면 해당 표현식을 문자열 중간에 쉽게 삽입할 수 있음
    
    ```jsx
    function sum(a, b){
        return a+b
    }
    
    console.log(` 1+2 = ${sum(1, 2)}`); // 1+2 = 3
    ```
    
- 백틱 사용시 문자열 여러줄 작성 가능 (작은 따옴표, 큰따옴표는 불가)
    
    ```jsx
    let guestList = `손님:
    * John
    * Pete
    * Mary
    `;
    
    console.log(guestList); // 리스트 여러 줄에 걸쳐 나옴
    ```
    
- 태그드 탬플릿(tagged template) : `func `string`` 같이 첫 번째 백틱 바로 앞에 함수 이름(func)을 써주면 이 함수는 백틱 안의 문자열 조각이나 표현식 평가 결과 인수받아 자동 호출됨
    - 사용자 지정 템프릿에 맞는 문자열 쉽게 만들 수 있음

### 특수 기호

- \n : 줄 바꿈 문자(newline character), 작은 따옴표나 큰 따옴표도 여러 줄 문자열 가능
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4550c5b0-7e78-48c4-a6f6-b0c9834dc101/Untitled.png)
    

- 모든 특수문자는 ‘이스케이프 문자’라고 불리는 역슬래시 \로 시작
    - \는 문자열 내 따옴표 넣을때도 사용가능
        
        ```jsx
        console.log('I\'m the Walrus!'); //I'm the Walrus!
        ```
        

### 문자열 길이

- length `프로퍼티` :  문자열 길이 저장 → 뒤에 () 붙일 필요 없음
    
    ```jsx
    //\n은 특수문자 하나로 취급
    console.log(`My\n`.length); //3
    ```
    

### 자answkduf so xmrwjd dnlcldls ㅔㅐㄴconsole.log(`My\n`.length); //3console.log(`My\n`.length); //3console.log(`My\n`.length); //3

- 문자열 내 특정 위치인 pos에 있는 글자에 접근하려면
    
    : [pos] 같이 대괄호 이용, str.charAt(pos)라는 메서드 호출 , 위치는 0부터 시작
    
    - POS 함수는 전체데이터에서 사용자가 입력한 스트링의 자릿수를 반환
        
        ```jsx
        let str = `HElloo`;
        
        //첫번째 글자
        console.log(str[0]); // H
        console.log(str.charAt(0)); // H
        
        //마지막 글자
        console.log(str[str.length -1]); //o
        ```
        
- charAt()은 하위 호환성을 위해 남아있는 메서드
- 반환할 글자가 없을때
    - [ ] : undefined 반환
    - charAt() : 빈 문자열 반환
- for .. of 사용하면 문자열을 구성하는 글자 대상으로 반복 작업 할 수 있음
    
    ```jsx
    for(let char of "Helllo"){
        console.log(char);// H,e,l,l,o (char는 순차적으로 H, e, l, l, o가 됩니다.)
    }
    ```
    

### 문자열의 불변성

- 문자열은 수정할 수 없습니다.
    - 수정 : 새로운 문자열 하나 만든 다음, 이 문자열 str에 할당
    
    ```jsx
    let str = `HElloo`;
    str = 'h' + str[1];
    console.log(str); //hE
    ```
    

### 대**·소문자 변경하기**

- toLowerCase() : 대문자 → 소문자
- toUpperCase() : 소문자 → 대문자
    
    ```jsx
    console.log('interface'.toUpperCase()); // INTERFACE
    console.log('INTERFACE'.toLowerCase()); // interface
    ```
    

### 부분 문자열 찾기

1. **str.indexOf(substr, pos)**
- 문자열 str의 pos에서부터 시작해, 부분 문자열 substr이 어디에 위치하는지 찾아줌
- 원하는 부분 문자열을 **찾으면 위치 반환, 그렇지 않으면 -1 반환**
    
    ```jsx
    console.log(str.indexOf('Widget')); // 0
    console.log(str.indexOf('widget')); // -1 | 대소문자 구분
    console.log(str.indexOf('id')); // 1 (Widget의 id)
    console.log(str.indexOf('t')); // 5
    ```
    
- pos는 선택적으로 사용 가능, 명시하면 검색이 해당 위치부터 시작됨
    
    ```jsx
    console.log(str.indexOf('id',2)) // 12
    ```
    
- 문자열 내 부분 문자열 전체를 대상으로 무언가를 하고 싶다면 반복문 안에 indexOf 사용
- 반복문이 하나씩 돌때마다 검색 시작 위치 갱신 → indexOf 새롭게 호출
    
    ```jsx
    let str = 'As sly as a fox, as strong as an ox';
    let target = 'as';
    
    //as 찾기
    let pos = 0
    while(true){
        let foundPos = str.indexOf(target,pos); //foundPos target에서 pos의 값부터 시작해서 검색
        if(foundPos == -1) break;
        console.log(`위치 : ${foundPos}`);
        pos = foundPos +1 // 다음 위치를 기준으로 검색 이어감
    }
    //결과
    위치 : 7
    위치 : 17
    위치 : 27
    ```
    

- if 문 조건식에 indexOf 쓸때 주의점!
    - 부분 문자열 여부를 검색하려면 -1과 비교해야함
    
    ```jsx
    let str = "Widget with id";
    
    if(str.indexOf('Widget') != -1){
        console.log("찾았다!");
    }
    ```
    
    ※ str.lastIndexOf(substr, position) 
    
    - indexOf와 유사한 기능을 하는 메서드
    - 문자열 끝에서부터 부분 문자열 찾음

1. 비트 NOT 연산자 사용한 기법
- 비트 NOT 연산자 ~를 사용한 기법, 오래된 버전
- 비트 NOT 연산자는 피연사자를 32비트 정수로 바꾼 후(소수부 모두 버려짐) 모든 비트 반전
- n이 32비트 정수일때 ~n은 -(n+1)이 됨
    
    ```jsx
    console.log( ~2 ); // -3, -(2+1)과 같음
    console.log( ~1 ); // -2, -(1+1)과 같음
    console.log( ~0 ); // -1, -(0+1)과 같음
    console.log( ~-1 ); // 0, -(-1+1)과 같음
    ```
    
- ~n을 0으로 만드는 경우는 n == -1일때가 유일
- indexOf가 -1을 반환하지 않을 경우 `if ( ~str.indexOf("...")` 검사 → 코드 길이 줄일 수 있음
    
    ```jsx
    let str2 = "Widget";
    
    if(~str2.indexOf("Widget")){
        console.log('찾았따'); //
    }
    ```
    
- 모던 자바스크립트에선 .includes 메서드 사용해 부분 문자열 포함 여부 검사

1. inclides, startWith, endWith
- str.includes(substr, pos)
    - str에 부분 문자열substr 유무에 따라 true/false 반환
    - 위치 정보는 필요하지 않고 포함 여부만 알고 싶을때 적합한 메서드
    - str.includes에도 str.indexOf처럼 두 번째 인수를 넘기면 해당 위치부터 부분 문자열 검색 가능
        
        ```jsx
        console.log( "Widget with id".includes('th')); // true 
        console.log('hi'.includes('bye')); // false
        console.log('Width'.includes('id',2)); // false
        ```
        
- str.starsWith, str.endWith는 str이 특정 문자열로 시작하는지(start with) 여부와 특정 문자열로 끝나는지(end with) 여부 확인할 때 사용
    
    ```jsx
    console.log('width'.startsWith('wid')); //true
    console.log('widget'.endsWith('get')); //true
    ```
    

### 부분 문자열 추출하기

- 부분 문자열 추출과 관련된 메서드가 세가지 존재

1. **`str.slice(start [, end])`**
- 문자열의 start부터 end까지(end 미포함)를 반환
    
    ```jsx
    let str3 = "stringify";
    console.log(str3.slice(0,5)); //strin
    console.log(str3.slice(0,1)); //s
    ```
    
- 두 번째 인수가 생략된 경우, 명시한 위치부터 문자열 끝까지 반환
    
    ```jsx
    let str3 = "stringify";
    
    console.log(str3.slice(2));  //ringify
    ```
    
- start와 end는 음수가 될 수 있음, 음수를 넘기면 문자열 끝에서부터 카운팅 시작
    
    ```jsx
    let str3 = "stringify";
    
    console.log(str3.slice(-4, -1)); //gif
    ```
    

1. `**str.substring(start [, end])**`
- start와 end 사이에 있는 문자열 반환
- slice와 아주 유사하지만 start가 end보다 커도 괜찮다는 데 차이 존재
    
    ```jsx
    let str3 = "stringify";
    
    console.log(str3.substring(2, 6)); //ring
    console.log(str3.substring(6, 2)); //ring
    
    console.log(str3.slice(2, 6)); ///ring
    console.log(str3.slice(6, 2)); // ''
    ```
    
- 음수 허용하지 않음 → 0으로 처리

1. `**str.substr(start [, lengt])**`
- start 시작해 length 개의 글자 반환
- 끝 위치 대신 길이를 기준으로 문자열 추출
    
    ```jsx
    let str3 = "stringify";
    
    console.log(str3.substr(2, 4)); //ring
    console.log(str3.substr(-4, 2)); //gi
    ```
    
- 단점
    - 구식 스크립트에 대응하기 위해 남겨 둔 브라우저 전용 기능 명시
    - 브라우저 이외의 호스트 환경에서는 제대로 동작하지 않을 수 있음

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e6367577-5cec-4714-89e2-cf16c1ed14bb/Untitled.png)

### 문자열 비교하기

- 문자열 비교는 알파벳 순서를 기준으로 이루어짐
- 소문자는 대문자보다 항상 큼 | ‘a’ > ‘Z’
- 발음 구별 기호가 붙은 문자는 알파벳 순서 기준 따르지 않음 | 'Österreich' > 'Zealand’
- 모든 문자열은 UTF-16을 사용해 인코딩  → 모든 글자가 숫자 형식의 코드와 매칭됨
- 코드로 글자를 얻거나 글자에서 연관 코드를 알아낼 수 있는 메서드

1. str.codePointAt(pos)
- pos에 위치한 글자코드 반환
    
    ```jsx
    console.log('z'.codePointAt(0)); //122
    ```
    
1. String.formCodePoint(code)
- 숫자 형식 code에 대응하는 글자 만들어줌
    
    ```jsx
    console.log(String.fromCodePoint(90)); //Z
    ```
    
- 65와 220 사이에 대응하는 글자 출력
    
    ```jsx
    let str4 = '';
    
    for(let i=65; i<= 220; i++){
        str4 += String.fromCodePoint(i);
    }
    console.log(str4);
    //ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
    ```
    

## 과제

1. **[첫 글자를 대문자로 변경하기](https://ko.javascript.info/string#ref-391)**
- 내가 푼 방법
    
    ```jsx
    function ucFirst(str){
        console.log(str[0].toUpperCase()+str.slice(1));
    }
    
    ucFirst('john'); //John
    ```
    
- 다른 방법
    
    ```jsx
    function ucFirst(str) {
      if (!str) return str;
    
      return str[0].toUpperCase() + str.slice(1);
    }
    
    console.log( ucFirst("john") ); // John
    ```
    

2. **[스팸 문자열 걸러내기](https://ko.javascript.info/string#ref-392)**
- 내가 푼 방법
    
    ```jsx
    function checkSpam(str){
        if(str.indexOf('xxx') ||     str.indexOf('viagra')){
            console.log(true);
        }
    }
    checkSpam('buy ViAgRA now'); //true
    checkSpam('free xxxxx') ; //true
    checkSpam("innocent rabbit"); //true
    ```
    
- 틀린 이유 : 대-소문자 관계없이 스팸 문자열 확인하려면 인수로 받은 문자열 모두 소문자로 바꾼 후 진행해야함
    
    ```jsx
    function checkSpam(str){
        let check = str.toLowerCase();
        return check.includes('viagra') || check.includes('xxx');
    }
    console.log(checkSpam('buy ViAgRA now')); //true
    console.log(checkSpam('free xxxxx')); //true
    console.log(checkSpam("innocent rabbit")); //false
    ```
    

3. **[문자열 줄이기](https://ko.javascript.info/string#ref-393)**
    
    ```jsx
    function truncate(str, maxlength){
        return (str.length>maxlength)?str.slice(0,maxlength-1)+"...":str;
    }
    console.log(truncate("habababbababababababab", 10));
    ```
    

4. **[숫자만 추출하기](https://ko.javascript.info/string#ref-394)**
    
    ```jsx
    function extractCurrencyValue(str){
        return +str.slice(1)  //+는 양수 의미
    }
    console.log(extractCurrencyValue('$120') === 120);
    ```
