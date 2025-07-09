let products = [
  {
    id: 1,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShkPEHIFQpQ50ellYXH5zoTnWcfd3gcX__QscRP76ZW3BQJ4K6mGTdxbdtIxRUMl22amhMrbz7TqcaeLoGRFBhrUq7_O4xoOaNxbmJQIbZGPWAqEieBJwLJvMzvWSyi1m3qymWfQ&usqp=CAc",
    title: "Winslet Fabric Sofa Set",
    description:
      "3-seater modern sofa with wooden legs and soft fabric upholstery.",
    price: 34999,
    qty: 1,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTP38HHsacW8TvHGHfw2ZB5jnbNkhKiYInjBYkOpm5J7olwCaXyeJnrK6x3Mu1_wEh-QaNlAU-I27bL_q6JVK-9NuEOFwWTFjxVPpNgjSCY",
    title: "Taurus TV Unit",
    description:
      "Compact TV unit with shelves and drawers, perfect for small spaces.",
    price: 12999,
    qty: 1,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjZCeObyEi_4JbpR9YPpvCBZsNfnFMgQ4l6gc22QHBWX5Hm7mpvbRf5QpOy8ajDBDgBQI76Ynk9tMoNfvZae6a7wevpKGitcMV29h-sTMa",
    title: "Aurora Queen Bed with Storage",
    description: "Queen-sized wooden bed with headboard and hydraulic storage.",
    price: 27999,
    qty: 1,
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTOnE_csZzb7g_4gUwUznZc44arz_GrzBjvVyCVV4xFlnnwgiXHfQPa7Ok0XIue2Fqsy1tJhg4kH812qS8oPOUbyxkfMAiAz6dZvWhHR4M",
    title: "Nova 3-Door Wardrobe",
    description: "Spacious wardrobe with mirror and multiple compartments.",
    price: 18999,
    qty: 1,
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4zSb-asugyqAWGSukCOno_at3BnTn9uR5JTZDDwyy4LLx-wpWSC25uKRWvkKBV9PjNaJLATfPHSTKCm0pmKmPoQOwg9qzWBtFMuuLm-yLMIU9ZMIYuXOs",
    title: "Oriana 4-Seater Dining Set",
    description:
      "Solid wood dining table with 4 cushioned chairs in teak finish.",
    price: 24999,
    qty: 1,
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZ2xJIi54fpYNzCi1Du_b1EXq3pIvCqJILRpYMHKM_GGNI-h_0iDEs_FFfcFCPasYrOVmdwBUtKvp7CBRGHFlk1ClypJAahOSqFedGgcQu",
    title: "Elanor Coffee Table",
    description:
      "Elegant wooden coffee table with open shelf and drawer for storage.",
    price: 8999,
    qty: 1,
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0RVeFOxcjlqHFPRBUWhlSvW60aGJ4UQHnXddFuQYRm9HdWqko1Tl8vn4Rslzu37WW8Gc5yrFmslM9VTPgCzEn8WnFlB7t-Q&usqp=CAc",
    title: "Harper Bookshelf",
    description: "Tall wooden bookshelf with five shelves and a walnut finish.",
    price: 7999,
    qty: 1,
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomOtPhZ8a1FcmuS5FIrDS6bKvWnfeQDY5mQ&s",
    title: "Luna Study Table",
    description: "Compact study table with drawer storage and sleek design.",
    price: 10999,
    qty: 1,
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRX_wMQOvNY6oUwaCNy4R292CRN-jOrV_1f7aMGf1-Twi7aNnArfkpB02-aPCz4Pvxq_zGycb7xzLe4zHLtitdHGpG1bQNbIA&usqp=CAc",
    title: "Nova Bedside Table",
    description:
      "Stylish side table with drawer and shelf, perfect for bedrooms.",
    price: 4999,
    qty: 1,
  },
  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJuvvM3QWbCzuF5QxsFjp_QL32Gnixow5fMw&s",
    title: "Vesta Armchair",
    description:
      "Comfortable fabric armchair with wooden legs and curved armrests.",
    price: 11999,
    qty: 1,
  },
  {
    id: 11,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGPIYElIBrqUNpihq-PTuHwCZ5DC8pow-zSDm63SiVxwkGzcDhBdIINgBBfIxNQTyKFaGGGk5ch_XUfCh7Mo1891eO&usqp=CAc",
    title: "Maxwell Shoe Rack",
    description: "Closed shoe rack with two doors and internal shelf sections.",
    price: 5999,
    qty: 1,
  },
  {
    id: 12,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSO-xY2yxn4ejULU36-rnK7nQj_LvZ1aEC_xES49OsQKcfZzWH4x-BQYhdCaOYHNXtw-5wsdpytYxRw7Y-Yg8n3qh11X4bcvd-JD-M&usqp=CAc",
    title: "Zeno Lounge Chair",
    description: "Relaxed lounge chair with high backrest and cushion seating.",
    price: 15999,
    qty: 1,
  },
];

