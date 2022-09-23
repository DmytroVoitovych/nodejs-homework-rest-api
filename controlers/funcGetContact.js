const logger = require('../models/contacts');

const funcGetContacts = async (req, res, next) =>  res.json({ status: 200, data: await logger.listContacts(), });
 
module.exports = funcGetContacts;