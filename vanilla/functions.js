// This covers these lynda courses
// js-functional-lite 
// js-functional-programming 
// js-functions 
// good-parts-of-js

/*Books to read - 
Javascript - the good parts by o'rielly
Eloquent javascript by marijn haverbeke
Podcast - Javascript jabber
Newsletter - javascriptweekly 
Structure and interpretation of computer programs - Gerald Jay Sussman, Hal Abelson
Instructors site - http://getify.me
LABjs - a dynamic script loader he wrote
grips - a templating engine
asynquence - flow control library for promises, controllers etc.
He is the head of curriculum of MakerSquare : Developer Engineered Training School (SFO,LA,Austin)
Author of youdontknowjs.com a 1100 page free book. 
*/

//remember typeof function === "function"!  

//decleration expression
function addition(a,b){
	var c = a + b; //all variables have local scope
	return c;
}
//definition expression (function literal)
var addition = function (a,b){   
	var c = a + b;
	return c;
};  //semicolon

/*All function have two variables - 'arguments' object and 'this' object.
/*arguments: Every function has this available to use.
It is an object. Only one property -  arg.length. No array method will work. You can't do arguments.pop(); etc.
Technically it is an array-like object. The keys of the object are 0,1,2,3 etc. */
var addition = function (){
	var sum =0; 
	for(i = 0; i < arguments.length; i++){
		sum += arguments[i];  //you are just accessing the property of an object. Not iterating an array. 
	}
	return sum;
}
addition(4,57,12,3,231);

/* return: You can return a value, object, function or nothing at all
//the return statement in a JS function is actually a function. You can send it arguments
It immedietly exits the function without executing anything beyond that point in the function*/
return
10; //never do this, JS will put a semicolon in the first line and return undefined.

/*in JS, functions are treated as FIRST CLASS citizens. Meaning you can assign a function to a variable
This gives you the ability to pass functions as varaibles to other functions, also a function can return a function - Amazing flexibility*/
var d = 5 + function(a,b){
	return a + b;
}(4,7);
/*Assigning functions DYNAMICALLY at run time
Set your function depending on the current context.
Useful when you pass functions to functions or return functions in functions */
const DEBUG_MODE_ENABLED = false;
var debug;
function printDebugMessage(stringHere){
	line(stringHere);
}
function doNothing() {}
if(DEBUG_MODE_ENABLED){
	debug = printDebugMessage;
} else { 
	debug = doNothing;
}
debug("Some debug message");

//higher order function: A function that takes a function as an argument (and or returns a function)
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

//Higher order function: A function that returns a function
function printMessageNTimes(n, message) { console.log(message); }
function getNthLetter(n, message){ console.log(message); }
function printTillN(n, message){ console.log(message); } 

function getSafeVersion(theF){
	return function(t,msg){  //return a function that takes two arguments (5,msg1)
		if(t !== null & typeof t === 'number' && msg !== null && typeof msg === 'string'){
			return theF(t, msg);  //return the theF function passing it t,msg because t,msg have passed the checks.
	    } //note you are not returing a function but you returning theF() by executing it.
	}
}

var printMessageNTimesSafe = getSafeVersion(printMessageNTimes);
var getNthLetterSafe = getSafeVersion(getNthLetter);
var printTillN = getSafeVersion(printTillN);

printMessageNTimesSafe(5,"msg1");  //will output msg1
getNthLetterSafe(5,"msg2"); //will output msg2
printTillN(5,"msg3"); //will output msg3
var d = printMessageNTimesSafe(9,'dasda'); // d is undefined as printMessageNTimes does not return anything.

/* Passing functions as arguments.
Instead of passing data to a function. You are passing an action
*/
function doIfElse(condition, funct1, funct2){
	if(condition){
		funct1();
	} else {
		funct2();
	}
}
doIfElse(x === 1, function(){line('x is one')}, function(){line('x is not one')} );
doIfElse(x > 1 && x < 10, function(){line('x is btwn 1 and 10')} , function(){line('done')} );
function callWith2Arguments(arg1,arg2,funct){
	funct(arg1,arg2);
}
callWith2Arguments(4,5,add);
callWith2Arguments(10,5,subtract);

