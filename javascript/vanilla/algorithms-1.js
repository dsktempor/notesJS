/* Basic algorithms */

/* References:
Link to GitHub repo: https://github.com/StephenGrider/algocasts
How to solve - a book by george polya
Sorting animations webiste: https://www.toptal.com/developers/sorting-algorithms
Visualise sorts: https://visualgo.net/en/sorting
Visualise Linked Lists: https://visualgo.net/en/list
Visualise Heap: https://visualgo.net/en/heap
*/

/*
Algorithm: A set of steps to accomplish a certain task. The foundation of a software developer.

Good algos are highly performant. There is always 'the best' solution.
Try to identify when your code slows down, find the inefficient points.

Factors to judge an algorithm-
>Time complexity / speed
>Space complexity / memory usage
>Is the code clean and readable

When testing time of your algo -
>Different machines will record different times
>The same machine wll recored different times in different trys
>Speed measurement may not be precise enough in your machine/environment

Instead of counting time, count the number of simple operations your algo has to perform. This is what big(o) does.
Algo complexity: Big'O' Notation - how the runtime of an algorithm grows as the input size grows.

In order of increasing time:
1       - constant time
log(n)  - logarithimic time  (searching a sorted array) (this is almost as good as O(1))
n       - linear time
nlog(n) - quasilinear time (sorting an array)
n^2     - quadratic time
2^n     - exponential time

Constants don't matter in BigO notation: BigO does'nt care about precision, just general trend.
O(10n), O(50n+10) is O(n)
O(2n^2), O(n^2) +5n +2) is O(n^2)
O(500) is O(1)
O(n^2 + n^3) is O(n^3)
Addition/sub/mult/div, assignments are all constants
array[index], obj{key} access is constant
For a loop: length of loop times complexity of each iteration

O(n+m) iterating through two different sets of data
O(n*m) two for loops of different sizes, one inside the other

Space Complexity in JS-
Boolean, numbers, undefined and null are constant space
String are O(n) space where n is the string length
Arrays and objects are also O(n) space where n is the number of keys in the object
So, just add up all the extra NEW vars you use in your algo and determine your space complexity.

Logarithms: The inverse of exponentiation (like div is the inverse of mult)
3^x=100, so Log(100)base3= x
2^3=8, so Log(8)base2 = 3    [Log(value)base2 = exponent]
So Log(n) means, your input n has to go up by a lot..... then only your RHS (exponent or time) will go by 1. You can see, it is the inverse of exponentiation.
	In exponentiation, if your input (exponent) goes by 1.... then your RHS (time) will go up by a lot!
Every Log must have a base. But in Big O, for simplicity, you just say Log(n) and not Log(n)base2
Log(n)base 2 means: the number of times you can divide n by 2, before you get a value <=1.

JS built-ins and their BigO-
Objects - these are unordered. So use these if you don't need any order.
Insertion: O(1)        Removal: O(1)         Access: O(1)         Searching: O(n) [i.e searching for a value not searching for a key...]
Object.keys(), Object.values(), object.entries() - O(n)
obj.hasOwnProperty() - O(1)    [it just tries to access it directly and checks if it is undefined]
Arrays - these are ordered left to right
Access: O(1)        Searching: O(n)       Insert at End: O(1)        Remove at End: O(1)
Insert anywhereElse: O(n)      Remove anywhereElse: O(n)     (you need to re-index/move all the other elements, that's why O(n))
concat:O(n)   slice:O(n)   splice:O(n)    sort:O(nlogn)    forEach/map/filter/reduce/every etc:O(n)

Problem Solving Plan:
>Understand the problem properly: Restate it in your own words (abstract out all the crap, what is the core issue?), what inputs (their types, sizes) go in, what outputs (formats) come out, do you have enough info about your problem.
>Explore concrete examples: These can act as your test cases too. Explore simple examples.. then try edge cases. Try invalid or empty inputs. (different user stories)
>Break down the problem: Identify the different issues in the problem. Write some pseudocode/comments for each part of the problem. Interviewer now knows you almost have a solution.
>Write Code: Convert pseudocode/comments to code. If there is some edge case/difficult sub-problem you can't solve, just ignore that part, assume you've done it, and do the rest of the solution.
>Lookback and refactor: Better variable names, use clean ES6 code. What is the time and space complexity? Can you improve them? Is there a completely different solution?

Common Problem Solving Patterns:
Frequency counters: Use an object/set to collect/count frequencies of values. (characterMaps)
Mutilple Pointers: creating pointer or values that correspond to an index, and then move these pointers towards the middle/end/beginning
Sliding Window: Create a window which can either be an array or number from one position to another. Depending on a condition, the window expands/closes.
Divide & Conquer: Divide a data set into smaller chunks and then repeating a process with a subset of data. (binary search in a sorted array)

Recursion: Taking one problem, and solving it over and over on a smaller peice or changing peice untill you reach some end point.
JSON.parse, JSON.strigify, document.getElementByID are often implemented as recursive functions by browsers.
Call Stack: browser maintains a stack (FILO) of functions that have been called. When a function returns a value, it is removed from the top of the stack.
If you base case is not there or never hit: In JS, you will get - RangeError: Maximum call stack size exceeded  (Stack Overflow!)
In recursion, often you need to make copies: so for arrays use - slice, spread, concat etc, for strings use slice, substr etc, For objects use spread, Object.assign

Sorting in JS: Array.sort(), it converts everything to string and then sorts them! so 10 comes before 4 !!
Use [6,10,4,15,20].sort( (a,b) => a-b );  to sort JS numbers.

Data Structures - You can't always rely on JS built-ins like arrays and objects. You need other structures to hold data better and process data better.
Each data structure is good at something - insert, remove, read, sort, search etc.


Useful JS hacks-
/[a-z0-9]/.test(character)
someArray.splice(someIndex,1);    //removes an element at a particular index, and then shifts all the others.
someArray.every((char,i) => {})
Array.from();
Math.floor, Math.pow, Math.log10, Math.abs, Math.sign(-20)
for (c of stringValue) { }
obj.hasOwnProperty(abc)
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
for (key in someObj) { }
for (index in someArray) { }
someArray.slice(beginIndex,endIndex);           (endIndex is not included)
someString.replace(/[^a-zA-Z0-9]/g,"");          (remove all non alpha numerics)
Any string, convert to array and then sort/reverse
someString.repeat(27)                     (returns a string concated 27 times)
someString.match(/[aeiou]/g)             (returns an array of matches or NULL)
someString.includes(otherString)        (boolean, if one string is there in the other or not)
someArray.includes(x)                    (boolean, checks if x is in the array or not)

*/

// String Reversal: Given a string, return a new string with the reversed order of characters.
function reverse(str) {
	return str.split('').reverse().join('');
	// or
	return str.split('').reduce((rev, char) => char + rev, '');
}
function reverse(str) {
  let reversed = '';
	for (let character of str) {
    reversed = character + reversed;
  }
	return reversed;
}
function reverse(str) {
	var k = '';
	for (i = str.length - 1; i >= 0; i--) {
		k = k + str[i];
	}
	return k;
}

// Palindrome check: Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that form the same word if it is reversed.
// Just check if the reversed string === given string.. or -
function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

// Integer Reversal: Given an integer, return an integer that is the reverse ordering of numbers.
function reverseInt(n) {
	const reversedString = n.toString().split('').reverse().join('');
	return parseInt(reversedString) * Math.sign(n);
}

