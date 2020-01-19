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
function reverseWords(s) {
	var wordsArr = s.split('');
	var reversedWords = [];

	wordsArr.forEach(w => {
		let reversedWord = '';
		for (let i = w.length - 1; i >= 0; i--) {
			reversedWord += w[i];
		}
		reversedWords.push(reversedWord);
	});

	return reversedWords.join('');
}

// Reverse array in place
function reverseArrayInPlace(arr) {
	for (let i = 0; i < arr.length / 2; i++) {     //Loop through ONLY the first half of the array. If you loop through the whol array, you will switch back the items back in place...
		[arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - i - 1], arr[i]];   // swap
	}
	return arr;
}

// meanMedianMode: Given an integer array, return an object that has the mean, median and mode.
function meanMediaModeArray(arr) {
	let mean, median, mode = [];

	let sum = 0;
	arr.forEach(x => sum += x);
	mean = sum / arr.length;

	arr.sort((a, b) => a - b);
	if (arr.length % 2 !== 0) median = arr[Math.floor(arr.length / 2)];          //for odd number of elements, return middle element
	else median = (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2;    //for even number of elements, return avg of two mid elements

	let hashTable = {}
	arr.forEach(x => {
		hashTable[x] = hashTable[x] + 1 || 1;
	});
	let maxFreq = 0;
	for (index in hashTable) {
		if (hashTable[index] > maxFreq) {
			mode = [arr[index]];     //reset the mode array to this new value
			maxFreq = hashTable[index];
		} else if (hashTable[index] === maxFreq) {
			mode.push(arr[index]);   //add it to the existing array
		}
	}
	if (mode.length === Object.keys(hashTable).length) mode = [];    //if every element has the same frequency, that means there is no mode.

	return { mean, median, mode };      //shorthand object literal syntax
}

// twoSum: given an integer array, return an array of number pairs that add up to the given sum. Do it in O(n).
// obvious solution is O(n^2), for each number, loop through all element of the array to see if they add up to sum
function twoSum(numArray, sum) {  //O(n)
	var result = [], hashTable = {};

	numArray.forEach(x => {
		let remainder = sum - x;
		if (hashTable[remainder] !== undefined) result.push([x, remainder]);   // in ([1,4,6,3,5],7) it adds [6,1] to the result only when x=6, for x=1 it just does hashTable[1]=''
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
function ransomNote(ransomStr, magazineStr) {    //O(n+m)
	let ransomWords = ransomStr.split(' ');
	let magazineWords = magazineStr.split(' ');
	let magazineHashMap = {};

	for (w of magazineWords) {
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
function caesarCipher(str, num) {      //num can be any integer
	num = num % 26;
	let lowerStr = str.toLowerCase();
	let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let newString = '';

	for (let i = 0; i < lowerStr.length; i++) {
		let l = lowerStr[i];
		if (!alphabets.includes(l)) {
			newString += l;
			continue;
		}

		let currentIndex = alphabets.indexOf(l);
		let newIndex = currentIndex + num;       //num can be a positive or negative integer..
		if (newIndex > 25) newIndex -= 26;
		if (newIndex < 0) newIndex += 26;
		if (str[i] === str[i].toUpperCase()) {
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
		numberOfSpaceInThisRow = 2 * n - 2 * i;
		numberOfHashInThisRow = 2 * i - 1;
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





