// Returning functions
function giveMeAfunctionThatReturnsAFunction(){
	return function(){
		return function(){
			console.log("Function is here");
		}
	}
}
var abc = giveMeAfunctionThatReturnsAFunction;
var d = abc(); // this is now a function that returns - function(){console.log("Function is here")};
var e = d(); //this is now - function(){console.log("Function is here")}
e(); //this will have an output;
abc()()(); //only this will have an output

//Returning multiple functions
function return2Functions(){
	return {
		function1 : function (){ line('this is func1')} ,
		function2 : function(){ line('this is func2')}
	}
}
var d = return2Functions(); // d is an object of 2 funcs now
d.function1();
d.function2();

// four ways of invoking functions
// 1) as functions   addition(4,5);

// 2) as methods     calc.addition(4,5);
var calc = {
	status : "ready",
	addition : function (a,b){
		return (console.log(a+b), console.log(this), console.log(this.status), console.log(arguments));
	}
};
calc.addition(4,5);  //this will give 9, calc, "ready", [4,5]

// 3) as constructor   using the new keyword
var Dog = function() {   //this is an object, you now create an instance of the object using the new constructor
	var name, breed;
	return console.dir(this) //here 'this' points to the newly created object when used with 'new'
}
firstDog = new Dog;  //calling a function as a constructor. The new keyword creates a new object based on the original function
// firstDog.name does not exist for now
firstDog.name = "Rover"; // You are creating a field.
firstDog.breed = "dalmation";
//you can create a new object in JS using the new keyword. This is called constructor invocation.
//a constructor function creates a new object i.e functions themselves become constructors. Always name them with capital letter!!
var c = function(){};
var cc = new c(); // this returns an empty object!

// 4) call and apply methods  (Indirect function invocation)  func.call(), func.apply()
// You can set/control the value of 'this' and 'arguments' in the call
// Call passes a value and Apply passes an array
var speak = function(saywhat){
	console.log(this);       //object
	console.log(this.love);   //purr
	console.log(saywhat);    //say hello
}
speak.call({normal:'meow', love:'purr'} , "say hello") // now this = this object and not window
speak.apply({normal:'meow', love:'purr'} , ["say hello"] )  //samething with an array of arguments


/* Functional Programming
Keeps data and functions seperate, so your function does not sit inside the same object the data was sitting.
This way you can reuse your function across different objects/classes have different data fields..*/
function increaseAge(theObj){
	theObj.age += 1;
	return theObj;
} //you can use this func for any object that has the 'age' field. Don't need to instantiate any class and then call its age() function.



var a = function(){};      //defintion.
//remember for HOISITING, only var a; is moved to the top, therefore unlike normal functions, you cannot do a(); before
//defining it. a() must always be after the assignment statement a=func() in the code...!!

//Variable scope in JS is limited to the function scope.
//Scope chain: If variable does not exist in the current function, it looks up all its parent functions to find the variable
var outerVar = 10;
function myDog(){
	var name = "parent number one";
	function otherDogs(){
		console.log(name);  //this works, eventhough 'name' is not present in the current function
	}
	console.log(outerVar); //this works too.
	otherDogs();
}
console.log(name); //this fails as 'name' does not exist outside myDog()

//any variable declared without 'var' are accessible EVERYWHERE. They have global scope.

//HOISTING: Every variable is declared at the top of its function scope before the script is executed. They will be initialized later.
function myDog(){
	console.log("my name is " + dogName); //it outputs as - my name is undefined. NO syntax errors.
	var dogName = "doggo";
}
/*Even function definitions are moved up to the top. So it does not matter where you call your function.
Its better to code and move all your function definitions to the top and variable declarations to the top of each function, instead
of guessing how hoisting will work */










//self invocating function: This code won't run..
function addition(a,b){
	return (console.log(a+b) , console.log(this),  console.log(arguments));
}(3,4);   //it will be 7, window object, and [3,4]




// CLOSURE
/* closure: closure is when a function remembers the variables around it even when that function is executed elsewhere
That is when you pass a function somewhere deep, it still has access to its original vars. 
Basically, you wrap a state into a function, and pass that function around, later on when the function executes, 
you access that state again in full*/
function foo(){
	var count = 0;
	return function(){
		return count++;
	};
}
var x = foo();
//after the above line is executed, foo() and count are not done and garbage collected, because there is a closure there...
x();  //0
x();  //1
x();  //2 
//but this is not the functional programming way of doing it. Each time i call x() i will get a different result!
//An example of a "pure" closure function
function sumX(x){
	return function(y){
		return x + y;
	}
}
var add10 = sumX(10);
add10(13);  //23
add10(20);  //33

