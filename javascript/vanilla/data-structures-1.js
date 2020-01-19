/* References:
BigO cheat sheet - https://www.bigocheatsheet.com/
Visualise Linked Lists: https://visualgo.net/en/list
Visualise Heap: https://visualgo.net/en/heap
List of data-structures: https://en.wikipedia.org/wiki/List_of_data_structures
Data structure MInd Map: https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link/c25f98c73a03f5b1107cd0e2f4bce29c9d78e31655e55cb0b785d56f0036c9d1
Hash generator (MD5): http://www.miraclesalad.com/webtools/md5.php
AVL tree animation: https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
AVL tree: https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
Red-black tree animation: https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
Red-black tree: https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
RB vs AVL tree: https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree
Graphs: https://visualgo.net/en/graphds

*/

/* High Level Notes:
Data Structures - You can't always rely on JS built-ins like arrays and objects. You need other structures to hold data/values better and process data better. Algorithms access/manipulate these values.
Program = Data Structure + Algorithm. The only constant in computer science. Everything else is syntax.
Each data structure is good at something - insert, remove, access, sort, traversal, search etc. Pick the right one and your algo BigO complexity will reduce.

Hardware: Storage -> RAM -> Cache -> CPU. Things are pulled out of storage in to RAM. CPU works out of RAM/cache. RAM is temporary memory but faster memory.
Your program and its data structures sit on RAM. So limited space and CPU time is also limited.


*/


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

	keys() {            // returns all the keys in the hash map. You loop over the entire hashmap eventhough most index might be empty. Whereas in array you just loop over the length of the array (and the array is not sparse like a hashmap)
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
ht.keys().forEach(k => console.log(ht.get(k)));  // prints out all the values.

//Any JS object uses hashtables under the hood
let user = {
	age: 54,
	name: 'kyle',
	magic: true,
	arr: [5, 6],
	scream: function () { }
}
user.age; // this access takes O(1)

// ES6 Map and Set also use hashtables. For Maps, the key does not have to be a string and map maintains the insertion order.


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
		while (node !== null) {
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

		while (node !== null) {
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
		while (n !== null && counter < i - 1) {
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
		while (current.next) {
			newtail = current;
			current = current.next;
		}
		this.tail = newtail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
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

		if (this.length === 0) this.tail = null;

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

	set(i, val) {          //O(n), Set node at index i, i.e overwrite the value at that index (if it is there)
		if (i < 0 || i >= this.length) return;

		let n = this.get(i);
		if (n) {
			n.value = val;
			return true;
		}
		return false;
	}

	insert(i, val) {       //O(n), Insert node at index i, same as insertAt()
		if (i < 0 || i > this.length) return false;

		if (i === this.length) { this.push(val); return true; }
		if (i === 0) { this.unshift(val); return true; }

		//i.e trying to add it somewhere in the middle
		let k = new Node(val);
		let prev = this.get(i - 1);

		k.next = prev.next;
		prev.next = k;
		this.length++;
		return true;
	}

	remove(i) {           //O(n), Remove node at index i, same as removeAt()
		if (i < 0 || i > this.length) return false;

		if (i === this.length - 1) { this.pop(); return true; }
		if (i === 0) { this.shift(); return true; }

		//i.e trying to remove something in the middle
		let prev = this.get(i - 1);
		let removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {          //Common question. Don't make any duplicate of the list. You just have to traverse the list and flip the direction of the next pointers in each node.
		if (this.length <= 1) return this;

		this.tail = this.head;      //update tail here

		// there are atleast two nodes in the list
		let prev = this.head;
		let current = this.head.next;
		while (current !== null) {
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
		if (this.length === 0) {    // Empty List
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
		if (this.length === 0) return;

		let removedNode = this.tail;
		if (this.length === 1) {
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
		if (this.length === 0) return;

		let removedNode = this.head;
		if (this.length === 1) {
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
		if (i < 0 || i >= this.length) return;

		let midPoint = Math.floor(this.length / 2);
		requiredIndex = i < midPoint ? i : this.length - 1 - i;     //if you are going to go backwards, then required index will change...

		let n = this.head;
		let counter = 0;
		while (counter !== requiredIndex) {
			n = i < midPoint ? n.next : n.prev;
			counter++;
		}
		return n;
	}

	set(i, val) {       // O(n/2), Set (overwrite) the value at index i with val
		let n = this.get(i);
		if (n) {
			n.val = val;
			return true;
		}
		return false;
	}

	insert(i, val) {     // O(n/2), Insert a new node at index i
		if (i < 0 || i > this.length) return false;
		if (i === 0) return !!this.unshift(val);
		if (i === this.length) return !!this.push(val);

		//i.e inserting a new element somewhere in the middle.  (also, no need to update head or tail now)
		let k = new Node(val);

		let prevNode = this.get(i - 1);   //this will never be null
		//need to update 4 links
		k.next = prevNode.next;
		k.prev = prevNode;
		prevNode.next.prev = k;
		prevNode.next = k;
		this.length++;
		return true;
	}

	remove(i) {         // O(n/2), Remove the node at index i
		if (i < 0 || i >= this.length) return;
		if (i === 0) return !!this.shift();
		if (i === this.length - 1) return !!this.pop();

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

		if (this.root === null) { this.root = k; return this; }      //empty tree

		let n = this.head;
		while (true) {
			if (val === n.data) return undefined;        //Do not accept duplicate values

			if (val < n.data && n.left === null) {
				n.left = k;
				return this;
			} else if (val < n.data) {
				n = n.left;
			} else if (val > n.data && n.right === null) {
				n.right = k;
				return this;
			} else if (val > n.data) {
				n = n.right;
			}
		}
	}

	search(val) {          //Search for a val in the tree
		if (this.root === null) return false;       //empty tree

		let n = this.root;
		let found = false;
		while (n && !found) {
			if (val < n.data) {
				n = n.left;
			} else if (val > n.data) {
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
		while (queue.length !== 0) {
			let n = queue.shift();
			visitedNodes.push(n);
			if (n.left) queue.push(n.left);
			if (n.right) queue.push(n.right);
		}
		return visitedNodes;
	}

	breadthFirstSearchRecursive(queue = [this.root], list = []) {
		if (!queue.length) return list;

		let n = queue.shift();
		list.push(n);
		if (n.left) queue.push(n.left);
		if (n.right) queue.push(n.right);

		return this.breadthFirstSearchRecursive(queue, list);
	}

	depthFirstPreOrderTraversalIteration() {    //use a stack. When you visit a node, finish it's entire left side then only start it's right side.
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

		let currentLocation = this.heapArr.length - 1;
		let nextParent = Math.floor((currentLocation - 1) / 2);

		while (nextParent > -1 && this.heapArr[currentLocation] > this.heapArr[nextParent]) {
			[this.heapArr[nextParent], this.heapArr[currentLocation]] = [this.heapArr[currentLocation], this.heapArr[nextParent]];  // swap

			currentLocation = nextParent;   // go one level up
			nextParent = Math.floor((nextParent - 1) / 2);
		}
	}

	remove() {        // In a binary heap, remove means, remove root. You only always remove the root from binary heaps. (i.e remove the max/min value of the entire heap)
		// remove the root and put some random number there, and then bubble-down that value appropriately, to backfill the whole tree. Normally you put the last element up at the root.

		if (this.heapArr.length === 0) return;

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

		[this.heapArr[0], this.heapArr[this.heapArr.length - 1]] = [this.heapArr[this.heapArr.length - 1], this.heapArr[0]];        // blindly swap root with the last element
		let returnValue = this.heapArr.pop();           // remove root completely from the heap

		let currentLocation = 0;
		let nextChild = getNextChildLocation(currentLocation);

		while (nextChild && this.heapArr[nextChild] > this.heapArr[currentLocation]) {
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
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
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
			if (!v) return null;       // author says this is the base case?! But i think this is just a safety null check.

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
		this.adjacencyList[v1].push({ node: v2, weight });    //ES6 shorthand syntax weight:weight is just weight
		this.adjacencyList[v2].push({ node: v1, weight });
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
		previousBestNode[v] = v === v1 ? v1 : null;
		shortestDistanceFromV1[v] = v === v1 ? 0 : -Infinity;
		nodesToVisit.enqueue(v, v === v1 ? 0 : Infinity);
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

		if (bestNodeToVisit || shortestDistanceFromV1[bestNodeToVisit] !== Infinity) {
			for (child of graph(bestNodeToVisit)) {   // the list of all edges for this particular node
				// calculate the new distance to child
				let totalLengthToChild = shortestDistanceFromV1[bestNodeToVisit] + child.weight;
				if (totalLengthToChild < shortestDistanceFromV1[child.node]) {
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
		'shortestPath': resultantShortestPath.reverse(),
		'shortestDistance': resultantShortestDistance
	};
}

function DijkstraByTheAuthor(start, finish) {
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

