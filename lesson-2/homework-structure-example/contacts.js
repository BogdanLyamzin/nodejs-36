// contacts.js
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join("db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
    // ...твой код
  }
  
  function getContactById(contactId) {
    // ...твой код
  }
  
  function removeContact(contactId) {
    // ...твой код
  }
  
  function addContact(name, email, phone) {
    // ...твой код
  }

  module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
  }