/*
Filename: complexCode.js

This code demonstrates a complex algorithm for generating the Fibonacci sequence using dynamic programming technique.

*/

const fibonacci = (n) => {
  // Create a lookup table to store calculated Fibonacci numbers
  const lookup = new Array(n);

  // Base case
  lookup[0] = 0;
  lookup[1] = 1;

  // Generate Fibonacci sequence up to nth term
  for (let i = 2; i <= n; i++) {
    lookup[i] = lookup[i - 1] + lookup[i - 2];
  }

  // Return the nth Fibonacci number
  return lookup[n];
};

const calculateFibonacciSeries = (length) => {
  let series = [];

  for (let i = 0; i < length; i++) {
    series.push(fibonacci(i));
  }

  return series;
};

// Calculate and print the Fibonacci series up to the 15th term
console.log(`Fibonacci Series up to the 15th term: ${calculateFibonacciSeries(15)}`);

// Another complex function demonstrating recursion and tree traversal

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const inOrderTraversal = (node) => {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
};

// Create a binary tree
const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);
rootNode.right.right = new Node(7);

// Perform in-order traversal of the binary tree
console.log("In-Order Traversal:");
inOrderTraversal(rootNode);
