const contactsPath = require('./contacts.json');

const listContacts = () => contactsPath;

const getContactById = (contactId) => contactsPath.filter(e => e.id == contactId);

const removeContact = (contactId) => {
  const index = contactsPath.findIndex(e => e.id === contactId);

 if (index >= 0) {
    const copyArr = [...contactsPath];
    return copyArr.splice(index, 1);
   }

  return false;
};

const addContact = ({name, email, phone}) => contactsPath.concat({ id: +contactsPath.length + 1, name, email, phone});

const updateContact = (contactId, {name, email, phone}) => {
  
  const index = contactsPath.findIndex(e => e.id === contactId);

  if (index >= 0) {
    const copyArr = [...contactsPath];
    copyArr.splice(index, 1, { id: contactId, name, email, phone });
    return copyArr[index];
  }

  return false;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
