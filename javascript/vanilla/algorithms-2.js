//Write a function addUpto(n) that returns the sum of all numbers from 1 to n
function addUpto(n) {
	let total = 0;
	for (let i = 0; i <= n; i++) {        //this does n comparisons.
		total += i            //this does n additions in total and n assignments in total. O(n) Linear time
	}
	return total;
}
function addUpto(n) {   //add 1 to 100 and 100 to 1 (so 101+101+101+101 ... 100 times. Then divide that by 2)
	return n * (n + 1) / 2          //this does only 1 addtion, 1 multiplication, 1 division and 1 assignment in TOTAL. O(1) Constant time
}
function logAtMost10(n) {
	for (var i = 1; i <= Math.min(n, 10); i++) {   // this one is O(1) [constant time] and not O(n)
		console.log(i);
	}
}

// Sieve of Eratosthenes: Return an array of prime numbers up to n.
function primesToN(n) {
	let primes = [];
	for(let i=0; i <=n; i++){
		primes[i]=true;
	}
	primes[0] = false;
	primes[1] = true;

	//Loop through primes array, and mark all multiples of i as false. You only have to go till sqrt(n).
	for(let i=2; i<=Math.sqrt(n); i++){
		for (let j=2; j*i<=n; j++){
			primes[j*i] = false;
		}
	}

	let resultsArray = [];
	for (k in primes){
		if(primes[k] === true) resultsArray.push(k);
	}

	return resultsArray;
}

// Write a function SAME that compares two arrays. Should return true if one array has all the square values of the other array. As long every square is there (and in any order), it is true. The frequencies should match.  same([1,2,3], [4,1,9]) is true.
function same(f,s) {     //O(n^2)
	if (f.length !== s.length) {
		return;
	}
	for (let i = 0; i < f.length; i++) {
		let foundIndex = s.indexOf(f[i] ** 2);
		if (foundIndex === -1) {
			return;
		}
		s.splice(foundIndex,1);  //if the element is found in the second array at 'foundIndex', then remove this element from the second array
	}
	return true;
}

function same(f,s) {   //O(n)
	if (f.length !== s.length) {
		return;
	}
	let charMapF = {};
	let charMapS = {};
	for (let v of f) {
		charMapF[v] = (charMapF[v] || 0) + 1;
	}
	for (let v of s) {
		charMapS[v] = (charMapS[v] || 0) + 1;
	}

	for(let key in charMapF) {
		if (!(key**2 in charMapS)){
			return false;
		}
		if (charMapF[key] !== charMapS[key**2]){
			return false;
		}
	}
}

// SumZero: Write a function which accepts a sorted array of ints. Func must fine the first pair whose sum is zero. Return the pair as an array or return undefined.
function sumZero(a) {  //O(n^2)
	for (let i =0; i < a.length; i++) {
		for (let j = i + 1; j < a.length; j++) {
			if (a[i] + a[j] === 0) {
				return [a[i], a[j]];
			}
		}
	}
}

function sumZero(a) {  //O(n)
	let beg = 0;
	let end = a.length-1;

	while (beg < end) {
		let sum = a[beg] + a[end];
		if (sum === 0) {
			return [a[beg], a[end]];
		} else if (sum > 0) {
			end--;        //positive number is too big, go one back
		} else {
			beg++;        //negative number is too negative, go one forward
		}
	}
}

// countUniqueValues: A func that accepts a sorted integer array, and counts the number of unique values in it. (array can have negative numbers too)
// one way is to build a charMap with frequencies, then just do Object.key(charMap).length
function countUniqueValues(a) { //O(n)
	let counter = 0;
	for (let i = 0 ; i < a.length; i++) {
		if ( i === 0) {
			counter++;                  // the first element does not have any previous element.
		} else{
			if (a[i] !== a[i-1]) {      //since it is a sorted array, if this element is not equal to it's previos, then increment counter
				counter++;
			}
		}
	}
	return counter;
}
function returnUniqueValues(a) { //O(n)
	if (a.length === 0) return;
	var i = 0;
	for (var j = 1; j < a.length; j++) {
		if (a[i] === a[j]) {
			continue;
		} else {
			i++;
			a[i] = a[j];
		}
	}
	return a.slice(0, i + 1);   //so a=[1,1,2,2,3,3,3,4,4,5,6,7] becomes a=[1,2,3,4,5,6,7,4,4,5,6,7] and you just return index 0 to 6
}

// longestUniqueChars: A func that returns the longest string of unique characters within a string
function longestUniqueChars(s) {

}