// Max Chars: Given a string, return the character that is most commonly used in the string.  (build a character map)
function maxChar(str) {
	const charMap = {};
	for (let c of str) {
		if (charMap[c]) {
			charMap[c]++;
		} else {
			charMap[c] = 1;
		}
	}

	let max = 0;
	let maxChar = '';
	for (let key in charMap) {
		if (charMap[key] > max) {
			max = charMap[key];
			maxChar = key;
		}
	}

	return maxChar;
}

// Fizzbuzz: Console log the numbers from 1 to n. But for multiples of three print “fizz” instead of the number and for the multiples of five print “buzz”. For numbers which are multiples of both three and five print “fizzbuzz”.
function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else {
			console.log(i);
		}
	}
}

// Array chunking: Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.
function chunk(array, size) {
	var r = [];
	var limit = 1;
	var subArray = [];
	for (a of array) {
		if (limit < size) {
			subArray.push(a);
			limit++;
		} else if (limit === size) {
			subArray.push(a);
			r.push(subArray);
			subArray = [];
			limit = 1;
		}
	}

	if (subArray.length > 0) {
		r.push(subArray);
	}
	return r;
}
function chunk(array, size) {
	const chunked = [];
	let index = 0;

	while (index < array.length) {
		chunked.push(array.slice(index, index + size));
		index += size;
	}

	return chunked;
}

// Anagrams: Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case.
function anagrams(stringA, stringB) {  //O(n)

	function buildCharMap(str) {
		const charMap = {};
		for (let c of str.replace(/[^\w]/g, '').toLowerCase()) {
			charMap[c] = charMap[c] + 1 || 1;
		}
		return charMap;
	}

	const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function anagrams(stringA, stringB) {

	function cleanString(str) {
		return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	}

	return cleanString(stringA) === cleanString(stringB);
}

// Sentence Capitalization: Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.
function capitalize(str) {
  const words = [];
	for (let w of str.split(' ')) {
    words.push(w[0].toUpperCase() + w.slice(1));
  }
  return words.join(' ');
}

// Printing Steps: Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!
// '#  '
// '## '
// '###'
function steps(n) {
	let thisRow = '';
	for (let i = 1; i <= n; i++) {
			thisRow = ''
			for (j = 1; j <= n; j++) {
					if (j <= i) {
						thisRow += '#';
					} else {
						thisRow += ' ';
					}
			}
			console.log(thisRow);
	}
}
function steps(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}

	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	const add = stair.length <= row ? '#' : ' ';
	steps(n, row, stair + add);
}

// Pyramid: Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character. Make sure the pyramid has spaces on both the left and right hand sides
// '  #  '
// ' ### '
// '#####'
function pyramid(n) {
	let numberOfSpaceInThisRow = 0;
	let numberOfHashInThisRow = 0;
	let currentRow = '';
	let hash = '#';
	let space = ' ';

	for (let i = 1; i <= n; i++) {
		numberOfSpaceInThisRow = 2*n - 2*i;
		numberOfHashInThisRow = 2*i - 1;
		currentRow = space.repeat(numberOfSpaceInThisRow / 2) + hash.repeat(numberOfHashInThisRow) + space.repeat(numberOfSpaceInThisRow / 2);
		console.log(currentRow);
	}
}

function pyramid(n, row = 0, level = '') {
	if (row === n) {
		return;
	}

	if (level.length === 2 * n - 1) {
		console.log(level);
		return pyramid(n, row + 1);
	}

	const midpoint = Math.floor((2 * n - 1) / 2);
	let add;
	if (midpoint - row <= level.length && midpoint + row >= level.length) {
		add = '#';
	} else {
		add = ' ';
	}
	pyramid(n, row, level + add);
}

// Count of Vowels: Write a function that returns the number of vowels used in a string. (aeiou)
function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches !== null ? matches.length : 0;
}
// or loop through each char in the string, check if c.toLowerCase() is aeiou and incrememt counter.

// Spiral Matrix: Write a function that accepts an integer N and returns a NxN spiral matrix.
//   matrix(2)
//     [[1, 2],
//     [3, 4]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function matrix(n) {
	var m = [];
	for (i = 0; i < n; i++) {
		m.push([]);
	}

	let rowStart = 0;
	let rowEnd = n - 1;
	let colStart = 0;
	let colEnd = n - 1;
	let counter = 0;
	while (rowStart <= rowEnd && colStart <= colEnd) {
		for (i = colStart; i <= colEnd; i++) {
			m[rowStart][i] = ++counter;
		}
		rowStart++;

		for (j = rowStart; j < rowEnd; j++) {
			m[j][colEnd] = ++counter;
		}
		colEnd--;

		for (k = colEnd; k >= colStart; k--) {
			m[rowEnd][k] = ++counter;
		}
		rowEnd--;

		for (l = rowEnd; l >= rowStart; l--) {
			m[l][colStart] = ++counter;
		}
		colStart++;
	}

	return m;
}

// Fibonacci: Print out the n-th entry in the fibonacci series. Each number is the sum of the preceeding two. Example: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.
function fibo(n) {
	if (n === 1) {
		return 0;
	} else if (n === 2) {
		return 1;
	} else {
		let a = 0;
		let b = 1;
		let sum;
		for (let i = 3; i <= n; i++) {
			sum = a + b;
			a = b;
			b = sum;
		}
		return sum;
	}
}
function fib(n) {   // O(n)  (bottom-up approach)
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
		result.push( result[i-1] + result[i-2] );
  }

  return result[n];
}

function fibViaRecurssion(n) {  // (top-down approach) O(2^n) !!! fib(45) on chrome takes 10 seconds. fib(100) crashes chrome. (i.e without memoization)
	if (n < 2) {       // memoized fibo is O(n)
		return n;
	}

	return fib(n - 1) + fib(n - 2);  //you call fib here and not fibViaRecurssion.  fib(n-2) subtree does not run untill the whole fin(n-1) sub tree finishes
}
function memoize(fn) {          //MEMOIZE a given function..!
	const cache = {};
	return function (...args) {
		if (cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	};
}
const fib = memoize(slowFib);

// Queue: Create a queue data structure.  FIFO. The queue should be a class with methods 'add', 'remove' and 'peek'. Adding to the queue should store an element until it is removed.
// queues are used all over the place in computer science.
class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {  //(enqueue)
		this.data.unshift(record);                      //adds an element to the beginning - O(n).    You can even do push() and shift(), but even there one of them is o(n), so array is bad.
	}

	remove() {   //(dequeue)
		return this.data.pop();                         //returns the last element by removing it - O(1)
	}

	peek() {
		return this.data[this.data.length - 1];        //returns the last element without removing it
	}
}

//Queue can also be implemented with SinglyLinkedList. Add to the end and remove from the beginning. Both are O(1)
//Insertion and removal are O(1).  Searching and access are O(n)
class QueueWithSinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		return ++this.size;
	}

	dequeue() {
		if (!this.head) return null;

		var temp = this.head;
		if (this.head === this.tail) {
			this.tail = null;
		}
		this.head = this.head.next;
		this.size--;
		return temp.value;
	}
}

