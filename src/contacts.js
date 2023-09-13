const fs = require("fs").promises;
const { v4: uuidv4 } = require('uuid');

const contactsPath = './db/contacts.json';


function listContacts() {
  
}

function getContactById(contactId) {
  
}

function removeContact(contactId) {
  
}

function addContact(name, email, phone) {
  
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};