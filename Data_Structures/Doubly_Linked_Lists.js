/*
    Doubly Linked Lists

    ->  What is a Doubly Linked List?

    ->  How is it difference between doubly linked lists and singly linked lists

            ________________________________________________________________________________________


            ****A  Doubly linked list is:

                -   Each node points in 2 directions

                -   Almost identical implementation as a singly linked list

                -   We have nodes, there is no indexing, no random access using numbers/index, we have a head and a tail

                -   Every node in the list points to the next node ahead of it, but also the previous node behind it (That's where the doubly linked part comes from)

                -   Doubly linked lists can be traversed both ways

                -   Space complexity is a real drawback, more flexibility means more memory usage in the case of doubly linked lists




            ___________________________________________________________________________________________

    
                -----------------------------
                    PUSHING PSEUDO-CODE
                -----------------------------

                -   Create the new node that will be added with the value passed in

                -   list is empty ? head and tail are both the newly created node, nothing else to do

                -   : if there is something in there already, we take the current tail, set the next property on it to be the new node that was just created

                -   Take the previous property of the new node and set it equal to the old tail <= point arrow backwards as this is a doubly linked list

                -   Update tail property to be the newly created node, that is now at the end

                -   Increment the length

                -   Return the doubly linked list

*/

// Setting up the 2 classes for the doubly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

list = new DoublyLinkedList();

list.push("hello");
console.log(list);
list.push("!!");
console.log(list);
