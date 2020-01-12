/* Basic algorithms */

/* References:
Link to GitHub repo: https://github.com/StephenGrider/algocasts
How to solve - a book by george polya
Sorting animations webiste: https://www.toptal.com/developers/sorting-algorithms
Visualising sorts: https://visualgo.net/en/sorting

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
function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
		result.push( result[i-1] + result[i-2] );
  }

  return result[n];
}

function fibViaRecurssion(n) {
	if (n < 2) {
		return n;
	}

	return fib(n - 1) + fib(n - 2);  //you call fib here and not fibViaRecurssion
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

// Queue: Create a queue data structure.  The queue should be a class with methods 'add', 'remove' and 'peek'. Adding to the queue should store an element until it is removed
class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record);                      //adds an element to the beginning
	}

	remove() {
		return this.data.pop();                         //returns the last element by removing it
	}

	peek() {
		return this.data[this.data.length - 1];        //returns the last element without removing it
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

// Stack: Create a stack data structure. The stack should be a class with methods 'push', 'pop', and 'peek'.  Adding an element to the stack should store it until it is removed.
class Stack {
	constructor() {
		this.data = [];
	}

	push(record) {
		this.data.push(record);
	}

	pop() {
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

// Queue from stack. Implement a queue data structure using two stacks only. (no arrays)
class Queue {
	constructor() {
		this.s1 = new Stack();
		this.s2 = new Stack();
	}

	add(x) {
		this.s1.push(x);
	}

	remove() {
		let retVal;
		while (this.s1.peek()) {
			this.s2.push(this.s1.pop())
		}
		retVal = this.s2.pop();
		while (this.s2.peek()) {
			this.s1.push(this.s2.pop())
		}
		return retVal;
	}

	peek() {
		let retVal;
		while (this.s1.peek()) {
			this.s2.push(this.s1.pop())
		}
		retVal = this.s2.peek();
		while (this.s2.peek()) {
			this.s1.push(this.s2.pop())
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
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
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

	getAt(index) {       //Linked List first element is of index 0
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

	/*
	removeAt(i) {                         // my version
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
	*/

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
class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
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
// Implement the 'insert' method for theNode class.  Insert should accept an argument 'data', then create an insert a new node at some appropriate location in the tree.
// Implement the 'contains' method for the Node class.  Contains should accept a 'data' argument and return the Node in the tree with the same value. If the value isn't in the tree return null.
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if (data < this.data && this.left) {
			this.left.insert(data);
		} else if (data < this.data) {
			this.left = new Node(data);
		} else if (data > this.data && this.right) {
			this.right.insert(data);
		} else if (data > this.data) {
			this.right = new Node(data);
		}
	}

	contains(data) {
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
