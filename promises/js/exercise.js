const store = {
  sunglasses: {
    inventory: 617,
    cost: 10.99
  },
  pants: {
    inventory: 236,
    cost: 7.08
  },
  bags: {
    inventory: 12,
    cost: 22.76
  }
};

const order = {
  items: [['pants', 1], ['bags', 2]],
  giftcardBalance: 99.82
};


function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}



const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {
   const itemsArr = order.items;
   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);

   if (inStock){
     let total = 0;
     itemsArr.forEach(item => {
       total += item[1] * store[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}$.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }
}, generateRandomDelay());
 });
};

const processPayment = (respArr) => {
  const order = respArr[0];
  const total = respArr[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {
   let hasEnoughMoney = order.giftcardBalance >= total;
   if (hasEnoughMoney) {
     console.log(`Payment processed with giftcard`);
     console.log(`Generating shipping label......`);
     let trackingNum = generateTrackingNumber();
     resolve([order, trackingNum]);
   } else {
     reject(`Cannot process order: giftcard balance was insufficient.`);
   }

}, 1500);
 });
};


const shipOrder = (respArr) => {
  const order = respArr[0];
  const trackingNum = respArr[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {
     resolve(`The order has been shipped. The tracking number is: xx${trackingNum}xx.`);
}, 2000);
 });
};

//const failureMessage = () => console.log("something is wrong");

checkInventory(order)
.then((resolvedValueArray) => {
  return processPayment(resolvedValueArray);
})

.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
//.catch(failureMessage);
