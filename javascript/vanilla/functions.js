/* Basics of JS Functions

Lynda courses -
>js-functional-lite
>js-functional-programming
>js-functions

Things to explore -
http://getify.me
youdontknowjs.com
MakerSquare
LABjs (dynamic script loader), Grips (templating engine),
Structure and interpretation of computer programs - Gerald Jay Sussman, Hal Abelson
Javascript - the good parts by o'rielly
Eloquent javascript by marijn haverbeke
Podcast - Javascript jabber
Newsletter - javascriptweekly
*/

//decleration expression
function addition(a,b){
	var c = a + b;              //all variables and functions have local scope and are hoisted to the top of the function
    function x() {
        //do something
    }
    var d = c * 10;
    return c;
}

/*In JS, functions are treated as FIRST CLASS citizens. Meaning you can assign a function to a variable.
This gives you the ability to pass functions as variables to other functions, also a function can return a function*/

//definition expression (function literal or anonymous function)
var addition = function (a,b){
	var c = a + b;   // this is anonymous function (no name in the call stack)
	return c;
};                   //semicolon!
addition(20,50);
var b = addition;           //typeof b === "function";
b(10,20);

//You can define and call the function on the spot. use cases: 1)only need once 2)need to execute it immedietely
var d = 5 + function(a,b){
	return a + b;
}(4,7);

//Another anonymous function
var x = function junk(){
    console.log("definition expression or function expression");
    return 10;
    //the variable junk is only available over here (inside the function)
};
junk();              //junk is undefined, it will error out.
x();                 //x() will execute the function now. x is not 10, it is a func() that returns 10 !!!

var y = function junk(a){
    console.log("function expression");
    return a+10;
}(5);
//Here y is 15. Since the function was immedietly executed, y is not the function, but y is the value that the func returns.

//Immediately Invoked Function Expression (IIFE)
(function (y){
    var x = 10;
	console.log('anonymous closure');        //any variable here is available in scope ONLY inside this function block.
    console.log(x+y)
}
)(5);

//return statement: it immedietely exits the function with undefined or the given return value.
//NEVER do return \n 10 (i.e two lines). JS will put a ";" after the 'return' and it will return undefined and not return 10.

//'this' object and 'arguments' object are two special object available inside every function.
//The arguments object is an array-like object. It has keys "0", "1", "2", "length" etc. BUT it is not an array. You cannot do arguments.push()/pop()
for (i = 0; i < arguments.length; i++) {
	sum += arguments[i];       //you are just accessing the property of an object. Not iterating an array.
}
//'this' object depends on the way the function was invoked

/*Four ways of invoking functions
1) default       addition(4,5);
2) implicit      calc.addition(4,5);
3) explicit      func.call(), func.apply()
3) constructor   using the new keyword
*/

//1)default
function addition(a,b){
	return (console.log(a+b) , console.log(this),  console.log(arguments));           //it will be 7, window object, and [3,4]
    //the return statement in a JS function is actually a function. You can send it arguments like the above.
}(3,4);    //self-invocation

//2)Implicit (as object methods)
var calc = {
	status : "ready",
	addition : function (a,b){
		return (console.log(a+b), console.log(this), console.log(this.status), console.log(arguments));      //this will give 9, calc, "ready", [4,5]
	}
};
calc.addition(4,5);

//3)Explicit (indirect invocation)
//You can give the value of 'this' and 'arguments' in the call.
var speak = function(saywhat){
	console.log(this);       //object
	console.log(this.love);   //purr
	console.log(saywhat);    //say hello
}
speak.call({normal:'meow', love:'purr'} , "say hello") // now this = this object and not window object
speak.apply({normal:'meow', love:'purr'} , ["say hello"] )  //APPLY takes an array of arguments unlike CALL

//4)Constructor
var c = function(){};
var cc = new c();     // a constructor invocation returns a new empty object. cc= {}

var Dog = function() {
	var name, breed;
    return console.dir(this) //'this' points to the newly created empty object
}
firstDog = new Dog();
// firstDog.name does not exist for now
firstDog.name = "Rover";        // You are creating a field.
firstDog.breed = "dalmation";
var speak = function (saywhat){
	console.log(this.name + ' ' + saywhat);
}
Dog.prototype.speak = speak;
firstDog.speak('hello');       //Rover hello

