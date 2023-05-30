//displays absolute path of folder
console.log(__dirname);
//displays absolute path of file
console.log(__filename);
//how to access a single o specific data entry
const accessSpecEntry = require('./philosophers.js');
console.log(accessSpecEntry.philosophers);
//accessing alll entries
console.log(accessSpecEntry);
//running a specific function in another file
const accessSpecFx = require('./philosophers.js');
console.log(accessSpecFx.disp);
//the built-in os file to access os info
//const os = require("os");
//console.log(os);
//to access platfom info
//console.log(os.platform);
