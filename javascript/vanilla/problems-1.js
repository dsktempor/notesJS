//Exercises
//Exercise 0: rewrite everything in this with => arrow function
(function IIFE(){

	function foo(x) {
		var y = x * 2;

		return function bar(z) { //you don't really need to name this func at all unless you are calling it from inside it..
			if (z.length > 3) {
				return z.map( function baz(v){ 
					if (v > 3) return v + y;
					else return baz( v * 4 );
				} );
			}
			else {
				var obj = [];

				setTimeout( function bam(){
					obj.length = 1;
					obj[0] = this.w;
				}.bind( this ), 100 );

				return obj; 
				/*BIG NOTE: Even though setTimeout is async and runs only after 1 second. The return obj; line immediately runs and returns [],
				so list1 is temporarily []. And it continues executing to the second setTimeout. After 1 second, in the background list1 becomes
				[42] and the second timeoout's code runs only after 2 seconds by the time which list1 is already [42]. So in the background
				list1 changed from [] to [42] eventhough you immediately returned obj; */
			}
		};
	}

	var p = foo( 2 );
	var list1 = [1,3,4];
	var list2 = list1.concat( 6 );   

	list1 = p.call( { w: 42 }, list1 );   //this is [42], but it set only after 1 second.
	list2 = p( list2 );     //this is [8,16,8,10]

	setTimeout( function(){
		console.log( list1[0] === list2.reduce( function(s,v){   //is 42 = 
			return s + v;
		}, 0 ) );
	}, 200 );
})();

//Exercise 0 Solution: See the file ex0 question in the folder.
((foo,p,list1,list2) => {    //since unused arguments are not used. Use this as a place to declare variables! var foo, var p etc. 
	foo = (x,y = x * 2) =>   // default arguments
		function bar(z,baz,obj) {    //since unused arguments are not used. Use this as a place to declare variables!
			if (z.length > 3) {
				return z.map( baz = v =>   //you need to assign arrow function so that it can call itself!Note: baz is a variable that is assigned to this arrow function.
					v > 3 ? v + y : baz( v * 4 )  //also baz.name would actually give you "baz", meaning it does have name inferencing.
				);                           //there is no such thing as a named arrow function
			}
			else {
				obj = [];

				setTimeout( () =>
					(obj.length = 1,
						obj[0] = this.w)
					, 100
				);    //bind() is not required here. 'this' means obj since arrow funcs don't have any defined 'this' the nearest outside 'this' is chosen

				return obj;
			}
		};
	p = foo( 2 );
	list1 = [1,3,4];
	list2 = list1.concat( 6 );

	list1 = p.call( { w: 42 }, list1 );  //you cannot make a .call() on an arrow function. That is why the function BAR is declared!!
	list2 = p( list2 );

	setTimeout( () =>
		console.log( list1[0] === list2.reduce( (s,v) => s + v, 0 ) )  //just put a comma and put the second argument for the .reduce() func.
		, 200
	);
})();

//Exercise 1 : Complete the code so that the console.log is true. 
var x = 2, fns = [];

(function(){  //this is called an IIFE in JS - immediately invoked function expression . 
	var x = 5;

	for (var i=0; i<x; i++) {
		// complete code here  
		//Set an array of function that close over a value
	}
})();

console.log((x * 2) === fns[x*2]() );  //this should be TRUE

//Solution to exercise 1
for (var i=0; i<x; i++) {  // or just make this a let and remove j.
		let j = i;
		fns[j] = () => j; //so fns[0] = function(){return 0};
		//basically each function closes over j. j is locked for each function. 
} //at the end of the loop the one common i variable is stuck at 5. But j is enclosed in the closure's state if and when it executes
//the outside x can be declared as a CONST, since its reference did not change in the program
//fns[] need not be declared as a CONST, because in the for loop you are changing its value by adding functions to it. Putting const will just confuse the reader.

//Exercise 2 :implement function foo so that the output of the console.log is true
function foo() { }

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return foo();
}

console.log(
	bar().join("") === "281012"
);

//Answer to exercise 2, foo needs to return [2,8,10,12]
function foo(x,y,z,...args) {  //gather the rest of a2 to args
    return [x,...args];    //spread them into individual numbers
}

