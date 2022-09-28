const {Contact} = require('../models/contact');

const funcGetContacts = async (_, res) =>  res.json({ status: 200, data: await Contact.find(), }); // find без аргументов возращает всю колекцию
// const funcGetContacts = async (_, res) =>  res.json({ status: 200, data: await Contact.find({},'name email phone'), }); // вторым аргументом можна передать определенные поля для вывода с колекции

module.exports = funcGetContacts;