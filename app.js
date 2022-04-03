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

//A function can include the return statement but it does not have to.
In the case that the function doesn't have a return statement, when you call it,
the function processes the inner code but the returned value is undefined.

Test 54

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
sum = sum + 5
}

Test 55

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

//In Computer Science a queue is an abstract Data Structure
where items are kept in order. New items can be added at the
back of the queue and old items are taken off from the front of the queue.

Test 56

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item); //Adds '6' declared in line 564
  return arr.shift(); //Removes first number from array
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify converts array to string
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

Another data type is the Boolean. Booleans may only be one of two values: true or false.
They are basically little on-off switches, where true is on and false is off.
These two states are mutually exclusive.

Note: Boolean values are never written with quotes.
The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

Test 57

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

if statements are used to make decisions in code.
The keyword if tells JavaScript to execute the code in
the curly braces under certain conditions, defined in the parentheses.
These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true,
the program executes the statement inside the curly braces.
When the Boolean condition evaluates to false,
the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}

Test 58

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
  return "Yes, that was true"
}
return "No, that was false"


  // Only change code above this line

}

There are many comparison operators in JavaScript.
All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==.
The equality operator compares two values and returns
true if they're equivalent or false if they are not.
Note that equality is different from assignment (=),
which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true,
so the code in the curly braces will execute, and the function will return Equal.
Otherwise, the function will return Not Equal.
In order for JavaScript to compare two different data types (for example, numbers and strings),
it must convert one type to another. This is known as Type Coercion.
Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

Test 59

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

Strict equality (===) is the counterpart to the equality operator (==).
However, unlike the equality operator, which attempts to convert both values
being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal,
and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false

Test 60

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

If the values being compared are not of the same type,
the equality operator will perform a type conversion,
and then evaluate the values. However, the strict equality operator
will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number.
3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable
or a value with the typeof operator, as follows:

typeof 3
typeof '3'

typeof 3 returns the string "number", and typeof '3' returns the string "string".

Test 61

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

The inequality operator (!=) is the opposite of the equality operator.
It means not equal and returns false where equality would return true and vice versa.
Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

Test 62

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

The strict inequality operator (!==) is the logical opposite of the strict equality operator.
It means "Strictly Not Equal" and returns false where strict equality
would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

Test 63

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

The greater than operator (>) compares the values of two numbers.
If the number to the left is greater than the number to the right, it returns true.
Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

Test 64

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

The greater than or equal to operator (>=) compares the values of two numbers.
If the number to the left is greater than or equal to the number to the right, it returns true.
Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

Examples

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

Test 65

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

The less than operator (<) compares the values of two numbers.
If the number to the left is less than the number to the right, it returns true.
Otherwise, it returns false. Like the equality operator, the less than operator
converts data types while comparing.

Examples

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

Test 66

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

The less than or equal to operator (<=) compares the values of two numbers.
If the number to the left is less than or equal to the number to the right, it returns true.
If the number on the left is greater than the number on the right, it returns false.
Like the equality operator, the less than or equal to operator converts data types.

Examples

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false

Test 67

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

Sometimes you will need to test more than one thing at a time.
The logical and operator (&&) returns true if and only if the operands to the left
and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

Test 68

function testLogicalAnd(val) {
  // Only change code below this line

    if (val <= 50 && val >=25) {
      return "Yes";
    }
  

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

Test 69

The logical or operator (||) returns true if either of the operands is true.
Otherwise, it returns false.
The logical or operator is composed of two pipe symbols: (||).
This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return Yes only if num is between 5 and 10 (5 and 10 included).

The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

Test 70

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val <10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

When a condition for an if statement is true, the block of code following it is executed.
What about when that condition is false? Normally nothing would happen.
With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

Test 71

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

else {
  return "5 or Smaller"
}
  // Only change code above this line
  return result;
}

testElse(4);

If you have multiple conditions that need to be addressed,
you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

Test 72

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
else {
  return "Between 5 and 10";
}

testElseIf(7);
}

Order is important in if, else if statements.

The function is executed from top to bottom so you will want
to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0)
bar(0)
foo(0) will return the string Less than one, and bar(0) will return the string Less than two.

Test 73

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

if/else statements can be chained together for complex logic.
Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

Test 74

function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return 'Tiny'
} else if (num < 10) {
  return 'Small'
} else if (num < 15) {
  return 'Medium'
} else if (num < 20){
  return 'Large'
} else (num < 5);{


  return "Huge"};
  // Only change code above this line
}

testSize(7);

*/