// Weave two queues. Given two queues, weave their elements into a new queue and return it.
function weave(sourceOne, sourceTwo) {
	const q = new Queue();

	while (sourceOne.peek() || sourceTwo.peek()) {
		if (sourceOne.peek()) {
			q.add(sourceOne.remove());
		}

		if (sourceTwo.peek()) {
			q.add(sourceTwo.remove());
		}
	}

	return q;
}

// Stack: Create a stack data structure. LIFO. The stack should be a class with methods 'push', 'pop', and 'peek'.  Adding an element to the stack should store it until it is removed.
// Examples - function call stack, undo/redo actions in programs, routing browser history
class Stack {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.push(record);         //O(1), You can even use shift and unshift but it will be O(n)
	}

	remove() {
		return this.data.pop();         // O(1)
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

// You can also implement it with a singly linked list. But you can't use the Linked List's push and pop, pop takes O(n). So use shift() and unshift(), both take O(1).
// Insertion and removal are O(1). Searching and access are O(n)
class StackWithSinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	add(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			var temp = this.head;
			this.head = newNode;
			this.head.next = temp;
		}
		return ++this.size;
	}
	remove() {
		if (!this.head) return null;
		var temp = this.head;
		if (this.head === this.last) {
			this.last = null;
		}
		this.head = this.head.next;
		this.size--;
		return temp.value;
	}
}

// Queue from stack. Implement a queue data structure using two stacks only. (no arrays)
class Queue {
	constructor() {
		this.s1 = new Stack();
		this.s2 = new Stack();
	}

	add(x) {
		this.s1.add(x);
	}

	remove() {
		let retVal;
		while (this.s1.peek()) {
			this.s2.add(this.s1.remove())
		}
		retVal = this.s2.remove();
		while (this.s2.peek()) {
			this.s1.add(this.s2.remove())
		}
		return retVal;
	}

	peek() {
		let retVal;
		while (this.s1.peek()) {
			this.s2.add(this.s1.remove())
		}
		retVal = this.s2.peek();
		while (this.s2.peek()) {
			this.s1.add(this.s2.remove())
		}
		return retVal;
	}

}

// Linked List: Implement classes Node (data, next) and Linked Lists -
// constructor(), size(), clear()
// insertFirst(data), removeFirst(), getFirst()
// insertLast(data), removeLast(), getLast()
// insertAt(data, index), removeAt(index), getAt()
// forEach(n), iterator
class Node {
	constructor(data, next = null) {     //Normally, the only argument for the constructor is the data argument.
		this.data = data;
		this.next = next;
	}
}

class LinkedListOne {
	//For any linkedList function you write, make sure it works for 1)empty list    2)list with one node     3)list with 4 nodes   DONE
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	forEach(g) {              // Traverse the list and apply function g on each element's data. Function g takes a node and it's index in the list as arguments.
		let node = this.head;
		let currentIndex = 0;
		while (node!==null) {
			g(node, currentIndex);
			node = node.next;
			currentIndex++;
		}
	}

	*[Symbol.iterator]() {    //A generator that yields the next node
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {         //empty list
			return null;
		}

		let node = this.head;
		while (node.next !== null) {
			node = node.next;
		}
		return node;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}

		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {          //empty list
			return;
		}

		if (!this.head.next) {     //one item list
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;
		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}

	insertLast(data) {
		const last = this.getLast();

		if (last) {
			// There are some existing nodes in our chain
			last.next = new Node(data);
		} else {
			// The chain is empty!
			this.head = new Node(data);
		}
	}

	getAt(index) {       //Linked List's first element's index is 0
		let counter = 0;
		let node = this.head;

		while (node!==null) {
			if (counter === index) return node;
			node = node.next;
			counter++;
		}

		//it comes here for empty list. It also comes here if index>listLength
		return null;
	}

	removeAt(index) {
		if (!this.head) {            //empty list
			return;
		}

		if (index === 0) {           //remove the first element
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}

	removeAtTwo(i) {                         // my version
		if (!this.head) return;             //empty list

		if (index === 0) {                 //remove the first element
			this.head = this.head.next;
			return;
		}

		let counter = 0;
		let n = this.head;
		while (n !== null && counter<i-1) {
			n = n.next;
			counter++
		}
		if (counter < i) return;  //i.e they asked to remove item 6 in a list of size 3.
		// by now you are at the node at index i-1.
		n.next = n.next.next;
	}

	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}

}

