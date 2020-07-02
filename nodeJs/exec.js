const cp = require("child_process");

cp.exec("lst", (err, data, stderr) => {

    console.log(stderr);
    
});

cp.exec("node readStream", (err, data, stderr) => {

    console.log(data);
    
});