const sample_one = [1,2,3,4,5];
const sample_two = [1,2,3,4,5];

// ** foreach ** //

console.log("Here is the simple demo of how forEach works for an array ");


sample_two.forEach((value,index,arr) => console.log(`${value} is the value in index no ${index}`)); //foreach accepts 3 arguments(value,index,array)

//here arrayprint is the callback function which is defined later

console.log('\n');
console.log("Another example for forEach by printing index and their values");

sample_two.forEach(arrayprint);

function arrayprint(value,index,arr){
  console.log(`a[ ${index} ] = ${value}`);
}

//another simple way of doing the same function with a single line code

/*sample_two.forEach((value,index,arr) => {
  console.log(`a[ ${index} ] = ${value}`);
});*/


// ** map Array method ** //
console.log('\n\n');
console.log("Simple Demo for map array method");

const doublethenumb = sample_two.map(double);

function double(value, index, arr) {
  return value * 2;
}

console.log(doublethenumb);



console.log('\n');

const str = ['1','2','3','4','5'];
const numbers = str.map((item) => Number(item));  //const numbers = str.map(number)
console.log(numbers[0]);

// map Array method with Array of objects as example
console.log('\n');
console.log("Simple Demo for map array method with array of objects as input");

const products = [
  {
    name: 'laptop',
    price: 2000,
    count: 5
  },
  {
    name: 'mobile',
    price: 1000,
    count: 4
  },
  {
    name: 'playstation',
  price: 100,
  count: 7
}
];

const totalProductsValue = products.map(item => item.price * item.count);
const totalProducts = products.map(item => ({name: item.name, totalValue: item.price * item.count}));

console.log(totalProductsValue);

console.log(totalProducts);
