<h1>Trees</h1>

<ul>
    <li>What is a Tree?</li>
    <li>What's the difference between trees and lists?</li>
    <li>What are the differences between trees, binary trees and binary search trees?</li>
    <li>How to implement operations on binary search trees?</li>
</ul>

<p>Trees are data structures that consists of nodes in a parent/child relationship. We end up with branching structures (tree like) <br></br> Trees, unlike lists are non-linear, many different paths that could be taken, with lists that are linear, there's only one path through</p>

<br></br>
<br></br>

<h2>There are some rules when talking about trees</h2>

<li>A node can only point to a child (parent/child relationship), we cannot have a child pointing to the parent</li>
<li>We cannot have a node pointing to a sibling</li>
<li>Every node is moving "away" from the root node</li>
<li>The root is the top node of the tree</li>
<li>child node is a node that s directly connected to another node when moving away from the root</li>
<li>a parent node has the converse notion of a child node</li>
<li>Siblings are a group of nodes from the same parent</li>
<li>A leaf, is a node with no children</li>
<li>Edge is the actual arrow (the connection) between one node and another</li>

<br></br>
<br></br>

<h2>Real world use-cases of trees</h2>

> ### HTML/DOM

> ### Network Routing --> Finding shortest path

> ### Abstract Syntax Trees --> A way of describing the syntax of a programming language using a tree structure

> ### Artificial Intelligence --> ML for example a mini max tree (building an ai tool for a tic-tac toe game that anticipates possible moves and what options could happen as a best possible next move ----> decision tree)

> ### Computer Folders modeling in an OS

> ### JSON --> parsed responses from api data for instance, there is a code that is traversing and creating a tree like structure with parent and child nodes, but only a single root

<br></br>

<h2>Binary trees & Binary Search Trees (BSTs)</h2>

<ul>
    <li>Each node can have at most 2 children</li>
    <li>Binary Search Trees are a special case of a binary tree, where each node also can have at most 2 children, on top of that, binary search trees are kept in order (sorted in a certain way)</li>
    <li>In Binary Search Trees, every node to the left of the parent is always less than the parent, and every node to the right of the parent is always greater than the parent</li>
    
</ul>

<br></br>
<br></br>

> ## Binary Search Tree Class and Node Class

### Syntax:

```JavaScript


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
}


// Initializing
var tree = new BinarySearchTree();
tree.root = new Node(20);

```

<hr></hr>
    
<br></br>
<br></br>

<h2>Tree Traversal</h2>

### There are two ways of traversing a tree:

> #### Breadth-first Search

> #### Depth-first Search

<br></br>

<h2>Breadth First Search BFS</h2>

<p>Breadth first search means that we want to visit every node on the same level, every sibling node before we look at a child</p>

<h2>Depth First Search DFS</h2>

<p>Depth first search traverse nodes vertically, down to the end of the tree, before visiting sibling nodes</p>

<br></br>

<h2>Breadth First Search BFS VS Depth First Search DFS When to use What?</h2>

> ### It depends on the tree, if it was flashed out (wide tree), to avoid space complexity, it s better to use breadth first search

> ### Else if the tree was deep (vertically long) => we use depth first search

<br></br>

<h2>Depth First Search DFS When to use Pre, Post or In Order?</h2>

> ### Example InOrder gets us all the data in order, from lowest to highest, do ideal when you want to get the set of all nodes in order

> ### PreOrder helps us get a list that is useful if we are trying to clone/duplicate/store the tree, to re-create it later

```JavaScript



```

<br></br>

###

<br></br>

> ###

```JavaScript



```

<br></br>

> ###

<br></br>

```JavaScript



```