/*SCOPE
vars in JS have function scope. Within a function all the vars and function declerations are hosited to the top.
Any variable declared without 'var' are accessible EVERYWHERE. They have global scope.
Scope chain: If variable does not exist in the current function, it looks up all its parent functions to find the variable
*/
var outerVar = 10;
function myDog(){
	var name = "parent number one";
	function otherDogs(){
		console.log(name);         //this works, eventhough 'name' is not present in the current function
	}
	console.log(outerVar);         //this works too.
	otherDogs();
}
console.log(name);                 //this fails as 'name' does not exist outside myDog()

function a() { }              //This whole deceleration is immediately hoisted to the top.
var a = function x(){};       //here only var a is hoisted to the top. The assignment happens later. So don't call a() before this assignment statement.

//---------------------------------------------------------------------------------------------------------------------------------------------
//Some function concepts -

/* 1)Pure functions: function that has no side-effects. (does not change any global vars or state of the program).
Pure functions operate entirely on it's own variables, it's own state, or any of the things passed into it.
A pure function does not mean it doesn't access outside state, it means it doesn't change the outside state
Given the same input, it MUST give the same output. (idempotent)
Pure functions are the foundation of FUNCTIONAL programming style (as opposed to Object Oriented style)
The goal is to minimize side-effects in functional programming, you cant be 100% pure*/
//an impure function -
function foo (x){
	y++;
	z = x * y;
}
var y = 5, z;
foo(20);
z;   //this gives 120
foo(20);
z;   //now this gives 140 . Each time foo() is called it gives inconsistent results..

//even doing a console.log() is considered a side-effect, as you are printing out something somewhere else.

//arrays, functions, objects are assigned by reference and passed by reference always (F-BONUS)
//null, undefined, string, boolean, number are assigned by value and passed by value always (a copy is passed)
//another impure function -
function doubleThem(list){
	for(var i = 0; i < list.length; i++){
		list[i] = list[i] * 2;        //or even doing something like pop() mutates the array
	}
}
var arr = [3,4,5];
doubleThem(arr);  //the global arr is now [6,8,10]
//to make it a pure func: in the func code - create an empty array, populate it as requried and then return this new array.
//or make copy of it: const copyArr = [].concat(givenArray);
// for an object, make a copy of the given object and then return that one.  const copyObj = {...givenObj}

// 2)Assigning functions DYNAMICALLY at run time
function printDebugMessage(stringHere) {line(stringHere);}
function doNothing() {}
const DEBUG_MODE_ENABLED = false;
var debug;
if(DEBUG_MODE_ENABLED){
	debug = printDebugMessage;
} else {
	debug = doNothing;
}
debug("Some debug message");

// 3)Passing functions as arguments.  (higher order functions)
function doIfElse(condition, funct1, funct2){
	if(condition){
		funct1();
	} else {
		funct2();
	}
}
doIf(x === 1,   function(){line('x is one')},   function(){line('x is not one')} );
doIf(x > 1 && x < 10,   function(){line('x is btwn 1 and 10')} ,   function(){line('done')} );

// 4)Returning functions.    (higher order functions)
function giveMeAfunctionThatReturnsAFunction(){      // OR var g = () => () => () => console.log('x');
	return function(){
		return function(){
			console.log("Function is here");
		}
	}
}
var abc = giveMeAfunctionThatReturnsAFunction;
var d = abc();            // this is now a function that returns - function(){console.log("Function is here")};
var e = d();              //this is now - function(){console.log("Function is here")}
e();                      //this will have an output;
abc()()();                //this will also have an output

//another example:
function doIfSafe(n, message, func){
	if(n !== null & typeof n === 'number' && message !== null && typeof messsage === 'string'){
		return func(n, message);   //meaning execute it then return flow of control
	}
}
function printMessageNTimes(n, message) { }
function getNthLetter(n, message){ }
function printTillN(n, message){ }
doIfSafe(5,"A string to work with", printMessageNTimes); //all these functions will go through the same check before being executed
doIfSafe(10,"A string to work with", getNthLetter);
doIfSafe(8,"A string to work with", printTillN);

// 5)Returning multiple functions
function return2Functions(){
	return {
		function1 : function (){ line('this is func1')} ,
		function2 : function(){ line('this is func2')}
	}
}
var d = return2Functions(); // d is an object of 2 funcs now
d.function1();
d.function2();

// 6)Callback: A function that you pass as an argument to an asynchronous function. When the async function has finished running, it calls the function we passed it (with some arguments too)
setTimeout( function(){ }, 3000);       // Async function, so it does not stop the next line from executing.
console.log("this is execute immidiately");

var fs = require('fs');
fs.readFile('message.txt','utf-8',function(err,res){   //nodeJs read-file, async function send result to your function
	if(err) throw err;
	console.log(res);
});

/* 7)Recursive functions: a function that keeps calling itself until a condition is met (base case is reached)
When one function calls another function, it allocates a new stack frame for it and once execution is done, parent function deletes the stack frame.
IE used to allow a total of only 13 stack frames... (i.e stack trace including libs can't be more than 13 functions deep). With recursion call stack can get huge quick! therefore people don't use it much.
In some languages, compilers convert the recursive func into a huge iterative loop and then run it.

Proper Tail Call : If the last line in func A is "return funcB()", then JS will not create a new stack frame for funcB but actually remove funcA's stackframe and use it for funcB.
In this way if my recursive func uses only Proper Tail Calls, then in theory JS will use only 1 stack frame for it's entire execution - constant space O(1).
Thus recusion can now be used in practice if you use PTC. PTCO is PTC-optimization. Remember: you don't have unlimited memory and unlimited cpu*/

//Implement a loop as a function
function whileLoop(x){
	console.log(x);
	if (x > 0) whileLoop(x-1);
	console.log(x);
}
whileLoop(5); //will output 5 4 3 2 1 0 0 1 2 3 4 5 . The 0 to 5 part shows you how it is recursively returning..

//turn mult(x,y,x) {return x*y*z} into a recursive function that takes any number of arguments
function mult(...args) {
	if(args.length <= 2){
		return args[0] * args[1];
	}
    return args[0] * mult(args.slice(1));       //remove the first value and pass it. This is not a PTC!
}
mult(10,3,4,5,5);            //more than 15 arguments in ie8 will break the browser


/* 8)Closure : A function remembers the variables around it even when that function is executed elsewhere. (lexical scope)
Basically, you wrap a state into a function, and pass that function around, later on when the function executes, you access that state again in full
Closures occur in JS, because JS has funcs as first class citizens and JS has lexical scope. This combo creates the phenominan called closures.*/
function foo(){
	var count = 0;
	return function(){
		return count++;
	};
}
var x = foo();           //after this line, foo() and count are not done and garbage collected, because there is a closure there that closes over the scope of foo...
x();    //0
x();    //1
x();    //2

function createCounter(){
	var count = 0;
	return {                                     //do not return the private variable, if you do then it is the same as above, giving access away
		increment : function(){ count += 1 },    //only these 2 funcs have access to count
	    print : function(){ line(count) },
	    printThis : function(){ line(this)}
	}
}
var myCounter = createCounter();                  //my counter is now an object. It has two funcs. Count DOES NOT belong to this object.
line(myCounter.print());                          //0
line(myCounter.printThis());                      //{3 funcs} .. no access to the interior count..
myCounter.increment();

var mc = createCounter();
line(myCounter.print());                          //1
line(mc.print());                                 //0
myCounter.count = 1000;                           // FAIL, there is no field called count! It will actually create a field and set it. And HOISTED.

function x() {
	setTimeout(() => console.log(y), 5000);
	const y = 10;
}
x();    //10 is printed out. By the time, the timeout finishes, the closure closed over undefined, byt it value changed to 10.

// Store away a data set once, and then keep access to it.
function heavyDuty () {
	const bigArray = new Array(7000).fill('blah');     //store a really big data set
	return function (index) {
		return bigArray[index];                          //this access func closes over that big data set
	}
}
var getValue = heavyDuty();
var y = getValue(15);
//So this way with closures, you can hide away data sets or even functions. (encapsulation).