//Linked List defintion 2: A data structure that contains a head,tail and length property.
// Insertion and deletion in the middle of list is faster than in the middle of an array.
// Insertion O(1) i.e push/unshift.   Removal O(1) for shift, o(n) for pop.
// Searching O(n), Access at particular index O(n)
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {          // Add an element to the end (InsertLast)
		let n = new Node(val);
		if (!this.head) {
			this.head = n;
			this.tail = n;
		} else {
			this.tail.next = n;
			this.tail = n;
		}
		this.length++;
		return this;
	}

	pop() {               //Remove the last element  (removeLast)
		if (!this.head) return;

		var current = this.head;
		var newtail = current;
		while(current.next){
			newtail = current;
			current = current.next;
		}
		this.tail = newtail;
		this.tail.next = null;
		this.length--;

		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	shift() {             //Remove node from the begining of the list (removeFirst)
		if (!this.head) return;

		var k = this.head;
		this.head = this.head.next;
		this.length--;

		if(this.length===0) this.tail=null;

		return k;
	}

	unshift(val) {            //Add an element to the begining. (InsertFirst)
		var k = new Node(val);

		if(!this.head){
			this.head = k;
			this.tail = k;
		} else {
			k.next = this.head;
			this.head = k;
		}
		this.length++;
		return this;
	}

	get(i) {              // Get item at index i, same as getAt()
		if (i < 0 || i >= this.length) return;

		let counter = 0;
		let n = this.head;
		while (counter !== index) {
			n = n.next;
			counter++
		}
		return n;
	}

	set(i,val) {          //Set item at index i, i.e overwrite the value at that index (if it is there)
		let n = this.get(i);
		if(n) {
			n.value = val;
			return true;
		}
		return false;
	}

	insert(i,val) {       //Insert item at index i, same as insertAt()
		if (i<0 || i>this.length) return false;

		if(i === this.length) {this.push(val);   return true;}
		if(i === 0) {this.unshift(val);   return true;}

		//i.e trying to add it somewhere in the middle
		let k = new Node(val);
		let prev = this.get(i-1);

		k.next = prev.next;
		prev.next = k;
		this.length++;
		return true;
	}

	remove(i) {           //Remove item at index i, same as removeAt()
		if (i < 0 || i > this.length) return false;

		if (i === this.length-1) { this.pop; return true; }
		if (i === 0) { this.shift(); return true; }

		//i.e trying to remove something in the middle
		let prev = this.get(i-1);
		let removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {          //Common question. Don't make any duplicate of the list. You just have to traverse the list and flip the direction of the next pointers in each node.
		if(this.length<=1) return;

		this.tail = this.head;
		let prev = this.head;
		let current = this.head.next;
		while(current!==null) {
			nextDestination = current.next;

			current.next = prev;  //flip the direction

			prev = current;
			current = nextDestination;
		}
		this.head = prev;

	}

	reverseInstructorCode() {
		let n = this.head;
		[this.head, this.tail] = [this.tail, this.head]   //swap

		var next;
		var prev = null;
		for (var i = 0; i < this.length; i++) {
			next = n.next;
			n.next = prev;
			prev = n;
			n = next;
		}
		return this;
	}

	printAll() {
		var arr = [];
		var current = this.head
		while (current) {
			arr.push(current.val)
			current = current.next
		}
		console.log(arr);
	}
}

//Doubly LinkedList: Each node has a next and prev pointer. HEAD's prev is null, TAIL's next is null. Everyother node has prev and next.
// Insertion O(1) i.e push/unshift.   Removal O(1) for shift/pop
// Searching  O(n/2) which is O(n), Access at particular index O(n)
// So these are basically the same as singly linked lists, except that these have prev pointers which optimizes pop() and search()
// Browser history is like a DLL, you can go back and go forwards..
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {        // Add node to the last
		let k = new Node(val);
		if (this.length===0) {
			this.head = k;
			this.tail = k;
		} else {
			k.next = null;           //not required, by default it is anyway null as it was just created.
			k.prev = this.tail;
			this.tail.next = k;
			this.tail = k;
		}
		this.length++;
		return this;
	}

	pop() {           // Remove node from the last
		if (this.length===0) return;

		let removedNode = this.tail;
		if (this.length===1){
			this.head = null;
			this.tail = null;
		} else {
			//i.e list has more than one item
			this.tail = removedNode.prev;            //disconnect the last element from second last
			this.tail.next = null;
			removedNode.prev = null;                 //make sure you remove this connection too, remove node must also not be connected to anything
		}

		this.length--;
		return removedNode;
	}

	shift() {         // Remove node from first
		if (this.length===0) return;

		let removedNode = this.head;
		if (this.length===1){
			this.head = null;
			this.tail = null;
		} else {
			// there are atleast two elements in the list
			this.head = removedNode.next;
			this.head.prev = null;
			removedNode.next = null;     //make sure you remove even this connection
		}
		this.length--;
		return removedNode;
	}

	unshift(val){     //Add node at the first
		let k = new Node(val);

		if(this.length===0){
			this.head = k;
			this.tail = k;
		} else {
			//there is atleast one element in the list. 3 links need to change.
			k.next = this.head;
			this.head.prev = k;
			this.head = k;
		}
		this.length++;
		return this;
	}

	get(i) {					//Get the node at position i
		// You can actually do the same thing as singlyLinkedList, but instead, you can actually optimize and use prev.
		if(i<0 || i>=this.length) return;

		let midPoint = Math.floor(this.length/2);
		requiredIndex = i < midPoint ? i : this.length-1-i;     //if you are going to go backwards, then required index will change...

		let n = this.head;
		let counter = 0;
		while(counter!==requiredIndex){
			n = i < midPoint ? n.next : n.prev;
			counter++;
		}
		return n;
	}

	set(i,val) {       //Set (overwrite) the value at index i with val
		let n = this.get(i);
		if(n){
			n.val = val;
			return true;
		}
		return false;
	}

	insert(i,val){     //Insert a new node at index i
		if(i<0 || i>this.length) return false;
		if(i===0) return !!this.unshift(val);
		if(i===this.length) return !!this.push(val);

		//i.e inserting a new element somewhere in the middle.  (also, no need to update head or tail now)
		let k = new Node(val);

		let prevNode = this.get(i-1);   //this will never be null
		//need to update 4 links
		k.next = prevNode.next;
		k.prev = prevNode;
		prevNode.next.prev = k;
		prevNode.next = k;
		this.length++;
		return true;
	}

	remove(i){         //Remove the node at index i
		if(i<0 || i>=this.length) return;
		if(i===0) return !!this.shift();
		if(i===this.length-1) return !!this.pop();

		//i.e remove an element somewhere in the middle.
		let removedNode = this.getAt(i);    //this will never be null
		//need to update 4 links
		removedNode.next.prev = removedNode.prev;
		removedNode.prev.next = removedNode.next;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;
		return removedNode;
	}

}


// Midpoint of a linked list: Return the 'middle' node of a linked list. If the list has an even number of elements, return the node at the end of the first half of the list. Do not use a counter variable or retrieve the size of the list, and only iterate through the list one time.
function midpoint(list) {
	let slow = list.getFirst();
	let fast = list.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

// Circular List: Given a linked list, return true if the list is circular, false if it is not.
function circular(list) {
	let slow = list.getFirst();
	let fast = list.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) {
			return true;
		}
	}

	return false;
}

// nth item from the end of the Linked List: Given a linked list and integer n, return the element n spaces from the last node in the list.
function fromLast(list, n) {
	let slow = list.getFirst();
	let fast = list.getFirst();

	while (n > 0) {
		fast = fast.next;
		n--;
	}

	while (fast.next) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
}

// Tree: Create a node class (data + array of children), The node class should have methods add(data) and remove(data) (i.e wrt children).
// Create a tree class. The tree constructor should initialize a 'root' property to null.
// Implement 'traverseBF' and 'traverseDF' on the tree class.  Each method should accept a function that gets called with each element in the tree.
// Trees are non-linear. A tree must have only one root. A node can have only one parent. Siblings: Nodes the have the same parent.  Leaf: A node with no children. Edge: The connection from the parent to a child.
// Examples: HTML DOM, network routing, file system in OS, JSON parsers use trees, abstract syntax tree that the JS engine creates from your code, trees are used in AI for decision paths (decision trees).
class NodeTree {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {      //Adding children to a node
		this.children.push(new NodeTree(data));
	}

	remove(data) {   //Removing a child from a node
		this.children = this.children.filter(node => {
			return node.data !== data;
		});
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		const arr = [this.root];
		while (arr.length) {
			const node = arr.shift();
			arr.push(...node.children);          //add this node's children to the end of the array (i.e these belong to the next generation, so process them after this generation)
			fn(node);
		}
	}

	traverseDF(fn) {
		const arr = [this.root];
		while (arr.length) {
			const node = arr.shift();
			arr.unshift(...node.children);			//add this node's children to the beginning of the array (i.e these belong to the next generation, so process them first)
			fn(node);
		}
	}
}

// Width of each level in the tree: Given the root node of a tree, return an array where each element is the width of the tree at each level. (i.e number of siblings in each generation)
function levelWidth(root) {
	const arr = [root, 's'];
	const counters = [0];

	while (arr.length > 1) {
		const node = arr.shift();

		if (node === 's') {
			counters.push(0);
			arr.push('s');
		} else {
			arr.push(...node.children);
			counters[counters.length - 1]++;
		}
	}

	return counters;
}

// Binary Search Tree: Implement the Node class to create a binary search tree.  The constructor should initialize values 'data', 'left', and 'right'.
// BST : Each node can have max 2 children, data must be sorted left to right.
// Implement the 'insert' method for theNode class.  Insert should accept an argument 'data', then create an insert a new node at some appropriate location in the tree.
// Implement the 'contains' method for the Node class.  Contains should accept a 'data' argument and return the Node in the tree with the same value. If the value isn't in the tree return null.
class NodeBST {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(val) {
		if (val < this.data && this.left) {
			this.left.insert(val);
		} else if (val < this.data) {
			this.left = new NodeBST(val);
		} else if (val > this.data && this.right) {
			this.right.insert(val);
		} else if (val > this.data) {
			this.right = new NodeBST(val);
		}
	}

