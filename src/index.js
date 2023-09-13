const contactsModule = require("./contacts.js");

const argv = require("yargs").argv;


// TODO: refactorizar
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
     
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

const fs=require('fs')

const ejemploFuncion=(content)=>{

    fs.readFile("readme.txt")
    .then(data => console.log(data.toString()))
    .catch(err=>console.log(err.message));

    try{
        fs.writeFileSync('C./readme.txt', content);
    }catch(err){
        console.log(err);
    }

}

ejemploFuncion('datos para ingresar')
export default ejemploFuncion