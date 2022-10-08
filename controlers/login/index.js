const ctrSignUp = require('./funcPostSignUp');
const ctrLogin = require('./funcPostLogin');
const ctrCurrent = require('./funcGetCurrentUser');
const ctrLogout = require('./funcGetLogout');
const ctrSub = require('./funcPatchSubscription');
const ctrAvatar = require('./funcSetAvatar');
const ctrEmail = require('./funcGetEmail');
const ctrRefetchEmail = require('./funcPostRefetchEmail');


module.exports = {
    ctrSignUp, 
    ctrLogin,
    ctrCurrent,
    ctrLogout,
    ctrSub,
    ctrAvatar,
    ctrEmail,
    ctrRefetchEmail
};