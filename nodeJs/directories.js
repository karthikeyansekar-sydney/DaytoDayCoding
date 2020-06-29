const fs = require("fs");

fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
}); //removes all files within the directory
fs.renameSync("./storage-files", "./storage"); // renames the name of the directory
fs.rmdir("./storage", err => {
    if(err) {
        throw err;
    }
    console.log("./storage directory removed");
   
    
}); //removes the directory