//There is no such thing called private variables in JS, you have to use closures and return functions to do that
const myCounter = {
	count : 0,
	increment : function(){ this.count += 1},
	print : function(){ line(this.count)}
}
line(myCounter.print()); //sending a function to a function. Suddenly console.log has access to count variable.
myCounter.increment(); 
line(myCounter.print());  //1
myCounter.count = 1000;   // this is bad! You should not have access to the variable inside...
line(myCounter.print());  //1000

//FIX this by converting it to a closure function instead of it being a bland object.
function createCounter(){
	var count = 0;
	return { //do not return the private variable, if you do then it is the same as above, giving access away
		increment : function(){ count += 1 },   //only these 2 funcs have access to count
	    print : function(){ line(count) },
	    printThis : function(){ line(this)}
	}
}
var myCounter = createCounter(); //my counter is now an object. It has two funcs. Count does not belong to this object.
line(myCounter.print());  //0
line(myCounter.printThis());   //{3 funcs} .. no access to the interior count..
myCounter.increment();
var mc = createCounter(); 
line(myCounter.print());  //1
line(myCounter.printThis());  //{3 funcs} .. no access to the interior count..
line(mc.print()); //0
line(mc.printThis());     //{3 funcs}.. no access to the interion count..
myCounter.count = 1000;   // FAIL, there is no field called count! It will actually create a field and set it. And HOISTED.

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



//anonymous closure
var iKnow = function junk(){
	console.log("definition expression or function expression");
};
junk(); //junk is undefined, it will error out. 
iKnow(); //iKnow() will execute the function now. Even if you return 10, iKnow is not 10, it is a func() that returns 10 !!!
var iKnow = function junk(){
	console.log("function expression");
}(); //immedietly outputs in the console.

function junk(){
	console.log("self invoking function");
}();     //this is wrong syntax

(function (){
	console.log('anonymous closure'); //because any variable here is closed off / out of scope outside.
}
)();


//Recursive functions: Functions that call themselves
//Implement a loop as a function
function whileLoop(x){
	console.log(x);
	if (x > 0) whileLoop(x-1);
	console.log(x);
}
whileLoop(5); //will output 5 4 3 2 1 0 0 1 2 3 4 5 . The 0 to 5 part shows you how it is recursively returning..

/* recursion: a function that keeps calling itself until a condition is met (base case is reached)
Remember: you don't have unlimited memory and unlimited cpu
When one function calls another function, it allocates a new stack frame for it and once execution is done, parent
function deletes the stack frame. IE used to allow a total of only 13 stack frames... (i.e stack trace including libs
can't be more than 13 functions deep). With recursion call stack can get huge quick! therefore people don't use it much.
In some languages, compilers convert the recursive func into a huge iterative loop and then run it.. */

/*JS has a concept: Proper Tail Call : If the last line in func A is "return funcB()", then JS will not create a new
stack frame for funcB but actually remove funcA's stackframe and use it for funcB. In this way if my recursive func
uses only Proper Tail Calls, then in theory JS will use only 1 stack frame for it's entire execution - constant space
O(1). Thus recusion can now be used in practice if you use PTC. PTCO is PTCoptimization*/

//turn mult() into a recursive function that takes any number of arguments
function mult(x,y,z){
	return x * Y * z ;
}
//answer
function mult(...args) {
	if(args.length <= 2){
		return args[0] * args[1];
	}
    return args[0] * mult(args.slice(1));  //remove the first value and pass it // this is not a PTC!!!!!
}
mult(10,3,4,5,5); //more than 15 arguments in ie8 will break the browser


/*CALLBACKS: A function that you pass as an argument to an asynchronous function. When the async function
has finished running, it calls the function we passed it. Often times the async function passes its result
as a argument to the function we give it. */

setTimeout( function(){ }, 3000);  // This is an async function, so it does not stop the next line from executing. 
console.log("immediate next line"); 

