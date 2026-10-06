/* Variable -  variable is name of storage location which is to store data
in Js we use three ways to declare variable */
/* 1. By using var(not recommended)
2. let(mutable data)
3.const(Immutable data)*/
/*primitive data types and non-primitive datatype
primitive datatypes are 7
1.number
2.string
3.boolean
4.undefined
5.null

added in ES 6
6.bigInt(NA in automation)
7.sybmol(NA in automation)

in JS all objects are dynamic object and object, array
typeof operator is use to check what type of data we store into variable

typeof function
typeof variable
typeof object
*/


console.log("----------------Number Type-------------------");
let num1 = 90;
console.log("Given number is "+ num1);
console.log(typeof num1);

let num2 = 97.4397;
console.log("Decimal numbber "+ num2);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

let safeInt = 9007199254740991;
console.log("max safe int "+safeInt);
console.log(typeof safeInt);

let isActive = true;
console.log("isActive  boolean type "+ isActive);
console.log(typeof isActive);

/* String is collection of character
String is primitive type
String is Dynamic object.

Note: In javscript we don't have char datatype
*/
console.log("----------String--------------")
let fname = "Narayan";
console.log("Fname is "+ fname);
console.log(typeof fname);

let lname = 'Uphad';
console.log("lname is "+lname);
console.log(typeof lname);

let email = `abc#gmail.com`;
console.log("emial : "+ email);
console.log(typeof email);

console.log("---------Template String------------");

let profile =`My name is ${fname}, having 4.8 years of experince in software testing`;

console.log(profile);

console.log("-------------Undefined----------");

let age;
console.log("undefine age : "+age);
console.log(typeof age);

let hight = null;
//console.log(tyepof hight);
console.log(hight);
console.log(typeof hight);