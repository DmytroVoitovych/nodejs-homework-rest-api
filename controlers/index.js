const ctrGet = require('./funcGetContact');
const ctrGetId = require('./funcGetContactsId');
const ctrPost = require('./funcPostContacts');
const ctrDell = require('./funcDelContacts');
const ctrPut = require('./funcPutContacts');

module.exports = {
    ctrGet,
    ctrGetId,
    ctrPost,
    ctrDell,
    ctrPut
};