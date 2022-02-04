/*
    Binary trees & Binary Search Trees (BSTs)


    ***Each node can have at most 2 children
    ***Binary Search Trees are a special case of a binary tree, where each node also can have at most 2 children, on top of that, binary search trees are kept in order (sorted in a certain way)
    ***In Binary Search Trees, every node to the left of the parent is always less than the parent, and every node to the right of the parent is always greater than the parent


    ___________________________________________________________________________________________

    
                -----------------------------
                    INSERTING PSEUDO-CODE
                -----------------------------

                ***Inserting can be done iteratively or recursively

                -   Create a new node

                -   Starting at the root:
                        >   If there is no root, the root becomes the newNode
                        >   If there is a root, check if the value of the new node is greater than or less than the value of the root
                        >   If new node value is greater than root value:
                                    --> Check to see if there's a node to the right
                                        ----> If there is, move to that node, and repeat these steps
                                        ----> If there is no node to the right, add that node as the right property
                        >   If the new node value is less than the root value:
                                    --> Check to see if there's a node to the left
                                        ----> If there is, move to that node and repeat these steps
                                        ----> If there is not, add that node as the left property

    ___________________________________________________________________________________________

    
                -----------------------------
                    FIND PSEUDO-CODE
                -----------------------------
                ***Find can be done iteratively or recursively

                -   Starting at the root
                    > Check if there is a root, if not, done searching
                    > If there is a root, check if the value of the new node is the value we are searching for, if it is, its found and we're done
                    > If not, check to see if the value is > || < the value of the root
                    > If it is greater:
                        --> Check to see if there is a node to the right
                            ---->   If there is, move to that node and repeat these steps
                            ---->   If there isn't we're done searching
                    > If it is less:
                        --> Check to see if there is a node to the left
                            ---->   If there is, move to that node and repeat these steps
                            ---->   If there isn't we're done searching


*/

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
}

// Initializing
var tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);

tree.insert(500);
tree.insert(-6);
tree.insert(30);
tree.insert(6);

// trying to insert a duplicate => should return undefined
// console.log(tree.insert(6));

console.log(tree.find(95));
console.log(tree.find(3));
console.log(tree.find(30));
console.log(tree.find(-2));
￼
NOW WATCHING - 06:00
Breakfast

04/02/2022

ON NEXT - 09:15
Rip Off Britain

2022 Live: Episode 5

BBC One West Midlands Schedule
Featured on BBC One

/*
          _____________________________________________________________________________________________

          Big O of BST - Best and average case

            - Insertion: O(log n)

            - Searching: O(log n)

            
*/
