const fs = require("fs");
const readStream = fs.createReadStream("./assets/notes.md","UTF-8");
console.log("type something...");
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  process.exit();
});