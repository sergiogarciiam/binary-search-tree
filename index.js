import { Tree } from "./src/binarySearchTrees.js";
import { getRandomArray } from "./src/util.js";

const myTree = new Tree(getRandomArray());

// normal
myTree.prettyPrint();
console.log("--------------------------------");
console.log(`Is balanced? ${myTree.isBalanced()}`);
console.log(`PreOrder? ${myTree.preOrder()}`);
console.log(`InOrder? ${myTree.inOrder()}`);
console.log(`PostOrder? ${myTree.postOrder()}`);

// add elements
console.log("--------------------------------");
console.log("ADDING ELEMENTS...");

myTree.insert(Math.floor(Math.random() * 1001));
myTree.insert(Math.floor(Math.random() * 1001));
myTree.insert(Math.floor(Math.random() * 1001));
myTree.insert(Math.floor(Math.random() * 1001));
myTree.insert(Math.floor(Math.random() * 1001));
myTree.insert(Math.floor(Math.random() * 1001));
myTree.insert(Math.floor(Math.random() * 1001));
myTree.insert(Math.floor(Math.random() * 1001));
myTree.insert(Math.floor(Math.random() * 1001));
myTree.insert(Math.floor(Math.random() * 1001));

// no balance
console.log("--------------------------------");
myTree.prettyPrint();
console.log("--------------------------------");
console.log(`Is balanced? ${myTree.isBalanced()}`);

// balance
console.log("--------------------------------");
console.log("RE-BALANCING...");

myTree.reBalance();
console.log("--------------------------------");

myTree.prettyPrint();
console.log("--------------------------------");

console.log(`Is balanced? ${myTree.isBalanced()}`);
console.log(`PreOrder? ${myTree.preOrder()}`);
console.log(`InOrder? ${myTree.inOrder()}`);
console.log(`PostOrder? ${myTree.postOrder()}`);
