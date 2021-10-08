"use strict";

const express = require("express"); //모듈
const app = express(); //모듈
const home = require("./routes/home"); //라우팅

//views 연결
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use 미들웨어

module.exports = app;
