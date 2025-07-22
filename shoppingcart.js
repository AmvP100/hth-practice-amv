const storeProducts = {
  apples: 1.5,
  bread: 2.0,
  milk: 2.5,
  eggs: 3.0,
  cheese: 4.0
};

const storeItemsDiv = document.getElementById("store-items");

for (const item in storeProducts) {
  const price = storeProducts[item];

  const itemButton = document.createElement("button");

  const buttonText = document.createTextNode(item + " - $" + price.toFixed(2));

  itemButton.appendChild(buttonText);

  itemButton.addEventListener("click", function(event) {
    addToCart(item, price);
  });

  storeItemsDiv.appendChild(itemButton);
}

const cartList = document.getElementById("cart");
const cartTotalSpan = document.getElementById("cart-total");

let total = 0;

function addToCart(item, price) {
  const list = document.createElement("li");

  const itemText = document.createTextNode(item + " - $" + price.toFixed(2));

  list.appendChild(itemText);

  cartList.appendChild(list);

  total = total + price;

  cartTotalSpan.innerHTML = total.toFixed(2);
}