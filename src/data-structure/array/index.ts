import { myArray } from "./array";


const arr = new myArray();

arr.push("20");
arr.push("12");
arr.push("9");
arr.push("7");
//arr.pop();
arr.insert(2, "67");

console.log(arr)

//Access	Search	Insertion	Deletion	Push	Pop
//O(1)	     O(n)	   O(n)	      O(n)	     O(1)	O(1)