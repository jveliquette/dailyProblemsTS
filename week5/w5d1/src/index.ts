/*
It will help to copy this to your code editor.
Then, paste your solution back here to submit your work for grading.

First work on defining types for an Order and an Item.
Then add type parameters where needed.

If you have time, also work on breaking down this large function
into a main function, and smaller helper functions.
*/

// {
//     "items":[{"quantity":1,"price":1}],
//     "discount": 0,
//     "shipping": false,
// }

type Item = {
    price: number;
    quantity: number;
}

type Order = {
    items: Item[];
    discount: number;
    shipping: boolean;
}

function handleOrderProcessing(order: Order): number{
    let totalPrice = 0;

    for (let i = 0; i < order.items.length; i++) {
      const item = order.items[i];
      let itemTotal = 0;

      if (item.quantity > 0 && item.price > 0) {
        itemTotal = item.quantity * item.price;
      }

      totalPrice += itemTotal;
    }
// Above is total price = all in one area
    if (order.discount > 0) {
      const discountAmount = (order.discount / 100) * totalPrice;
      totalPrice -= discountAmount;
    }
// Above is discount
    const taxRate = 0.1;
    const taxAmount = taxRate * totalPrice;
    totalPrice += taxAmount;
// Abobe is tax
    if (order.shipping) {
      totalPrice += 5;
    }
// Above is shipping
    return totalPrice;
  }

  // If you have time, define these helper functions, and
  // refactor your main function to use them
  // Think through your parameters and return values.

  function calculateItemTotal(){/* your code here */}

  function applyDiscount(){/* your code here */}

  function calculateTax(){/* your code here */}

  function addShipping(){/* your code here */}
