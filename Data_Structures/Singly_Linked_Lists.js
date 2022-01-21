/*
    Singly Linked Lists

    ->  What is a Singly Linked List?

    ->  How is it different from familiar list structures (e.g. Arrays)?

    ->  How to define a linked list Class and add methods (functionalities)?

                    =>  Functionalities include adding things to the list (push), pop-ing items from the list, searching the list, traverse or delete things

            ________________________________________________________________________________________


            ****A linked list is:

                -   A data structure, that stores whatever type of data we want (e.g. strings, numbers, ...)

                -   Ordered, but unlike arrays where each item is indexed with a number, a linked list consists of elements (nodes containing the data) with no indexes, that are just pointing to the next element

                -   A data structure that contains a 'head', 'tail' and 'length' property, that is how we keep track of a linked list

            
            ****The terminology 'singly linked list' comes from the fact that each node is only connected one directionally to the next node

            ****Random access is not allowed, What linked lists are mostly helpful for is insertion and deletion especially working with big data sets where random access is not needed



            ___________________________________________________________________________________________

    
                -----------------------------
                        PUSHING PSEUDO-CODE
                -----------------------------

                -   Function should accept a value

                -   It should create a new node, using the value passed

                -   If !head set head and tail to newly created node

                -   Else if head set next property on tail to be the new node and update the tail property to be the newly created node

                -   Finally increment the length by one


*/

// A linked list is a collection of nodes, so we start by defining a class for each node

// A node stores a piece of data (value), as well as a reference to next node (next)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    //   REMEMBER: a linked list has a pointer to the head, another to the tail and the length

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //   Push method
  push(val) {
    /*
        with an empty linked list, if I try to insert, the head and the tail should be set to the first inserted value
        on second insert at the end (push) other than the first, we take the head and have the next property point to the value to be inserted and set the tail to be the value newly inserted
        any push (insert at the end) can be done by having the next pointer point at the new value to be inserted at the end and make that the new tail
        No need to traverse the whole list, as long as we keep track of the last item its fast to push values there (tail)
    */
  }
}

/*
// A bad way of implementing as we need to keep adding .next
// Put it here to demonstrate visually the logic that happens in linked lists

var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("How");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

console.log(first.next.next);
console.log(first.next.next.next);
console.log(first.next.next.next.next);

*/

var list = new SinglyLinkedList();
// in this case we dont have to keep track of the '.next' count as above in commented out part, it s been taken care of
list.push("Hello");
list.push("Goodbye");