"use strict";

const express = require("express");
const router = express.Router();
const controller = require("./home-controller")

//컨트롤러 연결 - 루트페이지
router.get("/", controller.home);

//컨트롤러 연결 - 로그인 페이지
router.get("/login", controller.login);

module.exports = router;
