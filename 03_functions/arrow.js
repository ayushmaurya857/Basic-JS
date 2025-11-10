//this keyword -- current context and isko object me hi jyada use krte hai
// brower ke ander global object 'window object' hai
const user = {
    username: "Ayush",
    price: 4509,
    welcomemsg: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this); // this print the { username: 'Ayush', price: 4509, welcomemsg: [Function: welcomemsg] }
    }
}
// user.welcomemsg();
// console.log(this); //--> print the currect contex, which is the { }

//-----------------------------------------
function ayush(){
    let username = "ayu";
    console.log(this.username);
}
ayush();

const ayus = function (){
    let username = "ayu";
    console.log(this.username);
}
ayus();

//both funtion print the undefined
//arrow function ke ander bhi 'this' function kam nahi krta, undefine return krta hai bs

// ------------------------------------------

// const addtwo = (num1, num2) => {
//     return num1+num2;
// }

//implicit return type this function formation 
// {} lagane pr return likhna padta hai but ( ) me return nahi likha jata arrow fucntion me 
const addtwo = (num1, num2) =>  num1+num2;
console.log(addtwo(5, 2));

const addtwoo = (num1, num2) => ({username: "Ayush"});
console.log(addtwoo(4, 6));

//object ko return krne ke liye {} lagana hi padega 

// --------------------------------------
// global scope ke pollution ko hatane ke liye IIFE ka use krte hai and ye immediatly excute ho jata hai 
// syntax - (everything of function)()

(function ayu(){
    console.log(`ayush`);
})(); // ';' is very important here

//IIFE IN ARROW FUCNTION
( () => {
    console.log(`hey ayush`);
})();

( (last_name) => {
    console.log(`hey ayush ${last_name}`);
})('maurya');
