const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myCopiedFile.txt","UTF-8");
const readStream = fs.createReadStream("./assets/myFile.txt","UTF-8");

process.stdin.pipe(writeStream);