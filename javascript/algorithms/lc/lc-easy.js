// Easy LC problems

//const { result, keys } = require("underscore");

//LC#0001  Diff:Easy
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9,return [0, 1].
*/
// speed:96%
var twoSum = function (nums, target) {
	let cm = {};
	for(i=0;i<=nums.length;i++){
		let n = nums[i];
		if (cm[target - n] !== undefined) return [cm[target - n], i];
		if (cm[n] === undefined) cm[n] = i;
	}
}

//LC#0007 Diff:Easy
/*
Given a 32-bit signed integer, reverse digits of an integer.
Input: 123    Output: 321
Input: -123   Output: -321
Input: 120    Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [-2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
// speed:96%
var reverse = function (x) {
	let y = x.toString();     //don't use y=y.split('').reverse().join(''); it is VERY slow. Use a for loop.
	let rev = '';
	for(i=0;i<y.length;i++){
		if(y[i]!=='-'){
			rev = y[i] + rev;
		}
	}
	if (x < 0) rev = '-' + rev;
	let retValue = Number(rev);
	if ((retValue > Math.pow(2, 31) - 1) || (retValue < (-1 * Math.pow(2, 31)))) retValue = 0;
	return retValue;
};

//LC#0009 Diff:Easy
/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
Input: 121    Output: true
Input: -121   Output: false
Input: 10     Output: false
Follow up: Coud you solve it without converting the integer to a string?
*/
//speed:50%
var isPalindrome = function (x) {
	if(x < 0) return false;

	let y = x.toString();
	let rev = '';
	for(i=0;i<y.length;i++){
		rev = y[i] + rev;
	}
	return (y === rev);
};
//speed: 61%
var isPalindrome = function (x) {
	if (x < 0) return false;

	let y = x.toString();
	for(i=0;i<y.length/2;i++){
		if(y[i]!==y[y.length-1-i]) return false;
	}
	return true;
};
//speed:50%   No strings though
var isPalindrome = function (x) {
	if (x < 10) return x>=0;

	let original = x;
	let rev = 0;
	while(x > 0) {
		rev = rev*10 + x%10;
		x = Math.floor(x/10);
	}
	return rev===original
};
//speed:99%
var isPalindrome = function (x) {
	const arr = String(x).split('');
	while (arr.length > 1) {
		if (arr.shift() !== arr.pop()) {
			return false;
		}
	}
	return true;
};


//LC#0013 Diff:Easy
/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Input: "III"      Output: 3
Input: "IV"       Output: 4
Input: "IX"       Output: 9
Input: "LVIII"    Output: 58      Explanation: L = 50, V= 5, III = 3.
Input: "MCMXCIV"  Output: 1994    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
//basically you have these chars - I,IV,IX ,V, X,XL,XC, C,CD,CM, D, M
//speed:86%
var romanToInt = function (s) {
	let sum=0;
	for(i=0;i<s.length;i++){
		let c = s[i];
		let cn = s[i+1];
		if (c === 'I') {
			if (cn === 'V') { sum += 4; i++ }
			else if (cn === 'X') { sum += 9; i++ }
			else sum += 1;
		} else if (c === 'V'){
			sum += 5;
		} else if (c === 'X') {
			if (cn === 'L') { sum += 40; i++ }
			else if ( cn==='C' ) { sum += 90; i++ }
			else sum += 10;
		} else if (c === 'L') {
			sum += 50;
		} else if (c ==='C') {
			if (cn === 'D') { sum += 400; i++ }
			else if (cn === 'M') { sum += 900; i++ }
			else sum += 100;
		} else if (c === 'D') {
			sum += 500;
		} else if (c === 'M') {
			sum += 1000;
		}
	}
	return sum;
};
//speed:20%, less code
var romanToInt = function (s) {
	let hm = { 'I':1, 'IV':4, 'IX':9, 'V':5, 'X':10, 'XL':40, 'XC':90, 'L':50, 'C':100, 'CD':400, 'CM':900, 'D':500, 'M':1000};
	let sum = 0;
	for (i = 0; i < s.length; i++) {
		let curr = s[i];
		let next = s[i + 1];
		if(hm[curr + next]){
			sum += hm[curr+next];
			++i;
		} else {
			sum += hm[curr];
		}
	}
	return sum;
}
//speed:97% - convert the string to array with s.split(''), use a switch case on 'c', instead of if-else-if

//LC#0014 Diff:Easy
/*
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
Input: ["flower","flow","flight"]     Output: "fl"
Input: ["dog","racecar","car"]        Output: ""
All given inputs are in lowercase letters a-z.
*/
//speed:91%
var longestCommonPrefix = function (strs) {
	let r = '';
	if(strs.length === 0) return r;

	for(i=0;i<strs[0].length;i++){
		let letter = strs[0][i];
		for(j=1;j<strs.length;j++){
			if(strs[j][i] !== letter) {return r}
		}
		//this mean all the strings have this letter, so add it to the result.
		r += letter;
	}
	return r;  //this is for the input: [""]
};

//LC#0020 Diff:Easy Valid Parentheses
/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
Input: "()"         Output: true
Input: "()[]{}"     Output: true
Input: "(]"         Output: false
Input: "([)]"       Output: false
Input: "{[]}"       Output: true
*/
//speed:83%
var isValid = function (s) {
	let stack = [];
	for (i = 0; i < s.length; i++) {
		switch(s[i]){
			case '{':
			case '[':
			case '(':
				stack.push(s[i]);
				break;
			case '}':
				if(stack.pop() !== '{') return false;
				break;
			case ']':
				if (stack.pop() !== '[') return false;
				break;
			case ')':
				if (stack.pop() !== '(') return false;
				break;
		}
	}
	return stack.length===0;  //important line (there should not be any pending open brackets)
}

//LC#0021 Diff:Easy Merge Two Sorted Lists
/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
Input: 1->2->4  &   1->3->4              Output: 1->1->2->3->4->4
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
//A linked list just has a root pointer alone. Return the root node of the new linked list.
// l1 and l2 are just pointers to the root notes of the lists...
*/
//speed:85%
var mergeTwoLists = function (l1, l2) {
	let dummyRoot = new ListNode('dummy-value',null);    //don't forget the NEW keyword!
	let curr = dummyRoot;

	while(l1 !== null && l2 !== null) {
		if(l1.val <= l2.val) {
			curr.next = l1;
			l1 = l1.next
		} else {
			curr.next = l2;
			l2 = l2.next;
		}
		curr = curr.next;
		//curr.next = null;  (not mandatory to make it null)
	}
	curr.next = l1 || l2;    //only one of these will still have elements left
	return dummyRoot.next;
};

//LC#0026 Diff:Easy  Remove Duplicates from Sorted Array
/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
Given nums = [1,1,2],Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.It doesn't matter what you leave beyond the returned length.
Given nums = [0,0,1,1,1,2,2,3,3,4], Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.It doesn't matter what values are set beyond the returned length.

So modify the existing array in-place and return the new length (integer) alone
*/
//speed:54%, memory:100% !!!
var removeDuplicates = function (nums) {
	let writingPoint = 1;
	for(i=1;i<nums.length;i++){
		if(nums[i] !== nums[i-1]) {
			nums[writingPoint] = nums[i];
			writingPoint++;
		} else {
			// it is a duplicate value, don't write it.
			continue;
		}
	}
	return writingPoint;
};

//LC#0027 Diff:Easy Remove Element
/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.
Given nums = [3,2,2,3], val = 3, Your function should return length = 2, with the first two elements of nums being 2. It doesn't matter what you leave beyond the returned length.
Given nums = [0,1,2,2,3,0,4,2], val = 2, Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.

Return value is the new length (integer)
*/
//speed:85%, memory:100%
var removeElement = function (nums, val) {
	let writingPoint = 0;
	for(i=0;i<nums.length;i++){
		if(nums[i] !== val){
			nums[writingPoint] = nums[i];
			writingPoint++;
		} else {
			continue; //if nums[i] is val, write over it at a later time (i.e do not move the writing point)
		}
	}
	return writingPoint;
};

//LC#0028 Diff:Easy Implement strStr()
/*
Implement strStr().  i.e MainString.indexOf(someSubString)
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Input: haystack = "hello", needle = "ll"         Output: 2
Input: haystack = "aaaaa", needle = "bba"        Output: -1
return 0 is needle is empty string
*/
//speed:44%
var strStr = function (haystackString, needleString) {
	if (needleString === '') return 0
	return haystackString.indexOf(needleString);
}
//speed:9%
var strStr = function (haystackString, needleString) {
	if(needleString === '') return 0;

	for(i=0;i<haystackString.length;i++){
		if(haystackString[i] === needleString[0]) {
					//Run this block only if the char matches the first char of the needleString
					let j = 1;
					for(k=i+1;k<haystackString.length;k++){
						if(haystackString[k] !== needleString[j]) break;
						j++;
					}
					if(j===needleString.length) return i;
		}
	}
	return -1
};
//speed:66%   (i came very close to this other's solution)
const strStr = (haystack, needle) => {
	if (needle === '') return 0;
	if (haystack.length < needle.length) 	return -1;

	let j = 0;
	for (i = 0; i < haystack.length; i += 1) {
		if (haystack[i] === needle[j]) {
			if (j === needle.length - 1) 	return i - j;
			j++;
		} else {
			i = i - j;  //failed, move i back to that of the string..
			j = 0;
		}
	}
	return -1;
};

//LC#0035 Diff:Easy Search Insert Position
/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.
Input: [1,3,5,6], 5     Output: 2
Input: [1,3,5,6], 2     Output: 1
Input: [1,3,5,6], 7     Output: 4
Input: [1,3,5,6], 0     Output: 0
*/
//speed:90%
var searchInsert = function (nums, target) {
	if (target < nums[0]) return 0;
	if (target > nums[nums.length - 1]) return nums.length;

	//even if you remove the above two optimization lines, the rest of the logic still gives the correct answer.
	let beg = 0;
	let end = nums.length-1;
	let mid;
	while (beg <= end) {         //This has to be <= and not <          !!!!!
		mid = Math.floor((beg+end)/2);
		if(target === nums[mid]) return mid;

		if(target > nums[mid]) beg = mid + 1;
		else if (target < nums[mid]) end = mid - 1;
	}
	// a the end of the loop, beg>end
	// target has not been found, use mid to find it's potential place.
	return target < nums[mid] ? mid : mid+1;
};

//LC#0038 Diff:Easy Count and Say
/*
The count-and-say sequence is the sequence of integers with the first five terms as following:
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.
Note: Each term of the sequence of integers will be represented as a string.
Input: 1    Output: "1"
Input: 4    Output: "1211"    (i.e input 3, gives output '21')
*/
//speed:99%
var countAndSay = function (n) {
	if(n === 1) return '1';

	let prev = '1';
	for(i=1;i<n;i++){
		prev = getDescription(prev);
	}
	return prev;

	function getDescription(s){     //returns '1211' for s='21'
		s = s+'X'; //making it '1211X'
		let ret = '';
		let count = 0;
		for(j=0;j<s.length-1;j++){
			if(s[j] !== s[j+1]) {
				++count;
				ret = ret + count + s[j];
				count = 0;
			} else {
				++count;
			}
		}
		return ret;
	}
};
//from leetcode-
var countAndSay = function (n) {
	let res = '1';
	for (let i = 1; i < n; i++) {
		res = res.replace(/(\d)(?!\1)/g, '$1|').split('|').reduce((res, s) => res + (s ? s.length + s[0] : ''), '');
	}
	return res;
};

//LC#0053 Diff:Easy Maximum Subarray
/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Input: [-2,1,-3,4,-1,2,1,-5,4]    Output: 6         Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/
//this is a DP problem
//speed:30% leetcode solution
var maxSubArray = function (nums) {
	if (nums.length == 1) return nums[0];
	let currMax = nums[0];
	let history = nums[0];
	for (i = 1, z = nums.length; i < z; i++) {
		history = Math.max(history + nums[i], nums[i]);
		currMax = Math.max(history, currMax)
	}
	return currMax;
};


//LC#0058 Diff:Easy Length of Last Word
/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
If the last word does not exist, return 0.
Note: A word is defined as a maximal substring consisting of non-space characters only.
Input: "Hello World"    Output: 5
Input: "Hello "         Output: 5
*/
//speed:99%
var lengthOfLastWord = function (s) {
	let i = s.length - 1;
	while (i !== 0 && s[i] === '') i--;   //remove all trailing spaces for inputs like "Hello World   "

	let count = 0;
	for (; i >= 0; i--) {
		if (s[i] !== ' ') count++
		else break;
	}
	return count;
};
//speed:
var lengthOfLastWord = function (s) {
	return s.trim().split(" ").pop().length;
};

//LC#0066 Diff:Easy Plus One
/*
Given an array of digits representing a non-negative integer, add one to the integer and return the new array.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
You may assume the integer does not contain any leading zero, except the actual number 0 itself. The input array is never an empty array.
Input: [1,2,3]      Output: [1,2,4]
Input: [1,2,9]      Output: [1,3,0]
Input: [4,3,2,1]    Output: [4,3,2,2]
Input: [9,9,9]    Output: [1,0,0,0]
The array of digits could be of very very high length, so don't use Number() etc, you will be out of bounds..
*/
//speed:85%
var plusOne = function (digits) {
	let i = digits.length-1;
	digits[i] = digits[i] + 1;

	while (digits[i] === 10) {
		digits[i] = 0;
		if(i!==0)  digits[i - 1] = digits[i - 1] + 1;
		else digits.unshift(1);  //edge case for inputs like [9],[99],[999] etc. makes it [10],[100],[1000]
		i--;
	}
	return digits;
};
//worse way that works for any x that is 1 to 9
var plusOne = function (digits, x) {
	let len = digits.length;
	let arr = digits.slice();

	arr[len - 1] = digits[len - 1] + x;

	if (arr[len - 1] >= 10) {   //only if there is carry the first time, then do the for loop
		arr[len - 1] = arr[len - 1] % 10;
		let c = 1;
		for (i = len - 2; i >= 0; i--) {
			arr[i] = digits[i] + c;
			if (arr[i] >= 10) { arr[i] = arr[i] % 10, c = 1 }
			else { c = 0 }
		}
		if (c > 0) arr = [c].concat(arr);
	}
	return arr;
}


//LC#0067 Diff:Easy Add Binary
/*
Given two binary strings, return their sum (also a binary string). The input strings are both non-empty and contains only characters 1 or 0.
Input: a = "11", b = "1"           Output: "100"
Input: a = "1010", b = "1011"      Output: "10101"
Constraints:
Each string consists only of '0' or '1' characters.
a.length >=1, b.length <= 10,000
Each string is either "0" or doesn't contain any leading zero.
*/
//speed:97%
var addBinary = function (a, b) {
	let ret = '';
	//since we are adding them, we need to read the two strings backwards, and not forwards
	let aEnd = a.length - 1;
	let bEnd = b.length - 1;
	let c = 0;

	while (aEnd >= 0 || bEnd >= 0) {
		let aa = a[aEnd] || 0;     //since one string is longer than the other, a[i] OR b[i] might be undefined, so treat it as a zero, Example: "10101" + "11"
		let bb = b[bEnd] || 0;
		let sum = Number(aa) + Number(bb) + c;
		if (sum === 2) { sum = 0; c = 1 }
		else if (sum === 3) { sum = 1; c = 1 }
		else c = 0;   //means the sum is 0 or 1
		ret = sum + ret;
		aEnd--; bEnd--;
	}
	if (c === 1) ret = 1 + ret;  //if there is carry over left after completely reading both strings, add it to the front.
	return ret;
};


//LC#0069 Diff:Easy Sqrt(x)
/*
Implement int sqrt(int x). Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
Input: 4   Output: 2
Input: 8   Output: 2
Input: 9   Output: 3
*/
//speed:5%
const mySqrt = function (x) {  //o(sqrt(n)s)
	let result = 1;
	while (result * result <= x) result++;
	return result - 1;
};
//speed:90% binary search
var mySqrt = function (x) {
	let lo = 0, hi = x;
	while (lo < hi) {
		const mid = parseInt((lo + hi) / 2);
		if (mid * mid === x) {
			return mid;
		}
		if (x < mid * mid) hi = mid - 1;
		else lo = mid + 1;
	}
	// If the number is not a perfect square, the binary search will come down to two numbers0 lo=8,hi=9,so mid=8, at the end of this iteration lo=9,hi=9 and it breaks out of the while loop (hi and lo are equal)
	return x < hi * hi ? hi - 1 : hi;
};


//LC#0070 Diff:Easy Climbing Stairs
/*
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.
Input: 2   Output: 2   Explanation: There are two ways to climb to the top: 1 step + 1 step , 2 steps
Input: 3   Output: 3   Explanation: There are three ways to climb to the top. 1 step + 1 step + 1 step, 1 step + 2 steps, 2 steps + 1 step
*/
//total ways to get to n is total way to n-1  PLUS total way to n-2    (becuase the final step will either be from n-1 OR from n-2, and that last step is part of the same WAY)
//speed:40% leetcode
var climbStairs = function (n) {
	//base cases
	if(n<=0) return 0;
	if(n===1) return 1;
	if(n===2) return 2;

	let a=0, b=1, c=2;
	for(i=3;i<=n;i++){
		a = b;
		b = c;
		c = a+b;
	}
	return c;
};

//LC#0083 Diff:Easy Remove Duplicates from Sorted List
/*
Given a sorted linked list, delete all duplicates such that each element appear only once. Return the head node.
Input: 1->1->2           Output: 1->2
Input: 1->1->2->3->3     Output: 1->2->3
Input: 1->3->4->4->4->5  Output: 1->3->4->5
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
 }
*/
//speed:55% my not so great solution
var deleteDuplicates = function (head) {
	if(!head) return head;

	let curr = head.next;   //start from the second element
	let prevNode = head;
	let duplicateNode = null;
	while (curr) {
		if (curr.val === prevNode.val && duplicateNode === null) {
			duplicateNode = prevNode;
		} else if (curr.val !== prevNode.val && duplicateNode !== null) {
			duplicateNode.next = curr;
			duplicateNode = null;
		}
		prevNode = curr;
		curr = curr.next;
	}
	if (duplicateNode) duplicateNode.next = null;   //for the case: input ends with duplcates [1,3,4,5,5,5]
	return head;
};

//leetcode: clean solution
var deleteDuplicates = function (head) {
	let cur = head;
	while (cur !== null) {
		let next = cur.next;
		while (next !== null && cur.val === next.val) {
			next = next.next;
		}
		cur.next = next;
		cur = next;
	}
	return head;
};

//LC#0088 Diff:Easy Merge Sorted Array
/*
Given two sorted integer arrays nums1 and nums2, merge nums2 INTO nums1 as one sorted array.
The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Input:
nums1 = [1,2,3,0,0,0], m = 3       //nums1 has space for numbers... right now they have 0s.
nums2 = [2,5,6],       n = 3
Output: [1,2,2,3,5,6]
*/
//speed:20%
var merge = function (nums1, m, nums2, n) {
	let i = m-1;     // m intitialized elems in nums1
	let j = n-1;     // n intitialized elems in nums2

	let w = m+n-1;   //write into the nums1 array backwards
	while (j >= 0) {       // at some point j will be done and will be negative, this should not be w>=0
		if(nums1[i] > nums2[j]) {
			nums1[w] = nums1[i];
			i--;
		} else {
			nums1[w] = nums2[j];
			j--;
		}
		w--;
	}
	return nums1;
};
// shorter solution from leetcode (same logic as above)
var merge = function (nums1, m, nums2, n) {
	var insertPos = m + n - 1;
	m--; n--;
	while (n >= 0) {
		nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
	}
};


//LC#0100 Diff:Easy Same Tree
/*
Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
Input:     1         1
          / \       / \
         2   3     2   3
        [1,2,3],   [1,2,3]
Output: true
Input:     1         1
          /           \
         2             2
        [1,2],     [1,null,2]
Output: false
Example 3:
Input:     1         1
          / \       / \
         2   1     1   2
        [1,2,1],   [1,1,2]
Output: false
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
You are given the two root nodes.
*/
//speed:6% (run dfs or bfs and store the tree into array, then compare arrays)
var isSameTree = function (p, q) {
	if(!p && !q) return true;   //two empty trees are equal
	if((!p && q) || (p && !q)) return false;  //one of the trees is empty (or if(!p || !q))

	let arr1 = [];
	let arr2 = [];
	function dfs(n,arr) {
		arr.push(n.val);
		if(n.left) dfs(n.left,arr);
			if(!n.left) arr.push(null);  //push a value of "null" into the array to flag that the spot was empty
		if(n.right) dfs(n.right,arr);
			if(!n.right) arr.push(null);
 	}
	dfs(p,arr1);
	dfs(q,arr2);

	if(arr1.length !== arr2.length) return false;
	for(i=0;i<arr1.length;i++){
		if(arr1[i] !== arr2[i]) return false;
	}
	return true;
};
//speed:75%  amazing ktk solution:)
var isSameTree = function (p, q) {
	function dfs(a,b) {
		if (!a && !b) return true;
		// now, this means one or both of them have a value
		if (!a || !b) return false;   //one is null and the other has a value

		if(a.val !== b.val) return false;
		return dfs(a.left, b.left) && dfs(a.right, b.right);
		//last two lines can be combined to: return x && y && z
	}
	return dfs(p,q);
}


//LC#0101 Diff:Easy Symmetric Tree
/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Follow up: Solve it both recursively and iteratively.
Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
*/
//speed:15%  Run BFS, check if each layer is a palindrome
var isSymmetric = function (root) {
	let nodes = [root, 'X'];
	let layer = [];
	while(nodes.length > 1) {     //Towards the end nodes just keeps infinitely adding and shift()ing 'X' to/from the array. So exit if the length===1 ....
		let n = nodes.shift();

		if(n!=='X'){
			if (n !== null) {
				layer.push(n.val);
				nodes.push(n.left);
				nodes.push(n.right);
			} else {
				layer.push('null');
			}
		} else if(n==='X'){
			if (!isPalindrome(layer)) return false;
			layer = [];
			nodes.push('X');
		}
	}
	return true;

	function isPalindrome(arr) {
		for(i=0;i<arr.length/2;i++){
			if(arr[i] !== arr[arr.length-1-i]) return false;
		}
		return true;
	}
};
//speed: 25% same as isSameTree() from problem number 100, only last two lines change
var isSymmetric = function (root) {
	function dfs(a, b) {
		if (!a && !b) return true;
		if (!a || !b) return false;   //one is null and the other has a value
		if (a.val !== b.val) return false;
		return dfs(a.left, b.right) && dfs(a.right, b.left);
	}
	return dfs(root, root);
}

//LC#0104 Diff:Easy Maximum Depth of Binary Tree
/*
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
*/
//speed:30%   Run BFS and count the layers
var maxDepth = function (root) {
	if(!root) return 0;

	let nodes = [root, 'X'];
	let count = 0;
	while(nodes.length > 1) {
		let n = nodes.shift();
		if(n !== 'X') {
			if(n.left!==null) nodes.push(n.left);
			if(n.right!==null) nodes.push(n.right);
		} else if (n === 'X') {
			count++;
			nodes.push('X');
		}
	}
	return count+1;     //this is count+1 as the nodes=[X] now, you need to count the previous layer that just finished
};
//speed:50%   leetcode solution brilliant DP
var maxDepth = function (n) {
	if (n === undefined || n === null) {
		return 0;
	}
	return Math.max(maxDepth(n.left), maxDepth(n.right)) + 1;
};


//LC#0107 Diff:Easy Binary Tree Level Order Traversal II
/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
*/
//speed:5%   run BFS and collect the layers
var levelOrderBottom = function (root) {
	if(!root) return [];

	let nodes = [root,'X'];
	let layers = [[]];
	while(nodes.length > 0) {
		let n = nodes.shift();
		if(n!=='X'){
			layers[layers.length-1].push(n.val);
			if(n.left!==null) nodes.push(n.left);
			if(n.right!==null) nodes.push(n.right);
		} else if (n==='X' && nodes.length > 0) {  //if there are no more nodes left, don't start a new layer
			layers.push([]);
			nodes.push('X');
		}
	}
	return layers.reverse();
};

//speed:90% leetcode solution
var levelOrderBottom = function (root) {
	if (!root) return [];
	let arr = [];

	dfs(root, arr);

	function dfs(n, arr, count = 1) {
		if (arr.length < count) arr.unshift([n.val]);  //if you are 4 levels down, you might have to start a new layer ...[n.val]
		else arr[arr.length - count].push(n.val);

		if (n.left) dfs(n.left, arr, count + 1);  //pass the child's layer number to the child
		if (n.right) dfs(n.right, arr, count + 1);
	}

	return arr;
};


//LC#0108 Diff:Easy Convert Sorted Array to Binary Search Tree
/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1. Return the HEAD node.
Example:
Given the sorted array: [-10,-3,0,5,9],
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
      0
     / \
   -3   9
   /   /
 -10  5
Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
*/
//speed:92%   leetcode solution
var sortedArrayToBST = function (nums) {
	if(nums.length === 0) return null;

	let mid = Math.floor((nums.length)/2);
	let root = new TreeNode(nums[mid], null, null);

	root.left = sortedArrayToBST(nums.slice(0,mid));     //when nums.length is 1, this is called with []
	root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));   //when nums.length is 1, this is called with []

	return root;

};

//LC#0110 Diff:Easy Balanced Binary Tree
/*
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
Given the following tree [3,9,20,null,null,15,7]:
    3
   / \
  9  20
    /  \
   15   7
Return true.
Given the following tree [1,2,2,3,3,null,null,4,4]:
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false. For node[1], left height is 3 and right height is 1.
Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
*/
//speed:90%  leetcode solution
var isBalanced = function (root) {
	function getHeight(node) {
		if (node === null) return 0;
		return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
	}

	if (root === null) return true;
	return isBalanced(root.left) && isBalanced(root.right) &&
		Math.abs(getHeight(root.left) - getHeight(root.right)) < 2;
};
//speed:87%  leetcode solution
function isBalanced(root) {
	if (root===null) return true; //special case

	let globalFlag = true;
	function getHeight(n) {
		if(n.left === null && n.right === null) return 1;   //meaning there is only one layer here, 'n' itself.
		let leftHeight = n.left!==null ? getHeight(n.left) : 0;
		let rightHeight = n.right!==null ? getHeight(n.right) : 0;

		if(Math.abs(leftHeight-rightHeight) > 1) globalFlag = false;

		return 1 + Math.max(leftHeight,rightHeight);  //1 because you need to count n itself. So itself+max(children height)
	}
	getHeight(root);
	return globalFlag;
}

//LC#0111 Diff:Easy Minimum Depth of Binary Tree
/*
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node. A leaf is a node with no children.
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.  3->9  (2 nodes in total)
Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
*/
//speed: 92%
//You will have to anyway look at every node to see which one has two null childs. Best is to go top down with BFS, and find out at which layer number, does a node does not have left and right child.
var minDepth = function (root) {
	if(!root) return 0;

	let nodes = [root,'X'];
	let layerNumber = 1;
	while(nodes.length>1){
		let n = nodes.shift();

		if(n!=='X') {
			if(!n.left && !n.right) return layerNumber;

			if(n.left) nodes.push(n.left);
			if(n.right) nodes.push(n.right);
		}else if (n==='X') {
			layerNumber++;
			nodes.push('X');
		}
	}
};
//speed: 56% leetcode solution recursive  (BFS returns immediately, whereas this one goes through the whole tree)
var minDepth = function (n) {
	if (n == null) return null

	if (n.left == null && n.right == null) return 1;
	if (n.right == null) return 1 + minDepth(n.left);
	if (n.left == null) return 1 + minDepth(n.right);

	return 1 + Math.min(minDepth(n.left), minDepth(n.right)) // return the min of both sides.
}

//LC#0112 Diff:Easy Path Sum
/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum. A leaf is a node with no children.
Given the below binary tree and sum = 22,
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/
//speed:25%  Each node is assigned a value, this is an array of possible sums to the nearest null
/*
  		   5 [24,11,26,17]
     /         \
    4 [15,6]    8 [21,12]
   / \         / \
  11  2       13  4

*/
var hasPathSum = function (root, sum) {
	if(!root) return false;

	function getLengthTillLeaf(n) {

		if(!n.left && !n.right) return [n.val];

		//if one of the nodes is null, that means n is not a leaf node, so let that path be invalid, add some 100000 to it.
		let leftValue = n.left!==null ? getLengthTillLeaf(n.left).map(x => x+n.val) : [1000000];
		let rightValue = n.right!== null ? getLengthTillLeaf(n.right).map(x => x+n.val) : [100000];

		let valuesOfThisNodeN = leftValue.concat(rightValue);
		return valuesOfThisNodeN;
	}
	let arrayOfSums = getLengthTillLeaf(root);
	return arrayofSums.indexOf(sum) > -1;
};
//speed:96% ktk solution
var hasPathSum = function (root, sum) {
	if(!root) return false;   //special case

	let flag = false
	function dfs(n, sumTillPrev) {
		let sumIncludingThisNode = sumTillPrev + n.val;

		if(!n.left && !n.right) {
			// we are at a root node
			if (sumIncludingThisNode === sum) flag = true;
		}

		if(n.left!==null) dfs(n.left, sumIncludingThisNode);  //pass on the sum to the next level (closure)
		if(n.right!==null) dfs(n.right, sumIncludingThisNode);
	}
	dfs(root, 0);

	return flag;
}
//speed:95% leetcode similar solution
var hasPathSum = function (root, sum) {
	if (!root) return false;

	if (!root.left && !root.right) { // check leaf
		return sum === root.val;
	} else { // continue DFS
		return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
	}
};

//LC#0118 Diff:Easy  Pascal's Triangle
/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
//speed:96%
var generate = function (numRows) {
	if(numRows === 0) return [];

	let pt = [[1]];
	if (numRows === 1) return pt;

	for(i=2;i<=numRows;i++){
		let currArr = [1];
		let prevRow = pt[pt.length-1];
		for(j=0;j<prevRow.length-1;j++){
			currArr.push(prevRow[j]+prevRow[j+1]);
		}
		currArr.push(1);
		pt.push(currArr);
	}
	return pt;
};
//speed: 99% leetcode solution  (think of it like a 2d matrix, but not a square matrix)
var generate = function (numRows) {
	var pascal = [];
	for (var i = 0; i < numRows; i++) {
		pascal[i] = [];
		pascal[i][0] = 1;
		for (var j = 1; j < i; j++) {
			pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
		}
		pascal[i][i] = 1;
	}
	return pascal;
};

//LC#0119 Diff:Easy Pascal's Triangle II
/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
Note that the row index starts from 0.
Example of pascal's triangle:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
Input: 3    Output: [1,3,3,1]
Could you optimize your algorithm to use only O(k) extra space?
*/
// So each row has +1 numbers compared to previous, so the kth row will have k+1 numbers in total.
//speed:80%
var getRow = function (rowIndex) {
	if(rowIndex === 0) return [1];

	let prevRow = [1];
	for(i=1;i<=rowIndex;i++){
		let currRow = [1];
		for(j=0;j<prevRow.length-1;j++){
			currRow.push(prevRow[j] + prevRow[j+1]);
		}
		currRow.push(1);
		prevRow = currRow;
	}
	return prevRow;
};
//speed:95%  leetcode solution. Right the next row backwards.. (and in-place)
var getRow = function (rowIndex) {
	var row = [1];

	for (var i = 1; i <= rowIndex; i++) {
		for (var j = i; j > 0; j--) {  //j should not be zero, the zeroth index will always be 1 (don't need to touch it again)
			if (j === i)
				row[j] = 1;  //the last element of each row is 1, so right this one first.
			else
				row[j] = row[j - 1] + row[j];
		}
	}
	return row;
};

//LC#0121 Diff:Easy  Best Time to Buy and Sell Stock
/*
Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.
Input: [7,1,5,3,6,4]  Output: 5  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Input: [7,6,4,3,1]   Output: 0   Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
//speed:85%    The maxProfit on any day is the diff between: price on that day and the lowest price till that day.
var maxProfit = function (prices) {
	let maxProfit = -Infinity;
	let lowestPriceTillDate = Infinity;
	let flagDoATransaction = false;

	for(i=1;i<prices.length;i++){
		lowestPriceTillDate = Math.min(prices[i-1],lowestPriceTillDate);

		//maxProfit = Math.max(prices[i] - lowestPriceTillDate, maxProfit);  //use this normally..
		if(prices[i] > lowestPriceTillDate) {
			flagDoATransaction = true;
			maxProfit = Math.max(prices[i] - lowestPriceTillDate, maxProfit);
		}
	}

	if(!flagDoATransaction) maxProfit = 0;  //if no transaction was made, return zero.
	return maxProfit;
};
//speed:85% similar leetcode solution
var maxProfit = function (prices) {
	var minTillDate = Number.MAX_SAFE_INTEGER;
	var maxProfit = 0;   //a profit less than zero is not a profit.
	for (var i = 0; i < prices.length; i++) {
		minTillDate = Math.min(minTillDate, prices[i]);
		maxProfit = Math.max(maxProfit, prices[i] - minTillDate);
	}
	return maxProfit;
};

//LC#0122 Diff:Easy Best Time to Buy and Sell Stock II
/*
Say you have an array prices for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
Input: [7,1,5,3,6,4]       Output: 7
			Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
			Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Input: [1,2,3,4,5]        Output: 4
			Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
			Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
			engaging multiple transactions at the same time. You must sell before buying again.
Input: [7,6,4,3,1]  Output: 0
      Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
//basically add all the diffs of numbers when they are on an increasing trend.
//speed:64%
var maxProfit = function (prices) {
	let runningSum = 0;

	for(i=0;i<prices.length-1;i++){
		if(prices[i+1] > prices[i]) runningSum += (prices[i+1]-prices[i]);
	}

	return runningSum;
};
//speed:65%   the graph is a bunch of Valley-Peak pairs, identify them and add the diffs..
var maxProfit = function (prices) {
	let runningSum = 0;
	let i = 0;
	let peak = prices[0]; let valley = prices[0];

	while(i < prices.length-1){
		//valley has to be done before peak, or else it won't work.
		while (prices[i + 1] <= prices[i]) i++;     //if it is not <= then i++ will never happen for a [3,3,3]
		valley = prices[i];
		while(prices[i+1] > prices[i]) i++;
		peak = prices[i];
		runningSum += peak - valley;
	}
	return runningSum;
}


//LC#00125 Diff:Easy Valid Palindrome
/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
Note: For the purpose of this problem, we define empty string as valid palindrome.
Input: "A man, a plan, a canal: Panama"       Output: true
Input: "race a car"                           Output: false
*/
//speed: 90%   memory:100% :)
var isPalindrome = function (s) {
	s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();   //you can do s.replace(/\W/g,'');

	for(i=0;i<s.length/2;i++) {
		if(s[i] !== s[s.length-1-i]) return false;
	}
	return true;
};


//LC#00136 Diff:Easy Single Number
/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
Input: [2,2,1]       Output: 1
Input: [4,1,2,1,2]   Output: 4
*/
//speed:70%
var singleNumber = function (nums) {
	let hm = {};
	for(x of nums) {
		hm[x] = hm[x] + 1 || 1;
	}
	for (k of Object.keys(hm)) {
		if (hm[k] !== 2) return k;
	}
	return false;
};
//speed:60%  zero extra space
var singleNumber = function (nums) {
	//a XOR a = 0, a XOR 0 = a
	// a ^ b ^ c ^ a ^ b = c
	let a = 0;
	for (i = 0; i < nums.length; i++) {
		a = a | nums[i];   //or use ^
	}
	return a;
}

//LC#0141 Diff:Easy
/*
Given a linked list, determine if it has a cycle in it.
The LL is zero indexed. To represent a cycle in the given linked list, we use an integer pos which represents the position in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
Can you solve it using O(1) (i.e. constant) memory?
Input: head = [3,2,0,-4], pos = 1      Output: true    Explanation: There is a cycle in the linked list, where tail connects to the second node.
Input: head = [1,2], pos = 0           Output: true    Explanation: There is a cycle in the linked list, where tail connects to the first node.
Input: head = [1], pos = -1            Output: false
Definition for singly-linked list.
function ListNode(val) {
	this.val = val;
	this.next = null;
}
*/
// technically, there is a cycle if none of the node have next as 'null', meaning there is no end to the list. But how will you iterate such a list?! Can't use this fact.
//speed=15%    O(1) memory
var hasCycle = function (head) {
	let p1 = head;
	let p2 = head;
	while(p2 !== null && p2.next!==null) {    //let p2 be in the while check because p2 moves faster, the moment it hits a null, you want to stop.
		p1 = p1.next;
		p2 = p2.next.next;
		if(p1 === p2) return true;
	}
	return false;
};
//speed:20% But this corrupts the linked list by adding a value to each node
var hasCycle = function (head) {
	if(!head) return false;

	let n = head;
	while(n!==null) {
		if(n.checked) return true;
		else n.checked = true;
		n = n.next
	}
	//means n is now null (end of the list)
	return false;
}

//LC#0155 Diff:Easy Min Stack
/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack. (not popping it, just reading it)

Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
obj.push(x)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
*/
//speed:30%
var MinStack = function () {
	this.arr = [];
	this.push = function() {
		this.arr.push(x);
		this.min = Math.min(this.min, x);
	}
};
MinStack.prototype.min = Infinity;
MinStack.prototype.pop = function () {
	this.arr.pop();
	this.min = Math.min(...this.arr);  //this is O(n), too slow
};
MinStack.prototype.top = function () {
	return this.arr.length === 0 ? null : this.arr[this.arr.length - 1];
};
MinStack.prototype.getMin = function () {
	return this.min;
};
//speed: 70%
// Every time you push a value on to the stack, store the min uptill that point in that element.
var MinStack = function () {
	this.arr = [];
};
MinStack.prototype.push = function (x) {
	this.arr.push({
		value: x,
		minTillHere: Math.min(x, this.getMin())
	});
};
MinStack.prototype.pop = function () {
	this.arr.pop();
};
MinStack.prototype.top = function () {
	return this.arr.length === 0 ? null : this.arr[this.arr.length - 1].value;
};
MinStack.prototype.getMin = function () {
	if(this.arr.length === 0) return Infinity; // this is when the first element is added to the stack.
	return this.arr[this.arr.length-1].minTillHere;
};
// Another solution = keep two arrays: one for the actual values, the other one is a stack of the lowest values till now
//speed: 70%
var MinStack = function () {  this.minStack = [];this.container = [];  };
MinStack.prototype.push = function (x) {
	this.container.push(x);
	if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
		this.minStack.push(x);
	}
};
MinStack.prototype.pop = function () {
	var x = this.container.pop();
	if (x === this.minStack[this.minStack.length - 1]) {
		this.minStack.pop();
	}
};
MinStack.prototype.top = function () {   return this.container[this.container.length - 1];  };
MinStack.prototype.getMin = function () {  return this.minStack[this.minStack.length - 1];  }

//LC#0160 Diff:Easy  Intersection of Two Linked Lists
/*
Write a program to find the node at which the intersection of two singly linked lists begins.
So the beggining of the two linked lists are different, but at some node, they both meet and from that node onwards the list is the same. (common list of nodes)
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3      Output: Reference to the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null

Notes:
If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
Definition for singly-linked list.
function ListNode(val) {
	this.val = val;
	this.next = null;
}
*/
// sol1: as p1 and p2 go through the list, they set p1.checked=true, the moment one of them already hits a checked node, return that node (or the momemt p1===p2). But you can't do this as you are corrupting the nodes with the checked property.
// sol2: the longer list has more nodes, so skip all those 'extra' nodes. Then start looping through the longer list and shorter list simultaneously.
//speed:65%
var getIntersectionNode = function (headA, headB) {

	function getCountOfNodes(head) {
		let n = head;
		let count = 0;
		while(n!==null) {
			++count;
			n = n.next;
		}
		return count;
	}
	let p1Count = getCountOfNodes(headA);
	let p2Count = getCountOfNodes(headB);
	let diff = Math.abs(p1Count-p2Count);

	let s1, s2;   //s1 is for the larger list
	if(p1Count > p2Count) {
		s1 = headA;
		s2 = headB;
	} else {
		s1 = headB;
		s2 = headA;
	}

	while(diff>0) {  //bring s1 uptill where s2 is at.
		--diff;
		s1 = s1.next;
	}

	while(s1!==null && s2!==null) {
		if(s1===s2) return s1;
		s1 = s1.next;
		s2 = s2.next;
	}

	return null;
};
//speed: 50%  crazy leetcode solution. Traverse to the end of both lists, when you reach the end of one, switch to the start of the other list. Both your pointers will now magically meet at the intersection point.
var getIntersectionNode = function (headA, headB) {
	if (!headA || !headB) return null;
	var curA = headA;
	var curB = headB;
	while (curA != curB) {
		if(!curA && !curB) return null;  //this is when the both the lists dont' intersect at all, curA goes through list A and list B. (curB too)
		curA = curA == null ? headB : curA.next;
		curB = curB == null ? headA : curB.next;
	}
	return curA;
};
//speed: 60% uses a hash set
const getIntersectionNode = (headA, headB) => {
	const seen = new Set();
	while (headA) {
		seen.add(headA);
		headA = headA.next;
	}
	while (headB) {
		if (seen.has(headB)) {
			return headB;
		}
		headB = headB.next;
	}
	return null;
};

//LC#0167 Diff:Easy Two Sum II - Input array is sorted
/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
Note: You output is an array of the two indices.
Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Input: numbers = [2,7,11,15], target = 9    Output: [1,2]     Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/
//speed:90%   leetcode solution
const twoSum = (numbers, target) => {
	let p1 = 0
	let p2 = numbers.length - 1
	while (numbers[p1] + numbers[p2] !== target) {
		if (numbers[p1] + numbers[p2] > target) p2--;
		else p1++;
	}
	return [p1 + 1, p2 + 1]
}

//LC#0168 Diff:Easy Excel Sheet Column Title
/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet. For example:
1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB
...
Input: 1       Output: "A"
Input: 28      Output: "AB"
Input: 701     Output: "ZY"

So given digits: "BGTYDHS"  H goes up one digit when S goes from A->Z.   D goes up one digit when H goes from A->Z
After AZ it goes to BA,BB,BC ... and then CA,CB,CC
26^0 = 0->26
26^1 = 27->675
26^2 = 676->17575
26^3 = 17576->xyz
*/
//speed:   leetcode solution -
var convertToTitle = function(n) {
    if (n == 0) return null;
    let result = '';
    while (n > 0) {
        let r = n % 26;
        let d = parseInt(n / 26);
        if (r == 0) {
            r = 26;
            d = d - 1;
        }
        result += String.fromCharCode (64 + r);
        n = d;
    }
    return result.split('').reverse().join("");
};

//LC#0169 Diff:Easy Majority Element
/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.
Input: [3,2,3]    Output: 3
Input: [2,2,1,1,1,2,2]   Output: 2
*/
//speed:23%   memory:10%
var majorityElement = function(nums) {
	let hm = {}
	for(i=0;i<nums.length;i++){
		hm[nums[i]] = hm[nums[i]] ? ++hm[nums[i]] : 1;
		if(hm[nums[i]] > nums.length/2) return v;      //check it here itself instead of going through the whole array
	}
};
//leetcode solution
var majorityElement = function(nums) {
    nums.sort();
    const i = Math.floor(nums.length/2);
    return nums[i];
};
//speed:98%   leetcode solution: Boyer-Moore Voting Algorithm (will give you the candidate if he has more than 50% votes)
var majorityElement = function(nums) {
	let count = 0, candidate = 0
	for (let num of nums) {
		if (count == 0) candidate = num;  //your count will come back to zero ONLY IF the candidate is not the majority...

		if(candidate===num) ++count;
		else --count;
	}
  return candidate
};

//LC#0000 Diff:Easy Excel Sheet Column Number
/*
Given a column title as appear in an Excel sheet, return its corresponding column number. For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
    ...
"ABGHDF" = F*26^0 + D*26^1 + H*26^2 + G*26^4 + B*26^5 + A*26^6
*/
//speed:20%
var titleToNumber = function(s) {
	let sum = 0;
	let j = 0;
	let n;
	for(i=s.length-1;i>=0;i--){
		n = s[i].charCodeAt(0) - 64;
		sum = sum + (Math.pow(26,j)*n);
		j++;
	}
	return sum;
};
//speed=90% similar solution from leetcode
var titleToNumber = function(s) {
	let sum = 0;
	let powerOf26 = 1;
	for(i=s.length-1;i>=0;i--,powerOf26*=26){
		sum += powerOf26*(s[i].charCodeAt(0)-64);
	}
	return sum;
};

//LC#0172 Diff:Easy Factorial Trailing Zeroes
/*
Given an integer n, return the number of trailing zeroes in n!. Your solution should be in logarithmic time complexity.
Input: 3    Output: 0   Explanation: 3! = 6, no trailing zero.
Input: 5    Output: 1   Explanation: 5! = 120, one trailing zero.
*/
//speed: max call stack exceeded
var trailingZeroes = function(n) {

	function factorial(n) {
		if(n===1) return 1;

		return n * factorial(n-1);     //call stack exceeds
	}
	let d = factorial(n);
	d=d.toString();
	let count=0;
	for(i=d.length-1;i>=0;i--) {   //this wont work!! 30! is stored as 2.65e^45   the string will be "2.65e^45"
		if(d[i] === "0") ++count;
		else break;
	}
	return count;
};
var trailingZeroes = function(n) {
	let d = 1;
	for(i=n;i>1;i--) {
		d = d*i;
	}
	let count=0;
	while(d%10===0) {            //this wont work too!! 30! is stored as 2.65e^45
		++count;
		d=d/10;
	}
	return count;
};
//speed:75% leetcode - just count number of 5s. weird problem/hack
var trailingZeroes = function (n) {
	let numZeroes = 0;
	for (let i = 5; i <= n; i *= 5) {
		numZeroes += Math.floor(n / i);
	}
	return numZeroes;
};
//leetcode solution
/*
You need to track the number of times 5*2 happens. There are tonnes of 2s. So just count the numbers of 5s
How many 5s are there in the factorial of 25?, there are actually 6. (5,10,15,20,25) = (5 * 1), (5 * 2), (5 * 3), (5 * 4), (5 * 5) = 6 fives.
We can simplify the answer to:
(n / 5) + (n / 5^2) + (n / 5^3)... (n / 5^x)
We continue until 5^x is greater than n.
*/
var trailingZeroes = function(n) {
    let numZeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        numZeroes += Math.floor(n / i);
    }
    return numZeroes;
};

//LC#0175 Diff:Easy SQL Combine Two Tables
/*
Table: Person   (PersonId is the primary key column for this table.)
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
Table: Address  (AddressId is the primary key column for this table.)
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people: FirstName, LastName, City, State
*/
//speed:58%
select Person.FirstName, Person.LastName, Address.City, Address.State
from Person left join Address on Person.PersonId = Address.PersonId

//LC#0176 Diff:Easy SQL Second Highest Salary
/*
Write a SQL query to get the second highest salary from the Employee table.
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the query should return 200 as the second highest salary. If there is no second highest salary, then the query should return null.
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
*/
//speed:
select MAX(Employee.Salary) as "SecondHighestSalary"
from Employee
where Salary < (select MAX(Employee.Salary) from Employee)

Leetcode solution-
select (
  select distinct Salary from Employee order by Salary Desc limit 1 offset 1
)as second

//LC#0181 Diff:Easy SQL Employees Earning More Than Their Managers
/*
The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.
+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+
Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.
+----------+
| Employee |
+----------+
| Joe      |
+----------+
*/
//speed:
select Managee.Name as "Employee"
from
Employee as Managee
join
Employee as Manager
on Managee.ManagerId = Manager.Id
where Managee.Salary > Manager.Salary

Leetcode solution - same logic but different syntax
select E1.Name
from Employee as E1, Employee as E2
where E1.ManagerId = E2.Id and E1.Salary > E2.Salary

//LC#0182 Diff:Easy SQL Duplicate Emails
/*
Write a SQL query to find all duplicate emails in a table named Person.
+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
For example, your query should return the following for the above table:
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Note: All emails are in lowercase.
*/
//speed:90%
select Email
from Person
group by Email
having COUNT(*) > 1

leetcode solution-
SELECT DISTINCT a.Email
FROM Person a JOIN Person b
ON (a.Email = b.Email)
WHERE a.Id <> b.Id

//LC#0183 Diff:Easy SQL Customers Who Never Order
/*
Suppose that a website contains two tables, the Customers table and the Orders table. Write a SQL query to find all customers who never order anything.
Table: Customers.
+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Table: Orders.
+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
Using the above tables as example, return the following:
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
*/
//speed:
select Customers.Name as "Customers"
from Customers
where Customers.Id NOT IN(select CustomerID from Orders)

leetcode solution -
SELECT A.Name from Customers A as "Customers"
LEFT JOIN Orders B on  a.Id = B.CustomerId
WHERE b.CustomerId is NULL

//LC#0189 Diff:Easy Rotate Array
/*
Given an array, rotate the array to the right by k steps, where k is non-negative. You need to modify the array in place. Do not return anything.
Follow up:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
Constraints:
1 <= nums.length <= 2 * 10^4
It's guaranteed that nums[i] fits in a 32 bit-signed integer.
k >= 0
*/
Input: nums = [1,2,3,4,5,6,7], k = 3      Output: [5,6,7,1,2,3,4]
Input: nums = [-1,-100,3,99], k = 2      Output: [3,99,-1,-100]

//speed:60%  memory:5%
var rotate = function(nums, k) {
	let len = nums.length;
	k = k % len;
	let copy=nums.slice(0);
	for(i=0;i<len;i++){
		nums[i] = copy[(len-k+i)%len];
	}
};
//leetcode solution
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};
const rotate = (nums, k) => {
	k %= nums.length;
	const stack = [];
	while(k--) {
			stack.push(nums.pop());
	}
	nums.unshift(...stack.reverse());
};
//leetcode heavy algorithm
var rotate = (nums, k) => {
    let [start, count] = [0, 0];
    while (count < nums.length) {
        let [current, prev] = [start, nums[start]];
        do {
            current = (current + k) % nums.length;
            [nums[current], prev] = [prev, nums[current]];
            count++;
        } while (current !== start)
        start++
    }
};
//another solution: reverse the numbers exactly thrice,
/*
Let n = 7n=7 and k = 3k=3.
Original List                   : 1 2 3 4 5 6 7
After reversing all numbers     : 7 6 5 4 3 2 1
After reversing first k numbers : 5 6 7 4 3 2 1
After revering last n-k numbers : 5 6 7 1 2 3 4 --> Result
*/

//LC#0190 Diff:Easy Reverse Bits
/*
Reverse bits of a given 32 bits unsigned integer.
Input: 00000010100101000001111010011100  Output: 00111001011110000010100101000000
	Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
Input: 11111111111111111111111111111101   Output: 10111111111111111111111111111111
	Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
Input is of type Number, your output must also be of type Number.
If this function is called many times, how would you optimize it?
you can't just convert to string, reverse it and conver back to string using Number()/ParseInt(). You have to find a way to reverse the digits on a number type
*/
//speed:97%   leetcode solution
var reverseBits = function(n) {
  var result = 0;
  var count = 32;
  while (count--) {
    result = result * 2;
    result = result + (n & 1);    //so 1001111 & 1 is 1 (it does last digit & 1)
    n = n >> 1;
  }
  return result;
};
function reverseBits(n) {
  return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
}

//LC#0191 Diff:Easy Number of 1 Bits
/*
Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).
Input: 00000000000000000000000000001011     Output: 3
Input: 00000000000000000000000010000000     Output: 1
Input: 11111111111111111111111111111101     Output: 31
*/
//speed:
var hammingWeight = function(n) {
	var count = 0;
	for(i=1;i<=32;i++){
		if(n & 1 === 1) ++count;    //or count += n & 1
		n = n >> 1;   //remove the last digit, so right shift by 1...
	}
	return count;
};
// leetcode solution
var hammingWeight = function(n) {
	var count = 0;
	var mask = 1;
	for(i=1;i<=32;i++){
		if(n & mask !== 0) ++count;
		mask = mask << 1;    // mask goes from 0001 to 0010 to 0100 to 1000
	}
	return count;
};
// leetcode solution
var hammingWeight = function(n) {
    // remove 0s from base2 representation of the number
    return n.toString(2).replace(/0/g, '').length;
};


//LC#0193 Diff:Easy BASH Valid Phone Numbers
/*
Given a text file file.txt that contains list of phone numbers (one per line), write a one liner bash script to print all valid phone numbers.
You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)
You may also assume each line in the text file must not contain leading or trailing white spaces.
*/
//speed: 100%
grep "^\(([0-9]\{3\}) \|[0-9]\{3\}-\)[0-9]\{3\}-[0-9]\{4\}$" file.txt
function jsValidatePhoneNumbers(numsArray) {
	return numsArray.filter(p => {
		return /^(\(\d\d\d\) |\d\d\d-)\d\d\d-\d\d\d\d$/g.test(p);
	});
}

//LC#0195 Diff:Easy BASH Tenth Line
/*
Given a text file file.txt, print just the 10th line of the file.
*/
three one liner solutions -
head -n 10 file.txt | tail -n +10
awk 'NR==10' file.txt
sed -n 10p file.txt
//speed: 100%

//LC#0196 Diff:Easy SQL Delete Duplicate Emails
/*
Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.
+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.
For example, after running your query, the above Person table should have the following rows:
+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
*/
//speed: 30%
//though this is right, it will give an error..
delete from Person where Id not in
	(select MIN(Id) from Person group by Email)
// to fix the above, use a  middle table
delete from Person where id not in(
    select t.id from (
        select min(id) as id from Person group by email
    ) t
)

//leetcode solution, in this multiple-table syntax, only matching rows from the tables listed before the FROM clause are deleted, in this case just p1.Id | p1.Email
DELETE p1
FROM Person p1, Person p2
WHERE p1.Email = p2.Email AND
p1.Id > p2.Id


//LC#0197 Diff:Easy SQL Rising Temperature
/*
Given a Weather table, write a SQL query to find all dates's Ids with higher temperature compared to its previous (yesterday's) dates.
+---------+------------------+------------------+
| Id(INT) | RecordDate(DATE) | Temperature(INT) |
+---------+------------------+------------------+
|       1 |       2015-01-01 |               10 |
|       2 |       2015-01-02 |               25 |
|       3 |       2015-01-03 |               20 |
|       4 |       2015-01-04 |               30 |
+---------+------------------+------------------+
For example, return the following Ids for the above Weather table:
+----+
| Id |
+----+
|  2 |
|  4 |
+----+
*/
//leetcode solution -
SELECT wt1.Id
FROM Weather wt1, Weather wt2
WHERE wt1.Temperature > wt2.Temperature AND TO_DAYS(wt1.RecordDate) - TO_DAYS(wt2.RecordDate)=1;    //TO_DAYS(wt1.DATE) return the number of days between from year 0 to date DATE
//another solution
SELECT weather.id AS 'Id'
FROM weather JOIN weather w
ON DATEDIFF(weather.RecordDate, w.RecordDate) = 1  AND weather.Temperature > w.Temperature;

//LC#0198 Diff:Easy House Robber
/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
Input: [1,2,3,1]   Output: 4
	Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.
Input: [2,7,9,3,1]  Output: 12
	Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.
*/
//speed:100%
//fundamental idea: i am at the end of the street, Either i robbed this house or robbed the previous house
// rob(i) = Math.Max(valueOf(i) + rob(i-2), rob(i-1))
// leetcode solution - bottom-up solution
var rob = function(nums) {
	if (!nums.length) return 0;
	if (nums.length === 1) return nums[0];
	if (nums.length === 2) return Math.max(nums[0], nums[1]);

	let maxAtTwoBefore = nums[0];
	let maxAtOneBefore = Math.max(nums[0], nums[1]);

	for (let i = 2; i < nums.length; i++) {
			const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

			maxAtTwoBefore = maxAtOneBefore;
			maxAtOneBefore = maxAtCurrent;
	}

	return maxAtOneBefore;  //which is the last maxAtCurrent (the last house)
};

//LC#0202 Diff:Easy Happy Number
/*
Write an algorithm to determine if a number n is "happy". Return True if n is a happy number, and False if not.
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
Input: 19   Output: true
	Explanation:
	1^2 + 9^2 = 82
	8^2 + 2^2 = 68
	6^2 + 8^2 = 100
	1^2 + 0^2 + 0^2 = 1  So it is a happy number
*/
//trick: if you see a sum of squares again, that means this number is not happy. (it will never reach 1)
//speed:
var isHappy = function(n) {
	let seen = {};
	while(n!==1 && !seen[n]) {
		seen[n] = true;
		n = getSumOfSquaresOfDigits(n);
	}
	return n!==1 ? false: true;


	function getSumOfSquaresOfDigits(n) {
		let digitsArray =  n.toString().split('').map(x => Number(x));
		return digitsArray.reduce(function(acc,x){ return acc + x*x},0);
	}
};

//LC#0203 Diff:Easy Remove Linked List Elements
/*
Remove all elements from a linked list of integers that have value val. Return the head.
Input:  1->2->6->3->4->5->6, val = 6              Output: 1->2->3->4->5
Definition for singly-linked list.
function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
}
*/
//speed:26%
var removeElements = function(head, val) {
	if(!head) return head;

	let t = {val:'XYZ', next:head}; //add one dummy node to the beginning

	let prev = t;
	let curr = t.next;
	while(curr !== null) {
		if(curr.val === val) {
			prev.next = curr.next;
			//let prev remain at prev, don't change it
		} else {
			prev = curr;
		}
		curr = curr.next;
	}
	return t.next;
};
//leetcode solution  (unbeleivable recursion!!)
const removeElements = (h, val) => {
	if (!h) return null
	h.next = removeElements(h.next, val)
	return h.val === val ? h.next : h
}
//leetcode solution
var removeElements = function(head, val) {
if (!head) return head;

while(head!==null) {  //skip through all the first nodes that equal val (if they exist)
	if(head.val === val) head = head.next;
	else break;
}
// now head is at the first node that does not equal val
let curr = head;
while(curr && curr.next) {
	if (curr.next.val === val) curr.next = curr.next.next;
	else curr = curr.next;
}
return head;
};

//LC#0204 Diff:Easy Count Primes
/*
Count the number of prime numbers less than a non-negative number, n.
Input: 10   Output: 4    Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
This is a sieve of eratosthenes
*/
//speed:82% leetcode solution
var countPrimes = function(n) {
	let hash = new Array(n).fill(true); //assume all n numbers are prime.
	hash[0] = false;
	hash[1] = false;
	for (let i=2;i*i<n;i++) {
		if (hash[i]) {
			for(let j=i*i;j<n;j+=i){ // p*(p+1)...
				hash[j] = false;
			}
		}
	}
	return hash.filter(x=>x).length;
};

//LC#0205 Diff:Easy Isomorphic Strings
/*
Given two strings s and t, determine if they are isomorphic. Return true or false.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
You may assume both s and t have the same length.
Input: s = "egg", t = "add"        Output: true
Input: s = "foo", t = "bar"        Output: false
Input: s = "paper", t = "title"    Output: true
*/
//keep a map for both strings, say e has to be a, and a has to be e. Now loop through both strings and check/update their maps
//speed:35%
var isIsomorphic = function(s, t) {
	let hms = {};
	let hmt = {};
	let sc, tc;
	for(i=0;i<s.length;i++){
		sc = s[i]; tc = t[i];

		if(!hmt[tc]) hmt[tc] = sc;
		else if(hmt[tc] !== sc) return false;

		if(!hms[sc]) hms[sc] = tc;
		else if (hms[sc] !== tc) return false;

	}
	return true;
};
//leetcode solution similar
var isIsomorphic = function(s, t) {
	var obj = {};
	for(var i = 0; i < s.length; i++){
		if(!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
		if(!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
		if(t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false;
	}
	return true;
};

//LC#0206 Diff:Easy Reverse Linked List
/*
Reverse a singly linked list. Return the head.
Input: 1->2->3->4->5->NULL    Output: 5->4->3->2->1->NULL
A linked list can be reversed either iteratively or recursively. Could you implement both?
Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
*/
//speed:
var reverseList = function(head) {
	if(!head || head.next===null) return head;

	let prev = head;
	let curr = head.next;
	let actualNext;
	while(curr!==null) {
		actualNext = curr.next;
		curr.next = prev;
		prev = curr;
		curr = actualNext;
	}
	//at this point curr is null;
	return prev;  //this is the new head
};
//speed:30%
var reverseList = function(head) {
	let newHead;
	reverse(head,null);
	return newHead;

	function reverse(n, newNextForN) {
		if(!n) {
			newHead = newNextForN;
			return;
		}
		let actualNextOfN = n.next;
		reverse(actualNextOfN, n);
		n.next = newNextForN;
	}
}
//leetcode solution
const reverseList = head => _reverse(head, null);
const _reverse = (node, next) => {
  if (!node) return next;
  let temp = node.next;
  node.next = next;
  return _reverse(temp, node);
}
//leetcode solution
var reverseList = function(head) {
	const reverseLL = (head) => {
		if(head === null || head.next === null) return head;
		const reversed = reverseLL(head.next);
		head.next.next = head;
		head.next = null;
		return reversed;
	}
	return reverseLL(head)
};

//LC#0217 Diff:Easy Contains Duplicate
/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
Input: [1,2,3,1]    Output: true
Input: [1,2,3,4]    Output: false
Input: [1,1,1,3,3,4,3,2,4,2]    Output: true
*/
//speed:45%   memory:5%
var containsDuplicate = function(nums) {
	let hm = {};
	for(n of nums){
		if(hm[n]) return true;
		else hm[n] = true;
	}
	return false
};
//speed:50% leetcode solution
var containsDuplicate = function(nums) {
  return new Set(nums).size !== nums.length;
}

//LC#0219 Diff:Easy Contains Duplicate II
/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
Input: nums = [1,2,3,1], k = 3       Output: true
Input: nums = [1,0,1,1], k = 1       Output: true
Input: nums = [1,2,3,1,2,3], k = 2   Output: false
i.e check if you have atleast one pair of duplicate values not more than k apart
If there are no duplicates, return false... if there are duplicates more than k apart, return false
*/
//just store the number and it's current location
//speed:35%  memory:10%
var containsNearbyDuplicate = function(nums, k) {
	let hm = {};
	for(i=0;i<nums.length;i++){
		let n = nums[i];
		if(!hm[n]) {
			hm[n] = [n,i];
		} else {
			//duplicate value found
			if(i - hm[n][1] <= k) return true;
			hm[n][1] = i;
		}
	}
	return false;
};
//leetcode solution using map
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) return true;
    map.set(nums[i], i);
  }
  return false;
};

//LC#0225 Diff:Easy Implement Stack using Queues
/*
Implement the following operations of a stack using queues.
push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.

MyStack stack = new MyStack();
stack.push(1);
stack.push(2);
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid. Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue. You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
*/
//speed:20% memory:100%
class Queue{
	constructor(){this.q=[];}
	push(x){this.q.push(x);}   //add to last
	pop(){return this.q.shift();}  //get from first
	peek(){return this.q[0];}  //read the first
	size(){return this.q.length;}
}
var MyStack = function() {
	this.q1 = new Queue();
	this.q2 = new Queue();
	this.topElement = null;
	this.mainQ = this.q1;
};
MyStack.prototype.push = function(x) {
	this.mainQ.push(x);
	this.topElement = x;
};
MyStack.prototype.pop = function() {
	let otherQ = this.mainQ === this.q1 ? this.q2 : this.q1;

	while(this.mainQ.size() > 1) {
		this.topElement = this.mainQ.pop();
		otherQ.push(this.topElement);
	}
	//only one element is left in the mainQ now
	let retValue = this.mainQ.pop();
	this.mainQ = otherQ;
	return retValue;
};
MyStack.prototype.top = function() { return this.topElement; };
MyStack.prototype.empty = function() { return this.mainQ.size() === 0; };
//leetcode solution
var MyStack = function() {
	this.queue = [];
	this.tmp = [];
};
MyStack.prototype.push = function(x) {  this.queue.push(x) };
MyStack.prototype.pop = function() {
	while(this.queue.length > 1) {
		this.tmp.push(this.queue.shift());
	}
	const retValue = this.queue.shift();
	this.queue = this.tmp;;
	this.tmp = [];
	return retValue;;
};
MyStack.prototype.top = function() {
    const v = this.pop();
    this.queue.push(v);
    return v;
};
MyStack.prototype.empty = function() {
    return this.queue.length === 0
};

//LC#0226 Diff:Easy Invert Binary Tree
/*
Invert a binary tree.
Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Return the root node
Definition for a binary tree node.
function TreeNode(val, left, right) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
}
*/
//speed:17%
var invertTree = function (root) {

	function invertLeftRight(n) {
		if(n===null) return;

		[n.left, n.right] = [n.right, n.left];
		invertLeftRight(n.left);
		invertLeftRight(n.right);
	}
	invertLeftRight(root);
	return root;
};
// v2.0 speed:20%
var invertTree = function (root) {
	if(!root) return null;
	[root.left, root.right] = [root.right, root.left];
	if(root.left!==null) invertTree(root.left);
	if(root.right!==null) invertTree(root.right);
	return root;
}
//leetcode solution
function invertTree(root) {
	if (root == null) return root;
	[root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
	return root;
}
// DFS leetcode solution
function invertTree(root) {
	const stack = [root];
	while (stack.length) {
		const n = stack.pop();  // this is POP !!  (stack)
		if (n != null) {
			[n.left, n.right] = [n.right, n.left];
			stack.push(n.left, n.right);
		}
	}
	return root;
}
// BFS leetcode solution
function invertTree(root) {
	const queue = [root];
	while (queue.length) {
		const n = queue.shift();  // this is SHIFT !!   (queue)
		if (n != null) {
			[n.left, n.right] = [n.right, n.left];
			queue.push(n.left, n.right);
		}
	}
	return root;
}

//LC#0231 Diff:Easy Power of Two
/*
Given an integer, write a function to determine if it is a power of two.
Input: 1   Output: true   Explanation: 2^0 = 1
Input: 16  Output: true   Explanation: 2^4 = 16
Input: 218  Output: false
*/
//speed:15%
var isPowerOfTwo = function (n) {
	if(n===1) return true;
	let powerOf2 = 2;
	while(powerOf2 <= n) {
		if(powerOf2 === n) return true;
		powerOf2 *= 2;
	}
	return false;
};
//leetcode solution: trick - if n is a power of 2, n & n-1 will be 0
/*32 & 31
-- 100000
--- 11111
--- 00000 == 0
*/
var isPowerOfTwo = function (n) {
	return n > 0 ? !(n & (n - 1)) : false;
};
//leetcode solution
var isPowerOfTwo = function (n) {
	return (Math.log2(n) % 1 === 0);
};

//LC#0232 Diff:Easy Implement Queue using Stacks
/*
Implement the following operations of a queue using stacks.
push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.

Example:
MyQueue queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
*/
//speed:20% memory:100%
var MyQueue = function () {
	this.s1 = [];
	this.s2 = [];
};
MyQueue.prototype.push = function (x) {
	this.s1.push(x);
};
MyQueue.prototype.pop = function () {
	while(this.s1.length !== 0){
		this.s2.push(this.s1.pop());
	}
	retValue = this.s2.pop();
	while(this.s2.length !== 0){
		this.s1.push(this.s2.pop());
	}
	return retValue;
};
MyQueue.prototype.peek = function () {
	return this.s1[0];
};
MyQueue.prototype.empty = function () {
	return this.s1.length === 0;
};

//LC#0234 Diff:Easy Palindrome Linked List
/*
Given a singly linked list, determine if it is a palindrome.
Input: 1->2         Output: false
Input: 1->2->2->1   Output: true
Could you do it in O(n) time and O(1) space?
Definition for singly-linked list.
function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
}
*/
//speed:95%   this is O(n) time and O(n) space, but how to do O(1) space..?!
var isPalindrome = function (head) {
	let arr = [];
	while(head) {
		arr.push(head.val);
		head = head.next;
	}

	function checkPalindrome(arr) {
		for (i = 0; i < arr.length / 2; i++) {
			if (arr[i] !== arr[arr.length - 1 - i]) return false;
		}
		return true;
	}

	return checkPalindrome(arr);
};
//leetcode solution: recursive brilliant O(n) time and O(1) time
var isPalindrome = function (head) {
	var outer = head
	return travel(head)

	function travel(node) {
		if (!node) return true;

		var boolTillNow = travel(node.next)
		var curBoolean = outer.val === node.val
		outer = outer.next
		return boolTillNow && curBoolean
	}
};
//leetcode solution: reverse the links of only the second half of the LL and let a pointer start from the other end.
var isPalindrome = function (head) {
	if (head == null || head.next == null) return true;
	var slow = head;
	var fast = head;
	while (fast.next != null && fast.next.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	slow.next = reverseList(slow.next);
	slow = slow.next;
	while (slow != null) {
		if (head.val !== slow.val) return false;
		head = head.next;
		slow = slow.next;
	}
	return true;
};

var reverseList = function (head) {
	var prev = null;
	var actualNext = null;
	while (head != null) {
		actualNext = head.next;
		head.next = prev;
		prev = head;
		head = actualNext;
	}
	return prev;
};

//LC#0235 Diff:Easy Lowest Common Ancestor of a Binary Search Tree
/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
All of the nodes' values will be unique.
p and q are different and both values will exist in the BST.
You are given three nodes, return the LCA node.
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8   Output: 6   Explanation: The LCA of nodes 2 and 8 is 6.
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4   Output: 2   Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
Definition for a binary tree node.
function TreeNode(val) {
 this.val = val;
 this.left = this.right = null;
}
*/
//speed:90% leetcode solution
var lowestCommonAncestor = function (root, p, q) {
	if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q);
	} else if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q);
	} else {
		return root;
	}
};

//LC#0237 Diff:Easy Delete Node in a Linked List
/*
Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
Input: head = [4,5,1,9], node = 5    Output: [4,1,9]
	Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
Input: head = [4,5,1,9], node = 1    Output: [4,5,9]
	Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail and it will always be a valid node of the linked list.
Do not return anything from your function.
 Definition for singly-linked list.
 function ListNode(val) {
  this.val = val;
  this.next = null;
 }
*/
//speed:15%
//you just have to shift all the values to the left
var deleteNode = function (node) {
	let cur = node;
	let next = node;
	while(cur.next.next) {
		next = cur.next;
		cur.val = next.val;
		cur = next;
	}
	cur.val = cur.next.val;
	cur.next = null;
};
//speed: leetcode solution: even shorter
var deleteNode = function (node) {
	node.val = node.next.val;
	node.next = node.next.next;
}

//LC#0242 Diff:Easy Valid Anagram
/*
Given two strings s and t , write a function to determine if t is an anagram of s. Return boolean.
Input: s = "anagram", t = "nagaram"         Output: true
Input: s = "rat", t = "car"                 Output: false
You may assume the string contains only lowercase alphabets.
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/
//speed:46%
var isAnagram = function (s, t) {
	if(t.length!==s.length) return false;

	let hm1={}; let hm2={};
	for(i=0;i<t.length;i++){
		hm1[s[i]] = hm1[s[i]] + 1 || 1;
		hm2[t[i]] = hm2[t[i]] + 1 || 1;
	}

	if(Object.keys(hm1).length !== Object.keys(hm2).length) return false;

	for(v of Object.keys(hm1)) {
		if(!hm2[v] || hm2[v] !== hm1[v]) return false;
	}

	return true;
};
//speed:40%
var isAnagram = function (s, t) {
	return s.split('').sort().join('') === t.split('').sort().join('');
}
//leetcode solution, use a single map
function isAnagram(s, t) {
	const map = {};
	s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	return Object.keys(map).every(k => map[k] === 0);
}
//leetcode solution
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	var counter = Array(26).fill(0);
	for (var i = 0; i < s.length; i++) {
		counter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
		counter[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
	}
	for(v of counter) {
		if(v!==0) return false;
	}
	return true;
};

//LC#0257 Diff:Easy Binary Tree Paths
/*
Given a binary tree, return all root-to-leaf paths. Return an array of strings. A leaf is a node with no children.
Input: [1,2,3,null,5,null,null]   Output: ["1->2->5", "1->3"]
	Explanation: All root-to-leaf paths are: 1->2->5, 1->3
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed: 15%
var binaryTreePaths = function (root) {
	let arrOfPaths = [];

	function dfs(n, pathTillN) {
		if(n===null) return;

		pathTillN.push(n.val);
		if(n.left===null && n.right===null) {
			arrOfPaths.push(pathTillN.join('->'));
			return;
		}
		dfs(n.left, pathTillN.slice(0)); //send this left branch a copy! (or else all the left branch nodes will come in to the below right branch nodes..)
		dfs(n.right, pathTillN.slice(0)); //send this right branch a copy!
	}
	dfs(root, []);
	return arrOfPaths;

};
// leetcode solution using string.. (which is better, you don't have to create and send a copy of the array to the child)
var binaryTreePaths = function (root) {
	if (!root) return []

	var paths = []
	function helper(n, path) {
		if (!n) return;

		if (path == "") path = `${n.val}`;
		else path = `${path}->${n.val}`;

		if (!root.left && !root.right) {
			paths.push(path);
			return;
		}
		helper(root.left, path);
		helper(root.right, path);
	}
	helper(root, "");
	return paths;
};

//LC#0258 Diff:Easy Add Digits
/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
Input: 38  Output: 2
	Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
	Since 2 has only one digit, return it.
Could you do it without any loop/recursion in O(1) runtime?
*/
//speed:16%
var addDigits = function (num) {
	if(num<10) return num;

	let sum = 0;
	while(num > 0) {
		sum += num%10;
		num = Math.floor(num/10);
	}

	return addDigits(sum);
};
//leetcode solution: O(1) time. This is just pure math.
var addDigits = function (num) {
	if (num < 10) return num;
	return num % 9 === 0 ? 9 : num % 9;
};

//LC#0263 Diff:Easy Ugly Number
/*
Write a program to check whether a given number is an ugly number. Return boolean.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
Input: 6   Output: true   Explanation: 6 = 2 × 3
Input: 8   Output: true   Explanation: 8 = 2 × 2 × 2
Input: 14  Output: false  Explanation: 14 is not ugly since it includes another prime factor 7.
1 is typically treated as an ugly number.
Input is within the 32-bit signed integer range: [−2^31,  2^31 − 1].
*/
//speed:30% leetcode solution
var isUgly = function (num) {
	if (num <= 0) return false;
	while (num % 2 === 0) { num /= 2; }  // using the fact that
	while (num % 3 === 0) { num /= 3; }  // multiplication is commutative,
	while (num % 5 === 0) { num /= 5; }  // hence the order doesn't matter
	return num === 1;
};

//LC#0268 Diff:Easy Missing Number
/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
Input: [3,0,1]    Output: 2
Input: [9,6,4,2,3,5,7,0,1]   Output: 8
Input: [0,1]  Output: 2
Input: [0]  Output:1
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/
//speed:35%
//sum of first n numbers is n*(n+1)/2
var missingNumber = function (nums) {
	let n = nums.length; //meaning 0 to n has to be there in the array!
	let expectedSum = n*(n+1)/2;

	let sum = 0;
	for(v of nums) {
		sum += v;
	}

	return expectedSum-sum;
};
//leetcode solution
var missingNumber = function (nums) {
	const res = new Array(nums.length + 1).fill(-1);
	for (n of nums) {
		res[n] = n;
	}
	return res.indexOf(-1);
};


//LC#0278 Diff:Easy First Bad Version
/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
Example:
Given n = 5, and version = 4 is the first bad version.
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
var solution = function (isBadVersion) {
	return function (n) {
		//your code here that returns the first bad version between 1 and n
	};
};
PM will just call solution(25);
*/
//speed:11%  memory:100%
var solution = function (isBadVersion) {
	return function (n) {
		let candidates = [];

		function bs(beg,end){
			if(beg>end) return;
			let mid = Math.floor((beg+end)/2);
			if(isBadVersion(mid)) {
				candidates.push(mid);
				bs(beg,mid-1);
			}
			else bs(mid+1,end);
		}
		bs(1,n);

		return Math.min(...candidates);
	};
};
//leetcode solution similar but better.
var solution = function (isBadVersion) {
	return function (n) {
		var start = 1, end = n;
		while (start < end) {
			var mid = Math.floor(start + (end - start) / 2);  //this is NEW >> .. pretty good
			if (isBadVersion(mid)) end = mid;
			else start = mid + 1;
		}
		return start;
	};
};

//LC#0283 Diff:Easy Move Zeroes
/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Input: [0,1,0,3,12]    Output: [1,3,12,0,0]
You must do this in-place without making a copy of the array.
Minimize the total number of operations. Do not return anything.
*/
//speed:25%
var moveZeroes = function (nums) {
 let writingPoint = 0;
 let reader = 0;
 while(writingPoint < nums.length) {
	 while(reader<nums.length && nums[reader]===0) ++reader;

	 if(reader<nums.length) nums[writingPoint] = nums[reader];
	 else nums[writingPoint] = 0;    //at some point reader will be way past nums.length, just ignore it

	 ++writingPoint;
	 ++reader;
 }
};
//leetcode solution, same as mine, but very clean code
var moveZeroes = function (nums) {
	var pos = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) nums[pos++] = nums[i];
	}
	for (i = pos; i < nums.length; i++) {
		nums[i] = 0;
	}
};

//LC#0290 Diff:Easy Word Pattern
/*
Given a pattern and a string str, find if str follows the same pattern. Return boolean.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
Input: pattern = "abba", str = "dog cat cat dog"    Output: true
Input:pattern = "abba", str = "dog cat cat fish"    Output: false
Input: pattern = "aaaa", str = "dog cat cat dog"    Output: false
Input: pattern = "abba", str = "dog dog dog dog"    Output: false     (this is an important case to handle)
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
*/
//speed:30% memory:100%
var wordPattern = function (pattern, str) {
	let p = pattern.split('');
	let s = str.split(' ');
	let hmPtoS = {};
	let hmStoP = {};

	if(p.length!==s.length) return false;

	for(i=0;i<p.length;i++) {
		if(!hmPtoS[p[i]]) hmPtoS[p[i]] = s[i];
		else if(hmPtoS[p[i]] !== s[i]) return false;

		if(!hmStoP[s[i]]) hmStoP[s[i]] = p[i];
		else if (hmStoP[s[i]] !== p[i]) return false;
	}
	return true;
};
//leetcode solution:  map and set
const wordPattern = (pattern, str) => {
	let map = new Map(), set = new Set()
	str = str.split(' ');
	if (str.length !== pattern.length) return false
	for (let i = 0; i < pattern.length; i++) {
		let letter = pattern[i], word = str[i]
		if (map.has(letter)) {
			if (map.get(letter) !== word) return false
		} else {
			if (set.has(word)) return false
			map.set(letter, word)
			set.add(word)
		}
	}
	return true
};

//LC#0292 Diff:Easy Nim Game
/*
You are playing the following Nim Game with your friend: There is a heap of stones on the table, each turn, one of you removes 1 to 3 stones. The one who removes the last stone will be the winner. You will always take the first turn to remove the stones.
Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.
Input: 4     Output: false
	Explanation: If there are 4 stones in the heap, then you will never win the game; No matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.
*/
//speed:100%   leetcode solution
/*theorem-
For 1*4 < n < 2*4 i.e (n = 5, 6, 7), the first player can reduce the initial number into 4 accordingly, which will leave the death number 4 to the second player. i.e. The numbers 5, 6, 7 are winning numbers for any player who got it first.
Now to the beginning of the next cycle, n = 8, no matter which number that the first player picks, it would always leave the winning numbers (5, 6, 7) to the second player. Therefore, 8 % 4 == 0, again is a death number.
Following the second case, for numbers between (2*4 = 8) and (3*4=12), which are 9, 10, 11, are winning numbers for the first player again, because the first player can always reduce the number into the death number 8.
*/
var canWinNim = function (n) {
	return n%4!==0;
};

//LC#0299 Diff:Easy  Bulls and Cows
/*
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but are located in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.
Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows.
Please note that both secret number and friend's guess may contain duplicate digits.
Inputs are strings, return a string.
Input: secret = "1807", guess = "7810"  Output: "1A3B"
	Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
Input: secret = "1123", guess = "0111"  Output: "1A1B"
	Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
Note: You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.
*/
//speed:40%
var getHint = function (secret, guess) {
	//given: secret and guess have same length
	let bulls = 0; let cows = 0;
	let hm = {};

	for(i=0;i<secret.length;i++){
		if(secret[i]===guess[i]) ++bulls;
		hm[secret[i]] = hm[secret[i]] + 1 || 1;
	}

	for(i=0;i<guess.length;i++){
		if(hm[guess[i]]!==undefined && hm[guess[i]]>0) {
			--hm[guess[i]];
			++cows;
		}
	}
	cows = cows - bulls;
	return `${bulls}A${cows}B`;

};
//leetcode solution: one passe
function getHint(secret, guess) {
	var map = {};
	var A = 0;
	var B = 0;
	for (var i = 0; i < 10; i++) map[i] = 0;
	for (i = 0; i < secret.length; i++) {
		if (secret[i] === guess[i]) A++;
		else {
			map[secret[i]]++;
			B += map[secret[i]] <= 0 ? 1 : 0;
			map[guess[i]]--;
			B += map[guess[i]] >= 0 ? 1 : 0;
		}
	}
	return A + 'A' + B + 'B';
}

//LC#0303 Diff:Easy  Range Sum Query - Immutable
/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), both inclusive.
Given nums = [-2, 0, 3, -5, 2, -1]
sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
Your NumArray object will be instantiated and called as such:
var obj = new NumArray(nums)
var param_1 = obj.sumRange(i,j)
*/
//speed:time limit exceeded!
var NumArray = function (nums) {
	this.arr = nums;
	this.cache = new Map();
};
NumArray.prototype.sumRange = function (i, j) {
	if(i<0) i=0;
	if(j>this.arr.length-1) j=this.arr.length-1;
	if(j<i) return 0;

	if(this.cache.has([i,j])) return this.cache.get([i,j]);

	let sum=0;
	for(k=i;k<=j;k++) {
		sum += this.arr[k];
	}
	this.cache.set([i,j], sum);
	return sum;
};
//solution 2: speed:50%,
var NumArray = function (nums) {
	this.arr = nums;  //original array (you don't really have to store this)

	this.sumTillIndex = []  //array to store the sums
	for (i=0;i<nums.length;i++){
		if (i===0) this.sumTillIndex[i] = nums[i]
		else this.sumTillIndex[i] = this.sumTillIndex[i - 1] + nums[i];
	}
};
NumArray.prototype.sumRange = function (i, j) {
	// handle edge cases (not really required)
	if (i < 0) i = 0;
	if (j > this.arr.length - 1) j = this.arr.length - 1;
	if (j < i) return 0;

	if (i===0) return this.sumTillIndex[j];
	else return this.sumTillIndex[j] - this.sumTillIndex[i-1];
};

//LC#0326 Diff:Easy Power of Three
/*
Given an integer, write a function to determine if it is a power of three. Return boolean
Input: 27  Output: true
Input: 0   Output: false
Input: 9   Output: true
Input: 45  Output: false
Follow up: Could you do it without using any loop / recursion?
*/
//speed:50%
var isPowerOfThree = function (n) {
	while(n>1){
		n = n/3;
	}
	return n===1;
};
//leetcode solution: use toString(3)
// If a number is a power of 3, only the first digit in its ternary form is 1, and all the other digits are zeros. Examples: 1, 10, 100, 1000, etc.
var isPowerOfThree = function (n) {
	return /^10*$/.test(n.toString(3));
	//or
	return n.toString(3).split("").reduce((acc, x) => parseInt(acc) + parseInt(x)) === 1;
};

//LC#0342 Diff:Easy Power of 4
/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
Input: 16  Output: true
Input: 5  Output: false
Could you solve it without loops/recursion?
*/
//speed:53% memory:100%
var isPowerOfFour = function (n) {
	while (n > 1) {
		n = n / 4;
	}
	return n === 1;
};
//leetcode solution: just like the power of 3 question, there has to be an even number of zeroes... so (00)*
var isPowerOfFour = function (n) {
	return /^1(00)*$/.test(n.toString(2));
	//or
	return /^10*$/.test(n.toString(4));
};

//LC#0344 Diff:Easy Reverse String
/*
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. Don't return anything, modify in-place.
You may assume all the characters consist of printable ascii characters.
Input: ["h","e","l","l","o"]      Output: ["o","l","l","e","h"]
Input: ["H","a","n","n","a","h"]  Output: ["h","a","n","n","a","H"]
*/
//speed:100% memory:100%
var reverseString = function (s) {
	for(i=0;i<s.length/2;i++){
		[ s[i] , s[s.length-1-i] ] = [ s[s.length-1-i] , s[i] ];
	}
};
//leetcode solution
var reverseString = function (s) {
	let start = 0, end = s.length - 1;
	while (start <= end) {
		[s[start], s[end]] = [s[end], s[start]];
		start++;
		end--;
	}
};

//LC#0345 Diff:Easy Reverse Vowels of a String
/*
Write a function that takes a string as input and reverse only the vowels of a string. (i.e aeiou). Return a new string.
Input: "hello"     Output: "holle"
Input: "leetcode"  Output: "leotcede"
*/
//speed:54%
var reverseVowels = function (s) {
	let r = s.split('');
	let start = 0,  end = r.length-1;
	while(start<=end){
		while (r[start] && !/[aeiouAEIOU]/.test(r[start])) ++start;
		if(start>end) break; //the whole word might not have any vovels at all...
		while (r[end] && !/[aeiouAEIOU]/.test(r[end])) --end;
		if(end<start)break;
		[r[start], r[end]] = [r[end], r[start]];
		++start;
		--end;
	}
	return r.join('');
};
//leetcode solution
var reverseVowels = function (s) {
	const vowels = s.match(/[aeiou]/ig);
	return s.replace(/[aeiou]/ig, () => vowels.pop());
};

//LC#0349 Diff:Easy Intersection of Two Arrays
/*
Given two arrays, write a function to compute their intersection. i.e return an array of common elements (deduped)
Input: nums1 = [1,2,2,1], nums2 = [2,2]     Output: [2]
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]  Output: [9,4]
Each element in the result must be unique.
The result can be in any order.
*/
//speed:44% memory:7%
var intersection = function (nums1, nums2) {
	let hm = {};
	for(x of nums1){
		if(!hm[x]) hm[x] = true;
	}
	let ret = [];
	for(y of nums2){
		if(hm[y]) {
			ret.push(y);
			hm[y] = false;  // so that you don't push duplicate y going forward.
		}
	}
	return ret;
};
//leetcode solution
var intersection = function (nums1, nums2) {
	let setNum1 = new Set(nums1);
	return [...new Set(nums2.filter(x => setNum1.has(x)))];
}

//LC#0350 Diff:Easy Intersection of Two Arrays II
/*
Given two arrays, write a function to compute their intersection.  i.e return an array of common elements
Input: nums1 = [1,2,2,1], nums2 = [2,2]       Output: [2,2]
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]   Output: [4,9]
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/
//speed:32%
var intersect = function (nums1, nums2) {
	//figure out the smaller array, and create the hashmap for that array only.. (optimization)
	let [a,b] = nums1.length < nums2.length ? [nums1,nums2] : [nums2,nums1];
	let hm = {};
	for(x of a){
		hm[x] = hm[x] + 1 || 1;
	}
	let ret = [];
	for(y of b){
		if(hm[y] > 0) {
			ret.push(y);
			--hm[y];
		}
	}
	return ret;
};
//if both arrays are already sorted.
var intersect = function (nums1, nums2) {
	nums1 = nums1.sort((x,y) => x-y);  //sorting an integer array in JS
	nums2 = nums2.sort((x,y) => x-y);
	let i = 0, j = 0;
	let ret = [];
	while(i < nums1.length && j < nums2.length) {
		if(nums1[i] === nums2[j]) {
			ret.push(nums1[i]);
			++i;
			++j;
		} else if (nums1[i] < nums2[j]) {
			++i;
		} else {
			++j;
		}
	}
	return ret;
}

//LC#0367 Diff:Easy Valid Perfect Square
/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.
1 <= num <= 2^31 - 1
Follow up: Do not use any built-in library function such as sqrt.
Input: num = 16   Output: true
Input: num = 14   Output: false
*/
//speed:40%  memory:100%   O(log(num))
var isPerfectSquare = function (num) {
	if (num < 1) return false;
	if (num === 1) return true;

	let left = 0, right = num;
	while (left <= right) {
		const mid = Math.floor((right + left) / 2);
		if (mid*mid == num) return true;
		else if (mid*mid > num) right = mid - 1;
		else left = mid + 1;
	}
	return false;
};
//leetcode solution: Square of any number can be represented by 1+3+...+(2n-1) = (2n-1 + 1)n/2 = nn.
var isPerfectSquare = function (num) {
	//taylor series   1+3+5+7=16,  +9=25,  +11=36,  +13=49,  +15=64,  +17=81, +19=100
	let i = 1;
	while (num > 0) {
		num -= i;
		i += 2
	}
	return num === 0
};

//LC#0371 Diff:Easy Sum of Two Integers
/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -. Return the sum.
*/
//speed:100% leetcode soltion  (learn bitwise operations and hacks!!)
var getSum = function (a, b) {
	let carry;
	while ((a & b) !== 0) {
		carry = (a & b) << 1;
		a = a ^ b;
		b = carry;
	}
	return a ^ b;
};

//LC#0374 Diff:Easy Guess Number Higher or Lower
/*
We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I'll tell you whether the number is higher or lower. I use a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):
-1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!
So in your function, call the guess(x) function and use it.
Example :
Input: n = 10, pick = 6     Output: 6
*/
//speed:
var guessNumber = function (n) {
	let low=0, high=n;
	while(low<=high){    //this won't work if you do low<high
		mid = Math.floor((low+high)/2);
		if(guess(mid) === 0) return mid;
		else if(guess(mid) === -1) high=mid-1;
		else if(guess(mid) === 1) low=mid+1;
	}
};

//LC#0383 Diff:Easy Ransom Note
/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
Each letter in the magazine string can only be used once in your ransom note.
Input: ransomNote = "a", magazine = "b"       Output: false
Input: ransomNote = "aa", magazine = "ab"     Output: false
Input: ransomNote = "aa", magazine = "aab"		Output: true
*/
//speed:30%
var canConstruct = function (ransomNote, magazine) {
	let hm = {};
	for(x of magazine) {
		hm[x] = hm[x] + 1 || 1;
	}
	for(c of ransomNote) {
		if(!hm[c] || --hm[c] < 0) return false;
	}
	return true;
};

//LC#0387 Diff:Easy  First Unique Character in a String
/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
s = "leetcode"      return 0.  (l does not repeat in the entire string)
s = "loveleetcode"  return 2.  (l,o repeat in the string, v is the first char that does'nt repeat in the entire string)
s = ""    return -1
s = "cc"  return -1
*/
//speed:30%
var firstUniqChar = function (s) {
	let hm = {};
	for(x of s) {
		hm[x] = hm[x] + 1 || 1;
	}
	for(i in s) {
		if(hm[s[i]] === 1) return i;
	}
	return -1;
};

//LC#0389 Diff:Easy Find the Difference
/*
Given two strings s and t which consist of only lowercase letters.
String t is generated by random shuffling string s and then add one more letter at a random position.
Find the letter that was added in t.
Input: s = "abcd"   t = "abcde"   Output:e
*/
//speed:16
var findTheDifference = function (s, t) {
	let hm = {}; //only one map is needed
	for(i=0;i<t.length;i++) {
		//if you find it in s add 1, if you find it in t remove 1
		hm[s[i]] = hm[s[i]]!== undefined ? hm[s[i]] + 1 : 1;  //you can't just do = hm[s[i]] + 1 || 1
		hm[t[i]] = hm[t[i]]!==undefined ? hm[t[i]] - 1 : -1;  //you can't do hm[[t[i]] - 1 || -1  because when lhs becomes zero, it sets it to -1
	}
	//by now hm should have only one char that has hm[c]===-1, all others should be zero
	return Object.keys(hm).filter(x => hm[x]===-1)[0];
};
var findTheDifference = function (s, t) {
	s = s.sort();
	t = t.sort();
	// then loop through and find the first difference
}
//leetcode solutions -
var findTheDifference = function (s, t) {
	const sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
	const sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
	return String.fromCharCode(sum2 - sum1);
};
var findTheDifference = function (s, t) {  //fact:X^X=0 BUT X^0 is X
	var sum = 0;
	for (i=0;i<s.length;i++) sum = sum ^ t[i].charCodeAt() ^ s[i].charCodeAt();
	sum ^= t[i].charCodeAt()          // add the remaining letter of t
	return String.fromCharCode(sum)  // only one letter will stand out in the sum...(evything else cancels one another)
};

//LC#0392 Diff:Easy Is Subsequence
/*
Given a string s and a string t, check if s is subsequence of t. Return boolean.
A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).
Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?
Constraints:
0 <= s.length <= 100
0 <= t.length <= 10,000
Both strings consists only of lowercase characters.
*/
//speed:70%  memory:100%    (you can optimize and exit the for loop faster too)
var isSubsequence = function (s, t) {
let j = 0;
for(i=0;i<t.length;i++){
	if(t[i]===s[j]) ++j;
}
return j===s.length;
};


//LC#0401 Diff:Easy Binary Watch
/*
A binary watch has 4 LEDs (8,4,2,1) on the top which represent the hours (0-11 hr), and the 6 LEDs (32,16,8,4,2,1) on the bottom represent the minutes (0-59 min).
Each LED represents a zero or one, with the least significant bit on the right.
Given a non-negative integer n which represents the total number of LEDs that are currently on, return all possible times the watch could represent.
Input: n = 1   Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
*/
// total possible time combinations = 12hr*60mins = 720 combos
// a given combo is possible by only 1 specific n value
//speed:20% memory:100%
var readBinaryWatch = function (n) {
	let validCombos = [];
	for(i=0;i<12;i++){
		for(j=0;j<60;j++){
			// count the number of 1s in the in hr and in min and add them up.
			if (i.toString(2).replace(/0/g, '').length + j.toString(2).replace(/0/g, '').length === n) {
				// this is a valid combo. Example "1:21" = 0001 + 10101 = 1 + 3 = 4 leds
				validCombos.push(`${i}:${j < 10 ? 0 : ''}${j}`);
			}
		}
	}
	return validCombos;
};
// leetcode solution: backtracking algorithm https://www.youtube.com/watch?v=DKCbsiDBN6c
var readBinaryWatch = function (num) {
	const myWatch = new Array(10).fill(0);
	const permutations = [];

	function permute(watch, i, ones) {
		if (ones === 0) {
			permutations.push(watch);
			return;
		}
		if (i === watch.length) return;

		for (let option = 0; option <= 1; option++) {
			let newWatch;
			if (option === 0) { // first option is '0'
				// change value of watch at index 'i' to '0'
				newWatch = [...watch.slice(0, i), 0, ...watch.slice(i + 1)]
			} else { // second option is '1'
				// change value of watch at index 'i' to '1'
				newWatch = [...watch.slice(0, i), 1, ...watch.slice(i + 1)]
				ones--;
			}
			permute(newWatch, i + 1, ones);
		}
	}
	permute(myWatch, 0, num);

	const time = [];

	for (let item of permutations) {
		const hour = parseInt(item.slice(0, 4).join(''), 2);
		const min = parseInt(item.slice(4).join(''), 2);
		if (hour >= 12 || min >= 60) continue;
		time.push(`${hour}:${min.toString().padStart(2, '0')}`)
	}
	return time
};


//LC#0404 Diff:Easy Sum of Left Leaves
/*
Find the sum of all left leaves in a given binary tree. Return integer sum.
    3
   / \
  9  20
    /  \
   15   7
There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
Definition for a binary tree node.
function TreeNode(val, left, right) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
}
*/
//speed:25%
var sumOfLeftLeaves = function (root) {
	let sum = 0;
	if(!root) return sum;

	function dfs(n) {
		if(n.left) {
			if (!n.left.left && !n.left.right) sum += n.left.val;   	// if left node is a leaf node, at it's value
			else dfs(n.left);  // else just do normal dfs
		}
		if(n.right)  dfs(n.right);  //normal dfs for right nodes
	}
	dfs(root);
	return sum;
};
//leetcode solution
var sumOfLeftLeaves = function (node, isLeft = false) {
	if (node === null) { return 0 }
	if (isLeft && node.left === null && node.right === null) { return node.val }
	return sumOfLeftLeaves(node.left, true) + sumOfLeftLeaves(node.right, false)
};

//LC#0405 Diff:Easy Convert a Number to Hexadecimal
/*
Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used. All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.
Input:26  Output:"1a"
Input:-1  Output:"ffffffff"
*/
//instead of counting in 10s, you need to count in 16s
//speed:
var toHex = function (n) {
	if(n===0)return "0";

	if(n<0) n+=Math.pow(2,32);  //this line is from leetcode: this line covers negative numbers too.
	//i.e ffffffff is 2^32-1 i.e 4294967295, so add 2^32 to num, to make it positive

	let digits = '0123456789abcdef';
	let ret = '';
	while(n >= 1){
		r = n%16;
		ret = digits[r] + ret;
		n = Math.floor(n/16);
	}
	return ret;
};

//LC#0409 Diff:Easy Longest Palindrome
/*
Given a string which consists of lowercase or uppercase letters alone, find the length of the longest palindromes that can be built with those letters. This is case sensitive, for example "Aa" is not considered a palindrome here.
Assume the length of given string will not exceed 1,010.
Input: "abccccdd"  Output:7   Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
*/
//basicaly the palindrome will be some of all evens  + sum of all odd numbers (convert these to evens)
//speed:21%
var longestPalindrome = function (s) {
	let hm = {};
	for (x of s) hm[x] = hm[x] + 1 || 1;

	let sum = 0, isThereAtleastOne1Left = false;
	for(y of Object.values(hm)){
		if (y%2===0) sum+=y;   //add all the even counts blindly
		else {
			if (y >= 1) isThereAtleastOne1Left = true;
			y = y - 1;  //convert the odd number to an even number and use all its letters.
			sum+=y;
		}
	}
	return isThereAtleastOne1Left ? sum + 1 : sum;
};
//you can cleanup the above code a bit
//leetcode solution: count while making the hashmap, add 2 everytime the new count is even
var longestPalindrome = function (s) {
	let ans = 0;
	let keys = {};
	for (let char of s) {
		keys[char] = (keys[char] || 0) + 1;
		if (keys[char] % 2 == 0) ans += 2;
	}
	return s.length > ans ? ans + 1 : ans;
};

//LC#0412 Diff:Easy Fizz Buzz
/*
Write a program that outputs the string representation of numbers from 1 to n. Return an array of strings.
But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/
//speed:40%
var fizzBuzz = function (n) {
	let ret = [];
 for(i=1;i<=n;i++){
	if(i%3===0 && i%5===0) ret.push('FizzBuzz');
	else if(i%3===0) ret.push('Fizz');
	else if(i%5===0) ret.push('Buzz');
	else ret.push(i.toString());
 }
 return ret;
};
//leetcode solution
var fizzBuzz = function (n) {
	return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};

//LC#0414 Diff:Easy Third Maximum Number
/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
Input: [3, 2, 1]  Output: 1
Input: [1, 2]     Output: 2
Input: [2, 2, 3, 1]  Output: 1   Explanation: Note that the third maximum here means the third maximum distinct number.
*/
//speed:44% memory:100%
var thirdMax = function (nums) {  //try with array [30,25,55,20,10,65,15]
	let first = second = third = -Infinity;
	for(i=0;i<nums.length;i++) {
		let x = nums[i];
		if(x > first) {
			third = second;  //use swapping: [first, second, third] = [x, first, second];
			second = first;
			first = x;
		} else if (x < first && x > second) {
			third = second;
			second = x;
		} else if (x < second && x > third) {
			third = x;
		}
	}
	if(third === -Infinity) third = first; //as stated in the question
	return third;
};
//leetcode solution using set
var thirdMax = function (nums) {
	let u = new Set(nums);
	if (u.size < 3) return Math.max(...nums); //or Math.max(...u);
	for (let i = 0; i < 2; i++) {
		u.delete(Math.max(...u))
	}
	return Math.max(...u);
};

//LC#0415 Diff:Easy Add Strings
/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2. Return a string.
The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/
//speed:30%
var addStrings = function (num1, num2) {
	[a,b] = num1.length > num2.length ? [num1,num2] : [num2,num1];
	//a is the bigger number
	let c = 0;
	let ret = '';
	let j = b.length-1;  //j will start at some 15
	for(i=a.length-1;i>=0;i--){   //i might start at >15
		s = b[j] ? c + Number(a[i]) + Number(b[j]) : c + Number(a[i]);  //at some point j will be done, only i will be left.
		if(s>9){s=s%10;c=1;}  //if sum is 17, make it 7 with carry of 1
		else {c=0;}
		ret = s + ret;
		--j;
	}
	//there might be still be carry left
	if(c===1) ret = c + ret;
	return ret;
};
//leetcode solution: much cleaner code (similar solution)
var addStrings = function (num1, num2) {
	let i = num1.length - 1;
	let j = num2.length - 1;
	let carry = 0;
	let sum = '';

	for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {     // || "carry > 0" brilliant.......
		const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
		const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
		const digitsSum = digit1 + digit2 + carry;
		sum = `${digitsSum % 10}${sum}`;
		carry = Math.floor(digitsSum / 10);
	}
	return sum;
};

//LC#0434 Diff:Easy Number of Segments in a String
/*
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters. Please note that the string does not contain any non-printable characters.
Input: "Hello, my name is John"     Output: 5
*/
//speed:
const countSegments = function (s) {
	return s.split(' ').filter(Boolean).length;  //return s.split(' ').filter(x => x !== '').length;
};

//LC#0437 Diff:Easy Path Sum III
/*
You are given a binary tree in which each node contains an integer value.
Find the number of paths that sum to a given value.
The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
Example:
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1
Return 3. The paths that sum to 8 are:
1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:32%
var pathSum = function (root, sum) {
	if (!root) return 0;

	let totalCount = 0;
	function dfs(n, sumsTillN) {
		for(i=0;i<sumsTillN.length;i++) sumsTillN[i] += n.val;  //you need to add n.val to every array element....
		sumsTillN.push(n.val);

		for(x of sumsTillN) if(x===sum) ++totalCount;  //in your whole new set of sums till this node, each matching some must be counted.

		if(n.left) dfs(n.left, sumsTillN.slice(0)); //send a copy of the array, don't send the original
		if(n.right) dfs(n.right, sumsTillN.slice(0)); //or else left children will affect the right children
	}
	dfs(root,[]);

	return count;
};
//leetcode solution: speed 70%
var pathSum = function (root, sum, presums = { '0': 1 }, prev = 0) {
	if (!root) return 0;
	let curr = prev + root.val;
	presums[curr] = (presums[curr] || 0) + 1;
	let res = (presums[curr - sum] || 0) - !sum;
	res += pathSum(root.left, sum, presums, curr) + pathSum(root.right, sum, presums, curr);
	presums[curr]--;
	return res;
};

//LC#0441 Diff:Easy Arranging Coins
/*
You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
Given n, find the total number of full staircase rows that can be formed.
n is a non-negative integer and fits within the range of a 32-bit signed integer.
n = 5, The coins can form the following rows:
¤
¤ ¤
¤ ¤        Because the 3rd row is incomplete, we return 2.
n = 8 The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤        Because the 4th row is incomplete, we return 3.
*/
//speed:15%
var arrangeCoins = function (n) {   //sum of first n numbers is n*(n+1)/2
	if(n===0 || n===1) return n;
	for(k=0;k<n;k++){
		if(k*(k+1)/2 > n) break;
	}
	return --k;
};
//speed:80%
var arrangeCoins = function (n) {
	let k = Math.round(Math.sqrt(2 * n));
	let used_coins = k*(k+1)/2;
	while (used_coins <= n) {
		k++;
		used_coins = k*(k+1) // 2;
	};
	return (k > 0) ? k - 1 : 0
};
//speed:100% leetcode solution
var arrangeCoins = function (n) {
	if (!n) return 0;
	let left = 1;
	let right = n;
	while (left <= right) {
		const mid = left + ((right - left) >> 1);
		if (mid * (mid + 1) <= 2 * n && (mid + 1) * (mid + 2) > 2 * n) return mid;
		if (mid * (mid + 1) <= 2 * n) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
};
//LC#0443 Diff:Easy String Compression
/*
Given an array of characters, compress it in-place. The length after compression must always be smaller than or equal to the original array.
Every element of the array should be a character (not int) of length 1. So if something counts to "10" or "12", you have to put "1","0" or "1","2" and not "10" or "12"
After you are done modifying the input array in-place, return the new length of the array.
Follow up: Could you solve it using only O(1) extra space?
Input: ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
*/
//speed:6%
var compress = function (chars) {
	let write = 0;
	let count = 1;
	for(i=1;i<chars.length;i++){
		if(chars[i] === chars[i-1]) {
			++count;
			continue;
		}
		if(count>1) {
			count = count.toString();
			for (x of count) chars[++write] = x;
		}
		count = 1;
		chars[++write] = chars[i];
	}
	if (count > 1) {
		count = count.toString();
		for (x of count) chars[++write] = x;
	}
	return write+1;
};
//all other leetcode solutions are similar ish.

//LC#0447 Diff:Easy Number of Boomerangs
/*
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).
Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).
Input: [[0,0],[1,0],[2,0]]   Output:2
	Explanation:The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
*/
//speed:30%
var numberOfBoomerangs = function (points) { //points is a 2d array of coordinates
	let count = 0;
	for(i=0;i<points.length;i++){
		let hm = {};
		for(j=0;j<points.length;j++){
			if(i===j) continue;  //don't campare the point with itself

			newDist = getDistance(points[i], points[j]);
			// you can also just blindly store all the distances in hm... hm[newDist] = hm[newDist] + 1 || 1; Then after the "i" for loop, go through hm, and for every x value greater than 1, add xFactorial to the count.
			if(hm[newDist]) {
				count += hm[newDist] * 2;  //adding a new combination,i.e this new coordinate pairs with the exisiting ones in two possible ways
				++hm[newDist];
			} else {
				hm[newDist] = 1;
			}

		}
	}
	return count;

	function getDistance(a,b) {
		// (x1-x2)^2 + (y1-y2)^2 <---- sqrt of this
		return Math.sqrt(Math.pow(Math.abs(a[0]-b[0]),2) + Math.pow(Math.abs(a[1]-b[1]),2));
		//you can avoid the sqrt as you are just storing values in a hashmap anyway... so even the squared value is fine.
	}
};

//LC#0448 Diff:Easy Find All Numbers Disappeared in an Array
/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
Input:[4,3,2,7,8,2,3,1]  Output:[5,6]
*/
//so size is n, and ideally all numbers 1 to n must be there in the array. Find the missing ones
//speed:30%  memory:10%
var findDisappearedNumbers = function (nums) {
	let ret = [];
	let hm = {};
	for(x of nums) hm[x] = 1;
	for(i=1;i<=nums.length;i++) if(!hm[i]) ret.push(i);
	return ret;
};
//leetcode solution: no extra memory
var findDisappearedNumbers = function (nums) {
	const abs = Math.abs;
	const res = [];
	for (let i = 0; i < nums.length; i++) {
		let num = abs(nums[i]);
		nums[num - 1] = -abs(nums[num - 1]);
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0)
			res.push(i + 1)
	}
	return res
};

//LC#0453 Diff:Easy Minimum Moves to Equal Array Elements
/*
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing exactly n - 1 elements by 1.
Input:[1,2,3]  Output:3
	Explanation: Only three moves are needed (remember each move increments two elements): [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/
//speed:100%   answer = sum - (n*minNumber)
/*
In each 'move' instead of adding 1 to n-1 elements, why don't you just remove 1 from one element. Now see how many moves it takes to make all elements the same value. Anyway the relative distance you moved is the same... so number of moves = num1-min + num2-min + num3-min + num4-min... numN-min = sum - n*min
*/
var minMoves = function (nums) {
	return nums.reduce((acc, cur) => acc + cur) - (nums.length * Math.min(...nums));
};

//LC#0455 Diff:Easy Assign Cookies
/*
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor Gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size Sj.
If Sj >= Gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.
You may assume the greed factor is always positive.
You cannot assign more than one cookie to one child.
Input: [1,2,3], [1,1]    Output: 1
	Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
	And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content. You need to output 1.
Input: [1,2], [1,2,3]  Output: 2
	Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
	You have 3 cookies and their sizes are big enough to gratify all of the children, You need to output 2.
Input is two random arrays, output is a number
*/
//speed:73%  memory:100%
// the more cookies i sell, the more children i feed (1child=1cookie), so i will try to sell as many cookies first (instead of focusing on maximizing children)
var findContentChildren = function (g, s) {
 g = g.sort((a,b)=>a-b);
 s = s.sort((a,b)=>a-b);
 let i=0,j=0,count=0;
 while(i<s.length && j<g.length){         //sometimes g array can be very small, so check j<g.length
	while(i<s.length && s[i]<g[j]) ++i;    //find the first child you can feed in the g array

	if(i<s.length){      //double check that i is valid
		++i;
		++j;
		++count;
	}
 }
 return count;
};
//leetcode slower but cleaner solution
var findContentChildren = function (g, s) {
	g = g.sort((a, b) => a - b)
	s = s.sort((a, b) => a - b)
	let i = 0, count = 0, j = 0;
	while (i < s.length) {
		if (s[i] >= g[j]) {
			count++
			j++
		}
		i++
	}
	return count
};

//LC#0459 Diff:Easy Repeated Substring Pattern
/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10,000.
Input: "abab"   Output: True   Explanation: It's the substring "ab" twice.
Input: "aba"    Output: False
Input: "abcabcabcabc"   Output: True   Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/
//speed:27% leetcode solution
var repeatedSubstringPattern = function (s) {
	for (var i = 1; i <= s.length / 2; i++) {
		var bool = true
		var str = s.substring(0, i)

		for (var j = 0; j < s.length; j = j + i) {
			var cmp = s.substring(j, j + i)
			if (str !== cmp) {
				bool = false
				break
			}
		}
		if (bool) return true
	}
	return false
};
//similar solution
var repeatedSubstringPattern = function (s) {
	let i = 1, len = s.length;
	while (i <= Math.floor(len / 2)) {
		if (s.slice(0, i).repeat(len / i) == s) return true;
		i++
	}
	return false;
};
//speed:77% Learn about the KMP algorithm
var helperKmp = function (strn) {
	var lps = new Array(strn.length);
	lps[0] = 0;
	var i = 1;
	var length = 0;

	while (i < strn.length) {
		if (strn.charAt(i) === strn.charAt(length)) {
			length++;
			lps[i] = length;
			i++;
		} else {
			if (length) {
				length = lps[length - 1];
			} else {
				lps[i] = 0;
				i++;
			}
		}
	}
	return lps;
};
var repeatedSubstringPattern = function (strn) {
	var lps = helperKmp(strn);
	var n = strn.length;
	var lenn = lps[lps.length - 1];
	if (lenn && n % (n - lenn) === 0) {
		return true;
	} else {
		return false;
	}
};
//simple leetcode solution
var repeatedSubstringPattern = function (s) {
	return s.repeat(2).slice(1, -1).includes(s);
};

//LC#0461 Diff:Easy Hamming Distance
/*
The Hamming distance between two integers is the number of BIT positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.  0 ≤ x, y < 231.
Input: x = 1, y = 4    Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       �����   ↑
The above arrows point to positions where the corresponding bits are different.
*/
//speed:
var hammingDistance = function (x, y) {
	return (x ^ y).toString(2).replace(/0/g, '').length;        //use replace instead of match(/1/g).length, because match can return null if there are no 1s, so null.length errors out
};

//LC#0463 Diff:Easy Island Perimeter
/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island. Input is a 2D array.
Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
Output: 16   you can see a T (a christian cross of 1s) of land in the map
*/
//speed:40%
var islandPerimeter = function (grid) {
	let count = 0;
	for(i=0;i<grid.length;i++){
		for(j=0;j<grid[i].length;j++){
			if(grid[i][j]!==1) continue;   //don't care about the water parts

			if (i === 0) ++count;     //add one for every kind of border wall of this cell, as grid is surrounded by water. Do not combine these. They EACH count as a perimeter
			if (i===grid.length-1) ++count;
			if (j === 0) ++count;
			if (j===grid[i].length-1) ++count;


			if(j>0 && grid[i][j-1]===0) ++count;  //left walls
			if(j<grid[i].length-1 && grid[i][j+1]===0) ++count; //right walls
			if(i>0 && grid[i-1][j]===0) ++count;  //top wall
			if(i<grid.length-1 && grid[i+1][j]===0) ++count;
		}
	}
	return count;
};
//leetcode solution: subtract the perimeter
var islandPerimeter = function (grid) {
	let perimeter = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {  //you don't need grid[i], grid[0] will do. It is a grid for sure.
			if (grid[i][j]) {
				perimeter += 4;
				if (grid[i - 1] && grid[i - 1][j]) perimeter--;
				if (grid[i + 1] && grid[i + 1][j]) perimeter--;
				if (grid[i] && grid[i][j - 1]) perimeter--;
				if (grid[i] && grid[i][j + 1]) perimeter--;
			}
		}
	}
	return perimeter;
};

//LC#0475 Diff:Easy Heaters
/*
Design a standard heater with fixed warm radius to warm all the houses. You are given positions of houses and heaters on a horizontal line, find out the single minimum warming radius for ALL heaters so that all houses could be covered by those heaters. Input will be the positions of houses and heaters seperately, and your expected output will be the single minimum warming radius standard of heaters.
Note:
Size of input arrays is  0<=Size<=25000
Positions of individual houses and heaters you are given are non-negative and will not exceed 10^9.
As long as a house is in the heaters' warm radius range, it can be warmed.
Input: [1,2,3],[2]    Output: 1   Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
Input: [1,2,3,4],[1,4]   Output: 1  Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
*/
//speed:leetcode solution
var findRadius = function (houses, heaters) {
	heaters.sort((a, b) => a - b);
	// the answer is MAX of min distance between each house and it's heater
	return Math.max(...houses.map(h => findMinDistance(h, heaters)));

	const findMinDistance = (house, heaters) => {
		let left = 0;
		let right = heaters.length - 1;
		while (left <= right) {
			const mid = left + ((right - left) >> 1);
			if (heaters[mid] <= house && house <= heaters[mid + 1]) {
				return Math.min(house - heaters[mid], heaters[mid + 1] - house);
			} else if (heaters[mid] <= house) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
		if (left === 0) return heaters[0] - house;
		if (left === heaters.length) return house - heaters[heaters.length - 1];
	};
};

//LC#0476 Diff:Easy Number Complement
/*
Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation. Return an integer.
Input: num = 5   Output: 2 Explanation: The binary representation of 5 is 101 (no leading zero bits), and its 	complement is 010. So you need to output 2.
Input: num = 1   Output: 0
*/
//speed:6%
var findComplement = function (num) {
	let b = num.toString(2).split('');
	let flipped = b.map(x => x==='1'?'0':'1').join('');
	let sum = 0;
	for (i = flipped.length - 1, j = 0; i >= 0; i--, j++)  sum += flipped[i]*Math.pow(2, j);
	return sum;
};
var findComplement = function (num) {
	let flipped = num.toString(2).split('').map(x => x === '1' ? '0' : '1').join('');
	return parseInt(flipped,2);
};
//leetcode solutions-   the number XOR 111111 is the answer
var findComplement = function (num) {
	let mask = 1;
	while (mask < num) mask = (mask << 1) | 1;
	return num ^ mask;
};
var findComplement = function (num) {
	let d = 2;
	while (d <= num) d*=2;    //[0,1], [5,2], [3,4]
	return d - num - 1;
};

//LC#0482 Diff:Easy License Key Formatting
/*
You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.
Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.
Given a non-empty string S and a number K, format the string according to the rules described above.
Input: S = "5F3Z-2e-9-w", K = 4      Output: "5F3Z-2E9W"
Input: S = "2-5g-3-J", K = 2         Output: "2-5G-3J"
Input: S = "--a-a-a-a--", K = 2      Output: "AA-AA"
The length of string S will not exceed 12,000, and K is a positive integer.
String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and dashes(-).
String S is non-empty.
*/
//speed:54%
var licenseKeyFormatting = function (S, K) {
	S = S.replace(/-/g,'').toUpperCase();
	let ret = '';
	let count = 0;
	for(i=S.length-1;i>=0;i--){
		if(S[i]==='-') continue;

		ret = S[i]+ret;
		++count;
		if(count===K && i>0) {
			ret = '-' + ret;
			count=0;
		}
	}
	return ret;
};

//LC#0485 Diff:Easy Max Consecutive Ones
/*
Given a binary array, find the maximum number of consecutive 1s in this array.
Input: [1,1,0,1,1,1]  Output: 3 Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/
//speed:44%
var findMaxConsecutiveOnes = function (nums) {
	let max = -Infinity, count = 0;
	for(x of nums){
		if(x===1) ++count;
		else {
			max = Math.max(max, count);
			count=0;
		}
	}
	return Math.max(max, count);  //incase the array ends with a bunch of 1s, it also returns 0 if nums is [0,0,0]
};
//leetcode solutions -
var findMaxConsecutiveOnes = function (nums) {
	return Math.max(...nums.join('').split('0').map(ones => ones.length));
};
var findMaxConsecutiveOnes = function (nums) {
	let max = 0, curr = 0;
	for (let k of nums) {
		max = Math.max(max, curr += k);
		if (!k) curr = 0;
	}
	return max;
};

//LC#0492 Diff:Easy Construct the Rectangle
/*
For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, your job is to design a rectangular web page, whose length L and width W satisfy the following requirements:
1. The area of the rectangular web page you designed must equal to the given target area.
2. The width W should not be larger than the length L, which means L >= W.
3. The difference between length L and width W should be as small as possible.
You need to output the length L and the width W of the web page you designed in sequence.
Input: 4   Output: [2, 2] Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.
Note:
The given area won't exceed 10,000,000 and is a positive integer
The web page's width and length you designed must be positive integers.
*/
//speed:leetcode solution: the w has to be less than the sqrt of area, so start from there and check if each width divides the area
var constructRectangle = function (area) {
	let width = Math.floor(Math.sqrt(area));

	while (width > 0) {
		const length = area / width;    //or do area%width===0 then return [area/width,width]
		if (Number.isInteger(length)) {
			return [length, width]
		}
		width--
	}
};

//LC#0496 Diff:Easy
/*
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2. (i.e next greater number's index should be greater than current number's index)
The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].   Output: [-1,3,-1]
	Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Input: nums1 = [2,4], nums2 = [1,2,3,4].     Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.
Leetcoder clarification of this stupid question: for x in nums1, find the same number in nums2 and check if there is any number larger than x (say the number is y>x) on its right side in nums2. Print y if there is such a number or -1 if there is no such number.
*/
//speed:50% memory:100%
var nextGreaterElement = function (nums1, nums2) {
	let ret = [];

	for(x of nums1) {
		let nextGreater = false;
		for(j = nums2.length-1; nums2[j]!==x; j--){
			if(nums2[j]>x) nextGreater = nums2[j];
		}
		ret.push( nextGreater===false? -1 : nextGreater);
	}
	return ret;
};
//leetcode solution speed:98%
var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(x => {
        for (i = nums2.indexOf(x) + 1; i < nums2.length; i++) {
            if (nums2[i] > x) return nums2[i];
        }
        return -1;
    })
};
// leetcode brilliant solution using stack and map
// low low low low high low high low low high -> evertime you see a high, pop the stack of previous lows and set all their highs to 'high'.
var nextGreaterElement = function(nums1, nums2) {
  const map = {};
  const stack = [];
  nums2.forEach(n => {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n;  //for every lower number seen before this, map their value as n
    }
    stack.push(n);
  });
  return nums1.map(n => map[n] || -1);
};

//LC#0500 Diff:Easy Keyboard Row
/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
QWERTYUIOP
ASDFGHJKL
ZXCVBNM
Input: ["Hello", "Alaska", "Dad", "Peace"]     Output: ["Alaska", "Dad"]
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/
//speed:20% memory:100%
var findWords = function(words) {
	let hm = {'q':1, 'w':1, 'e':1, 'r':1, 't':1, 'y':1, 'u':1, 'i':1, 'o':1, 'p':1,
	'a':2, 's':2, 'd':2, 'f':2, 'g':2, 'h':2, 'j':2, 'k':2, 'l':2}; //3rd row will be undefined

	let ret = [];
	for(w of words) {
		b = w.toLowerCase();
		let mismatch = false;
		for(i=0;i<b.length-1;i++) {
			if(hm[b[i]]!==hm[b[i+1]]) mismatch = true;
		}
		if(!mismatch) ret.push(w);
	}

	return ret;
};
//leetcode: brilliant solution: from start to end the word must only contain 'qwertyuiop'
var findWords = function(words) {
    return words.filter(w => /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i.test(w));
};
var findWords = function(words) {
    return words.filter((word) =>  /^[qwertyuiop]+$/i.test(word) || /\b[asdfghjkl]+\b/i.test(word) || /^[zxcvbnm]+$/i.test(word));
};

//LC#0501 Diff:Easy Find Mode in Binary Search Tree
/*
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST. Assume a BST is defined as follows:
The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2]. Return an array. (if there is more than one mode, return all of them)
Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:30% memory:60%
var findMode = function(root) {
	if(!root) return [];

	let hm = {}, max=0;
	function dfs(n) {
		hm[n.val] = hm[n.val] + 1 || 1;
		max = Math.max(max, hm[n.val]);
		if(n.left) dfs(n.left);
		if(n.right) dfs(n.right);
	}
	dfs(root);
	let ret = [];
	for(k of Object.keys(hm)) {
		if(hm[k]===max) ret.push(k);
	}
	return ret;
};
//leetcode solution: brilliant: speed:60% since BST, we could treat it as an ascending sorted array when we do inorder traverse. Meaning vist left, then visit this, then visit right
/*
//if you had a sorted array [1,1,2,3,4,4,4,4,5,6,6,6,7,8,8,8,8,8,8,8,9,10];
let max=0,count=0,prev=0;
let ret = [];
for(x of arr){
	count = x===prev ? ++count : 1;
	if(count>max) ret=[x],max=count;   //start a new ret array
	else if (count===max) ret.push(x);
	prev = x;
}
return ret; //ret will be an array of modes....
*/
var findMode = function(root) {
	if(!root) return [];

	let ans = [];
	let count = 0, _max = 0, prev = 0  ;

	const preorder = (n) => {
		if(n.left) preorder(n.left);

		count = prev == n.val ? ++count : 1;
		if(count > _max) {
			ans = [n.val];  //restart a new ans array if you find a new max
			_max = count;
		} else if(count === _max)   ans.push(n.val);  //if it equals max, then just push this to the existing ans array
		prev = n.val;  //make sure you understand this important line

		if(n.right) preorder(n.right)
	}

	preorder(root)
	return ans;
};

//LC#0504 Diff:Easy Base 7
/*
Given an integer, return its base 7 string representation. Base 7 has the digits 0123456
Input: 100  Output: "202"
Input: -7   Output: "-10"
Note: The input will be in range of [-1e7, 1e7].
*/
//speed:
var convertToBase7 = function(n) {
	if(n===0)return "0";

	let n2=n;
	n=Math.abs(n);

	let digits = '0123456';
	let ret = '';
	while(n >= 1){
		r = n%7;
		ret = digits[r] + ret;
		n = Math.floor(n/7);
	}
	return n2>=0? ret : ('-'+ret);
};
var convertToBase7 = function(num) {
	return num.toString(7);
};

//LC#0506 Diff:Easy Relative Ranks
/*
Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Input: [5, 4, 3, 2, 1]   Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". For the remaining athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
*/
//speed:86%
var findRelativeRanks = function(nums) {
	numsCopy = nums.slice();

	nums.sort((x,y)=>y-x); //y-x for descending order. sort() changes the array in place!!
	let hm = {};
	for(i=0;i<nums.length;i++){
		hm[nums[i]] = i+1;  //set the rank for each element in the hashmap
	}

	return numsCopy.map(x => {
		// this is how you use map!! you have to return one final new value of x
		if(hm[x]===1) x="Gold Medal";
		else if(hm[x]===2) x="Silver Medal";
		else if(hm[x]===3) x="Bronze Medal";
		else x=''+hm[x];  //convert to string
		return x;
	});
}

//LC#0507 Diff:Easy Perfect Number
/*
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
Given an integer n, write a function that returns true when it is a perfect number and false when it is not.
Input: 28   Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000. (1e8)
*/
//speed:50% memory:100%
var checkPerfectNumber = function(num) {
	if(num===0) return false;

	let sum = 0;
	for(i=1;i<=num/2;i++){
		if(num%i==0) {
			sum+=i;
			if(sum>num) return false; //at any point if sum is greater than num, just quit
		}
	}
	return sum===num;
};
//leetcode solution brilliant: speed:100% Go only uptil the sqrt. And add i and num/i
// for 28: i goes 2 to 5:  2,14  4,7
var checkPerfectNumber = function(num) {
	if (num <= 1) { return false; }

	let divisorsSum = 1;  //for anything greater than 1, sum is atleast 1.
	for (i=2; i<=Math.floor(Math.sqrt(num)); i++) {
			if (num%i ===0)  divisorsSum += i + num/i;
	}
  return divisorsSum === num;
};

//LC#0509 Diff:Easy Fibonacci Number
/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. i.e [0,1,1,2,3,5,8,13,21,34,55,89...]
F(0) = 0,   F(1) = 1    F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).
Input: 2   Output: 1
Input: 3   Output: 2
Input: 4   Output: 3
Note: 0 ≤ N ≤ 30.
*/
//speed:15%
var fib = function(n) {
	if(n===0) return 0;
	if(n===1) return 1;

	return fib(n-1) + fib(n-2);
}
//speed:53%  memory:9%  (memoization is good only for very very high numbers)
var fib = function(n) {
	function memoizeAFunc(g) {
		let hm = {}

		return function(x){
			if(hm[x]===undefined) hm[x] = g(x);
			return hm[x];
		}
	}
	function basicFib(n) {
		if(n===0) return 0;
		if(n===1) return 1;
		return memoizedFib(n-1) + memoizedFib(n-2);
	}

	let memoizedFib = memoizeAFunc(basicFib);
	let ret = memoizedFib(n);
	return ret;
};
//speed=40% memory:100%   o(n) memory
var fib = function(n) {
	let arr = [0,1];
	for(i=2;i<=n;i++){
		arr[i] = arr[i-1] + arr[i-2];
	}
	return arr[n];
}
//speed=50%  o(1) memory
var fib = function(n) {
	if (n < 2) return n;

	let sum = 1,prev = 0;
	for (let i = 2; i <= N; i++){
			sum += prev;
			prev = sum - prev;
	}
	return sum;
};
//leetcode: clean memoization!!! speed:70%
function fib(n){
  let memo = {};

  let rec = (num) => {
		if (memo[num]) return memo[num];

    if (num == 0) return 0;
		if (num == 1 || num == 2) return 1;

    let res = rec(num-1) + rec(num-2);
    memo[num] = res;
    return res;
  }

  return rec(n)
}


//LC#0520 Diff:Easy Detect Capital
/*
Given a word, you need to judge whether the usage of capitals in it is right or not.
We define the usage of capitals in a word to be right when one of the following cases holds:
All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Input: "USA"   Output: True
Input: "FlaG"  Output: False
*/
//speed:26% memory:26%
var detectCapitalUse = function(word) {
	// upperCase and lowerCase return new strings and don't edit in place
	if(word.toUpperCase() === word) return true;  //word is all capitals
	if(word.toLowerCase() === word) return true;  //word is all lowercase
	if(word[0].toUpperCase() === word[0] && word.slice(1).toLowerCase() === word.slice(1)) return true; //only first letter is capital
	//last one can be written as if(word[0].toUpperCase()+word.slice(1).toLowerCase() === word)
	return false;
};
//leetcode solution
var detectCapitalUse = function(word) {
	return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};
var detectCapitalUse = function(word) {
	return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word); // either all capitals, all small cases, or Capital follow by small cases
};
//leetcode: finite state machine. Draw 4 circles representing the 4 states, and see the transitions from one state to another
var detectCapitalUse = function(word) {
	const isCapital = l => l>='A' && l<='Z';

	let indx = 0;
	let state = 0;

	for(;;) {   //same as while(true)
		if (indx === word.length) return true;
		switch(state) {
			case 0:
					state = isCapital(word[indx++])? 1 : 2;
					break;
			case 1:
					state = isCapital(word[indx++])? 3 : 2;
					break;
			case 3:
					if (!isCapital(word[indx++])) return false;
					break;
			case 2:
					if (isCapital(word[indx++])) return false;
					break;
		}
	}
};
//leetcode similar to state machine
var detectCapitalUse = function(word) {
  if (word.length <= 1) return true;

  let areAllCaps = true;
  let areAllLow = true;
  let isFirstCup = 65 <= word.charCodeAt(0) && word.charCodeAt(0) <= 90;

  for (let i = 0; i < word.length; i++) {
    areAllCaps = areAllCaps && 65 <= word.charCodeAt(i) && word.charCodeAt(i) <= 90 ? true : false;
    areAllLow = areAllLow && 97 <= word.charCodeAt(i) && word.charCodeAt(i) <= 122 ? true : false;
    if (i === 0) continue;
    isFirstCup = isFirstCup && 97 <= word.charCodeAt(i) && word.charCodeAt(i) <= 122 ? true : false;
  }
  return areAllCaps || areAllLow || isFirstCup;
};

//LC#0521 Diff:Easy Longest Uncommon Subsequence I
/*
Given two strings, you need to find the longest uncommon subsequence of the two strings. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other string. Find the longest sequence of chars in one of the strings, this sequence should NOT be a subsequence in the other string
A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.
The input will be two strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.
Input: a = "aba", b = "cdc"  Output: 3  Explanation: The longest uncommon subsequence is "aba", because "aba" is a subsequence of "aba", but not a subsequence of the other string "cdc". Note that "cdc" can be also a longest uncommon subsequence.
Input: a = "aaa", b = "bbb"  Output: 3
Input: a = "aaa", b = "aaa"  Output: -1
 Constraints:
Both strings' lengths will be between [1 - 100].
Only letters from a ~ z will appear in input strings.
*/
//speed:
//if a seq of chars is not a subsequence in the other, then skip the whole string.
// leetcode solution
var findLUSlength = function(a, b) {
    // identical strings don't have uncommon subsequence
    if (a === b) return -1;
    // the longer string itself is the longest uncommon subsequence
    else return Math.max(a.length, b.length);
};

//LC#0530 Diff:Easy Minimum Absolute Difference in BST
/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
Input:
   1
    \
     3
    /
   2
Output:
1
Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
Note:
There are at least two nodes in this BST.
This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
 	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:47%  recursion takes lot of space! fyi
// since it is BST, read it from left to right "inorder" traversal... (you are reading in increasing order)
var getMinimumDifference = function(root) {
	var min = Infinity;
	var prev;

	function dfs(n) {
		if(n.left) dfs(n.left);

		if(prev!==undefined) min = Math.min(min, n.val-prev);
		prev = n.val;

		if(n.right) dfs(n.right);
	}
	dfs(root);
	return min;
};

//LC#0532 Diff:Easy K-diff Pairs in an Array
/*
Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.
Input: [3, 1, 4, 1, 5], k = 2      Output: 2      (1, 3) and (3, 5).   Although we have two 1s in the input, we should only return the number of unique pairs.
Input:[1, 2, 3, 4, 5], k = 1       Output: 4      (1, 2), (2, 3), (3, 4) and (4, 5).
Input: [1, 3, 1, 5, 4], k = 0      Output: 1      (1, 1)
Note:
The pairs (i, j) and (j, i) count as the same pair.
The length of the array won't exceed 10,000.
All the integers in the given input belong to the range: [-1e7, 1e7].
*/
//speed:50%
var findPairs = function(nums, k) {
	if(k < 0) return 0;
	let hm = {};
	for(x of nums) hm[x] = hm[x] + 1 || 1;

	let count = 0;
	for(y of Object.keys(hm)) {
		if(k===0 && hm[y]>1) ++count;   //so if the array has 1,1,1,1  count this as (1,1)
		else if (k!==0 && hm[+y+k]!==undefined) ++count;  //genuine pair.  y is a key, so it is a string, convert it to number by using +y
	}
	return count;
}

//LC#0538 Diff:Easy Convert BST to Greater Tree
/*
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.
Example:
Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
					20     13
Return a root node.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//Since it is a BST, You just need to read the tree backwards and in order.
//speed:50%
var convertBST = function (root) {
	if(!root) return root;

	let sum = 0;
	function dfs(n) {
		if(n.right) dfs(n.right);

		sum = sum + n.val;
		n.val = sum;

		if(n.left) dfs(n.left);
	}
	dfs(root);
	return root;
};
//leetcode iterative solution: uses less memory (kind of)
var convertBST = function (root) {
	let sum = 0;
	let n = root, arr=[];
	while(n!==null || arr.length>0) {
		if(n!==null) {
			arr.push(n);
			n = n.right;
		}else {
			n = arr.pop();
			sum+=n.val;
			n.val = sum;
			n = n.left;
		}
	}
	return root;
}

//LC#0541 Diff:Easy Reverse String II
/*
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the others as original. Return the new string.
Input: s = "abcdefg", k = 2   Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
*/
//speed:70% memory:96%
var reverseStr = function (s, k) {
	let final = '';
	for(i=0; i<s.length; i=i+2*k) {
		let y = s.slice(i,i+2*k);     //slice(1,5) gives you 1,2,3,4
		final += y.slice(0,k).split('').reverse().join('') + y.slice(k,2*k);    //reversed first half + original second half
	}
	return final;
};

//LC#0543 Diff:Easy Diameter of Binary Tree
/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
Given a binary tree
          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3]. Return a number.
Note: The length of path between two nodes is represented by the number of edges between them.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
Basically, find the longest distance between certain two leaf nodes. So, for each node, find the left longest distance to a leaf node, and right longest distance to a leaf node. Then visit THIS node and count the distances
*/
//speed:36%, memory:5%
var diameterOfBinaryTree = function (root) {
	let max = 0;
	function dfs(n) {
		if(n===null) return 0;

		let leftDistToLeaf = dfs(n.left);
		let righDistToLeaf = dfs(n.right);

		let sumOfDist = leftDistToLeaf + righDistToLeaf;
		max = Math.max(max, sumOfDist);

		//i.e for this node, the longest distance to ANY leaf is math.max(left,right), you then add 1 to count this node, and return to parent.
		return Math.max(leftDistToLeaf, righDistToLeaf) + 1;
	}
	dfs(root);
	return max;
};

//LC#0551 Diff:Easy Student Attendance Record I
/*
You are given a string representing of an attendance record for a student. The record only contains the following three characters:
'A' : Absent.     'L' : Late.       'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) AND there are no more than two continuous 'L' (late).
You need to return whether the student could be rewarded according to his attendance record. Return boolean.
Input: "PPALLP"   Output: True
Input: "PPALLL"   Output: False
Input: "PPPPLP"   Output: True
*/
//speed:35%
var checkRecord = function (s) {
	let notMoreThan2As = s.match(/A/g) === null || s.match(/A/g).length === 1;
	let thereAreNo3LsInARow = s.split('LLL').length === 1;   //if there is not a single LLL then s.split() will just be an array of 1: [s itself]
	return notMoreThan2As && thereAreNo3LsInARow ;
};
var checkRecord = function (s) {
	let aCount = 0;
	let lCount = 0;
	for(i=0;i<s.length;i++){
		if(s[i]==='A') if(++aCount===2) return false;

		if(s[i]==='L') {      //you need these brackets, you can't do if() if() else   the else will go to the second if and not the first if...
 			if(++lCount===3) return false
		} else lCount=0;
	}
	return true;
}
//leetcode solution
var checkRecord = function (s) {
	return !/(A.*A|LLL)/.test(s);
};
//Configurable reward criteria:
var checkRecord = function (s, a = 2, l = 3) {
	return s.split('A').length - 1 < a && !~s.indexOf('L'.repeat(l));
	return !new RegExp(`((A.*){${a}}|L{${l}})`).test(s);
};

//LC#0557 Diff:Easy Reverse Words in a String III
/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
Input: "Let's take LeetCode contest"   Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/
//speed:95% memory:96%
var reverseWords = function (s) {
	let arr = s.split(' ');
	arr = arr.map(x => x.split('').reverse().join(''));
	return arr.join(' ');
};
//the long way: speed:36%
var reverseWords = function (s) {
	let ret = '', i=0;
	while(i<s.length){
		j = i;
		while(j<s.length && s[j]!==' ') ++j;   //j is now at the space or at s.length
		i = j+1;  //move i to j+1, i.e the start of the next word.
		while(--j>=0 && s[j]!==' ') ret+=s[j];  //right this current word
		if(i<s.length) ret+= ' '; //add a space before you right the next word backwards
	}
  return ret;
}
//leetcode brilliant solution of the long way of doing it
var reverseWords = function (s) {
	let res = '';
	let word = '';
	for (let c of s) {
		if (c === ' ') {
			res += word + c;
			word = '';
		} else {
			word = c + word;
		}
	}
	return res + word;
};

//LC#0559 Diff:Easy Maximum Depth of N-ary Tree
/*
Given a n-ary tree, find its maximum depth. Return a number.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Constraints: The depth of the n-ary tree is less than or equal to 1000.  && The total number of nodes is between [0, 10^4].

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value
Input: root = [1,null,3,2,4,null,5,6]     Output: 3
		   1
	 3   2  4
	5 6
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]     Output: 5
								 1
		2        3          4            5
					6     7	      8          9  10
							 11       12        13
							 14
function Node(val,children) {
 this.val = val;
 this.children = children;  //an array for JS i think
};
Basically, find the height of the tree. So use BFS and count layers.
*/
//speed:53%, memory:30%
var maxDepth = function (root) {
	if(!root) return 0;

	let layers = [root,'X'], count = 0;
	while(layers.length > 1){
		let n = layers.shift();  //this is very slow!

		if(n!=='X'){
			if(n.children.length>0) layers.push(...n.children);
		} else {
			++count;
			layers.push('X');
		}
	}
	return count+1;
};
//leetcode DFS instead of BFS
var maxDepth = function (root) {
	if (!root) return 0;

	function dfs(node) {
		if (!node) return;

		let maxDepth = 0;
		for (let child of node.children) {
			const childDepth = dfs(child);
			maxDepth = Math.max(maxDepth, childDepth);
		}

		return maxDepth + 1;
	}
	return dfs(root);
};
//dfs: if root is null return 0 ELSE return max of its children's maxDepth + 1
var maxDepth = function (root) {
	return !root ? 0 : root.children.reduce((r, n) => Math.max(r, maxDepth(n)), 0) + 1;
};

//LC#0561 Diff:Easy Array Partition I
/*
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible. Return a number.
Input: [1,4,3,2]   Output: 4
		Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].
*/
//basically, try to make pairs where the weak guy is not so weak after all... so sort the array, pick every alternate number to be your weak guy. Every other alternate number is that weak guy's strong guy.
//speed:45%
var arrayPairSum = function (nums) {
	nums.sort((x,y)=>x-y);
	let sum = 0;
	for(i=0;i<nums.length;i=i+2){
		sum+=nums[i];
	}
	return sum;
};

//LC#0563 Diff:Easy Binary Tree Tilt
/*
Given a binary tree, return the tilt of the whole tree. (return one single number)
The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.
The tilt of the whole tree is defined as the sum of all nodes' tilt.
Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0        Tilt of node 3 : 0         Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
Note:
The sum of node values in any subtree won't exceed the range of 32-bit integer.
All the tilt values won't exceed the range of 32-bit integer.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:46% memory:14%
var findTilt = function (root) {
	if(!root) return 0;

	let sumOfTilts = 0;
	function dfs(n) {
		if(!n) return 0;

		let leftSumOfValues = n.left ? dfs(n.left) : 0;   //if there is no left, then sumOfValues from the left is zero.
		let rightSumOfValues = n.right ? dfs(n.right) : 0;
		let tiltOfThisnode = Math.abs(leftSumOfValues-rightSumOfValues);
		sumOfTilts += tiltOfThisnode;

		return n.val + leftSumOfValues + rightSumOfValues;   //to the parent: return this.val + left and right sums of THIS
	}
	dfs(root);

	return sumOfTilts;
};

//LC#0566 Diff:Easy Reshape the Matrix
/*
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data. You are given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
nums =
[[1,2],
 [3,4]]
r = 1, c = 4
Output: [[1,2,3,4]]

nums =
[[1,2],
 [3,4]]
r = 2, c = 4
Output:
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
Note:
The height and width of the given matrix is in range [1, 100].
The given r and c are all positive.
It is not mentioned in the question, BUT it is implicit: every cell in the reshaped matrix must have a value in it.
*/
//speed:18%  O(r*c)
var matrixReshape = function (nums, r, c) {
	if(nums.length < 1) return nums;  //meaning nums is []
	if(r*c !== nums.length*nums[0].length) return nums;  //count the number of elements in both sides, they have to be equal.

	let final = new Array(r).fill(0).map(x => new Array(c));  //you have to put a fill(0), or else the map(x => ) won't work, x will be undefined
	let b = arrStruct(nums);
	for(k=0;k<r;k++){   //these cannot be i and j, WILL not WORK.
		for(m=0;m<c;m++){
			final[k][m] = b.getNext();  //this is O(1)
		}
	}

	function arrStruct(a) {
		let i=0; j=0;
		return {
			getNext() {
				if(i === -1 && j === -1) return 'end of matrix';

				retValue = a[i][j];
				++j;    //move to next column
				if(j===a[0].length) {  //you have reached the last column
					++i;    //move to the next row
					j=0;    //reset j to the first column

					if (i===a.length) i=j=-1; //end of the matrix
				}
				return retValue;
			}
		}
	}

	return final;
};
//leetcode simple solution
var matrixReshape = function (nums, r, c) {
	if (r * c !== nums.length * nums[0].length) return nums;

	let flat = nums.reduce((acc, x) => acc.concat(x), []);   //flatten the input

	let final = new Array(r).fill(0).map(x => new Array(c));
	let k = -1;
	for (i = 0; i < r; i++) {
		for (j = 0; j < c; j++) {
			final[i][j] = flat[++k];
		}
	}
	return final;
}
// leetcode brilliant answer
var matrixReshape = function (nums, h, w) {
	const m = nums.length, n = nums[0].length;
	if (m * n !== h * w) return nums;
	const res = [];
	for (let i = 0; i < m * n; i++) {  //brilliant way of looping through an m*n matrix !!
		let r = Math.floor(i / w);   //row num
		if (!res[r]) res.push([]);
		res[r].push(nums[Math.floor(i / n)][i % n]);
		//access 31st element in the old matrix and now insert it as the 31st element into the new matrix...  (number or elements in both matrix is the same.)
	}
	return res;
};
//leetcode solution
var matrixReshape = function (nums, r, c) {
	const size = nums.length * nums[0].length;
	if (r * c !== size) return nums;
	else if (r === 1 && c === size) return [[].concat(...nums)];
	nums = [].concat(...nums);
	for (let i = 0; i < r; i++) {
		nums.push(nums.splice(0, c));  //cut out the first/second "c" elements
	}
	return nums;
}

//LC#0572 Diff:Easy Subtree of Another Tree
/*
Given two non-empty binary trees s and t, check if t is a sub-tree of s. Check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
Given tree s:
     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Given tree s:
     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//i think, read it in order and store inside an array. Check if one array is a subset of another array.
//nope, anyway this is a subarray function in case needed later
function isSubArray(arr1, arr2) {  // check if arr2 is a subArray of arr1
	let j = 0; let startOfMatch = -1;
	for (i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[j]) {
			if (startOfMatch === -1) startOfMatch = i;
			++j
			if (j === arr2.length) return true;
		} else {
			j = 0;
			if (startOfMatch > -1) i = startOfMatch; //the ++i in the for, will it move to the next char
			startOfMatch = -1;
		}
	}
	return false;
}

//leetcode solution:
var isSubtree = function (s, t) {
	if (!s) return !t;
	return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);

	function isEqual(n1, n2) {
		if (!n1 || !n2) return !n1 && !n2;   //if one of them is null, return true only if both are null, else return false
		if (n1.val !== n2.val) return false;
		return isEqual(n1.left, n2.left) && isEqual(n1.right, n2.right);
	}
};

//leetcode solution:
var isSubtree = function (s, t) {
	let strS = preorder(s, true);
	let strT = preorder(t, true);
	return strS.indexOf(strT) > -1;

	// to produce the string from preorder traversal of the tree
	function preorder(root, left) {
		if (!root) {
			// if the current node is null and it's a left node of its parent
			return left ? 'lnull' : 'rnull';
		}
		return `#${root.val} ${preorder(root.left, true)} ${preorder(root.right, false)}`;
	}
};



//LC#0575 Diff:Easy Distribute Candies
/*
Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to a brother and sister. Return the maximum number of "kinds" of candies the sister could get. Return a number.
Example 1:
Input: [1,1,2,2,3,3]    Output: 3
Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
The sister has three different kinds of candies.

Input: candies = [1,1,2,3]   Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
The sister has two different kinds of candies, the brother has only one kind of candies.
Note:
The length of the given array is in range [2, 10,000], and will be even.
The number in given array is in range [-100,000, 100,000].
Basically, b and s must get some number of candies, but s must get as many "types" as possible.
*/
//speed:30%
var distributeCandies = function (candies) {
	let hm = {}, count=0;
	for(x of candies) {
		if(!hm[x]) {
			hm[x] = 'thisTypeIsForSister';
			++count;
		}
		if(count===candies.length/2) return count; //at max, the sister gets 1/2 the array, else she will get some subset
	}
	return count;
};
//speed:50% leetcode solution
var distributeCandies = function (candies) {
	return Math.min(new Set(candies).size, candies.length / 2);
};

//LC#0581 Diff:Easy Shortest Unsorted Continuous Subarray
/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too. Return the size of this subarray.
You need to find the shortest such subarray and output its length.
Input: [2, 6, 4, 8, 10, 9, 15]     Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/
//good example: [5,10,60,70,15,20,25,45,90] , the subarray is [60,70,15,20,25,45]
//speed:66%
var findUnsortedSubarray = function (nums) {
	let nums2 = nums.slice(0).sort((x,y)=>x-y);

	for(i=0;i<nums.length;i++){
		if(nums[i]!==nums2[i]) break; // there is a difference from this point on.
	}
	if(i===nums.length) return 0;  //nums2 and nums are exactly the same.
	for(j=nums.length-1;j>0;j--){
		if(nums[j]!==nums2[j]) break; // reading backwards there is a difference from this point on.
	}
	return j-i+1;
};
//leetcode equivalent
const findUnsortedSubarray = nums => {
	nums.slice().sort((a, b) => a - b)
		.reduce((acc, curr, idx) => acc + (curr === nums[idx] ? ' ' : 'x'), '')
		.trim().length;
}
//leetcode brilliant solution
var findUnsortedSubarray = function (nums) {
	let l = 0, r = nums.length - 1, nd = -1, st = 0;
	let min = Infinity, max = -Infinity;

	while (r >= 0) {
		nums[l] >= max ? max = nums[l] : nd = l;
		nums[r] <= min ? min = nums[r] : st = r;
		l++;
		r--;
	}

	return nd - st + 1;
};


//LC#0589 Diff:Easy N-ary Tree Preorder Traversal
/*
Given an n-ary tree, return the preorder traversal of its nodes' values. Return an array of numbers. i.e visit the node, then visit each child in detail before going to the next child.
Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value/
Input: root = [1,null,3,2,4,null,5,6]     Output: [1,3,5,6,2,4]
		   1
	 3   2  4
	5 6
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
								 1
		2        3          4            5
					6     7	      8          9  10
							 11       12        13
							 14
Constraints:
The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 10^4]
Follow up:
Recursive solution is trivial, could you do it iteratively?
Definition for a Node.
function Node(val, children) {
	this.val = val;
	this.children = children;
};
*/
//speed:
var preorder = function (root) {
	if(!root) return [];

	let ret = [];
	function dfs(n) {
		ret.push(n.val);
		for (let i = 0; i < n.children.length; i++) {  //note if you don't put LET i , it errors out !!!!!
			dfs(n.children[i]);
		}
	}
	dfs(root);
	return ret;
};
//speed:50% iterative
var preorder = function (root) {
	if (!root) return [];

	let arr = [root];
	let ret = [];
	while(arr.length>0) {
		let n = arr.pop();
		ret.push(n.val);
		for(let i=n.children.length-1;i>=0;i--){
			//push children in reverse!!! so that you can do pop() and push() instead of shift()/unshift()
			arr.push(n.children[i]);
		}
	}
	return ret;
}

//LC#0590 Diff:Easy N-ary Tree Postorder Traversal
/*
Given an n-ary tree, return the postorder traversal of its nodes' values. Return array of numbers.
Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value/
Input: root = [1,null,3,2,4,null,5,6]     Output: [5,6,3,2,4,1]
		   1
	 3   2  4
	5 6
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
								 1
		2        3          4            5
					6     7	      8          9  10
							 11       12        13
							 14
Constraints:
The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 10^4]
Definition for a Node.
function Node(val, children) {
	this.val = val;
	this.children = children;
};
Recursive solution is trivial, could you do it iteratively?
*/
//speed:
var postorder = function (root) {
	if (!root) return [];

	let ret = [];
	function dfs(n) {
		for (child of n.children) {
			dfs(child);
		}
		ret.push(n.val);
	}
	dfs(root);
	return ret;
};
var postorder = function (root) {
	if (!root) return [];

	let arr = [root];
	let ret = [];
	while(arr.length>0){
		let n = arr.pop();
		ret.push(n.val);
		for(child of n.children) {
			arr.push(child);
		}

	}
	return ret.reverse();
}

//LC#0594 Diff:Easy Longest Harmonious Subsequence
/*
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.
Input: [1,3,2,2,5,2,3,7]    Output: 5    Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Note: The length of the input array will not exceed 20,000.
*/
//leetcode solution:
//Basically find all pairs of n,n+1 numbers in the array, just add up their frequencies. The max freq is the answer.
//since it a subsequence, you don't care about the order of these numbers, n,n+1 just has to exist somewhere in the array.
var findLHS = function (nums) {
	let map = {}; res = 0
	for (let n of nums) map[n] = map[n]+1 || 1;

	for (let n in map)
		if (map[+n + 1])
			res = Math.max(res, map[n] + map[+n + 1])

	return res
};

//LC#0595 Diff:Easy SQL Big Countries
/*
There is a table World
+-----------------+------------+------------+--------------+---------------+
| name            | continent  | area       | population   | gdp           |
+-----------------+------------+------------+--------------+---------------+
| Afghanistan     | Asia       | 652230     | 25500100     | 20343000      |
| Albania         | Europe     | 28748      | 2831741      | 12960000      |
| Algeria         | Africa     | 2381741    | 37100000     | 188681000     |
| Andorra         | Europe     | 468        | 78115        | 3712000       |
| Angola          | Africa     | 1246700    | 20609294     | 100990000     |
+-----------------+------------+------------+--------------+---------------+
A country is big if it has an area bigger than 3 million square km OR a population of more than 25 million.
Write a SQL solution to output big countries' name, population and area.
For example, according to the above table, we should output:
+--------------+-------------+--------------+
| name         | population  | area         |
+--------------+-------------+--------------+
| Afghanistan  | 25500100    | 652230       |
| Algeria      | 37100000    | 2381741      |
+--------------+-------------+--------------+
*/
//speed:100%
select name, population, area
from World
where area > 3000000 or population > 25000000

//LC#0596 Diff:Easy SQL Classes More Than 5 Students
/*
There is a table "courses" with columns: student and class
Please list out all classes which have more than or equal to 5 students.
For example, the table:
+---------+------------+
| student | class      |
+---------+------------+
| A       | Math       |
| B       | English    |
| C       | Math       |
| D       | Biology    |
| E       | Math       |
| F       | Computer   |
| G       | Math       |
| H       | Math       |
| I       | Math       |
+---------+------------+
Should output:
+---------+
| class   |
+---------+
| Math    |
+---------+
Note:
The students should not be counted duplicate in each course.
*/
//speed:100%
select classs
from courses
group by classs
having count(distinct student)>=5    (count(*) is not enough)

//LC#0598 Diff:Easy Range Addition II
/*
Given an m * n matrix M initialized with all 0's and given an array of several update operations.
Operations are represented by a 2D array, and each operation is represented by an array with two positive integers - a and b, which means M[i][j] should be added by one for all 0 <= i < a and 0 <= j < b.
You need to count and return the number of maximum integers in the matrix after performing all the operations.

Input: m = 3, n = 3, operations = [[2,2],[3,3]]
Output: 4
Explanation:
Initially, M =
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]

After performing [2,2], M =
[[1, 1, 0],
 [1, 1, 0],
 [0, 0, 0]]

After performing [3,3], M =
[[2, 2, 1],
 [2, 2, 1],
 [1, 1, 1]]

So the maximum integer in M is 2, and there are four of it in M. So return 4.
Note:
The range of m and n is [1,40000].
The range of a is [1,m], and the range of b is [1,n].
The range of operations size won't exceed 10,000.
Input is two numbers and a 2d matrix, return a number.
*/
//basically find that common rectangle/square in the top left of this huge matrix, that ALL these operations will apply on. You need the length*breadth of this reactangle..
//speed:21%
var maxCount = function (m, n, ops) {
	//find the min row and min col of all the ops [r,c] pairs...
	let minRow = m, minCol = n;
	//no need to initialize to Infinity. You can use m and n as the max. If ops is empty array, then return m*n..
	for(op of ops) {
		minRow = Math.min(minRow, op[0]);
		minCol = Math.min(minCol, op[1]);
	}
	return minRow * minCol;
};

//LC#0599 Diff:Easy Minimum Index Sum of Two Lists
/*
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
Input: ["Shogun", "Tapioca Express", "Burger King", "KFC"]    ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Input: ["Shogun", "Tapioca Express", "Burger King", "KFC"]         ["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists.
Return an array of strings.
*/
//speed:50%
var findRestaurant = function (list1, list2) {
	let smallerList = list1.length < list2.length ? list1 : list2;  //make the hm from the smaller list
	let hm = {}
	for(i=0;i<smallerList.length;i++) hm[smallerList[i]] = i;   //give each string a rank 0 to n

	let largerList = smallerList===list1 ? list2 : list1;
	let min = Infinity;
	let resultantMap = {}
	for(j=0;j<largerList.length;j++){
		if(hm[largerList[j]]!==undefined){   //if it exists in hm and index is zero or greater (i.e the smaller list)
			if(hm[largerList[j]] + j <= min) {   //sum of index in two arrays, <= because there could be many results
				min = hm[largerList[j]] + j;
				if (resultantMap[min]) resultantMap[min].push(largerList[j]);    //each value is an array
				else resultantMap[min] = [largerList[j]];  //initialize the array
			}
		}
	}
	let minIndex = Object.keys(resultantMap).map(x => +x).sort()[0];
	return resultantMap[minIndex];
};
//leetcode similar solution lesser code
const findRestaurant = (list1, list2) => {
	let [seen, commons, minVal] = [{}, [], Infinity];
	for (let i = 0; i < list1.length; i++) seen[list1[i]] = i;
	for (let i = 0; i < list2.length; i++) {
		if (seen[list2[i]] !== undefined) {
			const idx = seen[list2[i]] + i;
			if (idx < minVal) minVal = idx, commons = [];  //if it is lesser start a new array
			if (idx === minVal) commons.push(list2[i]);   //else just append!!  much shorter
		}
	}
	return commons;
};

//LC#0605 Diff:Easy Can Place Flowers
/*
Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.
Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule. Return Boolen.

Input: flowerbed = [1,0,0,0,1], n = 1     Output: True
Input: flowerbed = [1,0,0,0,1], n = 2     Output: False
Note:
The input array won't violate no-adjacent-flowers rule.
The input array size is in the range of [1, 20000].
n is a non-negative integer which won't exceed the input array size.
*/
//speed:50%
var canPlaceFlowers = function (fb, n) {
	let len = fb.length;

	if(len===1 && fb[0]===0 && n===1) return true;  //vv special case

	for(i=0;i<len;i++){
		if(fb[i]===1) continue;   //cant do anything in this plot

		if(i===0 && len>1 && fb[i+1]===0) {
			fb[i] = 1; --n; //plant it
		}

		if(i>0 && i<len-1){
			if(fb[i-1]===0 && fb[i+1]===0) {
				fb[i] = 1; --n; //plant it
			}
		}

		if(i===len-1 && len>1 && fb[i-1]===0) {
			fb[i] = 1; --n;  //plant it
		}
	}
	return n<=0;
};
//leetcode similar but much better code!
var canPlaceFlowers = function (fb, n) {
	for (let i = 0; i < fb.length && n !== 0; i++) {
		if (fb[i] === 0 && fb[i - 1] !== 1 && fb[i + 1] !== 1) {
			n--;
			i++;  //move it by one! no need to mutate the array
		}
	}
	return n === 0;
};

//LC#0606 Diff:Easy Construct String from Binary Tree
/*
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way. Return a string.
The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.
Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /
  4
Output: "1(2(4))(3)"
Explanation: Originally it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs.
Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4
Output: "1(2()(4))(3)"
Explanation: Almost the same as the first example, except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
//Basically if right exists and left is null, add ()
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:13%
var tree2str = function (t) {
	if(!t) return '';

	function dfs(n) {
		if(!n.left && !n.right) return '(' + n.val + ')';

		//only left is missing
		if(!n.left) return '(' + n.val + '()' + dfs(n.right) + ')';

		//only right is missing
		if(!n.right) return '(' + n.val + dfs(n.left) + ')'

		//left and right exist
		return '(' + n.val + dfs(n.left) + dfs(n.right) + ')';
	}
	let ret = dfs(t);
	return ret.slice(1,ret.length-1);  //remove the first ( and the last ) from the string.
};
//iterative solution : no one on leetcode has solved it iteratively.....
//leetcode similar dfs, no need to slice in the end
var tree2str = function (t) {
	if (!t) return '';
	if (!t.left && !t.right) return `${t.val}`;
	if (!t.right) return `${t.val}(${tree2str(t.left)})`;
	return `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`;
};
//speed:89% another one of mine
var tree2str = function (t) {
	function dfs(n) {
		if (!n) return '';
		if (!n.left && !n.right) return n.val.toString();

		let s = '';
		s += n.val;
		s += '(' + dfs(n.left) + ')';
		if (n.right) s += '(' + dfs(n.right) + ')';
		return s;
	}
	return dfs(t);
}

//LC#0617 Diff:Easy Merge Two Binary Trees
/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. Return the root of the new tree.
You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
Note: The merging process must start from the root nodes of both trees.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:30%  wtf! got it in first shot:)
var mergeTrees = function (t1, t2) {

 function merge(n1,n2){
	 if(!n1 && !n2) return null

	 let mergedSum =  (n1? n1.val : 0) + (n2? n2.val : 0);

	 //you want to explicitly send nulls because you might be completely in a null part of one tree, so just keep passing nulls down the dfs, while the other tree still has valid nodes on it's side.
	 let mergedLeft = merge(n1?n1.left:null,  n2?n2.left:null);
	 let mergedRight = merge(n1?n1.right:null,  n2?n2.right:null);

	 return new TreeNode(mergedSum, mergedLeft, mergedRight)
 }
 let final = merge(t1,t2);
 return final;
};
//leetcode similar solution
var mergeTrees = function (t1, t2) {
	if (t1 === null || t2 === null) return t1 || t2;  //i.e if t1 is null, return t2 and vice versa.

	const root = new TreeNode(t1.val + t2.val);
	root.left = mergeTrees(t1.left, t2.left);
	root.right = mergeTrees(t1.right, t2.right);
	return root;
};

//LC#0620 Diff:Easy SQL Not Boring Movies
/*
X city opened a new cinema, many people would like to go to this cinema. The cinema also gives out a poster indicating the movie’s ratings and descriptions.
Please write a SQL query to output movies with an odd numbered ID and a description that is not 'boring'. Order the result by rating descending.
For example, table "cinema":
+---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   1     | War       |   great 3D   |   8.9     |
|   2     | Science   |   fiction    |   8.5     |
|   3     | irish     |   boring     |   6.2     |
|   4     | Ice song  |   Fantacy    |   8.6     |
|   5     | House card|   Interesting|   9.1     |
+---------+-----------+--------------+-----------+
For the example above, the output should be:
+---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   5     | House card|   Interesting|   9.1     |
|   1     | War       |   great 3D   |   8.9     |
+---------+-----------+--------------+-----------+
*/
//speed:22%
// you can also use mod(id,2)!=0
select *
from cinema
where id%2=0 and description not like '%boring%'
order by rating desc

//LC#0627 Diff:Easy SQL Swap Salary
/*
Given a table salary, such as the one below, that has m=male and f=female values. Swap all f and m values (i.e., change all f values to m and vice versa) with a single update statement and no intermediate temp table.
Note that you must write a single update statement, DO NOT write any select statement for this problem.
Example:
| id | name | sex | salary |
|----|------|-----|--------|
| 1  | A    | m   | 2500   |
| 2  | B    | f   | 1500   |
| 3  | C    | m   | 5500   |
| 4  | D    | f   | 500    |
After running your update statement, the above salary table should have the following rows:
| id | name | sex | salary |
|----|------|-----|--------|
| 1  | A    | f   | 2500   |
| 2  | B    | m   | 1500   |
| 3  | C    | f   | 5500   |
| 4  | D    | m   | 500    |
*/
//speed:50%
update salary
SET sex = IF(sex = 'm', 'f', 'm');
//no where clause

//LC#0628 Diff:Easy Maximum Product of Three Numbers
/*
Given an integer array, find three numbers whose product is maximum and output the maximum product.
Input: [1,2,3]    Output: 6
Input: [1,2,3,4]  Output: 24
The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
*/
//speed:74%
var maximumProduct = function (nums) {
	let max1 = -Infinity;
	let max2 = -Infinity;
	let max3 = -Infinity;
	let min2 = Infinity;
	let min1 = Infinity;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max1) {
			[max1, max2, max3] = [nums[i], max1, max2];  //first max3 is set to max2...
		} else if (nums[i] > max2) {
			[max2, max3] = [nums[i], max2];
		} else if (nums[i] > max3) {
			max3 = nums[i];
		}

		//just in case the two mins are highly negative
		if (nums[i] < min1) {
			[min2, min1] = [min1, nums[i]];
		} else if (nums[i] < min2) {
			min2 = nums[i];
		}
	}
	return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};
//leetcode with sorting
var maximumProduct = function (nums) {
	nums.sort((a, b) => a - b);
	return Math.max(nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3], nums[0] * nums[1] * nums[nums.length-1],)
};

//LC#0633 Diff:Easy Sum of Square Numbers
/*
Given a non-negative integer c, your task is to decide whether there are two integers a and b such that a^2 + b^2 = c.
Input:5  Output: True      Explanation: 1*1 + 2*2 = 5
Input:3  Output: False
Input:4  Output: True     0*0 + 2*2
*/
//speed:90% leetcode solution, similar to the idea that i guessed
var judgeSquareSum = function (c) {
	if (c < 0) return false;

	let left = 0;
	let right = Math.floor(Math.sqrt(c));
	while (left <= right) {
		sum = left * left + right * right;
		if (sum === c) return true;
		else if (sum < c) ++left;
		else --right;
	}
	return false;
};
//use a set, this might be slower as it goes needs to go through a lot more numbers.. depends on c
var judgeSquareSum = function (c) {
	if (c < 0) return false;

	let s = new Set();
	for (i = 0; i <= Math.floor(Math.sqrt(c)); i++){
		s.add(i*i);
		if(s.has(c - i*i)) return true;
	}
	return false;
}

//LC#0637 Diff:Easy Average of Levels in Binary Tree
/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
Definition for a binary tree node.
function TreeNode(val, left, right) {
		this.val = (val===undefined ? 0 : val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
}
*/
//speed:
var averageOfLevels = function (root) {
	let arr = [root,"X"];

	let arrForAvg = [];
	let result = [];
	while(arr.length>1){
		let n = arr.pop();
		if(n!=='X'){
			arrForAvg.push(n.val);
			if(n.left) arr.push(n.left);
			if(n.right) arr.push(n.right);
		} else {
			result.push(  arrForAvg.reduce((sum,x)=> sum+=x, 0)  / arrForAvg.length  );  //the avg of the array
			arrForAvg = [];
			arr.push('X');
		}
	}
	return result;
};
//leetcode bfs solution
var averageOfLevels = function (root) {
	const averages = [];
	const queue = [root];
	while (queue.length) {
		let sum = 0;
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const node = queue.shift();
			sum += node.val;
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		averages.push(sum / size);
	}
	return averages;
};
//leetcode dfs solution
var averageOfLevels = function (root) {
	let results = [];
	const traverse = (root, depth) => {
		if (root) {
			if (results[depth]) {
				results[depth][0] += root.val;
				results[depth][1] += 1;
			}
			else {
				results[depth] = [root.val, 1]
			}
			[root.left, root.right].forEach((e) => traverse(e, depth + 1));
		}
	};
	traverse(root, 0);
	return results.map(([sum, total]) => {
		return sum / total;
	})
};
//leetcode dfs
var averageOfLevels = function (root, level = 0, counts = []) {
	if (!root) return;
	counts[level] = counts[level] || { sum: 0, nodes: 0 };
	counts[level].sum += root.val;
	counts[level].nodes++;
	averageOfLevels(root.left, level + 1, counts);
	averageOfLevels(root.right, level + 1, counts);
	return level || counts.map(x => x.sum / x.nodes);
};

//LC#0643 Diff:Easy Maximum Average Subarray I
/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.
Input: [1,12,-5,-6,50,3], k = 4      Output: 12.75
	Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].
*/
//speed:
//classic sliding window
var findMaxAverage = function(nums, k) {
	let max = -Infinity;
	let sum = 0, i = 0;
	while(i<k) {sum+=nums[i], ++i};  //get the first k numbers
	max = Math.max(max,sum/k);

	for(;i<nums.length;i++){  //i starts from k
		sum = sum + nums[i] - nums[i-k];  //sliding window
		max = Math.max(max,sum/k);
	}
	return max;
};

//LC#0645 Diff:Easy Set Mismatch
/*
The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.
Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.
Input: nums = [1,2,2,4]    Output: [2,3]
The given array size will in the range [2, 10000].
The given array's numbers won't have any order. (it is not a sorted array)
*/
//speed:65%
var findErrorNums = function(nums) {
    const n = nums.length;
    const set = new Set();
    const gauss = (n * (n + 1)) / 2;

    let sum = 0;
    let dup;
    for (let num of nums) {
        if (set.has(num)) dup = num;
        set.add(num);
        sum += num;
    }
    return [dup, gauss-(sum-dup)]
};
//leetcode brilliant solution
const findErrorNums = (nums) => {
    let output = []
    nums.forEach((x,i) => {
				let idx = Math.abs(x)-1
				// If you see a number x, cross off the index x-1 as seen (make the number negative)
				if(nums[idx]>=0) nums[idx] = -nums[idx]
				else output.push(idx+1)  //this number has already been flagged before
    })
    for(let i = 0; i < nums.length; i++){
			if(nums[i] > -1){
				output.push(i+1)
				break
			}
    }
    return output
};
//leetcode solution using swaps?!
const findErrorNums = (nums) => {
	let i = 0
	while (i < nums.length) {
		if (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
			const temp = nums[i]
			nums[i] = nums[nums[i] - 1]
			nums[temp - 1] = temp
		} else {
			i++
		}
	}
	for (i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			return [nums[i], i + 1]
		}
	}
}

//LC#0653 Diff:Easy Two Sum IV - Input is a BST
/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.
Input:
    5
   / \
  3   6
 / \   \
2   4   7
Target = 9
Output: True
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:25%   you do traverse through ALL the nodes every single time because of flag and recursive.
var findTarget = function(root, target) {
	if(!root) return false;
	let flag = false;

	let hm = {};
	function dfs(n){
		if(hm[target-n.val]) flag=true;

		hm[n.val] = true;
		if(n.left) dfs(n.left);
		if(n.right) dfs(n.right);
	}
	dfs(root);
	return flag;
};
//speed: dfs done iteratively to exit as soon as you find a match
var findTarget = function(root, target) {
	if(!root) return false;

	let hm = {}, flag = false;   //try to start using - new Set(); set.add(), set.has()

	let arr = [root];
	while(arr.length>0){
		let n = arr.pop();

		if(hm[target-n.val]) {flag=true; break;} //break out of the while right now
		hm[n.val] = true;

		if(n.right) arr.push(n.right);
		if(n.left) arr.push(n.left);  //so left will be popped first...
	}
	return flag;
}
//leetcode better dfs
const findTarget = (root, k, map = {}) => {
	if (!root) return false
	if (k - root.val in map) return true
	map[root.val] = 1
	return findTarget(root.left, k, map) || findTarget(root.right, k, map)
};

//LC#0657 Diff:Easy Robot Return to Origin
/*
There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.
Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
Input: "UD"    Output: true
Input: "LL"    Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
*/
//speed:
var judgeCircle = function(moves) {
	let uCount=0,dCount=0,lCount=0,rCount = 0;
	for(c of moves) {
		if(c==='L') ++lCount;
		if(c==='R') ++rCount;
		if(c==='D') ++dCount;
		if(c==='U') ++uCount;
	}
	return ((lCount===rCount) && (dCount===uCount));
};
//leetcode solution: use only two counters horizontal and vertical, do +1 for up and -1 for down. See if hr and vt are both zero by the end of it.

//LC#0661 Diff:Easy Image Smoother
/*
Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself (count the cell itself too). If a cell has less than 8 surrounding cells, then use as many as you can.
Return a 2D matrix.
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
Note:
The value in the given matrix is in the range of [0, 255].
The length and width of the given matrix are in the range of [1, 150].
*/
//speed:95%
var imageSmoother = function(M) {
	let r = M.length;
	if(M.length===0) return M;   // M is [] invalid input
	let c = M[0].length;

	let X = new Array(r).fill(0).map(x => new Array(c));
	for(i=0;i<r;i++){
		for(j=0;j<c;j++){
			X[i][j] = smoothen(i,j);
		}
	}
	return X;

	function smoothen(i,j){
		let sum = M[i][j], cellCount = 1;  //start by counting this cell

		if(i-1>=0){   //the three cells in the row above
			sum+=M[i-1][j]; ++cellCount;
			if(j-1>=0) {sum+=M[i-1][j-1]; ++cellCount;}
			if(j+1<c) {sum+=M[i-1][j+1]; ++cellCount;}
		}
		if(i+1<r){    //the three cells in the row below
			sum+=M[i+1][j]; ++cellCount;
			if(j-1>=0) {sum+=M[i+1][j-1]; ++cellCount;}
			if(j+1<c) {sum+=M[i+1][j+1]; ++cellCount;}
		}
		if(j-1>=0) {sum+=M[i][j-1]; ++cellCount;}  //cell to the left
		if(j+1<c) {sum+=M[i][j+1]; ++cellCount;}   //cell to the right

		return Math.floor(sum/cellCount);
	}
};
//leetcode solution
var imageSmoother = function(M) {
    let rows = M.length, cols = M[0].length
		let ret = new Array(rows).fill(0).map(_ => new Array(cols).fill(0))

		const isValid = (r, c, rows, cols) =>  r < rows && r >= 0 && c < cols && c >= 0

    for(let r = 0; r < rows; ++r) {
			for(let c = 0; c < cols; ++c) {
				let count = 0
				for(let x of [-1, 0, 1])
						for(let y of [-1, 0, 1])
								if(isValid(r + x, c + y, rows, cols)) {
										count++
										ret[r][c] += M[r + x][c + y]
								}
				ret[r][c] = Math.floor(ret[r][c] / count)
			}
    }
    return ret
}

//LC#0665 Diff:Easy Non-decreasing Array
/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element. i.e can you convert it to an EVER increasing array, by changing just 1 element.
We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
Input: [4,2,3]   Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Input: [4,2,1]  Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.
Input: [3,4,2,3] Output: false  4>2 but you can't replace 4 with any x where 3<x<2 ... not possible so false
Input: [1,3,2] Output: true
Input: [2,3,3,2,4]  Output:true
*/
//speed:33%   leetcode solution
var checkPossibility = function(nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i-1]) {
      if (i-2 >= 0 && nums[i] < nums[i - 2]) {   //example:[4,2,3] i is at 3
        nums[i] = nums[i - 1];
      }
      count++;
    }
    if (count > 1) return false;
  }
  return true;
};

//LC#0669 Diff:Easy Trim a Binary Search Tree
/*
Given a binary search tree and the lowest and highest boundaries as L and R, trim the tree so that all its elements lies in [L, R] (R >= L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree. I.e the value of every element should be between L and R (included)
Input:
    1
   / \
  0   2
  L = 1
  R = 2
Output:
    1
      \
       2
Input:
    3
   / \
  0   4
   \
    2
   /
  1
  L = 1
  R = 3
Output:
      3
     /
   2
  /
 1
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:
var trimBST = function(root, L, R) {

	function dfs(n){
		if(!n) return null;
		if(n.val<L) return dfs(n.right);  //everything to the left of n is going to be lower than L... ignore it
		if(n.val>R) return dfs(n.left);  //everything to right of this node is definitely greater than R, ignore
		else {
			//n is fine, return n as is, but it's left and right need to be DFS'ed
			n.left = dfs(n.left);
			n.right = dfs(n.right);
			return n;
		}
	}
	return dfs(root)
};
//leetcode similar solution
var trimBST = function(root, L, R) {
		if (!root) return null;

    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);

    if (root.val < L) root = root.right;
    else if (root.val > R) root = root.left;

    return root;
};

//LC#0671 Diff:Easy Second Minimum Node In a Binary Tree
/*
Given a non-empty binary tree consisting of nodes with the non-negative values only, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then n.val = min(n.left.val, n.right.val) always holds.
Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
If no such second minimum value exists, output -1 instead.
Input:
    2
   / \
  2   5
     / \
    5   7
Output: 5     Explanation: The smallest value is 2, the second smallest value is 5.
Input:
    2
   / \
  2   2
Output: -1   Explanation: The smallest value is 2, but there isn't any second smallest value.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
Wrong: it is faster to find the solution via BFS, than DFS. You have to search the whole tree. The second min, could have propogated all the way from some distant child 20 gens down. (because the min came from that same 20 gens down), so min and second min are deep down in the tree.. Example: [1,1,3,1,1,3,4,3,1,1,1,3,8,4,8,3,3,1,6,2,1]
*/
//speed: 30%
var findSecondMinimumValue = function(root) {
	let s = new Set([root.val]);  //need to send it an array.
	//normal BFS
	let min = root.val, secMin = Infinity;
	let stack = [root];
	while(stack.length>0) {
		let n = stack.pop();

		if(n.val!==min && n.val<secMin) secMin = n.val;

		if(n.left && n.right) {
			stack.push(n.left);
			stack.push(n.right);
		}
	}
	return secMin===Infinity? -1 : secMin;
};

//LC#0674 Diff:Easy Longest Continuous Increasing Subsequence
/*
Given an unsorted array of integers, find the length of longest increasing subarray.
Input: [1,3,5,4,7]    Output: 3       Explanation: The longest increasing subarray is [1,3,5]

Input: [2,2,2,2,2]  Output: 1  Explanation: The longest increasing subarray is [2], its length is 1.
Note: Length of the array will not exceed 10,000.
Basically, length of longest increasing subArray (not subsequence), the boundaries are where a[i]>a[i+1]
*/
//speed:40%  I took 45 mins for this :/ :(    40mins of debugging
var findLengthOfLCIS = function(nums) {
	if(nums.length===0) return 0;
	let max=0, count=1;  //start the count with 1
	for(i=1;i<nums.length;i++){    //start from the second element
		if(nums[i]>nums[i-1]) ++count;
		else if(nums[i]<=nums[i-1]) {
			max = Math.max(max, count);
			count=1;
		}
	}
	return Math.max(max, count);  //incase the whole array is ever increasing
};

//LC#0 Diff:Easy Valid Palindrome II
/*
Given a non-empty string s, you CAN delete at most one character. Judge whether you can make it a palindrome.
Input: "aba"     Output: True
Input: "abca"    Output: True  Explanation: You could delete the character 'c'.
Input: "lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul" Output:true
Input: "lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul"
Note: The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/
//speed:50%  I got it half-way, the return isPalindrome() is from leetcode
var validPalindrome = function(s) {
	let i = 0; let j= s.length-1;
	let oneRemoved = false;

	while(i<=j){
		if(s[i]!==s[j]){
			//at the moment they are not equal
			return isPalindrome(s.slice(i+1,j+1)) || isPalindrome(s.slice(i,j));  //i.e remove remove the char on the i side OR remove the char on the j side. The rest must be a palindrome
		}
		++i, --j;
	}
	return true;

	function isPalindrome(a) {	return a===a.split('').reverse().join('');  }
};
//leetcode recursive solution
var validPalindrome = function(s, corrections = 1) {
  let lo = 0;
  let hi = s.length - 1;

  while (lo < hi) {
    if (s[lo] === s[hi]) { lo++; hi--; continue; }

    if (corrections === 0) return false;  //meaning this was called from one of the bottom two... (we already made a correction)

    return validPalindrome(s.slice(lo + 1, hi + 1), 0) || validPalindrome(s.slice(lo, hi), 0);
  }
  return true;
};

//LC#0682 Diff:Easy Baseball Game
/*
You're now a baseball game point recorder.
Given a list of strings, each string can be one of the 4 following types:
Integer: Directly represents the number of points you get in this round.
"+": Represents that the points you get in this round are the sum of the last two valid round's points.
"D": Represents that the points you get in this round are the doubled data of the last valid round's points.
"C": Represents the last valid round's points you get were invalid and should be removed.
Each round's operation is permanent and could have an impact on the round before and the round after.
You need to return the sum of the points you could get in all the rounds.
Input is an array of strings, output is a number.

Input: ["5","2","C","D","+"]    Output: 30
		Explanation:
		Round 1: You could get 5 points. The sum is: 5.
		Round 2: You could get 2 points. The sum is: 7.
		Operation 1: The round 2's data was invalid. The sum is: 5.
		Round 3: You could get 10 points (the round 2's data has been removed, so you get 5*2 extra, so sum 5+5*2 = 15.
		Round 4: You could get 5 + 10 = 15 points. The sum is: 30.
Input: ["5","-2","4","C","D","9","+","+"]   Output: 27
		Explanation:
		Round 1: You could get 5 points. The sum is: 5.
		Round 2: You could get -2 points. The sum is: 3.
		Round 3: You could get 4 points. The sum is: 7.
		Operation 1: The round 3's data is invalid. The sum is: 3.
		Round 4: You could get (-2*2) -4 points (the round 3's data has been removed). The sum is: -1.
		Round 5: You could get 9 points. The sum is: 8.
		Round 6: You could get -4 + 9 = 5 points. The sum is 13.
		Round 7: You could get 9 + 5 = 14 points. The sum is 27.
Note:
The size of the input list will be between 1 and 1000.
Every integer represented in the list will be between -30000 and 30000.
*/
//speed:40%
var calPoints = function(ops) {
	let sum = 0, thisRoundScore;
	let scores = [];  //valid scores
	for(x of ops) {   //you can also use a switch statement along with default
		if(x==='C') {
			thisRoundScore = scores.length<0 ? 0 : -1*scores.pop();  //remove that score permanently from scores
		} else if(x==='D') {
			thisRoundScore = (scores[scores.length-1] || 0)*2;  //add 2x the last valid score (if it exists)
			scores.push(thisRoundScore);
		} else if(x==='+') {
			thisRoundScore = (scores[scores.length-1] || 0) + (scores[scores.length-2] || 0);  //add last two valid scores if they exist.
			scores.push(thisRoundScore);
		} else {
			thisRoundScore = +x;  //convert to number!
			scores.push(thisRoundScore);  //convert to number!
		}
		sum = sum + thisRoundScore;
	}
	return sum;
};

//LC#0686 Diff:Easy Repeated String Match
/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1. Else Return a number.
For example, with A = "abcd" and B = "cdabcdab".
Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").
The length of A and B will be between 1 and 10000.
*/
//speed:
var repeatedStringMatch = function(A, B) {
  const n = Math.ceil(B.length / A.length);
  if (A.repeat(n).includes(B)) return n;
  if (A.repeat(n + 1).includes(B)) return n + 1;
  return -1;
};

//LC#0687 Diff:Easy Longest Univalue Path
/*
Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root. The length of path between two nodes is represented by the number of edges between them. Return a number.
Input:
              5
             / \
            4   5
           / \   \
          1   1   5
Output: 2  i.e route - [5-5-5]
Input:
              1
             / \
            4   5
           / \   \
          4   4   5
Output: 2   i.e route [4-4-4]
Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//leetcode solution
/*
The Idea
Use post-order dfs
To update the global longest, a node can connect to both the left and the right, thus both sides need to be considered
To backtracking the value, only one side will be considered.
*/
var longestUnivaluePath = function(root) {
   let max = 0
   function helper(n, parentValue) {
		if (!n) return 0
		let left = helper(n.left, n.val)
		let right = helper(n.right, n.val)
		max = Math.max(max, left + right)
		return n.val === parentValue ? Math.max(left, right) + 1 : 0
   }
   if (root !== null) helper(root, root.val)
   return max;
}


//LC#0690 Diff:Easy Employee Importance
/*
You are given a data structure of employee information, which includes the employee's unique id, his importance value and his direct subordinates' id.
For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They each have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.
Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all his subordinates.
Example 1:
Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]],  1              Output: 11
	Explanation: Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.

Note:
One employee has at most one direct leader and may have several subordinates. The maximum number of employees won't exceed 2000.
Definition for Employee.
function Employee(id, importance, subordinates) {
	this.id = id;
	this.importance = importance;
	this.subordinates = subordinates;
}
*/
//speed:30%
var GetImportance = function (employees, id) {
	let sum = 0;

	function addI(d) {
		for (v of employees) {
			if (v.id === d) {
				// id has been found in the array
				sum += v.importance;
				// add all children's value
				for (x of v.subordinates) {
					addI(x)
				}
			}
		}
	}
	addI(id);
	return sum;
}

//speed: 80%
var GetImportance = function (employees, id) {
	let employee = getEmployee(employees, id);
	let totalValue = 0;
	let queue = [employee];

	while (queue.length > 0) {
		employee = queue.shift();  //o(n)
		totalValue += employee.importance
		let subordinates = employee.subordinates
		subordinates.map(id => {
			queue.push(getEmployee(employees, id))
		})
	}
	return totalValue;

	var getEmployee = function (employees, id) {
		for (let employee of employees) {
			if (employee.id == id) break;
		}
		return employee;
	}
};

//LC#0693 Diff:Easy Binary Number with Alternating Bits
/*
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

Input: 5 Output: True    Explanation: The binary representation of 5 is: 101
Input: 7 Output: False   Explanation: The binary representation of 7 is: 111.
Input: 11 Output: False  Explanation: The binary representation of 11 is: 1011.
Input: 10 Output: True   Explanation: The binary representation of 10 is: 1010.
*/
//speed:36%
var hasAlternatingBits = function (n) {
	//let b = '';  //if you need to convert it to binary
	let prevDigit;

	while(n>0){
		d = n%2;
		if(prevDigit===undefined) prevDigit = d;    //this is the first d
		else if(d ^ prevDigit === 0) return false;   //this d and the previous d are both 0,0 or 1,1,
		prevDigit = d;
		//b = d + b;
		n = Math.floor(n/2);
	}
	return true;
};

//speed:60%
var hasAlternatingBits = function (n) {
	return n.toString(2).match(/11|00/g) === null;
};
var hasAlternatingBits = function (n) {
	n = n.toString(2);
	for (i = 0; i < n.length - 1; i++) {
		if (n[i] === n[i + 1]) return false;
	}
	return true;
};


//LC#696 Diff:Easy Count Binary Substrings
/*
Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
s.length will be between 1 and 50,000.
s will only consist of "0" or "1" characters.

Substrings that occur multiple times are counted the number of times they occur.
Input: "00110011"  Output: 6   Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
Input: "10101"  Output: 4   Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
*/
//speed:60% leetcode solution, I don't understand the question
var countBinarySubstrings = function (s) {
	let group = [], count = 1, sum = 0, prevCount = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) {
			count += 1;
		}
		else {
			if (prevCount) {
				sum += prevCount <= count ? prevCount : count;
			}
			prevCount = count;
			count = 1;
		}
	}
	return sum;
};

const countBinarySubstrings = (s) => s.replace(/01/g, '0,1').replace(/10/g, '1,0').split(',')
	.reduce((res, a, i, arr) => i ? res + Math.min(a.length, arr[--i].length) : 0, 0);
const countBinarySubstrings = s => {
	const substrs = s.match(/(.)(\1)*/g)
	let total = 0
	for (let i = 1; i < substrs.length; i++) {
		total += Math.min(substrs[i].length, substrs[i - 1].length)
	}
	return total
};

//LC#0697 Diff:Easy Degree of an Array
/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Input: [1, 2, 2, 3, 1]    Output: 2  Explanation:The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

Input: [1,2,2,3,1,4,2] Output: 6
Note:
nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.

*/
//speed:15%
var findShortestSubArray = function (nums) {
	let hm = {}, degree = 0;
	for(x of nums) {
		hm[x] = hm[x] + 1 || 1;
		degree = Math.max(degree, hm[x]);
	}

	let elementsOfDegree = [];
	for(i in hm) {
		if(hm[i]===degree) elementsOfDegree.push(+i); // convert the "key" string to an integer when pushing
	}

	let shortest = nums.length; //at max it can only be nums.length
	for(x of elementsOfDegree) {
		shortest = Math.min(shortest, 1+nums.lastIndexOf(x)-nums.indexOf(x));
	}

	return shortest;
};
//speed: 70%, similar to above, but much faster. one pass.
const findShortestSubArray = (nums) => {
	let counts = {}, firstIndexes = {}, lastIndexes = {};
	let max = 0
	for (let i = 0; i < nums.length; i++) {
		const k = nums[i]
		counts[k] = (counts[k] || 0) + 1
		max = Math.max(max, counts[k])
		if (firstIndexes[k] === undefined) firstIndexes[k] = i
		lastIndexes[k] = i
	}

	let res = nums.length
	for (const k in counts) {
		if (counts[k] === max) {
			res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1)
		}
	}
	return res
};

//LC#0700 Diff:Easy Search in a Binary Search Tree
/*
Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to search: 2
You should return this subtree:
      2
     / \
    1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.
Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:63%  memory:5%
var searchBST = function (root, val) {
	if(root===null) return null;

	if(root.val === val) return root;
	if(val>root.val) return searchBST(root.right, val);
	if(val<root.val) return searchBST(root.left, val);
};
//speed:94%  memory:5%
var searchBST = function (root, val) {
	while (root) {
		if (root.val === val) return root;
		root = root.val > val ? root.left : root.right;
	}
	return null;
};

//LC#0703 Diff:Easy  Kth Largest Element in a Stream
/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.
You may assume that numsLength ≥ k-1 and k ≥ 1.

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8

Your KthLargest object will be instantiated and called as such:
var obj = new KthLargest(k, nums)
var param_1 = obj.add(val)
*/
//speed:36%
var KthLargest = function (k, nums) {
	this.arr = nums.sort((x,y)=>y-x).slice(0,k);  //These are the first K elements (desc order) (initialization)
	this.length = k;
};
KthLargest.prototype.add = function (val) {
	if(val <= this.arr[this.length-1]) return this.arr[this.length-1];

	// arr is now [54,48,25,15,11]
	this.arr.push(val);  //put it to the end and then bubble it up
	for(i=this.arr.length-1;i>0;i--) {
		if(this.arr[i] > this.arr[i-1])  [this.arr[i], this.arr[i-1]] = [this.arr[i-1], this.arr[i]]; //swap em
	}
	this.arr = this.arr.slice(0,this.length);  //get back to having the top k elements only
	return this.arr[this.length-1]; //i.e kth largest element
};
//leetcode: (some bug in it though) similar solution, use binary-search to enter the new value into the arr
var KthLargest = function (k, nums) {
	this.k = k;
	this.arr = nums.sort((a, b) => a - b);
};
KthLargest.prototype.add = function (val) {
	const insert = () => {
		let l = 0, r = this.arr.length - 1;
		while (l < r) {
			const mid = Math.floor((l + r) / 2);
			if (this.arr[mid] === val) return mid;
			if (this.arr[mid] < val) l = mid + 1;
			else r = mid;
		}
		return l;
	}
	const index = insert();
	this.arr.splice(index, 0, val);
	return this.arr[this.arr.length - this.k];
};
//Other leetcode solutions: datastructure is minHeap or BST

//LC#0704 Diff:Easy Binary Search
/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.
Input: nums = [-1,0,3,5,9,12], target = 9     Output: 4
	Explanation: 9 exists in nums and its index is 4
Input: nums = [-1,0,3,5,9,12], target = 2     Output: -1
	Explanation: 2 does not exist in nums so return -1
You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].
*/
//speed:63%
var search = function (nums, target) {
	let beg = 0, end = nums.length-1;
	while(beg<=end){
		mid = Math.floor((beg + end) / 2);    //or mid = beg + Math.floor((end-beg)/2);   //or mid = ((low + high) / 2) | 0 (bitwise OR casts it to integer)
		if(nums[mid]===target) return mid;
		else if (target>nums[mid]) beg = mid+1;
		else if (target<nums[mid]) end = mid-1;
	}
	return -1;
};

//LC#0705 Diff:Easy Design HashSet
/*
Design a HashSet without using any built-in hash table libraries.
To be specific, your design should include these functions:
add(value): Insert a value into the HashSet.
contains(value) : Return whether the value exists in the HashSet or not.
remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.
Example:
MyHashSet hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);
hashSet.contains(2);    // returns true
hashSet.remove(2);
hashSet.contains(2);    // returns false (already removed)
All values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashSet library.
*/
//leetcode solution speed:90% memory:80%  (ambiguos question)
var MyHashSet = function (maxLength = 1000, set = []) {
	this.maxLength = maxLength;
	//meaning the size of the hashSet is going to be 1000 max. 1000 spots. Each spot is an array.
	this.set = set;
};

MyHashSet.prototype.getIndex = function (key) { return key % this.maxLength };   //some value < 1000. Modulo is a good enough hashing function.

MyHashSet.prototype.getPos = function (key, index) {
	bucket = this.set[index];
	if (bucket === undefined) return -1;
	return bucket.indexOf(key);
};

MyHashSet.prototype.add = function (key) {
	index = this.getIndex(key); //get some index <1000
	pos = this.getPos(key, index)
	if (pos < 0) {
		if (this.set[index] === undefined) this.set[index] = [];
		this.set[index].push(key)
	}
};

MyHashSet.prototype.remove = function (key) {
	index = this.getIndex(key)
	pos = this.getPos(key, index)
	if (pos > -1) this.set[index].splice(pos, 1);
};

MyHashSet.prototype.contains = function (key) {
	index = this.getIndex(key)
	pos = this.getPos(key, index)
	return pos > -1
};

//LC#0706 Diff:Easy Design HashMap
/*
Design a HashMap without using any built-in hash table libraries. To be specific, your design should include these functions:
put(key, value): Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:
MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)

Note:
All keys and values will be in the range of 0 to 1,000,000
The number of operations will be in the range of 1 to 10,000
Please do not use the built-in HashMap library.
*/
//there are mutliple ways to solve this problem, look it up on leetcode.
//leetcode solution speed: speed:53%
var MyHashMap = function (maxLength = 1e5, buckets = []) {
	this.maxLength = maxLength
	this.buckets = buckets
};

MyHashMap.prototype.getIndex = function (key) {
	return key % this.maxLength
};

MyHashMap.prototype.getPos = function (key, index) {
	if (this.buckets[index] === undefined) return -1
	for (let i = 0; i < this.buckets[index].length; i++) {
		if (this.buckets[index][i][0] === key) return i
	}
	return -1
};

MyHashMap.prototype.put = function (key, value) {
	index = this.getIndex(key)
	pos = this.getPos(key, index)
	if (pos < 0) {
		if (this.buckets[index] === undefined || this.buckets[index].length === 0) {
			this.buckets[index] = []
			this.buckets[index].push([key, value])
		}
	} else {
		this.buckets[index][pos] = [key, value]
	}
};

MyHashMap.prototype.get = function (key) {
	index = this.getIndex(key)
	pos = this.getPos(key, index)
	if (pos > -1) {
		return this.buckets[index][pos][1]
	}
	return -1
};

MyHashMap.prototype.remove = function (key) {
	index = this.getIndex(key)
	pos = this.getPos(key, index)
	if (pos > -1) {
		this.buckets[index].splice(pos, 1)
	}
};

//LC#0 Diff:Easy To Lower Case
/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
*/
//A-Z is 65-90 ; a-z is 97-122
//speed:13% memory:80%
var toLowerCase = function (str) {
	let lowerCase = "";
	for (let letter of str) {
		const index = letter.charCodeAt(0);
		if (index <= 90 && index >= 65) letter = String.fromCharCode(index + 32);
		lowerCase += letter;
	}
	return lowerCase;
};

//LC#0717 Diff:Easy 1-bit and 2-bit Characters
/*
We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).
Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.

Input: bits = [1, 0, 0]  Output: True
	Explanation: The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.
Input: bits = [1, 1, 1, 0]  Output: False
	Explanation:The only way to decode it is a two-bit character and another two-bit character. So the last character is NOT one-bit character.
Note:
1 <= len(bits) <= 1000.
bits[i] is always 0 or 1.
*/
//leetcode solution speed:20%
//The idea is to move onto the next number if you've hit a zero, and skip an additional number if you've hit a 1 since they'd be a "two bit" number. Within the for loop, you know if you ever successfully land on the last digit which is always going to be a zero, it'll be a "one bit" character, otherwise if you skip it, it does NOT exist.
var isOneBitCharacter = function (bits) {
	for (let i = 0; i < bits.length; i++) {
		if (i === bits.length - 1) return true; //you have successfully landed on the last bit, which is a zero always
		if (bits[i] === 0) continue;
		i++;
	}
	return false;
};

//LC#0720 Diff:Easy Longest Word in Dictionary
/*
Given a list of strings words representing an English Dictionary, find the longest word in "words" that can be built one character at a time by other words in "words". If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

Input: words = ["w","wo","wor","worl", "world"]    Output: "world"
	Explanation:The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Input: words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]  Output: "apple"
	Explanation:Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
Note:
All the strings in the input will only contain lowercase letters.
The length of words will be in the range [1, 1000].
The length of words[i] will be in the range [1, 30].
*/
//leetcode solution speed:30%
var longestWord = function (words) {
	words.sort();
	let set = new Set(words);
	let result = '';

	for(w of words) {   //check if every subset of this w is there in the set
		let isValid = true;
		let s = '';
		for(i=0;i<w.length;i++){
			s += w[i];
			if(!set.has(s)) {
				isValid = false;
				break;
			}
		}
		if(isValid && w.length > result.length) result = w;
	}

	return result;
};

//using trie
var longestWord = function (words) {
	const trieRoot = {};
	const insert = (str) => {
		let n = trieRoot, count = 0;
		for (s of str) {
			if (!n[s]) n[s] = {};
			n = n[s];
		}
		n['end'] = true;  //meaning, from the root to this letter, it is a valid word that is there in the array
	}
	words.forEach(w => insert(w)); // get the trie ready     {w:{o:{r:{l:{d:{end:true}}}}}}


	// finding out if the word can be built letter by letter from others words in the array, if yes, return the length;
	const search = (str) => {
		let node = trie[str[0]], count = 0;
		// here must start from 1 because the trie's root will not have a filed call 'end'
		for (let i = 1; i < str.length; i++) {
			if (!node.end) return 0;
			count++;
			node = node[str[i]];
		}
		return count + 1;
	}

	let res = '', max = 0;
	words.forEach(w => {
		const count = search(w);
		// compare and find out the longest
		if (count === max) {
			res = res > w ? w : res;  // use the one that come lexicographically first
		} else if (count > max) {
			res = w;
			max = count;
		}
	});
	return res;
};

//LC#0 Diff:Easy Find Pivot Index
/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.
We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index. If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Input: nums = [1,7,3,6,5,6]   Output: 3
	Explanation: The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3. Also, 3 is the first index where this occurs.
Input: nums = [1,2,3]   Output: -1
	Explanation: There is no index that satisfies the conditions in the problem statement.
Input: nums = [5]  Output: 0
Input: nums = [5,6]  Output: -1
Input: nums = [-1,-1,-1,0,1,1] Output: 0
Constraints:
The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].
*/
//speed:80%
var pivotIndex = function (nums) {
	let arraySum = 0;
	for(x of nums) arraySum += x;

	let leftSum = 0, rightSum = arraySum;
	for(i=0;i<nums.length;i++) {
		if(i>0) leftSum += nums[i-1];
		rightSum -= nums[i];

		if(leftSum===rightSum) return i;
	}
	return -1;
};

//LC#0728 Diff:Easy Self Dividing Numbers
/*
A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
Also, a self-dividing number is not allowed to contain the digit zero.
Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
Input:  left = 1, right = 22      Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note: The boundaries of each input argument are 1 <= left <= right <= 10000.
*/
//speed:65%
var selfDividingNumbers = function (left, right) {
	let ret = [];
	for(i=left;i<=right;i++){
		if(isSDN(i)) ret.push(i);
	}
	return ret;

	function isSDN(g) {
		let flag = true;
		let n = g;
		while(n>0){
			d = n%10;
			if(d===0 || g%d!==0) {flag=false;break;}
			n = Math.floor(n/10);
		}
		return flag;
	}
};
//leetcode similar solution but better helper function
const selfDividingNumbers = (left, right) => {
	let output = []
	for (let i = left; i <= right; i++) {
		if (i < 10 || isSDN(i)) output.push(i)
	}
	return output;

	function isSDN(num) {
		for(d of num.toString()) {
			if(d==='0' || num%d!==0) return false;  // VERY SMART
		}
		return true;
	}
};


//LC#0733 Diff:Easy Flood Fill
/*
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535). Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color, as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color, as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.
Input: image = [[1,1,1],[1,1,0],[1,0,1]]   sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected by a path of the same color as the starting pixel are colored with the new color. Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
Input: image=[[0,0,0],[0,0,0]] sr=0, sc=0, newColor=2
Output: [[2,2,2],[2,2,2]]
Note:
The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
*/
//speed:55% memory:10%
var floodFill = function (image, sr, sc, newColor) {
	let oc = image[sr][sc];   //original color value

	function fill(x,y) {
		if(image[x][y]===newColor) return;  //this cell has already been colored

		image[x][y] = newColor;
		if(y>0 && image[x][y-1]===oc) fill(x,y-1);   								//try left cell
		if(y<image[0].length-1 && image[x][y+1]===oc) fill(x,y+1);  //try right cell
		if(x>0 && image[x-1][y]===oc) fill(x-1,y);                 //try top cell
		if(x<image.length-1 && image[x+1][y]===oc) fill(x+1,y);     //try bottom cell
	}
	fill(sr,sc);
	return image;
};
//leetcode little simpler DFS
var floodFill = function (image, sr, sc, newColor) {
	const currColor = image[sr][sc];
	if (newColor === currColor) return image;  //good optimization

	function callDFS(img, row, col) {
		if (row >= img.length || row < 0 || col >= img[0].length || col < 0 || img[row][col] !== currColor) return;
		img[row][col] = newColor;
		callDFS(img, row - 1, col);  //up
		callDFS(img, row + 1, col);  //down
		callDFS(img, row, col + 1);  //right
		callDFS(img, row, col - 1);  //left
		return img;
	}
	return callDFS(image, sr, sc);
};
//leetcode bfs
var floodFill = function (image, sr, sc, newColor) {
	const color = image[sr][sc];
	if (color === newColor) return image;
	const queue = [[sr, sc]];
	while (queue.length) {
		const [x, y] = queue.shift();
		image[x][y] = newColor;
		if (x - 1 >= 0 && image[x - 1][y] === color) queue.push([x - 1, y]);
		if (y - 1 >= 0 && image[x][y - 1] === color) queue.push([x, y - 1]);
		if (x + 1 < image.length && image[x + 1][y] === color) queue.push([x + 1, y]);
		if (y + 1 < image[0].length && image[x][y + 1] === color) queue.push([x, y + 1]);
	}
	return image;
};

//LC#0744 Diff:Easy Find Smallest Letter Greater Than Target
/*
Given a list of sorted characters letters containing only lowercase letters, and given a target letter, find the smallest element in the list that is larger than the given target.
Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

Input:letters = ["c", "f", "j"]  target = "a"  Output: "c"
Input:letters = ["c", "f", "j"]  target = "c"  Output: "f"
Input:letters = ["c", "f", "j"]  target = "d"  Output: "f"
Input:letters = ["c", "f", "j"]  target = "g"  Output: "j"
Input:letters = ["c", "f", "j"]  target = "j"  Output: "c"
Input:letters = ["c", "f", "j"]  target = "k"  Output: "c"
Note:
letters has a length in range [2, 10000].
letters consists of lowercase letters, and contains at least 2 unique letters.
target is a lowercase letter.
*/
//speed:30%
var nextGreatestLetter = function (letters, target) {
	for(x of lettters) {
		if(target>x) return target;
	}
	return letters[0];  //alternatively first check if target is greater than last element, if it is, then FIRST return letters[0]
};
//speed:70% leetcode binary search: this is difficult
var nextGreatestLetter = function (letters, target) {
	if (target >= letters[letters.length - 1]) return letters[0];

	const index = binarySearch(letters, target)
	return letters[index]

	function binarySearch(arr, target) {
		let l = 0, r = arr.length - 1
		while (l < r) {
			const mid = Math.floor((r + l) / 2)
			if (arr[mid] === target && arr[mid + 1] !== target) return mid + 1
		  else if (target >= arr[mid]) l = mid + 1;
			else r = mid;
		}
		return l;
	}

}

//LC#0746 Diff:Easy Min Cost Climbing Stairs
/*
On a staircase, every step has some non-negative cost assigned to it.
Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

Input: cost = [10, 15, 20]  Output: 15
	Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]		Output: 6
	Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
Note:
cost will have a length in the range [2, 1000].
Every cost[i] will be an integer in the range [0, 999].
*/
//leetcode solution speed:
var minCostClimbingStairs = function (cost) {
	let routes = [cost[0], cost[1]], len = cost.length;
	for (i = 2; i <= len; i++) {
		routes[i] = Math.min(routes[i - 1], routes[i - 2]) + (i == len ? 0 : cost[i]);
	}
	return routes[len];
};
var minCostClimbingStairs = function (cost) {
	for (let i = 2; i < cost.length; i++) {
		cost[i] += Math.min(cost[i - 2], cost[i - 1]);
	}
	return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
};
var minCostClimbingStairs = function (cost) {
	if (cost.length === 1) return 0;
	if (cost.length === 2) return Math.min(cost[0], cost[1]);

	let minCostTwoBefore = cost[0];
	let minCostOneBefore = cost[1];
	for (let n = 2; n < cost.length; n++) {
		const minCostAtCurrent = cost[n] + Math.min(minCostOneBefore, minCostTwoBefore);
		minCostTwoBefore = minCostOneBefore;
		minCostOneBefore = minCostAtCurrent;
	}
	return Math.min(minCostOneBefore, minCostTwoBefore);
};

//LC#0747 Diff:Easy Largest Number At Least Twice of Others
/*
In a given integer array nums, there is always exactly one largest element.
Find whether the largest element in the array is at least twice as much as every other number in the array.
If it is, return the index of the largest element, otherwise return -1.
Input: nums = [3, 6, 1, 0]  Output: 1
	Explanation: 6 is the largest integer, and for every other number in the array x, 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
Input: nums = [1, 2, 3, 4]	Output: -1
	Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
Note:
nums will have a length in the range [1, 50].
Every nums[i] will be an integer in the range [0, 99].
*/
//speed:50%
var dominantIndex = function (nums) {
	let max=-Infinity, maxIndex = -1;
	for(i=0;i<nums.length;i++){
		if(nums[i]>max) {max=nums[i],maxIndex=i}
	}
	for(x of nums) {
		if(x!==max && !(max>=x*2)) return -1
	}
	return maxIndex;
};
//leetcode one pass solution! what an idiot i am
var dominantIndex = function (nums) {
	let ret=-1,first=-Infinity, second=-Infinity;
	for(i=0;i<nums.length;i++){
		if(nums[i]>first){
			second=first;
			first=nums[i];
			ret=i;
		} else if (nums[i]>second){
			second=nums[i];
		}
	}
	return first>=second*2 ? ret : -1;
}
var dominantIndex = function (nums) {
	return nums.every(x => x===Math.max(...nums) ? true : Math.max(...nums)>=x*2) ? nums.indexOf(Math.max(...nums)) : -1;
}

//LC#0748 Diff:Easy Shortest Completing Word
/*
Find the minimum length word from a given dictionary of words, which has all the letters from the string licensePlate.

Ignore case. For example, "P" on the licensePlate still matches "p" on the word.
It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.

Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]     Output: "steps"
	Explanation: The smallest length word that contains the letters "S", "P", "S", and "T". Note that the answer is not "step", because the letter "s" must occur in the word twice. Also note that we ignored case for the purposes of comparing whether a letter exists in the word.
Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]     Output: "pest"
	Explanation: There are 3 smallest length words that contains the letters "s". We return the one that occurred first.
Note:
licensePlate will be a string with length in range [1, 7].
licensePlate will contain digits, spaces, or letters (uppercase or lowercase).
words will have a length in the range [10, 1000].
Every words[i] will consist of lowercase letters, and have length in range [1, 15].
*/
//speed:27%
var shortestCompletingWord = function (licensePlate, words) {
	let lp = licensePlate.replace(/[^a-zA-Z]/g,'');      //DONT forget the 'g' flag

	function getHm(a) {
		let map = {};
		for(c of a.toLowerCase()) map[c] = map[c]+1 || 1;
		return map;
	}

	let lp_hm = getHm(lp);

	function isSubset(a) {  //check if lp is subset of a
		let a_hm = getHm(a);
		for(x in lp_hm) {  //everything in lp must be there in hm
			if(!a_hm[x] || lp_hm[x]>a_hm[x]) return false;   //letter does not exist in a or a does'nt have enough count
		}
		return true;
	}

	let ans, ansLength= Infinity;
	for(y of words){
		if(isSubset(y)) {
			if(y.length<ansLength) {
				ans = y;
				ansLength = y.length;
			}
		}
	}
	return ans;
	// It is guaranteed an answer exists
};
//leetcode solution speed: little faster
var shortestCompletingWord = function (licensePlate, words) {
	let lp_hm = {};
	licensePlate.replace(/[^a-zA-Z]/g, '').split('').forEach(x => lp_hm[x] = lp_hm[x]+1 || 1);

	function canCover(word) {
		for (const [key, value] of Object.entries(lp_hm)) {
			if (value > word.length - word.replace(new RegExp(key, 'g'), '').length) return false;       //number of times the letter "key" appears in 'word' SHOULD be more than 'value'
		}
		return true;
	}

	let shortest, shortestLength = Infinity;
	for(w of words) {
		if (canCover(w) && w.length < shortestLength) {
			shortest = w;
			shortestLength = shortest.length;
		}
	}
	return shortest;
}
//LC#0762 Diff:Easy Prime Number of Set Bits in Binary Representation
/*
Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.
(Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime)

Input: L = 6, R = 10    Output: 4
Explanation:
6 -> 110 (2 set bits, 2 is prime)
7 -> 111 (3 set bits, 3 is prime)
9 -> 1001 (2 set bits , 2 is prime)
10->1010 (2 set bits , 2 is prime)

Input: L = 10, R = 15   Output: 5
Explanation:
10 -> 1010 (2 set bits, 2 is prime)
11 -> 1011 (3 set bits, 3 is prime)
12 -> 1100 (2 set bits, 2 is prime)
13 -> 1101 (3 set bits, 3 is prime)
14 -> 1110 (3 set bits, 3 is prime)
15 -> 1111 (4 set bits, 4 is not prime)

L, R will be integers L <= R in the range [1, 10^6].
R - L will be at most 10000.
*/
//speed:10%
var countPrimeSetBits = function (L, R) {
	let count = 0;
	for(j=L;j<=R;j++){
		v = j.toString(2).replace(/0/g,'').length;
		if(isPrime(v)) ++count;
	}
	return count;

	function isPrime(n) {
		if (n<=1) return false;
		if (n===2 || n===3) return true;   //optimization
		if (n%2===0 || n%3===0) return false;  //optimization
		for (i = 5; i <= Math.sqrt(n); i++) {     //OR i*i<n    //Also you can i=i+6 (lookup 6K+1 optimization ofr primes)
			if (n % i === 0) return false;
		}
		return true;
	}
};
//speed: 50% leetcode solution
var countPrimeSetBits = function (L, R) {
	let set = new Set([2, 3, 5, 7, 11, 13, 17, 19]);   //how many 1bits do you think there could be?! Predefined set is enough...
	let countPrime = 0;
	for (let i = L; i <= R; i++) {
		if (set.has(i.toString(2).replace(/0/g, '').length)) countPrime++;
	}
	return countPrime;
};
//Remember:
const getNumOfSetBits = function (n) {
	let result = 0;
	while (n) {
		result += (n & 1);
		n = n >> 1;
	}
	return result;
}

//LC#0766 Diff:Easy  Toeplitz Matrix
/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element. Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are: "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]". In each diagonal all elements are the same, so the answer is True.

Input:
matrix = [
  [1,2],
  [2,2]
]
Output: False
Explanation: The diagonal "[1, 2]" has different elements.

Note:
matrix will be a 2D array of integers.
matrix will have a number of rows and columns in range [1, 20].
matrix[i][j] will be integers in range [0, 99].

Follow up:
What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
What if the matrix is so large that you can only load up a partial row into the memory at once?
*/
//speed:50%
var isToeplitzMatrix = function (m) {  // m is a 2d array (matrix)
	// every diagonal line MUST start either from top row or left column. So just check if m[i,j] = m[i+1,j+1] for these two sets of elements
	let flag = true;
	for(i=0;i<m[0].length;i++){
		if (!isValidDiagonal(0,i)) return false;
	}
	for(j=0;j<m.length;j++){
		if(!isValidDiagonal(j,0)) return false;
	}
	return true;

	function isValidDiagonal(x,y){
		let initValue = m[x][y];
		while(x < m.length && y < m[0].length) {
			if(m[x][y]!==initValue) return false;
			++x;
			++y;
		}
		return true;
	}
};
//speed: 10% Just scan the WHOLE matrix
var isToeplitzMatrix = function (matrix) {
	if (matrix.length < 2 || matrix[0].length < 2) return true;
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[i].length; j++) {
			if (matrix[i][j] !== matrix[i - 1][j - 1]) {
				return false;
			}
		}
	}
	return true;
};
//speed: 30% prev row shifted must equal current row
var isToeplitzMatrix = function (matrix) {
	let rowWidth = matrix[0].length;
	for (var i = matrix.length - 1; i > 0; i--) {
		if (matrix[i].slice(1,rowWidth).join('') !== matrix[i - 1].slice(0,rowWidth-1).join('')) {
			return false;
		}
	}
	return true;
};

//LC#0771 Diff:Easy Jewels and Stones
/*
You're given string J representing the different types of stones that are jewels, and S representing the stones you have. Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Input: J = "aA", S = "aAAbbbb"   Output: 3
Input: J = "z", S = "ZZ"  Output: 0
S and J will consist of upper/lower case letters only and have length at most 50.
The characters in J are distinct.
*/
//speed:45%
var numJewelsInStones = function (J, S) {
	let r = '[' + J + ']';   //regex needs to be /[aA]/g and not /aA/g
	return S.length - S.replace(new RegExp(r, 'g'),'').length;   //or do S.match().length
};
//Some others -
[...S].filter((c) => J.indexOf(c) > -1).length
S.filter(elem => J.includes(elem)).length
var numJewelsInStones = function (J, S) {
	let count = 0,len = S.length;
	for (let i = 0; i < len; i++) {
		if (J.indexOf(S[i]) >= 0) count++
	}
	return count
};

//LC#0783 Diff:Easy Minimum Distance Between BST Nodes
/*
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of ANY TWO different nodes in the tree.
Input: root = [4,2,6,1,3,null,null]    Output: 1
          4
        /   \
      2      6
     / \
    1   3
Explanation: while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
Note:
The size of the BST will be between 2 and 100.
The BST is always valid, each node's value is an integer, and each node's value is different.
This question is the same as 0530.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:5%
var minDiffInBST = function (root) {
	let minDiff = Infinity;
	let prev;

	function walkLtoR(n) {
		if(n.left) walkLtoR(n.left);

		if (prev!==undefined && Math.abs(prev - n.val) < minDiff) minDiff = Math.abs(prev - n.val);
		prev = n.val;

		if(n.right) walkLtoR(n.right);
	}
	walkLtoR(root);

	return minDiff;
};
//speed:10% Some special logic
function minDiffInBST(root) {
	const stack = [];
	let minDiff = Infinity;
	root && stack.push(root);
	while (stack.length) {
		const item = stack.pop();
		if (!item.left && !item.right) {
			for (let node of stack) {
				minDiff = Math.min(minDiff, Math.abs(item.val - node.val));
			}
			continue;
		}
		stack.push(item);
		item.right && stack.push(item.right);
		item.left && stack.push(item.left);
		item.left = item.right = null;
	}
	return minDiff;
}

//LC#0784 Diff:Easy Letter Case Permutation
/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list (array) of all possible strings we could create.
Input: S = "a1b2"   Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
Input: S = "3z4"    Output: ["3z4", "3Z4"]
Input: S = "12345"  Output: ["12345"]
Note:
S will be a string with length between 1 and 12.
S will consist only of letters or digits.
*/
//leetcode solutions: there is d p and backtracking solution
var letterCasePermutation = function (S) {
	const results = [];
	findStrings("", S, 0, results);
	return results;

	function findStrings(current, S, index, results) {
		if (index == S.length) {
			results.push(current);
			return;
		}

		const char = S.charAt(index);
		const charCode = char.charCodeAt(0);
		if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
			findStrings(current + char.toUpperCase(), S, index + 1, results);
			findStrings(current + char.toLowerCase(), S, index + 1, results);
		} else {
			findStrings(current + char, S, index + 1, results);
		}
	}
};
//bfs
var letterCasePermutation = function (S) {
	const queue = [S];
	for (let i = 0; i < S.length; i++) {
		if (/[0-9]/.test(S[i])) continue;
		const size = queue.length;
		for (let j = 0; j < size; j++) {
			const node = queue.shift();
			queue.push(node.slice(0, i) + node[i].toLowerCase() + node.slice(i + 1));
			queue.push(node.slice(0, i) + node[i].toUpperCase() + node.slice(i + 1));
		}
	}
	return queue;
};

//dfs
var letterCasePermutation = function (S) {
	return dfs(S.toLowerCase());
};

function dfs(leftover, result = '', results = []) {
	if (leftover.length === 0) {
		results.push(result);
		return results;
	}

	const lower = leftover[0];
	const upper = lower.toUpperCase();
	const nextLeftover = leftover.slice(1);

	dfs(nextLeftover, result + lower, results);
	if (lower !== upper) {
		dfs(nextLeftover, result + upper, results);
	}

	return results;
}

//LC#0788 Diff:Easy Rotated Digits
/*
X is a good number if after literally rotating each digit individually by 180 degrees vertically, we get a valid number that is different from X. Every digit must be rotated.
A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other (on this case they are rotated in a different direction, in other words 2 or 5 gets mirrored); 6 and 9 rotate to each other, and the rest of the numbers 3,4,7 do not rotate to any other number and become invalid.

Now given a positive number N, how many numbers from 1 to N are good?
Input: 10   Output: 4
Explanation:
There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
Note:

N  will be in range [1, 10000].
*/
//speed:60%
var rotatedDigits = function (N) {
 let count = 0;
 for(i=1;i<=N;i++) {
	 if(isGood(i)) ++count;
 }
 return count;

 function isGood(n){
	let s = n.toString();
	if(/[347]/.test(s)) return false;

	let t = '';
	for(c of s) {
		if(c === '2') c = '5';  else if(c === '5') c = '2';
		else if(c === '6') c = '9';  else if(c === '9')	c = '6';
		t += c;
	 }
	return t!==s;
 }
};
//speed: 57%
var rotatedDigits = function (N) {
	let counter = 0;
	for (let i = 1; i <= N; i++) {
		if (isValid(i)) counter++;
	}
	return counter;
};

const isValid = n => {
	let valid = false;
	while (n) {
		const a = n % 10;
		if (a === 3 || a === 4 || a === 7) return false;
		if (a === 2 || a === 5 || a === 6 || a === 9) valid = true; //as LONG AS one of these are there in the number, these will be flipped AND the new number will definitely be a different number.
		n = Math.trunc(n / 10);
	}
	return valid;
};
//speed: 10%
var rotatedDigits = function (N) {
	let count = 0;
	for (let i = 1; i <= N; i++) {
		let currInt = i.toString().replace(/[0,1,8]/g, "");
		if (currInt.length === 0) continue;     //the number contains just 0,1,8.
		if (currInt.replace(/[2,5,6,9]/g, "").length === 0) count++;  //if length is not zero, that means it has 3,4,7
	}
	return count;
};

//LC#0796 Diff:Easy Rotate String
/*
We are given two strings, A and B.
A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.
Input: A = 'abcde', B = 'cdeab'      Output: true
Input: A = 'abcde', B = 'abced'      Output: false
Note: A and B will have length at most 100.
*/
//speed:8%
var rotateString = function (A, B) {   //A = 'erydayev', B = 'everyday'
	if (A.length !== B.length) return false;
	if (!A && !B) return true;  //both are empty strings

	for (let i = 0; i < A.length; i++) {
		if (A.charAt(i) === B.charAt(0)) {
			if (A.slice(i) + A.slice(0, i) === B)  // ev + eryday
				return true;
		}
	}
	return false;
};

//LC#0804 Diff:Easy Unique Morse Code Words
/*
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
Return the number of different transformations among all words we have.

Input: words = ["gin", "zen", "gig", "msg"]  Output: 2
Explanation:
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations, "--...-." and "--...--.".
Note:
The length of words array will be at most 100.
Each words[i] will have length in range [1, 12]. (so 48chars max when transformed)
words[i] will only consist of lowercase letters. ASCII a-z is 97-122
*/
//speed:15%
var uniqueMorseRepresentations = function (words) {
	let m = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

	let hm = {};
	for(w of words){
		let t = '';
		for(c of w) {
			t += m[c.charCodeAt(0)-97];  //you can even do 'a'.charCodeAt(0) instead of 97
		}
		hm[t] = hm[t] + 1 || hm;
	}
	return Object.keys(hm).length;
};
// you can alternatively: b = new Set(), b.add(x), return b.size;
const uniqueMorseRepresentations = words => {
	const alphabet = {
		a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..'
	}
	return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
}

//LC#0806 Diff:Easy Number of Lines To Write String
/*
We are to write the letters of a given string S, from left to right into lines. Each line has maximum width 100 units, and if writing a letter would cause the width of the line to exceed 100 units, it is written on the next line. We are given an array widths, an array where widths[0] is the width of 'a', widths[1] is the width of 'b', ..., and widths[25] is the width of 'z'.

Now answer two questions: how many lines have at least one character from S, and what is the width used by the last such line? Return your answer as an integer list of length 2.

Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "abcdefghijklmnopqrstuvwxyz"    Output: [3, 60]
Explanation:
All letters have the same length of 10. To write all 26 letters, we need two full lines plus one line with 60 units.

Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "bbbcccdddaaa"       Output: [2, 4]
Explanation:
All letters except 'a' have the same length of 10, and "bbbcccdddaa" will cover 9 * 10 + 2 * 4 = 98 units. For the last 'a', it is written on the second line because there is only 2 units left in the first line. So the answer is 2 lines, plus 4 units in the second line.

Note:
The length of S will be in the range [1, 1000].
S will only contain lowercase letters.
widths is an array of length 26.
widths[i] will be in the range of [2, 10].
*/
//speed:40%
var numberOfLines = function (widths, S) {
	let lineCount = 1, currentLine = 0;
	for(c of S) {
		charValue = widths[c.charCodeAt(0)-97];
		if(currentLine + charValue > 100) {
			++lineCount;
			currentLine = 0;
		}
		currentLine += charValue;
	}
	return [lineCount, currentLine];
};

//LC#0811 Diff:Easy Subdomain Visit Count
/*
A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

You are given an array of "count <space> address"
Return a new array with counts for each subdomain (in the same format as the input, and in any order)

Input:["9001 discuss.leetcode.com"]
Output:["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
Explanation:
We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

Input:["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
Output:["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
Explanation:
We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times. For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

Notes:
The length of cpdomains will not exceed 100.
The length of each domain name will not exceed 100.
Each address will have either 1 or 2 "." characters.
The input count in any count-paired domain will not exceed 10000.
The answer output can be returned in any order.
*/
//speed:6%
var subdomainVisits = function (cpdomains) {
	let hm = {};
	for(w of cpdomains){
		let count = Number(w.split(' ')[0]);
		let domains = w.split(' ')[1].split('.');  //Each address will have either 1 or 2 "." characters.
		for(i=0;i<domains.length;i++){
			let d = domains.slice(i).join('.');
			hm[d] = hm[d] + count || count;
		}
	}
	let result = [];
	for ([key,value] of Object.entries(hm)){
		result.push(value.toString() + " " + key);
	}
	return result;
};
//leetcode: similar solution, much much better JS
var subdomainVisits = function (cpdomains) {
	const map = {};
	cpdomains.forEach(d => {
		let [count, domain] = d.split(' ');
		while (domain) {
			map[domain] = (map[domain] || 0) + parseInt(count);
			domain = domain.replace(/^[a-z]+\.?/, '');         //remove the first "abc." from "abc.def.ghi"
		}
	});
	return Object.entries(map).map(entry => `${entry[1]} ${entry[0]}`);
};
//leetcode: similar solution, just another way to build the "ghi", "def.ghi", "abc.def.ghi"
var s = '';
for (let i = arr.length - 1; i >= 0; --i) {
	s = arr[i] + s;
	hm[d] = hm[d] + count || count;
	s = '.' + s;
}

//LC#0812 Diff:Easy  Largest Triangle Area
/*
You have a list (array) of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]   Output: 2

3 <= points.length <= 50.
No points will be duplicated.
 -50 <= points[i][j] <= 50.
Answers within 10^-6 of the true value will be accepted as correct.
*/
//leetcode solution: speed:30%
var largestTriangleArea = function (points) {
	const n = points.length;
	let maxArea = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			for (k = j + 1; k < n; k++) {
				const area = calcArea(points[i], points[j], points[k]);
				maxArea = Math.max(maxArea, area);
			}
		}
	}
	return maxArea;

	function calcArea(coordA, coordB, coordC) {
		const [xCoordA, yCoordA] = coordA; const [xCoordB, yCoordB] = coordB; const [xCoordC, yCoordC] = coordC;
		// some formula??!!
		const sideA = xCoordA * (yCoordB - yCoordC);
		const sideB = xCoordB * (yCoordC - yCoordA);
		const sideC = xCoordC * (yCoordA - yCoordB);
		return Math.abs((sideA + sideB + sideC) / 2);
	}
};

//LC#0819 Diff:Easy Most Common Word
/*
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."   banned = ["hit"]
Output: "ball"
Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.

Input: paragraph = "a, a, a, a, b,b,b,c, c"  Banned: ["a"] ,  Output: "b"

Note:
1 <= paragraph.length <= 1000.
0 <= banned.length <= 100.
1 <= banned[i].length <= 10.
The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun)
paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
There are no hyphens or hyphenated words.
Words only consist of letters, never apostrophes or other punctuation symbols.
*/
//speed:30%
var mostCommonWord = function (paragraph, banned) {
	paragraph = paragraph.replace(/[;.,]/g,' ').replace(/ +/g,' ').split(' ');   //replace comma/period/semicolon by space, THEN replace one or more space by single space, THEN split it.
	let hm = {};
	let maxCount = 0; maxWord = '';
	for(w of paragraph) {
		w = w.replace(/[^a-zA-Z]/g,'').toLowerCase();  //remove punctuations etc
		if(!banned.includes(w)) {  //O(m) operation
			hm[w] = hm[w] + 1 || 1;
			if(hm[w] > maxCount) {maxCount=hm[w], maxWord=w}
			//another way if(!maxWord || hm[w]>hm[maxWord])  maxWord=w; in this way you don't need maxCount
		}
	}
	return maxWord;
};
//speed: 95%
var mostCommonWord = function (paragraph, banned) {
	const words = paragraph.toLowerCase().split(/[ !?',;.]/);  // words will contain even "" in it..
	const map = new Map();
	const set = new Set(banned);
	words.forEach(word => map.set(word, map.has(word) ? map.get(word) + 1 : 1));
	set.forEach(banned => { if (map.has(banned)) map.delete(banned); });

	let res = '', max = Number.MIN_SAFE_INTEGER;
	for (let [word, count] of map.entries()) {
		//if (word) {   //avoid ""
			if(count > max) {res=word; max=count}
		//}
	}
	return res;
};

//LC#0821 Diff:Easy Shortest Distance to a Character
/*
Given a string S and a character C, return an array of integers representing the shortest distance of each character from that character C in the string.
Input: S = "loveleetcode", C = 'e'          Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
Note:
S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
*/
//speed:75% two pass, brilliant ktk!
var shortestToChar = function (S, C) {
	let ic = [];  //Indexes Of C
	for(i=0;i<S.length;i++){
		if(S[i]===C) ic.push(i);
	}

	let result = [], k=0;
	for (j = 0; j < S.length; j++) {
		if(S[j]===C) {    // if it matches, immediately add zero and move on to the next occurence of C
			result.push(0);
			if(k+1<=ic.length-1) ++k;  //don't let k go out of bounds
		} else if (k===0 && j < ic[k]) {          //j is before the first occurence of C
			result.push(ic[k]-j);
		} else if (j >= ic[ic.length-1]) {        //j is beyond the last occurence of C
			result.push(j-ic[ic.length - 1]);
		} else {                                  //j is inbetween two occurences of C
			result.push(Math.min(Math.abs(j - ic[k]), Math.abs(j - ic[k-1])));
		}
	}
	return result;
};
//speed:  leetcode brilliance as usual : Forward pass, assign valus as 'distance latest left C seen'. Then do a backward pass, assigning each as MIN(distance from latest right C seen, currentValue)....
var shortestToChar = function (S, C) {
	const dp = new Array(S.length).fill(Infinity);
	dp[0] = S[0] === C ? 0 : Infinity
	for (let i = 1; i < S.length; i++) {
		if (S[i] === C) dp[i] = 0;
		else  dp[i] = dp[i - 1] === Infinity ? Infinity : dp[i - 1] + 1;  //if you haven't seen a C at all till now, you will be marked as Infinity
	}

	let dist = Infinity;
	for (let i = S.length - 1; i >= 0; i--) {
		if (S[i] === C) dist = 0;
		dp[i] = Math.min(dist, dp[i]);
		dist += 1;
	}
	return dp;
};
// leetcode onepass solution
var shortestToChar = function (S, C) {
	let resArr = [], currentIndex = S.indexOf(C), prevIndex = Infinity;
	for (let i = 0; i < S.length; i++) {
		let distance = Math.min(Math.abs(currentIndex - i), Math.abs(prevIndex - i))
		if (distance === 0) {
			prevIndex = currentIndex;
			currentIndex = S.indexOf(C, currentIndex + 1);  //meaning finding the next occurence of C. Will return -1, if there is no other C left.
		}
		resArr.push(distance);
	}
	return resArr;
};
// leetcode divide and conquer
var shortestToChar = function (S, C) {
	let indices = [], arr = S.split("");
	let startIdx = S.indexOf(C);
	while (startIdx !== -1) {
		indices.push(startIdx);
		startIdx = S.indexOf(C, startIdx + 1);
	}
	return arr.map((cur, idx) => minimumDiff(indices, idx));

	var minimumDiff = function (indices, idx) {
		let min = Number.MAX_VALUE;
		for (let num of indices) {
			let diff = Math.abs(num - idx);
			if (diff < min) min = diff;
		}
		return min;
	}
};


//LC#0 824 Diff:Easy Goat Latin
/*
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
The rules of Goat Latin are as follows:
>If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
>If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
>Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin.

Input: "I speak Goat Latin"  Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
Input: "The quick brown fox jumped over the lazy dog"   Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

Notes:
S contains only uppercase, lowercase and spaces. Exactly one space between each word.
1 <= S.length <= 150.
*/
//speed:7%
var toGoatLatin = function (S) {
	let result = [];
	S = S.split(' ');
	let a = 'a';
	for(i=0;i<S.length;i++){
		let w = S[i];
		let g = '';
		if(/[aeiou]/i.test(w[0]))  g = w + 'ma';     //don't forget the i flag in regex!!!! you have to catch even AEIOU
		else g = w.slice(1) + w[0] + 'ma';
		g += a;
		result.push(g);
		a += 'a'; //for the next iteration
	}
	return result.join(' ');
};
// twoliner little slower
var toGoatLatin = function (S) {
	const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
	return S.split(' ')
	.map(    (w,i) => (vowels.has(w[0]) ? w+'ma' : w.slice(1)+w[0]+'ma') +'a'.repeat(i + 1)    )
	.join(' ');
};

//LC#0830 Diff:Easy Positions of Large Groups
/*
In a string S of lowercase letters, these letters form consecutive groups of the same character.
For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".
Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.
Input: "abbxxxxzzy"   Output: [[3,6]]
	Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
Input: "abc"          Output: []
	Explanation: We have "a","b" and "c" but no large group.
Input: "abcdddeeeeaabbbcd"    Output: [[3,5],[6,9],[12,14]]
Others:
"abcdddeeeeaabbbcddddddd"
"aaa"
"aa"
Note:  1 <= S.length <= 1000
*/
//speed:10%  Took 1 hour to solve :/
var largeGroupPositions = function (S) {
	let result = [];

	let si = 0; //startIndex
	for(i=1;i<S.length;i++){
		if(S[i]!==S[i-1]) {
			if (i-1 - si >= 2) result.push([si,i-1]);
			si = i;
		}
	}
	--i;
	if (S.length>=2 && S[i]===S[i-1] && i-si>=2) result.push([si,i])

	return result;
};
//leetcode similar
var largeGroupPositions = function (S) {
	const res = [];
	let start = 0;
	for (let i = 1; i <= S.length; i++) {
		if (S[i] !== S[i - 1]) {
			if (i - start >= 3) res.push([start, i - 1]);
			start = i;
		}
	}
	return res;
};
var largeGroupPositions = function (S) {
	let result = [], start, count = 0;
	for (let i = 0; i < S.length; i++) {
		if (count === 0) start = i;
		count++;
		if (S[i] !== S[i + 1] && count >= 3) result.push([start, i]);
		if (S[i] !== S[i + 1]) count = 0;
	}
	return result;
};

//LC#0832 Diff:Easy Flipping an Image
/*
Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
Input: [[1,1,0],[1,0,1],[0,0,0]]                     Output: [[1,0,0],[0,1,0],[1,1,1]]
	Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
	Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]     Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
	Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
	Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
1 <= A.length = A[0].length <= 20
0 <= A[i][j] <= 1
*/
//speed:33%
var flipAndInvertImage = function (A) {
	let len = A[0].length;
	for(j=0;j<A.length;j++){
		reverseAndFlip(A[j]);    //it mutates the array in place
	}

	function reverseAndFlip(a) {
		for(i=0;i<len/2;i++) {
			[a[i],a[len-1-i]] = [1-a[len-1-i],1-a[i]];   // x = 1 - x (to flip 0 to 1 and 1 to 0)
		}
	}

	return A;
};
//speed: 66%  oneliner
var flipAndInvertImage = function (A) {
	return A.map(x => x.reverse().map(y => 1-y));   // or do  y => y^1
}

//LC#0836 Diff:Easy Rectangle Overlap
/*
A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.
Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two (axis-aligned) rectangles, return whether they overlap.
Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]    Output: true
Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]    Output: false
Notes:
Both rectangles rec1 and rec2 are lists of 4 integers.
All coordinates in rectangles will be between -10^9 and 10^9.
*/
//speed:40%  Damn this almost got me
var isRectangleOverlap = function (rec1, rec2) {
	let [x1,y1,x2,y2] = rec1;
	let [a1,b1,a2,b2] = rec2;

	if(a1>=x2 || a2<=x1) return false;  // make sure that there is some overlap on the x-axis
	if(b1>=y2 || b2<=y1) return false;  // make sure that there is some overlap on the y-xais

	// by this point there is overlap on both the x-axis and the y-axis.
	return true;
}
//leetcode -
var isRectangleOverlap = function (rec1, rec2) {
	if ((Math.min(rec1[2], rec2[2]) - Math.max(rec1[0], rec2[0]) > 0)
		&& (Math.min(rec1[3], rec2[3]) - Math.max(rec1[1], rec2[1]) > 0)) {
		return true;
	}
	return false;
};

//LC#0840 Diff:Easy  Magic Squares In Grid
/*
A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.
Given an grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).
Input: [[4,3,8,4],
        [9,5,1,9],
        [2,7,6,2]]
Output: 1
Explanation:
The following subgrid is a 3 x 3 magic square:
438
951
276
while this one is not:
384
519
762
In total, there is only one magic square inside the given grid.
Note:
1 <= grid.length <= 10
1 <= grid[0].length <= 10
0 <= grid[i][j] <= 15
*/
//speed:15%
var numMagicSquaresInside = function (grid) {
	let count = 0;
	for(i=0;i<grid[0].length-2;i++) {   //i is moving across columns
		for(j=0;j<grid.length-2;j++) {    //j is moving across rows
			if (checkMS(grid[j][i], grid[j][i+1], grid[j][i+2],
									grid[j+1][i], grid[j+1][i+1], grid[j+1][i+2],
									grid[j+2][i], grid[j+2][i+1], grid[j+2][i+2]
								 )) ++count;
		}

	}
	return count;

	function checkMS(a,b,c,d,e,f,g,h,i) {
		// check for 1 to 9
		let hm = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
		for(x of arguments) {
			if (x > 9 || x < 1) return false; //out of bounds
			if(hm[x]===true) return false;  //number is repeated
			hm[x] = true;
		}
		// check the sums
		let sum = a+b+c;
		if(d+e+f!==sum || g+h+i!==sum || a+d+g!==sum || b+e+h!==sum || c+f+i!==sum || a+e+i!==sum || c+e+g!==sum) return false;
		return true;
	}
};
//speed:44%  there are only a limited number of magic squares, so check against them
const magicSquares = new Set([
	'276951438',
	'294753618',
	'438951276',
	'492357816',
	'618753294',
	'672159834',
	'816357492',
	'834159672',
]);
// Note that they all have 5 right in the middle of the grid. So if 5 is not there over there, it is not a magic square.

//
//LC#0844 Diff:Easy Backspace String Compare
/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
Note that backspacing an empty string, has no effect on it.
Input: S = "ab#c", T = "ad#c"    Output: true
	Explanation: Both S and T become "ac".
Input: S = "ab##", T = "c#d#"    Output: true
	Explanation: Both S and T become "".
Input: S = "a##c", T = "#a#c"    Output: true
	Explanation: Both S and T become "c".
Input: S = "a#c", T = "b"        Output: false
	Explanation: S becomes "c" while T becomes "b".
1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
*/
// this FAILS for test case 2: S.replace(/[a-z]?#/g, '') === T.replace(/[a-z]?#/g, ''); //replace [a-z] O or 1 of these followed by # - globally
//speed:70%
var backspaceCompare = function (S, T) {
	let s1 = [];
	for(x of S) {
		x === '#' ? s1.pop() : s1.push(x);
	}
	let t1 = [];
	for(y of T) {
		y === '#' ? t1.pop() : t1.push(y);
	}
	return s1.join('')===t1.join('');
};
//speed: slower leetcode by neat
const backspaceCompare = (S, T) => {
	return edit(S) === edit(T);

	function edit(str) {
		let result = '';
		let backspaces = 0;
		for (let i = str.length - 1; i >= 0; i--) {
			if (str[i] === '#') backspaces += 1;
			else if (backspaces > 0) backspaces -= 1;  // and silently don't add the this character to the resultant string
		  else result = str[i] + result;     // it comes here only if my current backspace count is zero and this is not a #
		}
		return result;
	}
};
//O(n) O(1) two pointers
const backspaceCompare = (s, t) => {
	let sPointer = s.length - 1
	let tPointer = t.length - 1
	let sCount = 0
	let tCount = 0

	while (sPointer >= 0 || tPointer >= 0) {
		let sItem = s[sPointer]
		let tItem = t[tPointer]
		if (sItem === '#') { sPointer--; sCount++; }
		else if (tItem === '#') { tPointer--; tCount++; }
		else if (sCount > 0) { sCount--; sPointer--; }
		else if (tCount > 0) { tCount--; tPointer--; }
		else if (sPointer >= 0 && tPointer >= 0 && sItem !== tItem) return false
		else if (sPointer >= 0 !== tPointer >= 0) return false
		else { sPointer--; tPointer-- }
	}
	return true
}

//LC#0849 Diff:Easy Maximize Distance to Closest Person
/*
In a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty.
There is at least one empty seat, and at least one person sitting.
Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
Return that maximum distance to closest person.

Input: [1,0,0,0,1,0,1]   Output: 2
Explanation:
If Alex sits in the second open seat (seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.

Input: [1,0,0,0] Output: 3
Explanation:
If Alex sits in the last seat, the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.

Constraints:
2 <= seats.length <= 20000
seats contains only 0s or 1s, at least one 0, and at least one 1.
*/
//speed:76%
var maxDistToClosest = function (seats) {

	let prev;
	if (seats[0]===1) {prev = 0; seats[0]=0;}
	else {prev = Infinity; seats[0]=Infinity;}

	for(i=1;i<seats.length;i++){
		if(seats[i]===1) seats[i]=0;
		else if(seats[i-1]===Infinity) seats[i] = Infinity
		else seats[i] = seats[i-1] + 1;
	}

	prev = Infinity;
	for(i=seats.length-1;i>=0;i--){
		if(seats[i]===0) prev = 0;
		else seats[i] = Math.min(seats[i], prev);
		++prev;
	}

	return Math.max(...seats);
};

//leetcode slower
var maxDistToClosest = function(seats) {
  let closest = [], left, right;

  for (let i = 0; i < seats.length; i++) {
    left = right = i;
		while (left > 0 && seats[left] == 0) left--; // scan left of i
		while (right < seats.length && seats[right] == 0) right++; // scan right of i
    if (i == 0) closest[i] = right - i;
    else if (i == seats.length - 1) closest[i] = i - left;
    else closest[i] = Math.min(i - left, right - i);
  }
  return Math.max(...closest);
};
// there are many different solutions on leetcode, nothing really stands out, check them out though

//LC#0852 Diff:Easy Peak Index in a Mountain Array
/*
Let's call an array A "a mountain" if the following properties hold:
A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an input array that is definitely a mountain array, return the i value of the peak.
Input: [0,1,0]    Output: 1
Input: [0,2,1,0]  Output: 1
Note:
3 <= A.length <= 10000
0 <= A[i] <= 10^6
A is a mountain, as defined above.
*/
//speed:63%
var peakIndexInMountainArray = function (A) {
	for(i=0;i<A.length;i++){
		if (A[i] < A[i - 1]) return i;   //find the first place where it drops  //return A.indexOf(Math.max(...A))
	}
};
//binary search iterative
var peakIndexInMountainArray = function (A) {
	//binary search
	let beg = 0, end = A.length-1;
	while(beg<end) {
		let mid = Math.floor((beg+end)/2);
		if(A[mid]>A[mid-1] && A[mid]>A[mid+1]) return mid;   //A[mid] has to be greater than both sides
		else if (A[mid]>A[mid+1]) end = mid;  //downward slope
		else beg = mid;   //upward slope
	}
}
//binary search recursive
var peakIndexInMountainArray = function (A, beg = 0, end = A.length - 1) {
	if (!A.length) return -1;
	const pivot = Math.round((beg + end) / 2);
	if (A[pivot] > A[pivot - 1] && A[pivot] > A[pivot + 1]) return pivot;
	if (A[pivot] < A[pivot - 1]) return peakIndexInMountainArray(A, beg, pivot);  // downward slope
	if (A[pivot] < A[pivot + 1]) return peakIndexInMountainArray(A, pivot, end);  // upward slope
}

//LC#0859 Diff:Easy Buddy Strings
/*
Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.
Input: A = "ab", B = "ba"    Output: true
Input: A = "ab", B = "ab"    Output: false
Input: A = "aa", B = "aa"    Output: true
Input: A = "aaaaaaabc", B = "aaaaaaacb"    Output: true
Input: A = "", B = "aa"     Output: false
Constraints:
0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist only of lowercase letters.
*/
//leetcode solution
var buddyStrings = function (A, B) {
	if (A == "" || B == "" || A.length !== B.length) return false;
	if (A == B) {
		let set = new Set(A);
		return set.size !== A.length;
	}
	let a = "", b = "";
	for (i = 0; i < A.length; i++) {
		if (A[i] !== B[i]) {
			a += A[i];
			b += B[i];
		}
	}
	if (a.length == 2 && a.length == b.length) {
		return a[0] == b[1] && a[1] == b[0];
	}
	return false;
};
//leetcode solution
var buddyStrings = function (A, B) {
	if (A.length !== B.length) return false;
	let mark = -1;
	for (let i = 0; i < A.length; i++) {
		if (A[i] !== B[i]) {
			if (mark === -1) mark = i;    //this is the first mismatch ever
			else if (mark != undefined) {  // this is the second mismatch, now check if the SWAP can work
				if (A[i] !== B[mark] || B[i] !== A[mark]) return false;
				mark = undefined;
			} else return false;    //this is third mismatch, not allowed
		}
	}
	if (!mark) return true;
	if (mark !== -1) return false;

	const set = new Set();
	for (z of A) {
		if (set.has(z)) return true;
		set.add(z);
	}
	return false;
};
//leetcode solution
var buddyStrings = function (A, B) {
	if (A.length !== B.length) return false;

	if (A === B) {
		let set = new Set(A);
		return set.size !== A.length;
	}

	let swapLetter = {};
	for (let i = 0; i < A.length; i += 1) {
		if (A[i] !== B[i]) {
			if (swapLetter.A === undefined) {
				swapLetter.A = A[i];
				swapLetter.B = B[i];
			} else if (swapLetter.A !== B[i] || swapLetter.B !== A[i]) return false;
		}
	}
	return true;
};

//LC#0860 Diff:Easy Lemonade Change
/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and they order one at a time (in the order specified by the input bills array).
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
Note that you don't have any change in hand at first.
Return true if and only if you can provide every customer with correct change.

Input: [5,5,5,10,20]  Output: true
Explanation:
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

Input: [5,5,10]   Output: true
Input: [10,10]   Output: false
Input: [5,5,10,10,20]  Output: false
Note:
0 <= bills.length <= 10000
bills[i] will be either 5, 10, or 20.
*/
//when you receive a bill of 20, you have two choices: return a 5 bill and a 10 bill, or just return 3 5 bill . The right idea is the former is better， but Why? The answer is the 10 bill can only be returned if you receive a 20 bill, but you can returned 5 bill both when you receive 20 bill and 10 bill. So the 5 bill is somehow more precious than the 10 bill .
//speed:50%
var lemonadeChange = function(bills) {
	let countOf5s = 0;
	let countOf10s = 0;
	for(x of bills) {
		if(x===5) {              //Nothing to give back
			++countOf5s;
		} else if (x===10) {     //I must give back a 5
			if (countOf5s<1) return false;
			--countOf5s;
			++countOf10s;
		} else if (x === 20) {     //I must give back 15
			if(countOf10s>=1 && countOf5s>=1) {
				--countOf10s;  //try to get rid of more 10s FIRST than 5s...
				--countOf5s;
			} else if (countOf5s>=3) {
				countOf5s -= 3;  // Last option get rid of 5s
			} else {
				return false;  // no way to return change
			}
		}
	}
	return true;
};

//LC#0867 Diff:Easy Transpose Matrix
/*
Given a matrix A, return the transpose of A.
The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
Input: [[1,2,3],[4,5,6],[7,8,9]]     Output: [[1,4,7],[2,5,8],[3,6,9]]
Input: [[1,2,3],[4,5,6]]     Output: [[1,4],[2,5],[3,6]]
*/
//speed:42%
var transpose = function (A) {
	let B = new Array(A[0].length).fill(0).map(x => new Array(A.length));   //number of rows becomes number of columns and vice versa.
	for(i=0;i<A.length;i++){
		for(j=0;j<A[0].length;j++) {
			B[j][i] = A[i][j]   //it has to be A[row][column]
		}
	}
	return B;
};
//oneliner ?!
var transpose = function (A) {
	return A[0].map((_, i) => A.map(b => b[i]));
};

//LC#0868 Diff:Easy Binary Gap
/*
Given a positive integer N, find and return the longest distance between any two 1s in the binary representation of N.
If there aren't atleast two 1s, return 0.

Input: 22  Output: 2     2 in binary is 10110.
Input: 5  Output: 2      5 in binary is 101.
Input: 6  Output: 1      6 in binary is 110.
Input: 8  Output: 0      8 in binary is 1000.
There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.

Note:
1 <= N <= 10^9
*/
//speed:42%
var binaryGap = function (N) {
	let s = N.toString(2);

	let max = 0;
	let countOf1s = 0;
	let count = 0;
	for(c of s){
		if (countOf1s>0) ++count; //start counting only once you go past the first 1
		if(c==='1') {
			++countOf1s;
			max=Math.max(count,max);
			count=0;
		}
	}
	return countOf1s > 1 ? max : 0;
};

//LC#0872 Diff:Easy Leaf-Similar Trees
/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
				 	3
			5			  1
		6		2	  9   8
			 7 4
For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
Constraints:
Both of the given trees will have between 1 and 200 nodes.
Both of the given trees will have values between 0 and 200
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:6%
var leafSimilar = function (root1, root2) {
	let l1 = getLeaves(root1);
	let l2 = getLeaves(root2);

	if (l1.length !== l2.length) return false;   //or just do return l1.join(' ') === l2.join(' ');
	for(i=0;i<l1.length;i++){
		if(l1[i]!==l2[i]) return false;
	}
	return true;

	function getLeaves(r) {
		let leaves = [];
		if(r===null) return leaves;

		dfs(r);
		function dfs(n) {
			if (n.left) dfs(n.left);
			if (n.left === null && n.right === null) leaves.push(n.val);
			if (n.right) dfs(n.right);
		}
		return leaves;
	}
};
// leetcode
var getLeaves = function (tree, leafs) {
	if (tree.left)
		getLeaves(tree.left, leafs);
	if (tree.right)
		getLeaves(tree.right, leafs);
	if (tree.left == null && tree.right == null)
		leafs.push(tree.val);
	return leafs;
}
let l1 = getLeaves(root1, []);

//LC#0874 Diff:Easy Walking Robot Simulation
/*
A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can receive one of three possible types of commands:
-2: turn left 90 degrees
-1: turn right 90 degrees
1 <= x <= 9: move forward x units
Some of the grid squares are obstacles.
The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])
If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)
Return the square of the MAXIMUM EVER Euclidean distance that the robot will be from the origin.

Input: commands = [4,-1,3], obstacles = []       Output: 25
	Explanation: robot will go to (3, 4)
Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]	   Output: 65
	Explanation: robot will be stuck at (1, 4) before turning left and going to (1, 8)
Note:
0 <= commands.length <= 10000
0 <= obstacles.length <= 10000
-30000 <= obstacle[i][0] <= 30000
-30000 <= obstacle[i][1] <= 30000
The answer is guaranteed to be less than 2 ^ 31.
*/
//speed:6%  very very slow
var robotSim = function (commands, obstacles) {
	let maxDistanceFromOrigin = 0;
	let currentDirection = 'N';
	let x = 0, y = 0;

	let directions = {
		'N': { '-1': 'E', '-2': 'W' },
		'E': { '-1': 'S', '-2': 'N' },
		'S': { '-1': 'W', '-2': 'E' },
		'W': { '-1': 'N', '-2': 'S' }
	}

	for(c of commands) {
		if(c<0) {
			currentDirection = directions[currentDirection][c.toString()];
			continue;
		} else {
			[x,y] = move([x,y], currentDirection, c);
			maxDistanceFromOrigin = Math.max(maxDistanceFromOrigin, x*x+y*y);
		}
	}

	return maxDistanceFromOrigin;

	function getIdealEndPoint([a1,b1], direction, units) {
		if (direction === 'N') return [a1, b1 + units]
		else if (direction === 'S') return [a1, b1 - units]
		else if (direction === 'E') return [a1 + units, b1]
		else if (direction === 'W') return [a1 - units, b1]
	}

	function move([x1,y1], direction, units) {
		let [x2, y2] = getIdealEndPoint([x1,y1],direction,units);
		for (o of obstacles) {
			// there could be more than one obstacle in the way. So you need the min/max
			if (direction === 'N' && o[0] === x1 && o[1] > y1 && o[1] <= y2) y2 = Math.min(y2, o[1]-1);
			if (direction === 'S' && o[0] === x1 && o[1] < y1 && o[1] >= y2) y2 = Math.max(y2, o[1]+1);
			if (direction === 'E' && o[1] === y1 && o[0] > x1 && o[0] <= x2) x2 = Math.min(x2, o[0]-1);
			if (direction === 'W' && o[1] === y1 && o[0] < x1 && o[0] >= x2) x2 = Math.max(x2, o[0]+1);
		}
		return [x2,y2];
	}
};
//leetcode solution: 10X faster
var robotSim = function (commands, obstacles) {
	let maxDistanceFromOrigin = 0;
	let x = 0, y= 0;
	let cd = 0;           // Current Direction 0=N, 1=E, 2=S, 3=W

	let omap = {};  // O(N) space!
	for (o of obstacles) { omap[o] = true; }      //you can store o[[3,4]] = true;  //or use Set()

	for (c of commands) {
		if(c===-1) {
			cd = (cd+1)%4;  //turning right
			continue;
		} else if(c===-2) {  //turning left    (turning left once is like turning right thrice!!!)
			cd = (cd+3)%4;
			continue;
		} else {
			for(let i=0;i<c;i++){  //trying to move 'c' times basically
				let prevX = x, prevY = y;
				if(cd===0) ++y;
				else if(cd===2) --y;
				else if(cd==1) ++x;
				else if(cd===3) --x;
				if(omap[`${x},${y}`]===true) { //robot is now at an obstacle
					x=prevX;
					y=prevY;
					break;
				}
			}
		}
		maxDistanceFromOrigin = Math.max(maxDistanceFromOrigin, x**2 + y**2);
	}
	return maxDistanceFromOrigin;
};


//LC#0876 Diff:Easy Middle of the Linked List
/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.
If there are two middle nodes, return the second middle node.

Input: [1,2,3,4,5]    Output: Node 3
Input: [1,2,3,4,5,6]   Output: Node 4
Note:
The number of nodes in the given list will be between 1 and 100.
Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
*/
//just test it with [1,2,3,4,5,6,7], [1,2,3,4,5,6], [1,2], [1], []
//speed:
var middleNode = function (head) {
	let p1 = p2 = head;
	while(p2 && p2.next!==null) {
		p1 = p1.next;
		p2 = p2.next.next;
	}
	return p1;
};

//LC#0883 Diff:Easy Projection Area of 3D Shapes
/*
On a N * N grid, we place some 1 * 1 * 1 cubes that are axis-aligned with the x, y, and z axes.
Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).
Now we view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional plane.
Here, we are viewing the "shadow" when looking at the cubes from the top, the front, and the side.
Return the total area of all three projections.

The list index of the grid represents x axis, the index of the integer within the list represents y axis, the integer itself represents z axis. For example, if the grid = [[1,2],[3,4]], it means there is 1 cube (z = 1) in the position of (x = 0, y = 0), 2 cubes (z = 2) in (x = 0, y = 1), 3 (z = 3) cubes in (x = 1, y = 0) and 4 cubes (z = 4) in (x = 1, y = 1).

Input: [[2]]   Output: 5
Input: [[1,2],[3,4]]    Output: 17
Input: [[1,0],[0,2]]  Output: 8
Input: [[1,1,1],[1,0,1],[1,1,1]]   Output: 14
Input: [[2,2,2],[2,1,2],[2,2,2]]   Output: 21
Note:
1 <= grid.length = grid[0].length <= 50
0 <= grid[i][j] <= 50
*/
//speed:
var projectionArea = function (grid) {
	let xy=0, yz=0, zx=0;
	let yBoxes = [];
	for(i=0;i<grid.length;i++){
		let maxHeight = -1;
		for(j=0;j<grid[i].length;j++) {
			if(grid[i][j]!==0) {
				//for the xy plane, z-axis is perpendicular to this, the mere presence of ANY block at an [x,y] coordinate, means there is 1x1 area at that unique coordinate. Just count it as area of 1. (as long as height is not zero)
				xy += 1;
			}

			//for the yz plane, x-axis is perpendicular to this, for each y coordinate, i need the tallest cube (max z value).
			if (!yBoxes[j]) yBoxes[j] = [];
			yBoxes[j].push(grid[i][j]);

			maxHeight = Math.max(maxHeight, grid[i][j]);
		}
		//for the zx plane, y-axis is perpendicular to this, for each x coordinate, i need the tallest cube (max z value).For each x, the cubes will be at different y positions,i just need the tallest z for this x.
		zx += maxHeight;
	}
	for(yb of yBoxes) {
		yz += Math.max(...yb);
	}

	return xy+yz+zx;
};
//leetcode faster and similar. You don't need yBoxes. It is a symmetric grid (square). You can access grid[j][i]
const projectionArea = grid => {
	const len = grid.length;  // N*N square matrix
	let ret = 0;
	for (let i = 0; i < len; ++i) {
		let maxI = maxJ = 0;
		for (let j = 0; j < len; ++j) {
			grid[i][j] > 0 && ++ret;
			grid[i][j] > maxJ && (maxJ = grid[i][j]);
			grid[j][i] > maxI && (maxI = grid[j][i]);  //Simultaneously loop through to find y max
		}
		ret += maxJ + maxI;
	}
	return ret;
};
//leetcode similar
var projectionArea = function (grid) {
	const x = grid.reduce((a, b) => a.concat(b), []).filter(x => x > 0).length;
	const y = grid.map(r => Math.max(...r)).reduce((acc, idx) => acc + idx);
	const z = grid[0].map((_, i) => Math.max(...grid.map(r => r[i]))).reduce((acc, idx) => acc + idx);
	return x + y + z;
};

//LC#0884 Diff:Easy Uncommon Words from Two Sentences
/*
We are given two sentences A and B. A sentence is a string of space separated words. Each word consists only of lowercase letters)
A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
Return a list of all uncommon words.
You may return the list in any order.
Input: A = "this apple is sweet", B = "this apple is sour"         Output: ["sweet","sour"]
Input: A = "apple apple", B = "banana"    Output: ["banana"]
Note:
0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
*/
//speed:12%
var uncommonFromSentences = function (A, B) {
	let a_hm = {};
	for(x of A.split(' ')) a_hm[x] = a_hm[x] + 1 || 1;
	let b_hm = {};
	for (x of B.split(' ')) b_hm[x] = b_hm[x] + 1 || 1;

	let final = [];
	for([key,value] of Object.entries(a_hm)) {
		if(value===1 && !b_hm[key]) final.push(key);
	}
	for([key,value] of Object.entries(b_hm)) {
		if(value===1 && !a_hm[key]) final.push(key);
	}
	return result;
};
//speed:90%
var uncommonFromSentences = function (A, B) {
	let concatArray = A.split(' ').concat(B.split(' '));
	let result = [];
	let duplicates = [];

	concatArray.forEach(function (element, index) {
		if (concatArray.indexOf(element, index + 1) === -1) result.push(element);
		else duplicates.push(element);
	});
	result = result.filter(element => !duplicates.includes(element));
	return result;
};

//leetcode: slower: a finalValue must exist only once in the combined array of A and B!
var uncommonFromSentences = function (A, B) {
	let combined = A.split(' ').concat(B.split(' '));
	let c_hm = {};
	for (x of combined) c_hm[x] = c_hm[x] + 1 || 1;
	let final = [];
	for ([key, value] of Object.entries(c_hm)) {    )
		if (value === 1) final.push(key);
	}
	//OR  for(c of combined) if(combined.indexOf(c)===combined.lastIndeOf(c)) final.push(c);
	return final;
}
//leetcode: use Map();  m.set(), m.get()
//optimizations
if (B.length === 0 && A.length !== 0) return A.split(' ')
if (A.length === 0 && B.length !== 0) return B.split(' ')
if (A.length === 0 && B.length === 0) return []

//LC#0888 Diff:Easy Fair Candy Swap
/*
Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.
They would like to exchange EXACTLY ONE candy bar (a whole bar) each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)
Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.
Input: A = [1,1], B = [2,2]   Output: [1,2]  Alice gives away her 1, and bob gives his 2.
Input: A = [1,2], B = [2,3]   Output: [1,2] OR [2,3]
Input: A = [2], B = [1,3]     Output: [2,3]
Input: A = [1,2,5], B = [2,4]  Output: [5,4]
Note:
1 <= A.length <= 10000
1 <= B.length <= 10000
1 <= A[i] <= 100000
1 <= B[i] <= 100000
It is guaranteed that Alice and Bob have different total amounts of candy.
It is guaranteed there exists an answer.
*/
//net net, the larger one needs to lose diff/2.  Larger one gives x+diff/2 , smaller one gives x. Net is a diff/2 movement from larger to smaller
//speed:83%  leetcode solution
var fairCandySwap = function (A, B) {
	const sumA = A.reduce((acc, cur) => acc + cur);
	const sumB = B.reduce((acc, cur) => acc + cur);
	const diff = (sumA - sumB) >> 1; //diff could be +ve or -ve.
	const setA = new Set(A);
	for (const candy of B) {
		if (setA.has(candy + diff)) return [candy + diff, candy];
	}
};


//LC#0892 Diff:Easy Surface Area of 3D Shapes
/*
On a N * N grid, we place some 1 * 1 * 1 cubes.
Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).
Return the total surface area of the resulting shapes.
Input: [[2]]  Output: 10
Input: [[1,2],[3,4]]  Output: 34
Input: [[1,0],[0,2]]  Output: 16
Input: [[1,1,1],[1,0,1],[1,1,1]]  Output: 32
Input: [[2,2,2],[2,1,2],[2,2,2]]  Output: 46
Note:
1 <= N <= 50
0 <= grid[i][j] <= 50
*/
//speed:20%
var surfaceArea = function (grid) {
	let xy = 0, yz = 0, zx = 0;
	for(i=0;i<grid.length;i++){
		for(j=0;j<grid[i].length;j++){
			//xy plane, z-axis perpendicular to this. Blocks are stacked on top of one another. No gaps in this view. Just add every box of >0 height at every distinct x,y coordinate. Add it twice. (top and bottom sides surface area)
			if(grid[i][j]>0) xy += 2;

			//zx plane, y-axis perpendicular to this. For each x coordinate (meaning keeping i constant in the X part), count the front and back face, and also count any up/downs between neigbours.
			//take [10125201] as an example. You count 1face + (1 + 1 + 1 + 3 + 3 + 2 + 1 ) + 1face
			if(j===0) zx += grid[i][j];    //count the front face
			if(j<grid[i].length-1) zx += Math.abs(grid[i][j]-grid[i][j+1]);   //count the face facing its next neighbor
			if(j===grid[i].length-1) zx += grid[i][j];  //count the back face


			//yz plane, x-axis perpendicular to this. For each y coordinate (meaning keeping i constant in the Y part), count the front and back face, and also count any up/downs between neigbours.
			if (j===0) yz += grid[j][i];    //count the front face
			if (j<grid.length-1) yz += Math.abs(grid[j][i]-grid[j+1][i]);   //count the face facing its next neighbor
			if (j===grid.length-1) yz += grid[j][i];  //count the back face
		}
	}
	return xy+yz+zx;
};
//leetcode: similar speed
var surfaceArea = function (grid) {
	const height = grid.length;
	const width = grid[0].length;
	let sum = 0;
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (grid[i][j] > 0) sum += grid[i][j] * 4 + 2;
			if (i > 0) sum -= 2 * Math.min(grid[i - 1][j], grid[i][j]);
			if (j > 0) sum -= 2 * Math.min(grid[i][j - 1], grid[i][j]);
		}
	}
	return sum;
};

//LC#0893 Diff:Easy Groups of Special-Equivalent Strings
/*
You are given an array A of strings.
A move onto S consists of swapping any two even indexed characters of S, or any two odd indexed characters of S.
Two strings S and T are special-equivalent if after any number of moves onto S, S == T.
For example, S = "zzxy" and T = "xyzz" are special-equivalent because we may make the moves "zzxy" -> "xzzy" -> "xyzz" that swap S[0] and S[2], then S[1] and S[3].
Now, a group of special-equivalent strings from A is a non-empty subset of A such that: Every pair of strings in the group are special equivalent, AND The group is the largest size possible  (ie., there isn't a string S not in the group such that S is special equivalent to every string in the group)
Return the TOTAL number of groups of special-equivalent strings from A.

Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]     Output: 3
	Explanation: One group is ["abcd", "cdab", "cbad"], since they are all pairwise special equivalent, and none of the other strings are all pairwise special equivalent to these.The other two groups are ["xyzz", "zzxy"] and ["zzyx"].  Note that in particular, "zzxy" is not special equivalent to "zzyx".
Input: ["abc","acb","bac","bca","cab","cba"]   Output: 3

Note:
1 <= A.length <= 1000
1 <= A[i].length <= 20
All A[i] have the same length.
All A[i] consist of only lowercase letters.
*/
//hashmaps of even characters AND odd characters must be equal. Construct even and odd hashmap for each word. Then compare all words and make groups.
//leetcode solution speed:50%  Why hm? just create and evenOdd string and compare strings!
var numSpecialEquivGroups = function (A) {
	let set = new Set();
	for(x of A) {
		set.add(getEvenOdd(x));
	}
	return set.size; //you just need to return the total number of possible groups

	function getEvenOdd(s){
		let even = s.split('').filter((x,i)=>i%2===0);
		let odd = s.split('').filter((x,i)=>i%2!==0);
		return even.sort().join('')+odd.sort().join('');
	}

};

//LC#0896 Diff:Easy Monotonic Array
/*
An array is monotonic if it is either monotone increasing or monotone decreasing. BASICALLY IS IS SORTED?
An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
Return true if and only if the given array A is monotonic.
Input: [1,2,2,3]   Output: true
Input: [6,5,4,4]   Output: true
Input: [1,3,2]     Output: false
Input: [1,2,4,5]   Output: true
Input: [1,1,1]     Output: true
1 <= A.length <= 50000
-100000 <= A[i] <= 100000
*/
//speed:11%
var isMonotonic = function (A) {
	if(A.length<=1) return true;

	let ascendingFlag = true, descendingFlag = true;
	for(i=0;i<A.length-1;i++){
		if(A[i]>A[i+1]) ascendingFlag=false
		if (A[i]<A[i+1]) descendingFlag = false
		if(!ascendingFlag && !descendingFlag) break; ///no point looking at the rest of the array
	}
	return ascendingFlag || descendingFlag;
};
//leetcode similar
var isMonotonic = function (A) {
	return (A.every((v,i)=> i === 0 || v <= A[i - 1])   ||   A.every((v,i)=> i === 0 || v >= A[i - 1]));
};

//LC#0897 Diff:Easy Increasing Order Search Tree
/*
Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]
       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \
1        7   9
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9
Constraints:
The number of nodes in the given tree will be between 1 and 100.
Each node will have a UNIQUE integer value from 0 to 1000.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:5%
var increasingBST = function (root) {
	let returnRoot;
	let currentParent;

	function dfs(n) {
		if(n.left) dfs(n.left);

		if(!returnRoot) {
			returnRoot = new TreeNode(n.val);  //it comes here only once EVER.
			currentParent = returnRoot;
		}
		else {
			currentParent = addChildToParent(currentParent, n);
		}

		if(n.right) dfs(n.right);
	}
	dfs(root);

	return returnRoot;

	function addChildToParent(parent, child) {
		parent.right = new TreeNode(child.val); // You want to new node(don't want any of its former children)
		return parent.right;
	}
};
//leetcode similar solution, leaner code
var increasingBST = function (root) {
	const newRoot = new TreeNode(undefined);     //A dummy root! You return root.right (which is the actual root)
	let cur = newRoot;
	function dfs(n) {
		if(n.left) dfs(n.left);

		n.left = null;   //you can do this BECAUSE you have already finished the LEFT side..
		cur.right = n;
		cur = n;

		if(n.right) dfs(n.right);
	}
	dfs(root)
	return newRoot.right;
};
//leetcode iterative inorder traversal
var increasingBST = function (root) {
	const stack = [];
	let newRoot;
	let currentParent;
	while (root != null || stack.length) {
		if(root!==null){
			stack.push(root.left);
			root = root.left
		} else {
			root = stack.pop();

			//Visiting the node npw
			if (newRoot == null) {
				newRoot = root;
				currentParent = newRoot;
			} else {
				currentParent.right = root;
				currentParent = currentParent.right;
				currentParent.left = null;
			}

			root = root.right;
		}
	}
	return head;
};

//LC#0905 Diff:Easy Sort Array By Parity
/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
You may return any answer array that satisfies this condition.
Input: [3,1,2,4]  Output: [2,4,3,1]
	The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Note:
1 <= A.length <= 5000
0 <= A[i] <= 5000
Can you do an inplace swap? (returning a new array is easy)
*/
//speed:75%
var sortArrayByParity = function (A) {
	let odd = [], even = [];
	for(x of A){
		x%2===0 ? even.push(x) : odd.push(x);
	}
	return even.concat(odd);
};
//one liner
var sortArrayByParity = function (A) {return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];}
//inplace swap which is much more difficult
var sortArrayByParity = function (A) {
	wp = 0;  //writing point. If there are any numbers to the left of the writing point, there are ALL even. Always.
	rp = 0;  //reading point
	while(rp < A.length) {
		if(A[rp]%2!==0) {
			// we have read an odd number, do nothing for now, just move the reading point.
			++rp;
		} else if (A[rp]%2===0) {
			// we have read an even number, swap it with the number at wp, the number at wp is definitely an odd number.
			[A[rp],A[wp]] = [A[wp],A[rp]];
			++rp;
			++wp;  // Every number to the left of wp is now an even number.
		}
	}
	return A;
}

//LC#0908 Diff:Easy Smallest Range I
/*
Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].
After this process, we have some array B.
Return the smallest possible difference between the maximum value of B and the minimum value of B.
Input: A = [1], K = 0   Output: 0  Explanation: B = [1]
Input: A = [0,10], K = 2  Output: 6  Explanation: B = [2,8]
Input: A = [1,3,6], K = 3   Output: 0   Explanation: B = [3,3,3] or B = [4,4,4]
Note:
1 <= A.length <= 10000
0 <= A[i] <= 10000
0 <= K <= 10000
*/
//speed:5%   brilliant ktk!
var smallestRangeI = function (A, k) {
	let currentMax = Math.max(...A);
	let currentMin = Math.min(...A);

	newMax = currentMax - k;
	newMin = currentMin + k;
	let newDiff = newMax - newMin;
	return newDiff<0 ? 0 : newDiff;
};

//LC#0914 Diff:Easy X of a Kind in a Deck of Cards
/*
In a deck of cards, each card has an integer written on it.
Return true (boolean) if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
>Each group has exactly X cards.
>All the cards in each group have the same integer.

Input: deck = [1,2,3,4,4,3,2,1]  Output: true
	Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Input: deck = [1,1,1,2,2,2,3,3]		Output: false´
	Explanation: No possible partition.
Input: deck = [1]		Output: false
	Explanation: No possible partition.
Input: deck = [1,1]  Output: true
	Explanation: Possible partition [1,1].
Input: deck = [1,1,2,2,2,2]   Output: true
	Explanation: Possible partition [1,1],[2,2],[2,2].

Constraints:
1 <= deck.length <= 10^4
0 <= deck[i] < 10^4
*/
//speed:
var hasGroupsSizeX = function (deck) {
	const hm = {};
	for(x of deck) hm[x] = hm[x]+1 || 1;

	const groups = Object.values(hm);
	let g = groups[0];
	for (let i = 1; i < groups.length; i++) {
		g = gcd(g, groups[i]);
		if (g < 2) return false;  //at anytime if g is 1 or something, return immediately
	}
	return g >= 2;

	function gcd(x,y) {
		if(x===0) return y;
		return gcd(y%x, x);
	}
};

//LC#0917 Diff:Easy Reverse Only Letters
/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Input: "ab-cd"  Output: "dc-ba"
Input: "a-bC-dEf-ghIj"  Output: "j-Ih-gfE-dCba"
Input: "Test1ng-Leet=code-Q!"   Output: "Qedo1ct-eeLg=ntse-T!"
Note:
S.length <= 100
33 <= S[i].ASCIIcode <= 122
S doesn't contain \ or "
*/
//speed:90%  v.good ktk!
var reverseOnlyLetters = function (s) {
	let r = '';

	let j = s.length-1;  //j is always going to point at an alphabet, reading the string backwards though.
	moveJToNextAlphabet();
	//j is now at the first alphabet from the back.

	for(i=0;i<s.length;i++) {
		if (/[a-zA-Z]/.test(s[i])) {  //it is a letter, so find the replacement letter from the back of the array
			r += s[j];
			--j;
			moveJToNextAlphabet()
		}
		else r+=s[i];
	}
	return r;

	function moveJToNextAlphabet(){
		while (j >= 0 && !/[a-zA-Z]/.test(s[j])) --j;
	}
};

//LC#0922 Diff:Easy Sort Array By Parity II
/*
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
You may return any answer array that satisfies this condition.
Input: [4,2,5,7]  Output: [4,5,2,7]
	Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Note:
2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000
*/
//speed:7% (returns a new array though)
var sortArrayByParityII = function (A) {
	let final = [];
	let evenWriter = 0, oddWriter = 1;
	for(i=0;i<A.length;i++){
		if(A[i]%2===0) {final[evenWriter] = A[i]; evenWriter+=2;}
		else {final[oddWriter] = A[i]; oddWriter+=2;}
	}
	return final;
};
//speed: 20% leetcode solution in-place swapping
var sortArrayByParityII = function (A) {
	let oddReader = 1;
	for(i=0;i<A.length;i+=2){
		if(A[i] & 1) {   //this value is either 1 or 0
			//if A[i] is odd
			while(A[oddReader] & 1) oddReader+=2;
			//oddReader is now moved to an odd place that has an even number, time to swap.
			[A[i],A[oddReader]] = [A[oddReader], A[i]];
		}
	}
	return A;
}

//LC#0925 Diff:Easy Long Pressed Name
/*
Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
Input: name = "alex", typed = "aaleex"          Output: true
	Explanation: 'a' and 'e' in 'alex' were long pressed.
Input: name = "saeed", typed = "ssaaedd"        Output: false
	Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
Input: name = "leelee", typed = "lleeelee"      Output: true
Input: name = "laiden", typed = "laiden"        Output: true
	Explanation: It's not necessary to long press any character.
Input:"pyplrz" and  "ppyypllr"   Output: false

1 <= name.length <= 1000
1 <= typed.length <= 1000
The characters of name and typed are lowercase letters.
*/
//basically, every character in the names should have been type atleast once and in order.
//speed:
var isLongPressedName = function (name, typed) {
	let nr = 0;  //name reader
	for(j=0;j<typed.length;j++){
		if(typed[j]===name[nr]) {++nr; continue;}

		if(typed[j]===name[nr-1]) continue;  //this was long press char
		else return false;    //some other char has been typed... this is wrong.
	}
	return nr===name.length;   //You can't always return true, nr must be at the end of name...
};
// shorter code for the above;
var isLongPressedName = function (name, typed) {
	let nr = 0;
	for (j = 0; j < typed.length; j++) {
		if (typed[j] === name[nr]) ++nr;
		else if (typed[j] !== name[nr - 1]) return false;
	}
	return nr===name.length;
}

//LC#0929 Diff:Easy Unique Email Addresses
/*
Every email consists of a local name and a domain name, separated by the @ sign. In alice@leetcode.com, alice is the local name, and leetcode.com is the domain name. Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.
Given a list of emails, we send one email to each address in the list. How many different addresses actually receive mails?

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"] Output: 2
	Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
Input: ["test.email+alex@leetcode.com","test.email.leet+alex@code.com"] Output: 2

1 <= emails[i].length <= 100
1 <= emails.length <= 100
Each emails[i] contains exactly one '@' character.
All local and domain names are non-empty.
Local names do not start with a '+' character.
*/
//speed:20%
var numUniqueEmails = function (emails) {
	let set = new Set();
	for(e of emails) {
		let [ln, dn] = e.split('@');  //local name and domain name
		ln = ln.split('+')[0].replace(/\./g, '');
		set.add(ln+'@'+dn);  //DONT forget the @ !!!!
	}
	return set.size;
};
// leetcode oneliner as usual
const numUniqueEmails = (emails) => {
	emails.forEach((x, i, a) => a[i] = x.replace(/\+.+(?=@)|\.(?=.+@)/gi, ''))
	return new Set(emails).size
};

//LC#0933 Diff:Easy Number of Recent Calls
/*
Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where t represents some time in milliseconds.
Return the number of pings that have been made from 3000 milliseconds ago until now.
Any ping with time in [t - 3000, t] will count, including the current ping.
It is guaranteed that every call to ping uses a strictly larger value of t than before.

Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
Output: [null,1,2,3,3]

Note:
Each test case will have at most 10000 calls to ping.
Each test case will call ping with strictly increasing values of t.
Each call to ping will have 1 <= t <= 10^9.

var RecentCounter = function () {};
RecentCounter.prototype.ping = function (t) {};
Example:
var obj = new RecentCounter()
var param_1 = obj.ping(t)
*/
//speed:15%
var RecentCounter = function () {
	this.pArray = [];
};

RecentCounter.prototype.ping = function (t) {
	if (this.pArray.length > 0 &&  (t-this.pArray[this.pArray.length-1]>3000)) {
		// The last ping was more than 3000s ago (optimization)
		this.pArray = [t];
		return 1;
	}

	this.pArray.push(t);
	let j = 0;
	while(t - this.pArray[j] > 3000) ++j;
	this.pArray = this.pArray.slice(j);  //remove all the pings that are more than 3000 away.
	return this.pArray.length;
};

//leetcode similar, but no slice
var RecentCounter = function () {
	this.arr = [];
	this.start = 0;
};
RecentCounter.prototype.ping = function (t) {
	this.arr.push(t);
	while (this.arr[this.start] < t - 3000) {
		this.start++;  // just keep moving start, don't mutate this.arr
	}
	return this.arr.length - this.start;
};
//leetcode class. Really good.
class RecentCounter {
	constructor(){
		this.arr = [];
	}
	ping(t){
		while (t-this.arr[0] > 3000) this.arr.shift();
		return queue.push(t);  //push() returns the length of the new array!!
	}
}

//LC#0937 Diff:Easy Reorder Data in Log Files
/*
You have an array of logs.  Each log is a space delimited string of words.
For each log, the first word in each log is an alphanumeric identifier. Then, either:
>Each word after the identifier will consist only of lowercase letters, or;
>Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.
Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.
Return the final order of the logs.

Input: logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.
*/
// This is a question to test custom sorting... sort()
//speed:80%  Worked in literally the first shot
var reorderLogFiles = function (logs) {
	let digLogs = [], lettLogs = [];
	for(l of logs) {
		if (/\d/g.test(l.split(' ')[1])) digLogs.push(l);
		else lettLogs.push(l);
	}
	lettLogs.sort((x,y) => {
		if(x===y) return 0;

		let a = x.substring(x.indexOf(' ') + 1);  //get the rest of the words (after the identifier)
		let b = y.substring(y.indexOf(' ') + 1);

		if (a === b) {  //rest of the words are equal, it is a tie.
			if (x.split(' ')[0] < y.split(' ')[0]) return -1  //let x come before y
			else return 1 //let x come after y
		} else {
			if(a < b) return -1;
			else return 1;
		}
	});
	return lettLogs.concat(digLogs);  //or return [...lettLogs, ...digLogs];
};
//leetcode
//try using: a.localeCompare(b);
lettLogs.sort((a, b) => {
	const aBody = a.slice(a.indexOf(' ') + 1);
	const bBody = b.slice(b.indexOf(' ') + 1);
	const c = aBody.localeCompare(bBody);
	if (c) return c; // i.e c is not equal to zero
	return a.localeCompare(b);  //c is zero, it is a tie, so compare a and b (i.e use the identifer parts)
});

//LC#0938 Diff:Easy Range Sum of BST
/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15      Output: 32
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10     Output: 23
The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
	}
*/
//speed:50% basic in-order traversal
var rangeSumBST = function (root, L, R) {
	let sum = 0;
	function dfs(n) {
		if(n.left) dfs(n.left);
		if(n.val>=L && n.val<=R) sum+=n.val;
		if(n.right) dfs(n.right);
	}
	dfs(root);
	return sum;
};
//speed: 60% normal traversal, but skip entire sub trees!
var rangeSumBST = function (root, L, R) {
	let sum = 0;
	function dfs(n) {
		if(n.val>=L && n.val<=R) sum+=n.val;

		if(n.val>L && n.left) dfs(n.left);
		//In a BST, everything to the left of this node is lower than this node. So if L is greater than this node, no point exploring the left tree.
		if(n.val<R && n.right) dfs(n.right);
		//In a BST, everything to the right of this node is greater than this node. So if R is lower than this node, no point exploring the right tree.
	}
	dfs(root);
	return sum;
};
//spped:70% leetcode DFS recursive
function rangeSumBST(root, l, r) {
	let sum = 0
	dfs(root)
	return sum;

	function dfs(node) {
		if (!node) return;
		if (L > node.val) { dfs(node.right); return; }  // go right!
		if (R < node.val) { dfs(node.left); return; } // go left!

		sum += node.val
		dfs(node.left)
		dfs(node.right)
	}
}
//DFS iterative -
var rangeSumBST = function (root, L, R) {
	if (root === null) return 0;
	let sum = 0;
	const stack = [root];
	while (stack.length > 0) {
		const currentNode = stack.pop();
		if (currentNode !== null) {
			if (currentNode.val >= L && currentNode.val <=R ) sum += currentNode.val;
			if (currentNode.val > L) stack.push(currentNode.left);
			if (currentNode.val < R) stack.push(currentNode.right);
		}
	}
	return sum;
};

//LC#0741 Diff:Easy Valid Mountain Array
/*
Given an array A of integers, return true if and only if it is a valid mountain array.
A is a mountain array if and only if:
A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0]<A[1]<...A[i-1]<A[i]  AND THEN   A[i]>A[i+1]>...>A[A.length - 1]

Input: [2,1]  Output: false
Input: [3,5,5]  Output: false
Input: [0,3,2,1]  Output: true
Note:
0 <= A.length <= 10000
0 <= A[i] <= 10000
*/
//speed:20% leetcode solution
var validMountainArray = function (A) {
	if (A.length < 3) return false

	var isDecreasing = false
	var isIncreasing = false
	for (var i = 1; i < A.length; i++) {
		if (A[i] >= A[i-1] && !isDecreasing) {
			isIncreasing = true
			continue
		}
		isDecreasing = true;  // JUST assume that is decreasing from here on.
		if (A[i] >= A[i-1]) return false;
	}
	return isDecreasing && isIncreasing
};

//LC#0942 Diff:Easy DI String Match
/*
Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:
If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]
Input: "IDID"  Output: [0,4,1,3,2]
Input: "III"   Output: [0,1,2,3]
Input: "DDI"   Output: [3,2,0,1]
Note:
1 <= S.length <= 10000
S only contains characters "I" or "D".
*/
//speed:40%  leetcode solution
var diStringMatch = function (S) {
	let i = 0, j = S.length;
	let res = [];
	for (c of S) {
		if (c == 'I') {
			res.push(i);
			i++;
		} else {
			res.push(j);
			j--;
		}
	};
	res.push(i);
	return res;
};

//LC#0944 Diff:Easy Delete Columns to Make Sorted
/*
We are given an array A of N lowercase letter strings, all of the same length.
Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.
For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"], and the remaining columns of A are ["b","v"], ["e","y"], and ["f","z"].  (Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]]).
Suppose we chose a set of deletion indices D such that after deletions, each remaining column in A is in increasing sorted order.
Return the minimum possible value of D.length.

Input: A = ["cba","daf","ghi"]    Output: 1
Explanation: After choosing D = {1}, each column ["c","d","g"] and ["a","f","i"] are in increasing sorted order.
If we chose D = {}, then a column ["b","a","h"] would not be in increasing sorted order.

Input: A = ["a","b"]  Output: 0   Explanation: D = {}
Input: A = ["zyx","wvu","tsr"]   Output: 3   Explanation: D = {0, 1, 2}

1 <= A.length <= 100
1 <= A[i].length <= 1000
*/
//basically, remove all indexes that are not in increasing order
//speed:15%
var minDeletionSize = function (A) {
	let hm = {};
	for (word of A){
		for (i = 0; i < word.length; i++) {
			if(hm[i]) hm[i].push(word[i]);
			else hm[i] = [word[i]];
		}
	}

	let count = 0;
	for(column of Object.values(hm)){
		// if the column is not sorted already, it needs to be removed, so count it
		if(column.join('') !== column.sort().join('')) ++count;
	}
	return count;
};
//leetcode speed:20% much cleaner solution. Good way of iterating.
var minDeletionSize = function (A) {
	let deletions = 0;
	for (let index = 0; index < A[0].length; index++) {
		for (let i = 0; i < A.length - 1; i++) {
			if (A[i].charAt(index) > A[i + 1].charAt(index)) {
				deletions++;
				break;
			}
		}
	}
	return deletions;
};

//LC#0949 Diff:Easy Largest Time for Given Digits
/*
Given an array of 4 digits, return the largest 24 hour time that can be made.
The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.
Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
Input: [1,2,3,4]   Output: "23:41"
Input: [5,5,5,5]   Output: ""
Note:
A.length == 4
0 <= A[i] <= 9
*/
//speed:
var largestTimeFromDigits = function (A) {
	let permutations = getPermutations(A); //gets all possible permutations as an array: [[1,2,3,4], [1,2,4,3], [1,3,4,2], ...]etc.

	let maxTimeString = '';
	let maxTime = 0;
	for(p of permutations) {
		let thisHour = Number(`${p[0]}${p[1]}`);
		let thisMinute = Number(`${p[2]}${p[3]}`);
		if(thisHour <= 23 && thisMinute <= 59) {
			// this is a valid time
			if ((thisHour*60+thisMinute) > maxTime) {
				maxTime = thisHour * 60 + thisMinute;
				maxTimeString = `${p[0]}${p[1]}:${p[2]}${p[3]}`;
			}
		}
	}
	return maxTimeString;

	function getPermutations(arr){
		//how??
	}
};

//spped:70% leetcode solution: no idea what it is doing
var largestTimeFromDigits = function (A) {
	const convert = (h, m) => (parseInt(h) * 60) + parseInt(m)
	const isValid = (h, m) => parseInt(h) <= 23 && parseInt(m) <= 59
	let permutations = []
	let max = 0
	const check = (permutation) => {
		let h = permutation[0] + '' + permutation[1]
		let m = permutation[2] + '' + permutation[3]

		if (isValid(h, m)) {
			if (!max || convert(max[0], max[1]) < convert(h, m)) max = [h, m]
		}
	}
	const permute = (array, index) => {
		if (index == array.length) check([...array])
		for (let i = index; i < array.length; i++) {
			[array[index], array[i]] = [array[i], array[index]]
			permute(array, index + 1);
			[array[index], array[i]] = [array[i], array[index]]
		}
	}

	permute(A, 0)
	return max ? max[0] + ':' + max[1] : ''
};

//LC#0953 Diff:Easy Verifying an Alien Dictionary
/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"  Output: true
	Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"  Output: false
	Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"   Output: false
	Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character.

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/
//speed:53% Nailed it ktk!
var isAlienSorted = function (words, order) {
	let ranking = {};
	for (j = 0; j < order.length; j++) {
		ranking[order[j]] = j;
	}

	for(i=0;i<words.length-1;i++){
		if(compareWords(words[i],words[i+1]) > 0) return false;
	}
	return true;

	function compareWords(a,b) {
		//return -1 if a<b, 0 if a=b and 1 if a>b
		if(a===b) return 0;

		let shorterLength = a.length >= b.length ? b.length : a.length;
		for(k=0;k<shorterLength;k++){
			if(ranking[a[k]] < ranking[b[k]]) return -1;
			else if (ranking[a[k]] > ranking[b[k]]) return 1;
			else continue;  //they have equal ranking, compare the next letter
		}
		// this means k is now = shorterLength
		if(a.length < b.length) return -1;  //Example: a=apple, b=applette
		else return 1;
	}
};
//leetcode solution
var isAlienSorted = function (words, order) {
	let rank = {};
	for (let r = 0; r < order.length; r++) rank[order[r]] = r;

	for (let i = 1; i < words.length; i++) {
		const curr = words[i]; const prev = words[i - 1];
		if (rank[prev[0]] > rank[curr[0]]) return false;
		else if (prev[0] === curr[0]) {
			if(prev===cur) continue;  //the two words are the same, compare the next two words
			let pointer = 1;
			while (prev[pointer] === curr[pointer]) pointer++;
			if (!curr[pointer]) return false; //meaning the second word is the smaller length
			if (rank[prev[pointer]] > rank[curr[pointer]]) return false;
		}
	}
	return true
};

//LC#0961 Diff:Easy N-Repeated Element in Size 2N Array
/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.
Input: [1,2,3,3]  Output: 3
Input: [2,1,2,5,3,2]   Output: 2
Input: [5,1,5,2,5,3,5,4]  Output: 5

4 <= A.length <= 10000
0 <= A[i] < 10000
A.length is even
*/
//basically find the first duplicated element?! dumb question.
//speed:90%
var repeatedNTimes = function (A) {
	let hm = {};
	for(x of A) {
		if(hm[x]) return x;
		else hm[x] = true;
	}
};

//LC#0965 Diff:Easy Univalued Binary Tree
/*
A binary tree is univalued if every node in the tree has the same value.
Return true if and only if the given tree is univalued.
Note:
The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//iterative solution is faster, you can return immediately when false. Unlike a deep recursive function
//speed:70%
var isUnivalTree = function (root) {
	let val = root.val;

	let stack = [root];
	while(stack.length > 0){
		let n = stack.pop();
		if(n.val!==val) return false;
		if(n.left) stack.push(n.left);
		if(n.right) stack.push(n.right);
	}
	return true;
};
//leetcode recursive
var isUnivalTree = function (root, value = root.val) {
	if(!root) return;
	if (root.val !== value) return false;

	return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
};

//LC#0970 Diff:Easy Powerful Integers
/*
Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.
Return a list of all powerful integers that have value less than or equal to bound.
You may return the answer in any order.  In your answer, each value should occur at most once.
Input: x = 2, y = 3, bound = 10       Output: [2,3,4,5,7,9,10]
Explanation:
2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2

Input: x = 3, y = 5, bound = 15       Output: [2,4,6,8,10,14]

1 <= x <= 100
1 <= y <= 100
0 <= bound <= 10^6
*/
//speed:72% leetcode solution, no idea how this works
var powerfulIntegers = function (x, y, bound) {
	const ans = new Set();
	for (let i = 0; (i < 20) & (Math.pow(x, i) <= bound); i++) {
		for (let j = 0; (j < 20) & (Math.pow(y, j) <= bound); j++) {
			const v = Math.pow(x, i) + Math.pow(y, j);
			if (v <= bound) ans.add(v);
		}
	}
	return Array.from(ans);
};

//LC#0976 Diff:Easy Largest Perimeter Triangle
/*
Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths. If it is impossible to form any triangle of non-zero area, return 0.

Input: [2,1,2]   Output: 5
Input: [1,2,1]   Output: 0
Input: [3,2,3,4]  Output: 10
Input: [3,6,2,3]   Output: 8

3 <= A.length <= 10000
1 <= A[i] <= 10^6
*/
//speed:25%
var largestPerimeter = function (A) {
	A.sort((x,y)=>y-x);  //descending order

	for(i=0;i<A.length-2;i++){
		if(getArea(A[i],A[i+1],A[i+2]) > 0) return A[i]+A[i+1]+A[i+2];
	}
	return 0;

	function getArea(a,b,c,s=(a+b+c)/2){  //herons formula
		return Math.sqrt((s) * (s-a) * (s-b) * (s-c));
	}
};
//speed:96% leetcode shorter hack
var largestPerimeter = function (A) {
	A.sort((a, b) => b - a);
	for (let i = 0; i < A.length - 2; i++) {
		if (A[i] < A[i + 1] + A[i + 2]) return A[i] + A[i + 1] + A[i + 2];
	}
	return 0;
};

//LC#0977 Diff:Easy Squares of a Sorted Array
/*
Given an array of integers A sorted in increasing order, return an array of the squares of each number, also in sorted increasing order.
Input: [-4,-1,0,3,10] Output: [0,1,9,16,100]
Input: [-7,-3,2,3,11]  Output: [4,9,9,49,121]
Input: [-8,-6,-4,-2,0,1,3,5,7]
1 <= A.length <= 10000
-10000 <= A[i] <= 10000
*/
//speed:53%
var sortedSquares = function (A) {
	return A.map(x => Math.abs(x)).sort((x,y)=>x-y).map(x => x**2);
};
//speed:35%  two-pointer solution (make sure i>=A.length, j<0, i<A.length && j>=0. The >=,>,<,<= signs are critical )
var sortedSquares = function (A) {
	let res = [];

	let i = 0;
	while(i<A.length && A[i]<0) i++; //i is now at zero or the first positive integer
	let j = i-1;

	while(res.length !== A.length) {
		if(i>=A.length) {  //that means only j is left, just add all the squares of the j's
			res.push(A[j] ** 2);
			--j;
		} else if (j < 0) {  //that means only i is left, just add all the squares of the i's
			res.push(A[i] ** 2);
			++i;
		} else if (i<A.length && j>=0) {
			if(A[i]**2<A[j]**2){
				res.push(A[i]**2);
				++i;
			}else{
				res.push(A[j]**2);
				--j;
			}
		}
	}
	return res;
}
//leetcode cleaner two pointer solution
var sortedSquares = function (A) {
	let result = [];
	let l = 0, r = A.length - 1;
	let p = r;

	while (l <= r) {
		if (A[l] ** 2 > A[r] ** 2) result[p--] = A[l++] ** 2;
		else result[p--] = A[r--] ** 2;
	}
	return result;
};

//LC#0985 Diff:Easy Sum of Even Numbers After Queries
/*
We have an array 'A' of integers, and an array 'queries' of queries.

A query [x,y] means add x to the A[y]. After that find the sum of all even numbers in the new A.
Each query permanently modifies the array A. Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]      Output: [8,6,2,4]
Explanation:
At the beginning, the array is [1,2,3,4].
After adding 1 to A[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to A[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to A[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to A[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
1 <= queries.length <= 10000
-10000 <= queries[i][0] <= 10000
0 <= queries[i][1] < A.length
*/
//speed:56%
var sumEvenAfterQueries = function (A, queries) {
	let res = [];

	let currentSumOfEvens = 0; //Since each querey ONLY changes one element in the array, maintain a moving sum.
	for(x of A) {
		if(Math.abs(x)%2===0) currentSumOfEvens+=x;
	}

	for(q of queries) {
		let oldValue = A[q[1]];
		let newValue = A[q[1]] + q[0];
		// maintain a moving sum: remove the old value and add the new value (i.e if they are even numbers)
		currentSumOfEvens = currentSumOfEvens - (Math.abs(oldValue)%2===0?oldValue:0) + (Math.abs(newValue)%2===0?newValue:0);
		A[q[1]] = newValue; //mutate the array
		res.push(currentSumOfEvens);
	}
	return res;
};

//LC#0989 Diff:Easy  Add to Array-Form of Integer
/*
For a positive integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].
Given the array-form A of a positive integer X, return the array-form of the integer X+K.

Input: A = [1,2,0,0], K = 34     Output: [1,2,3,4]	 Explanation: 1200 + 34 = 1234
Input: A = [2,7,4], K = 181      Output: [4,5,5]     Explanation: 274 + 181 = 455
Input: A = [2,1,5], K = 806      Output: [1,0,2,1]   Explanation: 215 + 806 = 1021
Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1    Output: [1,0,0,0,0,0,0,0,0,0,0]   Explanation: 9999999999 + 1 = 10000000000

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
If A.length > 1, then A[0] != 0
*/
//wrong solution: this wont work if A.length > 10. the number can't be represented in JS.
var addToArrayForm = function (A, K) {
	return (Number(A.join('')) + K).toString().split('');
};
// this one works -
var addToArrayForm = function (A, K) {
	return [...(BigInt(A.join('')) + BigInt(K) + '')];
};
//speed:60%  40mins to do :/
var addToArrayForm = function (A, K) {
	K = K.toString().split('').map(x => Number(x));

	let a = A.length >= K.length ? A : K;  //a is the larger array (even if it is the same size as the other one)
	let b = a === A ? K : A;  //b is the smaller array

	let result = [];
	let i=a.length-1, c = 0;
	for(j=b.length-1;j>=0;j--,i--){  //finish the smaller array first
		let sum = a[i] + b[j] + c;
		if(sum>9) {sum=sum-10;c = 1;} else {c=0;} //make 17 as 7 with a carryover of 1
		result.push(sum);
	}
	if(i===-1 && c>0) {   //meaning A and K are of the same size, both i and j are at -1, but a carryover exists
		result.push(c);
	} else if (i >= 0) {
		//i being with the larger array, might still have some digits left
		while (i >= 0) {  //the two numbers maybe of equal size
			let sum = a[i] + c;
			if (sum > 9) { sum = sum - 10; c = 1; }  else {c=0;} //make 17 as 7 with a carryover of 1
			result.push(sum);
			--i;
		}
		//there might still be a carry left even here! 9999+1
		if(c>0) result.push(c);
	}
	return result.reverse();
}
//v2
var addToArrayForm = function (A, K) {
	K = K.toString().split('').map(x => Number(x)).reverse();
	A = A.reverse();
	let res = [];

	let len = Math.max(A.length, K.length);
	let c = 0;
	for(i=0;i<len;i++){
		let sum = 0;
		if (A[i]!==undefined && K[i]!==undefined) sum = A[i] + K[i];  //dont just do if (A[i] && K[i]), what if A[i] is 0
		else if (A[i]!==undefined) sum = A[i];
		else if (K[i]!==undefined) sum = K[i];   //in 9999 + 1, in the end both A[i] and K[i] are undefined, only c is there

		sum = sum + c;
		if(sum>9) {sum=sum-10; c=1;}
		else c=0;
		res.push(sum);
	}
	if(c>0) res.push(c);
	return res.reverse();
}
//leetcode
var addToArrayForm = function (A, K) {
	const n = A.length
	const temp = []
	let i = n - 1
	let c = 0

	while (i >= 0 || K > 0) {
		let k = K % 10
		let a = i < 0 ? 0 : A[i]
		let s = k + a + c
		let d = s % 10
		temp.push(d)
		c = s > 9 ? 1 : 0
		K = Math.floor(K / 10)
		i--
	}
	if (c == 1) temp.push(c)
	return temp.reverse()
};
//leetcode
var addToArrayForm = function (A, K) {
	let flag = A.length - 1
	while (K) {
		if (flag < 0) {
			A.unshift(K % 10)
		} else {
			K += A[flag]
			A[flag--] = K % 10
		}
		K = Math.floor(K / 10)
	}
	return A
}
//leetcode
var addToArrayForm = function (arr, K) {
	let res = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		res.push((arr[i] + K) % 10);
		K = ~~((arr[i] + K) / 10);
	}
	while (K > 0) {
		res.push(K % 10);
		K = ~~(K / 10);
	}
	return res.reverse();
};

//LC#0993 Diff:Easy Cousins in Binary Tree
/*
In a binary tree, the root node is at depth 0. Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
Given a binary tree and the values x and y of two different nodes in the tree. Return true if and only if the nodes corresponding to the values x and y are cousins.
Input: root = [1,2,3,4], x = 4, y = 3   Output: false
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4   Output: true
Input: root = [1,2,3,null,4], x = 2, y = 3    Output: false
Constraints:
>The number of nodes in the tree will be between 2 and 100.
>Each node has a unique integer value from 1 to 100.
Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//leetcode solution:
var isCousins = function (root, x, y) {
	const queue = [root];
	while (queue.length) {
		// new level
		const size = queue.length;
		let foundX = false, foundY = false;

		for (let i = 0; i < size; i++) {  // iterate through one level
			const node = queue.shift();
			if (node.left && node.right) {
				if ((node.left.val === x && node.right.val === y) ||(node.left.val === y && node.right.val === x)) return false;
			}
			// find x and y at the same level
			if (node.val === x) foundX = true;
			if (node.val === y) foundY = true;
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		if (foundX && foundY) return true;
	}
	return false;
};
//dfs leetcode
var isCousins = function (root, x, y) {

	const callDFS = (val, myRoot = root, parent = null, depth = 0) => {
		if (!myRoot) return false;
		if (myRoot.val === val) return [depth, parent];
		depth++;
		return callDFS(val, myRoot.right, myRoot.val, depth) || callDFS(val, myRoot.left, myRoot.val, depth);
	}

	const [depthX, parentX] = callDFS(x);
	const [depthY, parentY] = callDFS(y);

	return (parentX !== parentY) && (depthX === depthY)
};

//LC#0 Diff:Easy Find the Town Judge
/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is SECRETLY the town judge.
If the town judge exists, then:
1)The town judge trusts nobody.
2)Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs, where trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.
Input: N = 2, trust = [[1,2]]  Output: 2
Input: N = 3, trust = [[1,3],[2,3]]  Output: 3
Input: N = 3, trust = [[1,3],[2,3],[3,1]]   Output: -1
Input: N = 3, trust = [[1,2],[2,3]]   Output: -1  Because 3 MUST be directly trusted by everybody.
Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]   Output: 3

1 <= N <= 1000
0 <= trust.length <= 10^4
trust[i].length == 2
trust[i] are all different
trust[i][0] != trust[i][1]
1 <= trust[i][0], trust[i][1] <= N
*/
// the trusted person should be directly trusted by exactly N-1 people..... (also he loses points if he trusts anyone)
var findJudge = function (N, trust) {
	let counts = new Array(N + 1).fill(0);
	for([i,j] of trust) {
		counts[i]--;  //if you trust someone, your count will decrease
		counts[j]++;	//if you are trusted by someone, your count will increase
	}
	for(i=1;i<counts.length;i++){  // there is no person called "0"
		if(counts[i]===N-1) return i;  //your count has to EXACTLY be N-1 (not more and not less), to be the judge
	}
	return -1;
}

//LC#0999 Diff:Easy Available Captures for Rook
/*
On an 8 x 8 chessboard, there is one white rook (R).  There also may be empty squares (.), white bishops (B), and black pawns (p). Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, the white rook cannot move into the same square as other friendly white bishops.
Return the number of potential pawns the rook can capture in one move.

Input:
[	[".",".",".",".",".",".",".","."],
	[".",".",".","p",".",".",".","."],
	[".",".",".","R",".",".",".","p"],
	[".",".",".",".",".",".",".","."],
	[".",".",".",".",".",".",".","."],
	[".",".",".","p",".",".",".","."],
	[".",".",".",".",".",".",".","."],
	[".",".",".",".",".",".",".","."]]
Output: 3     Explanation: In this example the rook is able to capture all the pawns.
Input:
[	[".",".",".",".",".",".",".","."],
	[".","p","p","p","p","p",".","."],
	[".","p","p","B","p","p",".","."],
	[".","p","B","R","B","p",".","."],
	[".","p","p","B","p","p",".","."],
	[".","p","p","p","p","p",".","."],
	[".",".",".",".",".",".",".","."],
	[".",".",".",".",".",".",".","."]]
Output: 0     Explanation: Bishops are blocking the rook to capture any pawn.
Input:
[	[".",".",".",".",".",".",".","."],
	[".",".",".","p",".",".",".","."],
	[".",".",".","p",".",".",".","."],
	["p","p",".","R",".","p","B","."],
	[".",".",".",".",".",".",".","."],
	[".",".",".","B",".",".",".","."],
	[".",".",".","p",".",".",".","."],
	[".",".",".",".",".",".",".","."]]
Output: 3   Explanation: The rook can capture the pawns at positions b5, d6 and f5.

board.length == board[i].length == 8  (it is a 8x8 matrix)
board[i][j] is either 'R', '.', 'B', or 'p'
There is exactly one cell with board[i][j] == 'R'
*/
//speed:8%
var numRookCaptures = function (A) {  //A is the board i.e 8x8 matrix
	let [x,y] = getRookPosition();

	let i,j,count = 0;
	i=x;j=y;
	while(j<7){
		++j;
		if(A[i][j]==='B') break;
		else if(A[i][j]==='p') {++count; break}
	}
	i=x;j=y;
	while(j>0){
		--j;
		if (A[i][j] === 'B') break;
		else if (A[i][j] === 'p') { ++count; break }
	}
	i=x;j=y;
	while(i<7){
		++i;
		if (A[i][j] === 'B') break;
		else if (A[i][j] === 'p') { ++count; break }
	}
	i=x;j=y;
	while (i > 0) {
		--i;
		if (A[i][j] === 'B') break;
		else if (A[i][j] === 'p') { ++count; break }
	}
	return count;

	function getRookPosition(){
		for(let i=0;i<8;i++){
			for(let j=0;j<8;j++){
				if(A[i][j]==='R') return [i,j];
			}
		}
	}
};

//leetcode similar
const numRookCaptures = board => {
	let x, y;
	for (let i = 0; i < 8; ++i) {
		for (let j = 0; j < 8; ++j) {
			if (board[i][j] === 'R') {x = i;y = j;}
		}
	}

	let ret = 0;
	for (const [xo, yo] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
		for (let i = x + xo, j = y + yo; i < 8 && i >= 0 && j < 8 && j >= 0; i += xo, j += yo) {
			if (board[i][j] === "B") break;
			if (board[i][j] === "p") { ++ret; break; }
		}
	}
	return ret;
};

//LC#1002 Diff:Easy Find Common Characters
/*
Given an array "A" of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
You may return the answer in any order.
Input: ["bella","label","roller"]   Output: ["e","l","l"]
Input: ["cool","lock","cook"]      Output: ["c","o"]

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter
*/
//speed:5%
var commonChars = function (A) {
	let currentCommon = A[0];  //A.length>=1
	for(let j=1; j<A.length;j++){
		currentCommon = getCommonLetters(A[j], currentCommon);
	}
	return currentCommon.split('');


	function getCommonLetters(a,b) {
		let hm_a = {}
		for(x of a) hm_a[x] = hm_a[x]+1 || 1;
		let hm_b = {}
		for (x of b) hm_b[x] = hm_b[x]+1 || 1;

		let result = '';
		for(c of Object.keys(hm_a)) {
			if(hm_b[c]!==undefined) { //this char exists even in b
				result += c.repeat(Math.min(hm_a[c], hm_b[c])); //c may appear 3 times in a and 6 times in b, you use 3.
			}
		}
		return result;
	}
};
//optimization: speed 15%
function getCommonLetters(a, b) {
	let hm_a = {}
	for (x of a) hm_a[x] = hm_a[x] + 1 || 1;

	let result = '';
	for(c of b) {
		if(hm_a[c]!==undefined && hm_a[c]>0){
			result += c;
			--hm_a[c];
		}
	}
	return result;
}
//speed:95% leetcode
var commonChars = function (A) {
	let ans = A[0].split('');
	for (let i = 1; i < A.length; i++) {
		ans = findCommon(ans, A[i].split(''));
	}
	return ans;

	function findCommon(a, b) {
		return a.filter(v => {
			let i = b.indexOf(v);
			if (i !== -1) { // v exists in a and b
				b.splice(i, 1);  //remove this occurence of v from b... but return true meaning you want the v in a.filter()
				return true
			}
			return false;
		})
	};
}

//LC#1005 Diff:Easy  Maximize Sum Of Array After K Negations
/*
Given an array "A" of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)
Return the largest possible sum of the array after modifying it in this way.

Input: A = [4,2,3], K = 1    Output: 5   Explanation: Choose indices (1) and A becomes [4,-2,3].
Input: A = [3,-1,0,2], K = 3  Output: 6   Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].
Input: A = [2,-3,-1,5,-4], K = 2  Output: 13  Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].
Note:
1 <= A.length <= 10000
1 <= K <= 10000
-100 <= A[i] <= 100
*/
//speed:17% too good ktk, solved in 20mins
var largestSumAfterKNegations = function (A, K) {
	for(i=K;i>=1;i--){
		minPos = A.indexOf(Math.min(...A));
		if(A[minPos]<0){
			//flip as many negative numbers to positive numbers as you can
			A[minPos] = A[minPos]*-1;
		} else {
			//that means there are no negative numbers left in the entire array
			if(i%2==0) {
				//don't need to flip anything at all.. (meaning you will just flip one of the numbers even number of times)
				return arrSum(A);
			} else {
				A[minPos] = A[minPos]*-1;  //i is some odd number, just flip the lowest minimum number
				return arrSum(A);
			}
		}
	}
	//K was not enough, there are still some untouched numbers. You flipped the best you could. Just return sum.
	return arrSum(A);

	function arrSum(arr) {
		return arr.reduce((acc,x) => acc+x, 0);
	}

};
//sort the array first
var largestSumAfterKNegations = function (A, K) {
	A.sort((a, b) => a - b);
	// flip as many negative numbers as possible
	for (let i = 0; i < A.length && K > 0 && A[i] < 0; i++, K--) A[i] = -A[i];

	if (K > 0 && K % 2 == 1) { // if you still have an odd k, then flip the smallest number in the current array
		const minI = A.reduce((min, cur, i) => (cur < A[min] ? i : min), 0); // or A.indexOf(Math.min(...A));
		A[minI] = -A[minI];
	}
	return A.reduce((acc, cur) => acc + cur);
};

//LC#1009 Diff:Easy Complement of Base 10 Integer Same as 0476
/*
Every non-negative integer N has a binary representation.  For example, 5 can be represented as "101" in binary, 11 as "1011" in binary, and so on.  Note that except for N = 0, there are no leading zeroes in any binary representation.

For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.

Input: 5   Output: 2   Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
Input: 7   Output: 0   Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
Input: 10  Output: 5   Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
Note:
0 <= N < 10^9
This question is the same as 476: https://leetcode.com/problems/number-complement/
*/
//speed:77%
var bitwiseComplement = function (N) {
	let newBinary = N.toString(2).split('').map(x => Math.abs(x-1));

	//return parseInt(newBinary, 2); //this single line will also work
	let sum=0, p = 1;
	while(newBinary.length){
		sum += p*newBinary.pop();
		p*=2;
	}
	return sum;
};
//leetcode
var bitwiseComplement = function (N) {
	let mask = 1;
	while (N > mask) mask = (mask << 1) | 1;  //you need to find 'mask' which is the largest number less than N, which is a 2^x - 1 number like 1,3,7,15,31 etc.  Then N^thisNumber is the compliment of N
	return N ^ mask;
};
/*
Test Case: N = 5;
WHILE:
Run 1: 5 > 1 true
mask = (mask << 1) | 1
mask = (1 << 1) | 1 // left shift on 1 results in 0010 and | 1 results in 0011, mask = 3 or 0011
Run 2: 5 > 2 true
mask = (mask << 1) | 1 //left shift on
mask = (2 << 1) | 1 // left shift on 2 results in 0110 and | 1 results in 0111, mask = 7
exit WHILE
return N ^ mask;
return5 ^ 7 // 0101 ^ 0111 results in 0010 = 2 // CORRECT ANSWER IS 2
*/
function bitwiseComplement(N) {
	if (N === 0) return 1;

	const n = Math.floor(Math.log2(N) + 1);
	const mask = 2 ** n - 1;

	return N ^ mask;
}
const bitwiseComplement = function (num) {
	if (num === 0) return 1;

	let highestDivisor = 1;
	while (highestDivisor <= num) highestDivisor *= 2;

	return highestDivisor - num - 1;
};

//LC#1010 Diff:Easy Pairs of Songs With Total Durations Divisible by 60
/*
In a list of songs, the i-th song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

Input: [30,20,150,100,40]   Output: 3
	Explanation: Three pairs have a total duration divisible by 60:
	(time[0] = 30, time[2] = 150): total duration 180
	(time[1] = 20, time[3] = 100): total duration 120
	(time[1] = 20, time[4] = 40): total duration 60
Input: [60,60,60]		Output: 3
	Explanation: All three pairs have a total duration of 120, which is divisible by 60.

Note:
1 <= time.length <= 60000
1 <= time[i] <= 500
*/
//speed: too SLOW
var numPairsDivisibleBy60 = function (time) {
	let count = 0;
	for(i=0;i<time.length;i++){
		for(j=i+1;j<time.length;j++){
			if((time[i]+time[j])%60==0) ++count;
		}
	}
	return count;
};
//speed: 60%  this took 40 mins
var numPairsDivisibleBy60 = function (time) {
	time = time.map(x=>x%60);
	//now you have an array of [0,0,1,1,2,3,4......58,58,59,59]  (won't be sorted though)

	let hm = {}, count = 0;
	for(x of time) {
		if (hm[60 - x] !== undefined) count += hm[60 - x];  //this will work for 1->59
		if(x===0 || x===60) count+=hm[x]||0;  //0 and 60 need special logic

		hm[x] = hm[x] + 1 || 1;  //first count previous, than add a count.
	}
	return count;
}
//leetcode: you don't have to sort the array...
var numPairsDivisibleBy60 = function (time) {
	let hm = {}, count = 0;
	for (x of time) {
		x = x%60;
		y = x===0?0:60-x;

		if(hm[y]) count+=hm[y];  //for this x, count all its previous complements
		hm[x] = hm[x] + 1 || 1;
	}
	return count;
}

//LC#1013 Diff:Easy Partition Array Into Three Parts With Equal Sum
/*
Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

Input: A = [0,2,1,-6,6,-7,9,1,2,0,1]  Output: true   Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Input: A = [0,2,1,-6,6,7,9,-1,2,0,1]  Output: false
Input: A = [3,3,6,5,-2,2,5,1,-9,4]   Output: true   Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

Constraints:
3 <= A.length <= 50000
-10^4 <= A[i] <= 10^4
*/
//speed:41%
var canThreePartsEqualSum = function (A) {
	let sum = A.reduce((acc,x)=>acc+x,0)/3;

	let s = 0, count=0;
	for(i=0;i<A.length;i++){
		s+=A[i];
		if(s===sum) {++count; s=0};
	}
	return count>=3;
};

//LC#1018 Diff:Easy Binary Prefix Divisible By 5
/*
Given an array 'A' of 0s and 1s, consider N_i: the i-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)
Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.

Input: [0,1,1]  Output: [true,false,false]
	Explanation:
	The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.  Only the first number is divisible by 5, so answer[0] is true.
Input: [1,1,1]   Output: [false,false,false]
Input: [0,1,1,1,1,1]   Output: [true,false,false,false,true,false]
Input: [1,1,1,0,1]   Output: [false,false,false,false,false]

1 <= A.length <= 30000
A[i] is 0 or 1
*/
//speed: this won't work for very large arrays, as you can't store such big numbers like 2^1000 etc in JS...
var prefixesDivBy5 = function (A) {
	let res = [];

	let twoToPow = {}, m = 1; //two to the power
	for(i=0;i<=A.length-1;i++){  //store all the values in a hm
		twoToPow[i] = m;
		m = m*2;
	}

	for(i=0;i<A.length;i++){
		let sum = 0;
		for(j=i,k=0;j>=0;j--,k++){
			sum = sum + A[j] * twoToPow[k];
		}
		res.push(sum%5===0);
	}
	return res;
};
//speed:45% leetcode solution
var prefixesDivBy5 = function (A) {
	let lsd = 0;
	return A.map((bit) => {
		lsd <<= 1;   //left shift by 1  so 1111 becomes 11110  (<< ONLY adds a zero to the right)
		lsd += bit;  //add the next digit from the array
		lsd %= 10;   //get the last digit of the new number, even for the next iteration, this is all you need
		return lsd === 0 || lsd === 5;   //if last digit is either 0 or 5, number is divisible by 5
	});
};

//LC#1021 Diff:Easy Remove Outermost Parentheses
/*
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings. Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

Input: "(()())(())"    Output: "()()()"
	Explanation: The input string is "(()())(())", with primitive decomposition "(()())" + "(())". After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Input: "(()())(())(()(()))"   Output: "()()()()(())"
	Explanation: The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))". After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Input: "()()"   Output: ""
	Explanation: The input string is "()()", with primitive decomposition "()" + "()". After removing outer parentheses of each part, this is "" + "" = "".

S.length <= 10000
S[i] is "(" or ")"
S is a valid parentheses string
*/
//speed:10%
var removeOuterParentheses = function (S) {

	let res = '';
	let bCount = 0;
	for(i=0;i<S.length;i++){
		if(S[i]==='(') {
			bCount++;
			if(bCount!==1) res+=S[i];
		} else {
			bCount--;
			if(bCount!==0) res+=S[i];
		}
	}
	return res;
};
//leetcode similar
var removeOuterParentheses = function (S) {
	let level = 0, res = '';

	for (let i = 0; i < S.length; ++i) {
		if (S[i - 1] === "(" && S[i] === "(") level++;   //two consecutive (( means going up one level
		else if (S[i - 1] === ")" && S[i] === ")") level--;  //two consecutive )) means going down one level

		if (level > 0) res += S[i];
	}
	return res;
};

//LC#1022 Diff:Easy Sum of Root To Leaf Binary Numbers
/*
Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
Return the sum of these numbers.

Input: [1,0,1,0,1,0,1]  Output: 22
	Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

Note:
The number of nodes in the tree is between 1 and 1000.
node.val is 0 or 1.
The answer will not exceed 2^31 - 1.

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
*/
//speed:35%  you can maintain a string instead of an array..
var sumRootToLeaf = function (root) {
	let sum = 0;

	function dfs(n, arr) {
		if(!n.left && !n.right){
			arr.push(n.val);
			sum += getValue(arr);
			return;
		}
		arr.push(n.val);
		if(n.left) dfs(n.left, arr.slice());  //you need to send a copy down....
		if(n.right) dfs(n.right, arr.slice());
	}
	dfs(root, []);
	return sum;

	function getValue(c) {
		let val = 0, k=1;
		for(let i=c.length-1;i>=0;i--){
			val += c[i] * k;
			k *= 2;
		}
		return val;
	}
};
//you can maintain a string instead of an array..
var sumRootToLeaf = function (root) {
	if(!root) return;

	let sum = 0;
	function dfs(n, str) {
		str += n.val;

		if (!n.left && !n.right) {
			sum += parseInt(BigInt(str), 2);   //  -----> You have to use BigInt() and not Number()
			return;
		}
		if (n.left) dfs(n.left, str);
		if (n.right) dfs(n.right, str);
	}
	dfs(root, '');
	return sum;
};
//speed: 90% leetcode: much cleaner
// 1010101 is 85. You read it left to right, you get sums: 1,2,5,10,21,42,85  (do curr=curr*2 + bit) curr starts with zero
var sumRootToLeaf = function (root) {
	if(!root) return;

	let paths = [];
	function helper(root, curr) {
		curr = curr * 2 + root.val;
		if (!root.left && !root.right) {
			paths.push(curr);
			return;
		}
		root.left && helper(root.left, curr);
		root.right && helper(root.right, curr);
	}
	helper(root, 0);
	let sum = paths.reduce((acc, curr) => acc + curr);
	return sum;
};

//LC#1025 Diff:Easy  Divisor Game
/*
Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:
>Choosing any x with 0 < x < N and N % x == 0.  (choose some factor of N)
>Replacing the number N on the chalkboard with N - x.
>Also, if a player cannot make a move, they lose the game.

Return True if and only if Alice wins the game, assuming both players play optimally.

Input: 2  Output: true 		Explanation: Alice chooses 1, and Bob has no more moves.
Input: 3 	Output: false		Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

1 <= N <= 1000
*/
//speed:100%  leetcode solution, stupid problem.. ignore
var divisorGame = function (N) {
	return N%2===0;
};
//explantion: https://leetcode.com/problems/divisor-game/discuss/514275/JS-simple-explanation
//dp solution
var divisorGame = function (N) {
	let winArray = new Array(N + 1).fill(false); //This array represents whether a person will win or not with this current value
	for (let i = 1; i <= N; i++) {
		for (let x = 1; x <= i / 2; x++) {
			if (i % x === 0 && winArray[i - x] === false) {
				// Here we check if the current x is the divisor or not also if current turn is of Alice and [i - x] would be the the turn of Bob and that has to be false for Alice to win
				winArray[i] = true;
				break;
			}
		}
	}
	return winArray[N];
};
//brute force
var divisorGame = function (N) {
	let count = 0;
	for (let i = N; i > 1; i--) {
		for (let j = 1; j < N; j++) {
			if (i % j === 0) {
				N = i - j;
				count++;
				break;
			}
		}
	}
	return count % 2 !== 0; // if count is odd then the player who made the first move is winner
};

//LC#1029 Diff:Easy Two City Scheduling
/*
There are 2N people that a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1]. Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.
Input: [[10,20],[30,200],[400,50],[30,20]]  Output: 110
	Explanation:
	The first person goes to city A for a cost of 10.
	The second person goes to city A for a cost of 30.
	The third person goes to city B for a cost of 50.
	The fourth person goes to city B for a cost of 20.
	The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

Note:
1 <= costs.length <= 100
It is guaranteed that costs.length is even.
1 <= costs[i][0], costs[i][1] <= 1000
*/
//for each pair you need to pick ONE number... so eventually you need to sum up 'costs.length' numbers
//speed:26%  very intuitive problem.... good job ktk
var twoCitySchedCost = function (costs) {
	costs = costs.map(x => [...x, Math.abs(x[0]-x[1])]);  //add a third number to each pai

	//sort the array in decreasing order of the diffs..
	costs.sort((a, b) => { //[[10,20],[30,200],[400,50],[30,20]] becomes [[400,50], [30,20], [10,20], [30,200]] as the diffs are [350,10,-10,-170]
		let x1 = a[0]-a[1];
		let x2 = b[0]-b[1];
		if(x1>=x2) return -1;
		else return 1;
	});

	let sum = 0;
	for(i=0;i<costs.length;i++){
		if(i<costs.length/2) sum+=costs[i][1];  //choose the second city in the first half of the array
		else sum += costs[i][0];   //choose the first city in the second half of the array
	}
	return sum;

};

//LC#1030 Diff:Easy Matrix Cells in Distance Order
/*
We are given a matrix with R rows and C columns. It has cells with integer coordinates (r, c), where 0 <= r < R and 0 <= c < C.
Additionally, we are given a cell in that matrix with coordinates (r0, c0).
Return the coordinates of all cells in the matrix, sorted by their distance from (r0, c0) from smallest distance to largest distance.  Here, the distance between two cells (r1, c1) and (r2, c2) is the Manhattan distance, |r1 - r2| + |c1 - c2|.  (You may return the answer in any order that satisfies this condition.)

Input: R = 1, C = 2, r0 = 0, c0 = 0     Output: [[0,0],[0,1]]
	Explanation: The distances from (r0, c0) to other cells are: [0,1]
Input: R = 2, C = 2, r0 = 0, c0 = 1					Output: [[0,1],[0,0],[1,1],[1,0]]
	Explanation: The distances from (r0, c0) to other cells are: [0,1,1,2]
	The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
Input: R = 2, C = 3, r0 = 1, c0 = 2			Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
	Explanation: The distances from (r0, c0) to other cells are: [0,1,1,2,2,3]	There are other answers that would also be accepted as correct, such as [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].

Note:
1 <= R <= 100
1 <= C <= 100
0 <= r0 < R
0 <= c0 < C
*/
//speed:60%  this is O(RC) though..
var allCellsDistOrder = function (R, C, r0, c0) {
	let res = [];
	for(i=0;i<R;i++){
		for(j=0;j<C;j++){
			res.push([i,j,mhd(i,j)]);   //add i,j and the distance from (r0,c0) i.e [i,j,dist]
		}
	}
	res.sort((a,b)=>a[2]-b[2]);  //sort them by the distances (increasing order)
	return res.map(x=>[x[0],x[1]]);  //remove the distance from each element and just send (x,y)

	function mhd(x1,y1){  //getManhattanDistance
		return Math.abs(x1-r0) + Math.abs(y1-c0);
	}
};
// in the for loop you can store it in an array: arr[distance] = arr[distance] ? arr[distance].push([i,j]) : [[i,j]];
// then in the end, just do for(x of arr) result.push(...x);

//leetcode BFS o(n)
const allCellsDistOrder = (r, c, r0, c0) => {
	const visited = new Set();
	const ret = [];
	const queue = [[r0, c0]];
	while (queue.length) {
		const [x, y] = queue.shift();
		if (x > r - 1 || x < 0 || y > c - 1 || y < 0 || visited.has(x * 100 + y)) continue;
		ret.push([x, y]);
		visited.add(x * 100 + y);
		[[0, -1], [0, 1], [1, 0], [-1, 0]].forEach(move => {
			queue.push([x + move[0], y + move[1]]);
		});
	}
	return ret;
};

//LC#1033 Diff:Easy Moving Stones Until Consecutive
/*
Three stones are on a number line at positions a, b, and c.Each turn, you pick up a stone at an endpoint (ie., either the lowest or highest position stone), and move it to an unoccupied position between those endpoints.
Formally, let's say the stones are currently at positions x, y, z with x < y < z.  You pick up the stone at either position x or position z, and move that stone to an integer position k, with x < k < z and k != y.
The game ends when you cannot make any more moves, ie. the stones are in consecutive positions.
When the game ends, what is the minimum and maximum number of moves that you could have made?  Return the answer as an length 2 array: answer = [minimum_moves, maximum_moves]

Input: a = 1, b = 2, c = 5   Output: [1,2]
	Explanation: Move the stone from 5 to 3, or move the stone from 5 to 4 to 3.
Input: a = 4, b = 3, c = 2   Output: [0,0]
	Explanation: We cannot make any moves.
Input: a = 3, b = 5, c = 1   Output: [1,2]
	Explanation: Move the stone from 1 to 4; or move the stone from 1 to 2 to 4.

1 <= a <= 100
1 <= b <= 100
1 <= c <= 100
a != b, b != c, c != a
*/
//minMoves has to be either 0,1,2..
//speed:20%
var numMovesStones = function (a, b, c) {
	let max = Math.max(a,b,c);
	let min = Math.min(a,b,c);
	let mid = a+b+c-max-min;  //whatever the third number is  (or sort the numbers to get max,mid and min)

	let gap1 = max-mid-1;
	let gap2 = mid-min-1;

	let minMoves, maxMoves;
	if(gap1===0 && gap2===0) minMoves = 0;
	else if (gap1<=1 || gap2<=1) minMoves = 1;   //if either of them is 0 or 1
	else minMoves = 2;

	maxMoves = gap1 + gap2;

	return [minMoves, maxMoves];
};

//LC#1037 Diff:Easy Valid Boomerang
/*
A boomerang is a set of 3 points that are all distinct and not in a straight line.
Given a list of three points in the plane, return whether these points are a boomerang.

Input: [[1,1],[2,3],[3,2]]  Output: true
Input: [[1,1],[2,2],[3,3]]  Output: false

Note:
points.length == 3
points[i].length == 2
0 <= points[i][j] <= 100

Bascially check if all three points are in the same line. (or do they form a triangle)
*/
//speed:75%
var isBoomerang = function (points) {
	let [[x1,y1], [x2,y2], [x3,y3]] = points;

	if(x1 === x2 && x2 === x3) return false; // the x coordinate of all 3 is the same
	if(y1 === y2 && y2 === y3) return false; // y coords are the same
	if( (x1===x2 && y1===y2) || (x2===x3 && y2===y3) || (x1===x3 && y1===y3) ) return false; //if any two points are the same

	//compare slopes
	if( (x3-x1)/(x3-x2) === (y3-y1)/(y3-y2) ) return false;

	return true;
};

//LC#1042 Diff:Easy Flower Planting With No Adjacent
/*
You have N gardens, labelled 1 to N.  In each garden, you want to plant one of 4 types of flowers.
paths[i] = [x, y] describes the existence of a bidirectional path from garden x to garden y.
Also, there is no garden that has more than 3 paths coming into or leaving it.
Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.
Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)-th garden.  The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

Input: N = 3, paths = [[1,2],[2,3],[3,1]]   Output: [1,2,3]
Input: N = 4, paths = [[1,2],[3,4]]    Output: [1,2,1,2]
Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]    Output: [1,2,3,4]

Note:
1 <= N <= 10000
0 <= paths.size <= 20000
No garden has 4 or more paths coming into or leaving it.
It is guaranteed an answer exists.
*/
// https://www.cs.cornell.edu/courses/cs3110/2012sp/recitations/rec21-graphs/rec21.html
//speed:90% leetcode solution no idea what it does
var gardenNoAdj = function (N, paths) {
	const G = [...Array(N)].map(_ => new Set());
	paths.forEach(p => {
		if (p[0] > p[1]) G[p[0] - 1].add(p[1] - 1);
		else G[p[1] - 1].add(p[0] - 1);
	});
	const ans = Array(N);
	for (let i = 0; i < N; i++) {
		const colors = Array(5);
		G[i].forEach(neighbor => {
			colors[ans[neighbor]] = 1;
		});
		for (let j = 1; j <= 4; j++) {
			if (!colors[j]) {
				ans[i] = j;
				break;
			}
		}
	}
	return ans;
};

//LC#1046 Diff:Easy Last Stone Weight
/*
We have a collection of stones, each stone has a positive integer weight.
Each turn, we choose the two heaviest stones and smash them together.
Suppose the stones have weights x and y with x <= y.  The result of this smash is:
>If x == y, both stones are totally destroyed;
>If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

Input: [2,7,4,1,8,1]   Output: 1
	Explanation:
	We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
	we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
	we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
	we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

Note:
1 <= stones.length <= 30
1 <= stones[i] <= 1000
*/
//speed:35% leetcode solution no idea what it does
var lastStoneWeight = function(stones) {

	class MaxHeap {
		constructor(data = []) {
			this.data = data;
			this.comparator = (a, b) => b - a;
			this.heapify();
		}

		// O(nlog(n)). In fact, O(n)
		heapify() {
			if (this.size() < 2) return;
			for (let i = 1; i < this.size(); i++) {
				this.bubbleUp(i);
			}
		}

		// O(1)
		peek() {
			if (this.size() === 0) return null;
			return this.data[0];
		}

		// O(log(n))
		offer(value) {
			this.data.push(value);
			this.bubbleUp(this.size() - 1);
		}

		// O(log(n))
		poll() {
			if (this.size() === 0) return null;
			const result = this.data[0];
			const last = this.data.pop();
			if (this.size() !== 0) {
				this.data[0] = last;
				this.bubbleDown(0);
			}
			return result;
		}

		// O(log(n))
		bubbleUp(index) {
			while (index > 0) {
				const parentIndex = (index - 1) >> 1;
				if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
					this.swap(index, parentIndex);
					index = parentIndex;
				} else {
					break;
				}
			}
		}

		// O(log(n))
		bubbleDown(index) {
			const lastIndex = this.size() - 1;
			while (true) {
				const leftIndex = index * 2 + 1;
				const rightIndex = index * 2 + 2;
				let findIndex = index;
				if (
					leftIndex <= lastIndex &&
					this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
				) {
					findIndex = leftIndex;
				}
				if (
					rightIndex <= lastIndex &&
					this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
				) {
					findIndex = rightIndex;
				}
				if (index !== findIndex) {
					this.swap(index, findIndex);
					index = findIndex;
				} else {
					break;
				}
			}
		}

		// O(1)
		swap(index1, index2) {
			[this.data[index1], this.data[index2]] = [
				this.data[index2],
				this.data[index1]
			];
		}

		// O(1)
		size() {
			return this.data.length;
		}
	}

  const heap = new MaxHeap(stones);
  while (heap.size() > 1) {
    const max1 = heap.poll();
    const max2 = heap.poll();
    if (max1 > max2) heap.offer(max1 - max2);
  }
	return heap.size() === 1 ? heap.poll() : 0;


};


//LC#1047 Diff:Easy Remove All Adjacent Duplicates In String
/*
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing BOTH of them.
We repeatedly make duplicate removals on S until we no longer can.
Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

Input: "abbaca"  Output: "ca"
	Explanation: For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

Note:
1 <= S.length <= 20000
S consists only of English lowercase letters.
*/
//speed:65%
var removeDuplicates = function (S) {
	for (i = 0; i < S.length; i++) {
		if (i < 0) i = 0;
		if (S[i] !== undefined && S[i] === S[i + 1]) {
			S = S.substr(0, i) + S.substr(i + 2);
			i = i - 2;
		}
	}
	return S;
};
//speed:70% leetcode solution. Very elegant
var removeDuplicates = function (S) {
	let res = [];
	for (let i = 0; i < S.length; i++) {
		if (S[i] !== res[res.length - 1]) {
			res.push(S[i]);
		} else {
			res.pop();
		}
	}
	return res.join("");
};
//regex based leetcode
const removeDuplicates = s => {
	const s2 = s.replace(/(.)\1/g, '');
	return s2.length === s.length ? s : removeDuplicates(s2);
};

//LC#1051 Diff:Easy Height Checker
/*
Students are asked to stand in increasing order of heights for an annual photo.
Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

Input: heights = [1,1,4,2,1,3]  Output: 3
Explanation:
Current array : [1,1,4,2,1,3]
Target array  : [1,1,1,2,3,4]
On index 2 (0-based) we have 4 vs 1 so we have to move this student.
On index 4 (0-based) we have 1 vs 3 so we have to move this student.
On index 5 (0-based) we have 3 vs 4 so we have to move this student.

Input: heights = [5,1,2,3,4]   Output: 5
Input: heights = [1,2,3,4,5]   Output: 0

Constraints:
1 <= heights.length <= 100
1 <= heights[i] <= 100
*/
//just count what mismatch is there between the sorted and unsorted
//speed:45%
var heightChecker = function (heights) {
	let final = heights.slice().sort((x, y) => x - y);  //make a copy and then sort in place
	let count = 0;
	for(i=0;i<heights.length;i++){
		if(heights[i]!==final[i]) ++count;
	}
	return count;
};
//leetcode another way to do it
var heightChecker = function (heights) {
	const cnts = new Array(101).fill(0);
	for (let i = 0; i < heights.length; i++) cnts[heights[i]]++;

	let idx = 0, answer = 0;
	for (let x = 1; x < 101; x++) {
		while (cnts[x]--) {
			if (heights[idx++] !== x) {
				answer++;
			}
		}
	}
	return answer;
};

//LC#1071 Diff:Easy Greatest Common Divisor of Strings
/*
For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)
Return the largest string X such that X divides str1 and X divides str2.
Input: str1 = "ABCABC", str2 = "ABC"  Output: "ABC"
Input: str1 = "ABABAB", str2 = "ABAB"  Output: "AB"
Input: str1 = "LEET", str2 = "CODE"   Output: ""

Note:
1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1[i] and str2[i] are English uppercase letters.
*/
//speed:  leetcode solution
const gcdOfStrings = (str1, str2) => {
	if (str1 + str2 !== str2 + str1) return '';   //if a gcd exists, then this condition has to be false. think about it.

	//now we know gcg exists for sure. So str1 is x times 'xyz' and str2 is y times 'xyz'. Just find the gcd of the lengths.
	const gcd = (a, b) => (0 === b ? a : gcd(b, a % b)); //usual gcd function
	return str1.substring(0, gcd(str1.length, str2.length));
};

//LC#1078 Diff:Easy Occurrences After Bigram
/*
Given words "first" and "second", consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.
For each such occurrence, add "third" to the answer, and return the answer.

Input: text = "alice is a good girl she is a good student", first = "a", second = "good"   Output: ["girl","student"]
Input: text = "we will we will rock you", first = "we", second = "will"    Output: ["we","rock"]
Note:
1 <= text.length <= 1000
text consists of space separated words, where each word consists of lowercase English letters.
1 <= first.length, second.length <= 10
first and second consist of lowercase English letters.
*/
//speed:5% brutefrce
var findOcurrences = function (text, first, second) {
	let res = [];
	let words = text.split(' ');
	for(i=0;i<words.length-2;i++){
		if(words[i]===first) {
			if(words[i+1]===second) res.push(words[i+2])
		}
	}
	return res;
};
//speed: 35% leetcode
const findOcurrences = (text, first, second) => {
	const regex = new RegExp(`(?<=\\b${first} ${second}\\s)\\w+`, 'g');
	return text.match(regex) || [];
};
//leetcode for stream of words
function readAWord(word) {
	if(prev===second && prevPrev===first) result.push(word);
	prevPrev = prev;
	prev = word;
}

//LC#1089 Diff:Easy Duplicate Zeros
/*
Given a fixed length array "arr" of integers, duplicate each occurrence of zero, shifting the remaining elements to the right. Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.
Input: [1,0,2,3,0,4,5,0]  Output: null
	Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Input: [1,2,3]  Output: null
	Explanation: After calling your function, the input array is modified to: [1,2,3]

Note:
1 <= arr.length <= 10000
0 <= arr[i] <= 9
*/
//speed:5%
var duplicateZeros = function (arr) {
	for(i=0;i<arr.length;i++){
		if(arr[i]===0) {
			for (j=arr.length-1;j>i+1;j--) arr[j] = arr[j - 1];

			arr[j]=0;  //this is arr[i+1]
			i++; //don't read this zero
		}
	}
};
//speed: 33% good one ktk!
var duplicateZeros = function (arr) {
	let queue = [];
	for(i=0;i<arr.length;i++){
		if(queue.length>0) {
			queue.push(arr[i]);
			arr[i] = queue.shift();
		}
		if(arr[i]===0) {
			queue.push(arr[i+1]);
			if(i+1<arr.length) arr[i+1]=0;
			++i;
		}
	}
}
//leetcode: splice is the fastest way?!
var duplicateZeros = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr.splice(i + 1, 0, 0);
			arr.pop();
			i++;
		}
	}
};

//LC#1103 Diff:Easy Distribute Candies to People
/*
We distribute some number of candies to a row of "n" people people in the following way:
>We give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the nth person.
>Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2*n candies to the last person.
>This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies. If you don't have enough candies in the end, you just give the last guy, whatever is left.

Return an array of length "n", with the sum candies that each person got. (the final distribution)
Input: candies = 7, num_people = 4   Output: [1,2,3,1]
Input: candies = 10, num_people = 3  Output: [5,2,3]

Constraints:
1 <= candies <= 10^9
1 <= num_people <= 1000
*/
//speed:5%
var distributeCandies = function (candies, n) {  //n is number of people
	let result = new Array(n).fill(0);

	let i=0; iteration = -1;
	while(candies > 0) {
		if (i%n===0) ++iteration;

		candiesToGive = Math.min(i%n+1 + (iteration*n), candies); //in the end you may not have enough candies, so you just give candies.
		result[i%n] += candiesToGive;
		candies -= candiesToGive;
		++i;
	}
	return result;
};
//speed: 50% similar solution
var distributeCandies = function (candies, n) {
	let result = new Array(n).fill(0);
	let give = 1; i =0;
	while(candies>0){
		if(candies<give) give = candies; //if there are lesser, than give the remaining ones
		result[i%n] += give;
		candies -= give;
		give++; i++;
	}
	return result;
}

//LC#1108 Diff:Easy Defanging an IP Address
/*
Given a valid (IPv4) IP address, return a defanged version of that IP address. A defanged IP address replaces every period "." with "[.]".
Input: address = "1.1.1.1"  Output: "1[.]1[.]1[.]1"
Input: address = "255.100.50.0"  Output: "255[.]100[.]50[.]0"
Constraints: The given address is a valid IPv4 address.
*/
//speed:15%
var defangIPaddr = function (address) {
	return address.replace(/\./g, '[.]');   //return address.split('.').join('[.]'); is 10X faster!!!!
};
var defangIPaddr = function (address) {
	var result = "";
	for (var i = 0; i < address.length; i++) {  //or so address.split('').map(x => ABC ).join('') with same logic
		if (address[i] === ".") result += "[.]";
		else result += address[i];
	}
	return result;
};

//LC#1114 Diff:Easy Print in Order
/*
This is not a JS question. It is about multithreading and mutex/semaphore.
Suppose we have a class:
public class Foo {
  public void first() { print("first"); }
  public void second() { print("second"); }
  public void third() { print("third"); }
}
The same instance of Foo will be passed to three different threads. Thread A will call first(), thread B will call second(), and thread C will call third(). Design a mechanism and modify the program to ensure that second() is executed after first(), and third() is executed after second().
*/
//speed:

//LC#1122 Diff:Easy Relative Sort Array
/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]    Output: [2,2,2,1,4,3,3,9,6,7,19]

Constraints:
arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
Each arr2[i] is distinct.
Each arr2[i] is in arr1.
*/
//speed:22% beauty ktk!
var relativeSortArray = function (arr1, arr2) {
	let hm = {};
	for(i=0;i<arr2.length;i++) hm[arr2[i]] = i;  //arr2 has all distinct elements only

	arr1.sort(sortFunction);

	function sortFunction(a,b) {
		if (hm[a] === undefined && hm[b] === undefined) return a - b; //normal ascending sort for two nums that don't exist in arr2

		//at this point, maybe, a or b, only one of them is not there in arr2
		if (hm[a] === undefined) return 1; //b should come before a, as b is there in arr2
		else if (hm[b] === undefined) return -1; //a should come before b, as a is there in arr2

		//at this point both a and b are there in arr2 for sure (you can just return hm[a]-hm[b].....)
		if(hm[a]<hm[b]) return -1; //a comes before b in arr2
		else if (hm[a]===hm[b]) return 0;
		else if (hm[a]>hm[b]) return 1; //b comes before a in arr2
	}
	return arr1;
};
//speed: 55% faster than above, weirdly.
var relativeSortArray = function (arr1, arr2) {
	let hm1 = {}
	for(x of arr1) hm1[x] = hm1[x] + 1 || 1;

	let res = [];
	for(y of arr2) {
		while(hm1[y]>0) {
			res.push(y);
			hm1[y]--;
		}
		delete hm1[y];
	}
	//By now all the numbers from arr2 are done.

	for(key of Object.keys(hm1).sort((x,y)=>x-y)) {  //sort the remaining keys (these don't exist in arr2)
		while(hm1[key]>0) {
			res.push(key);
			hm1[key]--;
		}
	}
	return res;
}

//LC#1128 Diff:Easy Number of Equivalent Domino Pairs
/*
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j]. So i should be less than j.. therefore 'permutations'.
Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]   Output: 1
Constraints:
1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9
*/
//counting permuations for (1 2 3 4 5)
//perms are 1-2,1-3,1-4,1-5 | 2-3,2-4,2-5 | 3-4,3-5 | 4-5 = 10perms
//speed:82%
var numEquivDominoPairs = function (dominoes) {
	let count=0,hm = {};
	for([a,b] of dominoes) {
		let key = a < b ? `${a}${b}` : `${b}${a}`;
		if(hm[key]===undefined) hm[key] = 0;
		else {
			hm[key] += 1;
			count += hm[key];  //brilliant way of counting perumatations!
		}
	}
	return count;
};

//LC#1137 Diff:Easy N-th Tribonacci Number
/*
The Tribonacci sequence Tn is defined as follows:
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
Given n, return the value of Tn.
Input: n = 4  Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Input: n = 25  Output: 1389537


Constraints:
0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/
//basic one takes two long!
var tribonacci = function (n) {
	if(n<=0) return 0;  //this has to be <=
	if(n===1 || n===2) return 1;

	return tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3);
};
//speed: 25% O(n)
var tribonacci = function (n) {
	if(n<2) return n; // 0 and 1.
	if(n===2) return 1;
	let a = 0, b = 1, c = 1;  //or use an array and push the sum on to the array
	let sum;
	while(n-- > 2) {
		sum = a + b + c;
		a = b;
		b = c;
		c = sum;
	}
	return c;
}
//memoized leetcode
var tribonacci = function (n, cache = {}) {
	if (n === 0)
		return 0;
	if (n === 1 || n === 2)
		return 1;
	if (cache[n])
		return cache[n];
	cache[n] = tribonacci(n - 1, cache) + tribonacci(n - 2, cache) + tribonacci(n - 3, cache);
	return cache[n];
};
const mem = [0, 1, 1];
var tribonacci = function (n) {
	if (mem[n] != undefined) return mem[n];
	mem[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
	return mem[n];
};

//LC#1154 Diff:Easy Day of the Year
/*
Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

Input: date = "2019-01-09"   Output: 9  Explanation: Given date is the 9th day of the year in 2019.
Input: date = "2019-02-10"   Output: 41
Input: date = "2003-03-01"   Output: 60
Input: date = "2004-03-01"   Output: 61

Constraints:
date.length == 10
date[4] == date[7] == '-', and all other date[i]'s are digits
date represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.
*/
//speed:90%
var dayOfYear = function (date) {
	let days = [0,31,28,31,30,31,30,  31,31,30,31,30,31];

	let leapYear = false;
	let year = Number(date.split('-')[0]);
	if (year % 4 == 0) {
		if (year % 400 === 0) leapYear = true;
		else if (year % 100 === 0) leapYear = false;
		else leapYear = true;
	}
	if(leapYear) days[2] = 29;

	let count = days.slice(0,Number(date.split('-')[1])).reduce((acc,x)=>acc+x,0);
	count += Number(date.split('-')[2]);
	return count;
};
//leetcode
var dayOfYear = function (date) {
	// we need "+ 1" at the end because 09 - 01 = 08 (not 09)
	return ((new Date(date)) - (new Date(`${date.slice(0, 4)}-01-01`))) / 1000 / 60 / 60 / 24 + 1;
};

//LC#1160 Diff:Easy Find Words That Can Be Formed by Characters
/*
You are given an array of strings and a string chars.
A string is good if it can be formed by characters from chars (each individual character can only be used once).
Return the sum of lengths of all good strings in words.

Input: words = ["cat","bt","hat","tree"], chars = "atach"   Output: 6
	Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"	Output: 10
	Explanation:The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
*/
//speed:26%
var countCharacters = function (words, chars) {
	function getHm(){
		let hm = {}
		for(x of chars) hm[x] = hm[x] + 1 || 1;
		return hm;
	}

	let count = 0;
	for(y of words) {
		let hm = getHm(); let flag = true;
		for(i=0;i<y.length;i++){
			if(hm[y[i]]===undefined || hm[y[i]]<=0) {flag = false; break;	}
			else --hm[y[i]];
		}
		if(!flag) continue;
		count += y.length;
	}
	return count;
};
//spped: 77%
var countCharacters = function (words, chars) {
	let result = 0;
	for (let i = 0; i < words.length; i += 1) {
		if (isGood(words[i],chars)) result += words[i].length;
	}
	return result;
};

function isGood(word,chars) {  //send chars as a copy as you are mutating it
	for (let i = 0; i < word.length; i++) {
		if (!chars.includes(word[i])) return false;
		else chars = chars.replace(word[i], ''); //change the char to '' to count the char
	}
	return true;
}


//LC#1170 Diff:Easy Compare Strings by Frequency of the Smallest Character
/*
Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

Now, given two string arrays "queries" and "words", return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.

Input: queries = ["cbd"], words = ["zaaaz"]   Output: [1]
	Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]	Output: [1,2]
	Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").

Constraints:
1 <= queries.length <= 2000
1 <= words.length <= 2000
1 <= queries[i].length, words[i].length <= 10
queries[i][j], words[i][j] are English lowercase letters.
*/
//speed:56%
var numSmallerByFrequency = function (queries, words) {
	function getCount(s) {
		s = s.split('').sort(); //the first char has to be the smallest char
		return s.filter(x => x === s[0]).length
	}
	queries = queries.map(getCount); //[9,3,6,2,5]
	words = words.map(getCount).sort((x,y)=>y-x); //descending  [3,7,12,15]

	//You can use Binary search to find the index in words, as words is sorted. The index will be the ~count
	//You can do a manual count with two for loops

	return queries.map(q => words.filter(w => q<w).length);
};
//leetcode
const getCount = (str) => {
	let smallestChar = '{';
	let smallestCharFreq = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === smallestChar) smallestCharFreq++;
		else if (str[i] < smallestChar) {
			smallestChar = str[i];
			smallestCharFreq = 1;
		}
	}
	return smallestCharFreq;
};

//LC#1175 Diff:Easy Prime Arrangements
/*
Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed)
(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)
Since the answer may be large, return the (answer modulo (10^9)) + 7.

Input: n = 5   Output: 12
	Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.
Input: n = 100  Output: 682289015
Constraints:
1 <= n <= 100
*/
//basically find the number of prime numbers that exist between 1 to n, say x, then return x! as x pn can be placed	 in x spots in x! ways
//speed:40% leetcode solution, no idea what it does
var numPrimeArrangements = function (n) {
	// return factorial after modulo operation
	const factorial = n =>
		n <= 1 ? 1n : (BigInt(n) * factorial(n - 1)) % 1000000007n;
	// return number of primes within [1,n]
	const countPrimes = function (n) {
		const nums = [...Array(n + 1).keys()].slice(2);
		for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
			if (nums[i]) {
				for (let j = i + nums[i]; j <= n; j += nums[i]) {
					nums[j] = undefined; // Sieve of Eratosthenes
				}
			}
		}
		return nums.filter(n => n).length;
	};


	const primes = countPrimes(n);
	return (factorial(primes) * factorial(n - primes)) % 1000000007n;
};


//LC#1179 Diff:Easy Reformat Department Table SQL
/*
Table: Department
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| revenue       | int     |
| month         | varchar |
+---------------+---------+
(id, month) is the primary key of this table.
The table has information about the revenue of each department per month. The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].

Write an SQL query to reformat the table such that there is a department id column and a revenue column for each month. The query result format is in the following example:
Department table:
+------+---------+-------+
| id   | revenue | month |
+------+---------+-------+
| 1    | 8000    | Jan   |
| 2    | 9000    | Jan   |
| 3    | 10000   | Feb   |
| 1    | 7000    | Feb   |
| 1    | 6000    | Mar   |
+------+---------+-------+
Result table:
+------+-------------+-------------+-------------+-----+-------------+
| id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
+------+-------------+-------------+-------------+-----+-------------+
| 1    | 8000        | 7000        | 6000        | ... | null        |
| 2    | 9000        | null        | null        | ... | null        |
| 3    | null        | 10000       | null        | ... | null        |
+------+-------------+-------------+-------------+-----+-------------+
Note that the result table has 13 columns (1 for the department id + 12 for the months).
*/
/* Answer:
SELECT
ID,
SUM(CASE WHEN MONTH = 'JAN' THEN REVENUE ELSE NULL END) AS "JAN_REVENUE",
SUM(CASE WHEN MONTH = 'FEB' THEN REVENUE ELSE NULL END) AS "FEB_REVENUE",
SUM(CASE WHEN MONTH = 'MAR' THEN REVENUE ELSE NULL END) AS "MAR_REVENUE",
SUM(CASE WHEN MONTH = 'APR' THEN REVENUE ELSE NULL END) AS "APR_REVENUE",
SUM(CASE WHEN MONTH = 'MAY' THEN REVENUE ELSE NULL END) AS "MAY_REVENUE",
SUM(CASE WHEN MONTH = 'JUN' THEN REVENUE ELSE NULL END) AS "JUN_REVENUE",
SUM(CASE WHEN MONTH = 'JUL' THEN REVENUE ELSE NULL END) AS "JUL_REVENUE",
SUM(CASE WHEN MONTH = 'AUG' THEN REVENUE ELSE NULL END) AS "AUG_REVENUE",
SUM(CASE WHEN MONTH = 'SEP' THEN REVENUE ELSE NULL END) AS "SEP_REVENUE",
SUM(CASE WHEN MONTH = 'OCT' THEN REVENUE ELSE NULL END) AS "OCT_REVENUE",
SUM(CASE WHEN MONTH = 'NOV' THEN REVENUE ELSE NULL END) AS "NOV_REVENUE",
SUM(CASE WHEN MONTH = 'DEC' THEN REVENUE ELSE NULL END) AS "DEC_REVENUE"
FROM DEPARTMENT GROUP BY ID;
*/

//LC#1184 Diff:Easy Distance Between Bus Stops
/*
A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.
The bus goes along both directions i.e. clockwise and counterclockwise.
Return the shortest distance between the given start and destination stops. (choose between clockwise and anti-cl)
Input: distance = [1,2,3,4], start = 0, destination = 1    Output: 1
	Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.
Input: distance = [1,2,3,4], start = 0, destination = 2   Output: 3
	Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.
Input: distance = [1,2,3,4], start = 0, destination = 3 Output: 4
	Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.

Constraints:
1 <= n <= 10^4
distance.length == n
0 <= start, destination < n
0 <= distance[i] <= 10^4
*/
//speed:33% brilliant ktk! O(n)
var distanceBetweenBusStops = function (distance, start, destination) {
	let cwDist = 0, acwDist = 0; // clockwise distance and anti-clockwise distance
	let cwI = start, acwI = start;  //clockwise index and anti-clockwise index
	let len = distance.length;

	for(i=1;i<len;i++){ //just a counter of steps to take in both direction
		cwI += 1;
		if(cwI === len) cwI = 0; //positive overflow
		cwDist += cwI===0 ? distance[len-1] : distance[cwI-1];

		acwI -= 1;
		if(acwI === -1) acwI = len-1; //negative overflow
		acwDist += distance[acwI];

		if(cwI===destination && acwI===destination) return Math.min(cwDist, acwDist);
		if(cwI===destination) return cwDist;
		if(acwI===destination) return acwDist;
	}
	//it will come here only if desination was never found, which is impossible
	return false;
};
//speed: 50% leetcode: even better!
var distanceBetweenBusStops = function (distance, start, destination) {
	if (start > destination) [start, destination] = [destination, start];
	const total = distance.reduce((acc, cur) => acc + cur);
	const route = distance.slice(start, destination).reduce((acc, cur) => acc + cur);
	return Math.min(route, total - route);
};

//LC#1185 Diff:Easy Day of the Week
/*
Given a date, return the corresponding day of the week for that date.
The input is given as three integers representing the day, month and year respectively.
Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

Input: day = 31, month = 8, year = 2019  Output: "Saturday"
Input: day = 18, month = 7, year = 1999  Output: "Sunday"
Input: day = 15, month = 8, year = 1993  Output: "Sunday"
Constraints:The given dates are valid dates between the years 1971 and 2100.
*/
//speed:5%
var dayOfTheWeek = function (day, month, year) {
	return new Date(year, month - 1, day).toLocaleString('en', { weekday: 'long' });
};
var dayOfTheWeek = function (day, month, year) {
	const list = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return list[new Date(`${year}-${month}-${day}`).getDay()];
}
//speed: 85%
var dayOfTheWeek = function (day, month, year) {
	const LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const MONTH_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	let sum = (year - 1) * 365 + day + Math.floor((month > 2 ? year : year - 1) / 4) - Math.floor(year / 100) + Math.floor(year / 400);
	for (let i = 0; i < month; ++i) sum += MONTH_DAYS[i];
	return LIST[sum % 7];

}

//LC#1189 Diff:Easy  Maximum Number of Balloons
/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible. You can use each character in text at most once. Return the maximum number of instances that can be formed.
Input: text = "nlaebolko"  Output: 1
Input: text = "loonbalxballpoon"  Output: 2
Input: text = "leetcode"  Output: 0
Constraints:
1 <= text.length <= 10^4
text consists of lower case English letters only.
*/
//speed:21%
var maxNumberOfBalloons = function (text) {
	let hm = {}
	for(c of text) hm[c] = hm[c]+1 || 1;

	let flag = true, count = 0, s = 'balloon';
	while(true) {
		if(hm['b']>=1 && hm['a']>=1 && hm['l']>=2 && hm['o']>=2 && hm['n']>=1) {
			++count;
			--hm['b']; --hm['a']; --hm['n'];
			hm['l'] -= 2;
			hm['o'] -= 2;
		} else break;
	}
	return count;
};
//speed:95% leetcode
var maxNumberOfBalloons = function (text) {
	const one = {b: 1, a: 1, l: 2, o: 2, n: 1};
	const map = {};
	for (let i = 0; i < text.length; i++) {
		if (one[text[i]]) map[text[i]] = (map[text[i]] || 0) + 1;
	}
	for (const key of Object.keys(one)) {
		if (!map[key]) return 0;
	}
	map['l'] = map['l'] >> 1;
	map['o'] = map['o'] >> 1;
	return Math.min(...Object.values(map));
};

//LC#1 Diff:Easy Minimum Absolute Difference
/*
Given an array of distinct integers arr, find all pairs of elements whose difference is the minimum absolute difference between any two elements in the arrays.
Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr

Input: arr = [4,2,1,3]   Output: [[1,2],[2,3],[3,4]]
	Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Input: arr = [1,3,6,10,15]  Output: [[1,3]]
Input: arr = [3,8,-10,23,19,-4,-14,27]   Output: [[-14,-10],[19,23],[23,27]]

Constraints:
2 <= arr.length <= 10^5
-10^6 <= arr[i] <= 10^6
*/
//speed:95%
var minimumAbsDifference = function (arr) {
	arr.sort((x,y)=>x-y);
	let minDiff = Infinity, res = [];  //or use Number.MAX_SAFE_INTEGER
	for(i=0;i<arr.length-1;i++){
		let diff = Math.abs(arr[i]-arr[i+1]);
		if(diff === minDiff) res.push([arr[i],arr[i+1]]);
		else if (diff < minDiff) {
			minDiff = diff;
			res = [];
			res.push([arr[i],arr[i+1]]);
		}
	}
	return res;
};
//leetcode speed:100% something complicated
const minimumAbsDifference = arr => {
	const RANGE = 10 ** 6;
	const data = new Int8Array(RANGE * 2 + 1);
	let min = max = arr[0];
	for (let i = 0; i < arr.length; ++i) {
		data[arr[i] + RANGE] = 1;
		if (arr[i] < min) min = arr[i];
		if (arr[i] > max) max = arr[i];
	}
	let ret = [], diff = max - min, prev = min + RANGE;
	for (let i = prev + 1; i <= max + RANGE; ++i) {
		if (data[i] === 0) continue;
		if (i - prev === diff) {
			ret.push([prev - RANGE, i - RANGE]);
		} else if (i - prev < diff) {
			diff = i - prev;
			ret = [[prev - RANGE, i - RANGE]];
		}
		prev = i;
	}
	return ret;
};

//LC#1207 Diff:Easy Unique Number of Occurrences
/*
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

Input: arr = [1,2,2,1,1,3]   Output: true
	Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Input: arr = [1,2]	Output: false
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]  Output: true

Constraints:
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/
//speed:50%
var uniqueOccurrences = function (arr) {
	let hm1 = {};
	for(x of arr) hm1[x] = hm1[x]+1 || 1;

	let hm2 = {};
	for(y of Object.values(hm1)){
		if(hm2[y]!==undefined) return false;  //this frequency has been seen before
		hm2[y] = true;
	}
	return true;
	//OR just sort Object.values(hm1) and see if any two adjacent values are equal
	//OR return arr.length === new Set(Object.values(hm1)).size

};

//LC#1217 Diff:Easy Play with Chips
/*
There are some chips, and the i-th chip is at position chips[i].
You can perform any of the two following types of moves any number of times (possibly zero) on any chip:
>Move the i-th chip by 2 units to the left or to the right with a cost of 0.
>Move the i-th chip by 1 unit to the left or to the right with a cost of 1.
There can be two or more chips at the same position initially.
Return the minimum cost needed to move all the chips to ONE SINGLE position. (any single position)

Input: chips = [1,2,3]   Output: 1
	Explanation: Second chip will be moved to positon 3 with cost 1. First chip will be moved to position 3 with cost 0. Total cost is 1.
Input: chips = [2,2,2,3,3]  Output: 2 (here there are 3 chips at position 2 and 2 chips at position 3)
	Explanation: Both fourth and fifth chip will be moved to position two with cost 1. Total minimum cost will be 2.
Input: chips = [2,2,2,4,4,6,6,8,10] Output: 0
	Constraints:
1 <= chips.length <= 100
1 <= chips[i] <= 10^9
*/
//hint: assume that you will ALWAYS move all the chips to position 0.
//speed:70%
var minCostToMoveChips = function (chips) {
	//if i choose 0 as the position, evey even guy is free, every odd guy will have a count of 1
	chips.sort((x,y)=>x-y);

	let odd=0, even=0;
	for(x of chips) {
		if(x%2===0) ++even;
		else ++odd;
	}

	if(even===0 || odd===0) return 0; //if all positions are even OR all position are odd, return zero

	//at this point, there are definitely odd spots and even spots
	if (even > odd) return odd; //move all numbers to an even spot. count the number of odd numbers to move
	else return even; //move all the even numbers
};

//LC#1221 Diff:Easy Split a String in Balanced Strings
/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters. Given a balanced string "s" split it into the maximum amount of balanced strings. Return the maximum amount of splitted balanced strings.

Input: s = "RLRRLLRLRL"  Output: 4
	Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Input: s = "RLLLLRRRLR"  Output: 3
	Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Input: s = "LLLLRRRR"  Output: 1
	Explanation: s can be split into "LLLLRRRR".
Input: s = "RLRRRLLRLL"  Output: 2
	Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
Constraints:
1 <= s.length <= 1000
s[i] = 'L' or 'R'
*/
//speed:40%
var balancedStringSplit = function (s) {
	let lCount = 0, rCount = 0, count = 0;  //or just keep one VAR and do ++ for L and -- for R.
	for(c of s) {
		if(c==='L') ++lCount;
		if(c==='R') ++rCount;
		if(lCount===rCount) {++count; lCount=0; rCount=0;}
	}
	return count;
};
//speed:90% recursive
var balancedStringSplit = function (s) {
	let count = 0;

	function helper(currPos, currCount){
		if(currPos>=s.length) return;

		currCount += s[currPos]==='L' ? 1 : -1;
		if(currCount===0) {++count; currCount=0;}

		helper(currPos+1, currCount);  //tail call!
	}
	helper(0,0);
	return count;
}

//LC#1232 Diff:Easy Check If It Is a Straight Line
/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]  Output: true
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]  Output: false
Constraints:
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
*/
//speed:40%
const checkStraightLine = arr => {
	for(i=0;i<arr.length-2;i++){
		if(!checkSlope(arr[i],arr[i+1],arr[i+2])) return false;
	}
	return true;

	function checkSlope(x,y,z){
		let slope1 = (y[1] - x[1]) / (y[0] - x[0]);
		let slope2 = (z[1] - y[1]) / (z[0] - y[0]);
		if(Math.abs(slope1)===Infinity && Math.abs(slope2)===Infinity) return true;
		else return slope1===slope2;
	}
}

//LC#1237 Diff:Easy Find Positive Integer Solution for a Given Equation
/*
Given a function f(x, y) and a value z, return all positive integer pairs x and y where f(x,y) == z.

The function is constantly increasing, i.e.:
f(x, y) < f(x + 1, y)
f(x, y) < f(x, y + 1)
The function interface is defined like this: This is the CustomFunction's API interface. You should not implement it, or speculate about its implementation.
function CustomFunction(x,y) {
	this.f = function(x, y) {
			...
		return someInteger
	};
};
For custom testing purposes you're given an integer function_id and a target z as input, where function_id represent one function from an secret internal list, on the examples you'll know only two functions from the list.
You may return the solutions in any order.

Input: function_id = 1, z = 5  Output: [[1,4],[2,3],[3,2],[4,1]]
	Explanation: function_id = 1 means that f(x, y) = x + y
Input: function_id = 2, z = 5  Output: [[1,5],[5,1]]
	Explanation: function_id = 2 means that f(x, y) = x * y
Constraints:
1 <= function_id <= 9
1 <= z <= 100
It's guaranteed that the solutions of f(x, y) == z will be on the range 1 <= x, y <= 1000
It's also guaranteed that f(x, y) will fit in 32 bit signed integer if 1 <= x, y <= 1000
*/
//speed:15%
var findSolution = function (customfunction, z) {
	let res = [], g = customfunction.f;
	for(i=1;i<1000;i++){
		for(j=1;j<1000;j++){
			if (g(i,j)===z) { res.push([i,j]); break; } //don't need to look at the rest of the j
		}
	}
	return res;
};
//speed:60% leetcode
const findSolution = (f, z) => {
	const ret = [];
	for (let x = 1, y = 1000; x <= 1000 && y >= 1;) {
		const val = f.f(x, y);
		if(val === z) ret.push([x, y]);
		val < z ? ++x : --y;
	}
	return ret;
};
//speed:30%  binary search
var findSolution = function (customfunction, z) {
	let res = [], g = customfunction.f;
	for(i=1;i<=1000;i++){
		//find 'j' for this 'i' by binary search
		let left=1, right=1000;
		while(left<right){
			let mid = Math.floor((left+right)/2);
			let val = g(i,mid);
			if(val===z) {res.push([i,mid]); break;}

			if (val > z) right = mid;  //this is NOT mid-1 !!
			else if (val < z) left = mid + 1;
		}
	}
	return res;
}

//LC#1 Diff:Easy Cells with Odd Values in a Matrix
/*
Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.
Return the number of cells with odd values in the matrix after applying the increment to all indices.
Input: n = 2, m = 3, indices = [[0,1],[1,1]]  Output: 6
	Explanation: Initial matrix = [[0,0,0],[0,0,0]]. After applying first increment it becomes [[1,2,1],[0,1,0]]. The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.
Input: n = 2, m = 2, indices = [[1,1],[0,0]]  Output: 0
	Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.

Constraints:
1 <= n <= 50
1 <= m <= 50
1 <= indices.length <= 100
0 <= indices[i][0] < n
0 <= indices[i][1] < m
*/
//speed:40%
var oddCells = function (n, m, indices) {
	let mat = new Array(n).fill(0).map(x => new Array(m).fill(0));

	for([r,c] of indices){
		for(i=0;i<m;i++) ++mat[r][i]; //one row, all cols
		for(i=0;i<n;i++) ++mat[i][c]; //one col, all rows
	}

	//return mat.flat().filter(x=>x%2==1).length;
	let count = 0;
	for(i=0;i<n;i++){
		for(j=0;j<m;j++){
			if(mat[i][j]%2!==0) ++count;
		}
	}
	return count;
};
//speed:50% leetcode complex
const oddCells = (row, column, indices) => {
	const rowCount = new Uint8Array(row);
	const columnCount = new Uint8Array(column);
	let oddRow = 0, oddColumn = 0;

	for (let i = 0; i < indices.length; ++i) {
		(++rowCount[indices[i][0]] & 1) === 1 ? ++oddRow : --oddRow;
		(++columnCount[indices[i][1]] & 1) === 1 ? ++oddColumn : --oddColumn;
	}
	return oddRow*column + oddColumn*row - (2*oddRow*oddColumn);
};

//LC#1260 Diff:Easy Shift 2D Grid
/*
Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
In one shift operation:
>Element at grid[i][j] moves to grid[i][j + 1].
>Element at grid[i][n - 1] moves to grid[i + 1][0].
>Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1    Output: [[9,1,2],[3,4,5],[6,7,8]]
Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4     Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9   Output: [[1,2,3],[4,5,6],[7,8,9]]
m == grid.length, n == grid[i].length
1 <= m <= 50, 1 <= n <= 50
-1000 <= grid[i][j] <= 1000
0 <= k <= 100
*/
//each shift is a like cork-screw effect..
//speed:30% ktk took 2hrs for the let newRow line alone
var shiftGrid = function (grid, k) { // O(m*n)
	let [m,n] = [grid.length, grid[0].length];
	k = k % (m*n); //After every m*n shifts, the grid comes back to original state
	if(k===0) return grid;

	let res = new Array(m).fill(0).map(x=>new Array(n)); //new empty grid
	for(i=0;i<m;i++){
		for(j=0;j<n;j++){
			[x,y] = getNewPosition(i,j);
			res[x][y] = grid[i][j];
		}
	}
	return res;

	function getNewPosition(i,j){
		let newColumn = (j+k)%n;
		let newRow = (j+k)<=(n-1) ? i : (i+ Math.ceil((k-(n-1-j))/n)) % m;
		// (k - (n-1-j)) gives you the amount of shifts that are left to do, once you have finished the current row.
		return [newRow, newColumn];
	}
};
//speed:30% leetcode
const shiftGrid = (grid, k) => {
	const [w, h] = [grid[0].length, grid.length];
	const t = w * h;
	k %= t;
	const flattened = grid.reduce((acc, curr) => acc.concat(curr), []);
	const sFlattened = [...flattened.slice(-k), ...flattened.slice(0, -k)]; // Shift the grid using slice for speed
	// Make a new two-dimensional shifted grid
	const shifted = []; // The second dimension is added on the next line
	// Store the flat shifted grid in the new two-dimensional shifted grid
	for (let i = 0; i < t; i += w) shifted.push(sFlattened.slice(i, i + w));
	return shifted;
};

//LC#1266 Diff:Easy Minimum Time Visiting All Points
/*
On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.
You can move according to these rules:
>In one second: you can either move vertically/horizontally by one unit, or diagonally (it means to move one unit vertically and one unit horizontally).
You have to visit the points in the same order as they appear in the array.

Input: points = [[1,1],[3,4],[-1,0]]  Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
Time from [1,1] to [3,4] = 3 seconds
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds

Input: points = [[3,2],[-2,2]]  Output: 5

Constraints:
points.length == n
1 <= n <= 100
points[i].length == 2
-1000 <= points[i][0], points[i][1] <= 1000
*/
//move diagonally unitil x or y match, then move in y or x.
//speed:60%
var minTimeToVisitAllPoints = function (points) {
	let time = 0;
	for(let i=0;i<points.length-1;i++){
		time += timeBetweenTwoPoints(points[i],points[i+1]);
	}
	return time;


	function timeBetweenTwoPoints(start,dest) {
		//let start always be the left side point. You are going to move rightwards for sure.
		// you MUST make copies of the coordinates, don't try an exchange start and dest here, the points[] array will be mutated....
		let [x1,y1] = start[0]<dest[0] ? start : dest;
		let [x2,y2] = start[0]<dest[0] ? dest : start;

		let dir = y1 < y2 ? 1 : -1;  //should you move diagonally upwards or diagonally downwards..
		let count = 0;
		while(x1!==x2 && y1!==y2) {  //both x and y don't match yet
			x1 += 1;  //you will always go right
			y1 += dir;
			++count;
		}
		//by this time either the x-coords match or the y-coords match or both do
		if(x1===x2) count+=Math.abs(y2-y1); //just move along y-axis
		else if(y1===y2) count+=Math.abs(x2-x1); //just move along x-axis

		return count;
	}
};
//speed:60% leetcode similar logic, MUCH lesser code
//the change is always going to be the greatest difference in either x's or y's, because even when you move diagonally, you are moving in x (1 unit) and y (1 unit)
const minTimeToVisitAllPoints = points => {
	let times = 0;
	for (let i = 0; i < points.length-1; ++i) {
		let [x1,y1] = points[i];
		let [x2,y2] = points[i+1];
		times += Math.max(Math.abs(x2-x1), Math.abs(y2-y1));
	}
	return times;
};

//LC#1275 Diff:Easy Find Winner on a Tic Tac Toe Game
/*
Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
Here are the rules of Tic-Tac-Toe:
>Players take turns placing characters into empty squares (" ").
>The first player A always places the "X" character, while the second player B always places the "O" character.
>"X" and "O" characters are always placed into empty squares, never on filled ones.
>The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
>The game also ends if all squares are non-empty.
>No more moves can be played if the game is over.

Given an array "moves" where each element is an array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.

Return the winner of the game if it exists ("A" or "B"), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".
You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.

Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]     Output: "A"
Explanation: "A" wins, he always plays first.

Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]   Output: "B"
Explanation: "B" wins.

Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]   Output: "Draw"
Explanation: The game ends in a draw since there are no moves to make.

Input: moves = [[0,0],[1,1]] Output: "Pending"
Explanation: The game has not finished yet.

Constraints:
1 <= moves.length <= 9, moves[i].length == 2
0 <= moves[i][j] <= 2
There are no repeated elements on moves. Moves follow the rules of tic tac toe.
*/
//speed:60%
var tictactoe = function (moves) {
	// Empty is -1, A is 0 and B is 1 on the grid.
	let grid = new Array(3).fill(0).map(x=>new Array(3).fill(-1));  // Empty=-1 A=0 B=1

	for (let i = 0; i < moves.length; i++) {
		const player = i % 2;
		grid[moves[i][0]][moves[i][1]] = player;  //so 0 for A and 1 for B
		let w = check()
		if (w > -1) return w == 0 ? 'A' : 'B';
	}
	return moves.length == 9 ? 'Draw' : 'Pending';

	function check() {
		for (let row = 0; row < 3; row++) {
			if (grid[row][0] == grid[row][1] && grid[row][1] == grid[row][2]) return grid[row][0];
		}
		for (let col = 0; col < 3; col++) {
			if (grid[0][col] == grid[1][col] && grid[1][col] == grid[2][col]) return grid[0][col];
		}
		if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) return grid[0][0];
		if (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]) return grid[0][2];
		return -1;
	}
};
//speed: 100% leetcode
const tictactoe = moves => {
	const cases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; //this is row1,row2,row3, col1,col2,col3, diag1,diag2
	const grid = new Uint8Array(9);
	for (let i = 0; i < moves.length; ++i) {
		grid[moves[i][0] * 3 + moves[i][1]] = (i%2) + 1;  //this will be 1 for A and 2 for B.
	}
	for (let i = 0; i < cases.length; ++i) {
		const role = grid[cases[i][0]];
		if (role !== 0 && grid[cases[i][1]] === role && grid[cases[i][2]] === role) {
			return role === 1 ? 'A' : 'B';
		}
	}
	return moves.length === 9 ? 'Draw' : 'Pending';
};

//LC#1281 Diff:Easy Subtract the Product and Sum of Digits of an Integer
/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Input: n = 234  Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24, Sum of digits = 2 + 3 + 4 = 9, Result = 24 - 9 = 15

Input: n = 4421  Output: 21
Explanation:
Product of digits = 4 * 4 * 2 * 1 = 32, Sum of digits = 4 + 4 + 2 + 1 = 11, Result = 32 - 11 = 21

Constraints: 1 <= n <= 10^5
*/
//speed:55%
var subtractProductAndSum = n => {
	let sum = 0;
	let prod = 1;
	while (n > 0) {
		const mod = n % 10;
		sum += mod;
		prod *= mod;
		n = Math.floor(n / 10);
	}
	return prod - sum;
};
//speed:80%
var subtractProductAndSum = function (n) {
	let sum = `${n}`.split``.reduce((a, c) => a + +c, 0)
	let product = `${n}`.split``.reduce((a, c) => a * c, 1)
	return product - sum
};

//LC#1287 Diff:Easy Element Appearing More Than 25% In Sorted Array
/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.Return that integer.
Input: arr = [1,2,2,6,6,6,6,7,10]  Output: 6
Constraints:
1 <= arr.length <= 10^4
0 <= arr[i] <= 10^5
*/
//speed:70%
var findSpecialInteger = function (arr) {
	let n = 0.25 * arr.length;
	let count = 1;
	for(i=1;i<arr.length;i++){
		if(arr[i]===arr[i-1]) {
			if (++count>n) return arr[i];
		}
		else {
			count = 1;
		}
	}
	return arr[0];
};
//speed:80% leetcode sliding window
var findSpecialInteger = function (arr) {
	const ws = Math.floor(arr.length / 4);
	for (let i = 0; i < arr.length - ws; i++) {
		if (arr[i] === arr[i + ws]) {
			return arr[i];
		}
	}
	return -1;
};

//LC#1290 Diff:Easy Convert Binary Number in a Linked List to Integer
/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.
Input: head = [1,0,1] Output: 5  Explanation: (101) in base 2 = (5) in base 10
Input: head = [0]  Output: 0
Input: head = [1]  Output: 1
Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]  Output: 18880
Input: head = [0,0]  Output: 0

Constraints:
The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
*/
//speed:80%
var getDecimalValue = function (head) {
	let curr = 0, n = head;
	while(n!==null) {
		curr = curr*2 + n.val;  //OR curr = curr<<1 | n.val
		n = n.next;
	}
	return curr;
};

//LC#1295 Diff:Easy Find Numbers with Even Number of Digits
/*
Given an array nums of integers, return how many of them contain an even number of digits.
Input: nums = [12,345,2,6,7896]  Output: 2  (i.e 12,7896)
Input: nums = [555,901,482,1771]  Output: 1  (i.e 1771)

Constraints:
1 <= nums.length <= 500
1 <= nums[i] <= 10^5
*/
//speed:40%
var findNumbers = function (nums) {
	let evenCount = 0;
	for(x of nums) {
		if(getDigitCount(x)%2==0) ++evenCount;
	}
	return evenCount;

	function getDigitCount(n) {
		let count = 0;
		while(n>0){
			++count;
			n = Math.floor(n/10);
		}
		return count;
	}
};
const findNumbers = nums => {
	let ret = 0;
	for (let i = 0; i < nums.length; ++i) {
		(nums[i].toString().length & 1) === 0 && ++ret; //same as if(x%2===0) ++ret;
	}
	return ret;
};
const findNumbers = nums =>
	nums.reduce((acc, x) =>
		1 === ~~Math.log10(x) % 2
			? acc + 1
			: acc, 0)
var findNumbers = function (nums) {
	return nums.filter(n => (n > 9 && n < 100) || (n > 999 && n < 10000)).length
};

//LC#1299 Diff:Easy Replace Elements with Greatest Element on Right Side
/*
Given an array 'arr', replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1. After doing so, return the array. (can return a new array)
Input: arr = [17,18,5,4,6,1]   Output: [18,6,6,6,1,-1]
Constraints:
1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5
*/
//speed:15% very inefficient and lazy
var replaceElements = function (arr) {
	return arr.map((x,i,a)=> i === a.length-1 ? -1 : Math.max(...a.slice(i+1)));
};
//speed:90%  performant solution
var replaceElements = function (arr) {
	let currentMax, res = new Array(arr.length);
	for(i=arr.length-1; i>=0; i--){
		if(i===arr.length-1) {res[i] = -1; currentMax=arr[i]; continue;}

		res[i] = currentMax;
		if(arr[i] > currentMax) currentMax = arr[i];
	}
	return res;
}
//similar leetcode
const replaceElements = arr => {
	const result = new Array(arr.length);
	result[arr.length - 1] = -1;
	for (let i=arr.length-1;i>0;i--) {
		result[i - 1] = Math.max(arr[i], result[i]);
	}
	return result;
};

//LC#1304 Diff:Easy Find N Unique Integers Sum up to Zero
/*
Given an integer n, return an array containing ANY 'n' unique integers such that they add up to 0.
Input: n = 5  Output: [-7,-1,1,3,4]  Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Input: n = 3	Output: [-1,0,1]
Input: n = 1	Output: [0]
Constraints:
1 <= n <= 1000
*/
//speed:60%
var sumZero = function (n) {
	let res = [];
	let x = n/2 >> 0;
	for(i=-x;i<=x;i++){
		if(i!==0) res.push(i);
		else if (n%2!==0) res.push(0);
	}
	return res;
};
//speed:80% leetcode
var sumZero = function (n) {
	let res = (n % 2 == 0) ? [] : [0];
	for (i = 1; i <= n / 2; i++) res.push(i, -i);
	return res;
};
//put 0 to n-1, then just put the negative of the sum of 0 to n-1 !!
const sumZero = n => [...new Array(n - 1).keys(), 0 - ((n-1)*(n-2))/2];

//LC#1309 Diff:Easy Decrypt String from Alphabet to Integer Mapping
/*
Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:
>Characters ('a' to 'i') are represented by ('1' to '9') respectively.
>Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.
It's guaranteed that a unique mapping will always exist.

Input: s = "10#11#12"  Output: "jkab"  Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
Input: s = "1326#" Output: "acz"
Input: s = "25#"  Output: "y"
Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"  Output: "abcdefghijklmnopqrstuvwxyz"
Constraints:
1 <= s.length <= 1000
s[i] only contains digits letters ('0'-'9') and '#' letter.
s will be valid string such that mapping is always possible.
*/
//speed:80%
var freqAlphabets = function (s) {
	let res = '';
	for(i=s.length-1;i>=0;i--){
		if(s[i]==='#') {
			res = String.fromCharCode(96 + Number(s[i-2]+s[i-1])) + res;
			i = i-2;
		} else {
			res = String.fromCharCode(96 + Number(s[i])) + res;
		}
	}
	return res;
};
//leetcode regex
const freqAlphabets = s => {
	const map = { "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f", "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n", "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t", "21": "u", "22": "v", "23": "w", "24": "x", "25": "y", "26": "z" };
	s.replace(/(\d\d#|\d)/g, t => map[t.length === 3 ? t[0] + t[1] : t]);
}
//leetcode read string forwards
var freqAlphabets = function (s) {
	s = s.split('')
	let res = ''
	for (let i = 0; i < s.length; i++) {
		if (s[i + 2] == '#') {
			res += String.fromCharCode(96 + parseInt(s[i] + s[i + 1]))
			i += 2
		} else res += String.fromCharCode(96 + parseInt(s[i]))
	}
	return res
};

//LC#1313 Diff:Easy Decompress Run-Length Encoded List
/*
We are given a list "nums" of integers representing a list compressed with run-length encoding.
Consider each adjacent pair of elements as [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list. Return the decompressed list.

Input: nums = [1,2,3,4]  Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

Input: nums = [1,1,2,3]  Output: [1,3,3]
Constraints:
2 <= nums.length <= 100
nums.length % 2 == 0
1 <= nums[i] <= 100
*/
//speed:50%
var decompressRLElist = function (nums) {
	let res = [];
	for(i=0;i<nums.length;i=i+2){  //i+2
		res.push(  ...new Array(nums[i]).fill(nums[i+1])  ); //leetcode: maybe a simple for loop might be more performant than new Array()
	}
	return res;
};
//speed:40% leetcode crazy recursive
const decompressRLElist = (deflated, inflated = []) =>
	!deflated.length
		? inflated
		: decompressRLElist(
			deflated.slice(2),
			inflated.concat(new Array(deflated[0]).fill(deflated[1])),
		);
//speed:45% forced to use reduce
var decompressRLElist = function (nums) {
	return nums.reduce((acc, cur, i, arr) =>
			i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc,
		[]
	);
};

//LC#1317 Diff:Easy Convert Integer to the Sum of Two No-Zero Integers
/*
Given an integer n. A "No-Zero" integer is a positive integer which doesn't contain any 0 in its decimal representation. Return a list of two integers [A, B] where:
>A and B are No-Zero integers.
>A + B = n
It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

Input: n = 2  Output: [1,1] Explanation: A = 1, B = 1. A + B = n and both A and B don't contain any 0 in their decimal representation.
Input: n = 11	Output: [2,9]
Input: n = 10000 Output: [1,9999]
Input: n = 69 Output: [1,68]
Input: n = 1010 Output: [11,999]
Constraints: 2 <= n <= 10^4
*/
//speed:95%  code can be cleaned up
var getNoZeroIntegers = function (n) {
	let i = 1;
	while(true) {  //OR i<n
		if(checkNoZero2(n-i) && checkNoZero2(i)) return [n-i,i];
		++i;
	}

	function checkNoZero(x){
		while(x>0){
			if(x%10===0) return false; //if last digit is zero return false
			x = Math.floor(x/10);
		}
		return true;
	}
	function checkNoZero2(x) {
		return !(/0/.test(x.toString()));
	}
};

//LC#1323 Diff:Easy Maximum 69 Number
/*
Given a positive integer num consisting only of digits 6 and 9. Return the maximum number you can get by changing at most one digit (6 can become a 9, OR a 9 can become a 6).

Input: num = 9669  Output: 9969
Input: num = 9996  Output: 9999
Input: num = 9999  Output: 9999

Constraints:1 <= num <= 10^4
num's digits are 6 or 9.
*/
//speed:60%
var maximum69Number = function (num) {
	return parseInt(num.toString.replace(/6/, '9'));   //without //g in the regex, it just replaces the first intance of 6
};
const maximum69Number = num => Number(num.toString().replace('6', '9'));

//LC#1331 Diff:Easy  Rank Transform of an Array
/*
Given an array of integers arr, replace each element with its rank. (return a new array)
The rank represents how large the element is. The rank has the following rules:
>Rank is an integer starting from 1.
>The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
>Rank should be as small as possible.

Input: arr = [40,10,20,30]  Output: [4,1,2,3] Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
Input: arr = [100,100,100]  Output: [1,1,1]  Explanation: Same elements share the same rank.
Input: arr = [37,12,28,9,100,56,80,5,12]  Output: [5,3,4,2,8,6,7,1,3]

Constraints:
0 <= arr.length <= 105
-109 <= arr[i] <= 109
*/
//speed:50%
var arrayRankTransform = function (arr) {
	let copy = arr.slice().sort((x,y)=>x-y); //ascending order
	let hm = {}, rank = 1;
	hm[copy[0]] = rank;
	for(i=1;i<copy.length;i++){
		if (copy[i] === copy[i - 1]) hm[copy[i]] = rank;  //or check if the element already exists in the hm..
		else hm[copy[i]] = ++rank;
	}
	return arr.map(x => hm[x]);
};
//speed:60% leetcode
var arrayRankTransform = function (arr) {
	var sorted = [...new Set([...arr])].sort((a, b) => a - b);
	return arr.map((x) => sorted.indexOf(x) + 1);
};

//LC#1332 Diff:Easy Remove Palindromic Subsequences
/*
Given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.
Return the minimum number of steps to make the given string empty.
>A string is a subsequence of a given string, if it is generated by deleting some characters of a given string without changing its order. It is not a continuos SUBARRAY!
>palindrome: string that reads the same backwards and forwards.

Input: s = "ababa"  Output: 1 Explanation: String is already palindrome
Input: s = "abb"  Output: 2  Explanation: "abb" -> "bb" -> "". Remove palindromic subsequence "a" then "bb".
Input: s = "baabb"  Output: 2 Explanation: "baabb" -> "b" -> "". Remove palindromic subsequence "baab" then "b".
Input: s = "" Output: 0
Constraints:
0 <= s.length <= 1000
s only consists of letters 'a' and 'b'
*/
//trick: if s is not a palindrome, then it has to be 2.
/*
We can delete all 'a' in the 1st operation, and then all characters 'b' in the 2nd operation. So return 2 in this case
*/
//speed:40% leetcode solution
const removePalindromeSub = s => {
	if (s.length === 0) return 0;
	for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
		if (s[left] !== s[right]) return 2;
	}
	return 1;
};

//LC#1337 Diff:Easy The K Weakest Rows in a Matrix
/*
Given a m * n matrix "mat" of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.
A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. In each row, 1s will be there before any zeroes.

Input: mat =
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]],
k = 3
Output: [2,0,3]
Explanation:
The number of soldiers for each row is:row0->2	row1->4	  row2->1	 row3->2	row4->5
Rows ordered from the weakest to the strongest are [2,0,3,1,4]

Input: mat =
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]],
k = 2
Output: [0,2]
Explanation:
The number of soldiers for each row is:row 0 -> 1		row 1 -> 4		row 2 -> 1		row 3 -> 1
Rows ordered from the weakest to the strongest are [0,2,3,1]

Constraints:
m == mat.length
n == mat[i].length
2 <= n, m <= 100
1 <= k <= m
matrix[i][j] is either 0 or 1.
*/
//speed:60%
var kWeakestRows = function (mat, k) {
	//you want [[0,2], [1,4], [2,1], [3,2], [4,5]]  i.e [index,rank]
	let arr = mat.map((x,i) => {
		return [i, x.join('').replace(/0/g, '').length];
	});

	//you want [[2,1], [0,2], [3,2], [1,4], [4,5]]
	arr.sort((a,b)=> {   //you can just do (([a,b],[c,d])=> b-d || a-c)
		if(a[1]<b[1]) return -1;
		else if(a[1]>b[1]) return 1;
		else if(a[1]===b[1]) return a[0]-b[0]; //if rank matches, lower index must come first
	});

	//you want [2,0,3]  (for k=3)
	return arr.map(x=>x[0]).slice(0,k);
};
//leetcode solutions: use binary search to get the index of the first zero in a row
function search(arr, left, right) {
	if (left === right) return left;
	const mid = Math.floor((left + right) / 2);
	return arr[mid] === 0 ? search(arr, left, mid) : search(arr, mid + 1, right);
}

//LC#1342 Diff:Easy Number of Steps to Reduce a Number to Zero
/*
Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Input: num = 14  Output: 6
Explanation:
Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.

Input: num = 8  Output: 4
Explanation:
Step 1) 8 is even; divide by 2 and obtain 4.
Step 2) 4 is even; divide by 2 and obtain 2.
Step 3) 2 is even; divide by 2 and obtain 1.
Step 4) 1 is odd; subtract 1 and obtain 0.

Input: num = 123   Output: 12

Constraints:
0 <= num <= 10^6
*/
//speed:40% brute-force
var numberOfSteps = function (num) {
	let steps = 0;
	while(num!==0){
		if(num%2==0) num/=2;
		else num-=1;
		++steps;
	}
	return steps;
};
//speed:same recursion
var numberOfSteps = function (num, count=0) {
	if(num===0) return count;
	return numberOfSteps(num%2===0? num/2:num-1, ++count);
}

//LC#1 Diff:Easy Check If N and Its Double Exist
/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M (N=2*M). More formally check if there exists two indices i and j such that :
i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Input: arr = [10,2,5,3]  Output: true Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
Input: arr = [7,1,14,11] Output: true Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
Input: arr = [3,1,7,11] Output: false Explanation: In this case does not exist N and M, such that N = 2 * M.
Constraints:
2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3
*/
//speed:96%
var checkIfExist = function (arr) {
	let hm = {};  //or use Set() !
	for(x of arr) {
		if(hm[2*x]===true || hm[x/2]===true) return true;  //either 14 will come first or 7 will come first, we don't know.
		else hm[x] = true;
	}
	return false;
};

//LC#1351 Diff:Easy Count Negative Numbers in a Sorted Matrix
/*
Given a "m * n" matrix grid which is sorted in non-increasing order both row-wise and column-wise.
Return the number of negative numbers in grid.

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]  Output: 8 Explanation: There are 8 negatives number in the matrix.
Input: grid = [[3,2],[1,0]] Output: 0
Input: grid = [[1,-1],[-1,-1]] Output: 3
Input: grid = [[-1]] Output: 1

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
*/
//speed:76%
var countNegatives = function (grid) {
	let count = 0;
	let [m,n,x] = [grid.length, grid[0].length, grid[0].length];
	for(i=0;i<grid.length;i++){
		for(j=0;j<x;j++){
			if(grid[i][j]<0) {x = j; continue;}
			++count; //arr[i][j]>=0
		}
		if(x===0)break; //don't look at the remaining rows
	}
	return m*n - count;
};
//leetcode: ready the matrix from the last row and go up
//another leetcode
var countNegatives = function (grid) {
	let m = grid.length, n = grid[0].length;
	let count = 0;

	for (i = 0; i < m; i++) {
		for (j = n - 1; j >= 0; j--) {
			if (grid[i][j] >= 0) break;  //if the last column is > 0, no point reading the entire row
			count++;
		}
	}
	return count;
};
//binary search
var countNegatives = function (grid) {
	let count = 0;
	for (const row of grid) {
		const index = searchFirstNegativeIndex(row)
		count += row.length - index;
	}
	return count;

	function searchFirstNegativeIndex(arr, target) {
		let r = arr.length - 1, l = 0;
		while (l <= r) {
			const mid = Math.floor((l + r) / 2)
			if (arr[mid] < 0) r = mid - 1
			else l = mid + 1;
		}
		return l;
	}
};

//LC#1356 Diff:Easy Sort Integers by The Number of 1 Bits
/*
Given an integer array "arr". You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order. Return the sorted array.
Input: arr = [0,1,2,3,4,5,6,7,8]  Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits. [1,2,4,8] all have 1 bit. [3,5,6] have 2 bits. [7] has 3 bits.

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]  Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

Input: arr = [10000,10000] Output: [10000,10000]
Input: arr = [2,3,5,7,11,13,17,19]  Output: [2,3,5,17,7,11,13,19]
Input: arr = [10,100,1000,10000]  Output: [10,100,10000,1000]

Constraints:
1 <= arr.length <= 500
0 <= arr[i] <= 10^4
*/
//speed:20%
var sortByBits = function (arr) {
	return arr.sort((a,b)=> {
		return ((get1Count(a) - get1Count(b)) || (a - b));
	});

	function get1Count(x){
		return x.toString(2).replace(/0/g,'').length;
	}
};
//leetcode another way for bit count
const get1Count = num => {
	let sum = 0;
	while (num) {
		sum += num & 1;
		num = num >> 1;
	}
	return sum;
};

//LC#1360 Diff:Easy Number of Days Between Two Dates
/*
Write a program to count the number of days between two dates. The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.
Input: date1 = "2019-06-29", date2 = "2019-06-30" Output: 1
Input: date1 = "2020-01-15", date2 = "2019-12-31" Output: 15
Constraints: The given dates are valid dates between the years 1971 and 2100.
*/
//speed:
const daysBetweenDates = (date1, date2) => {
	const millisecondsInADay = 1000 * 60 * 60 * 24;
	return Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / millisecondsInADay);
}
//long way leetcode
var daysBetweenDates = function (date1, date2) {
	const days1 = calculateDays(date1)
	const days2 = calculateDays(date2)

	return Math.abs(days1 - days2)

	function calculateDays(date) {
		const [y, m, d] = date.split("-")
		const yearDays = calculateDaysUpToYears(parseInt(y))
		const monthDays = calculateDaysUpToMonths(parseInt(m), parseInt(y))
		const dayDays = parseInt(d)
		const days = yearDays + monthDays + dayDays
		return days
	}

	function calculateDaysUpToYears(year) {
		let days = 0
		for (let i = 1971; i < year; i++) {
			days += (isLeapYear(i)) ? 366 : 365
		}
		return days
	}

	function isLeapYear(year) {
		return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
	}

	function calculateDaysUpToMonths(month, year) {
		const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0 is to take care of the month offset
		let days = 0
		for (let i = 1; i < month; i++) days += months[i]
		if (month > 2 && isLeapYear(year)) days += 1
		return days
	}

};



//LC#1365 Diff:Easy How Many Numbers Are Smaller Than the Current Number
/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]. Return the answer in an array.
Input: nums = [8,1,2,2,3]  Output: [4,0,1,1,3]
Input: nums = [6,5,4,8]  Output: [2,1,0,3]
Input: nums = [7,7,7,7]  Output: [0,0,0,0]

Constraints:
2 <= nums.length <= 500
0 <= nums[i] <= 100
*/
//this is simlar to rank of item.
//speed:13%
var smallerNumbersThanCurrent = function (nums) {
	let sorted = nums.slice().sort((x,y)=>x-y);

	//rank them all
	let hm = {};
	hm[sorted[0]]=0;
	for(i=1;i<sorted.length;i++){
		if (sorted[i] === sorted[i - 1]) hm[sorted[i]] = hm[sorted[i - 1]];
		else hm[sorted[i]] = i;
	}

	return nums.map(x=>hm[x]);
};
//speed: 50% leetcode
var smallerNumbersThanCurrent = function (nums) {
	let sorted = [...nums].sort((a, b) => a - b);
	return nums.map(x=>sorted.indexOf(x));  //indexOf() gives the first index of the number...
};
var smallerNumbersThanCurrent = function (nums) {
	return nums.map(n => nums.reduce((a, b) => a + (n > b ? 1 : 0), 0))
};

//LC#1 Diff:Easy Increasing Decreasing String
/*
Given a string s. You should re-order the string using the following algorithm:
>Pick the smallest character from s and append it to the result.
>Pick the smallest character from s which is greater than the last appended character to the result and append it.
>Repeat step 2 until you cannot pick more characters.
>Pick the largest character from s and append it to the result.
>Pick the largest character from s which is smaller than the last appended character to the result and append it.
>Repeat step 5 until you cannot pick more characters.
>Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

Input: s = "aaaabbbbcccc"  Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

Input: s = "rat"  Output: "art"
Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.

Input: s = "leetcode"  Output: "cdelotee"
Input: s = "ggggggg"  Output: "ggggggg"
Input: s = "spo"  Output: "ops"

Constraints:
1 <= s.length <= 500
s contains only lower-case English letters.
*/
//speed:80%  brilliant ktk!
var sortString = function (s) {
	let arr = new Array(26).fill(0);
	for(c of s) {
		++arr[c.charCodeAt(0)-97]; //a-z is 97-122
	}

	let res = '', flag = true;
	while(flag) {
		flag = false;
		for(i=0;i<26;i++){
			if(arr[i]>0) {res+=String.fromCharCode(i+97); --arr[i]; flag=true;}
		}
		for(i=25;i>=0;i--){
			if (arr[i]>0) {res+=String.fromCharCode(i+97); --arr[i]; flag=true;}
		}
	}
	return res;
};
//speed:30% slower leetcode regex
const sortString = s => {
	s = s.split``.sort().join``
	let result = ''
	while (s.length) {
		result += s.match(/([a-z])(?!\1)/gi).join``
		s = s.replace(/([a-z])(?!\1)/gi, '')
		result += (s.match(/([a-z])(?!\1)/gi) || []).reverse().join``
		s = s.replace(/([a-z])(?!\1)/gi, '')
	}
	return result
};

//LC#1374 Diff:Easy  Generate a String With Characters That Have Odd Counts
/*
Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

Input: n = 4  Output: "pppz"
Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

Input: n = 2 Output: "xy"
Input: n = 7  Output: "holasss"

Constraints: 1 <= n <= 500
*/
//speed:
var generateTheString = function (n) {
	if(n===1) return 'a';

	return n%2===0 ? 'a'.repeat(n-1) + 'b' : 'a' + 'b' + 'c'.repeat(n-2);
};

//LC#1380 Diff:Easy Lucky Numbers in a Matrix
/*
Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]   Output: [15]
Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]  Output: [12]
Input: matrix = [[7,8],[1,2]]  Output: [7]
Constraints:
m == mat.length
n == mat[i].length
1 <= n, m <= 50
1 <= matrix[i][j] <= 10^5.
All elements in the matrix are distinct. THAT MEANS each row will have only ONE min.. same for column
*/
//speed:50%
var luckyNumbers = function (matrix) {
	let rowMins = [];
	matrix.forEach((row,i) => {
		rowMins[i] = row.indexOf(Math.min(...row));
	});

	let colMax = {};
	for(i=0;i<matrix[0].length;i++){
		let max = -Infinity;
		for(j=0;j<matrix.length;j++){
			if(matrix[j][i]>max) {
				max = matrix[j][i];
				colMax[i] = j;
			}
		}
	}

	let res = [];
	for(i=0;i<rowMins.length;i++){
		if(colMax[rowMins[i]] === i) res.push(matrix[i][rowMins[i]]);
	}
	return res;
};
//since the matrix has only distinct elements, you just have to find the common elements between rowMins and colMax... no need to store address and all!
var luckyNumbers = function (matrix) {
	let min = [];
	let max = new Array(matrix[0].length).fill(0);
	matrix.forEach((row, idx) => min[idx] = Math.min(...row));
	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] > max[j]) max[j] = matrix[i][j];
		}
	}
	return min.filter(x => max.includes(x)); //common elements
};
//leetcode:90%  really performant. Find the max of the row, then loop through that particular column alone.
var luckyNumbers = function (matrix) {  //it is an nXn matix.
	let n = matrix.length;
	const lucky = [];
	for (let i = 0; i < n; i++) {
		const x = matrix[i].indexOf(Math.min(...matrix[i]));
		let flag = true;
		for (let j = 0; j < n; j++) {
			if (j == i) continue;
			if (matrix[i][x] < matrix[j][x]) {
				flag = false; //if this element is lesser than any other element in the column, break immediately
				break;
			}
		}
		if (flag) lucky.push(matrix[i][x]);
	}
	return lucky;
};

//LC#1 Diff:Easy Find the Distance Value Between Two Arrays
/*
Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.
The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.
//Basically: an element in arr1 must be more than 'd' away from ALL elements in arr2, if so, count the element.

Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2  Output: 2
Explanation:
For arr1[0]=4 we have:
|4-10|=6 > d=2
|4-9|=5 > d=2
|4-1|=3 > d=2
|4-8|=4 > d=2
For arr1[1]=5 we have:
|5-10|=5 > d=2
|5-9|=4 > d=2
|5-1|=4 > d=2
|5-8|=3 > d=2
For arr1[2]=8 we have:
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2

Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3  Output: 2
Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6  Output: 1

Constraints:
1 <= arr1.length, arr2.length <= 500
-10^3 <= arr1[i], arr2[j] <= 10^3
0 <= d <= 100
*/
//speed:82%
var findTheDistanceValue = function (arr1, arr2, d) {
	let count = 0; //brute force
	for(x of arr1){
		let flag = true;
		for(y of arr2) {
			if(Math.abs(x-y)<=d) {flag=false;break;}
		}
		flag && ++count;
	}
	return count;
};
var findTheDistanceValue = function (arr1, arr2, d) {
	return arr1.filter(x => arr2.every(y=>Math.abs(x-y)>d)).length;
}

//LC#1389 Diff:Easy Create Target Array in the Given Order
/*
Given two arrays of integers 'nums' and 'index'. Your task is to create target array under the following rules:
>Initially target array is empty.
>From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
>Repeat the previous step until there are no elements to read in nums and index.
>Return the target array.
It is guaranteed that the insertion operations will be valid.
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]   Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]   Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
Input: nums = [1], index = [0]  Output: [1]
Constraints:
1 <= nums.length, index.length <= 100
nums.length == index.length
0 <= nums[i] <= 100
0 <= index[i] <= i
*/
//speed:60%
var createTargetArray = function (nums, index) {
	let res = [];
	for(i in nums){
		res.splice(index[i],0,nums[i]);
	}
	return res;
};
//speed:slower leetcode pre-process the index array. For each index i, if there are j indices on the left, which is >= i, all those j needs to bump 1, i.e for each index i, if there are x indices on the right which are <= i, i needs to bump x.
const createTargetArray = (nums, idxArr) => {
	let target = []
	for (i=0;i<idxArr.length;i++) {  //this can also be done with merge sort in O(nlogn), see the c++ answer
		for (j=i-1;j>=0;j--) if(idxArr[j]>=idxArr[i]) idxArr[j]++
	}
	//[0,1,2,2,1] becomes [0,2,4,3,1]
	for (const i in nums) target[idxArr[i]] = nums[i]
	return target
};

//LC#1394 Diff:Easy Find Lucky Integer in an Array
/*
Given an array of integers 'arr', a lucky integer is an integer which has a frequency in the array equal to its value.
Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.
Input: arr = [2,2,3,4]  Output: 2  Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
Input: arr = [1,2,2,3,3,3]  Output: 3  Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
Input: arr = [2,2,2,3,3]  Output: -1
Input: arr = [5]  Output: -1
Input: arr = [7,7,7,7,7,7,7]  Output: 7
Constraints:
1 <= arr.length <= 500
1 <= arr[i] <= 500
*/
//speed:50%
var findLucky = function (arr) {
	let hm = {};
	for(x of arr) hm[x] = hm[x]+1 || 1;
	let max = -Infinity;
	for(y in hm) {
		if(hm[y]===Number(y) && Number(y)>max)  max=Number(y);
	}
	return max===-Infinity?-1:max;
};
var findLucky = function (arr) {
	return arr.reduce( (a,x) => { a[x]=a[x]+1 || 1; return a; }, [])
		.filter((x, i) => x === i)
		.pop() || -1
}
//spped:85% O(1)space leetcode some weird logic
function findLucky(arr) {
	const offset = arr.length + 1;
	for (const num of arr) {
		const n = num % offset;
		if (n > arr.length) continue;
		arr[n - 1] += offset;
	}
	for (let n = arr.length; n >= 1; n--) {
		const count = (arr[n - 1] / offset) | 0;
		if (count === n) return n;
	}
	return -1;
}

//LC#1399 Diff:Easy  Count Largest Group
/*
Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. Return how many groups have the largest size.
Input: n = 13  Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.

Input: n = 2 Output: 2  Explanation: There are 2 groups [1], [2] of size 1.
Input: n = 15 Output: 6
Input: n = 24 Output: 5

Constraints:1 <= n <= 10^4
*/
//speed:70%
const countLargestGroup = n => {
	let map = new Map(), max = 1, maxCount = 0
	for (let i = 1; i <= n; i++) {
		let sum = sumDigits(i), sumCount = map.get(sum) + 1 || 1
		map.set(sum, sumCount)
		if (sumCount === max) maxCount++
		else if (sumCount > max) maxCount = 1
		max = Math.max(max, sumCount)
	}
	return maxCount;

	function sumDigits(num) {
		let sum = 0
		while (num) {
			sum += num % 10
			num = Math.trunc(num / 10)
		}
		return sum
	}
};
const countLargestGroup = n => {
	let map = {}, max = 1
	for (let i = 1; i <= n; i++) {
		let sum = [...`${i}`].reduce((a, c) => a + +c, 0);  //better way to do sum of digits
		map[sum] ? map[sum]++ : map[sum] = 1
		max = Math.max(max, map[sum])
	}
	return Object.values(map).filter(x => x === max).length
};

//LC#1403 Diff:Easy Minimum Subsequence in Non-Increasing Order
/*
Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non-included elements in such subsequence.
If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.
Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

Input: nums = [4,3,10,9,8] Output: [10,9]
Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements.
Input: nums = [4,4,7,6,7]  Output: [7,7,6]
Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to be returned in non-increasing order.
Input: nums = [6]  Output: [6]


Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 100
*/
//speed:60%
var minSubsequence = function (nums) {
	nums.sort((x,y)=>y-x);
	let sum = nums.reduce((acc,x)=>acc+x,0);
	let res = [], currentSum = 0;
	for(n of nums){
		res.push(n);
		currentSum+= n;
		if(currentSum>(sum-currentSum)) return res;
	}
};

//LC#1408 Diff:Easy String Matching in an Array
/*
Given an array of strings called 'words'. Return all strings in 'words' which are substring of another word in any order.
String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].
Input: words = ["mass","as","hero","superhero"]  Output: ["as","hero"] Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
Input: words = ["leetcode","et","code"]  Output: ["et","code"]  Explanation: "et", "code" are substring of "leetcode".
Input: words = ["blue","green","bu"]  Output: []
Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 30
words[i] contains only lowercase English letters.
It's guaranteed that words[i] will be unique.
*/
//speed:55%
var stringMatching = function (words) {
	words.sort((a,b)=>a.length-b.length); //ascending order of lengths
	let ret = [];
	for(i=0;i<words.length;i++){
		for(j=i+1;j<words.length;j++){
			if(words[j].indexOf(words[i]) > -1) {ret.push(words[i]);break;}
		}
	}
	return ret;
};
//similar
const stringMatching = words => words.filter(n => words.some(h => h !== n && h.includes(n)));
///leetcode optimal using trie
var stringMatching = function (words) {
	//========= Trie Class
	class Node {
		constructor() {
			this.children = {};
			this.count = 0;
		}
	}
	class Trie {
		constructor() {
			this.root = new Node();
		}
		add(word) {
			let node = this.root;
			for (let char of word) {
				if (!node.children[char]) node.children[char] = new Node();
				node.children[char].count++;
				node = node.children[char];
			}
		}
		get(word) {
			let node = this.root;
			for (let char of word) node = node.children[char];
			// if more than one word passes through the given word's path return true
			return node.count > 1;
		}
	}
	//======================
	const trie = new Trie();
	const result = [];
	for (let word of words) {
		for (let i = 0; i < word.length; i++) { // add every suffix of the word to the trie
			trie.add(word.slice(i))
		}
	}
	for (let word of words) {
		// if more than 1 word passes along this word's path, it means...
		// this word is a substring of one of the other words
		if (trie.get(word)) result.push(word)
	}
	return result
};

//LC#1413 Diff:Easy Minimum Value to Get Positive Step by Step Sum
/*
Given an array of integers nums, you start with an initial positive value startValue.
In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
Return the minimum positive value of startValue such that the step by step sum is never less than 1. The answer must be >=1

Input: nums = [-3,2,-3,4,2]  Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
                step by step sum
                startValue = 4 | startValue = 5 | nums
                  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
                  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
                  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3   // the 0 here is WRONG, so it is not 4
                  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
                  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
Input: nums = [1,2]  Output: 1  Explanation: Minimum start value should be positive.
Input: nums = [1,-2,-3] Output: 5
Constraints:
1 <= nums.length <= 100
-100 <= nums[i] <= 100
*/
//speed:75%
var minStartValue = function (nums) {
	let minSum = Infinity;
	let currentSum = 0;
	for(x of nums) {
		currentSum += x;
		if(currentSum<minSum) minSum = currentSum;
	}
	return minSum >=1 ? 1 : Math.abs(minSum)+1;
};

//LC#1417 Diff:Easy Reformat The String
/*
Given alphanumeric string 's'. (it consists of only lowercase English letters and/or digits)
You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.
Return the reformatted string or return an empty string if it is impossible to reformat the string.

Input: s = "a0b1c2" Output: "0a1b2c" Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid.
Input: s = "leetcode" Output: "" Explanation: "leetcode" has only characters so we cannot separate them by digits.
Input: s = "1229857369" Output: "" Explanation: "1229857369" has only digits so we cannot separate them by characters.
Input: s = "covid2019" Output: "c2o0v1i9d"
Input: s = "ab123" Output: "1a2b3"
Constraints:1 <= s.length <= 500
*/
//speed: 20%  took 2 hours
var reformat = function (s) {
	let getDigit = digitReader(s, true);
	let getLetter = letterReader(s, false);
	let d,l,final = '';

	while(true){
		d = getDigit();
		l = getLetter();
		if(d==='' || l==='') break;  //one of them is done
		final += d + l;
	}
	if(d==='') {
		final = l + final;
		if(getLetter()!=='') return '';
	} else if(l===''){
		final = final + d;
		if(getDigit()!=='') return '';
	}
	return final;

	function digitReader(str) {
		let i = 0;
		return function () {
			if (i >= str.length) return '';
			while (/[0-9]/g.test(str[i]) === false) {
				++i;
				if (i >= str.length) return '';
			}
			return str[i++];
		}
	}

	function letterReader(str, isDigit){
		let i = 0;
		return function(){
			if (i>=str.length) return '';
			while (/[a-z]/g.test(str[i])===false) {
				++i;
				if (i >= str.length) return '';
			}
			return str[i++];
		}
	}
};
//speed:20% leetcode
var reformat = function (s) {
	let a = [], b = []; //a is for letters
	for (x of s) {
		isNaN(x) ? a.push(x) : b.push(x);
	}
	if (a.length < b.length) {
		[a, b] = [b, a];
	}
	return a.length - b.length <= 1
		? a.map((x, i) => x + (b[i] ? b[i] : '')).join('')
		: '';
};


//LC#1422 Diff:Easy Maximum Score After Splitting a String
/*
Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

Input: s = "011101"  Output: 5
Explanation:
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5
left = "01" and right = "1101", score = 1 + 3 = 4
left = "011" and right = "101", score = 1 + 2 = 3
left = "0111" and right = "01", score = 1 + 1 = 2
left = "01110" and right = "1", score = 2 + 1 = 3

Input: s = "00111" Output: 5  Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
Input: s = "1111" Output: 3
Constraints:2 <= s.length <= 500
The string s consists of characters '0' and '1' only.
*/
//speed:75% leetcode
function maxScore(s) {
	let ones = 0;
	for (const c of s) ones += c & 1;

	let max = 0;
	let zeros = 0;
	for (const c of s.slice(0, -1)) { //just exclude the last character
		zeros += c ^ 1;
		ones -= c & 1;
		max = Math.max(max, zeros + ones);
	}
	return max;
}

//LC#1431 Diff:Easy Kids With the Greatest Number of Candies
/*
Given the array 'candies' and the integer 'extraCandies', where candies[i] represents the number of candies that the ith kid has.
For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

Input: candies = [2,3,5,1,3], extraCandies = 3  Output: [true,true,true,false,true]
Explanation:
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
Kid 2 has 3 candies and if he or she receives at least 2 extra candies, kid will have the greatest number of candies among the kids.
Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

Input: candies = [4,2,1,1,2], extraCandies = 1  Output: [true,false,false,false,false]
Input: candies = [12,1,12], extraCandies = 10 Output: [true,false,true]
Constraints:
2 <= candies.length <= 100
1 <= candies[i] <= 100
1 <= extraCandies <= 50
*/
//speed:40%
var kidsWithCandies = function (candies, extraCandies) {
	let max = Math.max(...candies);
	return candies.map(x => x+extraCandies>=max);
};

//LC#1436 Diff:Easy Destination City
/*
You are given the array 'paths', where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.
It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly ONE destination city.

Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]  Output: "Sao Paulo"
Input: paths = [["B","C"],["D","B"],["C","A"]] Output: "A"
Explanation: All possible trips are:
"D" -> "B" -> "C" -> "A".
"B" -> "C" -> "A".
"C" -> "A".
"A".
Clearly the destination city is "A".
Input: paths = [["A","Z"]]  Output: "Z"

Constraints:
1 <= paths.length <= 100     paths[i].length == 2
1 <= cityAi.length, cityBi.length <= 10      cityAi != cityBi
All strings consist of lowercase and uppercase English letters and the space character.
*/
//basically one of the destinations, is not a source
//speed:35%
var destCity = function (paths) {  //O(2n) and O(n)
	let sources = {};
	for([x,y] of paths) sources[x] = true;
	for([x,y] of paths) {
		if(sources[y]===undefined) return y;
	}
};
//leetcode similar
const destCity = (paths) => {
	let map = {};
	for([x,y] of paths){
		map[x] = map[x]!==undefined ? map[x]+1 : 1;   //can' do map[x]+1 || 1 (because the lhs becomes zero after the +1)
		map[y] = map[y]!==undefined ? map[y]-1 : -1;
	 }
	 for(z in map){
		 if(map[z]===-1) return z;  //-1 is destination, +1 is source, rest are all zeroes
	 }
}
//while loop
var destCity = function (paths) {
	const map = paths.reduce((map, [s, e]) => map.set(s, e), new Map()); //create a DAG.
	let station = paths[0][0]; // since there is only one possible route, it doesn't matter where to begin
	while (map.has(station)) {
		station = map.get(station);
	}
	return station;
};

//LC#1441 Diff:Easy Build an Array With Stack Operations
/*
Given an array 'target' and an integer 'n'. In each iteration, you will read a number from  list = {1,2,3..., n}.
Build the target array using the following operations:
>Push: Read a new element from the beginning list, and push it in the array.
>Pop: delete the last element of the array.
>If the target array is already built, stop reading more elements.
You are guaranteed that the target array is strictly increasing, only containing numbers between 1 to n inclusive.
Return the operations to build the target array.
You are guaranteed that the answer is unique.

Input: target = [1,3], n = 3 Output: ["Push","Push","Pop","Push"]
Explanation:
Read number 1 and automatically push in the array -> [1]
Read number 2 and automatically push in the array ->[1,2], then Pop it -> [1]
Read number 3 and automatically push in the array -> [1,3]
Input: target = [1,2,3], n = 3  Output: ["Push","Push","Push"]
Input: target = [1,2], n = 4 Output: ["Push","Push"] Explanation: You only need to read the first 2 numbers and stop.
Input: target = [2,3,4], n = 4 Output: ["Push","Pop","Push","Push","Push"]
Constraints:
1 <= target.length <= 100
1 <= target[i] <= 100
1 <= n <= 100
target is strictly increasing.
*/
//speed:45%  good ktk
var buildArray = function (target, n) {
	let res = [], prev = 1;
	for(x of target){
		while(prev<x) {res.push('Push','Pop'); ++prev}
		res.push('Push');
		++prev;
	}
	return res;
};
//leetcode similar
const buildArray = (target, n) => {
	const ret = [];
	for (let i = 0, j = 1; i < target.length; ++i, ++j) {
		ret.push('Push');
		target[i] !== j && ret.push('Pop') && --i;
	}
	return ret;
};

//LC#1446 Diff:Easy Consecutive Characters
/*
Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character. Return the power of the string.
Input: s = "leetcode"  Output: 2  Explanation: The substring "ee" is of length 2 with the character 'e' only.
Input: s = "abbcccddddeeeeedcba"  Output: 5  Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
Input: s = "triplepillooooow"  Output: 5 (for 'o')
Input: s = "hooraaaaaaaaaaay"  Output: 11 (for 'a')
Input: s = "tourist"  Output: 1
Constraints:
1 <= s.length <= 500
s contains only lowercase English letters.
*/
//speed:45%
var maxPower = function (s) {
	let max = 0, currentCount = 1;
	for(i=0;i<s.length;i++){
		if(s[i]===s[i+1]) ++currentCount;
		else {
			max = Math.max(max, currentCount);
			currentCount = 1;
		}
	}
	return max;
};

//LC#1450 Diff:Easy Number of Students Doing Homework at a Given Time
/*
Given two integer arrays 'startTime' and 'endTime' and given an integer 'queryTime'. The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i]. Return the number of students doing their homework at time 'queryTime' (at this instant of time). More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4 Output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
Input: startTime = [4], endTime = [4], queryTime = 4  Output: 1  Explanation: The only student was doing their homework at the queryTime.
Input: startTime = [4], endTime = [4], queryTime = 5 Output: 0
Input: startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7 Output: 0
Input: startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5 Output: 5
Constraints:
startTime.length == endTime.length
1 <= startTime.length <= 100
1 <= startTime[i] <= endTime[i] <= 1000
1 <= queryTime <= 1000
*/
//speed:45%
var busyStudent = function (startTime, endTime, queryTime) {
	return startTime.filter( (x,i)=> x<=queryTime && endTime[i]>=queryTime ).length;
};

//LC#1455 Diff:Easy Check If a Word Occurs As a Prefix of Any Word in a Sentence
/*
Given a sentence that consists of some words separated by a single space, and a searchWord. You have to check if searchWord is a prefix of any word in sentence.Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1. A prefix of a string S is any leading contiguous substring of S.

Input: sentence = "i love eating burger", searchWord = "burg"  Output: 4  Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
Input: sentence = "this problem is an easy problem", searchWord = "pro" Output: 2 (and not 6)
Input: sentence = "i am tired", searchWord = "you"  Output: -1
Input: sentence = "i use triple pillow", searchWord = "pill" 	Output: 4
Input: sentence = "hello from the other side", searchWord = "they" 	Output: -1
Constraints:
1 <= sentence.length <= 100
1 <= searchWord.length <= 10
sentence consists of lowercase English letters and spaces.
searchWord consists of lowercase English letters.
*/
//speed:46%
var isPrefixOfWord = function (sentence, searchWord) {
	sentence = sentence.split(' ');
	for(i=0;i<sentence.length;i++){
		if (sentence[i].indexOf(searchWord) === 0) return i + 1;
	}
	return -1;
};
//speed:45% leetcode
const isPrefixOfWord = (sentence, searchWord) => {
	for (let i = 0, j = 1, word = ''; i < sentence.length; ++i) {
		if (sentence[i] === ' ') { ++j; word = ''; continue; }
		word += sentence[i];
		if (word === searchWord) return j;
	}
	return -1;
};

//LC#1460 Diff:Easy Make Two Arrays Equal by Reversing Sub-arrays
/*
Given two integer arrays of equal length 'target' and 'arr'. In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps. Return True if you can make arr equal to target, or False otherwise.

Input: target = [1,2,3,4], arr = [2,4,1,3]  Output: true
Explanation: You can follow the next steps to convert arr to target:
1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.

Input: target = [7], arr = [7] Output: true Explanation: arr is equal to target without any reverses.
Input: target = [1,12], arr = [12,1] Output: true
Input: target = [3,7,9], arr = [3,7,11] Output: false  Explanation: arr doesn't have value 9 and it can never be converted to target.
Input: target = [1,1,1,1,1], arr = [1,1,1,1,1]  Output: true
Constraints:
target.length == arr.length
1 <= target.length <= 1000
1 <= target[i] <= 1000
1 <= arr[i] <= 1000
*/
//trick: just check if two arrs have the same elements
//speed:22%
var canBeEqual = function (target, arr) {
	target.sort((x,y)=>x-y);
	arr.sort((x,y)=>x-y);
	for(i=0;i<arr.length;i++){
		if(arr[i]!==target[i]) return false;
	}
	return true;
};
//speed:80%
var canBeEqual = function (target, arr) {
	let hm1 = {};
	for(x of target) hm1[x] = hm1[x]+1 || 1;

	for(y of arr){
		if(hm1[y]===undefined) return false;

		--hm1[y];
		if(hm1[y]<0) return false;
	}
	return true;
}
//speed:10%
var canBeEqual = (target, arr) => arr.sort().join('#') === target.sort().join('#');

//LC#1464 Diff:Easy Maximum Product of Two Elements in an Array
/*
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

Input: nums = [3,4,5,2] Output: 12
	Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.
Input: nums = [1,5,4,5] Output: 16
	Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Input: nums = [3,7]  Output: 12
Constraints:
2 <= nums.length <= 500
1 <= nums[i] <= 10^3
*/
//speed:50%  O(nlogn)
var maxProduct = function (nums) {
	nums.sort((x,y)=>y-x);
	return (nums[0]-1)*(num[1]-1);
};
//speed:40% O(n)
var maxProduct = function (nums) {
	let max = -Infinity, secondMax = -Infinity;
	for (var num of nums) {
		if (num >= max) {
			secondMax = max;
			max = num;
		} else if (num < max && num > secondMax) {
			secondMax = num;
		}
	}
	return (max - 1) * (secondMax - 1);
};

//LC#1470 Diff:Easy Shuffle the Array
/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Input: nums = [2,5,1,3,4,7], n = 3  Output: [2,3,5,4,1,7] Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
Input: nums = [1,2,3,4,4,3,2,1], n = 4 Output: [1,4,2,3,3,2,4,1]
Input: nums = [1,1,2,2], n = 2  Output: [1,2,1,2]
Constraints:
1 <= n <= 500
nums.length == 2n
1 <= nums[i] <= 10^3
*/
//speed:30% new array returned
var shuffle = function (nums, n) { //n is nums.length/2
	let res = [];
	for(i=0;i<n;i++){
		res.push(nums[i]);
		res.push(nums[i+n]); //you can do it one push(a,b)
	}
	return res;
};
//speed:  complicated leetcode inline
var shuffle = function (nums, n) {
	let i = n - 1
	for (let j = nums.length - 1; j >= n; j--) {
		nums[j] <<= 10
		nums[j] |= nums[i]
		i--
	}

	i = 0
	for (let j = n; j < nums.length; j++) {
		const num1 = nums[j] & 1023
		const num2 = nums[j] >> 10
		nums[i] = num1
		nums[i + 1] = num2
		i += 2
	}

	return nums
};
let shuffle = (nums, n) => nums.map((x, i) => i % 2 === 0 ? nums[i / 2] : nums[n + (i - 1) / 2])

//LC#1475 Diff:Easy Final Prices With a Special Discount in a Shop
/*
Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.
Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

Input: prices = [8,4,6,2,3]  Output: [4,2,4,2,3]
Explanation:
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
For items 3 and 4 you will not receive any discount at all.

Input: prices = [1,2,3,4,5]  Output: [1,2,3,4,5]
	Explanation: In this case, for all items, you will not receive any discount at all.
Input: prices = [10,1,1,6]  Output: [9,0,1,6]
Constraints:
1 <= prices.length <= 500
1 <= prices[i] <= 10^3
*/
//speed:50%  O(n^2)
var finalPrices = function (prices) {
 return prices.map((x,i)=> {
	let sub = 0;
	while(++i < prices.length) {
		if(prices[i]<=x) {sub=prices[i];break}
	}
	return x-sub;
 });
};
//speedL90% O(n) leetcode brilliance
var finalPrices = function (prices) {
	let stack = [];
	for(i=0;i<prices.length;i++){
		while(stack.length>0 && prices[stack[stack.length-1]] >= prices[i]) {
			prices[stack.pop()] -= prices[i];
		}
		stack.push(i);
	}
	return prices;
}

//LC#1480 Diff:Easy Running Sum of 1d Array
/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.

Input: nums = [1,2,3,4] Output: [1,3,6,10] Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Input: nums = [1,1,1,1,1]  Output: [1,2,3,4,5]  Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Input: nums = [3,1,2,10,1]  Output: [3,4,6,16,17]
Constraints:
1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/
//speed:12% new array
var runningSum = function (nums) {
	let y = 0;
	return nums.map(x => {
		y = y + x;
		return y;
	});
};
//speed:32%  in-place
var runningSum = function (nums) {
	for (i=1;i<nums.length;i++) nums[i] += nums[i - 1]
	return nums
};
//using reduce
const runningSum = nums => {
	nums.reduce((a, c, i, arr) => arr[i] += a)    //the reducer returns the new acc which is arr[i] which is arr[i]+previous acc
	return nums
}

//LC#1486 Diff:Easy  XOR Operation in an Array
/*
Given an integer n and an integer start. Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length. Return the bitwise XOR of all elements of nums.

Input: n = 5, start = 0  Output: 8
	Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.Where "^" corresponds to bitwise XOR operator.
Input: n = 4, start = 3 Output: 8  Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
Input: n = 1, start = 7  Output: 7
Input: n = 10, start = 5  Output: 2
Constraints:
1 <= n <= 1000
0 <= start <= 1000
n == nums.length
*/
//speed:40% O(n)
var xorOperation = function (n, start) {
	let res = start;
	for(i=1;i<n;i++){
		start += 2;
		res ^= start;
	}
	return res;
};
//leetcode has some insane O(1) solutions in c++


//LC#1491 Diff:Easy Average Salary Excluding the Minimum and Maximum Salary
/*
Given an array of unique integers salary where salary[i] is the salary of the employee i. Return the average salary of employees excluding the minimum and maximum salary.

Input: salary = [4000,3000,1000,2000]  Output: 2500.00000
	Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively. Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
Input: salary = [1000,2000,3000]  Output: 2000.00000
	Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively. Average salary excluding minimum and maximum salary is (2000)/1= 2000
Input: salary = [6000,5000,4000,3000,2000,1000]  Output: 3500.00000
Input: salary = [8000,9000,2000,3000,6000,1000]  Output: 4750.00000
Constraints:
3 <= salary.length <= 100
10^3 <= salary[i] <= 10^6
salary[i] is unique.
Answers within 10^-5 of the actual value will be accepted as correct.
*/
//speed:90%
var average = function (salary) {
	let n = salary.length;
	let max = -Infinity, min = Infinity;
	let sum = 0;
	for(i=0;i<n;i++){
		sum += salary[i];
		if(salary[i] > max) max = salary[i];
		if(salary[i] < min) min = salary[i];
	}
	return (sum-max-min)/(n-2);
};
//slower
var average = function (salary) {
	return (salary.sort((a, b) => a - b).slice(1, alary.length-1).reduce((a,x)=>a+x)  /  (salary.length-2));
};

//LC#1496 Diff:Easy Path Crossing
/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
Return True if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. Return False otherwise.

Input: path = "NES" Output: false  Explanation: Notice that the path doesn't cross any point more than once.
Input: path = "NESWW"  Output: true  Explanation: Notice that the path visits the origin twice.
Constraints:
1 <= path.length <= 10^4
path will only consist of characters in {'N', 'S', 'E', 'W}
*/
//speed:8%
var isPathCrossing = function (path) {
	let move = {'N':[0,1], 'S':[0,-1], 'E':[1,0], 'W':[-1,0]};
	let s = new Set();
	let curr = [0,0];
	s.add('0#0');
	for(p of path){
		curr = [curr[0]+move[p][0], curr[1]+move[p][1]];
		if(s.has(curr.join('#'))) return true;
		s.add(curr.join('#'));
	}
	return false;
}
//leetcode, instead of storing x#y, you can also store the integer: x+(10001*y)  [look at the constraints]

//LC#1502 Diff:Easy Can Make Arithmetic Progression From Sequence
/*
Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same. Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

Input: arr = [3,5,1] Output: true  Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
Input: arr = [1,2,4]  Output: false  Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
Constraints:
2 <= arr.length <= 1000
-10^6 <= arr[i] <= 10^6
*/
//speed:10%  O(nlogn)
var canMakeArithmeticProgression = function (arr) {
	arr.sort((x,y)=>x-y);
	let diff = arr[1]-arr[0];
	for(i=2;i<arr.length;i++){
		if (arr[i]-arr[i-1]!==diff) return false;
	}
	return true;
};
//speed:50%  O(n) leetcode
var canMakeArithmeticProgression = function (arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);

	const gap = (max - min) / (arr.length - 1);
	if (gap == 0) return true;

	let normalized = arr.map(v => v - min);
	let set = new Set(normalized);

	if (set.size != arr.length) return false;

	return [...set].every(val => val % gap == 0);
};

//LC#1507 Diff:Easy Reformat Date
/*
Given a date string in the form Day Month Year, where:
>Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
>Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
>Year is in the range [1900, 2100].
Convert the date string to the format YYYY-MM-DD, where:
>YYYY denotes the 4 digit year.
>MM denotes the 2 digit month.
>DD denotes the 2 digit day.

Input: date = "20th Oct 2052"  Output: "2052-10-20"
Input: date = "6th Jun 1933" Output: "1933-06-06"
Input: date = "26th May 1960"  Output: "1960-05-26"
Constraints:
The given dates are guaranteed to be valid, so no error handling is necessary.
*/
//speed:45%
var reformatDate = function (date) {
	const hm = {'Jan': "01", 'Feb': "02", 'Mar': "03", 'Apr': "04", 'May': "05", 'Jun': "06",'Jul': "07", 'Aug': "08", 'Sep': "09", 'Oct': "10", 'Nov': "11", 'Dec': "12"};
	let [d, m, y] = date.split(' ');
	d = d.replace(/[^\d]/g,'');
	d = d.length===1 ? '0'+d : d;
	return `${y}-${hm[m]}-${d}`;
};
//speed:40% leetcode
let reformatDate = date => new Date(date.replace('th', '').replace('st', '').replace('nd', '').replace('rd', '')).toISOString().slice(0, 10);
//regex worng answer though, but good use of regex
var reformatDate = function (date) {
	return date.replace(/(\d{1,2})[a-z]{2}\s([A-Za-z]{3})\s(\d{4})/, `$3-$2-$1`); //this gives "2052-Oct-20"!!! use regex101.com
};

//LC#1512 Diff:Easy Number of Good Pairs
/*
Given an array of integers nums. A pair (i,j) is called good if nums[i] == nums[j] and i < j. Return the number of good pairs.

Input: nums = [1,2,3,1,1,3]  Output: 4	Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Input: nums = [1,1,1,1] Output: 6  Explanation: Each pair in the array are good.
Input: nums = [1,2,3] Output: 0
Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100
*/
//speed:10%  O(n) space and time
var numIdenticalPairs = function (nums) {
	let hm = {}, count = 0;
	for(x of nums){
		if(hm[x]===undefined) hm[x]=1;
		else {
			count+=hm[x];  //if there were already 3 2s before this 2, count three pairs more.
			++hm[x];
		}
	}
	return count;
};
// O(nlogn) time and O(1) space
var numIdenticalPairs = function (nums) {
	nums.sort();
	let totalCount = 0, curCount = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			totalCount += curCount;
			curCount++;
		} else {
			curCount = 1;
		}
	}
	return totalCount;
};

//LC#1518 Diff:Easy Water Bottles
/*
Given 'numBottles' full water bottles, you can exchange 'numExchange' empty water bottles for one full water bottle. The operation of drinking a full water bottle turns it into an empty bottle.
Return the maximum number of water bottles you can drink.
Note: If you don't have enough to exchange, you can save the empty bottle for a later transaction.

Input: numBottles = 9, numExchange = 3  Output: 13
	Explanation: You can exchange 3 empty bottles to get 1 full water bottle. Number of water bottles you can drink: 9 + 3 + 1 = 13.
Input: numBottles = 15, numExchange = 4 Output: 19
	Explanation: You can exchange 4 empty bottles to get 1 full water bottle. Number of water bottles you can drink: 15 + 3 + 1 = 19.
Input: numBottles = 5, numExchange = 5 Output: 6
Input: numBottles = 2, numExchange = 3 Output: 2
Constraints:
1 <= numBottles <= 100
2 <= numExchange <= 100
*/
//speed:30% O(log(numBottles))
var numWaterBottles = function (numBottles, numExchange) {
	let count = 0, savedEmptyBottles = 0;
	while(numBottles>=1){
		count += numBottles;  //drink all the current bottles

		let currentEmptyBottles = numBottles + savedEmptyBottles;
		if (currentEmptyBottles%numExchange===0){
			numBottles = currentEmptyBottles/numExchange;
			savedEmptyBottles = 0;
		} else {
			numBottles = Math.floor(currentEmptyBottles/numExchange);
			savedEmptyBottles = currentEmptyBottles%numExchange;
		}
	}
	return count;
};
//recursive leetcode
var numWaterBottles = function (numBottles, numExchange) {
	const recursive = (num, res) => {
		if (num < numExchange) return res;
		const bottle = Math.floor(num / numExchange), left = num % numExchange;
		return recursive(bottle + left, res + bottle);
	}
	return recursive(numBottles, numBottles);
};
//leetcode clean
var numWaterBottles = function (numBottles, numExchange) {
	let total = numBottles
	while (numBottles) {
		let drink = Math.floor(numBottles / numExchange)
		if (!drink) break;
		total += drink
		numBottles = drink + (numBottles % numExchange)
	}
	return total
};

//LC#1523 Diff:Easy Count Odd Numbers in an Interval Range
/*
Given two positive integers low and high. Return the count of odd numbers between low and high (inclusive).
Input: low = 3, high = 7 Output: 3  Explanation: The odd numbers between 3 and 7 are [3,5,7].
Input: low = 8, high = 10 Output: 1 Explanation: The odd numbers between 8 and 10 are [9].
Constraints:
0 <= low <= high <= 10^9
*/
//speed:50%  (take 7->11 and 8-12 as examples)
var countOdds = function (low, high) {
	let n = high-low+1;
	return n%2===0 ? n/2 : low%2===0 ? Math.floor(n/2) : Math.ceil(n/2);
};
//leetcode brilliance
//the count of odd numbers between 1 and low-1 is low/2, the count of odd numbers between 1 and high is (high+1)/2
var countOdds = function (low, high) {
	return Math.floor((high+1)/2) - Math.floor(low/2);
};

//LC#1528 Diff:Easy Shuffle String
/*
Given a string 's' and an integer array 'indices' of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string. Return the shuffled string.
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]  Output: "leetcode"
	Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
Input: s = "abc", indices = [0,1,2] Output: "abc"
	Explanation: After shuffling, each character remains in its position.
Input: s = "aiohn", indices = [3,1,4,2,0] Output: "nihao"
Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5] Output: "arigatou"
Input: s = "art", indices = [1,0,2] Output: "rat"

Constraints:
s.length == indices.length == n
1 <= n <= 100
s contains only lower-case English letters.
0 <= indices[i] < n
All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).
*/
//speed:50%
var restoreString = function (s, indices) {
	let res = [];
	for (i = 0; i < s.length; i++) res[indices[i]] = s[i];
	return res.join('');
};
//speed:70% oneliner
var restoreString = function (s, indices) {
	return indices.map((x,i)=>[s[i],x])
		.sort((a,b)=>a[1]-b[1])
		.map(y=>y[0])
		.join('');
}
//leetcode O(N)-in-place cyclic sort but it does'nt work (infinite loop)
var restoreString = function (s, indices) {
	for(i=0;i<indices.length;i++){
		while(indices[i]!==i){
			[ s[i] , s[indices[i]] ] = [ s[indices[i]] , s[i] ];
			[ indices[i] , indices[indices[i]] ] = [ indices[indices[i]] , indices[i] ];
		}
	}
	return s;
}

//LC#1534 Diff:Easy Count Good Triplets
/*
Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
>0 <= i < j < k < arr.length
>|arr[i] - arr[j]| <= a
>|arr[j] - arr[k]| <= b
>|arr[i] - arr[k]| <= c
>Where |x| denotes the absolute value of x.
Return the number of good triplets.

Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3    Output: 4
	Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1  Output: 0
	Explanation: No triplet satisfies all conditions.
Constraints:
3 <= arr.length <= 100
0 <= arr[i] <= 1000
0 <= a, b, c <= 1000
*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:


//LC#1 Diff:Easy
/*

*/
//speed:









