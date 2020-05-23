//if we’re dealing with multiple promises, but we don’t care about the order
//we can use promise.all

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

function restockSuccess() {
    return (Math.random() > .2);
}

const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};

const checkSunglasses = checkAvailability('bike', '99 bikes pvt ltd.');
const checkPants = checkAvailability('jackets', 'kmart supplies');
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');



Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);
