import { Tree } from "./src/binarySearchTrees.js";
import { getRandomArray } from "./src/util.js";

const myTree = new Tree(getRandomArray());

// normal
myTree.prettyPrint();
console.log(`Is balanced? ${myTree.isBalanced()}`);
console.log(`PreOrder: ${myTree.preOrder()}`);
console.log(`InOrder: ${myTree.inOrder()}`);
console.log(`PostOrder ${myTree.postOrder()}`);

// add elements
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
myTree.prettyPrint();
console.log(`Is balanced? ${myTree.isBalanced()}`);

// balance
myTree.reBalance();

myTree.prettyPrint();
console.log(`Is balanced? ${myTree.isBalanced()}`);
console.log(`PreOrder: ${myTree.preOrder()}`);
console.log(`InOrder: ${myTree.inOrder()}`);
console.log(`PostOrder ${myTree.postOrder()}`);