	contains(val) {
		if (this.data === data) {
			return this;
		}

		if (this.data < data && this.right) {
			return this.right.contains(data);
		} else if (this.data > data && this.left) {
			return this.left.contains(data);
		}

		return null;
	}
}

// Or implement A BST class which has all the methods (instead of Node having al the funcs). The Node constructor will be the same as above.
// Insertion and Search are both O(logn) [best,avg case] Worst case could be O(n). i.e if every node in the tree has just one child.. If you double the nodes in the tree, it just adds one more level to the tree, hence log(n).
// BFS and DFS have same time complexity O(n). For really wide trees, use DFS (you save memory, in BFS you store the whole layer, but in DFS you store less)
class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(val) {        //Insert a node at it's appropriate place in the tree
		let k = new NodeBST(val);

		if(this.root===null) {this.root = k;  return this;}      //empty tree

		let n = this.head;
		while(true) {
			if(val===n.data) return undefined;        //Do not accept duplicate values

			if(val<n.data && n.left === null) {
				n.left = k;
				return this;
			} else if (val<n.data){
				n = n.left;
			} else if (val>n.data && n.right === null) {
				n.right = k;
				return this;
			} else if (val>n.data) {
				n = n.right;
			}
		}
	}

	search(val) {          //Search for a val in the tree
		if (this.root === null) return false;       //empty tree

		let n = this.root;
		let found = false;
		while(n && !found) {
			if(val<n.data){
				n = n.left;
			} else if (val>n.data){
				n = n.right;
			} else {
				found = true;
			}
		}
		return found ? n : false;
	}

	breadthFirstTraversal() {     //use a queue
		let queue = [];
		let visitedNodes = [];
		if (!this.root) return visitedNodes;

		queue = [this.root];
		while(queue.length!==0) {
			let n = queue.shift();
			visitedNodes.push(n);
			if(n.left) queue.push(n.left);
			if(n.right) queue.push(n.right);
		}
		return visitedNodes;
	}

	depthFirstPreOrderTraversalIteration(){    //use a stack. When you visit a node, finish it's entire left side then only start it's right side.
		let visitedNodes = [];


		queue = [this.root];
		while (queue.length !== 0) {
			let n = queue.shift();
			visitedNodes.push(n);
			if (n.left) queue.unshift(n.left);
			if (n.right) queue.unshift(n.right);
		}
		return visitedNodes;
	}

	depthFirstPreOrderTraversalRecursion() {     //When you VISIT a node, finish it's entire left side then only start it's right side.
		let visitedNodes = [];
		if (!this.root) return visitedNodes;

		function goDeeper(n) {
			visitedNodes.push(n);
			if (this.left) goDeeper(this.left);
			if (this.right) goDeeper(this.right);
		}

		goDeeper(this.root);
		return visitedNodes;
	}

	depthFirstPostOrderTraversalRecursion() {     //First finish it's entire left side then it's entire right side, after that, VISIT the node
		let visitedNodes = [];
		if (!this.root) return visitedNodes;

		function goDeeper(n) {
			if (this.left) goDeeper(this.left);
			if (this.right) goDeeper(this.right);

		}

		goDeeper(this.root);
		return visitedNodes;
	}

	depthFirstInOrderTraversalRecursion() {     //First finish it's entire left side, then VISIT the node, then finsih it's entire right side. This is like printing the tree, how it actually looks, looking from left to right. For a BST, you get nodes in ascending order (sorted order).
		let visitedNodes = [];
		if (!this.root) return visitedNodes;

		function goDeeper(n) {
			if (this.left) goDeeper(this.left);
			visitedNodes.push(n);                     //only this changes.
			if (this.right) goDeeper(this.right);
		}

		goDeeper(this.root);
		return visitedNodes;
	}

}

// Validate a BST given a node. Given a node, validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than the parent
function validate(node, min = null, max = null) {
	if (max !== null && node.data > max) {
		return false;
	}

	if (min !== null && node.data < min) {
		return false;
	}

	if (node.left && !validate(node.left, min, node.data)) {
		return false;
	}

	if (node.right && !validate(node.right, node.data, max)) {
		return false;
	}

	return true;
}

// JS Event Queue: Create an 'eventing' library out of the Events class. The Events class should have methods on(eventName,f), trigger(eventName), and off(eventName)
class Events {
	constructor() {
		this.events = {};
	}

	// Register an event handler
	on(eventName, callback) {
		if (this.events[eventName]) {
			this.events[eventName].push(callback);
		} else {
			this.events[eventName] = [callback];
		}
	}

	trigger(eventName) {
		if (this.events[eventName]) {
			for (let cb of this.events[eventName]) {
				cb();
			}
		}
	}

	off(eventName) {
		delete this.events[eventName];
	}
}

// Binary heap: a binary tree. Max/Min binary heap: parent nodes are always larger/smaller than their two children. There is no order/relationship among siblings.
// All the children of each node are as full as they can be and left children are always filled out first. A level must be filled up as much as possible.
// BH are used to implement priority queues. BH are also used for graph traversal algos.
// You can implement BH via a node and tree class, but easiest was is ARRAY. If parent is at index n, left child is at 2n+1, right child is at 2n+2.
// The parent of any element is at Floor(n-1)/2
// Be default, when you insert into a binary heap, you start a whole new level ONLY after the current level is completely filled up.
class MaxBinaryHeap {
	constructor() {
		this.heapArr = [];
	}

	insert(val) {      //Just add it to the end of the array, then bubble it up the heap by swapping it with different values along the way, until it reaches it's right spot.
		this.heapArr.push(val);

		let currentLocation = this.heapArr.length-1;
		let nextParent = Math.floor( (currentLocation-1)/2 );

		while (nextParent > -1 && this.heapArr[currentLocation] > this.heapArr[nextParent]) {
			[this.heapArr[nextParent], this.heapArr[currentLocation]] = [this.heapArr[currentLocation], this.heapArr[nextParent]];  // swap

			currentLocation = nextParent;   // go one level up
			nextParent = Math.floor( (nextParent-1)/2 );
		}
	}

	remove(){        // In a binary heap, remove means, remove root. You only always remove the root from binary heaps. (i.e remove the max/min value of the entire heap)
		// remove the root and put some random number there, and then bubble-down that value appropriately, to backfill the whole tree. Normally you put the last element up at the root.

		if(this.heapArr.length===0) return;

		let getNextChildLocation = (loc) => {      // arrow function because you want 'this' to work inside this function
			let leftChild = 2 * loc + 1;
			let rigthChild = 2 * loc + 2;

			if (this.heapArr[leftChild] === undefined) {
				return;
			} else if (this.heapArr[rigthChild] === undefined) {    // left exists but right does not. Then just return left.
				return leftChild;
			} else if (this.heapArr[leftChild] > this.heapArr[rigthChild]) {
				return leftChild;
			} else {
				return rigthChild;
			}
		}

		[this.heapArr[0], this.heapArr[this.heapArr.length-1]] = [this.heapArr[this.heapArr.length-1], this.heapArr[0]];        // blindly swap root with the last element
		let returnValue = this.heapArr.pop();           // remove root completely from the heap

		let currentLocation = 0;
		let nextChild = getNextChildLocation(currentLocation);

		while(nextChild && this.heapArr[nextChild] > this.heapArr[currentLocation]) {
			[this.heapArr[currentLocation], this.heapArr[nextChild]] = [this.heapArr[nextChild], this.heapArr[currentLocation]];  //swap

			currentLocation = nextChild;     // go one level down
			nextChild = getNextChildLocation(currentLocation);
		}

		return returnValue;
	}
}

