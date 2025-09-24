"use strict"; //treat all js code as newer version

//alert("hello") //we are using nodejs, not brower

let name = "Ayush"
let age = 20
let isloggedIn = false

// number => 2 to power 53 range 
// bigint 
// string =>""
// boolean => true/false
// null => stand alone value
// undefined => value is not asign
// symbol => unique

// object

// console.log(typeof null) //output is object
// console.log(typeof undefined) //output is undefined

// Data conversion
// let score = "33"
// console.log(typeof score)

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

//"33" => 33 means in convert in numbers
// "22abc" => NaN
// true => 1; false=> 0

// during the boolean conversion
// 1 => true; 0 => false
// "" => false
// "hitesh" => true


// ******* Operations **********

let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "hello";
let str2 = "Ayush";
let  str3 = str1+str2;
console.log(str3); //helloAyush
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32
console.log(true); //true  
console.log(+true); //1  
console.log(+""); //0  

let gamescore = 100;
gamescore++;
console.log(gamescore);

// ****** Comparison of datatype *******
console.log(2>1); //true
console.log("02">1); //true
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//the reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to numbers, treating it as 0. that's why null >= 0 is true and null > 0 is false.


