const fs = require("fs");

fs.readFile("./assets/alex.jpg",(err, img) => {
    console.log("file contents read");
    console.log(img);
});