// Priority Queue: a data structure where element has a priority. Elements with higher priority are extracted before lower priority elements.
// You can implements it with a binary heap. You can even use an array, just give each element a priority, everytime you need an element, just scan the whole array for the highest priority one.
// Insertion, Extraction O(logn). Search is O(n).   It is log(base2)n because, worst case, that is the number of levels you have to bubble up after insertion or sink down after a deletion. You do 1-2 comparisons at each level.
class NodePriorityQueue {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}
class PriorityQueueMinBinaryHeap {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {      // because this is called a priority 'queue'
		let newNode = new Node(val, priority);
		this.values.push(newNode);

		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
	dequeue() {                // because this is called a priority 'queue'
		const min = this.values[0];
		const end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}


// Hash tables: Collection of key-value pairs. The keys are not oredered. They are O(1) for insertion, deletion and access (avg and best case). Worst case: O(n) for all, but depends. Search for a value will be O(n).
// Python has dictionary, JS- Objects and Map, Java go and Scala have Maps, Ruby has Hashes
// You take an key and convert it into a valid array index - which is a hash function (it takes input of variable size and gives back a hash of a fixed size)
// So at array index '10', you store a key of 'pink' and a value of '#ff69b4'. Your hash function converted your key 'pink' to index '10'.
// Hash function must return a value in O(1) time (be very fast), it must distribute values uniformly AND for the same input it must give the same output (must be deterministic)
// Handling collisions
// 1) Seperate Chaining: Just store the data at the same spot. But that spot now becomes an array of different values that have collided. (nested data structure at that index)
// 2) Linear Probing: You store only one value at one index. If there is a collision, search through the array to find the next empty spot.
class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);         // A HashTable of fixed size (default size is 53). Most hashTables use a HUGE array.
	}

	_hash(key) {             // function that returns a value between 0 to this.keyMap.length everytime.
		let total = 0;
		let WEIRD_PRIME = 31;      // Prime numbers help in spreading out keys more evenly
		for (let i = 0; i < Math.min(key.length, 100); i++) {        // Constant time, you can do i<key.length, then it becomes O(n)
			let char = key[i];
			let value = char.charCodeAt(0) - 96
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {     // Store a key-value in the hash map
		let index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];       // Seperate Chaining
		}
		this.keyMap[index].push([key, value]);    //In some cases if the same key has been passed again, then you might have to overwrite the existing value with the given new value.
	}

	get(key) {           // retrieve the value of the given key from the hash map
		let index = this._hash(key);
		if (this.keyMap[index]) {
			for (v of this.keyMap[index]) {
				if (v[0] === key) {       // an array of array arrays!
					return v[1]
				}
			}
		}
		return undefined;
	}

	keys(){            // returns all the keys in the hash map
		let arrayOfKeys = [];
		for (indexValueArr of this.keyMap) {
			if (Array.isArray(indexValueArr) && indexValueArr.length > 0) {
				for (nameValuePairs of indexValueArr) {
					arrayOfKeys.push(nameValuePairs[0]);      // for values() function, just do arrayOfKeys.push(nameValuePairs[1]);
					// if you have to return only the unique keys/values, then check if !arrayOfKeys.includes(nameValuePairs[0/1]), then only push it....
				}
			}
		}
		return arrayOfKeys;
	}

}
let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.get("maroon");
ht.keys().forEach( k => console.log(ht.get(k)) );  // prints out all the values.


// Graphs: A data structure that consists of a finite set of nodes/vertices V connected with a set of non-directed/directed edges E. Edges can also be weighted/unweighted.
// Examples: Social Networks, Mapping and routing, recommendation engines, website hyperlinks, almost everywhere.
// Storage: Use an adjaceny matrix (AM).  matrix[a][b] and matrix[b][a] = 1 if there is an edge E between them, else the value will be zero at the position.
// Adjacency List (AL): An array to store the edges of each vertex V. [ [1,5], [4,3], [2,5], [2,4] ] Meaning vertex number 0 has edges to 1 and 5. Vertex number 1 has edges to 4 and 3.
// Add vertex:[AL O(1), AM O(V^2)],  Add Edge:[AL O(1), AM O(1)],  Remove Vertex:[AL O(V+E), AM O(V^2)], Remove Edge:[AL O(E), AM O(1)]
// Query:[AL O(V+E), AM:O(1)],  Storage:[AL O(V+E), AM O(V^2)]
// AL (vs AM): Less space, faster to iterate over all edges of the graph, slower to lookup specific edge. Real world data tends to be sparse, so AL is more popular.
// Traversal: visiting every vertex of the graph once.

class GraphAdjacencyList {             // undirected graph
	constructor() {
		this.adjacencyList = {};           // this will be a one level object, the values of each key will be an array of edges for that particular key.
	}

	addVertex(v) {                       // O(1)
		if (!this.adjacencyList[v]) {      // if v already exists, just ignore this addtion.
			this.adjacencyList[v] = [];
		}
	}

	addEdge(v1, v2) {						         // O(1)      Ofcourse, you first check if v1 or v2 exist etc.. For a directed graph, you would just have one .push() line.
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	removeEdge(v1, v2) {                 //O(V+E)   You are iterating though the list of all edges in each of the two vertices.
		this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v!==v2 );
		this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v!==v1 );
	}

	removeVertex(v1) {
		var listOfExistingEdges = this.adjacencyList[v1];

		for (x of listOfExistingEdges) {
			this.removeEdge(x, v1);
		}

		delete this.adjacencyList[v1]  //remove the vertex from the adjacency list
	}

	// Examples for traversal: web crawlers, find closest matches/neighbours, shortest paths, AI uses shortest path to win game.
	myDepthFirstTraversal(f) {
		let randomStartNode = Object.keys(this.adjacencyList)[0];

		let nodesToVisit = [randomStartNode];
		let visitedNodes = [];

		while (nodesToVisit.length) {
			let justVisited = nodesToVisit.shift();
			if (!visitedNodes.includes[justVisited]) {
				visitedNodes.push(justVisited);
				f(justVisited);
				nodesToVisit.unshift(...this.adjacencyList[justVisited]);
			}
		}
	}

	dfsTraversalRecursive(startNode) {
		let visitedNodes = {};       // a simple hack. use an object instead of an array.
		let resultNodes = [];
		let adjacencyList = this.adjacencyList;

		function goDeeper(v) {
			if(!v) return null;       // author says this is the base case?! But i think this is just a safety null check.

			visitedNodes[v] = true;
			resultNodes.push(v);

			for (child of adjacencyList[v]) {     // it is not exactly child though, in a graph, it is like 'neighbor'
				if (!visitedNodes[child]) {         // this is O(1) becuase it is an object and not an array.
					return goDeeper(child);
				}
			}
		}
		goDeeper(startNode);   //inside this function, 'this' means window, therefore you declare the variable adjacencyList

		return resultNodes;
	}

	dfsTraversalIterative(startNode) {
		let visitedNodes = {};
		let resultNodes = [];
		let nodesToVisitStack = [startNode];
		let justVisited;

		while (nodesToVisitStack.length) {
			justVisited = nodesToVisitStack.pop();    // because you are using an array and doing only push and pop, the array works as a stack.
			resultNodes.push(justVisited);
			visitedNodes[justVisited] = true;

			for (child of this.adjacencyList[justVisited]) {
				if (!visitedNodes[child]) {
					nodesToVisitStack.push[child];
				}
			}
		}

		return resultNodes;
	}

	bfsTraversalIterative(startNode) {     // Visit all the neighbors at current depth first
		let visitedNodes = {};
		let resultNodes = [];
		let nodesToVisitQueue = [startNode];
		let justVisited;

		while (nodesToVisitQueue.length) {
			justVisited = nodesToVisitQueue.shift();    // because you are using an array and doing only push and shift, the array works as a queue.
			resultNodes.push(justVisited);
			visitedNodes[justVisited] = true;

			for (child of this.adjacencyList[justVisited]) {
				if (!visitedNodes[child]) {
					nodesToVisitQueue.push[child];
				}
			}
		}

		return resultNodes;
	}
}

