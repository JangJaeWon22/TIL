"use strict";

const app = require("./app"); //app.js의 app 가져오기
const PORT = 3000; // express 서버 3000

//express 서버 연결
app.listen(PORT, () => {
  console.log("서버 가동");
});
