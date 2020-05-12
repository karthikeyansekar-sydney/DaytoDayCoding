// fill array (It changes the actual array)
//It fills the array with the given value

console.log('Demo for fill array method');

const fil =[1,2,3,4,5];
fil.fill(0);
console.log(fil);

const filt =[1,2,3,4,5];
filt.fill(0, 1, 3); //array.fil(valueTobeFilled,startindex,endindex) which fills zero from 1 to 2 index numbers
console.log(filt);

let newarr = (n) => {return Array(n).fill(0).map((_,idx) => (idx + 1))};
console.log(newarr(10));

// Includes Array (It doesnt change the actual array)

const fruit = ['Apple', 'pears', 'grapes'];
const res = fruit.includes('pears');
const resu = fruit.includes('banana');

console.log('\n');
console.log('Demo for includes array method');

console.log(res);
console.log(resu);


const fruits = ['Apple', 'banana', 'grapes'];
const result = fruits.includes('orange');

if (result) {
  console.log('yuppy');
}
  else {
    console.log('fruit not available');
  }

// join Array
console.log('\n');
console.log('Demo for join array method');

const countries = ['rome', 'india','america'];

const tour = countries.join();
console.log(tour);

const tours = countries.join(' - ');
console.log(tours);
