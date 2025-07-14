const storeProducts = {
  apples: 1.5,
  bread: 2.0,
  milk: 2.5,
  eggs: 3.0,
  cheese: 4.0
};

const shoppingCart = ['apples', 'milk', 'cheese', 'eggs'];

function getCartTotal(cart) {
  let total = 0;

  for (const item of cart) {
    if (storeProducts[item]) {
      total = total + storeProducts[item];
    } else {
      console.log(item + " is not found in the store");
    }
  }

  return total;
}

const totalPrice = getCartTotal(shoppingCart);
console.log("Total price: $" + totalPrice.toFixed(2));