// maxSubArraySum: A func that takes an integer array and number n. It returns the maximum sum of n consecutive elements in the array.
function maxSubArraySum(a, n) { //O(n^2)
	if (n > a.length) return;

	let currentMaxValue = -Infinity;
	let startIndexOfCurrentMaxValue = '';
	let sum = 0;

	for (let i = 0; i < a.length-n; i++) {
		sum = 0;
		for (let j = 0; j < n; j++) {
			sum += a[i+j];     //so add a[0],a[1],a[2],a[3]
		}
		if (sum > currentMaxValue) {
			currentMaxValue = sum;
			startIndexOfCurrentMaxValue = i;
		}

	}
	return currentMaxValue;
}
function maxSubArraySum(a, n) {  //O(n)  Sliding Window  //in [1,2,3,>4,5,6,7<,8] the sum at 4 is previousSum-3+7, the sum at 5 is previousSum-4+8
	if (n > a.length) return;

	let currentMaxValue = -Infinity

	let slidingSum = 0;
	for (let i = 0; i < n; i++) {
		slidingSum += a[i];
	}
	currentMaxValue = slidingSum;

	for (let i = 1; i < a.length-n; i++) {
		slidingSum = slidingSum - a[i-1] + a[i+n-1];
		if (slidingSum > currentMaxValue) {   //or do currentMaxValue = Math.max(currentMaxValue, slidingSum)
			currentMaxValue = slidingSum;
		}
	}

	return currentMaxValue;
}

// sameFrequency: Given two positive integers, return true if they both have the same frequencies for the different digits
function sameFrequency (a,b) {
 //just convert both to strings, now check if they are anagrams or not. O(n).
}

// areThereDuplicates: func accepts a variable number of arguments, and checks if there are any duplicates among the arguments passed in.
function areThereDuplicates (...args) {
	// SOL1: create a charMap, if any of the frequencies are greater than 1, then return true.
	// SOL2: args.sort((a,b) => a > b); NOW loop through the array, if a[i] === a[i+1] return true.
	// SOL3: return new Set(args).size !== args.length;
}

// averagePair: Given a sorted integer array and a target avg, determine if there is atleast one pair of values in the array whose avg equals the given avg.
function averagePair(a, avg) {  //O(n)
	var beg = 0;
	var end = a.length-1;
	let currentAvg = 0;

	while (beg < end) {
		currentAvg = (a[beg]+a[end])/2;
		if (currentAvg === avg) {
			return true;
		} else if (currentAvg > avg) {
			end--;       // skewing too much on the positive end, reduce the right bound
		} else {
			beg++;     //skewing too low, increase the lower bound.
		}
	}
	return false;
}

// isSubsequence: Func takes two strings and checks whether the chars in string1 form a subsequence of the chars in string2. Example: 'sing' in  'string' true. All the chars in string1 appear somewhere in string2 without their order changing.
function isSubsequence(str1, str2) {  //O(n+m)
	var i = 0;
	var j = 0;
	if (!str1) return true;
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
}

// maxSubArraySum: Func takes an array of integers and a number, and returns the maximum sum of any n adjacent elements.   ([700,1,400,300],2) should give 701
function maxSubArraySum(arr,n) { //O(n)
	if (n > arr.length) return null;

	var currentMax = -Infinity;
	var currentSlidingSum = 0;
	for (let i=0; i<n; i++) {
		currentSlidingSum += arr[i];
	}
	currentMax = currentSlidingSum;

	for(let i=1; i<=arr.length-n; i++){
		currentSlidingSum = currentSlidingSum - arr[i-1] + arr[i+n-1];   //sliding window
		if (currentSlidingSum > currentMax) currentMax = currentSlidingSum;
	}
	return currentMax;
}

// minSubArrayLen: Func takes an array of positive integers and postive integer. Func returns the length of the smallest contiguous subarray whose sum >= number passed to the function.
function minSubArrayLen(nums, sum) {  //O(n)
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < nums.length) {
		// if current window doesn't add up to the given sum then
		// move the window to right
		if (total < sum && end < nums.length) {
			total += nums[end];
			end++;
		}
		// if current window adds up to at least the sum given then
		// we can shrink the window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= nums[start];
			start++;
		}
		// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
}

