/*
//This will be a repository for my freecodecamp.org tests

Test 1

// This is an in-line comment.

/* This is a 
multi-line comment 

Test 2

var myName;

In computer science, data is anything that is meaningful to the computer.
JavaScript provides eight different data types which are;
undefined, null, boolean, string, symbol, bigint, number, and object.

Test 3

Setup
var a;

// Only change code below this line
a = 7;

Test 4
Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;

Test 5

var a = 9;

Test 6

/* var myFirstName = "James";
var myLastName = "Beaumont";

Test 6

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

Test 7

Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

Variable assignments

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

Test 8

let catName = "Oliver";
let catSound = "Meow!";

Test 9

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

In programming, it is common to capitalise const variables

Test 10

const sum = 10 + 10;

Test 11

const difference = 45 - 33;

Test 13

const product = 8 * 10;

Test 14

const quotient = 66 / 33;

Test 15

let myVar = 87;

// Only change code below this line
myVar++; //Increments myVar by 1

Test 16

let myVar = 11;

// Only change code below this line
myVar--; //Deprecates myVar by 1

Test 17

const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 1.2;

Test 18

const product = 2.0 * 2.5;

Test 19

const quotient = 4.4 / 2.0; // Change this line

Test 20

const remainder = 11 % 3;

In programming, it is common to use assignments to modify
the contents of a variable. Remember that everything to the
right of the equals sign is evaluated first.

Test 21

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12; //Using += changes the variable to 15, it was 3 now 12 has been added
b += 9;
c += 7;

Test 22

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1; //Like the += operator, -= subtracts a number from a variable.

Test 23

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

Test 24

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

Test 25

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
//Back slashes allows you to add literal double quotation marks inside a string, it is an escape character

Test 26

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
//Changing the outside quotes to single quotes allows to delete backslashes inside string

Quotes are not the only characters that can be escaped inside a string.
There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
We learned this in the previous challenge.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

Test 27

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

Test 28

const myStr = "This is the start. " + "This is the end."; //Concatenation

Test 29

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."; //Concatenation is good for breaking long sentences up over lines

Test 30

const myName = "James";
const myStr = "My name is " + myName + " and I am well!";

Test 31

// Change code below this line
const someAdjective = "fun";
let myStr = "Learning to code is ";
myStr += someAdjective;

Test 32

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

Test 34

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; //Bracket notation to find first character of lastName and
                                     assign it to variable firstLetterOfLastName

//In JavaScript, String values are immutable, which means that they cannot be altered once created.

Test 35

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line

Test 36

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];

Test 37

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; //Bracket notation -1 to find last letter

Test 38

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; where 2 is the second to last letter

Test 39

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "I saw a " + myNoun + " and it " + myVerb + 
" very " + myAdverb + " I made a " + myAdjective + " scream";

With JavaScript array variables, we can store several pieces of data in one place.
You start an array declaration with an opening square bracket, end it with a closing
square bracket, and put a comma between each entry,

Test 40

// Only change code below this line
const myArray = ["Piece of string", 100];

You can also nest arrays within other arrays, like below:

const teams = [["Bulls", 23], ["White Sox", 45]];
This is also called a multi-dimensional array.

Test 41

// Only change code below this line
const myArray = [["West Ham",5],["Man Utd", 0]];

Test 42

const myArray = [50, 60, 70];
myArray[0];
const myData = myArray[0]

Unlike strings, the entries of arrays are mutable
and can be changed freely, even if the array was declared with const.

Test 43

// Setup
const myArray = [18, 64, 99];
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1]; //This would equal 8, 
                                2nd (literally 3rd) array, followed by
                                1st (literally 2nd) array
// Only change code below this line
myArray[0] = 45

Test 44

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]) //Pushes data on to the end of an array

//Another way to change the data in an array is with the .pop() function.
.pop() is used to pop a value off of the end of an array.
We can store this popped off value by assigning it to a variable.
In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

Test 45

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();

//pop() always removes the last element of an array.
What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(),
except it removes the first element instead of the last.

Test 46

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

//Not only can you shift elements off of the beginning of an array,
you can also unshift elements to the beginning of an array
i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the
element at the end of the array, unshift() adds the element at the beginning of the array.

Test 47

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

Test 48

const myList = [["Boost", 10],["Mars", 5],["Heineken", 24],["Milk", 6],["Porridge", 1]];

//Functions

In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses,
like this: functionName(); Each time the function is called it will print out
the message Hello World on the dev console. All of the code between the curly braces
will be executed every time the function is called.

Test 49

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction()

//Parameters are variables that act as placeholders for the values that are
to be input to a function when it is called. When a function is defined,
it is typically defined along with one or more parameters.
The actual values that are input (or "passed") into a function when it is
called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun like this: testFun("Hello", "World");.
We have passed two string arguments, Hello and World.
Inside the function, param1 will equal the string Hello and
param2 will equal the string World.
Note that you could call testFun again with different arguments
and the parameters would take on the value of the new arguments.

Test 50 

function functionWithArgs(num1, num2){
  console.log(num1+num2);
}
functionWithArgs(1,2);

Test 51

function timesFive(num){
  return num * 5;
}
const answer = timesFive(5);

In JavaScript, scope refers to the visibility of variables.
Variables which are defined outside of a function block have Global scope.
This means, they can be seen everywhere in your JavaScript code.
Variables which are declared without the let or const keywords are
automatically created in the global scope. This can create unintended
consequences elsewhere in your code or when running a function again.
You should always declare your variables with let or const.

Test 52

// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = myGlobal - 5
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Variables which are declared within a function,
as well as the function parameters, have local scope.
That means they are only visible within that function.

Test 53

function myLocalScope() {
  // Only change code below this line
let myVar = "James"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//It is possible to have both local and global variables with the same name.
When you do this, the local variable takes precedence over the global variable.

Test 54

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

