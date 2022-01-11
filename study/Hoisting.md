# TIL

## 호이스팅 (Hoisting)

### 한 줄 정리

- 호이스팅(Hoisting)이란, 코드가 실행하면 변수선언/함수선언이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상을 말한다.

### 예시

```jsx
// var 호이스팅
cosnole.log(a); // undifined
var a = 1;
console.log(a); // 1

// let, const 호이스팅
function a() {
  console.log("full_name = ", frist_name + " " + second_name); // full_name = Jang gildong
  second_name = "jaewon";
}
const frist_name = "Jang";
let second_name = "gildong";
a();
console.log(frist_name + " " + second_name); // Jang jaewon
```

---

### var의 함정

- var의 경우 함수 내에서만 지역 변수, 나머지 모두 전역변수로 인식이 된다.!!

```jsx
// 전역변수의 사용 ex1)
for (var i = 0; i < 5; i++) {
  console.log(i); // 1 2 3 4
}
console.log(i); // 5

// 지역변수에서의 사용(함수 내 선언) ex2)
fuction q(){
	var a = 1
}
q()
cosnole.log(a) // Unexpected identifier Error

```

### let 과 const는 호이스팅이 된다.

- var의 문제점을 개선하기 위해 es6 문법으로 let이 나왔다. var처럼 사용 하면, 문법 에러가 뜸.
- TDZ라고도 함.

### 함수 선언식과 함수 표현식의 차이

```jsx
// 함수 선언식
console.log(foo()); // 5 출력
function foo() {
  return 5;
}

// 함수 표현식
console.log(foo2()); // 에러 발생! foo 함수는 아직 로드안됨
var foo2 = function () {
  return 5;
};

// 화살표 함수
console.log(foo2()); // 에러 발생! foo 함수는 아직 로드안됨
var foo2 = () => {
  return 5;
};
```

### 조금만 더 깊게

- 근데 함수 선언식과 함수 표현식의 차이가 발생

- 함수 선언식은 변수에 담아 두지 않고 바로 함수가 어떤 행동을 하더라도, 선언 된 함수가 나중 사용을 위해 저장되며, CALL할때 위치에 상관없이 정상 출력 됨

- 함수 표현식은 변수에 담아두는 상태, 하지만 VAR의 경우만 실질적으로 출력이 됨 근데 할당은 그 줄에 가서 할당이 되기때문에 사용전이라고 문구가 뜸.

- var 같은 경우는 함수내에 선언된 변수를 제외한 모든 변수가 전역변수로 처리되는데 이것도 문제가 되었음
  - 이 문제를 해결하기위해 es6문법에서 let 도입. 호이스팅이 되는건 맞지만, 올바르지 않게 쓰면 사용전에 썼다고 문법에러가 뜸.
