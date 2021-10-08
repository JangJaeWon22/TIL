console.log('require가 가장 위에 오지 않아도 됨.')

module.exports = "나를 찾아봐!!!"


require("../모듈 만들기/var");

console.log("requrire.cache 입니다.");
console.log(require.cache);
console.log("require.main 입니다");
console.log(require.main === module);