var fs = require('fs');
fs.readFile('message.txt','utf-8',function(err,res){   //nodeJs read-file, async function send result to your function
	if(err) throw err;
	console.log(res);
});

/*Expanding objects through prototype
JS is prototypal inheritance language: Meaning you can base the functionality of one object based on another object.
Basically every object in JS is based on another object. You just have to set one object's prototype to another's.
to add another function to the above */
var speak = function (saywhat){
	console.log(saywhat);
}
Dog.prototype.speak = speak; //you can now add this speak method to any other connstructor function - Cat, Bear, Lion etc.

//The prototype of any function is the Object object. So every function is made of the Object contructor.
//With the prototype object you can expand the functionality of anything in JS. Function, Objects etc.

// 1)pure functions
/*Side Effects of a function: If a function does not just return one value, but also changes some global vars or the state
of the program , then it has side effects, and this function is not a 'pure' function.
 A pure function is a function that has no side-effects. It operates entirely on it's own variables, it's own state, 
 or any of the things passed into it. So, the arguments that are passed in and any of it's own, it operates entirely 
 on that and does not change anything. A pure function does not mean it doesn't access outside state, it means 
 it doesn't change the outside state */
function bar (x,y){   //a pure function
	var z;
	foo(x);
	return [y,z];

	function foo(x){
		y++;
		z = x * y;
	}
}
bar(5,20) // [21,105]
bar(5,20) // [21,105] no side-effects.. same results. 

//the impure version is this - 
function foo (x){
	y++;
	z = x * y;
}
var y = 5, z;
foo(20);
z;   //this gives 120
foo(20);
z;   //now this gives 140 . Each time foo() is called it gives inconsitent results..

//an example of an impure function: It is changing the array that is outside its environment. 
//arrays, functions, objects are assigned by reference and passed by reference always (F-BONUS)
//null, undefined, string, boolean, number are assigned by value and passed by value always (a copy is passed)
function doubleThem(list){
	for(var i = 0; i < list.length; i++){
		list[i] = list[i] * 2;
	}
}
var arr = [3,4,5];
doubleThem(arr);  //[6,8,10]
//How to make it a pure function? Here - 
function doubleThem(list){
	var newList = []
	for(var i = 0; i < list.length; i++){
		newList[i] = list[i] * 2;
	}
	return newList;
}
var arr = [3,4,5];
var arr2 = doubleThem(arr);  //[6,8,10], arr is untouched

// 2) composition: taking the output of one function and sending it as the input to the next function
function sum (x,y){
	return x + y;
}
function mult (x,y){
	return x * y;
}
function compose2 (fn1, fn2){
	return function comp(){
		var args = [].slice.call(arguments);
		return fn2(
			fn1(args.shift(),args.shift()),args.shift()
		);
	}
}
var multAndSum = compose2(mult, sum);
multAndSum(3,4,5);  // 3*4 + 5

// 3) immutability: the const keyword gives you an immutable reference or binding not an immutable value 
var x = 2;  x++ // allowed

const y = 6; y++ //not allowed , because y points to a number 6, you can't now point it to 7

const z = [5,6,7];
z = 6; //not allowed, z points to an array object, you can't point it to 6 now
z[0] = 10; //allowed, z still points to the same array object.

const w = Object.freeze([4,5,6]);  //a built in function that sets constant for each element in the array. At the top level
w = 10; //not allowed, const makes sure w is pointing to this array
w[0] = 10; //not allowed, freeze make sure 4,5,6 are always inside this array. 
//this freeze function does not work for an array within array. The inner most array can be mutable as long it is part of
//the outer array
















//JS Mapping: Implement the array.map function: call it array.gap
var t = [10,20,30,40];
var b = t.map(function(x){ return 2*x;});  //outputs [20,40,60,80]
console.log(b);

Array.prototype.gap = function(gapFuncsArgumentFunction){
	var newArrayToreturn = [];
	for(i=0; i<this.length; i++){  //'this' is the Array calling this function
		newArrayToreturn[i] = gapFuncsArgumentFunction(this[i]); //You need to execute the function the user has sent
	}
	return newArrayToreturn; //the default array.map always returns a new array without changing the original array
}
var c = t.gap(function(x){ return 3*x;});  //outputs [30,60,90,120]
console.log(c);