const productDiv = document.querySelector(".products");
const cartDiv = document.querySelector(".cart-show");
const priceDiv = document.querySelector(".pricing");
let cartList = JSON.parse(localStorage.getItem("cart")) || [];

function showproducts() {
  products.map((product) => {
    const productBox = document.createElement("div");
    productBox.className = "product-box";

    const image = document.createElement("img");
    image.src = product.image;

    const title = document.createElement("h3");
    title.textContent = product.title;

    const description = document.createElement("p");
    description.textContent = product.description;

    const qty = document.createElement("p");
    qty.textContent = "Quantity:" + product.qty;

    const price = document.createElement("p");
    price.textContent = "Rs. " + product.price + " /-";

    const button = document.createElement("button");
    button.textContent = "Add to Cart";

    button.addEventListener("click", () => {
      AddCart(product);
    });

    productBox.appendChild(image);
    productBox.appendChild(title);
    productBox.appendChild(description);
    productBox.appendChild(price);
    productBox.appendChild(button);
    productBox.appendChild(qty);

    productDiv.appendChild(productBox);
  });
}

function ShowCart() {
  cartDiv.innerHTML = "";

  cartList.map((cart, index) => {
    const cartBox = document.createElement("div");
    cartBox.classList = "cart-box";

    const image = document.createElement("img");
    image.src = cart.image;

    const details = document.createElement("div");
    details.className = "details";

    const title = document.createElement("h3");
    title.textContent = cart.title;

    const description = document.createElement("p");
    description.textContent = cart.description;

    const price = document.createElement("p");
    price.textContent = "Rs." + cart.price + " /-";

    const qty = document.createElement("p");
    qty.textContent = "Quantity: " + cart.qty;

    const addBtn = document.createElement("button");
    addBtn.className = "plus";
    addBtn.textContent = "+";
    addBtn.addEventListener("click", () => {
      cart.qty += 1;
      localStorage.setItem("cart", JSON.stringify(cartList));
      ShowCart();
    });

    const minusBtn = document.createElement("button");
    minusBtn.className = "minus";
    minusBtn.textContent = "-";
    minusBtn.addEventListener("click", () => {
      if (cart.qty > 1) {
        cart.qty -= 1;
      } else {
        cartList.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cartList));
      ShowCart();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      RemoveCart(index);
    });

    const quantityControls = document.createElement("div");
    quantityControls.className = "quantity-controls";

    quantityControls.appendChild(minusBtn);
    quantityControls.appendChild(addBtn);

    details.appendChild(title);
    details.appendChild(description);
    details.appendChild(price);
    details.appendChild(qty);
    details.appendChild(quantityControls)
    details.appendChild(deleteBtn);

    cartBox.appendChild(image);
    cartBox.appendChild(details);

    cartDiv.appendChild(cartBox);
  });

  Showtotal();
}

function AddCart(product) {
  const existingProduct = cartList.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.qty += 1;
  } else {
    cartList.push({ ...product });
  }

  localStorage.setItem("cart", JSON.stringify(cartList));
  ShowCart();
}

function RemoveCart(index) {
  cartList.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartList));
  ShowCart();
}

function Showtotal() {
  priceDiv.innerHTML = "";

  let subtotalAmount = 0;
  for (let i = 0; i < cartList.length; i++) {
    subtotalAmount += cartList[i].price;
  }

  let shippingAmount = 999;
  let totalAmount = subtotalAmount + shippingAmount;

  let subtotal = document.createElement("p");
  subtotal.textContent = "Subtotal:";
  let subprice = document.createElement("span");
  subprice.textContent = " Rs. " + subtotalAmount + " /-";
  subtotal.appendChild(subprice);

  let shiptotal = document.createElement("p");
  shiptotal.textContent = "Shipping:";
  let shipprice = document.createElement("span");
  shipprice.textContent = " Rs. " + shippingAmount + " /-";
  shiptotal.appendChild(shipprice);

  let total = document.createElement("p");
  total.textContent = "Total:";
  let price = document.createElement("span");
  price.className = "total";
  price.textContent = " Rs. " + totalAmount + " /-";
  total.appendChild(price);

  let hr = document.createElement("hr");

  priceDiv.appendChild(subtotal);
  priceDiv.appendChild(shiptotal);
  priceDiv.appendChild(hr);
  priceDiv.appendChild(total);
}
showproducts();
ShowCart();
