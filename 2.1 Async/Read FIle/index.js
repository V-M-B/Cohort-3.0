const fs = require("fs");
//read the file syncronously 
const contents=fs.readFileSync("a.txt","utf-8");
console.log(contents);


//read the file Asyncronously 
const contents1=fs.readFile("b.txt","utf-8,function(err,contents1)");
console.log(contents1);