//JS Filter: Implement the filter array.filter function. call it array.gilter
var t = [10,21,30,40,51];
var b = t.filter(function(x){ return x%2 === 0 });  //outputs [10,30,40]
console.log(b);

Array.prototype.gilter = function(newGilterFuncsArgumentFunction){  //a function is sent as an argument
	var newArrayToreturn = [];
	for(i=0; i<this.length; i++){
		if(newGilterFuncsArgumentFunction(this[i]) === true){  //execute the user's function here
			newArrayToreturn.push(this[i]);   //add the element to new array only if it passes the condition. 
		}
	}
	return newArrayToreturn;
}
var c = t.gilter(function(x){ return x%2 === 0  });  //outputs [10,30,40]
console.log(c);

//JS Some,Every: In the same way, implement array.some, array.every etc.

//JS Reduce: Implement the reduce function. Syntax: arr.reduce(callback[, initialValue])
var t = [
	{name: 'name1', value: 10},
	{name: 'name2', value: 20},
	{name: 'name3', value: 30},
	{name: 'name4', value: 40}
];
var b = t.reduce(function(accumilatedValue, x){ return accumilatedValue+x.value}, 100);
console.log(b);  //outputs 100+10+20+30+40 = 200

Array.prototype.geduce = function(newGeduceFuncsArgumentFunction, newGeduceFuncsInitialValue){
	var reducedValue = newGeduceFuncsInitialValue || 0; //by default the array.reduce uses the Arrays first value as the starter value.
	for(i=0; i<this.length; i++){
		reducedValue = newGeduceFuncsArgumentFunction(reducedValue, this[i]);  //reducedvalue = func(100,10), reducedvalue = func(110,20) etc
	}
	return reducedValue;
}
var c = t.geduce(function(accumilatedValue, arrayVal){ return accumilatedValue+arrayVal.value}, 100);
console.log(c);  //outputs 100+10+20+30+40 = 200

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

var females = employees.filter(function(x){return x.gender === 'F'});
var totalFemaleAge = females.reduce(function(acc,x){ return acc+Number(x.age)},0);
var averageFemaleAge = totalFemaleAge / females.length;
console.log(averageFemaleAge);

//list iteration: forEach - functional programmers will never use it! Because it could have side effects
function consoleLog(v){ console.log(v); }
function iterate(arr,theFunc){
	for (i = 0; i < arr.length; i++){
		theFunc(arr[i]);
	}
}
iterate([10,20,30],consoleLog); //this won't work if consoleLog is changing the array elements too...
//JS has forEach for this
[10,20,30].forEach(consoleLog);


// ---------------------------------------------------------------------------------------------------------------------------------------------------------
/*question #1:
Write two functions, each which return a different number when called */
function a(){
	return 5;
}
function b(){
	return 10;
}

/*question #2 :
 Write an add() function that takes two numbers and adds them and returns the result. Call add() with the 
results of your two functions from question#1 and print the result to the console. */
function add(x,y){
	return x + y;
}
console.log(add(a(),b()));

/*question #3 :
Write an add2() function that takes two functions instead of two numbers, and it calls those two functions
and then sends those values to add() just like you did in question#2 above */
function add2(fn1,fn2){
	return add(fn1(),fn2());
}

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
Write an addn(..) that can take an array of 2 or more functions, and using only add2(..), adds them 
together. Try it with a loop. Try it without a loop (recursion). Try it with built-in array functional 
helpers (map/reduce).*/
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
/* Challenge: Add social media icons(links) to an HTML page. The link will be given to you in an object. */
var socialMedia = {
    facebook : 'http://facebook.com/viewsource',
    twitter: 'http://twitter.com/planetoftheweb',
    flickr: 'http://flickr.com/planetotheweb',
    youtube: 'http://youtube.com/planetoftheweb'
  };
  //answer-
  var socialList = function() {
    var  output = '<ul>', 
      myList = document.querySelectorAll('.socialmediaicons'); //find the place where all these icons/links must be loaded
  
    for (var key in arguments[0]) {
      output+= '<li><a href="' + socialMedia[key] + '">' +
        '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
        '</a></li>';
    }
    output+= '</ul>';
    
    for (var i = myList.length - 1; i >= 0; i--) {
      myList[i].innerHTML = output;
    };
  }(socialMedia); //self invoking function
  
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
