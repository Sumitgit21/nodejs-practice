const fs = require("fs");
// fs.mkdirSync("TestFolder"); create a folder
// fs.writeFileSync("TestFolder/bio.txt", "My name is sumit  mondal "); // create a file inside folder
// fs.appendFileSync("TestFolder/bio.txt", "data appened");
const data = fs.readFileSync("TestFolder/bio.txt", "utf8");
console.log(data.toString());
fs.unlinkSync("TestFolder/bio.txt");
