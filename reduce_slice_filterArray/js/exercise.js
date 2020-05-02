//reduce Array
//Using Normal CallBack function
const sample = [1,2,3,4,5,6];

console.log(`Given Array = [${sample}]`);
console.log("Demo for reduce array method to find the total");

const red = sample.reduce(sum, 0);

function sum(sim,value)
{
  return sim = sim + value;
}
console.log(red);

function myFunction()
{
//Using Arrow function
const sample1 = [1,2,3,4,5,6];
const redu = sample1.reduce(((sum,value) => sum + value),0);
document.getElementById("demo").innerHTML = redu;
}
// filter Array
const rand = [1,2,3,6,2,4,1,5,2,3,1,5,7,2,5];
console.log(`Given Array = [${rand}]`);
console.log("Demo for filter array method to remove the duplicate values");

const filter = rand.filter((value,index,arr) => {
  return arr.indexOf(value) === index;
});
console.log(filter);

//Slice Array


const participants = [1,2,3,4,5,6,7];
console.log(`Given Array = [${participants}]`);
console.log("Demo for slice array method");
const slic = participants.slice(-3);  // returns last three values of the array
const sl = participants.slice(1);  // returns all values after first value
const slices = participants.slice(1,4);  // returns all values from second to fourth

console.log(slic);
console.log(sl);
console.log(slices);
