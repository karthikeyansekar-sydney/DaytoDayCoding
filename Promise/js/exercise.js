const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {  //promise constructor method takes a function parameter
                                          //which is called executor function
                                          //The executor function has two function parameters, usually
                                          //referred to as the resolve() and reject() functions

                                          /*JavaScript will pass its own resolve() and reject() functions into the executor function. */
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};

const orderSunglasses = () => {
    return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);
