/* Basic algorithms */

/* References:
Link to GitHub repo: https://github.com/StephenGrider/algocasts
How to solve - a book by george polya
BigO cheat sheet - https://www.bigocheatsheet.com/
Sorting animations webiste: https://www.toptal.com/developers/sorting-algorithms
Visualise sorts: https://visualgo.net/en/sorting
Visualise Linked Lists: https://visualgo.net/en/list
Visualise Heap: https://visualgo.net/en/heap
Algos mind map: https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link
List of data-structures: https://en.wikipedia.org/wiki/List_of_data_structures
Data structure MInd Map: https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link/c25f98c73a03f5b1107cd0e2f4bce29c9d78e31655e55cb0b785d56f0036c9d1
Hash generator (MD5): http://www.miraclesalad.com/webtools/md5.php
AVL tree animation: https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
AVL tree: https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
Red-black tree animation: https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
Red-black tree: https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
RB vs AVL tree: https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree
Graphs: https://visualgo.net/en/graphds
TCO: https://2ality.com/2015/06/tail-call-optimization.html

*/


/*
Algorithm: A set of steps to accomplish a certain task. The foundation of a software developer.
Give simple, clear and efficient instructions to the device in front of you.
Problem solving is a muscle that you can train and grow. It sits with you for life.

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
Fundamental operations: math(*+-/), comparisons(>=<==), looping(for,while), custom-function calls or built-in-functions calls.
Fundamental space occupiers: variables, data structures, function calls, allocations
Algo complexity: Big'O' Asyntotic Notation - how the runtime of an algorithm grows as the input size grows.

In order of increasing time:
1       - constant time
log(n)  - logarithimic time  (searching a sorted array) (this is almost as good as O(1)!)
n       - linear time
nlog(n) - quasi-linear/log-linear time (sorting an array)
n^2     - quadratic time
2^n     - exponential time
n!      - factorial time

Constants don't matter in BigO notation: BigO does'nt care about precision, just general trend.
O(10n), O(50n+10), O(n/2) is O(n)     [drop the constants]
O(n + m) is O(n+m) only...
O(2n^2), O(n^2 +5n +2) is O(n^2)     [drop the non-dominant terms]
O(500) is O(1)
O(n^2 + n^3) is O(n^3)
Addition/sub/mult/div, assignments are all constants
array[index], obj{key} access is constant
For a loop: length of loop times complexity of each iteration

Always calculate worst case BigO for your algorithm. Identify the worst case input for your algo.

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

What is good code? Readable & Scalable.(in terms speed & memory(RAM which is heap+stack))  [heap is for variables and stack is for func stack]
In the bigO chart, don't worry about the left half of the graph (small n), any algo will be fine. But think about the right hand side of the chart (high values of n).
For space complexity, do not include the space of the input variable.

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
Recursion in linux terminal: ls -R   (recursively open all sub-directories and list all files!!)
Anything that can be written with recursion, can be written with iterations.
TCO is tail call optimization, JS engine reuses the previous call block with the new block instead of creating a new one.
If you base case is not there or never hit: In JS, you will get - RangeError: Maximum call stack size exceeded  (Stack Overflow!)
In recursion, often you need to make copies: so for arrays use - slice, spread, concat etc, for strings use slice, substr etc, For objects use spread, Object.assign
When to use recursion
>Problem can be divided into a number of sub problems that are smaller instance of the same problem
>Each instance of the sub problem is identical in nature
>The solutions of each subproblem can be combined to solve the problem at hand. (divide and conquer can use recursion)
Recursion has a possibility of stack overflow (if the dataset is too big)


Sorting in JS: Array.sort(), it converts everything to string and then sorts them! so 10 comes before 4 !!
Use [6,10,4,15,20].sort( (a,b) => a-b );  to sort JS numbers.

Data Structures - You can't always rely on JS built-ins like arrays and objects. You need other structures to hold data/values better and process data better. Algorithms access/manipulate these values.
Program = Data Structure + Algorithm. The only constant in computer science. Everything else is syntax.
Each data structure is good at something - insert, remove, access, sort, traversal, search etc. Pick the right one and your algo BigO complexity will reduce.

Hardware: Storage -> RAM -> Cache -> CPU. Things are pulled out of storage in to RAM. CPU works out of RAM/cache. RAM is temporary memory but faster memory.
Your program and its data structures sit on RAM. So limited space and CPU time is also limited.


Useful JS hacks-
/[a-z0-9]/.test(character)
someArray.splice(someIndex,1);    //removes an element at a particular index, and then shifts all the others.
someArray.every((char,i) => {})
Array.from(), Array.fill();
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

// Reverse words in a string
function reverseWords (s) {
	var wordsArr = s.split('');
	var reversedWords = [];

	wordsArr.forEach(w => {
		let reversedWord = '';
		for (let i=w.length-1; i>=0; i--){
			reversedWord += w[i];
		}
		reversedWords.push(reversedWord);
	});

	return reversedWords.join('');
}

// Reverse array in place
function reverseArrayInPlace(arr) {
	for (let i = 0; i < arr.length/2; i++) {     //Loop through ONLY the first half of the array. If you loop through the whol array, you will switch back the items back in place...
		[arr[i], arr[arr.length-1-i]] = [arr[arr.length-i-1], arr[i]];   // swap
	}
	return arr;
}

// meanMedianMode: Given an integer array, return an object that has the mean, median and mode.
function meanMediaModeArray(arr) {
 let mean, median, mode = [];

 let sum = 0;
 arr.forEach(x => sum+=x);
 mean = sum / arr.length;

 arr.sort( (a,b) => a-b );
 if (arr.length%2 !==0) median = arr[Math.floor(arr.length/2)];          //for odd number of elements, return middle element
 else median = (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)])/2;    //for even number of elements, return avg of two mid elements

 let hashTable = {}
	arr.forEach(x => {
		hashTable[x] = hashTable[x] + 1 || 1;
	});
	let maxFreq = 0;
	for (index in hashTable) {
		if(hashTable[index] > maxFreq) {
			mode = [arr[index]];     //reset the mode array to this new value
			maxFreq = hashTable[index];
		} else if (hashTable[index] === maxFreq) {
			mode.push(arr[index]);   //add it to the existing array
		}
	}
	if (mode.length === Object.keys(hashTable).length) mode = [];    //if every element has the same frequency, that means there is no mode.

	return {mean, median, mode};      //shorthand object literal syntax
}

// twoSum: given an integer array, return an array of number pairs that add up to the given sum. Do it in O(n).
// obvious solution is O(n^2), for each number, loop through all element of the array to see if they add up to sum
function twoSum(numArray, sum) {  //O(n)
	var result = [], hashTable = {};

	numArray.forEach(x => {
		let remainder = sum - x;
		if (hashTable[remainder] !== undefined) result.push([x,remainder]);   // in ([1,4,6,3,5],7) it adds [6,1] to the result only when x=6, for x=1 it just does hashTable[1]=''
		hashTable[x] = '';
	});

	return result;
}
function hasPairWithSum2(arr, sum) {  //O(n)
	const mySet = new Set();
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		if (mySet.has(arr[i])) {
			return true;
		}
		mySet.add(sum - arr[i]);
	}
	return false;
}

// First recurring character, given an array return the first element that is a duplicate. Naive solution is O(n^2).
function firstDuplicate(arr) {   //O(n)
	let hashMap = {}
	arr.forEach(x => {
		if (!hashMap[x]) {
			hashMap[x] = 'marked';
		} else if (hashMap[x] === 'marked') {
			return true;
		}
	});
	return false;
}


// maxStockProfit: Given an array of integers (stock prices in the day), return the max profit possible.
function maxStockProfit(pricesArr) {
	var maxProfit = -1;
	var buyPrice = 0;
	var sellPrice = 0;

	var changeBuyPrice = true;

	for (var i = 0; i < pricesArr.length; i++) {
		if (changeBuyPrice) buyPrice = pricesArr[i];
		sellPrice = pricesArr[i + 1];

		if (sellPrice > buyPrice) {
			var tempProfit = sellPrice - buyPrice;
			if (tempProfit > maxProfit) maxProfit = tempProfit;
			changeBuyPrice = false;
		} else {
			changeBuyPrice = true;
		}
	}

	return maxProfit;
}

// commonElements: Given two arrays, return true if they have atleast 1 item in common. Brute force is O(n^2)
function commonElement(a1, a2) {   //O(n+m)
	let hashTable = {};
	a1.forEach(x => {
		if (!hashTable[x]) hashTable[x] = true;
	});

	a2.forEach(y => {
		if (hashTable[y] === true) return true;
	});
	return false;
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

// Ransom Note: Given a magazineString of words, check the magazine string to see if you have all the words you need for your ransomNote string.
function ransomNote (ransomStr, magazineStr) {    //O(n+m)
	let ransomWords = ransomStr.split(' ');
	let magazineWords = magazineStr.split(' ');
	let magazineHashMap = {};

	for(w of magazineWords) {
		magazineHashMap[w] = magazineHashMap[w] + 1 || 1;
	}
	for (rw in ransomWords) {
		if (magazineHashMap[rw]) {
			magazineHashMap[rw]--;
			if (magazineHashMap[rw] < 0) return false;
		} else {
			return false;
		}
	}
	return true;
}

// Caesar Cipher: Given a string and num, return a string, where each char was bumped up by num count. ('zoo',2) should give 'bqq'
function caesarCipher(str,num){      //num can be any integer
	num = num % 26;
	let lowerStr = str.toLowerCase();
	let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let newString = '';

	for (let i=0; i<lowerStr.length; i++){
		let l = lowerStr[i];
		if(!alphabets.includes(l)) {
			newString += l;
			continue;
		}

		let currentIndex = alphabets.indexOf(l);
		let newIndex = currentIndex + num;       //num can be a positive or negative integer..
		if (newIndex>25) newIndex -= 26;
		if (newIndex<0) newIndex += 26;
		if(str[i] === str[i].toUpperCase()) {
			newString += alphabets[newIndex].toUpperCase();
		} else {
			newString += alphabets[newIndex];
		}
	}

	return newString;
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

function fibMemo(index, cache) {
	cache = cache || [];
	if (cache[index]) return cache[index];
	else {
		if (index < 3) return 1;
		else {
			cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
		}
	}
	return cache[index];
}

// Arrays: Organises items sequentially, i.e one after another in memory. (contiguous memory lcoations)
// Because they are contiguous and in order, access is very fast for the cpu.
// access O(1), push O(1), insert O(n), delete O(n). Search is O(n)
// Static array: Fixed size. You need to know the size ahead of time. If you add extra elements later, there is no guarantee that the OS will add the new elements as part of the same original continguos memory locations.
// Dynamic array: No size. i.e Variable size. It grows as elements are added. It copies the whole contiguos locations, creates a whole new contiguous location set and copies the values there. JS has dynamic arrays, which mean the machine automatically manages array memory locations for you and you don't have control like in C/C++. Thus sometime c/c++ is faster than high level languages like JS. So, even in JS, arr.push() might be O(n) under the hood becuase it copies and pastes everything into a new contiguous memory location. But for you, just say O(1)
// Strings are just arrays. If you get any string question, just do str.split('') and then use array methods.
// Advantages: access, push, pop, ordered data
// Disadvantages: slow insert/delete, fixed size

const string = ['a', 'b', 'c', 'd', 'e']; //each char is 4bytes (32-bit system), so this array takes 4*4 Bytes of RAM.
strings[2];  //access is O(1)
strings.push('f');  //push is O(1)
strings.pop();  //pop is O(1)
strings.unshift('aa'); //insert at beginning is O(n)
strings.splice(2, 0, 'cc'); //insert at middle is O(n)
strings.shift(); //remove at beginning is O(n)

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(index) {
		return this.data[index];
	}
	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}
	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}
	deleteAtIndex(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}
	shiftItems(index) {    // Move the items from index onwards,all to the left. (overwrite the existing value at index)
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		console.log(this.data[this.length - 1]);
		delete this.data[this.length - 1];     // you can remove this 'previous' last item position and its value.
		this.length--;
	}
}

// Stack: Create a stack data structure. LIFO. The stack should be a class with methods 'push', 'pop', and 'peek'.  Adding an element to the stack should store it until it is removed.
// Examples - function call stack, undo/redo actions in programs, routing browser history
class StackWithArray {     // contiguous memory locations, so it is faster than StackWithLinkedList. But this is a dynamic array (adding values takes longer time)
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.push(record);         // O(1), You can even use shift and unshift but it will be O(n)
	}

	remove() {
		return this.data.pop();         // O(1)
	}

	peek() {                          // O(1)
		return this.data[this.data.length - 1];
	}
}

// You can also implement it with a singly linked list. But you can't use the Linked List's push and pop, pop takes O(n). So use shift() and unshift(), both take O(1).
// Insertion and removal are O(1). Searching and access are O(n)
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}
class StackWithSinglyLinkedList {         // It has unlimited size, use more memory (head/tail pointers), nodes are scattered in memory.
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	add(val) {                //O(1) Add to the beginning
		var k = new Node(val);
		if (!this.head) {        //Empty List
			this.head = k;
			this.tail = k;
		} else {                 //Non Empty List
			var temp = this.head;
			this.head = k;
			this.head.next = temp;
		}
		return ++this.size;
	}

	remove() {                //O(1) Remove from beginning
		if (!this.head) return null;   //Empty List

		var temp = this.head;
		if (this.head === this.tail) {  //One Node in List
			this.tail = null;
		}
		this.head = this.head.next;
		this.size--;
		return temp.value;
	}

	peek() {                  //O(1)
		return this.head;
	}
}

// Queue: Create a queue data structure.  FIFO. The queue should be a class with methods 'add', 'remove' and 'peek'. Adding to the queue should store an element until it is removed.
// queues are used all over the place in computer science. In JS - the event loop call back queue!
class QueueWithArray {
	constructor() {
		this.data = [];
	}

	add(record) {  //(enqueue)
		this.data.unshift(record);                      // O(n), adds an element to the beginning.You can even do push() and shift(), but even there one of them is o(n), so array is bad.
	}

	remove() {   //(dequeue)
		return this.data.pop();                         // O(1), returns the last element by removing it.
	}

	peek() {
		return this.data[this.data.length - 1];        //returns the last element without removing it
	}
}

//Queue can also be implemented with SinglyLinkedList. Add to the end and remove from the beginning. Both are O(1)
//Insertion and removal are O(1).  Searching and access are O(n)
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}
class QueueWithSinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(val) {          //O(1) Add to the end
		var k = new Node(val);
		if (!this.head) {        //Empty List
			this.head = k;
			this.tail = k;
		} else {                 //Non Empty List
			this.tail.next = k;
			this.tail = k;
		}
		return ++this.size;
	}

	dequeue() {              //O(1) Remove from front
		if (!this.head) return null;  //Empty List

		var temp = this.head;
		if (this.head === this.tail) {   //One node in List
			this.tail = null;
		}
		this.head = this.head.next;
		this.size--;
		return temp.value;
	}

	peek() {                  //O(1)
		return this.head;
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

// Linked List: Unlimited length. (hashtable and static array have pre-defined lengths/memory. Though dynamic arrays can increase in length, but performance problem)
// Nodes are scattered in memory (not like array). So CPU takes longer to get your node in linked-list. (just like hast-tables)


// Implement classes Node (data, next) and Linked Lists -
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
// Advantage: fast insert, fast delete, it is ordered, flexible size
// Disadvantage: slow search, use more memory
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {               // O(1), Add an element to the end (InsertLast)
		let k = new Node(val);
		if (!this.head) {       //Empty List
			this.head = k;
			this.tail = k;
		} else {                //Non-Empty list
			this.tail.next = k;
			this.tail = k;
		}
		this.length++;
		return this;
	}

	unshift(val) {            // O(1), Add an element to the beginning. (InsertFirst)  O(1)
		var k = new Node(val);
		if (!this.head) {       //Empty List
			this.head = k;
			this.tail = k;
		} else {                //Non Empty List
			k.next = this.head;
			this.head = k;
		}
		this.length++;
		return this;
	}

	pop() {               //Remove the last element  (removeLast)  O(n)
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

	shift() {             //Remove node from the begining of the list (removeFirst)  O(1)
		if (!this.head) return;

		var k = this.head;
		this.head = this.head.next;
		this.length--;

		if(this.length===0) this.tail=null;

		return k;
	}

	get(i) {              //O(n) ,Get node at index i, same as getAt()
		if (i < 0 || i >= this.length) return;

		// The i value is a valid value
		let counter = 0;
		let n = this.head;
		while (counter !== i) {    //
			n = n.next;
			counter++
		}
		return n;
	}

	set(i,val) {          //O(n), Set node at index i, i.e overwrite the value at that index (if it is there)
		if (i < 0 || i >= this.length) return;

		let n = this.get(i);
		if(n) {
			n.value = val;
			return true;
		}
		return false;
	}

	insert(i,val) {       //O(n), Insert node at index i, same as insertAt()
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

	remove(i) {           //O(n), Remove node at index i, same as removeAt()
		if (i < 0 || i > this.length) return false;

		if (i === this.length-1) { this.pop(); return true; }
		if (i === 0) { this.shift(); return true; }

		//i.e trying to remove something in the middle
		let prev = this.get(i-1);
		let removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {          //Common question. Don't make any duplicate of the list. You just have to traverse the list and flip the direction of the next pointers in each node.
		if(this.length<=1) return this;

		this.tail = this.head;      //update tail here

		// there are atleast two nodes in the list
		let prev = this.head;
		let current = this.head.next;
		while(current!==null) {
			nextDestination = current.next;

			current.next = prev;  //flip the direction

			prev = current;
			current = nextDestination;
		}
		this.head = prev;          //update head here
		return this;
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

	push(val) {        // O(1), Add node to the last
		let k = new Node(val);
		if (this.length===0) {    // Empty List
			this.head = k;
			this.tail = k;
		} else {                 // Non Empty List
			k.next = null;         //not required, by default it is anyway null as it was just created.
			k.prev = this.tail;
			this.tail.next = k;
			this.tail = k;
		}
		this.length++;
		return this;
	}

	unshift(val) {     // O(1), Add node at the first
		let k = new Node(val);

		if (this.length === 0) {     //Empty List
			this.head = k;
			this.tail = k;
		} else {                //there is atleast one element in the list. 3 links need to change.
			k.next = this.head;
			this.head.prev = k;
			this.head = k;
		}
		this.length++;
		return this;
	}

	pop() {           // O(1), Remove node from the last
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

	shift() {         // O(1), Remove node from first
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

	get(i) {					// O(n/2), Get the node at position i
		// You can actually do the same thing as singlyLinkedList, but instead, you can optimize and use prev.
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

	set(i,val) {       // O(n/2), Set (overwrite) the value at index i with val
		let n = this.get(i);
		if(n){
			n.val = val;
			return true;
		}
		return false;
	}

	insert(i,val){     // O(n/2), Insert a new node at index i
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

	remove(i){         // O(n/2), Remove the node at index i
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

// Singly VS Doubly linked list.
// Singly uses one less pointer and hence one less operation (pointer to update, faster). You can't traverse from back to front.
// Doubly is just better in all aspects. Requires one more pointer and hence operations.

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
// Binary Tree : Each node can have max 2 children. BST: A BT where data must be sorted left to right.
// Perfect binary tree: every node has exactly 2 children. In this one, If a level has 'n' nodes, then all the levels above it, together have n+1 nodes. That mean, in PBT, the last level has about half the nodes of the whole tree.
// The number of nodes at level n is 2^n. The levels start from level0. If there are h levels, then total nodes in the tree is 2^h -1.
// advantages of BST: better than o(n), ordered, flexible size
// disadvantages: nothing is O(1)
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
		if (this.data === val) {
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
// Insertion and Search are both O(logn) [best,avg case]If you double the nodes in the tree, it just adds one more level to the tree, hence log(n).
// Worst case could all be O(n) (unbalanced BST). i.e if every node in the tree has just one child..
// BFS and DFS have same time complexity O(n). For really wide trees, use DFS (you save memory, in BFS you store the whole layer, but in DFS you store less)
// BFS: more memory used, but it tells you a list of neighbors, also used in shortest path algos. If you know a solution is not far from the root of the tree, if the tree is very deep and solutions are rare
// DFS: less memory, tells me if a path exists between two nodes. If the tree is very wide, use this as BFS takes too much memory. If the solution is very deep in the tree.

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

	remove(value) {       // crazy tough. will not be asked in an interview.
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				//We have a match, get to work!

				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {

						//if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;

							//if parent < current value, make left child a right child of parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {

						//if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {

					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
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

	breadthFirstSearchRecursive(queue=[this.root], list=[]) {
		if (!queue.length) return list;

		let n = queue.shift();
		list.push(n);
		if (n.left) queue.push(n.left);
		if (n.right) queue.push(n.right);

		return this.breadthFirstSearchRecursive(queue, list);
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
			visitedNodes.push(n);
		}

		goDeeper(this.root);
		return visitedNodes;
	}

	depthFirstInOrderTraversalRecursion() {     //First finish it's entire left side, then VISIT the node, then finish it's entire right side. This is like printing the tree, how it actually looks, looking from left to right. For a BST, you get nodes in ascending order (sorted order).
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

// Balanced BST - two types AVL and red-black, these balance themselves automatically

// Validate a BST given a node. Given a node, validate the tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than the parent
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
// Search is O(n), insert is O(logN), delete is O(logn)
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
// Examples: Hospital emergency room, Night club entrance, Airline boarding
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


// Hash tables: Collection of key-value pairs. The keys are not oredered. They are O(1) for insertion, deletion and access (avg and best case). Worst case: O(n) for all, but depends. Search for a 'value' will be O(n).
// Python has dictionary, JS- Objects and Map, Java go and Scala have Maps, Ruby has Hashes
// You take an key and convert it into a valid array index - which is a hash function (it takes input of variable size and gives back a hash of a fixed size)
// So at array index '10', you store a key of 'pink' and a value of '#ff69b4'. Your hash function converted your key 'pink' to index '10'.
// Hash function must return a value in O(1) time (be very fast), it must distribute values uniformly AND for the same input it must give the same output (must be deterministic or idempotent)
// Handling collisions
// 1) Seperate Chaining: Just store the data at the same spot. But that spot now becomes an array/linked-list of different values that have collided. (nested data structure at that index)
// 2) Linear Probing: You store only one value at one index. If there is a collision, search through the array to find the next empty spot.
// Worst case - all values hashed to one place (bucket). Acesss becomes O(n)
// Hashtables don't store data in order like arrays do. You insert it in one order, but in memory, these will be spread at random locations, depending on the hashed index.
// Advantage: fast access (assuming no collisions), insert, flexible keys (like JS Maps)
// Disadvantage: unordered, slow key iteration (need to go through whole memory space to get all keys), high memory O(n)
class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);         // A HashTable of fixed size (default size is 53). Most hashTables use a HUGE array.
	}

	_hash(key) {   // function that returns a value between 0 to this.keyMap.length everytime. _VARNAME means, do not access this from outside this class (dev standard)
		let total = 0;
		let WEIRD_PRIME = 31;      // Prime numbers help in spreading out keys more evenly
		for (let i = 0; i < Math.min(key.length, 100); i++) {        // Constant time, you can do i<key.length, then it becomes O(n)
			let char = key[i];
			let value = char.charCodeAt(0) - 96
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {     // Store a key-value in the hash map.
		let index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];       // Seperate Chaining
		}
		this.keyMap[index].push([key, value]);    //In some cases if the same key has been passed again, then you might have to overwrite the existing value with the given new value, but here you are just adding it to the list at that index.
	}

	get(key) {           // retrieve the value of the given key from the hash map
		let index = this._hash(key);
		if (this.keyMap[index]) {
			for (v of this.keyMap[index]) {
				if (v[0] === key) {       // an array of array arrays!
					return v[1]             //return the value at the key
				}
			}
		}
		return undefined;
	}

	keys(){            // returns all the keys in the hash map. You loop over the entire hashmap eventhough most index might be empty. Whereas in array you just loop over the length of the array (and the array is not sparse like a hashmap)
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

//Any JS object uses hashtables under the hood
let user = {
	age: 54,
	name: 'kyle',
	magic: true,
	arr: [5,6],
	scream: function() {}
}
user.age; // this access takes O(1)

// ES6 Map and Set also use hashtables. For Maps, the key does not have to be a string and map maintains the insertion order.

// Graphs: A data structure that consists of a finite set of nodes/vertices V connected with a set of non-directed/directed edges E. Edges can also be weighted/unweighted.
// Examples: Social Networks, Mapping and routing, recommendation engines, website hyperlinks, almost everywhere.
// Storage: Use an adjaceny matrix (AM).  matrix[a][b] and matrix[b][a] = 1 if there is an edge E between them, else the value will be zero at the position.
// Adjacency List (AL): An array to store the edges of each vertex V. [ [1,5], [4,3], [2,5], [2,4] ] Meaning vertex number 0 has edges to 1 and 5. Vertex number 1 has edges to 4 and 3.
// Add vertex:[AL O(1), AM O(V^2)],  Add Edge:[AL O(1), AM O(1)],  Remove Vertex:[AL O(V+E), AM O(V^2)], Remove Edge:[AL O(E), AM O(1)]
// Query:[AL O(V+E), AM:O(1)],  Storage:[AL O(V+E), AM O(V^2)]
// AL (vs AM): Less space, faster to iterate over all edges of the graph, slower to lookup specific edge. Real world data tends to be sparse, so AL is more popular.
// Traversal: visiting every vertex of the graph once.
// You can also represent a graph as an array of edges (Edge List) - [ [0,2], [3,4], [2,1], [2,3] ]

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

	dfsTraversalRecursive(startNode) {     // Solves a maze puzzle
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


// No company uses built-in language sorts. They build their own custom sorts. Don't just use arr.sort() -> this one converts to string and then sorts! And strings are sorted by their unicode numbers of their chars!
// Google - websites, Netflix - tv shows and recommendations, Apple - apps on the app store, Amazon - products etc.
// BTW chrome for JS arr.sort() uses quick sort , and it uses insertion sort for small n.

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
// This is the BEST algo for nearly sorted data comapred to ALL others.  It goes in O(n)
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
	if (a.length === 0) return b;
	if (b.length === 0) return a;

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

/* Sorting Choices
Stable vs Unstable sort: A stable one, for inputs that have the same value, in the final output, it returns them in the same order as they were in the initial input.
Remember quick sort has a worst case of O(n^2), but it's space complexity is only O(logn).
But merge sort is always O(nlogn), but space complexity is O(n).
Forget about - bubble, insertion, selection.

//#1 - Sort 10 schools around your house by distance:
Small input, so insertion sort. Space coplexity is O(1).  Use it for small data.

//#2 - eBay sorts listings by the current Bid amount:
Radix sort, because input is only integers. An amounts are betwenn 0 and some 100,000

//#3 - Sport scores on ESPN
Input has decimal places and there different formats for scores in different sports. Quick Sort.

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
Something that takes less space. Merge sort. Be safe.

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
Since almost sorted, Insertiin sort.

//#6 - Temperature Records for the past 50 years in Canada
Not sure. If they are all integers, radix sort. If there are floats, then quick sort.

//#7 - Large user name database needs to be sorted. Data is very random.
Merge sort if there is enough memory or just use quick sort

//#8 - You want to teach sorting for the first time
bubble sort and selection sort

*/


// Dynamic Programming: Solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once and storing their solutions. It has nothing to do with word "dynamic" or "programming".
// Dynamic programming is almost: Divide & Conquer (through recursion) + Memoization. You memoize subproblems.
// The name is very misleading, this is not AI generated programs! It is just a more optimal way to solve an already solved problem.
// DP can be used on a problem if it has these characteristics -
// 1)Overlapping subproblems: the problem can be broken down into subproblems which are solved and reused several times. Fibonacci has it, but merge sort has subproblems that don't overlap!! Each subproblem in merge sort is a different array ,that you are trying to merge.
// 2)Optimal substructure: The optimal solution of a bigger problem can be constructed from optimal solutions of its subproblems. Like, the bset solution for Fib(10) can be calcualted from the best solution for fib(5).
// So in SPL You use past knowledge to make solving a future problem easier. Like memoize of fibonacci.
