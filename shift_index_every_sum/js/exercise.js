console.log('\n');
console.log("Shift vs unshift");
console.log('\n');
numb = [1,2,3,4,5]
num = [1,2,3,4,5,7]
num.unshift(0,-1)
const total = num.unshift(); //adds the item to the first index of an array
console.log(total);
console.log(num);


// shift array

const totals = numb.shift();
console.log(totals); //remove the first item from array and returns it
console.log(numb);
console.log('\n');

// indexOf and lastIndexOf array
console.log("indexof vs lastindexof");
console.log('\n');
const names = ['karthik', 'harini', 'rahul', 'ajay', 'karthik'];
const idx = names.lastIndexOf('karthik');
const index = names.indexOf('harini');
console.log(idx);
console.log(index);
console.log('\n');

// every Array
console.log("every vs some");
console.log('\n');

const ans = numb.every(item => item > 0);
console.log(ans);
const answ = numb.every(item => item > 1);
console.log(answ);

const prod = [
  {
    name: 'laptop',
    price: 2000,
    count: 5
  },
  {
    name: 'mobiles',
    price: 1000,
    count: 4
  },
  {
    prodname: 'playstation',
  price: 100,
  count: 7
}
];

const rain = prod.every(prod => prod.name);

console.log(rain);

const rains = prod.every(prod => prod.price);

console.log(rains);

// some array

const som = numb.some(item => item > 4);

console.log(som);

const some = prod.some(item => item.name == 'mobiles');

console.log(some);
