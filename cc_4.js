// Task 1 
// Declare a variable purchaseAmount with a value 
let purchaseAmount = 1000;

// if statement to apply discount >100 
if (purchaseAmount > 100) {
    purchaseAmount = purchaseAmount - 100;
}

// Log final amount
console.log(`Final amount after discount: $${purchaseAmount}`);

// Task 2
// Declare array sales 
let sales = [120, 85, 200, 150, 90];

// Use for loop to calculate total sales
forloopTotal = 0;
for (let i = 0; i < sales.length; i++) {
    forloopTotal += sales[i];
}

// Log total sales
console.log(`Total sales: $${forloopTotal}`);

// Task 3   
// Declare a variable stock with a initial value of 10
let stock = 10;

// Use while loop to decrease stock until 0
while (stock > 0) {
    stock--;
}

// Log final stock
console.log(`Final stock: ${stock}`);

// Task 4
// Declare variable responses initial value of 0
let responses = 0;

// Use a do...while loop to collect responses, simulating user input with responses++ until it reaches 3.
do {
    responses++;
} while (responses < 3);

// Log total responses
console.log(`Total responses: ${responses}`);

// Task 5
// Declare employee object 
let employee = {
    name: "Alice",
    position: "manager",
    salary: 75000,
};

// Use for...in loop to iterate over object properties
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// log employee object
console.log(employee);

// Task 6
// Declare array of products
let products = [ "Laptop", "Mouse", "Keyboard" ];

// Use for...of loop to display each product
for (let product of products) {
    console.log(product);
}

// log each product name usign template literal
console.log(`Products: ${products}`);

// Task 7   
// Declare an array orders
let orders = [ 101, 102, 103 ];

// Use forEach to log each order ID to the console using template literal
orders.forEach(order => {
    console.log(`Order ID: ${order}`);
});

// log each order ID    
console.log(`Orders: ${orders}`);

// Task 8   
// Write a function calculateTax that takes an amount and tax rate.
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

// Return the calculated tax.
console.log(`Tax: $${calculateTax(100, 0.1)}`);

// log using template literal
console.log(`Tax: $${calculateTax(100, 0.1)}`);

// Task 9   
// Declare a function expression applyDiscount that takes a price and discount percentage.
let applyDiscount = function(price, discount) {
    return price - price * discount;
};

// Return the discounted price.
console.log(`Discounted price: $${applyDiscount(100, 0.2)}`);

// log using template literal
console.log(`Discounted price: $${applyDiscount(100, 0.2)}`);