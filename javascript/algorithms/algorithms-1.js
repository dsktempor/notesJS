/* Basic algorithms */

/* References:
Link to GitHub repo: https://github.com/StephenGrider/algocasts
How to solve - a book by george polya
BigO cheat sheet - https://www.bigocheatsheet.com/
Sorting animations webiste: https://www.toptal.com/developers/sorting-algorithms
Visualise sorts: https://visualgo.net/en/sorting
Algos mind map: https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/
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

Recursion: Taking one problem, and solving it over and over on a smaller peice or changing peice until you reach some end point.
JSON.parse, JSON.stringify, document.getElementByID are often implemented as recursive functions by browsers.
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

// No company uses built-in language sorts. They build their own custom sorts. Don't just use arr.sort() -> this one converts to string and then sorts! And strings are sorted by their unicode numbers of their chars!
// Google - websites, Netflix - tv shows and recommendations, Apple - apps on the app store, Amazon - products etc.
// BTW chrome for JS arr.sort() uses quick sort , and it uses insertion sort for small n.

// Bubble Sort O(n^2)                 (best case is O(n) i.e with the optimization for nearly sorted data)
// Large values bubble to the end of the array in each PASS. At the end of each PASS, the last i elements are sorted and their postions are fixed.
// You make n passes at the array (outer loop). Total possible comparisons is n! (n + n-1 + n-2 + n-3 + ... + 1). You keep comparing adjacent elements.
// This one might do many swaps in a PASS.
function bubbleSort(arr) {
	var noSwaps;
	for (let i = 0; i < arr.length; i++) {
		noSwaps = true;                  //optimization for a nearly sorted array: set to true here, but at the end of this complete pass, if there were no swaps at all, you are done. break; No point doing anymore passes at all.
		for (let j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];  //swap
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
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;

		//find the smallest number's index in the rest of the array
		for (let j = i + 1; j < arr.length; j++) {
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
			arr[j + 1] = arr[j];
		}

		// now place the element at j, move i by 1 to get the next element from unsorted part of the array (the right side part of the array)
		arr[j + 1] = currentVal;             //at j was where the above compare failed, so put the element at j+1
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

	while (aIndex <= a.length - 1 && bIndex <= b.length - 1) {
		if (a[aIndex] < b[bIndex]) {
			results.push(a[aIndex]);
			aIndex++;
		} else {
			results.push(b[bIndex]);
			bIndex++;
		}
	}

	//at some point one of the arrays will hits it's end and the while() block will be false.
	while (aIndex <= a.length - 1) {
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
// Basically everytime you call pivotThisArray(), if your pivotValue is already the min value in that array. Its a waste of pivoting on it.
// Just like merge sort, exploits the fact that arrays of size 0 or 1 are already sorted.
// It selects one element called the Pivot, and moves all smaller numbers to its left and all larger numbers to it's right. Then quick sort is done on the two left and right arrays again.
// You then recursively split the array on these pivot points...
function pivotThisArray(arr, start, end) {          //0(n) i.e in one pass of the array, pivot it. You make o(n) comparisons in the one and only pass that you make.
	// Given an array, it should pick a pivot point and move all smaller to the left, larger to the right, and return the index of the pivot.

	let pivotValue = arr[start];            // Just always take your pivot as index=0. In theory you can pick any index as your pivot point. But zero is easiest for O(n) time.
	let countOfLesserItems = 0;             //this counts the number of items less than the pivot value, also used as the index of where you want to swap to.

	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < pivotValue) {
			countOfLesserItems++;
			[arr[start + countOfLesserItems], arr[i]] = [arr[i], arr[start + countOfLesserItems]];   //swap, i.e bring that lower value to the left
		}
	}

	// at this point you have: [pivotValue,...allSmallerItem,...allLargerItems]. So just move the pivotValue after the ...allSmallerItems, i.e at the location 'countOfLesserItems'
	[arr[start], arr[start + countOfLesserItems]] = [arr[start + countOfLesserItems], arr[start]];       //swap
	return start + countOfLesserItems;                // this is the final value of this pivot value index in this given arr.
}

function quickSort(arr, left = 0, right = arr.length - 1) {   //the default params are only used the first time when someone calls this qucikSort function.
	if (left < right) {
		let pivotPoint = pivotThisArray(arr, left, right);   // now this arr is pivoted on pivotPoint. i.e left half and right half are unsorted. So just call quickSort on them.
		quickSort(arr, left, pivotPoint - 1);
		quickSort(arr, pivotPoint + 1, right);
	}

	//this just edits the existing array given as the argument. there is nothing to return.
}

// Radix Sort. This only works with integers. this is not a comparison sort, it is just based on numbers. k is logn for avg arrays.
// O(nk) for best,avg,worst.  k is the num of digits of the longets number. Space complexity is o(n+k)
// In each PASS of the array (iteration of k), you group items depending on their nth last digit. Then you just pop() everything to get back your array for the next PASS.
function getDigit(num, i) {     //get ith digit from right
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;         // 456784/1000 = 456.784, this %10 is 6
}
function digitCount(num) {
	if (num === 0) return 1;
	//log10 of 99 is 1.9999, log10 of 999 is 2.99, log10 of 9999 is 3.999, so use log10 to get number of digits in a num
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
	for (let k = 0; k <= maxDigitCount; k++) {
		//create an array of 10 empty arrays
		let map = Array.from({ length: 10 }, () => []);

		//populate this map based on each number's kth last digit
		for (v of arr) {
			map(getDigit(v, k)).push(v);   //map[5].push(38675)
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

// Linear Search on Arrays  (indexOf(), includes(), find(), findIndex())
function linearSearch(arr, n) { //O(n)
	let index = 0;
	for (index = 0; index < arr.length; index++) {
		if (arr[index] === n) return index;
	}
	return -1;
}
// Binary Search on sorted arrays. It is a divide and conquer algo.
function binarySearch(arr, n) { //O(logn)
	let beg = 0;
	let end = arr.length - 1;
	let mid;

	while (beg <= end) {                    //this won't work if it is beg<end, it has to be <=
		mid = Math.floor((beg + end) / 2);        //console.log(beg,mid,end), you will see different values in different iterations

		if (arr[mid] === n) return mid;
		else if (arr[mid] > n) end = mid - 1;   // look at the left half
		else beg = mid + 1;                     //look at the right half
	}
	return -1;
}

function binarySearchRecursive(arr, n, beg = 0, end = arr.length - 1) { //O(logn) VVIP
	let mid = Math.floor((beg + end) / 2);

	if (n === arr[mid]) return mid;
	else if (n > arr[mid] && beg !== end) return binarySearchRecursive(arr, n, mid + 1, end);    //Tail call optimization
	else if (n < arr[mid] && beg !== end) return binarySearchRecursive(arr, n, beg, mid - 1);   //Tail call optimization
	else return 'not-found';

}

// Count the number of times a string appears inside another string.
function stringSearch(s1, s2) {  //search for s2 inside s1. O(n^2)
	let mainCounter = 0;
	for (let i = 0, i < s1.length; i++) {
		let k = i;
		for (let j = 0; j < s2.length; j++) {
			if (s1[k] === s2[j]) {      // instead of k, you can use i+j
				k++;
			} else {
				break;
			}
			if (j === s2.length - 1) mainCounter++;
		}
		// this is the outer loop
	}
	return mainCounter;
}

// RECURSION BASICS
// Recursion: Count down from n
function countDown(n) {
	if (n === 0) {
		console.log('count down finished');
		return;                          // when it hits the line, the call stack will consist of n+1 countDown funcs.. in the stack
	}
	console.log(n);                   // prints out 5,4,3,2,1
	n--;
	countDown(n);
	console.log('finished ' + n);       // then prints out 0,1,2,3,4
}
// Recursion: sumToN, find the sum of first n numbers
function sumToN(n) {
	if (n === 1) return n;
	return n + sumToN(n - 1);    //every TCO recursion line must have a "return" so that the value is bubbled up the call stack of recursive calls!!
}
// Recursion: factorial of n
function factorial(n) {    // O(n)
	if (n < 0) return 0;  // invalid input

	if (n <= 1) return 1;    //0! is 1, 1! is 1
	return n * factorial(n - 1);
}
// Recursion: Write a function 'power' that takes a base and an exponent and returns the value of base^exponent. i.e mimic Math.pow()
function power(b, e) {
	if (e === 0) {
		return 1;     // special case
	}
	return b * power(b, --e);   // if you put e-- it will be infinite loop!!
}
//Recursion: productOfArray, takes an array of integers and returns the product of them all
function productOfArray(a) {
	if (a.length === 1) return a[0];

	return a[0] * productOfArray(a.slice(1));
}
// Recursion: someRecursive, takes an array and a callback. Function returns true if ANY element in the array when called with the callback returns true, i.e cb(anyArrayElement) === true, then return true
function someRecursive(a, cb) {
	if (a.length === 0) {
		return false;
	}
	return Boolean(cb(a[0]) || someRecursive(a.slice(1), cb));   //actually Boolean() is not required, i just put it for readability
}
// Recursion: Given an array of numbers, collect all odd numbers into an array and return the array. This is the helper-method-recursion PATTERN.
function collectOdds(a) {
	var finalResult = [];

	function helper(b) {
		if (b.length === 0) return;

		if (b[0] % 2 !== 0) finalResult.push(b[0]);

		helper(b.slice(1));   //basically keep calling yourself on a size of n-- until your size n goes to zero. Coverting an iteration to a recursion.
	}
	helper(a);

	return finalResult;
}
function CollectOddsNoHelper(a) {
	let newArr = [];

	if (a.length === 0) return newArr;

	if (a[0] % 2 !== 0) newArr.push(a[0]);

	newArr = newArr.concat(CollectOddsNoHelper(a.slice(1)));

	return newArr;
}
// Recursion: fibonacci, takes n and returns the nth number in the fibonacci sequence
function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}
// Recursion: reverse, takes a string and returns a reversed string
function reverse(s) {
	if (s.length <= 1) return s;

	return s.charAt(s.length - 1) + reverse(s.slice(0, s.length - 1));    //story becomes: y+reverse(stor) which becomes r+reverse(sto)
}
//Recursion: isPalindrome, takes a string and return true/false if string is a palindrome
function isPalindrome(s) {
	//basically check if the string is symmetric, outwards to inwards..
	if (s.length === 1) return true;
	if (s.length === 2) return s[0] === s[1];

	if (s[0] === s[s.length - 1]) {
		return isPalindrome(s.slice(1, -1));
	}
	return false;
}
// Recursion: flatten, accepts an array of arrays (can be any number of levels deep) and returns a new array with all values in the top level (1 flattened array). Example: [[[[3]],6]] should give [3,6]
function flatten(a) {
	var result = [];

	for (i = 0; i < a.length; i++) {
		if (Array.isArray(a[i])) {
			result = result.concat(flatten(a[i]));
		} else {
			result.push(a[i]);
		}
	}

	return result;
}
// Recursion: capitalizeFirst(), takes an array of strings, capitalize the first letter of each string in the array.  ['cat','car','dog'] to ['Cat','Car','Dog']
function capitalizeFirst(array) {
	if (array.length === 1) {
		return [array[0][0].toUpperCase() + array[0].substr(1)];
	}
	const res = capitalizeFirst(array.slice(0, -1));
	const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
	res.push(string);
	return res;
}
// Recursion: nestedEvenSum(), returns the sum of all even numbers in an object which may contain nested objects. i.e find all 'values' in this object (however deep), if value is even, add it
function nestedEvenSum(obj) {
	var result = 0;

	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			result += nestedEvenSum(obj[key]);
		} else if (typeof obj[key] === 'number') {
			if (obj[key] % 2 === 0) result += obj[key];
		}
	}

	return result;
}
// Recursion: capitalizeWords(), given an array of words, return a new array containing each word capitalized.
function capitalizeWords(arr) {
	if (arr.length === 1) {
		return [arr[0].toUpperCase()];
	}
	let res = capitalizeWords(arr.slice(0, -1));
	res.push(arr[arr.length - 1].toUpperCase());
	return res;
}
// Recursion: stringifyNumbers, takes an obj and finds all the 'values' that are numbers (however deep) and convert them to strings. It must return a new obj.
function stringifyNumbers(obj) {
	var newObj = {};

	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}

	return newObj;
}
// Recursion: collectStrings, takes an object and returns an array of all the values in the object that are of type string
function collectStrings(obj) {
	var result = [];

	for (let key in obj) {
		if (typeof obj[key] === 'string') {
			result.push(obj[key]);
		} else if (typeof obj[key] === 'object') {
			result.push(...collectStrings(obj[key]));    //result = result.concat(collectStrings(obj[key]))
		}
	}

	return result;
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
function fibSlowRecurssion(n) {
	if (n < 2) return n;
	return fibSlowRecurssion(n-1) + fibSlowRecurssion(n-2);
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
const fib = memoize(fibSlowRecurssion);
function fibFastRecurssion(n) {  // (top-down approach) O(2^n) !!! fib(45) on chrome takes 10 seconds. fib(100) crashes chrome. (i.e without memoization)
	if (n < 2) {       // memoized fibo is O(n)
		return n;
	}

	return fib(n - 1) + fib(n - 2);  //you call fib here and not fibViaRecurssion.  fib(n-2) subtree does not run until the whole fin(n-1) sub tree finishes
}

//another different implementation
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


// Dynamic Programming: Solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once and storing their solutions. It has nothing to do with word "dynamic" or "programming".
// Dynamic programming is almost: Divide & Conquer (through recursion) + Memoization. You memoize subproblems.
// The name is very misleading, this is not AI generated programs! It is just a more optimal way to solve an already solved problem.
// DP can be used on a problem if it has these characteristics -
// 1)Overlapping subproblems: the problem can be broken down into subproblems which are solved and reused several times. Fibonacci has it, but merge sort has subproblems that don't overlap!! Each subproblem in merge sort is a different array ,that you are trying to merge.
// 2)Optimal substructure: The optimal solution of a bigger problem can be constructed from optimal solutions of its subproblems. Like, the bset solution for Fib(10) can be calculated from the best solution for fib(5).
// So in SPL You use past knowledge to make solving a future problem easier. Like memoize of fibonacci.
