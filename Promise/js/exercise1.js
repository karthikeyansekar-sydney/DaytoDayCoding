const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const order = [['sunglasses', 1800], ['bags', 2]];

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry.Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};

const handleSuccess = (resolvedValue) => console.log("Your order is successful");

const handleFailure = (rejectedValue) => console.log("Your order is not successful, try to reduce the number of items");

checkInventory(order)
.then(handleSuccess)
.catch(handleFailure);
