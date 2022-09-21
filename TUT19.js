const fs = require("fs")
let text = fs.readFileSync("del.txt", "utf-8")
text = text.replace("name", "naam")
fs.writeFileSync("create.txt",text)
console.log(text)
//syncronous behaviour of commands
// serial pipelining single pipe