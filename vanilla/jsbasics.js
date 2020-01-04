// Notes from  https://github.com/getify/You-Dont-Know-JS
// First Edition of the book

promises 2829
#ktek - further reading
/*
No person's opinion, no framework's assumptions, and no project's deadline should be the excuse for why you never learn and deeply understand JavaScript.
it's about taking seriously the task of learning all parts of JavaScript, not just some subset of the language, and not just whatever minimal amount you need to get your job done at work.
Serious developers put in the effort to learn all of the language they primarily write in.

Out there funcs-
Number(x)  (coerce x to be a number)
y.toFixed(2)   (y should be a number)
typeof
Boolean()
Number()
String()
instanceof
JSON.parse();
JSON.stringify();
Array.isArray();
*/

/* Index
1: Up and going
	1.1:Into Programming
	1.2:Into Javascript
2. Scope and Closures
	2.1:What is scope
	2.2:Lexical Scope
	2.3:Function scope and block scope
	2.4:Hoisting
	2.5:Scope closure
3. this and Object Prototypes
	3.1:"this" or that
	3.2:"this" all makes sense now
	3.3:Objects
	3.4:Mixing Class objects
	3.5:prototypes
	3.6:Behaviour Delegation
4. Types and Grammar
	4.1:Types
	4.2:Values
	4.3:Natives
	4.4:Coercion
	4.5:Grammer
	4.6:Mixed environment javascript
5. Aysnc & Performance
	5.1:Asynchrony- Now and later
	5.2:Callbacks
	5.3:Promises
	5.4:Generators
	5.5:Program Performance
	5.6:Benchmarking and tuning
6. ES6 & beyond
	6.1:ES? Now and Future
	6.2:Syntax
	6.3:Organisation
	6.4:Aysnc Flow Control
	6.5:Collections
	6.6:API Additions

/*
CHAPTER 1: UP AND GOING
1.1)Into Programming
statement  ;
variable   a,b  (programs need to track a value as it changes over the course of the program) (assign a value to a symbolic container)
literal   5,'rt'
operator

that's it. At a high level every line of code is the above 4.

expressions (An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators
a = b * 2; this has 4 expressions: a,b,b*2,a=b*2

b * 2; this is an expression statement (it's really not doing anything)
alert(a); another expression statement

The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code. (its not exactly an interpreted language)

operators (assignment, math, compound assignment, object property access, equality, comparison, logical)

primitive types - boolean, number, string

coercion
implicit coercion (avoid it, == triggers it, + sign for string concats, console.log(), truthy/falsy in conditional blocks, etc)
explicit coercion (there are different funcs for these)

comments (they must explain why/how, not what)

JS is a weakly typed language (dymanic typing). Variables can hold values of any type without any type enforcement.

declare constants as var TAX_RATE or const TAX_RATE  (uppercase, underscores)

Blocks { }  (series of statements) (a block statement does not need a semicolon ; to conclude it)

Conditionals -
if (boolean)   (boolean means truthy or falsy, here also there is implicit coercion)
if (boolean) else
if (boolean) else if (boolean) else if (boolean) else
switch {case break case break case break default }

Loops (repeating a set of actions until a certain condition fails )
iteration of a loop
while (boolean) { }
do { } while (boolean);
for (initialization, conditional, updation) { }
Uses break; to get out of a loop

functions - named piece of code.
function (parameters/arguments) { }
the return statement is optional

Lexical scope (or scope) - its all about accessability of variables. JS has functions scope.
a variable name has to be unique within a scope
a scope can be nested inside another scope - code in the innermost scope can access the outer ones. not the other way around.

1.2)Into Javascript
JS has typed values, not typed variables
These are the 7 built-in types: boolean, number, string, null, undefined, object, symbol

'typeof xyz' means what is the type of the value in var xyz, it is not asking for the type of the variable xyz
'typeof xyz' will ONLY return one of the above 6. (apart from 'function')
one bug: typeof null is object (it should have been null)

in place of undefined, you can also use "void 0", example: (x !== void 0)  (void is a keyword)

Object - a compound type
property access - dot notation or bracket notation
array and function should be considered as subtypes of objects

array - an object where the properties are numerically indexed postions. They also have a default 'length' property
typeof arr is 'object'
In theory you can do arr['desi'] = 'berserk', but use arrays only for 'numeric' properties and objects for 'named' properties.

functions - an object (subtype).
'typeof function' gives 'function'
function foo(){ }, you can set foo.test='hello', it is an object after all. (but avoid it)

ALL the built-in types have properties and methods.
x = 'helllo';
x.length, x.toUpperCase() etc
They all are wrapped in wrapper objects like Number, String, Boolean whose prototypes have all the properties and methods defined.
JS automatically "boxes" the value to its object wrapper counterpart (hidden under the hood).

EQUALITY
Falsy/Truthy: You get these two ONLY when a non-boolean value is coerced (implicity or explicitly) into a boolean value.
Only these values are 'falsy' in JS, everything else is 'truthy':
>false
>0, -0, NaN
>""
>null, undefined

This is useful when you do if(x){ }  it coerces x, if x is not in the above list, it is truthy.


== checks for value equality with coercion allowed
=== checks for value equality with coercion not allowed
So you must know what coerces to what. Also, you must know which one the JS engine is coercing, the LHS or the RHS?!
JS engine algo for "==" :  http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
If Type(x) is the same as Type(y), then
	If Type(x) is Undefined, return true.        (means undefined==undefined)
	If Type(x) is Null, return true.             (means null==null)
	If Type(x) is Number, then
			If x or/and y is NaN, return false.     (so no number is equal to NaN, even NaN itself)
			If x is the same Number value as y, return true. Also, 0 and -0 are the same value. (i.e 0 === 0)
			Else return false.
	If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return false.
	If Type(x) is Boolean, return true if x and y are both true or both false. Otherwise, return false.
	If Type(x) is Object, return true if x and y refer to the same object. Otherwise, return false.
	If Type(x) is Symbol, return false.
If Type(x) is NOT the same as Type(y), then
	null and undefined are equal
	If one is string and other is a number, return ToNumber(theString) == theNumber
	If one is a boolean, return ToNumber(theBoolean) == theOther
	If one is an object and the other is string/number, return ToPrimitive(object) == number/string
	Else return false.

For objects, it checks if they reference the same location. For arrays, they convert to string. (ToPrimitive(x))
So [1,2,3] == "1,2,3", but a=[1,2,3] != b=[1,2,3] (they don't refer to the same thing)

INEQUALITY < > <= >= (relational comparison)
Kinda works with the same rules as ==, but not exactly.

Variable
name must not start with digit, can only contain [a-zA-Z0-9_$].
same rules applies to object 'property' names too
Reserved words cannot be used as variable names but can be used as property names.   var o = {else :10}; o.else=10; is allowed

hoisting: when a var declaration is conceptually "moved" to the top of its enclosing scope
When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes.
If you try to access a variable's value in a scope where it's not available, you'll get a ReferenceError thrown.

There is implicit auto-global variable declaration when you omit the keyword var

Let - works in the same way as var. Scoping is at a block level, there is no hoisitng for these variables!

switch - if there is no break for a case, there will be 'fall through'
conditional operator  boolean ? statement : statement ;

"use strict"
put this inside any function or on top of the file.
It tightens the rules for certain behaviors.
It makes your code generally more optimizable by the engine

Functions are values: This is unique to JS.
function foo() { }
foo is basically just a variable in the outer enclosing scope that's given a reference to the function being declared.
The function itself is a value, just like 42 or [1,2,3] would be.
So you can pass functions around, because they are just values.
var foo = function() { }  This function expression is anonymous (it is assigned to the foo variable)
var x = function bar() { } This function expression is named bar, also, a reference to is assigned to x

IIFE - Immediately Invoked Function Expressions
( function iife(){ } )();
These are often good places to declare variables that won't affect the surrounding code outside the IIFE. (private scope hidden from outer global)
var x = iife();  your iife can also return a value.

Closure - a way to "remember" and continue to access a function's scope (its variables) even once the function has finished running.
function makeAdder(x) {
	// parameter `x` is an inner variable, the inner function add() uses x, so it has a 'closure' over it
	function add(y) {
		return y + x;
	};
	return add;
}

Module Pattern- define private implementation details (variables, functions) that are hidden from the outside world, as well as a public API that is accessible from the outside.
function User(){
	var username, password;

	function doLogin(user,pw) {
		username = user;
		password = pw;
        // do the rest of the login work
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI;     //returning a new object
}
var x = User();    //x is now an instance, an object {login: func}
x.login( "fred", "12Battery34!" );

User() is just a function, not a class to be instantiated. No need to say var y = new User()
Executing User() creates an instance of the User module -- a whole new scope is created, and thus a whole
new copy of each of these inner variables/functions. We assign this instance to x.
If we run User() again, we'd get a new instance entirely separate from fred.

THIS
function foo() {
	console.log( this.bar );
}
var bar = "global";
var obj1 = {
	bar: "obj1",
	foo: foo
};
var obj2 = {
	bar: "obj2"
};
foo();				// "global"   (it uses the global window object in non-strict mode, and 'this' is undefined in strict mode)
obj1.foo();			// "obj1"
foo.call(obj2);		// "obj2"
new foo();			// undefined (it creates a brand new empty object)

Prototype
When you reference a property on an object, if that property doesn't exist, JavaScript will automatically use that
object's internal prototype reference to find another object to look for the property on.
You could think of this almost as a fallback if the property is missing. The internal prototype reference linkage
from one object to its fallback happens at the time the object is created.
var foo = {a:42};
var bar = Object.create(foo);
bar.b = "hello world";  // here 'b' belongs to bar, but
bar.a;  //42    'a' actually belongs to bar's prototype - foo, but now even bar has a reference (access) to it. If foo.a changes, then even bar.a changes automatically. (same reference)

Polyfilling/Shim
A polyfill is a piece of code that provides the functionality that you, the developer, expect the browser to provide natively.
Taking the definition of a newer feature and producing a piece of code that's equivalent to the behavior (functionally)
You should be really careful in implementing a polyfill, to make sure you are adhering to the specification as strictly as possible.
if (!Number.isNaN) {   //only if the browser does'nt natively already have it
	Number.isNaN = function isNaN(x) {
		return x !== x;
	};
}
NaN is the only thing in the whole language for which NaN !== NaN.

Transpiling  (transforming + compiling)
There's no way to polyfill new syntax that has been added to the language. The new syntax would throw an error in the old JS engine as unrecognized/invalid.
You write code in new syntax, but you deploy old syntax code (after transpiling it)
Your build process would be Lint, transpile and then minify.
function foo(a = 2) {      //New ES6 syntax
	console.log( a );
}
function foo() {     //transpiled code
	var a = arguments[0] !== (void 0) ? arguments[0] : 2;
	console.log( a );
}
Dont' wait for browsers to update, start using the latest JS and features.
Two good transpilers: babelJS, Traceur.

Non-JavaScript JavaScript - DOM api, alert(), console.x() etc.
var el = document.getElementById( "foo" );
The document element is not part of the JS spec. (it is a c/c++ interface part of the browser)
alert() and console.log() are again provide by the browser.
Your browser provides such mechanisms and hooks them up to the developer tools.

---------------------------------------------------------------------------------------------------------------
Chapter 2 : SCOPE AND CLOSURES
Do what you love. Maybe it was something when you were young/school.
Unfortunately, now you are called a professional and getting paid for it, but you are still doing what you wanted to do.

2.1)What is scope?
State: the ability to store values and pull values out of variables in a program.
Where do variables live? how does our program find them when it needs them?

Scope: the set of rules that govern how the Engine can lookup a variable by its identifier name and find it,
either in the current Scope, or in any of the Nested Scopes it is contained within.

Compilation: Source code to executable. 3 main steps for any language compiler
>Tokenisation/Lexing: breaking up a string of characters into meaningful (to the language) chunks, called tokens. 'var','a','=','2',';'
>Parsing: taking a stream (array) of tokens and turning it into a tree of nested elements, a tree which represents the grammatical structure of the program.
This tree is called an "AST" (Abstract Syntax Tree). Like a scope will be a branch, with the parent node being all the vars declared for this scope.
>Code generation: AST to executable code. this depends on the language and the platform/os/browser. Its about reserving memory, cpu etc.

Ofcourse there is a lot more going on: optimisation, collapes redundant element, lazy compile, hot re-compile etc.

JS engines don't get a lot of time to compile (like other languages do). Within micro seconds it must finish and start executing.

Three key characters:
>Engine: responsible for start-to-finish compilation and execution of our JavaScript program. The PM.
>Compiler: handles all the dirty work of tokenisation, parsing and code-generation. The engineer.
>Scope: collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code. The security team.

In any case, the compiler see the source code first. And during execution all 3 are talking to each other.

var a = 2;
Compiler sees 'a', asks Scope to see if a variable a already exists for that particular scope collection. If it already exists, Compiler ignores this declaration and moves on.
	Otherwise, Compiler asks Scope to declare a new variable called a for that scope collection. Compiler then makes executable code.
Engine then sees 'a' during execution, ask Scope if there is a variable called 'a' accessible in the current scope collection.
If so, Engine uses that variable. If not, Engine looks elsewhere
If Engine eventually finds a variable, it assigns the value 2 to it. If not, Engine will raise its hand and yell out an error!

Whenever the engine sees a variable, it either does a LHS or RHS lookup/reference. LHS is for assignment/storage, RHS is for retreival of value.
console.log(a);  It does RHS lookup, goes and finds a
a = 2;        It does LHS lookup, to find it and store 2 in it
foo();        It does RHS lookup for the value in foo and then executes it.
goo(a){ };    It does LHS lookup for a, so that it can receive a value

a function declaration: funcion foo() { }, the compiler does a var foo, foo = func() during code generation.
So when the engine is executing it is not doing an assignment of foo = func()

Example:
function foo(a) {  LHS for a
	var b = a;     RHS for a, LHS for b
	return a + b;  RHS for a, RHS for b
}
var c = foo(2);    LHS for C, RHS for foo

var a = 2;
During compilation, compiler splits this to var a, a=2. Scope is told that a is now declared.
So during execution, the engine keeps talking to scope to ask about variables and their whereabouts.

If the engine does not find a particular var for RHS, it throws a ReferenceError
For LHS, if it is not strict mode, the global scope creates the var and you are safe,
if it is strict mode, LHS will throw ReferenceError

ReferenceError is Scope resolution-failure related
TypeError comes only for RHS, it implies that Scope resolution was successful, but that there was an illegal/impossible action attempted against the value. Like null() or undefined.abc.xyz

2.2)Lexical Scope
JS uses Lexical Scope (as opposed to dynamic scope used by other languages)
lexing: (or tokenising) the first traditional phase of a standard language compiler, examines a string of
source code characters and assigns semantic meaning to the tokens as a result of some stateful parsing.

Scope bubbles: When a function is created, the arguments along with every line in the function is one scope bubble.
Like this, bubbles lie inside other bubbles.
Lookup: Inside a particular bubble, the JS engine tries to find the variables it needs and uses them.
	ONLY if it does'nt find it, it then checks the outer bubble. (if it is not in your current floor, take the elevator up the building to the next floor, and keep looking until you reach the terrace (global scope))
Shadowing: The same identifier name can be specified at multiple layers of nested scope (the inner identifier "shadows" the outer identifier)
Regardless of shadowing, scope look-up always starts at the innermost scope and works its way outwards.

The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and thus predict how they will be looked-up during execution.
The lexical scope of a function is determined by where it is declared.
The key characteristic of lexical scope is that it is defined at author-time, when the code is written (assuming you don't cheat with eval()).

First class identifier: a, b, c
Second classs identifes: a.foo , b.goo, c.too
Third class and so on.
Lexical scope look-up process only applies to first-class identifiers. Beyond that, it is object scope/properties.

Cheating lexical scope: eval()/'with'  ->'with' is now deprecated
eval() - takes a string as an argument, and treats the contents of the string as code.
it allows you to modify the lexical scope environment by cheating and pretending that author-time (aka, lexical) code was there all along.
it creates new lexical scope at runtime.
function foo(str,a) {
	eval(str);           //cheating!
	console.log(a,b);
}
var b = 2;
foo("var b = 3;", 1);
This will print 3,1 and not 2,1
The eval() modifies the existing lexical scope of foo(). So, eval(..) can at runtime modify an author-time lexical scope

If you do "use strict", then declarations made inside of the eval() do not actually modify the enclosing scope.
The use-cases for dynamically generating code inside your program are incredibly rare, as the performance degradations are almost never worth the capability.

Why is cheating lexical scope bad?
JS Engine has a number of performance optimizations that it performs during the compilation phase.
Some of these boil down to being able to essentially statically analyze the code as it lexes, and pre-determine where
all the variable and function declarations are, so that it takes less effort to resolve identifiers during execution.
If it finds eval() in the source code, then it skips optimizations regarding scope look up for the whole code. (because the Engine has to assume pessimistically that such optimizations will be invalid anyway)
Your code will almost certainly tend to run slower simply by the fact that you include an eval()/'with'

internally, scope is kind of like an object with properties for each of the available identifiers. But the scope "object" is not accessible to JavaScript code. It's an inner part of the Engine's implementation.

2.3)Function scope and block scope
Principle of least privilege PoLP (least authority): in the design of software, such as the API for a module/object, you should expose only what is minimally necessary, and "hide" everything else.
So, take any arbitrary section of code you've written, and wrap a function declaration around it, which in effect "hides" the code.
Another benefit of "hiding" variables and functions inside a scope is to avoid unintended collision between two different identifiers with the same name but different intended usages.
In the global space, multiple libraries loaded into your program can quite easily collide with each other. So you have to hide your variables/functions.
Create a single object, and everything is inside it-
var MyReallyCoolLibrary = {
	awesome: "stuff",
	doSomething: function() {  },
	doAnotherThing: function() {  }
};

Function decleration: function foo() { }  The statement starts with the word function, the name foo is bound in the global scope (next outer level of scope).
In JS you declare variables with either (var,let,const,function,class)

Function expression: (function foo(){ })  The statement does not start with word function, the name foo is now bound only inside of its own function.  (this is not an AFE)
var foo = function bar() { }; this is also FE. Here also, bar is accessible only inside func bar!! In the outer scope, there is no var called bar.   (this is not an AFE)
Function expressions can also omit the name, but function declerations cannot omit the name.
Function declerations are hoisted but FE are not hoisted.

Anonymous FE
setTimeout( function(){ }, 1000 );  -> this is a Anonymous Function Expression.
>AFE have no name that displays in stack trace
>You can't call an AFE, if you are trying to some reccursion or unbind it from an event handler
The best practice is to always name your function expressions:
setTimeout( function timeoutHandler(){ }, 1000 ); timeoutHandler is accessible only from inside itself

IIFE
(function foo(){ })(optionalArgs); Adding a (); to the end of the function expression
These can also have names (if you want to use it inside it)

In js you can do:
undefined = true; This basically makes undefined true! Which wreaks havoc in all of the code.
So in a function, just name a variable called "undefined", never give it a value. So this var will truly be undefined.
undefined = true;
(function IIFE( undefined ){      //the fake undefined var whose value is undefined
    var a;                        // a is truly undefined
	if (a === undefined) {        // this is true now, you are not using the global undefined which is corrupted.
		console.log( "Undefined is safe here!" );
	}
})();

Another way to write an IIFE (a way followed by the universal module definition UMD project)
(function IIFE(f){ f(x)}) (function g(y){ do something})       y is passed to x (but why do you even need both?!)
So g is the actual function that is run and passed as an argument to the IIFE.

Block Scope
It's already there, hidden in the language. Since ES3.
The 'catch' block in a try-catch has block scope
try { undefined(); }        // illegal operation to force an exception!
catch (err) {
	var b = 35;
	console.log(err);       // works! err is a TypeError
	err = 5;
}
console.log(err);           // ReferenceError: err not found
console.log(b);             //35. b is fine, only err is unique and belongs to the catch block.

LET  A block scoped decleration unlike var
We can create an arbitrary block for let to bind to by simply including a { .. } pair anywhere a statement is valid
if (foo) {
	{   // <-- explicit block
		let bar = foo * 2;
		bar = something(bar);
		console.log(bar);
	}
}

Declarations made with let will not hoist to the entire scope of the block. The compiler does not move them.

block scoping helps save memory. A variable is free as soon as the block is done. i.e garbage collection is done to reclaim memory.
function process(data) { }
var bigData = { ... };
process(bigData);
someButton.addEventListener( "click", function x(t){ }, false );

So here the function x closes over the current scope. So eventhough, process() finishes using bigData,
bigData will still remain in memory until the click handler is called. (closure)
Just create an explicit block to cover the middle two lines to optimize this.

Let is best in a for loop. for (let i=0; i<10; i++) { }
Not only does it bind the i to the for-loop body, but in fact, it re-binds it to each iteration of the loop,
making sure to re-assign the value from the end of the previous loop iteration.

CONST  This is also a block scoped decleration.
You can reassign to another value i.e Its value/reference cannot change.

internally, scope is kind of like an object with properties for each of the available identifiers.
But the scope "object" is not accessible to JavaScript code. It's an inner part of the Engine's implementation.

2.4)Hoisting
a = 2;
var a;
console.log(a);       //2

console.log(a);    //undefined (not ReferenceError)
var a = 2;

var a = 2;
The first statement, var a, the declaration, is processed during the compilation phase. The scope is informed that 'a' belongs to this scope.
The second statement, a=2, the assignment, is left in place for the execution phase. (the var part is not even there in the executable, only a=2 is there)
Only the declarations themselves are hoisted, while any assignments or other executable logic are left in place. Obviously.
Hoisting is done, for each scope. i.e the scope is informed that these variables exist for these blocks. The JS Engine, during execution will ask for these (LHS or RHS references)
So, variable decleration is done during compilation and not run time! (HOISTING). During run time, it is essentially a NO OP!
var baz = 2; 
typeof baz;    //'number'
var baz;       //this line is ignored, it is a NO OP.

foo();
function foo(){ }
Here the var decleration foo along with its value i.e the func code is hoisted.

Function declerations are hoisted but function expressions are not.
foo();                         // not ReferenceError, but TypeError! (illegal operation foo does not have a value yet) (the var foo part is hoisted)
bar();                        // ReferenceError, bar exists only inside func bar, it does not exist anywhere else in any other scope.
var foo = function bar() { };

the above should actually be read as -
var foo;
foo();
bar();
foo = function(){ var bar = self; }

Function declerations are hoisted before variable declerations!
foo();    //what does foo give?
var foo;
function foo() {console.log(1);}
foo = function() {console.log(2);};

the above should be read as -
function foo() {console.log(1)}
foo();     //1
foo = function() {console.log(2)};
Notice that var foo is actually ignored and not done. First function foo is declared. So var foo is redundant for the compiler.

When the same identifier is used in multiple declerations, the latest one is used.
foo();  // what does foo give?
function foo() {console.log(1);}
var foo = function() {console.log(2);};
function foo() {console.log(3);}

the above should be read as -
function foo() {console.log(1);}
function foo() {console.log(3);}
foo();
foo = function() {console.log(2);};
again, var foo is ignored as func decl are hoisted above var decl

Try to avoid function declerations inside conditional blocks (if,else,while etc). Even if they are declared here, they are hoisted outside and up.
foo();               // what does this give?
var a = true;
if (a) {  function foo() {console.log("a");}  }
else   {  function foo() {console.log("b");}  }

the above should be read as -
function foo() {console.log( "a" );}
function foo() {console.log( "b" );}
var a;
foo();       // so it gives 'b'! a is undefined at the time foo() is actually called.
a = true;

So all in all, there are 5 ways to declare a variable
var x
function x(){}               (every other way is a function expression, not a decleration)
let x
const x
class x
Only the first two are hoisted in their scope, func go above the var.

TLDR: all declarations in a scope, regardless of where they appear, are processed first before the code itself is executed.

2.5)Scope closure
elusive, mythological part of the language: closure.
understanding closure can seem like a special nirvana that one must strive and sacrifice to attain.
closure is all around you in JavaScript, you just have to recognize and embrace it.
Closures happen as a result of writing code that relies on lexical scope. They just happen. You do not even really have to intentionally create closures to take advantage of them.

closure: Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
function foo() {
	var a = 2;
	function bar() {console.log(a);}
	return bar;
}
var baz = foo();
baz();     // this gives a=2
Here bar is executed outside it's declared lexical scope. But bar does have full access to it's lexical scope.
Once foo() finished, it's scope is NOT garbage collected, because bar is returned and bar requires foo's scope.
The scope of bar, which include the scope of foo, was kept alive, to be used at a later time.
Bar has access to that scope, it references that scope, and this is called closure.
Closure lets the function continue to access the lexical scope it was defined in at author-time.

In JS as you can pass functions around, because a function is just a value. Hence closures are very common.
Be it timers, event handlers, Ajax requests, cross-window messaging, web workers, or any of the other asynchronous (or synchronous!) tasks,
when you pass in a callback function definition, there is closure going on.

Closure & For Loop -
Linters often complain when you put functions inside of loops, because the mistakes of not understanding closure are so common among developers.

for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log(i);
	}, 0 );
}
Even with the timeout at 0 seconds, you will get five outputs of "6"
all those function callbacks would still run strictly after the completion of the loop.
the problem is: All the callback close over the global i.  the i that the log() is getting is a reference to the value in global i

does this fix it?
for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		var j = i;
		console.log(j);   //j is local to this timer function, but j and i still refer to the same value, the value in global i.
	}, 0 );
}
It does NOT. When the callbacks actually runs, j is set to the global i of 6, each time.

this fixes it -
for (var i=1; i<=5; i++) {
	(function IIFE(){
		var j = i;
		setTimeout( function timer(){
			console.log(j);      //j is a reference to the i value of i in this iteration, because when this IIFE executed and closed out, i had a specific value.
		}, 0 );
	})();
}
Now each call back is closing over a value of J that is unique to the IIFE that executes in that iteration.
or - (function (j){
		setTimeout( function timer(){
			console.log(j);
		}, 0 );
	})(i);
The use of an IIFE inside each iteration created a new scope for each iteration, which gave our timeout function
callbacks the opportunity to close over a new scope for each iteration, one which had a variable with the
right per-iteration value in it for us to access.

Use LET
for (var i=1; i<=5; i++) {
	let j = i;       // block-scope for closure. The whole point of the IIFE above was to create a new scope.
	setTimeout( function timer(){console.log(j);}, 1000 );
}
Actually, LET has a special behaviour for declarations in the head of the for loop.
The variable will be declared not just once for the loop, but each iteration, while carrying over the value from the end of the previous iteration. (if it does not carry over the value, the loop won't event work)

for (let i=1; i<=5; i++) {
	setTimeout( function timer(){console.log(i);}, 1000 );  // So this works.
}

Module pattern
function JqueryInit(){
	var x = "cool";
	var y = [1, 2, 3];

	function jq1(s){ use x, do something }

	function jq2(s){ use x, use y, do something, call jq1}

	return {         // or do [var ret={object}; return ret;] You can use ret inside your module for other things.
		$ : jq2,
		jquery: jq2
	}
}
var jqueryVar = jqueryInit();
jqueryVar.$('#main');

Here jq2 is the public API that will access all private vars and private funcs.
Since you are returning an object that has references to functions jq1, jq2. We know that, the scope of functions jq1 and jq2 include the scope of JqueryInit().
So JqueryInit() is not going to be garbage collected, it's scope is going to remain, until there is no reference to any function defined inside JqueryInit.
You can either directly return a function (that is defined inside here) or return an object with references to many functions. In both these cases, the enclosing function's scope will not be garbage collected.

Two rules to be a module:
>An enclosing function that must be invoked atleast once outside.
>The func must return an inner func or object that has closure over the private scope (and can modify it if needed)

With the above module func, you can instantiate and have multiple instances of the module.
To create a singleton, define the WHOLE module inside an IIFE and run it, it will return an object.
var singleInstance = (function ModuleJquery(){  })();       // Now you can truly have only one instance of the module
singleInstance.$('#main');

Modern Modules in ES6 (#ktek read the book, i don't understand import and export)

Dynamic Scope VS Lexical Scope
function foo() { console.log(a) }
function bar() {
	var a = 3;
	foo();
}
var a = 2;
bar();
lexical scope: prints 2, because a is accessed from global scope
dynamic scope: prints 3, because, the engine looks up the stack trace (call-site), the nearest a is inside bar(), which is 3

JS has only lexical scope (concern itself with how and where functions and scopes are declared). Only "this" has semi-dynamic scope.
and not dynamic scope (where the functions are called from, where the scope chain is based on the call-stack, not the nesting of scopes in code)

lexical scope is write-time, whereas dynamic scope (and 'this') is at runtime
Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from (call-site).

Equivalent of this in ES5? a Polyfill?
{
	let a = 2;
	console.log(a);     gives 2
}
console.log(a);    gives ReferenceError

this is the polyfill -
try {
	throw undefined
} catch(a){
	a = 2;
	console.log(a);    gives 2
	var k = 22;
}
console.log(a);    gives ReferenceError
console.log(k);    //22
The catch block (ES3) always had block scope. (i.eonly for the arguement in the catch() part)

---------------------------------------------------------------------------------------------------------------------
Chapter 3: this and Object Prototypes

3.1)"this" or that?
Do you really need to use and worry about "this"?
function identify() {
	return this.name.toUpperCase();
}
var me = {name:"Kyle"};
var you = {name:"Reader"};
identify.call(me);     // KYLE
identify.call(you);   // READER

Instead of relying on "this", you can just pass an object directly to the identify func and use the object there.. but ...
The "this" mechanism provides a more elegant way of implicitly "passing along" an object reference, leading to cleaner API design and easier re-use.
In more complex code, passing context around as an explicit parameter is often messier than passing around a "this" context.
You must learn, use and rely on "this"

"this" is not the function object itself ("self" is)
function foo(num) {
	console.log(self);
	console.log("foo:"+num);
	this.count++;       //trying to keep count of func calls
}
foo.count = 0;          //adding a property, initialize count to zero.
In a for loop - foo();
console.log(foo.count);   //this will always be zero

So here "this" is not the function foo, and you are not incrementing foo.count, you are trying to do window.count(=undefined)+1, it will be NaN.
If you want to really count functions invocations, put foo.count++, because inside the function, you can access the function object itself.
To fix the original code above, you can call, instead of foo(), foo.call(foo,i); Now in the func, "this" is the foo function object, and you are incrementing foo.count

"this" binding has nothing to do with where a function is declared (not lexical scope),
It has dynamic scope - "this" is actually a binding that is made when a function is invoked, and what it references to is determined entirely by the call-site where the function is called.

When a function is invoked, an execution context is created. It contains info: where the function was called from (the call-stack), how the function was invoked, what parameters were passed, etc.
One of the properties of this record is the "this" reference which will be used for the duration of that function's execution.

call-site: the location in code where a function is called (not where it's declared)
call-stack: the stack of functions that have been called to get us to the current moment in execution
The call-site we care about is in the invocation before the currently executing function.

3.2)"this" all makes sense now
4 RULES of THIS
>Default binding: Standalone Function Invocation.
This is the catch all rule, when none of the next 3 rules apply
Making a func call from global scope -
foo();
So inside foo, "this" will be the window object for non-strict mode, and undefined for strict mode. (i.e "use strict"; is the first line inside foo)
the strict mode state of the "call-site" of foo() is irrelevant. It has to be there inside the func.

>Implicit Binding: Call site has a context object
obj.foo();  Here obj is "this"
Only the bottom/last level of an object property reference chain matters to the call-site
obj1.obj2.foo();   Here only obj2 is "this"

To be able to do this, obj must have the function foo defined in it. Or else you can't call obj.foo();  (TypeError)
So for implicit binding, you have to edit the object to include a reference to the function.

What is the output of -
function foo() {console.log(this.a);}
var obj = {
	a: 2,
	foo: foo
};
var bar = obj.foo;    // function reference
var a = "global";
bar();                //2 or global?
foo();                //global
obj.foo();			  //2
Here the bar appears to be a reference to obj.foo, in fact, it's really just another reference to the actual function value in foo, so the output will be global.
Also the call-site makes it default binding.

What is the output of -
function foo() {console.log(this.a);}
function doFoo(fn) {  fn(); }
var obj = {
	a: 2,
	foo: foo
};
var a = "global";
doFoo( obj.foo );
Here the call site is inside the func, doFoo, "this" is undefined, so it defaults to window. Output is global and not 2.
Parameter passing is just an implicit assignment, and since we're passing a function, it's an implicit reference. fn is just another reference to the value in the variable foo.

>Explicit Binding:   call/apply/bind
foo.call(obj);
foo.apply(obj);
If you pass a boolean/number/string in call/apply, then JS will "box" them or wrap them to their object form New Boolean(), New String(), New Number()

hard binding -
function bind(fn, obj) {
	return function (args){
	 return fn.apply(obj, ars)
	};
}
var g = bind(foo, people);
Now whenever you call g, it will call foo where only people is the "this" object.
g is exactly the same same as foo, the only difference is, for it, "this" is people.

ES5 provides this with Function.prototype.bind - this returns a new function. On any function object you can call .bind()
var g = foo.bind(obj);      //For g alone, you are explicitly binding foo to obj.
And in ES6, g.name will give you "bound foo"  (new property is set)

Function.prototype.newBind = function(obj){   // ~ pollyfill for bind()
	var funcObj = this;            //xyzFunc.bind() means xyzFunc is 'this'
	return function(args){
		funcObj.call(obj,args);
	}
}

>NEW binding
In JS, constructors are just functions that happen to be called with the new operator in front of them.
There are no such thing as "constructor functions", but rather "construction calls" of functions.
They are not attached to classes, nor are they instantiating a class.
They're just regular functions that are, in essence, hijacked by the use of new in their invocation.

When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:
>a brand new object is created (aka, constructed) out of thin air
>the object is [[Prototype]]-linked to that particular function object
>the object is set as the "this" binding for that function call
>unless the function explicitly returns its own alternate object or has some other return value, the function will not return undefined like normal functions do, but it will return the newly constructed object.

function foo(a) {
	this.a = a;
}
var bar = new foo(2);  //returns {a:2}

Knowing the above 4 rules, all you need to do is find the call-site and inspect it to see which rule applies.
Order of Precedence: New, Explicit, Implicit, Default

function foo(something) {this.a = something;}
var obj1 = {
	foo: foo
};
var obj2 = {};

obj1.foo( 2 );                 // implicit call
console.log( obj1.a );         // 2

obj1.foo.call( obj2, 3 );      //here explicit takes over the implicit
console.log( obj2.a );         // 3

var bar = new obj1.foo( 4 );   //here new takes over implicit, so this returns a new object, since func foo does not return anything.
console.log( obj1.a );         // 2
console.log( bar.a );          // 4

var car = foo.bind( obj1 );    //car is basically func foo bound to obj1
car( 2 );
console.log( obj1.a );         // 2

var baz = new car( 3 );        // here, new takes over explicit, car is still func foo, but since new is there, func foo creates a new object and returns it { a:3 }
console.log( obj1.a );         // 2  unaffected and this was set before
console.log( baz.a );          // 3

Nuances to the 4 rules
> foo.call(null/undefined) or foo.apply(null/undefined) or foo.bind(null/undefined)
In all these cases, it resorts to default binding and does not throw an error. (so the window object is used, i.e there will be side-effects)

A good use of this is, if the func foo does'nt even care about or use "this" in its definition
function foo (a,b) { console.log(a+b) }
foo.apply(null,[2,3]);  //gives 5
var b = foo.bind(null,1);
b(4)    // gives 5
b(10)   /gives 11  (it has now become like a +1 function)
i.e you can ALSO use bind to lock down some arguments (and not just the THIS object)

Call/Apply/Bind all 3 need a "this" binder as the first parameter, so you can give null or undefined and make use of the other advantages of call/apply/bind.
Just makes sure that the function never uses the "this" in its definition... for anything.

>If you are not sure about func foo (whether it has "this" in it's definition or not), Just call it with an empty object, that way you are sure that the window object is not affected in any way (sideeffects)
foo.apply({},[2,3]);
foo.apply(Object.create(null), [2,3]);  //here it is still { }, but without the delegation to Object.prototype, so in a sense it is more empty than just { }
Use variable name as ø (alt+o) for these kinds of empty objects

>Indirect References
function foo() {console.log(this.a);}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo();             // 3
(p.foo = o.foo)();   //this gives 2! not 3, not 4
The "result value" of the assignment expression p.foo = o.foo is just a reference to just the underlying function object foo.
p.foo();             //4

>Softening the bind function (#ktek come back and read this later)

>ES6 arrow function. It does not use any of the above 4 rules, for it "this" is the "this" of its enclosing function definition (completely 100% lexical scope)
function foo() {
	return (a) => {
		// 'this' here is lexically adopted from foo(). being a closure, it closes on that "this" value
		console.log( this.a );
	};
}
var obj1 = {a:2};
var obj2 = {a:3};
var bar = foo.call(obj1);      // so now it returns the arrow function which has closed on "this=obj1"  (lexical scope for "this", not dynamic scope)
bar(obj2);    //gives 2 (not obj2's 3)

The lexical binding of an arrow-function cannot be overridden (even with new!!!)

function foo() {
	var self = this;
	setTimeout( function(){console.log(this.a);}, 1000 );    //in this anonymous function, 'this' is just window
}
foo.call({a:2});      // 2

function foo() {
	var self = this;
	setTimeout( function(){console.log(self.a);}, 1000 );    //here the function closes on the variable self
}
foo.call({a:2});      // 2

function foo() {
	setTimeout( () => {console.log(this.a);},  1000);    //static scope, arrow function closes on the "this" object of foo. (lexical scope)
}
foo.call({a:2});      // 2

function g(){
	setTimeout( function(){console.log(this.a);}, 1000 );   //this is accessing window.a, dynamic scope as it is not arrow function =>, the callsite is in setTimeout() which is in global
}
g.call({a:5});

setTimeout( function(){console.log(this.a);}, 1000 );       //this is accessing window.a, dynamic scope as it is not arrow function, the callsite is in setTimeout() which is in global

Final question -
function g(){
	k.call(this, function t(x){console.log(this.a);});
}
function k(p){
	p();                  //call site
}
g.call({a:10});

This gives undefined.
So in func g, this={a:10}, In func k, this={a:10}, but at the call site, you just call plain old p(); so it is going to use window.a
You need to call p.call(this), then only you will get an output of 10.

To summarise: Determining the "this" binding (to an object) for an executing function requires finding the direct call-site of that function.
Once examined, four rules can be applied to the call-site, in this order of precedence: New, Explicit, Implicit, Default.

3.3)Objects
Literal syntax: { a: 4 };
Constructor syntax: var b = new Object(); b.x = 5;  (very rarely people use the constructor syntax)

JS spec has 6 primary types: BNS, null, undefined, object. All 6 are distinct.
typeof null incorrectly gives object, this is a bug in JS.

Object subtypes are: normal objects, function (callable object), arrays.

Built-in Objects:
String, Number, Boolean
Object
Function, Array
Date
Regexp
Error
These may appear like objects, but actually they are just built in global function objects that can be used as constructors
These built-in native objects are the building blocks of the language. They are used implicity EVERYwhere. (via boxing)
Remember: objects, arrays, functions, regexpes are all objects, regardless if they are defined by literal form or constructor form.
The constructed form does offer, in some cases, more options in creation than the literal form counterpart. (use constructor form only in these cases)

var str = "This is the primitive literal string";
typeof str;						    // "string"
str instanceof String;	            // false

var strObj = new String('this is the object sub-type String');
typeof strObj;				// "object"
strObj instanceof String;	        // true

Whenever you do str.length, the JS engine coerces it to the String object.
The same with 5643.43.toFixed(3); (Number & Boolean)

Boolean,String,Number,Object,Function,Array,Regexp all have literal definition syntax: true,'yes',54,{},function(){},[],//
Date can only be defined by using the constructor (new Date())
And in the 6 primitives, null and undefined don't have any wrapper objects.

Error objects are rarely created explicitly in code, but usually created automatically when exceptions are thrown.
construct them using new Error(..) (but very rare use cases)

Property Access: Two ways-
property access: obj.a
key access: obj["a"] or obj[x]  where x is variable with value='a'

Property names are ALWAYS strings. Even arrays use strings like "0","1","2" etc
var a = { }
obj[a] = 'bar';  //this mean obj["[object Object]"] is 'bar'

var a = 'bar';
var obj = {
	a : 'baz'      //dynamic decleration of property if it is ES6
}
ES5: this is obj.a='baz'
ES6: this is obj["bar"]='baz'    for es6 a is 'bar'

For declerations of properties: only ES6 allows dynamic decleration of property name like the above, ES5 does not allow it.
For access of properties: only key access can be dynamic, property access is never dynamic. Meaning obj.a mean obj["a"].

Methods: Functions inside objects are not methods. Only in some cases, where inside the function there is a "this", and then depending
on the call site at run time, this "this" could mean that the function does belong to the object. The function's relationship to the object is indirect at best.
Technically, functions never "belong" to objects
Every time you access a property on an object, that is a property access, regardless of the type of value you get back. (number, function, object etc)
A function becomes a method, not at definition time, but during run-time just for that invocation, depending on how it's called at its call-site (this is also a bit of a stretch)
If anything Method is just another name for the Function in JS.

function foo() {console.log("foo");}
var obj = {someFoo:foo};
var someFoo = foo;
In the above, the three variables foo, obj.someFoo, someFoo are all the SAME and are just seperate references to the same function object foo.
It does'nt mean foo is a method of obj
If you do someFoo.count=10, then even foo.count and obj.someFoo.count are both updated to 10.

Arrays-
var arr = [10, 'bar', 'baz'];
arr.test = 20;
arr.length; // it is still 10. Length only counts the number of numeric properties! "0","5","10" etc.
arr["3"] = 20;  Only now the length changes to 4.

You can have infinitely deep objects in JS.
var arr = [5,10];
var obj = { c:10, b:arr};
arr.push(obj);
Now arr has obj in it. Obj has arr in it. So you can do: arr[3].b is reference to arr itself! INFINITE LOOP

That's why JS does not have an API to copy objects. because how do you copy such a thing? It is infinite
Only JSON safe objects can be copied
var newObj = JSON.parse(JSON.stringify(obj))

Object.assign(destination, source1, source2, sourceX); //this returns destination object with all the 'enumberable' properties of all the sources.
var newObj = Object.assign( { }, obj1, obj2);
newObj is now { a:5, b:6, c:7 }

ES5 introduced property descriptors: value, writable, enumerable, configurable.
var myObject = { a: 2 };
Object.getOwnPropertyDescriptor( myObject, "a" );
{
	value: 2,
	writable: true,
	enumerable: true,
	configurable: true
}
Everytime you create a new property, these 4 are set, the defaults are true.
use Object.defineProperty(); to add new properties or modify an exisiting property (only if it's descriptor configurale is true)
Object.defineProperty( obj, "a", {
	value: 2,
	writable: true,
	configurable: true,
	enumerable: true
} );

Writable: when false, you cannot overwrite it. In strict mode it will give typeError, in non-strict, it silently fails. Example: obj.a = 10; This is not allowed.
Configurable: As long as it is true, you can modify the property descriptors using Object.defineProperty(), Once you change it to false, there is NO way back. You will always get typeError even regardless of strict mode.
  	nuanced exception:even when config is false, you can change writable to false without error, but you cannot change writable to true ever.
  	When configurable is false, you can't even do: delete obj.a (it silently fails)
  	btw delete does not free up memory immediately like in c/c++ it only removes the object property immediately (value is garbage collected later)
Enumerable: Should this property turn up in object-property enumerations or not (for..in)

Immutable Objects: In JS you can only create shallow immutability. Affect only the object and its direct property characteristics.
If an object has a reference to another object (array, object, function, etc), the contents of that object are not affected, and remain mutable.
>Via property descriptors you can create a constant
	Object.defineProperty( myObject, "FAVORITE_NUMBER", {
		value: 42,
		writable: false,
		configurable: false
	} );  // Now this property's value cannot be changed, even the property itself cannot be deleted.
>Object.preventExtensions(obj) Do not allow any new properties.
    strict mode: typeError, non-strict mode: silent fail  (when you try to add obj.b=10)
>Object.seal(obj)
	this calls Object.preventExtensions() and changes all the property descriptors to configurable:false.
	So you can't add/delete any properties or property descriptors, you can only modify property values at best.
>Object.freeze(obj)
	this call Object.seal(obj) and changes all property descriptors to writable:false
	So you can't add/delete any properties or property descriptors, you can't modify property values too.
because all of the above are shallow, you can call freeze() and then recursively iterate over all the object's references and freeze() them too

[[Get]] operation belongs to all objects. obj.a/obj['a'] means obj[[Get]](a); If it doesn't find 'a' in obj, it looksup [[Prototype]] chain
[[Put]] operation is naunced.
Getters & Setters
ES5 introduced a new way to set and get properties. This is not at an object level, but at per-property level.
For each property: you can either have 4 property descriptors, or 2 property descriptors and 2 property accessors (get and set)
i.e when a property has an accessor (get or set or both), in either case, then 'writable' and 'value' are invalid/ignored, only 'enumerable' and 'configurable' are valid data descriptors for the property
var myObject = {
	get a() {return 2;}    //a is now a property and it has a getter
};
myObject.a = 3;   //this is ignored, 'writable' and 'value' are invalid for a
myObject.a;       // 2

var myObject = {
	get a() { return this.x; },
	set a(val) { this.x = val * 2; }
};
myObject.a = 2;  //calls the setter and x is now 4.
myObject.a; // 4

Existence: How do you distinguish if the property exists in an object
var myObject = {  a: 2 };
("a" in myObject);				 // true   The 'in' operator will check to see if the property is in the object, or if it exists at any higher level of the [[Prototype]] chain object traversal
("b" in myObject);				 // false
("4" in myArray);				 // false if the array has only <=4 elements (0,1,2,3)
myObject.hasOwnProperty( "a" );	 // true  checks to see if only myObject has the property or not, and will not consult the [[Prototype]] chain
myObject.hasOwnProperty( "b" );	 // false

If an object is created via Object.create(null), it does not have a link to prototype, so use Object.prototype.hasOwnProperty.call(myObject,"a")
All other normally created objects have all of the above functions.

Enumeration: If enumerable is true, then use that property.
for (var k in myObject) {
	console.log( k, myObject[k] );     //only enumerable properties 'k' (look in all its parents too)
}
Note: for arrays, even some unwanted properties are marked as 'enumberable:true', so use normal 'for' loops for arrays
myObject.propertyIsEnumerable("a"); // true or false depending on the enumerable property descriptor of a

Object.keys(obj) returns an array of all enumerable properties
Object.getOwnPropertyNames(obj) returns an array of all properties, enumerable or not.
Both of these only inspect direct properties! they do not go up the [[Prototype]] chain
There is no built-in way in JS to get ALL the properties (even by looking up the prototype chain)

Array Iteration from ES5-
arr.forEach(function(x,i,a,t){ x is the value, i is index, a is arr, this object binder }){}
will iterate over all values in the array, and ignores if the callback returns any values.

arr.every(function (x,i,a,t){ function that returns boolean })   This returns Boolean
Every element for the array must be truthy for the callback, if one of them is falsy, it returns immediately

arr.some(function (x,i,a,t){ function that returns boolean })   This returns Boolean
Atleast one element for the array must be true for the callback, if one of them is true, it returns immediately
These special return values inside every(..) and some(..) act somewhat like a break statement inside a normal for loop, in that they stop the iteration early before it reaches the end.

Note: the order of iteration over an object's properties is not guaranteed and may vary between different JS engines. It can access the properties (even for array) in ANY order.

ES6: this is for arrays and for objects that have custom iterators
for (var v of myArray) {
	console.log( v );  //directly access the values (not the property names like for..in) (i.e only enumberable properties)
}
arrays have a built-in iterator
var it = arr[Symbol.iterator]();  //Gives you an obj that has a func that returns the iterator object
You'll always want to reference such special properties by Symbol name reference instead of by the special value it may hold
it.next(); // { value:1, done:false } -> this is a standard iterator object's result
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { done:true }

Define your own iterator for an object -
Object.defineProperty( myObject, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function() {
		var o = this;
		var idx = 0;
		var ks = Object.keys( o );  //meaning only enumerable properties that solely belong to this object and not it's parents.
		return {
			next: function() {    //by lexical scope, this func is closing over o,idx,ks.
				return {
					value: o[ks[idx++]],
					done: (idx > ks.length)
				};
			}
		};
	}
} );
Now use var it = myObject[Symbol.iterator]();
or for (var v of myObject) { }
You can even declare it as myObject[Symbol.iterator]= function(){ } . The reason we used define() was to make the iterator non-enumerable.

3.4)Mixing Class objects
Procedural programming pattern: code which only consists of procedures (aka, functions) calling other functions, without any higher abstractions
Class Design Pattern: Like Java.
C,C++, PHP give you the option of class design and procedural style

Class: a certain form of code organization and architecture -- data intrinsically has behaviour associated with it -
	a way of modeling real world problem domains in our software.
	Encapsulate the data and the behavior together. a neatly collected packaging of both the character data and the functionality we can perform on it.
	Class is just a blue-print of all its instances. You never work with the class, you only work with the instances.
	Classes will have a constructor function (same name as class) that creates an object and returns it. This is what is called an instance.
		Example: new Car('hyundai');  returns an instance of a Hyundai Car
Polymorphism: idea that a general behavior from a parent class can be overridden in a child class to give it more specifics.
    a parent class and a child class share the same method name for a certain behavior, so that the child overrides the parent (differentially)
	Relative polymorphism: the child class in it's new defintion of an inherited func, first calls the parent class's func and then does its own thing. (using 'super' in func def)
	This is there in JS! (the idea that any method can reference another method (of the same or different name) at a higher level of the inheritance hierarchy)
	Put another way, the definition for the method xyz() polymorphs (changes) depending on which class (level of inheritance) you are referencing an instance of.
Inheritance: we define Car, we indicate that it "inherits" (or "extends") the base definition from Vehicle. The definition of Car is said to specialize the general Vehicle definition.
	The child class contains an INITIAL copy of the behavior from the parent, but can then override any inherited behavior and even define new behavior
	There is no 'linking' between the parent and child. The child is just a COPY of the parent. Class inheritance implies "copies". So when you use super() it is just accessing within the same class, what is copied (inherited), it is not linking and going up to the parent, there is no link.
	So further down the line if the parent changes, the child will not be affected (i think)
	Only child classes 'relatively reference' their parent class. Child instances do not do this to parent instances.
Abstract class: A parent class that you would never instantiate. You make child classes of these and then instantiate those.
	JS does not have multiple inheritance at all. (we are lucky)

JS does NOT have classes. (provides seemingly class-like syntax, but JS engine works differently)

Mixins: JS version of inheritance. Meaning how JS does a copy of the parent to give you a child. (child object that is)
There are NO classes in JS, you only have objects. And you can't really make copies of objects. The references of A and B's properties will be the same!

var Vehicle = {
	engines: 1,
	ignition: function() {console.log("Turning on my engine");},
	drive: function() {
		this.ignition();
		console.log("Steering and moving forward!");
	}
}
function mixin(sourceObj, targetObj){
// Mix the source object into the target object (only where allowed). Mix the parent into the child object. (only if the child does not have that property)
	for(var k in sourceObj){
		if (!(k in targetObj)){   //only if it is not already there
			targetObj[k] = sourceObj[k];
		}
	}
	return targetObj
}
var Car = {
	wheels: 4,
	drive: function() {
		Vehicle.drive.call( this );
		console.log( "Rolling on all " + this.wheels + " wheels!" );
	}
}
Car = mixin(parent, Car);
So car is actually -  {
	wheels: 4,
	engines: 1,
	ignition: function() {console.log("Turning on my engine");}, // the RHS here is a reference to vehicle.ignition()! Func defintion code is not being copied over here!
	drive: function() {
		Vehicle.drive.call( this );   //bind() to ensure that drive() is executed in the context of the Car object. We essentially "borrow" the parent function and call it in the context of child.
		console.log( "Rolling on all " + this.wheels + " wheels!" );
	}
}
Technically, functions are not actually duplicated, but rather references to the functions are copied.
So, Car now has a property called ignition, which is a copied reference to the ignition() function,
as well as a property called engines with the copied value of 1 from Vehicle.

The line Vehicle.drive.call(this) is called "explicit pseudo polymorphism". You need to do this in JS because there is no such thing called "class".
In languages that have classes, they take care of the binding.  EPP is what makes classes in JS complex. It leads to ugly and brittle syntax, harder to understand and maintain code!

Remember, the parent and child share their references to the array objects, function objects, and other objects etc! These are NOT COPIES in JS.
JavaScript functions can't really be duplicated (in a standard, reliable way), so what you end up with instead is a duplicated reference to the same shared function object.
In general, faking classes in JS often sets more landmines for future coding than solving present real problems.

3.5)prototypes
Objects in JavaScript have an internal property, denoted in the specification as [[Prototype]], which is simply a reference to another object.
Almost all objects are given a non-null value for this property, at the time of their creation.
Think of [[Prototype]] like the [[Get/Put]] operations.. here you are looking up the protype chain.
the [[Prototype]] mechanism is an internal link that exists on one object which references some other object.

The [[Get]] operation of an object to access a property, uses this [[Prototype]] link.
var obj1 = { a:2 };
var obj2 = Object.create(obj1);   //obj2 is now [[Prototype]] linked to obj1
obj2.a; // it gives 2!
Even if obj1 did'nt have the property 'a', obj1's [[Prototype]] chain is again consulted and followed. This process continues until either a matching property name is found, or the [[Prototype]] chain ends.
If no matching property is ever found by the end of the chain, the return result from the [[Get]] operation is undefined

This [[Prototype]] linkage is (primarily) exercised when a property/method reference is made against the first object, and no such property/method exists. In that case, the [[Prototype]] linkage tells
the engine to look for the property/method on the linked-to object. In turn, if that object cannot fulfill the look-up, its [[Prototype]] is followed, and so on. This series of links between objects forms what is called the "prototype chain".

Same applies for 'for..in'. It looks up any property that is enumerable in the object's entire prototype chain!
var obj1 = { a:2 };
var obj2 = Object.create(obj1);
for (x in obj2) {  } // the property 'a' will come here

Even 'in' operator works the same.
("a" in obj2);   This gives true

So, the [[Prototype]] chain is consulted, one link at a time, when you perform property look-ups in various fashions. The look-up stops once the property is found or the chain ends.

Object.prototype
This 'object' is the top of the prototype chain. This built-in object includes a variety of common utilities used all over JS, because all normal objects are DESCENDANTS of this one.
.toString() .valueOf() .hasOwnProperty() .isPrototypeOf() : all of these utilities belong to this object

obj1.foo = "bar"
If foo already exists in obj1, then it just sets a new value.
If foo does not already exist in obj1, then the entire prototype chain is first looked up, if it is not there, this property is added to obj1
If foo already exists higher up in the prototype chain, then this is called "shadowing" the property, and If the foo higher up in the chain
	>has writable:true, then a new property called foo is added to obj1
	>has writable:false, then error is thrown in strict mode or silent fail in non-strict mode. The presence of a read-only (writeable=false) property prevents a property of the same name being implicitly created (shadowed) at a lower level of a [[Prototype]] chain
	>is a setter, then the setter will be called, no new property will be be added to obj1
Don't assume that assignment of a property (= sign meaning [[Put]] operation) will always result in a shadow if the prop already exists higher up.
If you really want a shadow property in obj1 in all cases, then use Object.defineProperty()  (strange loophole in JS language)

Shadowing with methods leads to ugly explicit pseudo-polymorphism, shadowing is more complicated and nuanced than it's worth, so you should try to avoid it if possible.
The [[Get]] operation always gives you the property that is lowest in the chain

var obj1 = { a: 2 };
var obj2 = Object.create(obj1);
obj1.a;   // 2
obj2.a;   // 2
obj1.hasOwnProperty("a");   // true
obj2.hasOwnProperty("a");   // false
obj2.a++; // oops, implicit shadowing! obj2.a = obj2.a + 1, here in the RHS, [[GET]] gets the value of obj1.a (2), adds 1 and now assigns a new shadow property in obj2 called "a" (same thing even if you just did obj2.a = 10)
obj1.a; // 2
obj2.a; // 3

Classes do not exist in JS. Object can be created directly, without a class at all.

All functions by default get a public, non-enumerable property on them called prototype, which points at an otherwise arbitrary object. (weird JS syntax)
function Foo() {  }
Foo.prototype;   This is an object (the name prototype is just an arbitrary property name, dont read too much in to it)
Note: If you use the built-in .bind(..) utility to make a hard-bound function, the function created will not have a .prototype property. Example: function foo(){}.bind(obj);

So, each object created via new Foo() will end up [[Prototype]]-linked to this "Foo dot prototype" object.
var a = new Foo();
Object.getPrototypeOf(a) === Foo.prototype;   // true

In JavaScript, we don't make fresh new copies from one object to another (a class to its instance, or a parent class to its child class).
We just make complicated links between existing objects.
This mechanism is often called "prototypal inheritance". (often found in dynamic scripting). It is not what "classical inheritance" is at all (class, constructor, instance, polymorphism, etc).
Its like calling an an apple, a 'red orange'. It should not have been called inheritance at all.
"Inheritance" implies a copy operation, and JavaScript doesn't copy object properties. Instead, JS creates a link between two objects, where one object can essentially delegate property/function access to another object.
"Delegation" is a much more accurate term for JavaScript's object-linking mechanism, because these relationships are not copies but delegation links.
Since, the [[Prototype]] mechanism looks up the chain to find properties, it might seem like Magic when certain properties actually work. This is just how inheritance is.
While these JavaScript mechanisms can seem to resemble "class instantiation" and "class inheritance" from traditional class-oriented languages, the key distinction is that in JavaScript, no copies are made. Rather, objects end up linked to each other via an internal [[Prototype]] chain.

function foo() { }   (immediately object foo, object foo.prototype and foo.prototype.constructor are created)
foo.prototype.constructor === foo; // true (public non-enumerable property called constructor, it is a reference back to the function code)
var a = new foo();      //god knows why this is being called constructor? there is no class first of all. (not actually instantiating a class as constructors do in traditional class-oriented languages.)
a.constructor === foo; // true  (a does not have a property called constructor, so it goes to it's parent - foo.prototype and gets the value of foo.prototype.constructor)
JS developers also give the function name a captial letter to pretend as if it is a class Foo.

In JS, a "constructor" is ANY function called with the new keyword in front of it. Functions aren't constructors, but function calls are "constructor calls" if and only if new is used.

//How JS devs create "classes" - 
function Foo(name) {
	this.name = name;
}
Foo.prototype.myName = function() {   // Adding a property to the parent.
	return this.name;
};
var a = new Foo("a");
a.myName(); // "a"
Here myName() does not belong to a at all, it belongs to a's parent. So [[Get]] operation does a look up, a's parent is Foo.prototype and uses that func there.

function Foo() {  }
Foo.prototype = {  }; // create a new prototype object, so this overrides the one JS built in line1
var a1 = new Foo();
a1.constructor === Foo; // false!
a1.constructor === Object; // true!
So here a1 anyways never had a property called constructor, so it goes to it's parent foo.prototype, even this NOW, does not have a property called contructor, so it
goes to it's parent Object.prototype, now this one has a constructor property that points to the function Object();

The best thing to do is remind yourself, "constructor does not mean constructed by". It just ANOTHER property out there.
It is by default, a non-enumerable, writable and configurable property. How ordinary can it get?
The result? Some arbitrary object-property reference like a1.constructor cannot actually be trusted to be the assumed default function reference.
The fact is: .constructor on an object arbitrarily points to a function who has a reference back to the object's parent -- a reference which it calls .prototype
a.constructor = Foo and Foo.prototype is a's parent.
Foo.prototype.constructor is Foo
.constructor is extremely unreliable, and an unsafe reference to rely upon in your code. Generally, such references should be avoided where possible.
In C/C++/Java, this field is bullet-proof.

function Foo(name) {this.name = name;}
Foo.prototype.myName = function() {
	return this.name;
};
function Bar(name,label) {
	Foo.call( this, name );
	this.label = label;
}
Bar.prototype = Object.create( Foo.prototype ); //Create a new object out of thin air and makes it's parent Foo.prototype. Assign this object to bar.prototype
Bar.prototype.myLabel = function() {
	return this.label;
};
var a = new Bar( "a", "obj a" );
a.myName();
a.myLabel();
This gives a, obj a
So in the above, the chain is {a} -> [[Prototype]] -> {bar.prototype} -> [[Prototype]] -> {foo.prototype} -> [[Prototype]] -> {Object.prototype}

Bar.prototype = Object.create( Foo.prototype ) is different from Bar.prototype = Foo.prototype
	Here you are not making new object called bar.prototype a child of Foo.prototype, you are just creating a new reference for Foo.prototype (a ref call bar.prototype)
	In ES6 you can do - Object.setPrototypeOf( Bar.prototype, Foo.prototype ); this does not create a whole new object, it just modifies the existing Bar.prototype objects' linkage.

Class Introspection: For a given instance (object), finding out it's ancestory (aka delegation linkage in JS)
a = new Foo();

a instanceof Foo;   LHS must be object, RHS must be a function
	In the entire [[Prototype]] chain of a, does the object Foo.prototype ever appear?

a.isPrototypeOf(b); in the entire [[Prototype]] chain of b, does a ever appear

Object.getPrototypeOf(a); // gives Foo.prototype object

function isChildOf(o1, o2) {  //This is how isPrototypeOf() is implemented by JS
	function F(){}
	F.prototype = o2;         //make use of the fact that funcName.prototype is a writable untrustable value
	return o1 instanceof F;   //because instanceof needs an object and a func
}
var a = {};
var b = Object.create(a);
isChildOf(b,a); // true

a.__proto__;   //this is Foo.prototype (only few browsers have this non-standard property called __proto__)
__proto__ is like a getter/setter. It is not an actual property func of a, but is a func of Object.prototype
Object.defineProperty(Object.prototype, "__proto__", {
	enumerable : false,
	configurable : false,
	get: function() {
		return Object.getPrototypeOf(this);
	},
	set: function(o) {
		Object.setPrototypeOf(this, o);  //ES6 has this func
		return o;
	}
} );
So, when we access (retrieve the value of) a.__proto__, it's like calling a.__proto__().
Never use the set(), i.e set the __proto__ property of an object. Dangerous.

JS developers call double underscore __ as dunder. So __proto__ is called as dunder proto

var a = Object.create(b);  a is now a new object, which is a child of b.
We don't need classes to create meaningful relationships between two objects. The only thing we should really care about is objects linked together for delegation, and Object.create(..) gives us that linkage without all the class cruft.
function createAndLinkObject(o){  //how it is probably implemented
	function F(){}
	F.prototype = o;
	return new F();
};
Object.create = createAndLinkObject;

Dictionaries:
var d = Object.create(null); d does not have any parent (an empty [[Prototype]] linkage). They are typically used purely for storing data in properties.
Mostly because they have no possible surprise effects from any delegated properties/functions on the [[Prototype]] chain, and are thus purely flat data storage.

3.6)Behaviour Delegation
behavior delegation design pattern is different from class/inheritance design pattern.
So for JS think in terms of the former, not the latter.

Don't do this style -
function Foo() {}
var a1 = new Foo();  a1's parent is Foo.protototype
Foo.prototype.constructor .. etc
Do this style -
var Foo = { some tasks alone, no state};
var a1 = Object.create(Foo);  a1's parent is Foo. Don't use func constructors at all.

var Task = {
	setID: function(ID) { this.id = ID; },
	outputID: function() { console.log( this.id ); }
};
var XYZ = Object.create( Task );  // make XYZ delegate to Task
XYZ.prepareTask = function(ID,Label) {
	this.setID( ID );    //implicit binding call-site, the parent func is used with the child instance
	this.label = Label;
};
XYZ.outputTaskDetails = function() {
	this.outputID();
	console.log( this.label );
};
Task and XYZ are not classes (or functions), they're just linked objects.
This style of code is called OLOO (objects-linked-to-other-objects). All we really care about is that the XYZ object delegates to the Task object

OLOO style -
>you want state to be on the delegators (XYZ), not on the delegate (Task). Here the properties label and id belong to XYZ and not task.
>As much as possible, try to have different func names (more detailed child specific names) in the children. Here XYZ has outputTaskDetails() as opposed to Task's generic outputID(),
	this is because you want to avoid shadowing. Let your child object manually call the parents generic func.
>With the implicit binding call site, the parent func is used with the child instance.

Behavior Delegation means: let some object (XYZ) provide a delegation (to Task) for property or method references if not found on the object (XYZ).
This is an extremely powerful design pattern, very distinct from the idea of parent and child classes, inheritance, polymorphism, etc.
Rather than organizing the objects in your mind vertically, with Parents flowing down to Children, think of objects side-by-side, as peers, with any direction of delegation links between the objects as necessary.

Mutual Delegation is disallowed in JS, you will get an error, because the JS prototyping lookup will be stuck in an infinte loop. (infinite circular reference)

OLOO Delegation Design vs Class design
Class way -
function Foo(who) {
	this.me = who;
}
Foo.prototype.identify = function() {
	return "I am " + this.me;
};

function Bar(who) {
	Foo.call( this, who );
}
Bar.prototype = Object.create( Foo.prototype );
Bar.prototype.speak = function() {
	alert( "Hello, " + this.identify() + "." );
};

var b1 = new Bar( "b1" );
var b2 = new Bar( "b2" );
b1.speak();
b2.speak();
Parent class Foo, inherited by child class Bar, which is then instantiated twice as b1 and b2. These 3 objects are linked: b1, Bar.prototype, and Foo.prototype
See the diagram on: https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md
b1 & b2 {
	me = value
	.__proto = bar.prototype
	.constructor is Foo() (via [[Prototype]] delegation)
}
bar.prototype {
	speak = func
	.__proto__ = foo.prototype
	.constructor is Foo() (via [[Prototype]] delegation)
}
foo.prototype {
	identify = func
	.__proto__ = Object.prototype
	.constructor is Foo() (direct property)
}
Object.prototype {
	toString = func
	valueOf = func
	hasOwnProperty = func
	.constructor is Object()
}
Foo and Bar both being function objects -  They both via [[Prototype]] delegation inherit from the PRIMARY function object Function.prototype
Function.prototype {
	call = func
	apply = func
	bind = func
	__proto__ = Object.prototype
	.constructor is Function()
}
Even Object (function object) links up to Function.prototype


OLOO way -
var Foo = {
	init: function(who) {
		this.me = who;
	},
	identify: function() {
		return "I am " + this.me;
	}
};

var Bar = Object.create( Foo );       // Bar.prototype in now Foo
Bar.speak = function() {
	alert( "Hello, " + this.identify() + "." );
};

var b1 = Object.create( Bar );       // B1.prototype in now Bar
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );

b1.speak();
b2.speak();
[[Prototype]] delegation from b1 to Bar to Foo, same as class way. We still have the same 3 objects linked together - b1, Bar.prototype, and Foo.prototype
BUT we have greatly simplified, there is no confusions like constructor properties (which are not trustable), prototypes and "new" calls.
You get the sam functionality via OLOO. So it is much better.
b1 & b2 {
	me = value
	.__proto = bar.prototype
}
bar.prototype {
	speak = func
	.__proto__ = foo.prototype
}
foo.prototype {
	init = func
	identify = func
	.__proto__ = Object.prototype
}
Object.prototype {
	toString = func
	valueOf = func
	hasOwnProperty = func
}
OLOO-style code embraces the fact that the only thing we ever really cared about was the objects linked to other objects.
Parent is just an object and is sort of a utility collection that any specific type of child might want to delegate to, and the child is also just a stand-alone object (with a delegation link to parent of course).
Make sure your child has new func names (no shadowing), with more specific name describing what they do. (call the parent funcs from here)

Note: functions themselves are objects, and function-objects also have a [[Prototype]] linkage, to the Function.prototype object, which defines those default methods like call(),apply(),bind()

ES6 class syntax: Under the hood, this thing still does the "class" design. Solving syntax hiccups doesn't substantially solve our class confusions in JS, though it makes a valiant effort masquerading as a solution!

See the Login Form and Login authentication examples at https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md
They compare two implementations: Class and OLOO

ES6 has concise method declerations: But there is one caveat
var foo = {
	methodName() {  },
	anotherOne() {  }
}
instead of: var foo =  {
	methodName = function() { }   //anonymous func
	anotherOne = function anotherName() { }   //not anonymous func
}
The old syntax gives you the choice to either keep it anonymous or not, but in ES6, it IS anonymous function expression, disadvantages -
>makes debugging stack traces harder
>makes self-referencing (recursion, event (un)binding, etc) harder
>makes code (a little bit) harder to understand
Only the second one applies to concise methods though

Type Introspection: inspecting an instance to find out what kind of object it is.
Using instance of
You can't just directly ask if the two objects are related. You can only ask if object a1 is related to the capabilities of the parent in question, but you need  a function that holds a reference to that parent.

Class design
function Foo() {  }
function Bar() {  }
Bar.prototype = Object.create( Foo.prototype );
var b1 = new Bar( "b1" );

To check the relationships - All of these check are TRUE
// relating `Foo` and `Bar` to each other
Bar.prototype instanceof Foo;
Object.getPrototypeOf( Bar.prototype ) === Foo.prototype;
Foo.prototype.isPrototypeOf( Bar.prototype );

// relating `b1` to both `Foo` and `Bar`
b1 instanceof Foo;
b1 instanceof Bar;
Object.getPrototypeOf( b1 ) === Bar.prototype;
Foo.prototype.isPrototypeOf( b1 );
Bar.prototype.isPrototypeOf( b1 );

Duck Typing: if it looks like a duck, and it quacks like a duck, it must be a duck
if (a1.something) {
	a1.something();
}
if(k.then) {
	Use K here.
	k object must be a promise... it must be having ALL the capabilities of the promise object. dangerous assumption.
}
Rather than checking if the child is related to the parent, you are checking if the child has the capability to call
the parent's functionality (regardless of if it found the method directly or delegated to some other object).
This introduces more risk (aka, brittle design) into the test.

OLOO Design -
var Foo = {  };
var Bar = Object.create( Foo );
var b1 = Object.create( Bar );

To check the relationships - All of these check are TRUE
// relating `Foo` and `Bar` to each other
Foo.isPrototypeOf(Bar);
Object.getPrototypeOf(Bar) === Foo;

// relating `b1` to both `Foo` and `Bar`
Foo.isPrototypeOf(b1);
Bar.isPrototypeOf(b1);
Object.getPrototypeOf(b1) === Bar;

Behavior delegation suggests objects as peers of each other, which delegate amongst themselves, rather than parent and child class relationships.
JavaScript's [[Prototype]] mechanism is, by its very designed nature, a behavior delegation mechanism.
OLOO quite naturally implements [[Prototype]]-based behavior delegation.

If there's any take-away message, it's that classes are an optional design pattern for code (not a necessary given), and that furthermore  they are often quite awkward to implement in a [[Prototype]] language like JavaScript.
Syntax is pretty bad - things like .prototype, explicit pseudo-polymorphism, .constructor etc. And mainly, there are no copies, only delegations.

ES6 Class
Class is, mostly, just syntactic sugar on top of the existing [[Prototype]] (delegation!) mechanism.
IMP: A class can only have functions, it cannot have properties (data) in it.

Syntax - class, constructor(), extends, super()
class Widget {
	constructor(width,height) {
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
	}
	render($where){
		if (this.$elem) {
			this.$elem.css( {
				width: this.width + "px",
				height: this.height + "px"
			} ).appendTo( $where );
		}
	}
}
class Button extends Widget {
	constructor(width,height,label) {
		super( width, height );                // relative polymorphism: you can lookup only ONE level up the chain
		this.label = label || "Default";
		this.$elem = $( "<button>" ).text( this.label );
	}
	render($where) {
		super.render( $where );
		this.$elem.click( this.onClick.bind( this ) );
	}
	onClick(evt) {
		console.log( "Button '" + this.label + "' clicked!" );
	}
}
In ES6, there is no - .prototype, Object.create(), .__proto__, Object.setPrototypeOf() etc

It is not copying definitions statically at declaration time.  If you change/replace a method on the parent "class",
the child "class" and/or instances will still be "affected", they are all still using the live-delegation model based on [[Prototype]].
class C {
	constructor() { this.num = Math.random(); }
	rand() { console.log( "Random: " + this.num );}
}
var c1 = new C();
c1.rand();    // "Random: 0.4324299..."
C.prototype.rand = function() {
	console.log("Some new string");
};
var c2 = new C();
c2.rand(); // "Some new string"
c1.rand(); // "Some new string"  //even c1's rand is changed

If you have to add a state, it will be shared across all instances
class C {
	constructor() { C.prototype.count++ }
}
C.prototype.count = 0;
var c1 = new C();   it is now 1
var c2 = new C();   it is now 2 (count is shared among instances)
c1.count, c2.count, C.prototype.count are all 2. (this can't even be a private var!)

You completely lose sight of the fact that C is an object, a concrete thing, which you can directly interact with. It is not like a java class.
Class in JS is dynamic. It's definition can change anytime duing the program. it is not static. This is bad.

Note: If you use the .bind(..) utility to make a hard-bound function, the function is not subclassable with ES6 extend like normal functions are.
Basically, do not use ES6 Class. Just not worth it.

--------------------------------------------------------------------------------------------------------------
Chapter 4: Types and Grammar

4.1) Types
JS type: a type is an intrinsic, built-in set of characteristics that uniquely identifies the behavior of a particular value and distinguishes it
from other values, both to the engine and to the developer.
Coerce: Convert from one type to another

7 Built in types: All of these except "object" are called primitives
boolean, number, string,
object, null, undefined, symbol

typeof: what's the type of the value in the variable?
typeof operator returns 6 values correctly for 6 of the types: "boolean", "number", "string", "object", "undefined", "symbol".
one of the types has a bug: typeof null is "object"
to check for null-> (!a && typeof a === "object") If this is true, then a is null

the 7th value that typeof returns is "function"
A function is just a callable object, it is not a built-in type. It has an internal [[Call]] property.
function foo(a,b,c) { }   //foo.length is automatically set to 3. (number of args in func definition)

typeof [3,4,5] is "object"
The typeof operator returns "undefined" even for "undeclared" (or "not defined") variables. Undefined and undeclared are two different things.

In JavaScript, variables don't have types -- values have types. Variables can hold any type of value, at any time.

On a webpage, to check if a global function/feature is there for you to use -
var helper = (typeof FeatureXYZ !== "undefined") ? FeatureXYZ : function() { define here };
var val = helper();

4.2)Values
>Arrays
Do not use the Delete operation on an array. It deletes the entire slot.
Sparse Arrays: They have empty values in some slots. The length is always till the last filled slot.

a["13"] = 10   It coerces it to be a[13] = 10
Use arrays for strictly numerically indexed values. Don't add a['test'] = 10, eventhough you can do this. (arr['push'] = 10)

function foo(args){   //args is an "Array-like" object
	var arr = Array.prototype.slice.call(args);   //when slice is called without any arguments, it just creates a copy and returns it
}

>Strings
JavaScript strings are immutable, while arrays are quite mutable.
All string methods return a new string, but all array methods modify the same array..
var a = "foo";
var b = ["f","o","o"];
a[1] = 'k'    no effect on a
b[1] = 'k'	  b is now 'f','k','o'
To access characters of a string, do not use a[5], use a.charAt(5) !

To reverse a string - s.split('').reverse().join('');   //ugly, but fine for small strings

>Numbers
The implementation of JavaScript's numbers is based on the "IEEE 754" standard, often called "floating-point." JavaScript specifically uses the "double precision" format (aka "64-bit binary") of the standard.
Numbers in JavaScript include both "integers" and floating-point values.
var b = 42.; is a valid number
b.toExponenetial();  //gives 5e+10
b.toFixed(4);  //there must be 4 digits after the decimal point

b.toPrecison(6);  //how many significant digits should be used to represent the value (rounding off) So the number must have 6 digits in total.
var a = 42.59;
a.toPrecision( 1 );  "4e+1"
a.toPrecision( 2 );  "43"

// these are all valid by Avoid them:
(42).toFixed( 3 );	// "42.000"
42.toFixed(3);  Syntax Error
0.42.toFixed( 3 );	// "0.420"
42..toFixed( 3 );	// "42.000"

octal 0oABC  0o363
hex 0xABC   0xf3c35
binary 0bABC   0b11110011;

Like many languages that use IEEE 754
0.1 + 0.2 === 0.3; // false
To compare two close numbers, compare their difference to "machine epsilon" -  which is commonly 2^-52 (2.220446049250313e-16)
if (!Number.EPSILON) {
	Number.EPSILON = Math.pow(2,-52);
}
function numbersCloseEnoughToEqual(n1,n2) {  return Math.abs( n1 - n2 ) < Number.EPSILON;   }
var a = 0.1 + 0.2;
var b = 0.3;
numbersCloseEnoughToEqual( a, b );					// true
numbersCloseEnoughToEqual( 0.0000001, 0.0000002 );	// false

Number.MAX_VALUE  1.798e+308  (Highest number in JS)
Number.MIN_VALUE  5e-324  (Smallest non negative number in JS)
Safe range : The max/min integer that can "safely" be represented (i.e there's a guarantee that the requested value is actually representable unambiguously)
Number.MAX_SAFE_INTEGER   9007199254740991    (9 quadrillion)
Number.MIN_SAFE_INTEGER  -9007199254740991    These are only there in ES6

Test if a number is an integer
Number.isInteger(42);		// true
Number.isInteger(42.000);	// true
Number.isInteger(42.3);	// false
Polyfill-
if (!Number.isInteger) {
	Number.isInteger = function(num) {
		return typeof num == "number" && num % 1 == 0;
	};
}

>Special Values
For the undefined type, there is one and only one value: undefined.
For the null type, there is one and only one value: null.
So for both of them, the label is both its type and its value.

Global var: In non-strict, undefined can actually be the name of a global variable
undefined = 2;   wreaks havoc in the code (this is a global var) (in strict mode this is type error)
Local var: In strict and non-strict mode, you can define a local variable called undefined!

void operator
The expression void ___ "voids" out any value, so that the result of the expression is always the undefined value.
It doesn't modify the existing value; it just ensures that no value comes back from the operator expression.
console.log( void a, a ); // undefined 42
There's no practical difference between void 0, void 1, and undefined.
Just use the void operator to nullify some value.

NaN : Not a Number. It is actually - "invalid number," "failed number," or even "bad number"
typeof NaN is "number"
2 / "foo" is NaN
I tried to perform a mathematic operation but failed, so here's the failed number result instead.
NaN === NaN is false , NaN is a very special value in that it's never equal to another NaN value
isNaN(x) returns true only if x is not of type 'number'
Use Number.isNaN(x) to check if x is NaN
Polyfill -
if (!Number.isNaN) {
	Number.isNaN = function(n) {
		return n !== n;
	};
}

Infinities
var a = 1 / 0;	// Infinity or Number.POSITIVE_INFINITY (there is no divide by zero error in JS)
var b = -1 / 0;	// -Infinity or Number.NEGATIVE_INFINITY
var a = Number.MAX_VALUE;	// 1.7976931348623157e+308
a + a;	 // Infinity or Number.POSITIVE_INFINITY
Infinity / Infinity is NaN (not 1)
10 / Infinity is 0
Infinity === -Infinity   //false

Zeros
var a = 0 / -3; // -0
var b = 0 * -3; // -0
JSON.stringify( -0 ) is  "0" but JSON.parse("-0") is -0
String(-0) is "0"

-0 === 0;	// true
So to distinguish -0 from 0
	function isNegZero(n) {  //
		n = Number( n );
		return (n === 0) && (1 / n === -Infinity);
	}

Special Equality: Use === as much as possible
To compare any two values, you can also use: Object.is(x,y);
Polyfill -
Object.is = function(v1, v2) {
		if (v1 === 0 && v2 === 0) {   //test for 0
			return 1 / v1 === 1 / v2;
		}
		if (v1 !== v1) {        // test for NaN
			return v2 !== v2;
		}
		return v1 === v2;     // everything else
};

In ES6 the most preferred way to test for NaN or -0 is Object.is()
Object.is(NaN, NaN); //true
Object.is(-0, -0); //true
Object.is(0, -0); //false

Pass By Value
Simple values (aka scalar primitives) are always assigned/passed by value-copy:
null, undefined, string, number, boolean, and symbol.

Pass By Reference
Compound values -- objects (including arrays, and all boxed object wrappers) and functions,
always create a copy of the reference on assignment or passing.
References are not like references/pointers in other languages -- they are never pointed at other variables/references, they only point at the underlying VALUES.

Remember: you cannot directly control/override value-copy vs. reference -- those semantics are controlled entirely by the type of the underlying value.

Since references point to the values themselves and not to the variables, you cannot use one reference to change where another reference is pointed:
var a = [1,2,3];
var b = a;     b now points to the value [1,2,3]
b.push(10);
b = [4,5,6];   b now points to some other value
a;    a still points to the value [1,2,3,10]

Make sure you understand this
function foo(x) {
	x.push( 4 );
	x;    // [1,2,3,4]

	x = [4,5,6];
	x.push( 7 );
	x;    // [4,5,6,7]
}
var a = [1,2,3];
foo( a );
a; // [1,2,3,4]  not  [4,5,6,7]

To pass a copy of an array to a func, do abc(x.slice());  //it sends a shallow copy

4.3)Natives
Natives: JavaScript provides object wrappers around primitive values. They are actually built-in functions. ('class' design and not OLOO design)
Boolean(), Number(), String()
Object(), Array(), Function()
Regexp(), Date(), Error()
Symbol()

function Number(x){
	this.value = x;
	this.toString = function() { }
	this.toFixed = function() { }
}
Number.prototype.toPrecison = function() { }       //a function
Number.NEGATIVE_INFINITY = -Infinity;              //a static property
var x = new Number(5);
So protypal inheritance: x -> Number.prototype -> Object.prototype
Number.__proto__ is Function.prototype

var s = new String( "Hello World!" );   //The result of the constructor form of value creation is an object wrapper around the primitive value.
typeof s;  //"object" and not "string"
a instanceof String;  //true  (String - the function)

Internal [[Class]]
Values that are typeof "object" (such as an array) are additionally tagged with an internal [[Class]] property.
This property cannot be accessed directly - but can be seen via
	Object.prototype.toString.call( [1,2,3] );			// "[object Array]"  this is the internal [[Class]] value
	Object.prototype.toString.call( /regex-literal/i );   // "[object RegExp]"
In most cases, this internal [[Class]] value corresponds to the built-in native constructor that's related to the value
	Object.prototype.toString.call( null );			// "[object Null]"
	Object.prototype.toString.call( undefined );	// "[object Undefined]"
	Object.prototype.toString.call( "abc" );	// "[object String]"  boxing
	Object.prototype.toString.call( 42 );		// "[object Number]"  boxing
	Object.prototype.toString.call( true );		// "[object Boolean]"  boxing
	Object.prototype.toString.call( function(){} );   // "[object Function]" boxing

Boxing: simple primitives are automatically boxed by their respective object wrappers
These object wrappers serve a very important purpose. Primitive values don't have properties or methods to be able to use/access. JS will automatically box (aka wrap) the primitive value to fulfill such accesses.
There's basically no reason to use the object form directly. It's better to just let the boxing happen implicitly. Never do new String('abc'), new Number(43) etc

b = new String('abc');      typeof b is "object"
c = Object('abc');          typeof c is "object"
b instanceof String         // true
c instanceof String         //true
Object.prototype.toString.call( b );       // "[object String]"

Unboxing: From any wrapper object, to get the underlying value use - .valueOf()
var b = new Number(42);
b.valueOf();              //42
Implicit unboxing -
var a = new String("abc");
var b = a + ""; // typeof b is 'string'

>Array() -
For array, object, function, and regexp values, it is preferred that you use the literal form for creating the values.
literal form creates the same sort of object as the constructor.

var a = new Array( 1, 2, 3 ) same as a = [1,2,3]
Array() has two quirks, it does not need 'new' in front of it, if you call it with one argument, it creates an empty array of that size (sparse array)
var a = Array(5); [5 undefined here]   a.length is 5

var a = new Array( 3 );
var b = [ undefined, undefined, undefined ];
var c = [];
c.length = 3;
a;
b;
c;
// all three are the same

var a = Array.apply( null, {length:3} );
a; // [ undefined, undefined, undefined ]

>Object() -
var c = new Object();
c.foo = "bar";
c; // { foo: "bar" }
var d = { foo: "bar" };
d; // { foo: "bar" }

>Function(argNames,body)
var e = new Function( "a", "return a * 2;" );
var f = function(a) { return a * 2; };
function g(a) { return a * 2; }

>RegExp(pattern,mode)
var h = new RegExp( "^a*b+", "g" );
var i = /^a*b+/g;

there is practically no reason to use Object(), Function(), RegExp(), just use literal form.
Unless you have use case where in the code, dynamically, you need to define a function's body or define a regExp.
var b = "return a * 2", c = "return a * 3";
if (!flag) { g = new Function ("a", c); }

Same for regexp.
var name = "Kyle";
var namePattern = new RegExp( "\\b(?:" + name + ")+\\b", "ig" );
var matches = someText.match( namePattern );

>Date() - very useful, there is no literal form for it
static helper function  -  Date.now() , returns a signed integer number of milliseconds since Jan 1, 1970

var b = new Date(); returns an object that has a tonne of helper functions.
var b = Date(); returns a string of the format "Fri Jul 18 2014 00:31:02 GMT-0500 (CDT)"

>Error() - very useful, there is no literal form for it
Same quirk as Array(), you can call with or without new. The behaviour is same.
It returns an error object, captures the current execution stack context in it.
This stack context includes the function call-stack and the line-number where the error object was created, which helps in debugging that error.

throw operator -
throw new Error( "x wasn't provided" );
Error object instance have atleast the "message" property, they may have others too.
Other than the general Error(), there also, rarely used ones like - TypeError(), ReferenceError(), EvalError(), RangeError(), SyntaxError(), and URIError()
try{throw new Error();}catch(b){console.log(b)}

>Symbol()
Symbols are special "unique" values that can be used as properties on objects.
Symbols are not objects, they are simple scalar primitives. typeof them is "symbol" not "string"
Symbols can be used as property names, but you cannot see or access the actual value of a symbol from your program, nor from the developer console.
There are several predefined symbols in ES6, accessed as static properties of the Symbol function object, like Symbol.create, Symbol.iterator

You are NOT allowed to use new for Symbol(), it will throw an error.
var mysym = Symbol("my own symbol");
mysym;				// Symbol(my own symbol)
mysym.toString();	// "Symbol(my own symbol)"
typeof mysym; 		// "symbol"
var a = { };
a.x = 10;
a[mysym] = "foobar";
Object.getOwnPropertySymbols(a);  // [Symbol(my own symbol)]  (an array of one item)
Object.getOwnPropertyNames(a);   // [x]   (an array of one item)

Native Prototypes: Each of the built-in native constructors has its own .prototype object -- Array.prototype, String.prototype, etc. These objects contain behavior unique to their particular object subtype.
For example, all string objects, and by extension (via boxing) string primitives, have access to default behavior as methods defined on the String.prototype object.
For now, (for these notes) X.prototype.ABC is shortened to X#ABC.

var a = 'abc';
By virtue of prototype delegation, any string value can access these methods:
String#indexOf()  (a.indexOf('b');)  (in these notes, this means String.prototype.indexOf())
String#charAt()
String#substr(), String#substring(), String#slice()
String#toUpperCase(), String#toLowerCase()
String#trim()

Others - Number#toFixed(), Array#concat(..)

Exceptions -  Function.prototype is an actual function object (empty body), RegExp.prototype is a regular expression (empty regex), and Array.prototype is an empty array object.
typeof Function.prototype;			// "function" not "object"
Function.prototype();				// it's an empty function!
RegExp.prototype.toString();		// "/(?:)/" -- empty regex
Array.prototype.push( 1, 2, 3 );   //it is now not an empty array, but has three values

Be careful of mistakenly changing the default value for Array.prototype.
var b = Array.prototype;   (So b is [])
b.push(5);    Now Array.prototype also has [5]

In conclusion, JS automatically "boxes" primitive value (wraps it in its respective object wrapper) so that the property/method accesses can be fulfilled.
String() when called with new returns an object, this object's parent is String.prototype. (this parent has all the useful functions)
when you do var a = "abc", a.indexOf('x'), it wraps a to it String object wrapper, which then goes to it's parent to find the indexOf property.

Another JS syntax problem: calling any of these Native funcs as a constructor, does not need ().
var b = new Date;    //it is allowed, but is bad syntax.

4.4)Coercion
coercion is magical, evil, confusing, and just downright a bad idea. But it is important you don't avoid this feature of JS, and learn how it works, and use it to your advantage.
type casting: explicitly converting from one type to another (or call it explicit coercion)
coercion: implicit conversion from one type to another done by the language  (boxing from primitive to object is not coercion)
JS coercions always result in one of the scalar primitive values, like string, number, or boolean.  (never object, function etc)

var a = 42;
var b = a + "";			// implicit coercion
var c = String( a );	// explicit coercion   (typeof c is not "string" but "object")

Regardless of Explicit or Implicit coercion, first understand the 3 main abstract operations in the ES5 spec - ToString, ToNumber, ToBoolean. JS engine use these behind the scenes.

>ToString operation
null -> "null"
undefined -> "undefined"
true -> "true"
100000000000000000000 -> "1e21"
{ } -> "[object Object]"  (returns the internal [[Class]] unless the Object has toString defined)
[1,2,3] -> "1,2,3"   (arrays have toString defined)
[] -> ""
[null,undefined] is ","  (very weird, it should have been "null, undefined")
-0 is "0"

JSON.stringify can only take JSON safe values (not undefined, function, symbol, malformed object, objects with circular references (infinite loop))
JSON.stringify( 42 );	// "42"
JSON.stringify( "42" );	// ""42"" (a string with a quoted string value in it)
JSON.stringify( null );	// "null"
JSON.stringify( true );	// "true"

JSON.stringify( undefined );					// undefined
JSON.stringify( function(){} );					// undefined
JSON.stringify( [1,undefined,function(){},4] );	// "[1,null,null,4]"  (in array, non-json-safe values are turned to null)
JSON.stringify( { a:2, b:function(){} } );		// "{"a":2}"  (in object, non-json-safe properties are excluded)

Define "toJSON()"" in your objects, so that it returns a JSON safe object that JSON.stringify() will use.
toJSON() should be interpreted as "return a JSON-safe value suitable for stringification later on"
var o = { };
var a = {
	b: 42,
	c: o,
	d: function(){}
};
o.e = a;                     // create a circular reference inside `a`
JSON.stringify( a );         // would throw an error on the circular reference
a.toJSON = function() {       // define a custom JSON value serialization
	return { b: this.b };    // only include the `b` property for serialization
};
JSON.stringify( a ); // "{"b":42}"    (no error)

full syntax - JSON.stringify(json object, replacer, space);  Read the SPEC  (replacer is a filter for property names, space formats the final string)

>ToNumber operation
true -> 1
false -> 0
undefined -> NaN
null - > 0
any string -> digits or NaN
"" -> 0
"0x5423" -> 0   (not treated as octal)
for an object -> whatever .valueOf() returns
{} -> NaN
[] -> 0  (even [""] is 0)
[1,2,3] -> NaN
["0"] is 0 
"-0" is -0   ("0" is 0)
" 0009  " is 9
".0" is 0
Objects - it tries .valueOf(), if it exists and returns a primitive value (BONS), then converts that to number. then it tries .toString()

>ToBoolean operation
Only these will convert to false (falsy), rest ALL are true
false
0, -0, NaN
""
null, undefined

A "falsy object" is a value that looks and acts like a normal object (properties, etc.), but when you coerce it to a boolean, it coerces to a false value.
Some browsers have created quirky objects that are not part of the JS spec. (ignore this topic for now)

"false", "0", " " are all true
[], {}, function(){} are all true

Explicit Coercion : The more explicit we are, someone later will be able to read our code and understand without undue effort what our intent was.
>string and number
here you call String() and Number() without the new keyword, they both use the ToString and ToNumber operations
String(43) or Number("44");
var a = 42;
var b = a.toString();  This is explicity implicit, a is boxed and then toString() is called.

var c = "3.14";
var d = +c;   3.14,   Unary operator + coerces operand to number.  (counted as explicit coercion)
var e = -c;   -3.14
var f = - -c;  3.14
1 + - + + + - + 1;	// 2  JS is crazy

var a = parseInt("42px"); 42    Parsing a numeric value out of a string is tolerant of non-numeric characters -- it just stops parsing left-to-right when encountered
var a = parseFloat("42.5px"); 42.5
var a = Number("42px"); NaN   coercion fails completely
parseInt(non-string);  it first implicitly converts it to a string and then tries to parse a number out of it. NEVER pass a non-string to parseInt()
var a = {
	num: 21,
	toString: function() { return String( this.num * 2 ); }
};
parseInt(a); // 42

ES4 and below, syntax was parseInt(x, base). You had to specify base=10, because it would assume 0675 as an octal number.
parseInt(1/0,19);  18   base 19 has digits 0-9A-I, so parsing string "Infinity",I is 18. N is not a valid number.
parseInt( 0.000008 );		// 0   ("0" from "0.000008")
parseInt( 0.0000008 );		// 8   ("8" from "8e-7")
parseInt( false, 16 );		// 250 ("fa" from "false")
parseInt( parseInt, 16 );	// 15  ("f" from "function..")
parseInt( "0x10" );			// 16
parseInt( "103", 2 );		// 2

var baz = '123' - '3'; //120  - works only for numbers, so instead of throwing errors like JAVA, JS converts lhs and rhs to numbers.

>date and number
var d = new Date();
var e = +d;  //1408369986000    coerced a date object to a number
var currentTimestamp = +new Date();   (shortcut)

var currentTimestamp = Date.now(); //added in ES5
Date.now = function() {
		return +new Date();
};
var someOtherTimestamp = new Date('08-12-2015').getTime();   for any Date object, use getTime() to convert it to milliseconds since epoch

> ~ | & operators  (BITWISE NOT, OR, AND)
bitwise operators in JS are defined only for 32-bit operations, which means they force their operands to conform to 32-bit value representations
first they call the internal toInt32 which inturn first calls Number();
So ~ operator first "coerces" to a 32-bit NUMBER value, and then performs a bitwise negation (flipping each bit's parity).
Note: This is very similar to how ! not only coerces its value to boolean but also flips its parity
~42;	// -(42+1) ==> -43     (~x is roughly the same as -(x+1)). Now only x=-1 will make ~x as a falsy value! (0)
Sentinel value: a normal value given a special meaning in a language. In JS it is is -1. A lot of string funcs return -1 as a flag for false
if (a.indexOf(x) >= 0) { x was found }
if (~a.indexOf(x)) { x was found }
~~42.6 is 42  Here, ~ applied toInt32 coercion and flips bits, the second ~ flips the bits back. The end result is just toInt32 coercion with the decimal part gone. (-(-(x+1) + 1))
~~-42.6 is 43
Just use Math.floor() and skip ~~

>anything to boolean
this uses the ToBoolean operation, so anything not in the falsy list, is truthy. Simple.
! is a unary negate operator that explicitly coerces to boolean and flips it
if(!abc) { }    only if abc is falsy
!! converts to boolean (without flipping it)  (just like ~~ does for positive numbers)
if(!!abc) { }   only if abc is truthy

Implicit coercion is there in if(), while(), doWhile(), for(;middle-part;), ternary(?:)
All of these use the ToBoolean operation

Implicit Coercion
type conversions that are hidden, with non-obvious side-effects.
So even explicit conversion depends on implicit in some cases -
SomeType x = SomeType( y ) is actually  SomeType x = SomeType( AnotherType(y) ), it first converts to AnotherType and then tries to convert it to SomeType

>string and number
var a = [1,2]; var b = [3,4];
a + b; // "1,23,4"
With the + operator, if either operand is a string (or can be converted to a string), then both are converted to strings.
[] + {} is "[object Object]"
{} + [] is 0 // weird

Number to string
42 + "" is "42"   lots of developers use this.
There is a difference: a + "" AND String(a) + ""
If a is an object, a +, first calls valueOf on a, and then converts that value to string
whereas String(a) just calls the toString() of a directly

String to number
"42" - 0 is 42
The - operator is defined only for numeric subtraction, so both operands are converted to numbers. (same with * and /)
[3] - [2] is 1, here both arrays converted to strings and then to numbers
Number([3]) is 3
Number([3,4,5]) is NaN
Number({'0':3}) is NaN  (i.e any object)

>boolean and number
write a func that takes x args and returns true only if one of the args is true and all other args are false
function onlyOne(args) {
	var sum = 0;
	for (var i=0; i < ars.length; i++) {
		if (args[i]) {    //skip the falsy ones, again here there is implicit conversion to boolean  (you also skipping NaN, because NaN added to the sum makes the sum NaN!)
			sum += args[i];   //implicitly coerce the boolean args[i] to a number 1 or 0
		}
	}
	return sum == 1;
}
to do it explicitly do - sum += Number(!!args[i]);   convert it to boolean and then convert it to number
You can obviously edit the abov func to look for only 5 truths or only 10 truths etc.  (just change the sum value ===, part)

|| && are'nt exactly logical operators in JS, they are more like 'operand selector operators', they return one of the two operands.
ES5 spec: The value produced by &&,|| operator is not necessarily of type Boolean. The value produced will always be the value of one of the two operand expressions.
42 || "abc"  is 42            42 && "abc"  is "abc"
null || "abc" is "abc"        null && "abc" is null
Both || &&, first perform a boolean test on the first operand: for || if it is true, it returns operand 1. for && if it is true it returns operand 2.
a || b; is basically a ? a : b
a && b; is basically a ? b : a
So if(), while() etc, they implicitly coerce the final selected operand value to boolean.
if (!!a && (!!b || !!c)) {    /this is truly explicit
	console.log( "yep" );
}
In this one - if (a && b && c && d && e && f && g), if b is false it returns b (the LHS) and does not look at the rest. Only if all are true, it returns g

IN JS, developers initialize vars with default values using the selector operands
var c = a || "some default value";
Short Circuiting (or guarding) (&& is sometimes called the guard operator)
a && foo(a);  //foo() is called only if a is true, else it will just go to next line.
foo is guarded by "a &&" before it.    (JS minfiers do this!!, convert if(a){foo()} to a && foo())

>Symbol
to string-
var s1 = Symbol("cool");
String( s1 );					// "Symbol(cool)"  Explicit is allowed
var s2 = Symbol("not cool");
s2 + "";						// TypeError   Implicit is not allowed

to number- not possible, TypeError
to boolean - always true

Loose EQUALS and strict EQUALS
== allows coercion in the equality comparison and === disallows coercion. So == does more work than ===. == is just a LOOSE comparison between things
both of them check the type of the operand and then decide what to do (one tries coercion, the other compares the type with the other side)

x == y Algorithm:
if typeof x and typeof y are the same, return x === y.
else
	If one of them is null and the other is undefined, return true.
	If one of them is a number and the other is a string, convert string to number
	If one of them is a boolean, convert the boolean to a number
	If one of them is object/function/array (not null object) and the other string/number/symbol, convert the object to its primitive
	Return false.   (you will use this one a lot! because the top 4 comparisons dont cover all combinations)

"42" == 50  //false, it compares 42 and 50
false == "70" // false, it compares 0 and 70  ("70" is converted to 70, becaase the boolean became a number, so string must now convert to number)
true == "abc" //FALSE, it compares 1 and NaN

var a = "42";
if (a == true) { }     //false
if (a === true) { }    //false
if (a) { }      	   //true, implicit 
if (!!a) { }           //true, a better explicit form
if (Boolean(a)) { }    //true, a better explicit form

Null and undefined give true only with each other, with any other value, they give false.
null === undefined  - false
null == undefined  - true

42 == [42];  //true, array object is coerced to primitive (toString() for array and valueOf() for object) "42", which is then coerced to 42
"abc" == Object("abc");  //true, it is unwrapped from object
Remember Object(null), Object(undefined) return an empty object { }. Object(NaN) when unwrapped/unboxed gives back NaN.

You can break JS  -  So, in JS you can change the prototype funcs, so if you do -
Number.prototype.valueOf() = func(){ return 3;}  //wreaks havoc in JS now
new Number(10) == 10;  //false, because LHS is 3
Write all the code in JS required for this -
if (a==2 && a==3){    // a has to be 2 and 3 !
	console.log("Passed the test");
}
//answer -
var a = new Number(5345343);
var i = 2;
Number.prototype.valueOf = function() {return i++}

Comparing the falsy values:
"0" == null;			// false, so remember null and undefined are true, only when compared to each other...
"0" == undefined;		// false
false == null;			// false
false == undefined;		// false
"" == null;				// false
"" == undefined;		// false
0 == null;				// false
0 == undefined;			// false
null == undefined       //true
null == null            //true
undefined == undefined  //true

"0" == false;			// true -- UH OH!    "0"=false to "0"=0 to 0=0
"0" == NaN;				// false    		"0"=NaN to 0=NaN
"0" == 0;				// true    			 "0"=0 to 0=0
"0" == "";				// false    		same type
false == NaN;			// false    		false=NaN to 0=NaN
false == 0;				// true -- UH OH!    false=0 to 0=0
false == "";			// true -- UH OH!    false="" to  0="" to 0=0
false == [];			// true -- UH OH!    false=[] to 0=[] to 0="" to 0=0
false == {};			// false     		false={} to 0={} to 0=="[object Object]" to 0==NaN
"" == NaN;				// false    		""=NaN to 0=NaN
"" == 0;				// true -- UH OH!    ""=0 to 0=0
"" == [];				// true -- UH OH!    ""=[] to ""=""
"" == {};				// false			""={} to ""=="[object Object]"
0 == NaN;				// false			same type
0 == [];				// true -- UH OH!   0=[] to 0="" to 0=0
0 == {};				// false			0=={} to 0==NaN

[] == ![]               // true -- UH OH!   []=![] to []=!true to []=false to []=0 to ""=0 to 0=0  (FIRST, the ! operator applies, coerces to boolean)
2 == [2];		        // true             2=[2] to 2="2" to 2=2
"" == [null];	        // true             ""=[null] to ""=""    [null].toString() is ""
"42" == ["42"];          // true            "42"=["42"] to "42"="42"

You can safely use == when one of the operands is "typeof x", because typeof always returns one of 7 strings. You don't need ===
good tool: https://github.com/dorey/JavaScript-Equality-Table

//Double EQUAL issues
foo = [];
if(foo);            //true  Empty array is true. Period. It is not on the 'false' list for the toBoolean() function. 
if(foo == false);   //true. == algo says use the to primitive algo, so it does toString(). you get empty string. 

Relational Comparison > and < Algorithm -
x > y
First convert both to do ToPrimitive
If one of them is not a string, convert both to numbers
If both are strings, which alphabets/digits came first?

[42] < 43          		// true   [42]<43 to 42<43
["42"] < ["043"]   		//false   ["42"]<["043"] to "42"<"043"   "0" is less than "4"
[4,2] < [0,4,3]    		//false       [4,2]<[0,4,3] to "4,2"<"0,4,3"
{b:42} < {b:43}         //false    [object Object] < [object Object]

Implicit coercion must be used responsibly and consciously. Know why you're writing the code you're writing, and how it works. Strive to write code that others will easily be able to learn from and understand as well.

//Some extras
parseInt('08');              //0 it sees 0 and thinks it is octal, so 8 is not there in octal, hence 0.
parseInt(1/0,19);            //paresInt takes a string and a base and spits out a number. Infinity -> "Infinity" -> I is 18, n does'nt exist in base19, so 18. 
String('abc') instanceof String;                 //false. it is of type string
(new String ('abc')) instanceof String;          //true, this is a String native object
String('abc') == (new String('abc'));            //true Comapring string and Object. Object calls .toString() so abc is abc
3 > 2 > 1;                                       //false  3>2 is true.   True > 1 is : 1>1 is false
Array(5).join('wat'-1) + "Batman!";              // Empty array of size 5 is joined on NaN, so 4 NaNs in total : NaNNaNNaNNaN Batman!

4.5)Grammar  (core JS syntax)
Statements and Expressions
English: A "sentence" is one complete formation of words, it is comprised of one or more "phrases", each of which can be connected with punctuation marks or conjunction words ("and," "or," etc), just like this whole sentence.
	A phrase can itself be made up of smaller phrases. Some phrases are incomplete and don't accomplish much by themselves, while other phrases can stand on their own
JavaScript: Statements are sentences, expressions are phrases, and operators are conjunctions/punctuation.
var a = 3 * 6;     3 * 6 is an expression.
var b = a;         a = 3 * 6 and b = a are called assignment expressions...
b;                 expression b is a statement by itself
ALL statements have a completion value (default value is undefined)  (browser by default, return the completion value of the last statement executed)
for a { }block, it is the completion value of the last statement in the block

To access the completion value of a statement, use eval();
eval(var b = 25);  //undefined, spec say a var line will always have a completion value of undefined
eval(c = 25);  //25
eval(if(b){ c = 25;}) //25
Obviously, NEVER use eval() in your code.

Just know how unary ++ and -- work:
var a = 42;
a++;	// 42
a;		// 43
++a;	// 44
a;		// 44

var a = 42, b;
b = ( a++, a ); // b is 43

var a, b, c;
a = b = c = 42;  //all three are 42
var a = b = c = 42;  //syntax error  (unless b and c have been declared via var before, this is an error, b and c are not found in strict mode!, in non-strict mode b and c are created now as global)

Contextual Rules: {} are used in object literals, labels, code blocks and object destructuring. (it depends on the context)
>literals
var a = {
	foo: bar()
};
The a reference is called an "l-value" (aka left-hand value) since it is the target of an assignment.
The { .. } pair is an "r-value" (aka right-hand value) since it's used just as a value.

>Labels: JS does not support goto statement, but both the continue and break statements can optionally accept a specified label.
foo: for (var i=0; i<4; i++) {
	for (var j=0; j<4; j++) {
		if (j == i) {            // whenever the loops meet, continue outer loop
			continue foo;       //jump to the next iteration of the `foo` labeled-loop
		}
		console.log( i, j );
	}
}
If that line was break foo;    // break out of the loop/block that is labeled 'foo' and continue after it
A label can also be applied to code block
bar: {
		console.log( "Hello" );
		break bar;    //very uncommon
		console.log( "never runs" );
}
JSON is truly a subset of JS syntax, but JSON is not valid JS grammar by itself.
{"a":42} is not allowed in JS.   That's because statement LABELs cannot have quotes around them, so "a" is not a valid label, and thus : can't come right after it.

>code block
[] + {}; // "[object Object]"
{} + []; // 0   here, {} is treated as a code block!

>object destructuring
var { a, b } = getData();       //return {a: 42,b: "foo"};
function otherData({a,c}) { use a and c values here }
otherData({a:10,b:20,c:30});

Operator Precedence:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
b = a++, a;     //the , operator has a lower precedence than the =, so it does b=a++ and then a;

Ze order of ze precedence:
()
func() call
a++ a--
!  ~  +a  -a  ++a  --a  typeof  void   (all the unary operators)
**   (exponent)
*  /  %
+  -
<  >  <=  >=  instanceof
==  !=  ===  !==
&&
||
? :
=  +=  -=  *=  /=  %=
,

Example: what is d?
var a = 42;
var b = "foo";
var c = false;
var d = a && b || c ? c || b ? 10 : c && b : a;

d = 42 && "foo" || false ? false || "foo" ? 10 : false && "foo" : 42
d = ((42 && "foo")||false) ? (false||"foo")?10:false && "foo"  :   42    //the answer is 10

&&, || are left-associative, meaning you group it from left to right
foo() && goo() && too() is actually evaluated as -
(foo() && goo()) && too()

?: is right-associative
a ? b : c ? d : e; is actually -
a ? b : (c ? d : e);

= is right-associative
a = b = c = 42; is actually -
a = (b = (c = 42));

Use operator precedence/associativity where it leads to shorter and cleaner code, but use ( ) manual grouping in places where it helps create clarity and reduce confusion.

Automatic Semicolon Insertion (ASI is there in JS)
ASI will only take effect in the presence of a newline (aka line break). Semicolons are not inserted in the middle of a line.
Only if there's nothing but whitespace and/or comments between the end of some statement and that line's newline/line break.
If the JS parser parses a line where a parser error would occur (a missing expected ;), and it can reasonably insert one, it does so.
ASI kicks in with the break, continue, return, and (ES6) yield keywords.
return (
		a * 2 + 3 / 12
	);   --> ASI adds it over here....
ASI is an "error correction" routine, specifically, a parser error.

JS Errors
>Compile time:
syntax errors: stop the program before it runs
function parameter names cannot be duplicated foo(a,b,c){} goo(a,b,c){}
invalid regular expression
object literal having more than one property of the same name
Temporal Dead Zone (tdz):a variable reference cannot yet be made, because it hasn't reached its required initialization.
	a = 42;
	let a;
	function foo( a = 42, b = a + b + 5 ) {   }   //b is a tdz
>Runtime Errors
There's no requirement in the spec about exactly how browsers (and developer tools) should report errors. So message are different in different browsers.

Function Arguments: Very important
function foo( a = 42, b = a + 1 ) {
	console.log( a, b );
}
foo();					// 42 43
foo(undefined);		    // 42 43
foo(5);				// 5 6
foo(void 0, 7);		    // 42 7
foo(null);			    // null 1   (null + 1 is 1)

ES6: When using default values for a function, the arguments[] array of that function is not updated to be the default values. argument array will have what was originally sent to the function.
foo (a=10, b=20){  }
foo();   //here arguments[0 and 1] is undefined. It is not 10 and 20. arguments.length is 0
foo(undefined);  //here arguments[0 and 1] is undefined. BUT argument.length is 1

ES5: function foo(a) {
	a = 42;
	console.log( arguments[0] );
}
foo(2);	  // 42 (linked) If you pass an argument, the arguments slot and the named parameter are linked to always have the same value.
foo();	  // undefined (not linked) If you omit the argument, no such linkage occurs.
But in strict mode - there is no linkage, arguments[] is what you send to the func, that's it.

Try-catch
try only requires either catch or finally. It can have both too.
function foo() {
	try {
		throw 42;   //or return 42
	}
	finally {  console.log("Hello");  }
	console.log("never runs");
}
console.log(foo());    Prints out "Hello" followed by Uncaught Exception: 42
So when it see return42, it determines that the completion time is here, so it runs the finally{} block and THEN returns the completion value of 42

function foo() {
	try {
		return 42;
	}
	finally {  throw "Oops!";  }
    console.log("never runs");
}
console.log(foo());  // Uncaught Exception: Oops!
Here, in the finally{} if an exception is thrown, it will abandon the completion value of the function.
Similarly, a return 100 in the finally block will override the return value in the try block, and only 100 will be returned.
The omission of return in a function is the same as return; or even return undefined;

continue and break have the same effects like return and throw.
for (var i=0; i<10; i++) {
	try {
		continue;
	}
	finally {
		console.log( i );
	}
	console.log('never comes here');
} // prints out 0 to 9.  In each iteration, the continue triggers the end of the block, so it goes to finally and executes it. It then does i++ and starts the next iteration.

Switch Statement
switch (a) {
	case 2:
		break;
	case 42:
		break;
	default:
}
Switch does a "==="" match

Quick hack to make it use ==
switch (true) {
	case a == "42":
		break;
	case a == 42:
		break;
	default:
}
//but be careful with this, your expression has to result in a boolean or else it won't match the "true" in the switch
use-   case !!("hello world" || 42 =="42"):    this will ensure your expression is a boolean (the result of this expression is "hello world" which is then explicitly coerced to true)

Default case need not necessarily be at the bottom.
var a = 10;
switch (a) {
	case 1:
	case 2:
	default:
		console.log( "default" );
	case 3:
		console.log( "3" );
		break;
	case 4:
		console.log( "4" );
}
This prints- "default" and "3". It first goes over all cases, if none match, it starts executing from case default. Here the default case did not have a break; statment, so there was fall through.

4.6)Mixed environment javascript
ECMAscript is the real name of the language. (follows the ECMA spec)
JavaScript is basically the browser implementation of the spec.

Host object: Variables that are auto-defined, created and provided to JS by the environment that hosts your code.
In general the behaviour of these host object is not pure JS
Browser: Document, Window, Console
NodeJS: Global, Console

Global DOM variables in old browsers
creating DOM elements with id attributes creates global variables of those same names
	<div id="foo"></div>  create a global var foo! foo is now the dom DIV node

Never extend the Natives
Array.prototype.push = function(item) {
	this[this.length] = item;
};
The problem, there could be other code in the environment that are depending on natives or have also created their own natives.

Pollyfill/Shim
Writing built in functions in enviroments that don't have them defined

The spec has reserved words and future reserved words. You should not use both.

Limits in JS:
number of characters allowed in a string literal
size (bytes) of data that can be sent in arguments to a function call
number of parameters in a function declaration
maximum depth of non-optimized call stack
number of seconds a JS program can run continuously blocking the browser
maximum length allowed for a variable name
etc. etc. It's not very common at all to run into these limits, but limits do exist

JavaScript rarely runs in isolation. It runs in an environment mixed in with code from third-party libraries,
and sometimes it even runs in engines/environments that differ from those found in browsers.

----------------------------------------------------------------------------------------------------------------------------------------
Chapter 5: Aysnc & Performance
5.1)Asynchrony- Now and later
Time is an important axis in your program execution
In you whole .js file, only part of your program runs now, and another part of your program runs later in response to an event -- there's a gap between now and later where your program isn't actively executing.
Identify which chunks of code run now and which chunks functions/callback run later.

Common delays -
>waiting for user input,
>requesting data from a database or file system,
>sending data across the network and waiting for a response.
Your program has to manage state across the gap in time

Asynchrony: Chunks of code that run "later".
Standard Ajax requests don't complete synchronously. They are "non-blocking" calls.
You can force AJAX calls to be blocking, BUT you should never, ever do it, under any circumstances, because it locks the browser UI (buttons, menus, scrolling, etc.) and prevents any user interaction whatsoever.

Asynch console: since console is not part of JS spec, each JS enviroment has it's own implementation.
On some browsers, sometimes, console.log is async! because I/O is a very slow and blocking part of many programs (not just in JS). So sometimes it runs async in the background
the browser may feel it needs to defer the console I/O to the background, so the console.log(x) will happen some 1 second later (and that latest value of x will be used)
Note: If you run into this rare scenario, the best option is to use breakpoints in your JS debugger instead of relying on console output. And don't rely on consoleLogs.

Fact: the JS engine has no innate sense of time, but is instead an on-demand execution environment for any chunk of JS.
It's the surrounding environment (browser, server etc) that has always scheduled "events" (JS code executions).
Event Loop: It is a FIFO queue maintained by the host environment. The JS engine keeps pushing events (callbacks) on to the queue.
The host, in an infinite while loop, for each iteration (called "tick") pops off an event from the event loop and executes it.
At any given moment, only one event can be processed from the queue at a time. So JS is basically single threaded.
var eventLoop = [ ];
var event;
while (true) {   // keep going "forever"
	if (eventLoop.length > 0) {
		// perform a "tick"
		event = eventLoop.shift();             // get the next event in the queue
		try { event(); }                    //execute the next event
		catch (err) {  reportError(err); }
	}
}

Note: setTimeout() does'nt put your callback on the eventLoop immediately, only after the time delay, it puts it on the event loop and then in some subsequent "tick", the callback is popped off and executed.
This explains why setTimeout(..) timers may not fire with perfect temporal accuracy. (it fires after ATLEAST XYZ milliseconds)

User interaction, IO, and timers enqueue events on the event queue.
Your program is generally broken up into lots of small chunks, which happen one after the other in the event loop queue. And technically, other events not related directly to your program can be interleaved within the queue as well.
ES6 now specifies how the event loop works, which means technically it's within the purview of the JS engine, rather than just the hosting environment.

Parallel threading:
async is about the gap between now and later. But parallel is about things being able to occur simultaneously.
A process can have multiple threads in it. Processes and threads execute independently and may execute simultaneously on separate processors, or even separate computers, but multiple threads can share the memory of a single process.
An event loop, by contrast, breaks its work into tasks and executes them in serial, disallowing parallel access and changes to shared memory.

Non-deterministic: In multi-threading, different statements in different threads are interleaved, outcomes can be unpredictable especially if different threads are accessing the same memory/variables.
Run-to-completion: Once an event is popped and executed, it is executed till it finishes.

Concurrency: Even though events are running one after an other on the event loop, their parent task are kind of running in parallel.
Concurrency is when two or more chains of events interleave over time, such that from a high-level perspective, they appear to be running simultaneously (even though at any given moment only one event is being processed).
The single-threaded event loop is one expression of concurrency

Race condition: You don't know which one will run first.
Best way to identify race conditions: The JS debugger, using breakpoints and stepping through code line by line , don't depend on console.log()
var a, b;
function foo(x) {
	a = x * 2;
	baz();
}
function bar(y) {
	b = y * 2;
	baz();
}
function baz() {
	console.log(a + b);
}
ajax( "http://some.url.1", foo );  // ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.2", bar );
Here you don't know if foo/bar will run first. Here baz() is called twice, the first baz() won't work.

fixes-
>gate: check for all values, before doing something
function foo(x) {
	a = x * 2;
	if(a && b) baz();
}
function bar(y) {
	b = y * 2;
	if(a && b) baz();   //Now baz() is called only once, i.e when the second function foo/bar runs...
}

>latch: Execute only once (the first time)
function foo(x) {
	if (b === undefined){
		a = x * 2;
		baz();
	}
}
function bar(y) {
	if (a === undefined){    //Now baz() is called only once, i.e when the first function foo/bar runs...
		b = x / 2;
		baz();
	}
}

Cooperation: So JS has "run-to-completion", but that does'nt mean your eventLoop event takes a very long time to run. Your event must run in chunks and give back time for other events waiting in the queue.
Process Interleaving: Take a long-running "process" and break it up into steps or batches so that other concurrent "processes" have a chance to interleave their operations into the event loop queue.
function ajaxCallback(data) {
	res = res.concat( data.map(function(x){return x*2}) );   //it takes an array called data, double each value in the array and returns it
}
Now if this callback gets an array of size 10 million, this chunk of code will take a few seconds to run,
blocking the whole browser from working.(no other response(..) calls, no UI updates, scrolling, typing, button clicking)
to make a more cooperatively concurrent system, one that's friendlier and doesn't hog the event loop queue -
function ajaxCallback(data) {
	var chunk = data.splice(0,1000);   //take out the first 1000 from the array
	res = res.concat( chunk.map(function(x){return x*2}) );   //it takes an array called data, double each value in the array and returns it
	if (data.length > 0) {
		setTimeout( function(){
			response(data);   // async schedule next batch
		}, 0);                //just a dummy to place it on the event queue
	}
}
We ensure a short-running "process," even if that means many more subsequent "processes," as the interleaving onto the event loop queue will give us a much more responsive (performant) site/app.
setTimeout(..0) (hack) for async scheduling, basically means "stick this function at the end of the current event loop queue."

ES6 Jobs and Job Queue: Each TICK in the event loop has it's OWN JOB QUEUE
Certain async actions that occur during a tick of the event loop will not cause a whole new event to be added to the event loop queue, but will instead add an item (aka Job) to the end of the current tick's Job queue!!
It's kinda like saying, "oh, here's this other thing I need to do later, but make sure it happens right away before anything else can happen."
	metaphor- the event loop queue is like an amusement park ride, where once you finish the ride, you have to go to the back of the line to ride again. But the Job queue is like finishing the ride, but then cutting in line and getting right back on.
	A Job can also cause more Jobs to be added to the end of the same queue. So, it's theoretically possible that a Job "loop" (a Job that keeps adding another Job, etc.) could spin indefinitely, thus starving the program of the ability to move on to the NEXT event loop TICK.
	Promises are based on Jobs.

Compiler Statement Reordering
During compilation, the engine reorders your code to optimize it. 99% of the time it would not screw up the order of flow. But it still might screw it up (very rare)
It can introduce: race conditions, create side-effects etc. Just be aware.

5.2)Callbacks
callback: the function that is acting as a "callback," as it serves as the target for the event loop to "call back into" the program, whenever that item in the queue is processed.
Callback is the most fundamental async pattern in the language.

someAjaxCall(url,cb);   //this function definition is often owned by some third party
function someAjaxCall(u,f){
	do some big..
	big...
	big sync task.
	f();                //they call your function here
}

Humans cannot multi-task, you can only do one thing at a time. we fake multitasking by acting as fast context switchers.
Our brains work kinda like the event loop queue. It might only "appear" as if we are doing two things at at time.
Human brain think only synchornously. Aysync is not natural to us. So JS code with callbacks is a little tough to follow...

call-back hell-
listen( "click", function handler(evt){            cb1
	setTimeout( function request(){                     cb2
		ajax( "http://some.url.1", function response(text){  cb3
			if (text == "hello") {
				handler();
			}
			else if (text == "world") {
				request();
			}
		} );
	}, 500) ;
} );
Understanding the async flow in such callback-laden code is not impossible, but it's certainly not natural or easy, even with lots of practice.

Another example-
doA( function(){
	doB();
	doC( function(){
		doD();
	} )
	doE();
} );
doF();
If all these functions are async: the order of executions is A->F->B->C->E-D
If all these functions are sync: the order is A->B->C->D->E->F

Inversion of Control: One of the main drawbacks of callbacks.
You take part of your program and give over control of it's execution to another third party
someThirdPartyFunctionAjaxCall("..some.big...url", yourDefinedCallback);
You really depend on this func to work and work well. And somewhere inside this function they have to call your callback. What if they screw up in one of their function updates/releases and don't call your func. OR call it multiple times.

The callback pattern is just ancient.

>Split callbacks pattern -  (one for the success notification, one for the error notification)
ajax( "http://some.url.1", successFunc, failureFunc);
Note: This split-callback design is what the ES6 Promise API uses.

>Error-first callback pattern (NodeJS style) -
Only one call back is used, the first argument is reserved for an error object. The API will call your callback with the error object in an error scenario
If success, this argument will be empty/falsy (and any subsequent arguments will be the success data),
if an error result is being signaled, the first argument is set/truthy (and usually nothing else is passed):
function response(err,data) {  }
ajax( "http://some.url.1", response);

Issue with callbacks: unwanted repeated invocations of your callback. No real way to fix this. (use global flags or something)

Issue with callbacks - What if your the API fails and your callback is never called? Both the above patterns don't handle that.
function myCallback(err,data) { }
ajax("http://some.url.1", apifailProof(myCallback));   //myCallback must fire after 1000ms if the API does'nt call it in that time.

function apifailProof(f){
	var x = setTimeout(function(){
		//comes here only if 1000ms have passed and when the timeout is still valid
		x = null;
		f(new Error('time up'));
	},1000);

	return function(){
		// comes here only if the API is done and calls this returned function
		if (x != null){   //timeout has not happened yet
			clearTimeout(x);
			f.apply( this, [null].concat( [].slice.call(arguments) ) );
		}
	}
}

Issue with callbacks - callback is called too early
function callBack(data) {
	console.log(a);
}
var a = 0;
ajax( "..pre-cached-url..", result );
a++;
Now if ajax is not async, then callback will print 0
If ajax is async, the callback will print 1.
MAKE SURE every 3rd party ajax call you use is only ASYNC.. that way you can expect what the behaviour will be.

5.3)Promises               :Move all your code from legacy callback to promise pattern
No more inversion of control.
Instead of handing the continuation of our program to another party,
we expect it to immediately return us a capability to know when it's task finishes, and then our code could decide what to do next.

var x, y = 2;
console.log(x + y);
Here we are assuming that both x and y are already there (variables are already resolved) and we are just using them.
What if x and y are fetched async?

Task -  Add x and y, but if either of them isn't ready yet, just wait until they are. Add them as soon as you can.
this the given addFunc-
add(x,y) {
	let z = x + y;
	console.log(z);
}
You also have fetchX and fetchY

#solution1
function task (fX, fY, doSomething) {
	let x = fx();
	let y = fy();
	doSomething(x,y);
}
task(fetchX, fetchY, add);
The above won't work because fetchX() and fetchY() are async function, so you need to provide them callbacks,
Also you can't just add x + y, both x and y may not yet have values.

#solution2
function task (fx, fy, doSomething) {
	var x,y;
	fx(function(data){
		x = data;
		if(y !== undefined){ doSomething(x,y) }
	});
	fy(function(data){
		y = data;
		if(x !== undefined){ doSomething(x,y) }
	});
}
task(fetchX, fetchY, add);
This works because a sum is printed out only when both X and Y are there.
Now add() doesn't care whether x or y or both are available right away or not.
In other words, it normalizes the "now and later", such that we can rely on a predictable outcome of the add(..) operation.
You can just start calling task() wherever you want, you just pass it a doSomething() that assumes x and y are ready to use for you.

Promise syntax -   success-first callback pattern (unlike error-first call back pattern and split callback pattern)
p is a promise object that says, i will run the function you have defined right now and i promise to call the two callback args of this function at an appropriate later time. Meanwhile, you can store and define your callback funcs inside my .then() and .catch() hooks. I will call them later.
p is like a neutral third party between the creation code and the listening code.

p = new Promise(function(resolve,reject){
	// creation phase
	// do some big async task
	// do another huge async task
	a = 1 + 1;
	if(a == 2){
		resolve(4); //i.e now run all the THEN blocks with these args  (resolve and fulfill)
	} else{
		reject(10);  //i.e now run all the CATCH blocks with these args  (resolve and reject)
	}
});
console.log("this is outputted first");
p.then( function(x){console.log(x)} )
 .catch( function(y){console.log(y)} );
p.then(function(c){console.log(100+c)} );

There are two phases to a promise: creation and observation. Creation code chunk runs first, and it calls the observation chunk of the code later on.
Here the code inside promise runs first. And then everytime it hits the resolve() call, it executes every then() function out there.
So here it will print out x=4 and after that 104(100+c)
Everytime it hits the reject() call, it executes every catch() function.

a Promise's then(..) "registered observation callbacks" ROC are automatically scheduled when either resolve(..) or reject(..) are called by the Promise creation capability.
when a Promise is resolved, all then(..) registered callbacks on it will be called, in order, immediately at the next asynchronous opportunity.
If Promise creation code tries to call resolve(..) or reject(..) multiple times, or tries to call both, the Promise will accept only the first resolution, and will silently ignore any subsequent attempts.
If you call resolve() or reject() with multiple parameters, all subsequent parameters beyond the first will be silently ignored!! Use an object or an array if you really have to send multiple values.

You must provide a function callback that is synchronously/immediately executed. i.e "function(res,rej)".
	Second argument simply rejects the promise, but first arg can either fulfill the promise or reject it, depending on what is passed to it.
	If the First argument is passed an immediate, non-Promise, non-thenable value, then the promise is fulfilled with that value.
	But if First argument is passed a genuine Promise or thenable value, that value is unwrapped recursively, and whatever its final resolution/state is, will be adopted by the promise.

Each Promise instance has then() and catch() methods, which allow REGISTERING (LISTENING) of fulfillment and rejection handlers for the Promise.
Once the Promise is resolved, one or the other of these handlers will be called, but not both, and it will always be called asynchronously. (next tick)
then() takes one or two parameters, the first for the fulfillment callback, and the second for the rejection callback.
	If either is omitted or is otherwise passed as a non-function value, a default callback is substituted respectively.
	The default fulfillment callback simply passes the message along,
	while the default rejection callback simply rethrows (propagates) the error reason it receives.
catch() takes only the rejection callback as a parameter, it is equivalent to .then(null, errorCb)
then(..) and catch(..) also create and return a new promise, which can be used to express Promise chain flow control

Gate: Promise.all([p1,p2,p3]).then(function(x){  });
			this runs all three promises, and only after they all resolve and fulfill, then() is executed
			Here x is an array of the arguments of all the resolve() calls in p1,p2,p3
Latch: Promise.race([p1,p2,p3]).then(function(x){  });
			This one just wait for the first one among p1,p2,p3 to resolve and fulfill

Promises don't get rid of callbacks at all. They just change where the callback is passed to.
Instead of passing a callback to foo(..), we get something (hopefully a genuine Promise) back from foo(..), and we pass the callback to that something instead.
Completion Event-
foo(x) {
	// start doing something that could take a while
	return listener;
}
var evt = foo(42)
evt.on('completion', function(data){ } );
evt.on('error', function(err){ } );
We call foo(..) and then we set up two event listeners. foo(..) doesn't even appear to be aware that the calling code has subscribed to these events, which is GOOD.
	foo(..) expressly creates an event subscription capability to return back, and the calling code receives and registers the two event handlers against it.
	multiple separate parts of the code can be given the event listening capability, and they can all independently be notified of when foo(..) completes
	Essentially, this evt object is a neutral third-party negotiation between the separate concerns - foo and your listener functions

In a Promise-based approach, the previous snippet would have foo(..) creating and returning a Promise instance, and that promise would then be passed to bar(..) and baz(..).
The Promise resolution "events" we listen for aren't strictly JS events, and they're not typically called "completion" or "error".
Instead, we use then(..) to register a "then" event. Or perhaps more precisely, then(..) registers "fulfillment" and/or "rejection" event(s), though we don't see those terms used explicitly in the code.

What if x and y are fetched async, like below? Then you need promises -
function fetchX(){
	return new Promise(function(res,rej){
			var x = 0;
			setTimeout(function(){  //some big async task to fetch x
				x = 20;
				console.log('x has been fetched');
				res(x);
			},4000);
			console.log('fetching x');
	});
}
Same for fetchY(), y=30
Promise.all([fetchX(), fetchY()])
	.then(function(arrayOfResolveArgs){
			console.log('both x and y have been fetched')
			console.log('the sum is: ', arrayOfResolveArgs[0] + arrayOfResolveArgs[1]);   //the sum is: 20+30
	});

Make it more functional, create an add function that returns a promise (the one created by Promise.all())
function add(xPromise,yPromise) {
	return Promise.all([xPromise, yPromise]);
}
//basically add takes two promises and returns a promise of those two promises.
var t = add(fetchX(), fetchY());
t.then(function(arrayOfResolveArgs){  //comes here only when both promises are done and both the resolve(args) are given to you as an array over here
	console.log(arrayOfResolveArgs[0] + arrayOfResolveArgs[1]);  //this gives 50;
});

You can chain multiple "then"s and the RETURN value caries over from one to the other.
fetchX().then(function(a){return ++a}).then(function(a){return ++a}).then(function(a){return ++a})
.then(function(t){console.log(t)});
The first fetchX() gets 20, then it becomes 21,22,23 and then 23 is logged.
So if your then() function returns a value, that value will be carried over to the next then in the execution flow.

So you can even do this-
function add(xPromise,yPromise) {
	return Promise.all([xPromise, yPromise]).then( function(arrayOfResolveArgs){
		return arrayOfResolveArgs[0] + arrayOfResolveArgs[1];  // this is now passed to the then below....!!!
	} );
}
The above function returns a promise. But it is also split the then chain into two parts. So the promise returned here has a latest "then" value of arg[0]+arg[1]
add(fetchX(), fetchY()).then(function(sum){
	console.log(sum);
});

Once a Promise is resolved, it stays that way forever -- it becomes an immutable value at that point.
	It's now safe to pass that value around to any party and know for sure that it cannot be modified accidentally or maliciously.
	There can be multiple parties observing the resolution of a promise.
	An individual Promise behaves as a future value


Revealing Contructor pattern -
function foo(x) {
	//executes immediately
	return new Promise( function(resolve,reject){                 // construct and return a promise
		 //executes immediately
		 // start doing something async that could take a while
		 // eventually, call resolve() or reject()
	});
}
var p = foo(42);
bar(p);     //bar() is called regardless of whether foo() succeeds or fails
baz(p);
function bar(h) {
	h.then(
		function(data){  },
		function(err){  }
	);                          // listen for foo() to complete
}

Another way to do this-
var p = foo(42);
p.then(bar, errorBar);   //bar() only gets called if foo() succeeds
p.then(baz, oopsBaz);
function bar(data) {  }
function errorBar(e) {  }
Instead of passing the p promise to bar() and baz(), we use the promise to control when bar() and baz() will get executed, if ever.

In either approach, the promise p that comes back from foo() is used to control what happens next.

Apart from the future values and completion events, Promises get back trust.
>Call the callback too early
Not possible in promises, because even an immediately fulfilled Promise (like new Promise(function(resolve){ resolve(42); })) cannot be observed synchronously, i.e when you call then(..) on a Promise, even if that Promise was already resolved, the callback you provide to then(..) will always be called asynchronously. (on the next tick). No need to insert your own setTimeout(..,0) hacks

>Calling Too Late
p.then(function(){
	p.then(function(){
		console.log( "C" );
	});
	console.log( "A" );
});
p.then(function(){
	console.log( "B" );
});
// A B C  - "C" cannot interrupt and precede "B", by virtue of how Promises are defined to operate.

var p3 = new Promise(  function(resolve,reject){resolve("B");}  );
var p1 = new Promise(  function(resolve,reject){resolve(p3);}  );
var p2 = new Promise(  function(resolve,reject){resolve("A");}  );
p1.then( function(v){console.log(v);} );
p2.then( function(v){console.log(v);} );
// A B  <-- not  B A  as you might expect
P3 resolves first, then p2 and then p1.
The specified behavior is to "unwrap p3 into p1, but asynchronously". So in the next tick, is where p1.then() is called i.e p1 is resolved.

>Never calling the callback
whatever JS error happens either your resolve callback or reject callback WILL BE called.

>Callback is being called after toooo long
setup a timeoutPromise against your orignal promise in a race.
timeoutPromise(delay){
	return new Promise(function(res,rej){
		setTimeout(function(){rej('timeout!')}, delay);   //this promise resolved in delay ms. (i.e rejects)
	});
}
Promise.race(fetchX(), timeoutPromise(3000)).then(function(){ fetched in under 3000ms}).catch(x => console.log(x));    //either fetchX() failed or it took more than delay ms);
Essentially we can prevent fetchX() from hanging our program.

>Callback called too many times
Promises are defined so that they can only be resolved once. It will silently ignore extra resolve(), reject() calls in the creation code.
Any then(..) registered callbacks will only ever be called once (each).
Of course, if you register the same callback more than once, (e.g., p.then(f); p.then(f);), it'll be called as many times as it was registered.

Promises can have, at most, one resolution value (fulfillment or rejection). If you don't explicitly resolve with a value either way, the value is undefined.But whatever the value, it will always be passed to all registered (and appropriate: fulfillment or rejection) callbacks
If you call resolve() or reject() with multiple parameters, all subsequent parameters beyond the first will be silently ignored!! Use an object or an array if you really have to send multiple values.
Ofcourse the promise definition code follows the closure rules too, obviously.

>Errors
If at any point in the creation of a Promise, or in the observation of its resolution, a JS exception error occurs, such as a TypeError or ReferenceError,
that exception will be caught, and it will force the Promise in question to become rejected.

JS error during promise creation -
var p = new Promise(function(res,rej){
	foo.bar();	         // `foo` is not defined, so error!
	resolve( 42 );	     // never gets here :(
});
p.then(
	function fulfilled(){   // never gets here    },
	function rejected(err){    // TypeError exception object from the foo.bar() line.     }
);

JS error during promise observation -
var p = new Promise( function(resolve,reject){  resolve( 42 );  });
p.then(
	function fulfilled(msg){
		foo.bar();
		console.log( msg );	// never gets here
	},
	function rejected(err){  // never gets here either    }
);
So p.then() itself returns a promise. p.then().then() is where you can catch this foo.bar() error. The original promise was resolved and that status is immutable.
the exception from foo.bar() really did not get swallowed. In the second then(goo,err). err can be your error handler function.

>Trustable promise value returned - Promise.resolve()
	You call a foo() utility and you are not sure you can trust its return value to be a well-behaving Promise.
	If you pass a non-Promise, non-thenable value to Promise.resolve(..), you get a promise that's fulfilled with that value. It is like an identity function.
	If you pass a genuine Promise to Promise.resolve(..), you just get the same promise back
	var p1 = new Promise( function(resolve,reject){ resolve(42);} );
	var p2 = Promise.resolve(42);   //p1 and p2 are same
	var p3 = Promise.resolve(p1);   //p1,p2 and p3 are the same

var p = {
	then: function(cb,err) {
		cb(42);
		err('hacked');
	}
};                             //This p is a thenable, but it's not a genuine Promise! It could be malicious!
p.then(
	function fulfilled(val){ console.log(val); },     // this works OK, but only by good fortune
	function rejected(err){ console.log(err);  }      //malicious
);
Promise.resolve() will accept any thenable, and will unwrap it to its non-thenable value. Means, if you give it a thenable, it will not return a promise, but it will just return that thenable object back to you
Promise.resolve(p).then(
	function fulfilled(val){ console.log(val); },     // this works OK, but only by good fortune
	function rejected(err){ // never gets here  }     //this argument is ignored above, it take only cb
);
So for any third party utility, do
Promise.resolve(thirdPartAjax(42)).then( function(v){console.log(v);}  );

Promise.resolve() is async -
var f = Promise.resolve(42);
f.then(function(x){
    console.log(x)
});
console.log('done');   //first 'done' is printed and then after that 42.

Chain Flow: string multiple Promises together to represent a sequence of async steps
	Key concepts
	>Every time you call then(..) on a Promise, it creates and returns a new Promise, which we can chain with.
	>Whatever value you return from the then(..) call's fulfillment callback, (the first parameter) is automatically set as the fulfillment value of the chained Promise (from the first point).

var p = Promise.resolve(21);
p.then( function(v){return v*2;} ).then( function(v){console.log(v);} );  //42
Inside then(), when you do "return x", that means you have fulfilled that promise. using an immediate return statement, immediately fulfills the chained promise.
But this does not happen right away, only on the next tick, it is fullfilled.

var p = Promise.resolve( 21 );
p.then( function(v){
	console.log(v);
	return new Promise( function(resolve,reject){ resolve(v*2); });
}).then( function(v){console.log(v);} );
This will print 21,42. The second then is called when the resolve(v*2) is called
If your then() code explicitly returns a promise, then the promise automatically created by then() is ignored (actually the two promises are merged)

Basically a promise's resolve() func can take only one argument, and that argument is passed from one then() to the next.
p1 = fetchX();  //x is 20
p2 = fetchX();
p1.then( y => y*2 ).then( y => {console.log(y); return y;} ).then( y => y+2 );    //40 ,40, 42
p2.then( y => {console.log(y); return y;} ).then( y => y+2 );   //20,22
In the middle if you don't do return y; then undefined is passed to the next promise of then(). it will do undefined+2 = NaN

Delay chains -
function delay(time) {
	return new Promise( function(resolve,reject){
		setTimeout( resolve, time );
	} );
}
delay(100).then( function (){console.log("step 2 (after 100ms)"); return delay(200);} )
	      .then( function (){console.log( "step 3 (after another 200ms)" );} )
          .then( function (){console.log( "step 4 (next Job)" ); return delay(50);} )
          .then( function (){console.log( "step 5 (after another 50ms)" );} );
Calling delay(200) creates a promise that will fulfill after 200ms, and we return this promise from the first then() fulfillment callback immediately,
the second then()'s callback runs when that promise fulfills

Ajax Examples-
function request(url) {
	return new Promise( function(resolve,reject){
		ajax( url, resolve );
	});
}
request("http://some.url.1/").then( function(response1){return request( "http://some.url.2/?v=" + response1 );})
							 .then( function(response2){console.log(response2);} );
	Once response1 comes back, we use that value to construct a second URL, and make a second request(..) call.
	This is just not a flow of control, but we are able to pass messages from one step to another.
	An error/exception is on a per-Promise basis, which means, catch such an error at any point in the chain
	All of the above then() have only one arg sent to them i.e the resolve func. Set a second arg, which can be the reject func.
	request("http://some.url.1/").then( res,rej ).then( res,rej );
	your reject handler can still send a safe value to the next then()

Promises normalize asynchrony and encapsulate time-dependent value state, and that is what lets us chain them together in this useful way.

.then(null,function(err){ .. }) pattern --  only handling rejections (if any) but letting fulfillments pass through -- has a shortcut in the API: catch(function(err){ .. })

Resolve, Fulfill and Reject
When a promise is finished (resolved), it is in either fulfilled on rejected state.
var fulfilledPr = Promise.resolve(42);      //resolves a promise, but state could either be fulfilled or rejected (if value sent is thenable, described below)
var rejectedPr = Promise.reject("Oops");    //resolved a promise, state is definately rejected

var y = {
	then: function(resolved,rejected) {
			rejected( "Oops" );
	}
};
var p = Promise.resolve(y);
p.then(x => console.log(x),y => console.log(y));  //prints out "oops" i.e the promise finished but it is in the rejected state.

Promise.resolve(..) will return a received genuine Promise directly, or unwrap a received thenable.
If that thenable unwrapping reveals a rejected state, the Promise returned from Promise.resolve() is in fact in that same rejected state.

Promise.resolve() is a good, accurate name for the API method, because it can actually result in either fulfillment or rejection.
var rejectedPr = new Promise( function(resolve,reject){
	resolve( Promise.reject("oops") );  // resolve this promise with a rejected promise
} );
rejectedPr.then(
	function fulfilled(){  //never gets here  },
	function rejected(err){  console.log(err); }	// it comes here and prints "oops"
);

This is how you should name your cbs in then()
p.then(fulfilled,rejected);

Error Handling -
try..catch() works only for synchronous code
try {
	fetchX()
} catch{
	log the fetchX error;        //it will never come here because fetchX() is async
}
You can still put try..catch in your Promise creation code and either call rej() in your catch block.
return New Promise(res,rej){
	try{
		// do some big async task
		res() or rej() according to logic
	} catch {
		definitely rej()
	}
}

Promises use split callbacks, once the promise is resolved.
p1.then(fulfill,reject);
Now if your fullfill/reject code over here has an error, then only the next chained .then() can catch it. (p1 is already resolved)

var p2 = new Promise(null);  //on the spot error, that try-catch can actually catch
If you use the Promise API in an invalid way and an error occurs that prevents proper Promise construction, the result will be an immediately thrown exception, not a rejected Promise.
If you don't have a second then(), then the error is lost!
Some devs end their .then() chains with a .catch(handleErrorsFunc)
If handleErrorsFunc also has an error, then by design it seems like the last step in any Promise chain, could be dangling with an uncaught error stuck inside an unobserved Promise.
No real fix for this right now.

Promise.all( [] );
all must resolve and fulfill. Or else the returned promise will be in a 'reject' state
	a "gate" (AND gate) is a mechanism that waits on two or more parallel/concurrent tasks to complete before continuing. It doesn't matter what order they finish in, just that all of them have to complete for the gate to open
	input: An array of promises. Technically, the array of values can include Promises, thenables, or even immediate values. Each value in the list is essentially passed through Promise.resolve(..) to make sure it's a genuine Promise to be waited on
	output: a promise which will receive a fulfillment message- an array of all the fulfillment messages from the passed in promises, in the same order as specified (regardless of fulfillment order).
	The main promise returned from Promise.all([ .. ]) will only be fulfilled if and when all its constituent promises are fulfilled. If any one of those promises instead is rejected, the main Promise.all([ .. ]) promise is immediately rejected, discarding all results from any other promises.
	note: each promise over here is fulfilled concurrently with the others (probably even interleaved with one an another!)
	Promise.all([]);  //this resolves immediately

Promice.race( [] );
	the first one that resolves is returned. It could be in either state fulfill/reject
	a "latch" (OR gate) is a mechanism that waits for atleast one to come through. i.e the fist one.
	input and output are same as promise.all (it will getback only one message in the output)
	Promise.race([]);  //this will never resolve (so it is neither rejected nor fulfillled, it just never resolves)
	The promises that came second or more are garbage collected.
	In ES7, they will probably let you add a p.finally() to let you undo any side effects your failed promise might have done. Right now you can't undo it.

var p1 = Promise.resolve( 42 );
var p2 = Promise.resolve( "Hello World" );
var p3 = Promise.reject( "Oops" );
Promise.race( [p1,p2,p3] ).then( function(msg){console.log(msg);} );      // 42
Promise.all( [p1,p2,p3] ).catch( function(err){console.error(err);} );	  // "Oops"
Promise.all( [p1,p2] ).then( function(msgs){console.log(msgs); });	     // [42,"Hello World"]

There are other non-native promise APIs created like Promise.first(), Promise.last(), Promise.any(), Promise.none() etc

You can even implement a Promise.Map()
Promise.map = function(vals,cb) {
	return Promise.all(vals.map(function(val){
		return new Promise( function(resolve){cb(val,resolve);} );
		} )
	);
};
var p1 = Promise.resolve( 21 );
var p2 = Promise.resolve( 42 );
var p3 = Promise.reject( "Oops" );
Promise.map( [p1,p2,p3], function(pr,done){
	Promise.resolve(pr).then(
		function(v){
		    done(v*2);
		}
	);
}).then( function(vals){console.log(vals);} );  // [42,84,"Oops"]

API Syntax
Shortcut to create an already rejected promise
var p2 = Promise.reject( "Oops" );
var p1 = new Promise( function(resolve,reject){
	reject( "Oops" );
});
p1 and p2 are the same

var fulfilledTh = {
	then: function(cb) {cb(42);}
};
var rejectedTh = {
	then: function(cb,errCb) {errCb("Oops");}
};
var p1 = Promise.resolve(fulfilledTh);  //p1 will be a resolved fulfilled promise
var p2 = Promise.resolve(rejectedTh);    //p2 will be a resolved rejected promise

Limitations of Promises
>Chain error handling
If you construct a Promise chain that has no error handling in it, any error anywhere in the chain will propagate indefinitely down the chain, until observed (by registering a rejection handler at some step).
var p = foo(42).then( STEP2 ).then( STEP3 );   //P actually refers to the last promise in the chain
p.catch( handleErrors );

>Single Value
Promises by definition only have a single fulfillment value or a single rejection reason.
What does this output?
function getY(x) {
	return new Promise( function(resolve,reject){
		setTimeout( function(){
			resolve( (3 * x) - 1 );
		}, 100 );
	} );
}
function foo(bar,baz) {
	var x = bar * baz;
	return getY(x).then( function(y){return [x,y];} );  //you are returning a promise, since you can return only one fulfillment value, you are sending back an array[x,y]
}
foo(10,20).then( function(msgs){
	var x = msgs[0];
	var y = msgs[1];
	console.log(x,y);
});
It prints out 200 599

>Single Resolution: Promise can only be resolved once (fulfillment or rejection)
>Inertia : A lot of your code already uses callBacks() so switching to Promises is a huge task
>Promise Cancellation: Once you hookup a .then(), you can't unhook it.  (register a fulfillment and/or rejection handler for it)
>Performance: Promises are slower as compared to naked, untrustable callbacks. It is difficult to say by how much. Promises make everything async, which means that some immediately (synchronously) complete steps still defer advancement of the next step to a Job/tick

Promises don't get rid of callbacks, they just redirect the orchestration of those callbacks to a trustable intermediary mechanism that sits between us and another utility.

5.4)Generators
Run-to-Completion - once a function starts executing, it runs until it completes, and no other code can interrupt and run in between.
not true anymore, ES6 introduces a new kind of function. "starred functions" a.k.a generators
A generator is a special kind of function that can start and stop one or more times, and doesn't necessarily ever have to finish

var x = 1;
function *foo() {
	x++;
	yield;      // pause!!
	console.log( "x is ", x );
}
function bar() { x++; }

var it = foo();     //this does'nt execute foo, but merely returns an iterator that will control this generator's execution
it.next();          //this starts the foo() func, x is now 2.
bar();              //x now becomes 3
it.next();		      // logs- 'x is 3'

.next(), instructs the generator to advance from its current location, stopping either at the next yield or end of the generator.
The result of .next() call is an object:
	{
		value: any yeild value or func return value,
		done: true/false
	}

The generator has the sole capability to pause itself, via the yield keyword.
The iterator that controls the generator has the sole capability (via next(..)) to resume the generator.
In general, you're going to have one more next(..) call than you have yield statements.

Iteration messaging :  built-in input/output messaging capability via yield and next()
A "yeild" can send out a value (default value is undefined).
It then WAITS for a new value from any next(data) call. (again here default value is undefined).

function *foo(x) {
	var y = x * (yield "Hello");	// <-- yield a value!
	return y;
}
var it = foo(6);       //you specify the function arguments over here when creating the iterator
var res = it.next();	 // first next(), NEVER need to pass anything. It starts the func, it sees yield, so it is now waiting for the next .next() call
res.value;				     // "Hello"
res = it.next( 7 );		 // this sends 7 to the generator, which replaces yield with 7 and continues execution
res.value;	           //42
yield .. and next(..) pair together as a two-way message passing system during the execution of the generator.

Multiple iterators
Each time you construct an iterator, you are implicitly constructing an instance of the generator which that iterator will control. And these iterators can even interact.
function *foo() {
	var x = yield 2;
	z++;
	var y = yield (x * z);
	console.log( x, y, z );
}
var z = 1;
var it1 = foo();
var it2 = foo();
var val1 = it1.next().value;			// 2 <-- yield 2
var val2 = it2.next().value;			// 2 <-- yield 2
val1 = it1.next( val2 * 10 ).value;		// 40  <-- x:20,  z:2
val2 = it2.next( val1 * 5 ).value;		// 600 <-- x:200, z:3
it1.next( val2 / 2 );					// y:300 (20, 300, 3)
it2.next( val1 / 4 );					// y:10  (200, 10, 3)

Interleaving generators -
var a = 1;
var b = 2;
function *foo() {
	a++;
	yield;
	b = b * a;
	a = (yield b) + 3;
}
function *bar() {
	b--;
	yield;
	a = (yield 8) + b;
	b = a * (yield 2);    //it will do [b = a * ] and the yield... so a is now locked with it's current value (even if a is updated somewhere else, this a is locked)
}
function step(g){
	var it = g();
	var last;
	return function(){                //closure over last,it
		last = it.next(last).value;     //the previously yielded out value is sent right back in, at the next step.
	}
}
var s1 = step(foo);
var s2 = step(bar);
s2();
s2();
s1();
s2();
s1();
s1();
s2();
console.log(a,b);
a and b are twelve and eighteen
Note: in *bar(): b = (yield 2) * a; gives a=12,b=24 AND b = a * (yield 2); gives a=12,b=18.

Iterators
Every "iterable" object will have a [Symbol.iterator] property, which is a function that should return this object's itertator.
An iterator gives you values of the object, ONE AT A TIME.
var a = [1,3,5,7,9];
var it = a[Symbol.iterator]();
it.next().value;	// 1
it.next().value;	// 2

The [ .. ] syntax is called a "computed property name". In an object literal definition, you can specify an expression and use the result of that expression as the name for the property. "Symbol.iterator" is one of ES6's predefined special Symbol values

The ES6 for..of loop -
It asks for the object's iterator, and automatically uses it to iterate over object's values.
var a = [1,3,5,7,9];
for (var v of a) {console.log(v);}
for (var v of anyObjectOutThere) {console.log(v);}
for (var keys of Object.keys(myObj)) {     }        //Object.keys(..) does not include properties from the [[Prototype]] chain
for (var keys in myObj) {  }                        //but this one includes all properties, including the ones from prototype chain

Manually loop over iterables -
var it = myObject[Symbol.iterator]();
for(var ret=it.next(); ret.done!==false; ){
	use ret object here
}

Simple counter -
var counter = (function(){
	var x = 1;
	return {
		next: function(){           // standard iterator interface method
			x++;
			return { done:false, value:x };
		},
		[Symbol.iterator]: function(){
			return this;    //this=counter
		}
	};
})();
counter.next().value;		// 1
counter.next().value;		// 2
counter.next().value;		// 3
counter.next().value;		// 4

for(var ret; ret = something.next(); ){
	if(ret.value < 100) console.log(ret.value);
	else break;
}

Generators and Iterators
When you execute the generator, you get an iterator back. The generator itself is not an iterable.
var it = foo();       //the iterator 'it' of a generator is an iterable.
function *foo(){
	var x = 0;
	while (true){
		yield x++;       //the generator pauses at each yield, the state (scope) of the function *something() is kept around (closure)
	}
}
for (var v of it) {    //for..of needs an iterator, "it" is an iterable! it has a Symbol.iterator function on it.
	console.log(v);
	if (v > 100) {
		break;
	}
}
it.next(); //this will not give 101, 102 etc.
Here it would seem as if the iterator instance of the for..of loop for the *foo() generator was basically left in a suspended state forever. But is the iterator terminated? Yes it is.
Yes, the iterator is set to {done:true} at the end of the loop.

Stopping the generator
The for..of loop always sends a signal to the generator iterator at the normal completion of the loop. (essentially moot, as the generator's iterator had to complete first so the for..of loop completed.)
In abnormal completion (return,break,exception etc), the for..of loop sends a signal to the generator's iterator for it to terminate.

Manually send a signal with the return() in the for..of loop
function *foo(){
	try{
		var x = 0;
		while (true){
			yield x++;
		}
	} finally {
		//the break in previous for.of loop will come here
		console.log( "end of the generator" );   //the finally block will always run when the generator is terminated (clean up resources (database connections, etc.))
	}
}
var it = foo();
for (var v of it) {
	console.log(v);
	if (v > 500) {
		console.log(it.return( "Hello World" ).value);  //this return will trigger the finally block, value:hello world
		// no break needed here
		//the generator's iterator is set to done:true
	}
}
it.next();  //nothing is printed out, the iterator was finished in the for..of loop. It gives you {done:true}

Generators AND Asynchrony
Usual callback way:
function foo(x,y,cb) {
	ajax("http://some.url.1/?x="+x+"&y="+y, cb);
}
foo(11,31,function(err,text) {
	if (err) {console.error(err);}
	else {console.log(text);}
});

Generator way-
var it = main();
function foo(x,y) {
	ajax("http://some.url.1/?x="+x+"&y="+y,
			function(err,data){
			if (err) {it.throw(err)}  // throw an error into *main()
			else {it.next(data)}      // resume *main() with received data
			}
	);
}
function *main() {
	try {
		var text = yield foo(11,31);  //this means run foo() and then yield with that value. foo being async, returns undefined immediately. SO that is yielded
		console.log(text);
	}
	catch (err) {console.error(err);}
}
it.next();    // start it all up!
After this line, it is stuck at yield undefined.
then the ajax() completes and calls either  it.throw(err) or  it.next(data)  yield=data in this case, so text=data.
yield lets the assignment statement pause to wait for foo(..) to finish, so that the completed response can be assigned to text.
we can also synchronously catch errors from those async function calls!

The code in the generator looks totally synchronous. This is HUGE.
In essence, we are abstracting the asynchrony away as an implementation detail, so that we can reason synchronously/sequentially about our flow control:
	"Make an Ajax request, and when it finishes print out the response."
There is no .then() and all over here.

Normally this kind of synchronous code does not work -
var data = ajax(url1);
console.log(data); //undefined
But now we have "synchronous" looking code that works!
var text = yield foo(11,31);
console.log(text);

Generators AND Promises
The best of all worlds in ES6 is to combine generators (synchronous-looking async code) with Promises (trustable and composable).

Usual promise way-
function foo(x,y) {
	return new Promise(res,rej){
		ajax("http://some.url.1/?x="+x+"&y="+y, function(rej,res){
			if(sucess) res(data)
			else rej(err)
		});
		console.log('fetching begins');
}
foo(11,31).then(
	function(text){console.log(text);},
	function(err){console.error(err);}
);

The natural way to get the most out of Promises and generators is to yield a Promise, and wire that Promise to control the generator's iterator.
function *main() {
	try {
		var text = yield foo(11,31);   //foo is the same as above, returns a promise
		console.log(text);
	}
	catch (err) {
		console.error(err);
	}
}
it = main();
p = it.next()value;     //start it up. So now it stops at the yield part, it immediately yielded a promise.
p.then(function(msg){   //this executes whenever res() is run inside ajax(), data is passed to msg
	it.next(msg);       //pass msg to text
}.catch(function(err)){
	it.throw(err);
}

This is such an important pattern, and you don't want to get it wrong - generators yielding Promises that then control the generator's iterator to advance it to completion.
Use a utility that is specifically designed to run Promise-yielding generators in the manner we've illustrated.
Promise-Aware Generator Runner -- lookup this code in the book later

ES7: async-await codifies the pattern above, into a syntactic mechanism. (not yet released)
async function main() {
	try {
		var text = await foo(11,31);
		console.log( text );
	}
	catch (err) {
		console.error( err );
	}
}
main();
It is not a generator function anymore, it is an async function. A new kind of function.

Promise Concurrency in Generators
Imagine a scenario where you need to fetch data from two different sources, then combine those responses to make a third request, and finally print out the last response.
function *foo() {
	var r1 = yield request("http://some.url.1");
	var r2 = yield request("http://some.url.2");
    var r3 = yield request("http://some.url.3/?v=" + r1 + "," + r2);
	console.log( r3 );
}
Here r1 and r2 run sequentially instead of concurrently
Simple fix -
var p1 = request("http://some.url.1");
var p2 = request("http://some.url.2");
var r1 = yield p1;   // wait until both promises resolve (acts like a gate)
var r2 = yield p2;   //(acts like a gate)
r3 = yield request( "http://some.url.3/?v=" + r1 + "," + r2);

which is the same as
var results = yield Promise.all( [
		request("http://some.url.1"),
		request("http://some.url.2")
	] );
var r1 = results[0];
var r2 = results[1];
r3 = yield request( "http://some.url.3/?v=" + r1 + "," + r2);

The whole point of using generators for asynchrony in the way we've described is to create simple, sequential, sync-looking code, and to hide as much of the details of asynchrony away from that code as possible.

Generator Delegation (a.k.a yield-delegation)  "yield *"
function *foo() {
	console.log( "*foo() starting" );
	yield 3;
	yield 4;
	console.log( "*foo() finished" );
}
function *bar() {
	yield 1;
	yield 2;
	yield *foo();	// yield-delegation!
	yield 5;
}
var it = bar();
it.next().value;	// 1
it.next().value;	// 2
it.next().value;	// "*foo() starting"
					// it gives back 3
it.next().value;	// 4
it.next().value;	// `*foo()` finished
					// it gives back 5
Calling foo() creates an iterator. Then, yield * delegates/transfers the iterator instance control (of the present *bar() generator) over to this new other *foo() iterator.
*bar() delegated its iteration control to *foo()
the first two it.next() calls are controlling *bar(), the next one is controlling *foo(), it starts foo() immediately and runs till its first yield.
When "it" iterator control exhausts the entire *foo() iterator, it automatically returns to controlling *bar().
yield * is a syntactic shortcut for manually iterating over the steps of *foo() while inside of *bar().

So trying to run 3 sequential operations -
function *foo() {
	var r2 = yield request( "http://some.url.2" );
	var r3 = yield request( "http://some.url.3/?v=" + r2 );
	return r3;
}
function *bar() {
	var r1 = yield request( "http://some.url.1" );
	var r3 = yield *foo();    //yield delegation :  you're now yield-delegating to foo's iterator  (r3 returned by foo)
	console.log( r3 );
}
run(bar);


Delegating Messages
function *foo() {
	console.log( "inside *foo():", yield "B" );
	console.log( "inside *foo():", yield "C" );
	return "D";
}
function *bar() {
	console.log( "inside *bar():", yield "A" );
	console.log( "inside *bar():", yield *foo() );
	console.log( "inside *bar():", yield "E" );
	return "F";
}
var it = bar();
console.log( "outside:", it.next().value );      // outside: A
console.log( "outside:", it.next(1).value );   // inside *bar(): 1       // outside: B
console.log( "outside:", it.next(2).value );   // inside `*foo()`: 2     // outside: C
console.log( "outside:", it.next(3).value );   // inside `*foo()`: 3     // inside `*bar()`: D   // outside: E
console.log( "outside:", it.next(4).value );   // inside `*bar()`: 4     // outside: F
Make sure you understood the above outputs

Yield-delegation can just be directed to a non-generator, general iterable (doesn't even have to be directed to another generator always)
function *bar() {
	console.log( "inside *bar():", yield "A" );
	console.log( "inside *bar():", yield *["B","C","D"] );
	console.log( "inside *bar():", yield "E" );
	return "F";
}
var it = bar();
console.log( "outside:", it.next().value );      // outside: A
console.log( "outside:", it.next(1).value );   // inside *bar(): 1     // outside: B
console.log( "outside:", it.next(2).value );   // outside: C
console.log( "outside:", it.next(3).value );   // outside: D
console.log( "outside:", it.next(4).value );   // inside *bar(): undefined    // outside: E
console.log( "outside:", it.next(5).value );   // inside `*bar()`: 5         // outside: F
the default array iterator doesn't care about any messages sent in via next(..) calls, so the values 2, 3, and 4 are essentially ignored.
Also, because that iterator has no explicit return value (unlike the previously used *foo()), the yield * expression gets an undefined when it finishes.

Even exceptions can be delegated
function *foo() {
	try {
		yield "B";
	}
	catch (err) {
		console.log( "error caught inside *foo():", err );
	}
	yield "C";
	throw "D";
}
function *bar() {
	yield "A";
	try {
		yield *foo();
	}
	catch (err) {
		console.log( "error caught inside `*bar()`:", err );
	}
	yield "E";
	yield *baz();
	yield "G";   // note: can't get here!
}
function *baz() {
	throw "F";
}
var it = bar();
console.log( "outside:", it.next().value );     // outside: A
console.log( "outside:", it.next(1).value );    // outside: B
console.log( "outside:", it.throw(2).value );   // error caught inside *foo(): 2       // outside: C
console.log( "outside:", it.next(3).value );    // error caught inside `*bar()`: D     // outside: E
try {
	console.log( "outside:", it.next(4).value );
}
catch (err) {
	console.log( "error caught outside:", err );   // error caught outside: F
}

Delegating Recursion
try to undestand this -
function *foo(val) {
	if (val > 1) {
		val = yield *foo(val - 1);      // generator recursion
	}
	return yield request( "http://some.url/?v=" + val );
}
function *bar() {
	var r1 = yield *foo(3);
	console.log( r1 );
}
run(bar);
description is in the book.


Generator Concurrency -
var res = [];
function *reqData(url) {
	res.push( yield request(url) );     // request() is a promise aware utility
}
var it1 = reqData( "http://some.url.1" );
var it2 = reqData( "http://some.url.2" );
var p1 = it1.next().value;   //it starts up reqData(), it runs request() which immediately returns a promise and that is what is yielded right away
var p2 = it2.next().value;
p1.then( function(data){
	it1.next(data);    //when the promise p1 resolves,resume reqData which now does the push of 'data' into res (you are passing a message data into reqData)
	return p2;         //required for the next then()
}).then( function(data){
	it2.next(data);   //when the promise p1 resolves, resume reqData which now does the push of 'data' into res (you are passing a message data into reqData)
} );
//Now res[0] is p1's data, res[1] is p2's data


Another way of doing the above:
var res = [];
function *reqData(url) {
	var data = yield request( url );
	yield;
	res.push( data );
}
var it1 = reqData( "http://some.url.1" );
var it2 = reqData( "http://some.url.2" );
var p1 = it1.next().value;
var p2 = it2.next().value;
p1.then( function(data){
	it1.next( data );
} );
p2.then( function(data){
	it2.next( data );
} );
Promise.all( [p1,p2] )
.then( function(){
	it1.next();
	it2.next();
} );
now the two instances of *reqData(..) run truly concurrently, and (at least for the first part) independently.
In the previous snippet, the second instance was not given its data until after the first instance was totally finished. But here, both instances receive their data as soon as their respective responses come back,
and then each instance does another yield for control transfer purposes.

Thunks
Till now, the approach was: yielding a Promise from a generator -- and having that Promise resume the generator. The trick is that we essentially hide potential asynchrony behind the yield keyword -- moving the asynchrony to the code where the generator's iterator is controlled.
There is another pattern. thunk: a function that -- without any parameters -- is wired to call another function

Synchronous thunk:
function foo(x,y) {
	return x + y;
}
function fooThunk() {   -> This is a thunk on foo
	return foo(3,4);
}
console.log( fooThunk() );	// 7

Asynchronous thunk:
function foo(x,y,cb) {
	setTimeout( function(){
		cb(x + y);
	}, 1000 );
}
function fooThunk(cb) {
	foo(3,4,cb );
}
fooThunk( function(sum){
	console.log(sum);		// 7
});

Invent a utility that does this wrapping-
function thunkify(fn) {
	var args = [].slice.call(arguments,1);     //so seconds and third arguments go into args
	return function(cb) {
		args.push(cb);          //it now becomes x,y,cb
		return fn.apply(null,args);
	};
}
var fooThunk = thunkify(foo,3,4);
fooThunk( function(s) {     //give the callback
	console.log(s);
});

Make a thunk factory! "thunkory". A function that returns a thunk maker for a given func
function thonkory(fn){
	return function(){
		var args = [].slice.call(arguments);   //get x,y
		return function(cb) {
			args.push(cb);    //make it x,y,cb
			return fn.apply( null, args );
		};
	}
}
var fooThunkory = thunkory(foo);
var fooThunk1 = fooThunkory(3,4);
var fooThunk2 = fooThunkory(10,20);
fooThunk1( function(s) {     //give the callback
	console.log(s);
});

Promises and thunks have one thing in common: a request for a value, which may be async in its answering.
Read about promisories (promise factories) (similar to thunkories)

Writing a generator in ES5
generators were introduced in ES6, but is possible to write them in ES5 too (very ugly though)
function *foo(url) {
	try {
		console.log( "requesting:", url );
		var val = yield request(url);
		console.log(val);
	}
	catch (err) {
		console.log("Oops:", err);
		return false;
	}
}
var it = foo("http://some.url.1");

Now lets try to implment it in phases
function foo(){
	// do something
	return {
		next: function(v){},
		throw: function(e){}
	};
}

rewriting the *foo() to mark all the states
function *foo(url) {
	// STATE *1*
	try {
		console.log( "requesting:", url );
		var TMP1 = request(url);
		// STATE *2*
		var val = yield TMP1;
		console.log( val );
	}
	catch (err) {
		// STATE *3*
		console.log( "Oops:", err );
		return false;
	}
}

back to implementation
function foo(url) {
	var state;    // manage generator state
    var val;      // generator-wide variable declarations
	function process(v) {
		switch (state) {
			case 1:
				console.log( "requesting:", url );
				return request( url );
			case 2:
				val = v;
				console.log( val );
				return;
			case 3:
				var err = v;
				console.log( "Oops:", err );
				return false;
		}
	}
	// make and return an iterator
	return {
		next: function(v) {
				if (!state) {                   // initial state
					state = 1;
					return {
						done: false,
						value: process()
					};
				} else if (state == 1) {      // yield resumed successfully
					state = 2;
					return {
						done: true,
						value: process( v )
					};
				} else {                    // generator already completed
					return {
						done: true,
						value: undefined
					};
				}
		},
		throw: function(e) {
				if (state == 1) {	// state *1* // the only explicit error handling is in
					state = 3;
					return {
						done: true,
						value: process( e )
					};
				} else {           // otherwise, an error won't be handled, so just throw it right back out
					throw e;
				}
			}
	};
}
process(..) will be called each time we need to process a new state.
The first call to the iterator's next() call would move the generator from the uninitialized state to state 1, and then call process() to handle that state. The return value from request(..), which is the promise for the Ajax response, is returned back as the value property from the next() call.
So we've effectively manually "transpiled" our ES6 generator to pre-ES6 compatibility!
Folks at facebook created a generator transpile that works for any kind of generetor. (https://facebook.github.io/regenerator/)
Generators are so much better at expressing async flow control in a reason-able, sensible, synchronous-looking, sequential fashion.

5.5)Program Performance :    performance at the macro program architecture level
Two kinds of asynchrony:
serial - You make the first request and wait to start the second request until the first finishes.
concurrent - make both requests "in parallel," and express the "gate" to wait on both of them before moving on.
the latter is usually going to be more performant than the former.
Anyway, async behavior only gets you so far, because it's still fundamentally bound to a single event loop thread.

It's even possible that asynchrony (interleaved concurrency) can improve just the perception of performance, even if the overall program still takes the same amount of time to complete.
User perception of performance is every bit -- if not more! -- as important as actual measurable performance.

JavaScript is single threaded. Period. But a single thread isn't the only way to organize the execution of your program.
Iframes do not provide a parallel environment, in all modern browsers they run on the same thread as the main page

Web Worker: a feature of the browser (aka host environment), has nothing to do with JS language itself.
Browser provides multiple instances of the JavaScript engine, each on its own thread, and let you run a different program in each thread.
Each of those separate threaded pieces of your program is called a "(Web) Worker."
This type of parallelism is called "task parallelism," as the emphasis is on splitting up chunks of your program to run in parallel.
offloading long-running or resource-intensive tasks to a different thread, leaving the main UI thread more responsive.
Web Workers are very attractive performance-wise for running JS programs in parallel.

var w1 = new Worker( "http://some.url.1/mycoolworker.js" );  //From your main JS program (or another Worker), you instantiate a Worker
URL has to be a js file. The browser will then spin up a separate thread and let that file run as an independent program in that thread.
Dedicated Worker: link to an external file like the above
Inline Worker: providing a blob url.

Workers do not share any scope or resources with each other or the main program -- that would bring all the nightmares of threaded programming to the forefront, but instead have a basic event messaging mechanism connecting them.
w1.addEventListener("message", function(evt){  //main program is listening to a 'message' event FROM THE worker
	// evt.data
});
w1.postMessage( "something cool to say" );  //main program is sending the message event TO THE w1 worker
Inside the worker, you will have similar code - one eventListener for message, and one postMessage() call.

Usually the main page application creates the Workers, but a Worker can instantiate its own child Worker(s) -- known as subworkers (possible on firefox, not chrome)
w1.terminate();  //Terminates a Worker thread, does not give it any chance to finish up its work or clean up any resources. It's akin to you closing a browser tab to kill a page.

Browser: The browser system is free to decide how many actual threads/CPUs/cores it really wants to create. There's no way to predict or guarantee how many you'll have access to,though many people assume it's at least as many as the number of CPUs/cores available.
Safest assumption is that there's at least one other thread besides the main UI thread, but that's about it.
Inside the Worker: cannot access main program's resources  (any of its global vars, page's DOM). It is a totally seperate thread.
Worker has access to its own copy of: location, navigator, applicationCache

importScripts( "foo.js", "bar.js" ); // inside the Worker you can load extra JS scripts into your worker. This is synchronous (blocking) loading.

Use cases for web workers -
Processing intensive math calculations
Sorting large data sets
Data operations (compression, audio analysis, image pixel manipulations, etc.)
High-traffic network communications

Shared Worker: If the same page is opened on mutilple tabs, your main program need not create multiple web workers for each tab, You make it create only one shared worker for all tabs.
var w1 = new SharedWorker( "http://some.url.1/mycoolworker.js" );
The port object of the worker identifies which main program called it (which tab)
w1.port.start();  // initialize the port for this tab.
w1.port.addEventListener( "message", handleMessages );
w1.port.postMessage( "something cool" );

SIMD: Single instruction, multiple data (SIMD) is a form of "data parallelism," as contrasted to "task parallelism" with Web Workers,
because the emphasis is not really on program logic chunks being parallelized, but rather multiple bits of data being processed in parallel.
SIMD proposes to map CPU-level parallel math operations to JavaScript APIs for high-performance data-parallel operations, like number processing on large data sets.

asm.js: a label for a highly optimizable subset of the JavaScript language.
By carefully avoiding certain mechanisms and patterns that are hard to optimize (garbage collection, coercion, etc.), asm.js-styled code can be recognized by the JS engine and given special attention with aggressive low-level optimizations.
One of the biggest detractors to performance in JS is around memory allocation, garbage collection, and scope access and asm.js optimizes this.
asm.js describes a small subset of JavaScript that avoids the hard-to-optimize parts of JS and lets the JS engine recognize and run such code through aggressive optimizations.
asm.js could be hand authored, but that's extremely tedious and error prone

5.6)Benchmarking and tuning  :   performance at the micro level, focusing on single expressions/statements.
How to test performance of a code block?
var start = Date.now();
// do some operation
var end = (new Date()).getTime();
console.log( "Duration:", (end - start) );

Example: which is faster? arr.push(x);  arr[arr.length]=x;  arr[i]=x

Nope, very wrong way.
>Most operation will be in under 0 milliseconds, so this is not precise enough.
>Some browsers, update the timer in larger increments. Only once very 15ms or so. (platforms don't have single millisecond precision)
>the engine or system had some sort of interference at that exact moment. It might be actually faster or slower, you don't know.
>It's possible that the JS engine figured out a way to optimize your isolated test case. But in the actual big program, it won't optimize it the same way.

Repetition: Put your program in a loop to run 100 times. Get the total time, divide it by 100. Done.

Avg is a bad metric, outliers skew it.
Any relevant and reliable benchmark should be based on statistically sound practices: standard deviation, variance, margin of error.

benchmarkjs.com - just use it, save yourself from learning statistics
it handles all of the complexities of setting up a fair, reliable, and valid performance benchmark for a given piece of JavaScript code.

Note that the human eye isn't generally capable of distinguishing anything less than 100ms. So if X is 10ms slower than Y. Don't worry about it.

JS Engine: You need to know how the JS engine is optimiziing your code, before it executes it. It could optimize X differently from Y.
Hence comparing the performance of X and Y is not always concrete.
If the engine realizes you are running your code 1 million times in the test, it will optimze it differently from when the code runs only once in your actual program..
YOU really don't know for sure exactly what's going on under the covers.
testing 'not real' code gives you 'not real' results.
JS engines differ in different browsers and browser versions. The job of the engine it to stay up to date with the JS Spec, but it can optimize code however it wants.

jsPerf.com
Tests your code on multiple browsers, devices. Chrome on 100% battery is different from chrome on 2% battery!
They use benchmarkJs under the hood.

Make sure you are comparing apples to apples. But be careful about how you author tests.
// Case 1
var x = false;
var y = x ? 1 : 2;

// Case 2
var x;
var y = x ? 1 : 2;

here your intent is to compare the coercion in the ?:, i.e undefined to true/false.
But case 1 is doing more work, by doing in assignment in line1 and case2 has no assignment in it's line 1.
So to make it equal, make line1 in case2 as -  var x = undefined; Now you are comparing the same things.

Compiler
The code you write is not always the code the engine actually runs. Compiler will rearrange your code to make scoop lookups in different blocks run faster.
It may convert your recursive code into a loop code, and run it as a loop. (while you were wasting time on tuning your recursive code)

for (var i=0; i<10; i++) { }
for (var i=0; i<10; ++i) { }
for (var i=-1; ++i<10; ) { }
in theory ++i is faster to run at the assembly level compared to i++. But in JS, this is all BS.
It's entirely possible that a JS engine may see a place where i++ is used and realize that it can safely replace it with the ++i equivalent.

for (var i=0; i < x.length; i++) {  }
for (var i=0, len = x.length; i < len; i++) { }
You don't have to consult x.length every iteration, instead use len. There is no way to prove that the second approach actually runs faster.

Don't try to optimize your code to one JS engine. Your code won't always run in that one engine alone.
Even if your code is going to run only in that one engine for the next 10 years, 5 years from now, that engine is going to contradict itself and optimize code differently from what it does today.

non-critical path optimization is the root of all evil - David Knuth. If your code is not in the critical path, don't waste time optimizing it. Just make it sure it works 100% of the time.

Converting string to number in the critical path-
var x = "42";     //you need number 42 now
var y = x / 2;    // implicit coercion
var y = parseInt(x)   // 42;
var y = Number(x)    //  42;
var y = +x / 2;
var y = (x | 0) / 2;  //`|` unary operator

Tail Call Optimization (TCO)
a "tail call" is a function call that appears at the "tail" of another function
Calling a new function requires an extra amount of reserved memory to manage the call stack, called a "stack frame."
function foo(x) { return x; }
function bar(y) {
	return foo( y + 1 );	// tail call
}
function baz() {
	return 1 + bar( 40 );	// not tail call. After foo returns, baz has to still add 1 to it
}
baz();

A TCO capable engine will not create a new stack frame for foo(), it will reuse bar's stackframe. This is faster and requires less memory.
In JS, the engine has a limit to the call stack size.
With TCO, recursive functions with tail position calls can essentially run unbounded. (normally recursion result in hundreds or thousands of stack frames)
function factorial(n) {
	function fact(n,res) {
		if (n < 2) return res;
		return fact( n - 1, n * res );
	}
	return fact( n, 1 );
}

5.A)Aysynquence Library (appendix)  (http://github.com/getify/asynquence)
Author's async+sequence library: any series of steps for a task, whether they are synchronous or asynchronous, can be collectively thought of as a "sequence" of steps.
i.e a sequence is a container that represents a task, and is comprised of individual (potentially async) steps to complete that task.

In ASQ, each step in the sequence is controlled under the covers by a Promise, every step you add to a sequence implicitly creates a Promise that is wired to the previous end of the sequence. every single step advancement in a sequence is asynchronous.
A sequence is synchronous, meaning step2 runs only after step1. Sequences can be combined in various ways, including having one sequence subsumed by another sequence. Sequence
A sequence is kind of like a Promise chain, except you have a handle on the entire sequence here, but in promise chains you only have handles for the individual promises.
Sequences are a more powerful and sensible abstraction for complex asynchrony than just Promises (Promise chains) or just generators.

ASQ() creates an empty initial sequence. Use .then() to add more steps to the sequence.
ASQ(
	function(done){     //done is the continuation callback,i.e go to the next step by passing it a message
		setTimeout( function(){done("Hello");}, 100 );
	},
	function(done,greeting) {   //done is the cb, greeting is the message passed on from the previous step
		setTimeout( function(){done(greeting+"World");}, 100 );
	}
).then( function(done,msg){
	setTimeout( function(){done(msg.toUpperCase());  }, 100 );
}).then( function(done,msg){
	console.log(msg);	 // this finally prints out "HELLO WORLD"
});
If a step is a function, that function is invoked with the first parameter being the "continuation" callback, subsequent parameters being any messages passed on from the previous step.
The step will not complete until the continuation callback is called. Once it's called, any arguments you pass to it will be sent along as messages to the next step in the sequence.

To chain one Promise to the next you have to create and return that Promise from a then(..) fulfillment handler, here you just have to call the continuation callback

Each step defined by then(..) is assumed to be asynchronous. If you have a step that's synchronous, you can either just call done(..) right away, or you can use the simpler val(..) step helper-
var sq1 = ASQ( function(done){
	done("Hello");	         // manually synchronous
}).val( function(greeting){      //use .val() to make it a sync step
	return greeting+"World";    //send a msg to the next step
}).then( function(done,msg){
	setTimeout( function(){done(msg.toUpperCase());}, 100 );
}).val( function(msg){
	console.log( msg );
});

In a promise chain, each Promise can have its own independent error, and each subsequent step has the ability to handle the error or not.
With Promises, to get a chain of steps to ignore all steps once an error occurs, you have to take care not to register a rejection handler at any step; otherwise, that error gets swallowed as handled, and the sequence may continue.
The normal paradigm for a sequence is that each step is responsible for completing itself, which is what advances the sequence. Promises work the same way.

Other APIs in ASQ:
.or() - to register failures in a sequence
.defer() - opt out of error automatic reporting that ASQ does in a chain
.gate() - send it a bunch of funcs, it goes to the next step only if all resolve successfully
.any() .first() .last() .race() .none()
.map()
.waterfall()
.until()
.try()
.pThen(), .pCatch()
.fork(), .seq(), .pipe()
.after(), .failAfter()
.wrap()
.iterable()
.runner() - for generators and promises

Read up on ASQ if it is really needed.

5.B)Advanced Async Patterns
Read this chapter in detail when required.

Iterable sequences -
var steps = ASQ.iterable();
steps.then().then().then();
steps.next().value;
steps.next().value;

Event Reactive - Reactive refers to spreading this functionality out over time in response to events.
ES7 Observables - a new data type called "Observable"
Generator Coroutine
Communicating Sequential Processes (CSP)

All in all, Promises and generators provide the foundational building blocks upon which we can build much more sophisticated and capable asynchrony.

---------------------------------------------------------------------------------------------------------------------------------------------------------
Chapter 6) ES6 & Beyond
6.1: ES? Now and Future

ECMA Script 1,2 were not used a lot. ES3 (Dec1999) was the first widespread baseline for JS. For political reasons ES4 was never released.
In Dec2009, ES5 was finalized (later ES5.1 in 2011).
ES6 a.k.a ES2015 came out in 2015.
Version labels are not so important moving forward, JS versioning is more like a per-feature rather than per-arbitrary-collection-of-major-features
Javascript is a living breathing standard, with browsers rolling out support for features continually rather than in large chunks.
Transpile = transformation + compile
Pollyfills/Shims = You define the function if the function is not already there.

6.2: Syntax
6.2.1)Blocked Scope Decleration
The only way in ES5 to get block scope was to declare the var in an (IIFE(){})()
Now you can just use a pair of {} to create a scope.
{
	let a=10,b
}
'let' declerations are not hoisted in their scope. So the location of let b = 10; inside the block is very important.
console.log(x);	// ReferenceError!
let x;
technically, it is a TDZ error (temporal dead zone), i.e accessing a variable that's been declared (later) but not yet initialized.
In JS, A variable that's not given an assignment at declaration time is assumed to have been assigned the undefined value
let b; is the same as let b = undefined;


if (typeof a === "undefined") {      //a is not declared so this is true
	console.log( "cool" );
}
if (typeof b === "undefined") {		// ReferenceError! gotcha! it never goes to console.log
	console.log("cool too");      //b is a TDZ variable, not an undeclared variable
}
let b;
Hence, in a block, always move all your "let", to the top. So that you avoid the above unexpected behaviour. It totally avoids the accidental errors of accessing too early. And also visually, you know that these vars are for this block alone.

The let i in the for header declares an i not just for the for loop itself, but it redeclares a new i for each iteration of the loop. That means that closures created inside the loop iteration close over those per-iteration variables the way you'd expect.
var funcs = [];
for (let i = 0; i < 5; i++) {
	funcs.push( function(){
		console.log(i);    //this iteration of the loop, this func will always have only this i value
	} );
}
In ES5 you would do  var j = i inside the iteration, and then console.log(j). Explicitly forcing the closure to close over j.

6.2.2)Constants
a variable that's read-only after its initial value is set during decleration.
const b = 10;  //this is also a block scoped variable like let.
b = 5;  //TypeError!

A const declaration must have an explicit initialization. If you wanted a constant with the undefined value, you'd have to declare const a = undefined to get it.
the VALUE is not frozen or immutable because of const, just the assignment of it to the variable is fixed.

const x = array|object;  x holds a constant reference to that array. the internals of the array|object can be modified though.
Here the value of x cannot be garbage collected until x's lexical scope goes away.

6.2.3)Block Scoped Functions
Function declared inside a  { } can only be called from inside the  { }
Note that such function are indeed hoisted inside that { }, unlike let variables!

In ES5-
if (x === 10) {
	function foo() {console.log("1");}
}
else {
	function foo() {console.log("2");}
}
foo();
both declarations of foo are hoisted to the top of the program (or enclosing function).
Regardless of the value of x, "2" will be printed for sure, because the outside foo() uses the latest funct decleration, which over here is the second foo();
In ES6 - foo() gives you TypeError!

6.2.4)Spread/gather   (only for arrays, NOT objects)
... used in front of an array spreads out the array-
foo(...[3,4,5]);   i.e here spreading it out to a list of arguments , foo.apply( null, [1,2,3] );  //does the same thing pre-ES6
var b = [1,2, ...a];

... gathers a set of values into an array
function foo(x,y,...z){ }   gather the rest of the args in to an array z, in ES5 you would have to z = Array.prototype.slice.call(arguments).slice(2);

6.2.5)Default Parameter Values and Parameter Value Expressions
function foo(x,y) {   ES5 code
	x = x || 100;
	y = y || 20;
    console.log( x + y );
}
foo() gives 120, but foo(0,5) gives 105 not 5  (0 is false, so it takes 100)

function foo(x = 100, y = 20) {    ES6 code   The assignment actually does this- x !== undefined ? x : 11
	console.log( x + y );
}
foo() gives 120, foo(0,5) gives 5
foo(5,undefined); gives 5+20
foo(5,null);	gives 5+0     null is a value and in the addition step, it coerces to 0

A gather value cannot have a default value - foo(x,y,...z=[10,20,30]){   }    -not allowed

A default "value" can even be a "value expression"- function foo(x=y+3, z=bar(x)) {  }
The default "value expressions" are lazily evaluated, meaning they're only executed if and when they're needed

The formal parameters in a function declaration are in their own scope, in the () brackets, not in the function body's scope.
var w = 1, z = 2;
function foo(x=w+1, y=x+1, z=z+1) {
	console.log( x, y, z );
}
foo();
This errors out. x=w+1, y=x+1 work. But z=z+1, here z is in conflict with the outer z. So it first assumes that you are talking about the new inner z for "z=". So for the RHS z+1, this z is uninitialized (TDZ ,like let, z is declared but uninitialized), so it throws a TDZ reference error.
Unlike w in x=w+1, for z in z=z+1, it does not even try to find the z in the outer scope.

function foo( x = (function(v){return v+11;})(31) ){
	console.log(x);
}
foo();	 //gives 42.
Here too, if the IIFE tried to access the x inside it (from x=), then it would be TDZ. The IIFE needs to declare it own x if it wants to use an x

note: Function.prototype is the same as function(){}  //empty function. This is a JS quirk.

6.2.6)Array/Object Destructuring (structural assignment)
Now the LHS of assignment statements for array/objects have changed.

function foo() {return [1,2,3];}
function bar() {return {x:1, y:2, z:3}; }
var [a,b,c] = foo();   variable a is 1
var {x:a, y:b, z:c} = bar();    a is 1, b is 2, c is 3.
OR let {x:a, y:b, z:c} = bar();   a,b,c are now block scoped.

Generally in assignment it is of the form: target = source,
var X = 10, Y = 20;
var o = { a: X, b: Y };  Put X into a, Put Y into b (on the RHS side)
console.log(o.a, o.b); 10,20

but in destructuring, it is flippped! It is source = target!! So on the LHS side (in destructuring), things are flipped! Which is actually a bad feature now in JS.
var {x:a, y:b, z:c} = bar();   Put x into a, put y into b, put z into c. so a is 1, b is 2, c is 3.
console.log(x,y,z);  //referenceError! they don't exist. Only a,b,c are the new variables.

For objects, if the property name being matched is the same as the variable you want to declare, you can actually shorten the syntax:
instead of var {x:x, y:y, z:z} = bar();  do var {x,y,z} = bar();   again, here x,y,z are all new variables, take x and put it into x, take y and put it into y
In the shortened syntax it is leaving out the "x:" in the "x:x"

Don't do
{x,y,z} = bar();  //JS engine will think {} is opening a new code block, either put var in front of it. Or do-
var x,y,z;
({x,y,z} = bar()); make it an expression

You can even have computed properties in destructuring
y = "x",
o = {};
( {[y]:o[y]} = bar() ); from the object that bar returns, get property "x" (i.e [y]) and put that into o[x]
console.log( o.x );

Array to object-
var a1 = [1,2,3];
o2 = {};
[o2.a, o2.b, o2.c] = a1;  //o2 is now filled up

Array to Array-
var a1 = [1,2,3],
a2 = [];
[a2[2], a2[0], a2[1]] = a1;

Swap two vars-
var a=10,b=20;
[a,b]=[b,a];

var { a:{x:X, x:Y}, a } = { a:{x:1} };    //first of all,the new vars are X,Y,a  and their values are 1,1,{x:1}
( {a:X,a:Y,a:[Z]} = {a:[1]} );   //the new vars are X,Y,Z and not[Z]. The values are [1],[1],1
here X and Y are referencing the same array- [1]! VVIP. If you modify X, even Y changes

completion value: the completion value of array/object desructuring statment is the RHS object/array!
[a,b,c] = [1,2,3];
here a=1, b=2, c=3; but more importantly the completion value of this line is the array [1,2,3] (from the RHS)

var o = {a:1, b:2, c:3}, a, b, c, p;
p = { a, b, c } = o;
p is now the RHS object {a:1, b:2, c:3}, p === o is true; i.e same reference! It is the same for arrays.

chaining destructuring
var o = { a:1, b:2, c:3 },p = [4,5,6], a, b, c, x, y, z, k, t;
k = {a} = {b,c} = o;
t = [x,y] = [z] = p;
Here k=o and t=p, a=1,b=2,c=3,x=4,y=5,z=4

var { w, k } = bar(); both w and k are undefined. bar only has {x,y,z} properties
var [,b] = [1,2,3];   b=2 , the others are skipped

... on the LHS (destructuring) does a gather, on the RHS it does a spread.
var a = [2,3,4];
var [b, ...c ] = a;  b=2,c=[3,4]

default values in destructuring
var [a=3, b=6, c=9, d=12 ] = [4,5,8]   if arr[0] is not undefined,put arr[0] into a, else put 4 into a.
var {x=5, y=10, z=15, w=20 } = bar();  if obj[x] is not undefined,put obj[x] into x, else put 5 into x.
var { x, y, z, w:WW=20 } = bar();  if obj[w] is undefined, put 20 into WW else put obj{w} into WW

What is the value of x,y,z?
var x = 200, y = 300, z = 100;
var o1 = { x:{y:42}, z:{y:z} };   so o1 is { x:{y:42}, z:{y:100} }
( { y:x={y:y} } = o1 );
( { z:y={y:z} } = o1 );
( { x:z={y:x} } = o1 );                  answer it to the right ->                                 x={y:300},y={y:100},z={y:42}

Destructuring function parameters: Same logic as ALL of the above. Plus, you have ES6 function parameter default values too. So you have func parameter defaults + destructuring defaults
function f6({x=10} = {}, {y} = {y:10}, z=20, {p:X=10,t=20}) {
	arg = [].slice.call(arguments);
	console.log(x,y,z,X,arg[3].t);
}
arg[0] - if no object is passed, use {}, take x and put it into x. If there is no x, put 10 into x
arg[1] - if no object is passed, use {y:10}, take y and put it into y
z is either was is passed or is 20
arg[2] - take p and put it into X, if p has no value, put 10 in X. Take t and put it into t, if there is no t value, put 20 into t

f6(undefined, undefined, undefined, {});                   x=10, y=10, z=20, X=10, arg[3].t=undefined
f6({}, {}, undefined, {k:100});                            x=10, y=undefined, z=20, X=10, arg[3].t=undefined
f6({x:5}, {p:20}, 50, {p:100,t:40});					   x=5, y=undefined, z=50, X=100, arg[3].t=40

function f3([ x, y, ...z], ...w) { }
foo([]);   x=y=undefined, z=w=[]   empty array is the default gather value!!! not undefined

Merging huge objects with their default objects: Destructuring and then restructuring using those temporary variables
var defaults = {
	options: {
		remove: true,
		enable: false,
		instance: {}
	},
	log: {
		warn: true,
		error: true
	}
};
var config1 = {
	options: {
		remove: false,
		instance: null
	}
};
To make config1 have all the properties of a default object, along with it's existing pre-set fields -
{
	let {a,b,c} = config1;   //let block because a,b,c are only required here, you don't have to pollute the whole scope
	config1 = { use a,b,c here to restructure it back};
}
{
	let {
		options: {remove=true,enable=false,instance={}} = {remove:true,enable:false,instance:{}},
		log: {warn=true,error=true} = {warn:true,error:true}
	 } = config1;
	 config1 = {options:{remove,enable,instance},log:{warn,error}};

}
Destructuring:Take the config1 object: now, take options from it an put into this object {remove=true,enable=false,instance={}}, if config1 does not have any options in it,
then put {remove:true,enable:false,instance:{}} into  {remove=true,enable=false,instance={}}.
Now, take the remove field and put it into remove. If the remove field has no value, then put true into remove. So now local variable remove has a value.
Restructuring: Take options variable and put it into options. Take remove variable and put it into remove.

6.2.6)Object Literal Extensions
concise property (RHS): During decleration, on the RHS, If you need to define a property that is the same name as a lexical identifier, you can shorten it from x: x to x
var x = 2, y = 3;
function z() { }
o = {x:x, y:y, z:z};
o = {x,y,z};  do this instead. Take x var value and put it into x property, take y var value and put it into y property

concise methods
o = {x:function x(){},   y:function *y(){}};   property x is a function called x, property y is a generator called y
o = {x(){},  *y(){}};    //in ES6 you can do this, but it is not the same thing though,  o.x is an anonymous function as defined, o.y is an anonymous generator as defined
bascially  o = {x(){}} is the same as o = {x:function() {}} -> see, it is anonymous.
So if your function is recursive, i.e trying to call itself, you can't do that, you need a name. (you'll get a ReferenceError)
In other words, concise methods imply anonymous function expressions. You are un-naming the function. (which is yuck!) so you cannot use them for recursive functions! Do it the old way for recursive funcs.

computed property names
var prefix = "user_";
var o = {
	baz: function(..){ .. },
	[prefix+"foo"]: function(){  },
	[prefix+"bar"]: function(){  },
	[prefix+"fam"](){  },     //concise method property names too. The function is anyway anonymous, because that's what concise methods are.
	*[prefix+"jam"](){  }
};
Any valid expression can appear inside the [ .. ], this is all for that particular property name of the object
This is most used with Symbol-  {[Symbol.toStringTag]: "really cool thing"}

__proto__ property
var o1 = {  };
var o2 = { __proto__: o1  };
You can do this, but it's better to do- Object.setPrototypeOf(o2,o1);
The ability to add "__proto__" to an object to link it to it's [[Prototype]], this feature was controversially added. Avoid it.

super property
var o1 = { foo(){console.log("o1:foo");}  };
var o2 = {
	foo() {
		super.foo();
		console.log( "o2:foo" );
	}
};
Object.setPrototypeOf( o2, o1 );
o2.foo();		// "o1:foo" followed by "o2:foo"
The super reference inside o2.foo() method is locked statically to o2, and specifically to the [[Prototype]] of o2
super is only allowed in concise methods, not regular function expression properties. Weird!
It always has to be super.xyz() and never plain super()

6.2.7)Template Literals   - has nothing to do with the word "template". It should have been called "interpolated string literals"
string can now be embeded with expressions that are automatically parsed and evaluated inline: this process is called interpolation.
var name = "Kyle";
var greeting = `Hello ${name}!`;                  //"Hello Kyle!"  this is still a string type
var greeting = `Hello ${convertUpper(name)}!`;    //a function
Line breaks (newlines) in the interpolated string literal are preserved in the string value.

Tagged template literals (should have been called tagged string literals)
This is a new function invocation way, called Tag.
function foo(strings, ...values) {
	console.log(strings);
	console.log(values);
}
var desc = "awesome";
foo`Everything is ${desc}!`;   prints out [ "Everything is ", "!"], [ "awesome" ]

The first argument that a tag function accepts is- everything in between the ${} (call it string, it is an array of strings)
The rest of the arguments that it accepts are all the computed values inside each of the ${}  (use ..values to put them into an array of values)
You have to manually put the string together and return it-
function tag(strings, ...values) {
	return strings.reduce( function(s,v,idx){
		return s + (idx > 0 ? values[idx-1] : "") + v;
	}, "" );
}
tag`Everything is ${desc}!`;
basically, this is a step in between 2 steps of the string literal: finished evaluating all expressions, time to put them all together.

6.2.8)Arrow Functions
function foo(x,y) {return x+y;}
var foo = (x,y) => x + y;  //function reference is assigned to the var foo
var f1 = () => 12;    //returns 12
var f2 = x => x * 2;   //return x*2
Arrow functions are always 'anonymous' 'function expressions'. (they have no named reference for recursion or event binding/unbinding)
there is no such thing called arrow function declaration.

The longer is your function code, the less use it is, to convert it to ()=> form. Use arrow function form only for really small functions. Then visually, it makes a difference, or else it does'nt.
()=> really only saves you from typing function, {} and return. Meh.

The whole point of arrow functions was to solve "this" binding.
var controller = {
	makeRequest: function(){
		var self = this;
		btn.addEventListener( "click", function(){
			...
			self.makeRequest();
		}, false );
	}
};
We use self, because, inside the click callback, when it is called, the this binding will not be the same as the "this" in the makeRequest();
Inside arrow functions, the "this" binding is not dynamic, but is instead lexical!!!
btn.addEventListener( "click", () => {
			// ..
			this.makeRequest(..);   //it takes it from the "this" in it's outer scope - makeRequest()
}, false );
Essentially, => replaces var self = this or .bind(this)

So if "this" is going to be bound lexically, then even that is a problem-
var controller = {
	makeRequest: () => {this.helper();},
	helper: () => {  }
};
controller.makeRequest();
Now inside the makeRequest() function, "this" is not controller, it it is the outer "this", which is window!

arrow functions also have lexical arguments -- they don't have their own arguments array but instead inherit from their parent -- as well as lexical super and new.target

Bottom line: => is about lexical binding of this, arguments, and super.
Use it for any of the above 3 or if you function is really really small. Bottomline.

6.2.9)for..of loop  -  loops over the set of values produced by an iterator.
var a = ["a","b","c","d","e"];

for (var idx in a) { }    // 0 1 2 3 4  (keys)
for (var val of a) { }	  // "a" "b" "c" "d" "e" (values)

a must be an iterable, or a value that can be boxed/coerced into an iterable
Under the covers, the for..of loop asks the iterable for an iterator (using the built-in Symbol.iterator), then it repeatedly calls the iterator and assigns its produced value to the loop iteration variable.

ES5 way of doing it-
var a = ["a","b","c","d","e"];
var k = Object.keys(a);
for (var val, i=0; i<k.length; i++) {
	console.log( a[k[i]] );
}

ES6 equivalent-
var a = ["a","b","c","d","e"];
for(var val,it=a[Symbol.iterator](); (ret=it.next() && ret.done!==false){
	val = ret.value;
	console.log(val);
}

These are by default iterables - Array, String, Generator, Collections/TypedArrays
Plain objects are not iterable!
for (var c of "hello") {     //the literal is boxed to the String object, which is an iterable by default.
	console.log(c);         //gives out each character
}

var o = {};
for (o.a of [1,2,3]) {
	console.log(o.a);   // 1 2 3
}
for ({x: o.a} of [ {x:1}, {x:2}, {x:3} ]) {    //destructuring
  console.log(o.a);     // 1 2 3
}

function *g() {yield 10; yield 20; yield 30; yield 40};
for (k of g()) {console.log(k);}
//this will give 10 20 30 40

for..of loops can be prematurely stopped, just like other loops, with break, continue, return.
In any of these cases, the iterator's return(..) function is automatically called (if one exists) to let the iterator perform cleanup tasks, if necessary.

6.2.10)Regular Expressions
new "u" flag for ES6+ regular expressions, which turns on Unicode matching for that expression.

JS strings are typically interpreted as a sequence of 16-bit BMP characters. But many UTF-16 characters (UTF-16 doesn't strictly mean 16 bits) are more than 16-bit. So string may have multi-byte characters in them.
Prior to ES6, regular expressions could only match based on BMP characters, which means that those extended characters were treated as two separate characters for matching purposes. This is bad.

the "u" flag tells a regular expression to process a string with the interpretation of Unicode (UTF-16) characters, such that such an extended character will be matched as a single entity.
𝄞 (the musical symbol G-clef) inside /𝄞/ is normally considered as two characters, it is trying to match 0xD834 and 0xDD1E in the given string.
/𝄞/u will now try to match only 𝄞 in the string. (/\u{1D11E}/u)

Sticky Flag - y
var re1 = /foo/;
var str = "++foo++";
re1.lastIndex;      // 0  the .lastIndex property of a regex stores the index of the current location it is going to start searching from.
re1.test(str);		// true
re1.lastIndex;		// 0 -- not updated. This should have been 5

var re2 = /foo/y;
re2.lastIndex;			// 0
re2.test(str);		    // false -- "foo" not found at `0`
re2.lastIndex;			// 0
re2.lastIndex = 2;
re2.test(str);		// true
re2.lastIndex;			// 5 -- updated to after previous match
re2.test(str);		// false
re2.lastIndex;			// 0 -- reset after previous match failure

Read more in the book, if this is really requried.

Regex Flags
to examine a regular expression object to see what flags it had applied, use reg.flags();
var re = /foo+/ig;       in ES5 you have to do- re.toString().match(/\/([gimuy]*)$/)[1]
re.flags;				// "gi"  regardless of the actual order in the regex, the returned value will have flags in this order - 'gimuy'
re.source;      // foo+  (i.e the reg expression)
var re3 = new RegExp(re1,"yig");    the RegExp() constructor is 'flags-aware'
re3.source;				// "foo+"
re3.flags;			    // "giy"

6.2.11)Number Literal Expressions
var dec = 42;         Number("42") gives 42
    oct = 052;      -> this should not be used anymore for octal. ES5 offically does not allow octals. Only few browser allowed it, that's why  Number("052") gives 52 and not 42... In strict mode "octal literals" are not even allowed.
    hex = 0x2a;		  Number("0x21") gives 42
Though you are specifying a number in different bases, the number's mathematic value is what is stored, and the default output interpretation is always base-10
The three variables in the previous snippet all have the 42 value stored in them.

ES6 way-
var dec = 42,
	oct = 0o52,		 -> New syntax for octal literals. You can use octals in JS.
	hex = 0x2a,
	bin = 0b101010;
the string representations of these forms are all able to be coerced/converted to their number equivalent
Number( "42" );			// 42
Number( "0o52" );		// 42
Number( "0x2a" );		// 42
Number( "0b101010" );	// 42
You can go the opposite direction to: Number to string
var a = 42;
a.toString();			// "42" -- also `a.toString( 10 )`
a.toString( 8 );		// "52"
a.toString( 16 );		// "2a"
a.toString( 2 );		// "101010"

6.2.12)Unicode
The Unicode characters that range from 0x0000 to 0xFFFF contain all the standard printed characters (in various languages) that you're likely to have seen or interacted with.
This group of characters is called the Basic Multilingual Plane (BMP). The BMP even contains fun symbols like this cool snowman: ☃ (U+2603)
Astral Symbols:0xFFFF to 0x10FFFF. Rarely used ones. Examples: 𝄞 (U+1D11E) and 💩 (U+1F4A9).

ES5: JS strings can specify unicode character by unicode escaping (\uMax4HexDigits)
var snowman = "\u2603";   //"☃"
but unicode escaping allows till only 0xFFFF (the BMP set) (max 4 digits are allowed)
To use a astral character, you need to use a surrogate pair:  two specially calculated Unicode-escaped characters side by side, which JS interprets together as a single astral character
var gclef = "\uD834\uDD1E";  //"𝄞"

ES5: Unicode code point escaping. just do \u{any number of hex digits}
var gclef = "\u{1D11E}";  //"𝄞"

String operations
By default, JS string operations and methods are not sensitive to astral symbols in string values. They will treat the surrogate pair as 2 characters and not one.
"☃".length;   1
"𝄞".length;   2   wrong
Array's iterator (new in ES6) is astral aware, it treats astrals as one character, so
var a = "𝄞";
[..a].length;   //1 correct (spread uses the array iterator)

Combining Diacritical Marks: There are a set of hex unicode numbers that modify the previous character!
s2 = "e\u0301";  //"é"   it is one character e + \u0301  (diacritical mark)
s2.length;      //2  wrong
[..s2].length;   //2 and not 1. wrong.

ES6 has a str.normalize() func that makes it one character
var s1 = "o\u0302\u0300";  //ồ  (diacritical)
s.length;         //3 wrong
[..s1].length;    //3 wrong
s1.normalize().length;   //1 correct  but this too does'nt work 100% of the time.

So not just length has issues, even character position has issues.
s.charAt(2);
read more in the book if really required. A lot of string functions are not unicode aware!

Unicode characters can also be used in identifier names (variables, properties, etc.)
var \u03A9 = 42;    //var Ω = 42
var \u{2B400} = 42;   //var 𫐀 = 42;  (astral)

6.2.13)Symbols  - new primitive type, it has no literal form
var sym = Symbol("some optional description");
typeof sym;		 // "symbol"  the primary way to identify a symbol type
sym instanceof Symbol;		// false
var symObj = Object(sym);
symObj instanceof Symbol;	// true
symObj.valueOf();         // this is sym

You cannot and should not use new with Symbol(), it is not a constuctor. Nor does it produce any object.
You can only pass a string as a parameter (or send nothing)
sym.toString();	   //"Symbol(some optional description)"

The internal value of a symbol itself -- referred to as its name -- is hidden from the code and cannot be obtained.
The main point of a symbol is to create a string-like value that can't collide with any other value

Symbol registry - Symbol.for()
read it in the book if required

Symbols as Object Properties
var o = {
	foo: 42,
	[Symbol("bar")]: "hello world",    //it's stored in a special way so that the property will not show up in a normal enumeration of the object's properties
	baz: true
};
Object.getOwnPropertyNames(o);      // ["foo","baz"]
Object.getOwnPropertySymbols(o);	// [Symbol(bar)]

Built-in Symbols - They are all properties of the Symbol function object.
Symbol.iterator is a built-in property.

var a = [1,2,3];
a[Symbol.iterator];			//a native function

6.3)Organisation
code is about communicating to other developers AND feeding the computer instructions.
Important to learn and utilize common patterns for organization and reuse: Iterators, Generators, Modules, Classes.

Iterators
An iterator is a structured pattern for pulling information from a source in one-at-a-time fashion.
The following is the general "interfaces" in this pattern.
Iterator:
	next() {method}: retrieves next IteratorResult
	return() {method}: stops iterator and returns IteratorResult    (optional method)
	throw() {method}: signals error and returns IteratorResult      (optional method)
IteratorResult:
	value {property}: current iteration value or final return value
	done {property}: boolean, indicates completion status
Iterable:
	@@iterator() {method}: produces an Iterator

Example:
var arr = [1,2,3];
var it = arr[Symbol.iterator]();
it.next(); it.next(); it.next();
it.next();  //{done:true, value:undefined}  //only the fourth call, after you go past 3 in the array, gives you done=true. (reason is: iterators need to work in the for...of loop, and you know how to implement that with a normal for loop.. just see why..)

var greeting = "hello world";
var it = greeting[Symbol.iterator]();   //the primitive string is boxed to String which gives you an iterator.

Calling next(..) on an iterator that's already exhausted is not an error, it will simply continue to return the result { value: undefined, done: true }

return(); sending a signal to an iterator that the consuming code is complete and will not be pulling any more values from it.
The source/producer can do any cleanup it needs to. such as releasing/closing network, database, or file handle resources.
If an iterator has an abrupt/early termination, return() will be automatically called.
throw(..) is used to signal an exception/error to an iterator.

Write an iterator that prints out Fibonacci numbers-
for (var v of Fib) {
	console.log(v);    // 1 1 2 3 5 8 13 21 34 55
	if (v > 50) break;
}
So Fib should be an object, that has an iterator defined. Because the for..of will use that iterator and call it repeatedly
Fib {
	[Symbol.iterator]: function(){
		return {
			next: function(){
				return {done: , value:}
			},
			return: function(){},
			[Symbol.iterator]() {return this;}  // make the iterator an iterable
		}
	}
}
Fib = {
	[Symbol.iterator]() {
		var a = 0, b = 1;
		return {
		  next: function(){	   //closure over a,b
			val = a + b;
			a = b;
			b = val;
			return { done:false, value: val}    //you can hardcode it to false as it is infinitely gonna be called
		  }, return: function(){
			console.log('when break; is called, return() is automatically called, iterator has now stopped');
			return {done:true, value:undefined}
		  }
		}
	}
}
Here you were just looping through an arbitrary object. You can use for..of to loop though an array of functions/task to run each one of them in order.
Building you own iterator you can make [...3] printout [0,-1,-2,-3] . Read the book.

Generators
A generator can pause itself in mid-execution, and can be resumed either right away or at a later time. So it clearly does not hold the run-to-completion guarantee that normal functions do.
Moreover, each pause/resume cycle in mid-execution is an opportunity for two-way message passing, where the generator can return a value, and the controlling code that resumes it can send a value back in.
function *foo(x,y) {
	yield;   // a pause point, it also returns a value to the iterator, it also receives a value back on resume
}
var it = foo();  //produces an iterator that will control the generator to execute its code
When a paused yield expression is resumed, it's completed/replaced by the resumption value in a way that's not terribly dissimilar from being "assigned" that value.

function *foo() {
	var arr = [ yield 1, yield 2, yield 3 ];
	console.log( arr, yield 4 );
}
it = foo();
it.next(1);  //gen gives you 1
it.next(2);  //you sent 2 to arr[0], gen gives you 2
it.next(3);  //you sent 3 to arr[1], gen gives you 3
it.next(4);  //you sent 4 to arr[2], gen gives you 4
it.next(5);  [2,3,4],5

a = 2 + yield 3;		// invalid  just like a=2+b=3 is invalid
a = 2 + (yield 3);		// valid    just like a=2+(b=3) is valid
yield 2 + 3;			// same as `yield (2 + 3)`
(yield 2) + 3;			// `yield 2` first, then `+ 3`   (only ... and , have lower precedence than yield)

yield is also "right-associative"
yield yield yield 3; is actually- yield (yield (yield 3));

Yield Delegation: yield *
Example 1-
function *foo() {
	yield *[1,2,3];
}
What it does is foo() is passing it's iterator control onto the iterator of the array. So now, it is going to yield for each iteration of the array iterable...
t = foo();
t.next();  1   (value=1)
t.next();  2
t.next();  3
t.next();  {value:undefined, done:true}

Example 2-
function *foo() {
	yield 1;
	yield 2;
	yield 3;
}
function *bar() {
	yield *foo();
	yield 5;
}
t = bar();
Again, over here, bar is passing its iterator control onto foo.
t.next();   will give you 1,2,3 and then 5.

Example 3-
function *foo() {
	yield 1;
	yield 2;
	yield 3;
	return 4;    //you can define you own return value to the main func. There x=yield *foo() will become x=4
}
function *bar() {
	var x = yield *foo();
	console.log( "x:", x );
}
for (var v of bar()) {  //notice you do bar() and not bar  (this is how you use for...of on generators)
	console.log( v );
}
Prints out 1 then 2 then 3, then x:4. Because the first iteration yields out 1, and console.log(v) occurs..

Example 4- Recursion
function *foo(x) {
	if (x<3) {
		x = yield *foo(x+1);
	}
	return x*2;
}
var p = foo(1);
p.next();  //in one shot it recursively runs and give you {value:24, done:true}. Beacuse via recursion, the yields and the returns all run in one shot.

return() call on an iterator
return(x) is kind of like forcing/inserting a "return x" statement to be processed at exactly that moment. The function returns immediately. (after executing the finally block, if any)
function *foo() {
	yield 1;
	yield 2;
	yield 3;
}
var it = foo();
it.next();				// { value: 1, done: false }
it.return(42);		// { value: 42, done: true }
it.next();				// { value: undefined, done: true }
For built-in iterator, return() is automatically called at the end of all iterations.
The purpose for this capability is so the generator can be notified if the controlling code is no longer going to iterate over it anymore, so that it can perhaps do any cleanup tasks (freeing up resources, resetting status, etc.)

Use a try..catch
function *foo() {
	try {
		yield 1;
		yield 2;
		yield 3;
	}
	finally {
		console.log( "cleanup!" );
		//NEVER put a yield here! bad parts of JS!
	}
}
for (var v of foo()) {
	console.log(v);
}    // 1 2 3 and then cleanup!
var it = foo();    //this produces a whole new iterator. The for is done, but this one is new.
it.next();		   // { value: 1, done: false }
it.return(42);	   // cleanup!   // { value: 42, done: true }
A generator can have mutliple iterators running. Each of them will be at their own paused state in the generator.

throw() call on an iterator
throw(x) is kind of like forcing/inserting a "throw x" statement to be processed at exactly that moment. The function returns immediately.
So in your calling code, keep a try...catch and the catch will catch the exception. (unless the generator has a catch block in it)
Unlike return(..), the iterator's throw(..) method is never called automatically.
function *foo() {
	try {
		yield 1;
		yield 2;
	} catch(x) {
		console.log(x)
	}
	finally {
		console.log( "cleanup!" );
	}
}
var it = foo();
it.next();		   // { value:1, done:false }
it.throw(42);   // 42 "cleanup!"   the iterator is DONE.

Error can also propogate in both directions through yield* delegation
function *foo() {
	try {yield 1;}
	catch (err) {console.log(err);}
	yield 2;
	throw "foo:e2";
}
function *bar() {
	try { yield *foo();  console.log("never gets here"); }
	catch (err) {console.log(err);}   //"foo:e2" comes here
}
var it = bar();
try {
	it.next();			// {value:1,done:false}
	it.throw( "e1" );	// e1    {value:2,done:false}
	it.next();			// foo: e2      {value:undefined,done:true}
}
catch (err) {console.log("never gets here");}
it.next();				// {value:undefined,done:true}
Once foo* throws an error, it goes to bar*'s catch. So now even bar* is done. (forcefully)

Generators are actually just simple syntax for state machine logic.
Folks at facebook wrote ES5 generator - https://facebook.github.io/regenerator/
function *foo() {
	var x = yield 42;
	console.log( x );
}
ES5 version would be -
function foo(){
	var state = 0,x;   //state keeps a count of the current yeild position
	return{
	 	next: function(y){
			switch (state){
				case 0:
					state++;
					return {value:42,done:false};
					break;
				case 1:
					state++;
					x = y;
					console.log(x);
					return {value:undefined,done:false};
					break;
				default:
					state++;
					return {value:undefined,done:true}
			}
	 	}
	}
}
it.next();  {value:42,done:false}
it.next(5);   5
it.next();   {value:undefined,done:true}
it.next();   {value:undefined,done:true}


Modules
Single biggest JS code pattern out there.
Modules allow private encapsulation of implementation details with a publicly exported API. Module definitions are file-based, singleton instances, and statically resolved at compile time.
ES5 way
function Hello(name) {    //capital letter
	function greeting() {console.log("Hello "+name+"!");}   //closure over the "name" variable
	return {      //public API
		greeting: greeting
	};
}
var me = Hello("Kyle");
me.greeting();		// Hello Kyle!
You can create many Hello() instances and they will each have their own value in them

Singleton: Only one instance of the module can be created
var me = (function Hello(name){ same code here})("Kyle");
me.greeting();		// Hello Kyle!

There are different kinds of modules - CommonJS, ES6, ES5 AMD(Asynchronous Module Definition), ES5 UMD(Universal Module Definition) etc.

ES6 rules- read the book again to undersand these
>only one module per file
>The API of an ES6 module is static. i.e you define statically what all the top-level exports are on your module's public API, and those cannot be amended later.
>ES6 modules are singletons. That is, there's only one instance of the module, which maintains its state. Every time you import that module into another module, you get a reference to the one centralized instance.
>The properties and methods you expose on a module's public API are not just normal assignments of values or references. They are actual bindings (almost like pointers) to the identifiers in your inner module definition.
>Importing a module is the same thing as statically requesting it to load (if it hasn't already) (blocking load)

ES6 Syntax: new keywords - import and export
import and export must always appear in the top-level scope of their respective usage. i.e They must appear outside of all blocks and ALL functions.

EXPORT statement
either infront of a decleration OR or used as an operator { } with a special list of bindings to export.
export function foo() {     //decleration
}
export var awesome = 42;    //decleration

var bar = [1,2,3];
var tar = {a:10};
export {bar, tar};      //operator form

function foo() { .. }
export { foo as bar };   /rename it and export (operator form) (name foo stays hidden inside this module)
All of these are named exports

When you export something, you're exporting a binding (kinda like a pointer) to that thing (variable, etc.). It is not an assignment style thing.
Within your module, if you change the value of a variable you already exported a binding to, even if it's already been imported, the imported binding at the the time of import, will resolve to the current (updated) value.
var awesome = 42;
export { awesome };
awesome = 100;        //every module that uses awesome will now have 100 in it. (at the time they import it)

Anything you don't label with export stays private inside the scope of the module.
Even var x = 10 is not a global var, the top-level scope is actually the module itself; there is no global scope in modules.

You can export multiple vars in a module. ES6 prefers you have a single export. It also gives a name "default"
A default export sets a particular exported binding to be the default when importing the module.
There can only be one default per module definition.

Default has a subtle syntax gotcha-
function foo(..) { }
export default foo;                //you are exporting the value in foo at that moment, not the identifier foo  (exporting the binding to the function expression) (the function expression is called default over there, there is no such thing called foo over there)
foo = 10;                          //no effect, function foo is what was default exported! foo is local to this file, 'default' is the binding that is exported and is bound to the func code

export default function foo( ) {}  //even this does the same thing. here the name foo is not relevant, because the import module gets a function callled "default" (foo does not exist there)
export default var foo = 10;       //Not allowed. This is weird and will be fixed soon.

function foo(..) { }
export { foo as default };     //renaming it and explicitly calling it default. Now this works like the usual binding. Foo is called default over there
foo = 10;                      //the other files where this was imported will now get 10
Here, the default export binding is actually to the foo identifier rather than its value,

If you never plan to update a default export's value, export default x. Else use, export(x as default);

Example1-
var foo = 42;
export { foo as default };
export var bar = "hello world";
foo = 10;
bar = "cool";
Now, when the module does the import, over there, you will get default=10, bar=cool

You can also re-export another module's exports, such as:
export { foo, bar } from "baz";
export { foo as FOO, bar as BAR } from "tam";
export * from "gam";
So in your module over here, what you imported from "baz","tam","gam" is never actually part of your scope, they just pass-though untouched.


IMPORT statement
import { goo, bar, baz } from "foo";         //import certain specific named members  (this {} is not an object, it is also has nothing to do with destructuring)
"foo" is called the module-specifier, it has to be a literal, it can't be a variable.  It generally is a path to a file.
foo,bar,baz must match named exports inside that module.

Note:All imported bindings are immutable and/or read-only. In this new module, if you do bar=10 //runtime TypeError!
i.e you can alter the API that you have just imported. (obviously)
A module can change its API members from the inside, but ES6 modules are intended to be static, so deviations from that principle should be rare. You don't want to do this.

import { foo as theFooFunc } from "foo";    //you can rename it

If the module has just a default export that you want to import and bind to an identifier-
import foo from "foo";             //you are calling it foo here...
so what it does is actually- import { default as foo } from "foo";   more explicit renaming

export default function foo() { .. }
export function bar() { .. }
export function baz() { .. }
becomes
import newName, {bar, baz as BAZ} from "foo";   //default goes to newName, baz become BAZ

Namespace import- if you want to import everything from another module
export function bar() { .. }
export var x = 42;
export function baz() { .. }
export default function goo() { }
becomes
import boo, * as test from "foo";    //get all the modules in "foo" and put them under the namespace test (only the default export can optionally have it's own name)
boo();         //the default export can have it own name
test.bar();
test.x
test.baz();
test.default();  //even this is bar()!

You can't get a few module only put them under the namespace test
import {bar, x} as foo from "foo"    // not allowed. When you create a namespace, you need to get everything (use *)

Declarations that occur as a result of an import are "hoisted".
foo();                       //this is allowed
import { foo } from "foo";    //this is hoisted

Circular Module Dependency
A imports B. B imports A.
If you import either A or B into your module, A will fetch B, B will realise it needs A, it realises A is already there. Done. Everything is ready to execute.
It is almost as if both those modules are in the same file.

Module A -
import bar from "B";
export default function foo(x) {
	if (x>10) return bar(x-1);     return x*2;
}
Module B -
import foo from "A";
export default function bar(y) {
	if (y>5) return foo(y/2);      return y*3;
}
Eventually when either of the module is fetched, JS will ensure that both are loaded, parsed, and compiled before either of them runs. This is what you have-
function foo(x) {
	if (x>10) return bar(x-1);     return x*2;
}
function bar(y) {
	if (y>5) return foo(y/2);      return y*3;
}
And this works as normal. As if they had originally been declared in the same scope.
foo(25);  //11       (25->24->12->11->5.5->11)
bar(25);  //11.5     (25->12.5->11.5->5.75->11.5)

Module Loader
For an import, the mechanism provided by the hosting environment (browser,NodeJS) to actually resolve the module specifier string into some useful instruction for finding and loading the desired module.
The module specifier, default interpretation is: for browser it thinks it is a URL, for Node, it thinks it is a local filesystem path on the server
Reflect.Loader.import() is an API to load modules by yourself without the import statement. (this is still not part of the ES6 standard)
Read more if really required

Classes
JS fakes classes by doing object delegation.
things like new and instanceof and .constructor property have nothing to do with classes

class keyword: identifies a block where the contents define the members of a function's prototype
class Foo {
	constructor(a,b) {
		this.x = a;
		this.y = b;
	}
	gimmeXY() {
		return this.x * this.y;
	}
}
>class Foo implies creating a function.
>constructor() implies the signature of that function (i.e its arguments and its definition)
>class methods use "concise method/generator" syntax available to object literals.
>class methods are non-enumerable whereas object methods are by default enumerable.
>Unlike object literals, there are NO commas separating members in a class body

basically it is this -
function Foo(a,b) {    //prototype style of coding
	this.x = a;
	this.y = b;
}
Foo.prototype.gimmeXY = function() {
	return this.x * this.y;
}
Regardless of the ES5 form or the ES6 form, a class can be instantiated
var f = new Foo(5,15);
f.x;						// 5
f.y;						// 15
f.gimmeXY();				// 75
Important difference between ES5 and ES6
>class Foo is not hoisted, but function Foo is. So, you must declare a class before you can instantiate it.
>for the class, you have to use new, you can't do Foo.call(someObject)

Class also automatically wires up the [[Prototype]] relationship if using extends
You can do var x = Class A{ }

Extends and Super
class Bar extends Foo {
	constructor(a,b,c) {
		super(a,b);    -> super means Foo (super means immediate parent only)
		this.z = c;
	}
	gimmeXYZ() {
		return super.gimmeXY() * this.z;     ->super means Foo.prototype
	}
}
var b = new Bar( 5, 15, 25 );
b.x; b.y; b.z;						// 5,15,25
b.gimmeXYZ();				// 1875
In a constructor: super automatically refers to the "parent constructor function" which in the previous example is Foo(..)
In a method: super refers to the "parent object", so you can do super.func(), such as super.gimmeXY().
Bar.prototype is [[Prototype]]-linked to Foo.prototype. Bar() is prototype linked to Foo()

super is NOT dynamic like "this" is. When a constructor or method makes a super reference inside it, that super is statically bound to that specific class hierarchy.

Example1
class ParentA {
	constructor() {this.id="a";}
	foo() {console.log("ParentA:",this.id);}
}
class ChildA extends ParentA {
	foo() {
		super.foo();
		console.log("ChildA:",this.id);
	}
}
class ParentB {
	constructor() {this.id="b";}
	foo() {console.log("ParentB:",this.id);}
}
class ChildB extends ParentB {
	foo() {
		super.foo();
		console.log("ChildB:",this.id);
	}
}
var a = new ChildA();
a.foo();                //even though child does not have a constuctor, it goes to the parent and use it's constuctor.
var b = new ChildB();
b.foo();                //ParentB:b , ChildB:b
b.foo.call(a);         //ParentB:a, ChildB:a
Here inside both foo()s - "this" is dynamic and it is the a object now. Super is unfazed, in the childB, super is always the ParentB, it can't suddenly become ParentA.
Anyway avoid making such kinds of calls.

Constructors
Constructors are not required for classes or subclasses; a "default constructor" is substituted in both cases if omitted.
subclass: the "default subclass constructor" automatically calls the parent constructor, and passes along any arguments.
Even C++ has this feature. Java does not, even the ES5 prototype one does not have this.

In any subclass constructor, you cannot access "this" until super() has been called.
ES5 works the opposite: the this object is created by the "subclass constructor," and then you call a "parent constructor" with the context of the "subclass" this
ES5 -
function Foo() {this.a=1;}
function Bar() {
	this.b = 2;
	Foo.call(this);
}
Bar.prototype = Object.create(Foo.prototype);  // `Bar` "extends" `Foo`
ES6 -
class Foo { constructor() {this.a=1;} }
class Bar extends Foo {
	constructor() {
		this.b = 2;			// not allowed before `super()`
		super();			// to fix swap these two statements
	}
}

Extending Natives: Coolest use of Classes
class MyCoolArray extends Array {
	first() { return this[0]; }
	last() { return this[this.length - 1]; }
}
var a = new MyCoolArray( 1, 2, 3 );
a.length;					// 3
a;							// [1,2,3]
a.first();					// 1
a.last();					// 3

new.target
a new "magical" value available in all functions. (though in normal functions it will always be undefined)
In any constructor, new.target always points at the name of constructor that new actually directly invoked.
class Foo {
	constructor() {console.log("Foo: ",new.target.name);}
}
class Bar extends Foo {
	constructor() {
		super();
		console.log( "Bar: ", new.target.name );
	}
	baz() {console.log("baz: ",new.target);}   //normal function
}
var a = new Foo();       // Foo: Foo
var b = new Bar();       // Foo: Bar,   // Bar: Bar  (because new was used with Bar, so even in foo() constructor, Bar is the value)
b.baz();                 //undefined (normal function)
If new.target is undefined, you know the function was not called with new

Static
Static properties (methods/variables) are added directly to that class's function object, not to the function object's prototype object.
So instances of the class don't have access to these static properties.
class Foo {
	static cool() {console.log("cool");}
	       wow() {console.log("wow");}
}
class Bar extends Foo {
	static awesome() {
		super.cool();
		console.log( "awesome" );
	}
	neat() {
		super.wow();
		console.log( "neat" );
	}
}
Foo.cool();					// "cool"
Bar.cool();					// "cool"
Bar.awesome();				// "cool"   // "awesome"
var b = new Bar();          //create an instance
b.neat();					// "wow"   // "neat"
b.awesome;					// undefined
b.cool;						// undefined

Symbol.species
read it in the book

6.4)Aysnc Flow Control
Async is now the bread and butter of JS. Callbacks was the old way, Promises and generators are the new way.

Promise
provides a trustable intermediary, between your calling code and the async code that will perform the task.
An event listener, on which you can register to listen for a completion event, this event fires ONLY once.
A Promise is a future value, a time-independent container wrapped around a value. Observing the resolution of a Promise extracts this value once available.
A Promise can only have one of two possible resolution outcomes: fulfilled or rejected, with an optional single value.
If a Promise is fulfilled, the final value is called fulfillment. If it's rejected, the final value is called reason
once a Promise is resolved, it's an immutable value that cannot be changed.

The promise constructor -
var p = new Promise(function pr(resolve,reject){
	// ..
});
pr is run immediately, at some point it will call the first arg and the second arg
Inside pr, if you call the second argument (reject), the promise is rejected. Similarly, if you call the first argument, the promise is fulfilled.

The old callback way-
function ajax(url,cb) {
	do async work
	eventually call cb(error,data)
}
ajax("http://some.url.1", function handler(err,contents){
	if (err) { handle ajax error }
	else { handle data }
});

New Promise way-
function ajax(url){
	return new Promise(function(res,rej){
		do asyn work
		call either res(fv) or rej(rr)   //fv is called "fulfillment value", rr is called "rejection reason"
	});
}
var p1 = ajax("ur")
.then(
	function fulfiled(data){ definition of what to do when success},
	function rejected(error){ definition of what to do when fail}
);
then() accepts 1 or 2 callbacks that are called by the promise when it resolves, 1 is reserved for fulfillment, 2 is reserved for rejection.
then(null,rej) or then(res,null) is the way you would normally call it
instead of then(null,rej), you can do catch(rej)

Both then() and catch() automatically construct and return ANOTHER promise instance, which is wired to receive the resolution from whatever the return value is from the original promise's fulfillment or rejection handler.

When you chain then(), you can either immediately return a value of return a promise... to the next then()
ajax( "http://some.url.1" )
.then(
	function fulfilled(contents) {return contents.toUpperCase();},
	function rejected(reason) {return "DEFAULT VALUE";}
).then( function fulfilled(data){
	it comes here on the next tick, because the previous then immediately returns a value (error or success)
	return ajax("url");
}).then( function fulfilled(contents) {
		it comes here only if the promise in the previous then() resolves and resolves successfully.
		if it fails, the error silent goes away or propogated to the next then/catch. this then() is complete.
	}
);

Thenable
Promises are genuine instances of the Promise(..) constructor.
thenable: any object with a then() defined
a thenable is generally less trustable than a genuine Promise

var th = {
	then: function xyz(fulfilled,rejected) {
		setInterval(fulfilled,100);   // call fulfilled() once every 100ms forever
	}
};
p1.then().then();  if the second then() receives the above thenable and not a promise, now you are screwed
Normal Promises are supposed to only ever be resolved once, but the above thenable calls 'fulfilled' every 100ms

Generally, if you're receiving what purports to be a promise or thenable back from some other system, you shouldn't just trust it blindly.

Promise API  : some static methods for working with promises
Promise.resolve();  creates a promise resolved to the value passed in.
If the value passed in is a promise, it's state is adopted.
If the value passed in is a thenable, it will convert that to a promise that adopt it's state.

var p1 = Promise.resolve( 42 );
var p2 = new Promise( function pr(res){
	res(42);        //no async work here, immediately calling the res function.
});
Both of the above are same, they are immediately resolved. (i.e on the next tick)
p2.then(function(x){console.log(x)});  //res is executed in the next tick (immediately)


Promise.reject();  creates an immediately rejected promise
var p1 = Promise.reject( "Oops" );
var p2 = new Promise( function pr(resolve,reject){
	reject("Oops");         //no async work here, immediately calling the rej function
});
Unlike resolve(), if you reject with a promise or thenable, the promise/thenable itself will be set as the rejection reason, not its underlying value.

Promise.all([...]);   accepts immmediate values, promises, thenables
It returns a promise back that will be fulfilled if all the values fulfill, or reject immediately once the first of any of them rejects.

var p1 = Promise.resolve(42);
var p2 = new Promise( function pr(resolve){
	setTimeout(resolve(43),100);
});
var v3 = 44;
var p4 = new Promise( function pr(resolve,reject){
	setTimeout(reject("oops"),100);
});

Promise.all([p1,p2,v3]).then(function(dat){log(dat)});    42,43,44
Promise.all([p1,p2,v3,p4]).catch(function(err){log(err)})   oops

Promise.race([...]) waits only for either the first fulfillment or rejection.
Promise.race([p1,p2,v3]).then(function(dat){log(dat)});    42   (it resolves first)
Promise.race([p2,p4]).catch(function(err){log(err)})       oops  (reject comes faster than the 100ms resolve)

Generators+Promises
Instead of long promise chains-
step1().then(
	step2,
	step1Failed
).then(
	function step3(msg) {
		return Promise.all( [
			step3a( msg ),
			step3b( msg ),
			step3c( msg )
		] )
	}
).then(step4);

Promises are a trustable system that uninverts the inversion of control of normal callbacks .
Pattern: a generator can yield a promise, and that promise can then be wired to resume the generator with its fulfillment value.
Combining the trustability of Promises and the synchronicity of code in generators.
function *main() {
	try {
		var ret = yield step1();
	}
	catch (err) {
		ret = yield step1Failed(err);
	}
	ret = yield step2(ret);
	ret = yield Promise.all( [      // step 3
		step3a(ret),
		step3b(ret),
		step3c(ret)
	] );
	yield step4(ret);
}
You need a runner function, that can run the generator, receive a yielded promise, and wire it up to resume the generator with either the fulfillment success value, or throw an error into the generator with the rejection reason.
run(main).then(
	function fulfilled(){},        // *main() completed successfully
	function rejected(reason){}   // Oops, something went wrong
);
read the book to see the run() implementation
This yield-a-promise-resume-the-generator pattern is so popular, that ES7 might introduce async and await keywords in functions.

6.5)Collections
ES5 had only arrays and objects
ES6 has TypedArrays, Map, Set, WeakMap, WeakSet

TypedArray
They provide structured access to binary data using array-like semantics.
The "type" in the name refers to a "view" layered on type of a bucket of bits, which is essentially a mapping of whether the bits should be viewed as an array of 8-bit signed integers, 16-bit signed integers, and so on.

You create a bucket of bits called a buffer-
var buf = new ArrayBuffer(32);
buf.byteLength;							// 32
buf is now a binary buffer that is 32-bytes long (256-bits), that's pre-initialized to all 0s

Now, on top of this array buffer, you layer a "view," which comes in the form of a typed array-
var arr = new Uint16Array(buf);
arr.length;       // 16
arr is a typed array of 16-bit unsigned integers mapped over the 256-bit buf buffer, meaning you get 16 elements.

Endian: For a multi-byte number, where is the low-order byte (collection of 8-bits) w.r.t to the numbers' byte. Left side or right side?
Example: 3085 (base-10) takes takes 16-bits to represent.
If you have just one 16-bit number container, it'd be represented in binary as 0000110000001101 (hexadecimal 0c0d) regardless of endianness.

But if 3085 was represented with two 8-bit numbers, the endianness would significantly affect its storage in memory:
0000110000001101 / 0c0d (big endian)
0000110100001100 / 0d0c (little endian)

read the book if this is required
var buf = new ArrayBuffer( 2 );
var view8 = new Uint8Array( buf );
var view16 = new Uint16Array( buf );
view16[0] = 3085;
view8[0];						// 13
view8[1];						// 12

TypedArrays provide "view"s of binary data buffers that align with various integer types, like 8-bit unsigned integers and 32-bit floats.
The array access to binary data makes operations much easier to express and maintain, which enables you to work with complex data like video, audio, canvas data, and so on.

Maps
In objects, the property name HAS TO BE a string.
var m = {};
var x = { id: 1 };
var	y = { id: 2 };
m[x] = "foo";      //what it does is m["object Object"] = "foo"
m[y] = "bar";      //what it does is m["object Object"] = "bar"
m[x];							// "bar"
m[y];							// "bar"

var m = new Map();
var x = {id:1};
var	y = {id:2};
m.set( x, "foo" );     //m.x is now "foo", the property x (which is an object) has a value of "foo"
m.set( y, "bar" );
m.get(x);           
You can't use m[x]/m[y]/m[z] to get and set values, you have to use m.get() and m.set()

A map instance is an iterable, and its default iterator is the same as entries().
Use Maps only if your property names have to be objects, else use normal objects for name-value pairs.
Unlike an object, an iterator will iterate a map's keys in the insertion order and not some random alphabetical order

Constructor variations-
var m = new Map([ [x,"foo"], [y,"bar"] ]);      You send an array of arrays. Each sub-array is [name,value]
var m = new Map(ANY iterable that produces an array like the above format);

Other apis-
m.delete(propertyName);
m.clear();  //removes all property-value pairs
m.size();   /total count of first level properties

m.keys();  an iterator that goes over all the property names
var keys = [...m.keys()];     //produces an array of property names

m.values(); returns an iterator for all the values
var vals = [...m.values()];   //you get an array of values

m.entries(); an iterator that goes over each name-value pair of the Map
var n_v_pairs = [...m.entries()];     //you get 2x2 array of name-values
n_v_pairs[0][0] is x                 //property1
n_v_pairs[0][1] is "foo"             //value1
The default iterator for a map is similar to the entries() iterator.

To copy a map
var m2 = new Map(m.entries());
var m2 = new Map(m1);

m.has(x); to check if a map has a given key

If you use an object as a map key and that object is later discarded (all references unset), the map itself will still retain its entry.
You will need to remove the entry from the map for it to be Garbage Collection eligible.

WeakMaps
Most of the same external behaviour as Map, but underneath, memory allocation and garbage collection is different.
WeakMaps take (only) objects as keys. Those objects are held weakly, which means if the object itself is GC'd, the entry in the WeakMap is also removed.
The only way an object can be GC'd is if there's no more references to it.
Once there is no reference to it, you can't even check if it exists in the WeakMap

var m = new WeakMap();
WeakMaps do not have size(),clear(), keys(), values(), entries() methods!
So even if you unset the x reference, which will remove its entry from m upon GC, there is no way to tell.

WeakMap only holds its keys weakly, not its values
var m = new WeakMap();
var x = {id:1},
	y = {id:2},
	z = {id:3},
	w = {id:4};
m.set(x, y);
x = null;			// the object { id: 1 } is GC-eligible
y = null;			// the object { id: 2 } is GC-eligible
m.set(z, w);
w = null;			// {id: 4} is not GC-eligible. The reference z is still pointing to this value. So the map is holding on to this value.

Sets
A set is a collection of unique values (duplicates are ignored).
Set uniqueness does not allow coercion, so 1 and "1" are considered distinct values.
var s = new Set();
var x = {id:1},
	y = {id:2};
s.add( x );
s.add( y );
s.add( x );
s.size;							// 2
s.delete( y );
s.size;							// 1
s.clear();
s.size;							// 0

There is add()/delete(), there is no set()/get()

Constructor-
var s = new Set([1,2,2,3,3,4,5,6,7,7]);   //expects a values list (it de-duplicates values in the array!)
The Set() constuctor can also receive an iterable, like another set

s.has(x);    //true or false
s.keys();    //an iterator that gives references to each value
s.values();  //same as keys()
entries = [...s.entries()];   //2X2 array where name and value both point to value
The default iterator for a set is its values() iterator.

WeakSets
a WeakSet holds its values weakly (there aren't really keys).
WeakSet values must be objects, not primitive values as is allowed with sets.

var s = new WeakSet();
var x = {id:1},
	y = {id:2};
s.add( x );
s.add( y );
x = null;						// x is GC-eligible
y = null;						// y is GC-eligible

6.6)API Additions
ES6 adds many static properties and methods to various built-in natives and objects

Array
ES5 Array.slice(begin,end):  Take an array, and return a new array with values from property "begin" to property "end".
If begin is not specified, use 0. If end is not specified, use arr[length-1].

Array.of() - a new Array constructor
var a = Array(3);        a.length is 3 and a[0] is undefined   (an empty array)
var b = Array.of(3);	 a.length is 1 and a[0] is 3
Array.of(1,2,3) is same as Array(1,2,3)

Array.from() - convert array-like to an array / also copy an array
An "array-like object" in JavaScript is an object that has a length property on it.

ES5 convert an array-like into an array:
var arrLike = {
	length: 3,
	0: "foo",
	1: "bar"
};
var arr = Array.prototype.slice.call(arrLike);
var ar2 = ar1.slice();                              //you can also duplicate an array

var arr = Array.from( arrLike );   //creates a new array
var arrCopy = Array.from( arr );   //creates a new array which is a copy

Array.from() looks to see if the first argument is an iterable and if so, it uses the iterator to produce values to "copy" into the returned array.
var arrLike = {
	length: 4,
	2: "foo"
};
Array.from(arrLike);    // [ undefined, undefined, "foo", undefined ]

Producing arrays with empty slots-
var a = Array( 4 );								// four empty slots!
var b = Array.apply( null, {length:4} );
var c = Array.from( {length:4} )
Never work with arrays that have empty slots in them, they behave differntly with different array methods

Array.form() takes two more arguments: callback and thisObject
var arrLike = {
	length: 4,
	2: "foo"
};
var t = Array.from(arrLike, function mapper(val,idx){
	if (typeof val == "string") {
		return val.toUpperCase();
	}
	else {
		return idx;
	}
}, optionalObjectForThisInsideTheCallback);  //t is [0,1,FOO,3]

string.repeat(); 

Fetch function. Works natively with browsers to fetch data.
fetch('http://api.open-notify.org/astros.json').then(console.log); //it outputs the entire response object.
it has a then function that runs as soon as the fetch resolves
*/

Useful -

typeof x;
Object.create(x);
Object.assign(destination, source1, source2, sourceX);
Object.getOwnPropertyDescriptor( myObject, "a" );
Object.defineProperty( obj, "a", { } );
Object.preventExtensions(obj)
Object.seal(obj)
Object.freeze(obj)
myObject.hasOwnProperty("a");   //Object.prototype.hasOwnProperty.call(myObject,"a")
myObject.propertyIsEnumerable("a");
Object.keys(obj);
Object.getOwnPropertyNames(obj);
Object.getPrototypeOf(a)
Object.setPrototypeOf( child, parent );  //es6
Object.getPrototypeOf(a);
Object.is(x,y);  //check for equality for any two variable types
a.isPrototypeOf(b);
a instanceof Foo;

arr.forEach(g)
arr.every(g)
arr.some(g)
arr.map(g)/filter(g)/reduce(g)

str.charAt(5)
num.toPrecison(x)
num.toFixed(x)


