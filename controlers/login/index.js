const ctrSignUp = require('./funcPostSignUp');
const ctrLogin = require('./funcPostLogin');
const ctrCurrent = require('./funcGetCurrentUser');
const ctrLogout = require('./funcGetLogout');
const ctrSub = require('./funcPatchSubscription');
const ctrAvatar = require('./funcSetAvatar');

module.exports = {
    ctrSignUp, 
    ctrLogin,
    ctrCurrent,
    ctrLogout,
    ctrSub,
    ctrAvatar
};