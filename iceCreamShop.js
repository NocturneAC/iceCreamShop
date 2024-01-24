//www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream

console.log(" I ");
console.log(" eat ");
console.log(" Ice Cream ");

// asynchronous call back
console.log("I");
// This will be shown after 2 seconds
setTimeout(()=>{
    console.log("eat");
},2000)

console.log("Ice Cream");

// Steps to make Ice Cream
// 1. Place order
// 2. Cut fruit
// 3. Add water and ice
// 4. Start the machine
// 5. Select the container
// 5. a) grab the container
// 5. b) open the container
// 5. c) place the ice cream

// 6. Select toppings
// 6. a) place the toppings
// 7. Serve ice cream

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

// let order = (call_production) =>{
// console.log("Order placed. Please call production")
// // function 👇 is being called 
//   call_production();
// };

// let production = () =>{
//   console.log("Production has started")
// };

// // name 👇 of our second function
// order(production);

// 1st Function
let order = (fruit_name, call_production) =>{
    setTimeout(function(){
        console.log(`${stocks.Fruits[fruit_name]} was selected`)

// Order placed. Call production to start
    call_production();
},2000)
};

// 2nd Function
let production = () =>{
  // blank for now
};

// Trigger 👇
order(0, production);