// Dijktra's Shortest path in a weighted graph Algorithm: uses a graph and a priortiy queue. One of the world's most used algorithm.
// Examples: GPS routing, network routing for packets, biology model spread of viruses in humans, airline routing,
class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(v) {
		if (!this.adjacencyList[v]) {
			this.adjacencyList[v] = [];
		}
	}

	addEdge(v1, v2, weight) {
		this.adjacencyList[v1].push({node:v2, weight});    //ES6 shorthand syntax weight:weight is just weight
		this.adjacencyList[v2].push({node:v1, weight});
	}
}
class DijkstraSimplePriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {   //O(nLogn)
		this.values.push({ val, priority });
		this.sort();
	};
	dequeue() {               //O(n)
		return this.values.shift();
	};
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	};
}
function dijkstraAlgorithmShortestPath(v1, v2) {
	let graph = this.adjacencyList;

	let nodesToVisitQueue = new DijkstraSimplePriorityQueue();
	let previousBestNode = {};                       //this will be like {A:C, D:B, F:C, B:C}
	let shortestDistanceFromV1 = {};                 //this will be like {A:0, D:250, F:100, B:25}
	let resultantShortestPath = [];
	let resultantShortestDistance = Infinity;

	for (v of Object.keys(graph)) {      //v is the vertex name! Initialize all vertexes A,B,C as null/-Infinity.
		previousBestNode[v] = v===v1? v1 : null;
		shortestDistanceFromV1[v] = v===v1? 0 : -Infinity;
		nodesToVisit.enqueue(v, v===v1? 0 : Infinity);
	}

	let bestNodeToVisit;
	while (nodesToVisitQueue.length) {
		bestNodeToVisit = nodesToVisitQueue.dequeue().val;       //just the name of the node from {val,priority}

		if (bestNodeToVisit === v2) {	 //reached the destination
			while (previousBestNode[bestNodeToVisit]) {
				resultantShortestPath.push(bestNodeToVisit);
				bestNodeToVisit = previousBestNode[bestNodeToVisit];
			}
			resultantShortestPath.push(bestNodeToVisit);
			resultantShortestDistance = shortestDistanceFromV1[v2];
			break;
		}

		if(bestNodeToVisit || shortestDistanceFromV1[bestNodeToVisit]!==Infinity) {
			for (child of graph(bestNodeToVisit)) {   // the list of all edges for this particular node
				// calculate the new distance to child
				let totalLengthToChild = shortestDistanceFromV1[bestNodeToVisit] + child.weight;
				if(totalLengthToChild < shortestDistanceFromV1[child.node]) {
					// updating the new smallest distance to child
					shortestDistanceFromV1[child.node] = totalLengthToChild;
					previousBestNode[child.node] = bestNodeToVisit;
					// enqueue with new priority
					nodesToVisitQueue.enqueue(child, shortestDistanceFromV1);
				}
			}
		}

	}

	return {
		'shortestPath' : resultantShortestPath.reverse(),
		'shortestDistance': resultantShortestDistance
	};
}

function DijkstraByTheAuthor(start, finish){
	const nodes = new PriorityQueue();
	const distances = {};
	const previous = {};
	let path = [] //to return at end
	let smallest;
	//build up initial state
	for (let vertex in this.adjacencyList) {
		if (vertex === start) {
			distances[vertex] = 0;
			nodes.enqueue(vertex, 0);
		} else {
			distances[vertex] = Infinity;
			nodes.enqueue(vertex, Infinity);
		}
		previous[vertex] = null;
	}
	// as long as there is something to visit
	while (nodes.values.length) {
		smallest = nodes.dequeue().val;
		if (smallest === finish) {
			//WE ARE DONE
			//BUILD UP PATH TO RETURN AT END
			while (previous[smallest]) {
				path.push(smallest);
				smallest = previous[smallest];
			}
			break;
		}
		if (smallest || distances[smallest] !== Infinity) {
			for (let neighbor in this.adjacencyList[smallest]) {
				//find neighboring node
				let nextNode = this.adjacencyList[smallest][neighbor];
				//calculate new distance to neighboring node
				let candidate = distances[smallest] + nextNode.weight;
				let nextNeighbor = nextNode.node;
				if (candidate < distances[nextNeighbor]) {
					//updating new smallest distance to neighbor
					distances[nextNeighbor] = candidate;
					//updating previous - How we got to neighbor
					previous[nextNeighbor] = smallest;
					//enqueue in priority queue with new priority
					nodes.enqueue(nextNeighbor, candidate);
				}
			}
		}
	}
	return path.concat(smallest).reverse();
}


// Bubble Sort O(n^2)                 (best case is O(n) i.e with the optimization for nearly sorted data)
// Large values bubble to the end of the array in each PASS. At the end of each PASS, the last i elements are sorted and their postions are fixed.
// You make n passes at the array (outer loop). Total possible comparisons is n! (n + n-1 + n-2 + n-3 + ... + 1). You keep comparing adjacent elements.
// This one might do many swaps in a PASS.
function bubbleSort(arr) {
	var noSwaps;
	for (let i=0; i<arr.length; i++) {
		noSwaps = true;                  //optimization for a nearly sorted array: set to true here, but at the end of this complete pass, if there were no swaps at all, you are done. break; No point doing anymore passes at all.
		for (let j=0; j<(arr.length-i-1); j++) {
				if (arr[j] > arr[j+1])  {
					[arr[j+1], arr[j]] = [arr[j], arr[j+1]];  //swap
					noSwaps = false;
				}
		}
		if (noSwaps) return;
	}
	return arr;
}

// Selection Sort O(n^2)       (best case is also O(n^2))
// Smallest values are placed at the beginning of the array in each PASS. At the end of each PASS, the first i elements are sorted and their postions are fixed.
// You make n passes at the array (outer loop).  Total possible comparisons is n! (n + n-1 + n-2 + n-3 + ... + 1). You keep comparing each element of (rest of) the array with currentMin.
// This one does only 1 swap per PASS.
function selectionSort(arr) {
	for (let i=0; i<arr.length; i++) {
			let indexOfMin = i;

			//find the smallest number's index in the rest of the array
			for (let j=i+1; j<arr.length; j++) {
					if (arr[j] < arr[indexOfMin]) indexOfMin = j;
			}

			//swap this number with the number at i. The for loop will now move i forward by 1.
			if (indexOfMin !== i) [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];  //swap
	}
	return arr;
}

