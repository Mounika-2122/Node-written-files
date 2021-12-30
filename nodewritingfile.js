const fs = require("fs");
const textOut =  'Node first Written File : ${textIN}';
fs.writeFileSync('./output/output.txt', textOut); //for writing files
console.log(textOut);
console.log('First written file as been successfully Executed..........');
