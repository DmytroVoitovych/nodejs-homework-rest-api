const express = require('express');
const {check, checkUnique, checkUser, checkToken} = require('../../check/index');
const { ctrSignUp, ctrLogin,  ctrCurrent, ctrLogout, ctrSub } = require('../../controlers/login/index');

const router = express.Router();

router.post('/signup', checkUnique, check(ctrSignUp)); // регистрация //двойная валидация

router.post('/login', checkUser, check(ctrLogin)); // вход //двойная валидация

router.get('/current', checkToken, check(ctrCurrent)); // проверка текущего пользвателя

router.get('/logout', checkToken, check(ctrLogout)); // выход

router.patch('/', checkToken, check(ctrSub)); // обновление подписки пользвателя

module.exports = router;