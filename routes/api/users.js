const express = require('express');
const {check, checkUnique, checkUser, checkToken, checkAvatar} = require('../../utils/index');
const { ctrSignUp, ctrLogin,  ctrCurrent, ctrLogout, ctrSub, ctrAvatar, ctrEmail, ctrRefetchEmail } = require('../../controlers/login/index');

const router = express.Router();

router.post('/signup', checkUnique, check(ctrSignUp)); // регистрация //двойная валидация

router.post('/login', checkUser, check(ctrLogin)); // вход //двойная валидация

router.get('/current', checkToken, check(ctrCurrent)); // проверка текущего пользвателя

router.get('/logout', checkToken, check(ctrLogout)); // выход

router.patch('/', checkToken, check(ctrSub)); // обновление подписки пользвателя

router.patch('/avatars', checkToken, checkAvatar.single('avatar'), check(ctrAvatar)); // обновление аватарки пользвателя

router.get('/verify/:verificationToken', check(ctrEmail)); //подтверждение почты пользвателя // верификация по почте

router.post('/verify',  check(ctrRefetchEmail)); // повторная отправка письма для верификации по почте



module.exports = router;