for(var i=0;i<5;i++){
	setTimeout(function() {console.log(i)} ,2000);
}
//The above will print 5, 5 times! To make it print 0,1,2,3,4. Use let i = 0 OR -
for(var i=0;i<5;i++){
	(function(x){
		setTimeout(function() {console.log(x)} ,2000);   //you are just somehow trying to create function scope, for the closure to close on.
	})(i);
}

//Currying: I.e calling a function, one argument at a time. You are kind of locking down some arguments. This locked down func now becomes a new utility.
const mutliply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);  // a new utility function
//Partial application, only one arg is fixed, the rest are expected together (it is a type of currying)
const mutliply = (a,b,c) => a*b*c;
const partialMultiplyBy5 = mutliply.bind(null,5);  // you can now call partialMultiply(2,10) to get 100. i.e you just send it the rest of the args ALONE.
//Composition: multiple small tasks are combined to make one big task.
const compose = (f,g,t) => (data) => f(g(t(data)));  //you have built an assembly line
var finalvalue =  compose(Math.abs, Math.floor, Math.sqrt)(25);
// this kind of composition is what makes functional programming more scalable tha object oriented programming... fyi.
//Arity: the number of arguments a function takes. In functional programming, arity must be as low as possible.

//-----------------------------------------------------------------------------------------------------------------------------------------
//Array.map     Implement the array.map function, call it array.gap
Array.prototype.gap = function(gapFuncsArgumentFunction){
	var newArrayToreturn = [];
	for(i=0; i<this.length; i++){                                   //'this' is the Array calling this function
		newArrayToreturn[i] = gapFuncsArgumentFunction(this[i]);    //You need to execute the function the user has sent
	}
	return newArrayToreturn;                                        //the default array.map always returns a new array without changing the original array
}
var c = [10,20,30,40].gap(function(x){ return 3*x;});               //c=[30,60,90,120]

//Array.filter      Implement the array.filter function, call it array.gilter
Array.prototype.gilter = function(newGilterFuncsArgumentFunction){
	var newArrayToreturn = [];
	for(i=0; i<this.length; i++){
		if(newGilterFuncsArgumentFunction(this[i]) === true){
			newArrayToreturn.push(this[i]);                          //add the element to new array ONLY if it passes the condition.
		}
	}
	return newArrayToreturn;
}
var c = [10,21,30,40,51].gilter(function(x){ return x%2 === 0  });   //c=[10,30,40]

//Array.reduce   Implement the reduce function. Syntax: arr.reduce(callback[, initialValue])
Array.prototype.geduce = function(newGeduceFuncsArgumentFunction, newGeduceFuncsInitialValue){
	var reducedValue = newGeduceFuncsInitialValue || 0;                          //by default, the array.reduce uses the Arrays first value as the starter value.
	for(i=0; i<this.length; i++){
		reducedValue = newGeduceFuncsArgumentFunction(reducedValue, this[i]);
	}
	return reducedValue;
}
var t = [  {name:'name1',value:10}, {name:'name2',value:20}, {name:'name3',value:30}, {name:'name4',value:40}  ];
var c = t.geduce(function(accumilatedValue, arrayVal){ return accumilatedValue+arrayVal.value}, 100);       //c = 100+10+20+30+40 = 200

//Array.forEach    Implement the forEach loop. Call it fe
Array.prototype.fe = function (someFunc) {
    for (i=0; i<this.length; i++){
        someFunc(this[i], i);
    }
}
var c = [10,20,30,40].fe( (val,idx)=>console.log(idx+':'+val) );    //gives out 0:10 1:20 2:30 3:40

// Similarly, you can implement array.some(), array.every() etc.

//---------------------------------------------------------------------------------------------------------------------------------------------
/*Modules: Reuse code across apps. This a.k.a closure
Namespacing: Protect your variables from any global variables.*/
var ray = (function(){
	var private = 10;  //accessible only inside here, not outside
	var DEFAULTS = { //set a bunch of defaults for this namespace
		say:'hello',
		run:'normal'
	};
	return {
		speak: function(){ // this is a module
			var myArguments = arguments[0] || '' ;  //in JS this is called SHORT CIRCUIT evaluation
			var statement = myArguments.say || DEFAULTS.say;
			console.log(statement);
			return this;  //in your namespace, make sure each module return the calling object, then you can do CHAINING.
		},
		run: function(){ // module#2
			var myArguments = arguments[0] || '' ;
			var statement = myArguments.run || DEFAULTS.run;
			console.log(statement);
			return this;
		},

	};
})();
ray.speak( {say:'hello'} ); //ray is an object with one field (the speak function), ray is your namespace name.
//so now you can have all your helper functions under your own namespace 'ray'.
ray.speak().run().speak({say:'goodbye'}).run({speed:'fast'});  //will output - hello normal goodbye fast


