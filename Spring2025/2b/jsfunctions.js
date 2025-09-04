// function negate(num = 0){
//   return num * -1;
// }

// const negate = (num = 0) => { 
//   return num * -1; 
// }

// const negate = num => { return num * -1 }

// const negate = num => num * -1;


// console.log(negate(5));


//Practical example of passing functions as arguments

// Different calculation strategies
const studentDiscount = price => price * 0.85;  // 15% off
const seniorDiscount = price => price * 0.80;   // 20% off
const blackFridayDeal = price => price * 0.50;  // 50% off
const noDiscount = price => price;              // Full price

// Apply pricing strategy to cart
const calculateTotal = (items, discountFunction) => {
  const subtotal = items.reduce((sum, item) => sum + item, 0);
  return discountFunction(subtotal);
};

const cartPrices = [29.99, 15.00, 45.50];
console.log(calculateTotal(cartPrices, studentDiscount));  // $76.91
console.log(calculateTotal(cartPrices, blackFridayDeal));  // $45.24