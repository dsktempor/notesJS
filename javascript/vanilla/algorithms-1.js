/* Basic algorithms */

/* References:
Link to GitHub repo: https://github.com/StephenGrider/algocasts

*/

/*
Algo complexity: Big 'O' Notation -
1       - constant time
log(n)  - logarithimic time  (searching a sorted array)
n       - linear time
nlog(n) - quasilinear time (sorting an array)
n^2     - quadratic time
2^n     - exponential time


O(n+m) iterating through two different sets of data
O(n*m) two for loops of different sizes, one inside the other

Useful JS hacks-
Math.abs(25)
Math.sign(-50)
someArray.every((char,i) => {})
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
function anagrams(stringA, stringB) {

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

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}

		let node = this.head;
		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
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
		if (!this.head) {
			return;
		}

		if (!this.head.next) {
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

	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}

			counter++;
			node = node.next;
		}
		return null;
	}

	removeAt(index) {
		if (!this.head) {
			return;
		}

		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
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

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
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

// Bubble Sort (n^2)
function bubbleSort(arr) {
	for (let i=0; i<arr.length; i++) {
			for (let j=0; j<(arr.length-i-1); j++) {
					if (arr[j] > arr[j+1]) {
						const lesser = arr[j+1];
						arr[j+1] = arr[j];
						arr[j] = lesser;
					}
			}
	}
	return arr;
}

// Selection Sort (n^2)
function selectionSort(arr) {
	for (let i=0; i<arr.length; i++) {
			let indexOfMin = i;
			for (let j=i+1; j<arr.length; j++) {
					if (arr[j] < arr[indexOfMin]) {
						indexOfMin = j;
					}
			}
			if (indexOfMin !== i) {
				let lesser = arr[indexOfMin];
				arr[indexOfMin] = arr[i];
				arr[i] = lesser;
			}
	}
	return arr;
}

// Merge Sort (nlogn)
function merge(left, right) {
	const results = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return [...results, ...left, ...right];
}
function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}

	const center = Math.floor(arr.length / 2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);

	return merge(mergeSort(left), mergeSort(right));
}





