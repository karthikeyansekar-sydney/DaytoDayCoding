//console.log("Hello World");
//const path = require("path");
//console.log(`${path.basename(__filename)}`);

//console.log(process.pid);
//console.log(process.versions.node);


const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(` ${greeting} ${user}`);