//Partial Application: Given the three lines of code, implement the function partiallyApply()
function add(x,y){ return x+y}
var add5 = partiallyApply(add,5);
add5(2); // this outputs 7
//answer
function partiallyApply(usersFunction, otherArgument){
	return function(oneValue){
		return usersFunction(otherArgument,oneValue);
	}
}


/* closure question: define a function foo so that it produces a function which remembers only the first two arguments
that were passed to foo and always adds them together */
function foo(){
	var a1 = arguments[0];
	var a2 = arguments[1];
	return function goo(){
		returns a1 + a2;
	};
}
var x = foo(3,4);
x();  //7
x();  //7
x(10);  //7


//Combine all array functions to find average age of males, females.
var employees = [
    {name:'jon ', salary:'60000', age:'34', gender:'M' },
    {name:'mary ', salary:'160000', age:'24', gender:'F' },
    {name:'lisa ', salary:'65000', age:'74', gender:'F' },
    {name:'tyler ', salary:'90500', age:'14', gender:'M' },
    {name:'jake ', salary:'100000', age:'84', gender:'M' },
    {name:'andrew ', salary:'99000', age:'94', gender:'M' },
    {name:'emily ', salary:'6000', age:'64', gender:'F' },
    {name:'cathy ', salary:'50000', age:'54', gender:'F' },
];
var females = employees.filter(x => x.gender === 'F');
var totalFemaleAge = females.reduce( (acc,x)=>acc+Number(x.age), 0);
var averageFemaleAge = totalFemaleAge / females.length;
console.log(averageFemaleAge);


/*question #1:
Write two functions, each which return a different number when called */
function a(){  return 5;  }
function b(){  return 10; }

/*question #2 :
 Write an add() function that takes two numbers and adds them and returns the result. Call add() with the
results of your two functions from question#1 and print the result to the console. */
function add(x,y){ return x+y; }
console.log(add(a(),b()));

/*question #3 :
Write an add2() function that takes two functions instead of two numbers, and it calls those two functions
and then sends those values to add() just like you did in question#2 above */
function add2(fn1,fn2){  return add(fn1(),fn2()); }

/*question #4 :
Replace your two functions from (1) with a single function that takes a value and returns a function back,
where the returned function will return the value when it's called.
*/
function single(x){
	return function(){
		return x;
	};
}

/*question #5 :
Write addn(..) that can take an array of 2 or more functions, and using only add2(..), adds them together.
Try it with a loop. Try it without a loop (recursion). Try it with built-in array functional helpers (map/reduce).*/
function addn(...args){  //LOOP
	var total = 0;
	for(i = 0; i < args.length; i++){
	  total = add2(function(){return total;}, args[i]);
	}
	return total;
}
function addn (...args){ //RECURSION
	if(args.length == 2){
		return add2(args[0],args[1]);
	}
	return args[0]() + addn(...args.slice(1)); //removes the first element. SPREAD the array and send it, don't send just array[].
}
function addn(...args){ //REDUCE
	return args.slice(1)       //remove the first element and send it as the initial value in the reduce func! Brilliant!!
	.reduce(function(acc,current){
		return function(){   //this will the acc for the next round...
			return add2(acc, current);
		}
	},args[0])(); // VVIP you need to call the func
}

//You can also do
return args.reduce(func, foo(0))(); //let zero be the intial value

/*question #6 :
Start with an array of odd and even numbers (with some duplicates), and trim it down to only have
unique values.*/
//??

/*question #7 :
Filter your array to only have even numbers in it.*/
arr.filter(function(x){ x % 2 === 0; });

/*question #8 :
Map your values to functions, using (4), and pass the new list of functions to the `addn(..)`
from (5).*/
addn(arr.map(single));
