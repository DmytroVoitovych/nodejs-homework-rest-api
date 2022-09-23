const logger = require('../models/contacts');

const funcDelContacts = async (req, res, next) => {
    const { id } = req.params;
    const removeId = await logger.removeContact(id);

    if (removeId || removeId.length > 0) {
        return res.status(201).json({
            status: 'success', code: 200, message: 'contact deleted', data: removeId[0]
        });
    }
    else {
        const error = new Error(`Contact with id=${id} not found.`);
        error.status = 404;
        throw error;
    }
    
};

module.exports = funcDelContacts;