const logger = require('../models/contacts');
const {validation} = require('../validation/dataValidation'); 

const funcPutContacts = async (req, res, next) => {
    const { error } = validation(req.body);

    if (error) {
        const err = new Error(error.message);
        err.status = 400;
        throw err;
    }
    else {
        const { id } = req.params;
        const updateId = await logger.updateContact(id, req.body);

        if (updateId) {
            return res.status(200).json({ status: 'success', code: 200, data: updateId });
        }
        else {
            const error = new Error(`Contact with id=${id} not found.`);
            error.status = 404;
            throw error;
        }
    }
    
};

module.exports = funcPutContacts;