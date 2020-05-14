const prod = [
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
    prodname: 'playstation',
  price: 100,
  count: 7
}
];


// find array returns any object which satisfies the given condition

const find = prod.find(prod => prod.price === 100);

console.log(find);

const finds = prod.find(prod => prod.price === 100).price;

console.log(finds);

//findIndex array

const exam = [1, 3, 2, 4, 6]
const fiin = exam.findIndex(value => value === 3);
console.log(fiin);

// from array returns an array of the given input

 const stri = '123456654';

 const frm = Array.from(new Set(Array.from(stri, mapfn)));

 function mapfn(x) {
   return Number(x);
 }
 console.log(frm);

 const frm1 = Array.from(stri, x => Number(x)); //Number is a constructor
 console.log(frm1);

// Is Array

console.log(Array.isArray(exam));

// flat array returns a simple array from a nested one

const final = [1,[2,3,[4,[5]]]];

const finalRes = final.flat(Infinity);

console.log(finalRes);
