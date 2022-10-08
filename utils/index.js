const check = require("./asyncHandlerCheck");
const checkUnique = require("./funcCheckUnique");
const checkUser = require('./funcCheckUser');
const checkToken = require('./funcCheckToken');
const checkAvatar = require('./funcUpdateAvatar');
const sendEmail = require("./funcSendEmail");


module.exports = {
    check,
    checkUnique,
    checkUser,
    checkToken,
    checkAvatar,
    sendEmail
};