// Insertion Sort O(n^2)      (best case is O(n), i.e with the optimization for nearly sorted data)
// Go from left to right, pick an element and as long as elements to its left are smaller, move them to the right by 1, then place this element at that spot.
// You keep comparing your left most element of the unsorted(right)part of the array with each element in the left(sorted) part of the array to finds it's right place.
// At the end of each PASS, the first i elements are sorted, BUT their positions are not fixed. Some new element might squeeze into this sorted array and bump some of the elements.
// You bump up about n elements per PASS. There is no swapping going on here.
// This one works well for a stream of data. As and when new bits are coming, they are inserted in their right place.
function insertionSort(arr) {
	for (i = 1; i < arr.length; i++) {
		let currentVal = arr[i];

		//Move elements in the left part of the array (sorted array) up by 1, until the right spot for currentVal is found.
		for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			//optimization: && arr[j] > currentVal. Do j-- only if arr[j] > currentVal, the moment you hit a smaller number, you don't have to look at the remaining left half of the left-sorted array.
		 	arr[j+1] = arr[j];
		}

		// now place the element at j, move i by 1 to get the next element from unsorted part of the array (the right side part of the array)
		arr[j+1] = currentVal;             //at j was where the above compare failed, so put the element at j+1
	}
}

// Merge Sort O(nlogn) (best,avg,and worst case) Invented by Jon Van Neuman on vacuum tubes. Space complexity is O(n).
// If you have an array of size n, you will at most split it log(base2)n times to get size 1 arrays...  And you sort each of these arrays in  +m time, so final is n+m * log(base2)n = nlogn
// Split up the array until you reach size 1 -> sort it -> then merge these different sorted arrays.
// It exploits the fact that arrays of size 0 or 1 are already sorted.
function merge(a, b) {    //O(n+m) time and space   this one merges two sorted arrays. It does MAX n+m comparisons in total.
	const results = [];
	let aIndex = 0;
	let bIndex = 0;

	while (aIndex <= a.length-1 && bIndex <= b.length-1) {
		if (a[aIndex] < b[bIndex]) {
			results.push(a[aIndex]);
			aIndex++;
		} else {
			results.push(b[bIndex]);
			bIndex++;
		}
	}

	//at some point one of the arrays will hits it's end and the while() block will be false.
	while (aIndex <= a.length-1) {
		results.push(a[aIndex]);
		aIndex++
	}
	while (bIndex <= b.length - 1) {
		results.push(b[bIndex]);
		bIndex++
	}

	return results;
}
function mergeSort(arr) {     // the point of this function is to just split an array into two halves recursively.  Only the merge() function is the one doing the sorting.
	if (arr.length <= 1) {
		return arr;
	}

	const center = Math.floor(arr.length / 2);
	const leftArr = mergeSort(arr.slice(0, center));
	const rightArr = mergeSort(arr.slice(center));

	return merge(leftArr, rightArr);
}
// Try writing this function down by try to sort [76,73,24,10]


// Quick Sort O(nlogn) (best,avg). LogN decompositions each needing n comparisons
// Worst case is O(n^2) i.e for an already sorted array. You create n different right arrays (n levels/compositions) (no left arrays as it already sorted), for each of the right arrays you do n comparisons, so n*n.
// Basically everytime you cal pivotThisArray(), if your pivotValue is already the min value in that array. Its a waste of pivoting on it.
// Just like merge sort, exploits the fact that arrays of size 0 or 1 are already sorted.
// It selects one element called the Pivot, and moves all smaller numbers to its left and all larger numbers to it's right. Then quick sort is done on the two left and right arrays again.
// You then recursively split the array on these pivot points...
function pivotThisArray(arr, start, end) {          //0(n) i.e in one pass of the array, pivot it. You make o(n) comparisons in the one and only pass that you make.
	// Given an array, it should pick a pivot point and move all smaller to the left, larger to the right, and return the index of the pivot.

	let pivotValue = arr[start];            // Just always take your pivot as index=0. In theory you can pick any index as your pivot point. But zero is easiest for O(n) time.
	let countOfLesserItems = 0;             //this counts the number of items less than the pivot value, also used as the index of where you want to swap to.

	for (let i = start+1; i <= end; i++) {
		if (arr[i] < pivotValue) {
			countOfLesserItems++;
			[arr[start+countOfLesserItems], arr[i]] = [arr[i], arr[start+countOfLesserItems]];   //swap, i.e bring that lower value to the left
		}
	}

	// at this point you have: [pivotValue,...allSmallerItem,...allLargerItems]. So just move the pivotValue after the ...allSmallerItems, i.e at the location 'countOfLesserItems'
	[arr[start], arr[start+countOfLesserItems]] = [arr[start+countOfLesserItems], arr[start]];       //swap
	return start+countOfLesserItems;                // this is the final value of this pivot value index in this given arr.
}

function quickSort(arr, left=0, right=arr.length-1) {   //the default params are only used the first time when someone calls this qucikSort function.
	if (left < right) {
		let pivotPoint = pivotThisArray(arr, left, right);   // now this arr is pivoted on pivotPoint. i.e left half and right half are unsorted. So just call quickSort on them.
		quickSort(arr, left, pivotPoint-1);
		quickSort(arr, pivotPoint+1, right);
	}

	//this just edits the existing array given as the argument. there is nothing to return.
}

// Radix Sort. This only works with integers. this is not a comparison sort, it is just based on numbers. k is logn for avg arrays.
// O(nk) for best,avg,worst.  k is the num of digits of the longets number. Space complexity is o(n+k)
// In each PASS of the array (iteration of k), you group items depending on their nth last digit. Then you just pop() everything to get back your array for the next PASS.
function getDigit(num, i) {
	return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;         // 456784/1000 = 456.784, this %10 is 6
}
function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(arr) {
	let maxDigits = 0;
	for (v of arr) {
		maxDigits = Math.max(maxDigits, digitCount(v));
	}
	return maxDigits;
}
function radixSort(arr) {
	let maxDigitCount = mostDigits(arr);
	for (let k=0; k<=maxDigitCount; k++){
		//create an array of 10 empty arrays
		let map = Array.from({length: 10}, () => []);

		//populate this map based on each number's kth last digit
		for (v of arr) {
			map(getDigit(v,k)).push(v);   //map[5].push(38675)
		}

		//pop out everything from the map, the arr is now sorted by each number's last k digits.
		arr = [].concat(...map)     //concat takes the different arrays at map[0],map[1],map[2] etc and concats them all into one single array.
	}
	return arr;
}



// Dynamic Programming: Solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once and storing their solutions.
// The name is very misleading, this is not AI generated programs! It is just a more optimal way to solve an already solved problem.
// DP can be used on a problem if it has these characteristics -
// 1)Overlapping subproblems: the problem can be broken down into subproblems which are solved and reused several times. Fibonacci has it, but merge sort has subproblems that don't overlap!! Each subproblem in merge sort is a different array ,that you are trying to merge.
// 2)Optimal substructure: The optimal solution of a bigger problem can be constructed from optimal solutions of its subproblems. Like, the bset solution for Fib(10) can be calcualted from the best solution for fib(5).
// So in SPL You use past knowledge to make solving a future problem easier. Like memoize of fibonacci.
