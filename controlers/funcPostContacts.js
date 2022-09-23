const logger = require('../models/contacts');
const {validation} = require('../validation/dataValidation'); 

const funcPostContacts = async (req, res, next) => {
    const { error } =   validation(req.body);
    
    if (error) {
        const err = new Error(error.message);
        err.status = 400;
       throw err;
    }
    else {
         res.status(201).json({
            status: 'success', code: 201, data: await logger.addContact(req.body).slice(-1)[0]
        });
    }
   
};

module.exports = funcPostContacts;