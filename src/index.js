const contactsModule = require("./contacts.js");

const argv = require("yargs").argv;


// TODO: refactorizar
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        contactsModule.listContacts().then((list) => console.table(list));
    break;

    case "get":
        contactsModule.getContactById(id).then((data) => console.table(data));
        break;
  
      case "add":
        contactsModule.addContact(name, email, phone).then((msg) => {
          console.log(msg);
        });
        break;
  
      case "remove":
        contactsModule.removeContact(id).then((msg) => {
          console.log(msg);
        });
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }
  
  invokeAction(argv);