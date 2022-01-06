- 미들웨어가 어떻게 처리 되지

- a()라는 함수가 실행되고 b()라는 함수가 실행이되는데 b()함수 전에 "123"을 출력해보자..

- 비동기 방식으로 처리 할 경우 Promise.all을 사용해서 병렬처리? 도 가능 하지 않을까?

```jsx
// a()가 실행이 되고 b()가 실행 되기전에 one 함수를 불러와 써보자
function a() {
  /*   for (i = 0; i < c.length; i++) {
    const f = c[i];
    f();
  } */
  // express 처럼 비동기 방식으로 처리 하는 것 공부 해보자
  Promise.all(c).then(() => {
    console.log("실행완료");
  });
  b();
}

function b() {
  console.log("abc");
}

let c = [];
function addMW(...MW) {
  c.push(...MW);
}

// 이 위까지는 라이브러리

function one() {
  console.log("123");
}

function two() {
  console.log("456");
}

addMW(one, two);
a();
```
