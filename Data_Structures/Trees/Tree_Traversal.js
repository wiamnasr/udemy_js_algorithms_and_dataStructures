/*
    Tree Traversal
        There are two ways of traversing a tree:
            >   Breadth-first Search
            >   Depth-first Search


    -   Breadth First Search BFS:
            
        Breadth first search means that we want to visit every node on the same level, every sibling node before we look at a child node


    -   Depth First Search DFS:
        
        Depth first search traverse nodes vertically, down to the end of the tree, before visiting sibling nodes


    ___________________________________________________________________________________________

    
                -----------------------------
                    BFS PSEUDO-CODE
                -----------------------------

                -   Create a queue (this can be an array) and a variable to store the values of nodes visited

                -   Place the root node in the queue

                -   Loop as long as there is anything in the queue

                        >   Dequeue a node from the queue and push the value of the node into the variable that stores the nodes

                        >   If there's a left property on the node dequeued, add it to the queue

                        >   If there's a right property on the node dequeued, add it to the queue

                -   Return the variable that stores the values

    ___________________________________________________________________________________________

    
                -----------------------------
                    DFS - PreOrder PSEUDO-CODE
                -----------------------------
                ***Recursively

                -   Create a var to store the values visited

                -   Create a curr var to store the root of the tree in there

                -   Write a helper function which accepts a node

                        >   Push the value of the node to the var that stores the values

                        >   If the node has a left property, call the helper function with the left property on the node

                        >   If the node has a right property, call the helper function with the right property on the node

                -   Invoke the helper function with the current variable

                -   Return the array of values


*/

// Copying in the BinarySearchTree Created Before
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;

      while (true) {
        //   Accounting for duplicate inserts, not to run into an infinite loop
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    var current = this.root,
      found = false;

    //   while there is something to loop over and its not found
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    //   returning false if not found
    if (!found) return undefined;
    return current;
  }

  //   Creating a Breadth First Search Method
  BFS() {
    var data = [],
      queue = [],
      node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();

      //   adding to the list that will be returned
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //   Depth First Search - Pre-Order
  DFSPreOrder() {
    var data = [];

    var current = this.root;

    function traverse(node) {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(1);
tree.insert(4);
tree.insert(23);
tree.insert(11);

console.log(tree.BFS());

console.log(tree.DFSPreOrder());
