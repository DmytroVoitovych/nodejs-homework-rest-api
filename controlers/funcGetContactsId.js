const logger = require('../models/contacts');

const funcGetContactsId = async (req, res, next) => {
    const { id } = req.params;
    const contactsId = await logger.getContactById(id);
    
    if (contactsId.length === 0 || !contactsId) {
        const error = new Error(`Contact with id=${id} not found.`);
        error.status = 404;
        throw error;
    }
    else {
        return res.json({ status: 200, data: contactsId[0] });
    }
};


module.exports = funcGetContactsId;