const fs = require("fs");
// fs.writeFileSync("test-file.txt", "how r you;");
fs.writeFileSync("test-file.txt", "how r you updated;");
fs.appendFileSync("test-file.txt", "hiaihi");
const data = fs.readFileSync("test-file.txt");
console.log(data.toString());
