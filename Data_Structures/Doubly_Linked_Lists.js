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



            ___________________________________________________________________________________________

    
                -----------------------------
                    POP PSEUDO-CODE
                -----------------------------

                -   !tail ? return undefined

                -   : take current tail and store it in a var to be returned later

                -   special case, if the length is 1, set head and tail to be null because the list is now empty

                -   Update the tail to be the previous node

                -   Take the new tail and make its .next = null => also remove the other reference, although technically it may not be a problem, unless someone starts from the removed node and accesses .previous which would give them the entire list! better chop it off

                -   Decrement the length

                -   Return removed value




            ___________________________________________________________________________________________

    
                -----------------------------
                    SHIFT PSEUDO-CODE
                -----------------------------
                
                -   length === 0 || !head ? return undefined

                -   : store curr head property in a var (old head)

                -   Special case if len === 1 and we removed the last item, set head = null and tail = null

                -   Otherwise, update head to be the .next of the old head

                -   Set the new head's prev prop to null, set the old head's next to null

                -   Decrement the length

                -   Return the old head



            ___________________________________________________________________________________________

    
                -----------------------------
                    UNSHIFT PSEUDO-CODE
                -----------------------------

                -   Create a new node with passed in value

                -   len == 0 ? set head and tail to be new node

                -   : set prev prop on the head of the list to be the new node, set the next prop on the new node to be the current head prop, update the head to be the new node

                -    Increment length

                -   Return new list

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

  pop() {
    if (!this.head) return undefined;

    var poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;

      //   Remember to sever the connection from the removed node to the doubly linked list
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    var oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;

      this.head.prev = null;

      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}

list = new DoublyLinkedList();

// list.push("hello");
// list.push("!!");
// console.log(list);

// list.shift();

// console.log(list);

// list.shift();

// console.log(list);

list.unshift("hola");

console.log(list);

list.unshift("bonjour");

console.log(list);
