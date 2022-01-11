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
