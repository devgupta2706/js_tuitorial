const fs = require("fs")
let text = fs.readFile("del.txt", "utf-8",(error,data)=>{
    console.log(error,data)
})
console.log("This is the message")
// the a syncronous behaviour of readfile
// parrallel pipelining