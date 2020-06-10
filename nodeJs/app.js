const counter = require("./myModule");

counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());

//we can implement destructuring here to simplify as well

/* const {inc, dec, getCount} = require("./myModule");

inc();
inc();
inc();

console.log(getCount()); */