//Exercise 3 :
function ajax(url,cb) {
	// fake ajax response:
	cb({
		foo: 2,
		baz: [ 6, 8, 10 ],
		bam: {
			qux: 12
		}
	});
}
function check(data) {
	console.log(   //the data object here must be such that the sum is equal to 56!
		56 === (
			data.foo +
			data.bar + // so bar is in defaults..
			data.baz[0] + data.baz[1] + data.baz[2] +
			data.bam.qux +   //qux and qam are also in defaults. So data must have defaults in it too...
			data.bam.qam
		)
	); //this has to return true
}
var defaults = {
	foo: 0,
	bar: 4,
	bam: {
		qux: 0,
		qam: 14
	}
};
function response( /*do object destructuring here*/) {

	check({
		/*do object restructuring here*/
	});

}
ajax("http://fun.tld",response);  //on success, the callback response is called with the object

//answer to exercise 3
function response( {foo, baz, bam:{ qux} } ) {  //i am using ES6 concise properties since the names match
	//now i have foo,baz and qux
	check({
		foo,      //2
		bar: defaults.bar,   //4
		baz,     //6+8+10=24
		bam: {
			qux,      //12 //i don't need defaults.bam.qux bcoz the sum won't be 56..
			qam: defaults.bam.qam    //14
		}
	});
	//now 2 + 4 + 24 + 12 + 14 = 56. done!
}
//ideally you should have put default values all around in the destructuring. 
function response( {foo=defaults.foo, baz =[], bam:{ qux=defaults.bam.qux}={} }={} ) {  /*function code here */ }


//Exercise 4: Implement the TAG function upper and also complete the string template in the console.log
function upper(strings,...values) {}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	`Hello ____ (@____), welcome to the ____!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);

//answer to exercise 4
function upper(strings, ...values){
	var str = "";
	for(i=0;i<strings.length;i++){
		if(i>0) str += values[i-1].toUpperCase();
		str += strings[i]
	}
	return str;
}
console.log(upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
    "Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!");
    
//Create an iterator for this object that iterates the values array from position start to position end
//an iterator is just an object that has a .next() method
var obj = {
	values: [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34],
	start: 4,
    end: 13
}
//answer
var obj = {
    //this is like declaring a constructor function, in this case, declaring the iterator function of the object. 
	[Symbol.iterator](){                           // a concise method that creates an iterator for this object. (... by default calls the Symbol.iterator() function)
		var idx = this.start;
		var en = this.end                          //'this' mean obj object here
		return {
			next : () => {
				var v = this.values[idx];          //since i used arrow function, 'this' means obj object. Don't need any binding.
				idx ++; 
				if(idx>en) return {done:true}      //v is automatically undefined. Iterator stop right here. 
				else return { value:v,done:false }  
			}
		}
    }
    *[Symbol.iterator](){                         // a concise generator method that creates an iterator for this object
		for(i=this.start;i<=this.end;i++){
			yeild this.values[i];                 // DONE. Each time you call the function, it will return one value.. 
		}
	}
}
//you can now spread the object since it now has an iterator
var vals = [ ...obj]; //... works only on something that is iterable. Vals will be an array [10,12,14 to 28]    

//Exercise 5: Define a numbers object that is iterable. It should print 0 to 10. It should allow for a custom iterator as shown
var numbers = {
	// ..
};
// should print 0..10 by 1s
for (let num of numbers) {
	console.log(num);
}
// should print 6..30 by 4s
for (let num of /*..*/) {
	console.log(num);
}

//answer to exercise 5
var numbers = {	
	*[Symbol.iterator]( {start = 0,incr = 1,end = 10} = {} ) {  //object destructuring pattern
		for(i=start;i<=end;i=i+incr){
			yield i; 
		}
	}
};
// should print 0..100 by 1s
for (let num of numbers) {   //that's why the default object in the iterator function is set to {}
	console.log(num);
}
// should print 6..30 by 4s   ///print 6 to 30 in increments of 4
for (let num of numbers[Symbol.iterator]({start:6,end:30,incr:4}) ) {   //object is passed
	console.log(num);
}

//Create a Ranges functionality in JS. Like in python [...8] gives an array [0,1,2,3... 8]
//So first i need to make number iterable. Meaning i need to make its wrapper object Number iterable. 
Number.prototype[Symbol.iterator] = function*(){
	//here 'this' is the Number object, which when coerced is Number.value
	for(i=0;i<=this;i++){
		yield i;
	}
}
[...8];// gives [0,1,2,3,4,5,6,7]