// findLongestSubstring: Func takes a string and returns the length of the longest substring will all distinct characters.
function findLongestSubstring(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		longest = Math.max(longest, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return longest;
}

// Recursion: Count down from n
function countDown (n) {
	if (n === 0) {
		console.log('count down finished');
		return;                          // when it hits the line, the call stack will consist of n+1 countDown funcs.. in the stack
	}
	console.log(n);                   // prints out 5,4,3,2,1
	n--;
	countDown(n);
	console.log('finished '+n);       // then prints out 0,1,2,3,4
}
// Recursion: sumToN, find the sum of first n numbers
function sumToN(n) {
	if (n === 1)  return n;
	return n + sumToN(n-1);    //every TCO recursion line must have a "return" so that the value is bubbled up the call stack of recursive calls!!
}
// Recursion: factorial of n
function factorial(n) {    // O(n)
	if (n<0) return 0;  // invalid input

	if (n <= 1)  return 1;    //0! is 1, 1! is 1
	return n * factorial(n-1);
}
// Recursion: Given an array of numbers, collect all odd numbers into an array and return the array.   This is the helper-method-recusrion PATTERN.
function collectOdds(a) {
	var finalResult = [];

	function helper(b) {
		if (b.length === 0) return;

		if (b[0]%2!==0) finalResult.push(b[0]);

		helper(b.slice(1));   //basically keep calling yourself on a size of n-- until your size n goes to zero. Coverting an iteration to a recursion.
	}
	helper(a);

	return finalResult;
}
function CollectOddsNoHelper(a) {
	let newArr = [];

	if (a.length === 0) return newArr;

	if(a[0]%2!==0) newArr.push(a[0]);

	newArr = newArr.concat(CollectOddsNoHelper(a.slice(1)));

	return newArr;
}
// Recursion: Write a function 'power' that takes a base and an exponent and returns the value of base^exponent. i.e mimic Math.pow()
function power(b,e) {
	if (e === 0) {
		return 1;     // special case
	}
	return b * power(b,--e);   // if you put e-- it will be inifite loop!!
}
// Recursion: factorial - takes n and returns n!
function factorial(n) {

	return n * factorial(n-1);
}
//Recursion: productOfArray, takes an array of integers and returns the product of them all
function productOfArray(a) {
	if (a.length === 1) return a[0];

	return a[0] * productOfArray(a.slice(1));
}
//Recursion: recursiveRange, takes a number and adds up all number from 0 to n
function recursiveRange(n) {
	if (n === 0) return 0;
	return n + recursiveRange(n-1);
}
// Recursion: fibonacci, takes n and returns the nth number in the fibonacci sequence
function fib(n){
	if (n <= 2) return 1;
	return fib(n-1) + fib(n-2);
}
// Recursion: reverse, takes a string and returns a reversed string
function reverse(s) {
	if (s.length <= 1) return s;

	return s.charAt(s.length-1) + reverse(s.slice(0,s.length-1));    //story becomes: y+reverse(stor) which becomes r+reverse(sto)
}
//Recursion: isPalindrome, takes a string and return true/false if string is a palindrome
function isPalindrome(s) {
	//basically check if the string is symmetric, outwards to inwards..
	if (s.length === 1) return true;
	if (s.length === 2) return s[0] === s[1];

	if (s[0] === s[s.length-1]) {
		return isPalindrome(s.slice(1, -1));
	}
	return false;
}
// Recursion: someRecursive, takes an array and a callback. Function returns true if ANY element in the array when called with the callback returns true, i.e cb(anyArrayElement) === true, then return true
function someRecursive(a,cb) {
	if (a.length === 0) {
		return false;
	}
	return Boolean(cb(a[0]) || someRecursive(a.slice(1), cb));   //actually Boolean() is not required, i just put it for readability
}
// Recursion: flatten, accepts an array of arrays (can be any number of levels deep) and returns a new array with all values in the top level (1 flattened array). Example: [[[[3]],6]] should give [3,6]
function flatten(a) {
	var result = [];

	for (i=0; i<a.length; i++) {
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
			if (obj[key]%2 === 0) result += obj[key];
		}
	}

	return result;
}
// Recursion: capitalizeWords(), given an array of words, return a new array containing each word capitalized.
function capitalizeWords(arr) {
	if (arr.length === 1) {
		return [arr[0].toUpperCase()];
	}
	let res = capitalizeWords(arr.slice(0,-1));
	res.push(arr[arr.length-1].toUpperCase());
	return res;
}
// Recursion: stringifyNumbers, takes an obj and finds all the 'values' that are numbers (however deep) and convert them to strings. It must return a new obj.
function stringifyNumbers (obj) {
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
	let end = arr.length-1;
	let mid;

	while (beg <= end) {                    //this won't work if it is beg<end, it has to be <=
		mid = Math.floor((beg+end)/2);        //console.log(beg,mid,end), you will see different values in different iterations

		if (arr[mid] === n) return mid;
		else if (arr[mid] > n) end = mid-1;   // look at the left half
		else beg = mid+1;                     //look at the right half
	}
	return -1;
}

function binarySearchRecursive(arr, n, beg = 0, end = arr.length - 1) { //O(logn) VVIP
	let mid = Math.floor((beg + end) / 2);

	if (n === arr[mid]) return mid;
	else if (n > arr[mid] && beg!==end) return binarySearchRecursive(arr, n, mid + 1, end);    //Tail call optimization
	else if (n < arr[mid] && beg!==end) return binarySearchRecursive(arr, n, beg, mid - 1);   //Tail call optimization
	else return 'not-found';

}

// Count the number of times a string appears inside another string.
function stringSearch(s1,s2) {  //search for s2 inside s1. O(n^2)
	let mainCounter = 0;
	for (let i = 0, i < s1.length; i++) {
		let  k = i;
		for (let j = 0; j < s2.length; j++) {
			if (s1[k] === s2[j]) {      // instead of k, you can use i+j
				k++;
			} else {
				break;
			}
			if (j===s2.length-1) mainCounter++;
		}
		// this is the outer loop
	}
	return mainCounter;
}
















