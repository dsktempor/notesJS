// Notes from  https://github.com/getify/You-Dont-Know-JS

/*
Out there funcs
Number(x)  (coerce x to be a number)
y.toFixed(2)   (y should be a number)

 
*/

/*
CHAPTER 1: UP AND GOING

statement  ;
variable   a,b  (most useful programs need to track a value as it changes over the course of the program) (assign a value to a symbolic container)
literal   5,'rt'
operator

that's it. At a high level every line of code is the above 4.

expressions (An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators.)
a = b * 2; this has 4 expressions: a,b,b*2,a=b*2

b * 2; this is an expression statement (it's really not doing anything)
alert(a); another expression statement

The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code. (its not exactly an interpreted language)

operators (assignment, math, compound assignment, object propert access, equality, comparison, logical)

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
switch case break case break case break default 



*/
