//splice array (It changes the actual array)
sample = [1,2,3,4,5];
const deleted = sample.splice(2,4);
console.log(deleted);
console.log(sample);

//sort array (It changes the actual array)

const digits = [32, 12, 90, 20, 100, 31, 109];

digits.sort((a,b) => a-b);

console.log(digits);

// concat array(It doesnt change the actual array)

const cat = [1,2,3];
const con = [4,5,6];

const concat = cat.concat(con);
console.log(concat);

const concats = cat.concat(1,2,cat);
console.log(concats);
