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

Test 75

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1){
  return names[0];
} else if (strokes <= par - 2){
  return names[1];
} else if (strokes === par - 1){
  return names[2];
} else if (strokes === par){
  return names[3];
} else if (strokes === par + 1){
  return names[4];
} else if (strokes === par + 2){
  return names[5];
} else (strokes >= par + 3)

  return names[6];
  // Only change code above this line
}

golfScore(5, 4);

If you have many options to choose from, use a switch statement.
A switch statement tests a value and can have many case statements
which define various possible values. Statements are executed from
the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===).
The break tells JavaScript to stop executing statements.
If the break is omitted, the next statement will be executed.

Test 76

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
  answer = "alpha";
  break;
  case 2:
  answer = "beta";
  break;
  case 3:
  answer = "gamma";
  break;
  case 4:
  answer = "delta"
}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

Test 77

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

If the break statement is omitted from a switch statement's case,
the following case statement(s) are executed until a break is encountered.
If you have multiple inputs with the same output,
you can represent them in a switch statement like this:

let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.

Test 78

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  case 2:
  case 3:
  answer = "Low";
  break;
  case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High"
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

If you have many options to choose from,
a switch statement can be easier to write than
many chained if/else if statements.

The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Test 79

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

switch (val){
  case "bob":
    answer = "Marley";
    break;
  case 42: 
    answer = "The Answer";
    break;
  case 1:
  answer = "There is no #1";
  break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

You may recall from Comparison with the Equality Operator that all comparison
operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false,
we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

Test 80

function isLess(a, b) {
  // Only change code below this line
  return a <= b 

  // Only change code above this line
}

isLess(10, 15);

When a return statement is reached, the execution of the current
function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above will display the string Hello in the console,
and return the string World. The string byebye will never display in the console,
because the function exits at the return statement.

Test 81

// Setup
function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0) {
  return undefined;
}

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

In the casino game Blackjack, a player can gain an advantage
over the house by keeping track of the relative number of high
and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player.
Each card is assigned a value according to the table below.
When the count is positive, the player should bet high.
When the count is zero or negative, the player should bet low.

Count Change    	Cards
+1            	2, 3, 4, 5, 6
0	                7, 8, 9
-1	        10, 'J', 'Q', 'K', 'A'

Test 82

let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

Test 83

const myDog = {
  // Only change code below this line
"name": "Foxy",
"legs": 4,
"tails": 1,
"friends": ["Paddles", "Hairy", "Skinny"]

  // Only change code above this line
};

There are two ways to access the properties of an object: dot notation (.)
and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're
trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val would have a value of the string val1,
and prop2val would have a value of the string val2.

Test 84

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

The second way to access the properties of an object is bracket notation ([]).
If the property of the object you are trying to access has a space in its name,
you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock,
and myObj["NoSpace"] would be the string USS Enterprise.

Note that property names with spaces in them must be in quotes (single or double).

Test 85

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

Another use of bracket notation on objects is to access a property which is
stored as the value of a variable. This can be very useful for iterating through
an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
The string Doberman would be displayed in the console.

Another way you can use this concept is when the property's name is
collected dynamically during the program execution, as follows:

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
someProp would have a value of the string propName, and the string John
would be displayed in the console.

Note that we do not use quotes around the variable name when using it 
 access the property because we are using the value of the variable, not the name.

 Test 86

 // Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

After you've created a JavaScript object, you can update its properties
at any time just like you would update any other variable. You can use either
dot or bracket notation to update.

For example, let's look at ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Since he's a particularly happy dog, let's change his name to the
string Happy Camper. Here's how we update his object's
name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper";
Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.

Test 87

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder"

Test 88

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

Test 89

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDog.tails;

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];
alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.

Test 90

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  var lookup = {
    "alpha":"Adams",
  "bravo":"Boston",
"charlie":"Chicago",
"delta":"Denver",
 "echo":"Easy",
"foxtrot":"Frank",
  }
result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

Sometimes it is useful to check if the property of a given object exists or not.
We can use the .hasOwnProperty(propname) method of objects to determine if that
object has the given property name. .hasOwnProperty() returns true or false if
the property is found or not.

Example

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.

Test 91

*/