const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt","UTF-8");

writeStream.write("hello\n");
writeStream.write("world\n");