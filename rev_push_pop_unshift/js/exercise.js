// reverse Array(It changes the actual array)

const numb = [1,2,3,4,5];
const numbu = numb.concat().reverse();
const numbs = [...numb].reverse();

console.log(numbs);
console.log(numbu);
console.log(numb);

// push array

console.log(numb);
numb.push(6,7,8,9,10);
console.log(numb);

//pop array

numb.pop();
console.log(numb);
numb.pop();
console.log(numb);
numb.pop();
console.log(numb);
numb.pop();
console.log(numb);
numb.pop();
console.log(numb);

//unshift array

const total = numb.unshift(0);
console.log(total); //it will generate the total number of values in array
console.log(numb); 
