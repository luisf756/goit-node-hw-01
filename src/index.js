const contactsModule = require("./contacts.js");

const argv = require("yargs").argv;


// TODO: refactorizar
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        contactsModule.listContacts().then((list) => console.table(list));
    break;

    case "get":
        break;
    case "add":
     
      break;

    case "remove":
     
      break;

    default:
      
  }
}

invokeAction(argv);
// ------------------------------------------------
