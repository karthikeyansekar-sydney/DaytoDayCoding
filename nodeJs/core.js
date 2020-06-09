const path = require("path"); // loading path module
const util = require("util"); // loading util module
const v8 = require("v8");

util.log(path.basename(__filename)); // in utility module we can print date and timestamp as well
util.log(" ^ The name of the current file");
util.log(v8.getHeapStatistics());
