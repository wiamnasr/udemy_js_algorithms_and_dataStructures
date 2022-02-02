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

                -   Increment the length by one

                -   Return the linked list



            ___________________________________________________________________________________________

    
                -----------------------------
                    Popping PSEUDO-CODE
                -----------------------------

                -   No nodes in the list? => Return 'undefined'

                -   Otherwise loop through the list until reaching the tail =>  keep a variable to keep track of whatever the last item was

                -   Set 'next' property of the 2nd to last node to be null

                -   Update the tail to be that 2nd to last node

                -   Decrement the length of the list by 1

                -   Return the value of removed node


            ___________________________________________________________________________________________

    
                -----------------------------
                    Shifting PSEUDO-CODE
                -----------------------------

                -   No nodes? => return undefined

                -   Store current head property in a var

                -   Set head property to be the current head's next property

                -   Decrement the length by 1

                -   Return the value of the node removed


            ___________________________________________________________________________________________

    
                -----------------------------
                    Unshifting PSEUDO-CODE
                -----------------------------

                - Define a function that accepts a value that will be added to the beginning

                - Create a new node, using the value passed to the function (like what was done with push)

                - !head ? set head and tail to be newly created node

                - : set newly created node's next property to be the current head property on the list

                - Set the head property on the list to be that newly created node

                - Increment the length of the list by 1

                - Return the linked list


          
            ___________________________________________________________________________________________

    
                -----------------------------
                    GET PSEUDO-CODE
                -----------------------------

                *** GET is a method that takes a number(index/position), and returns the item in that position
                          -> traverse the list that many times (according to the number)


                  - Create a function that should accept an index

                  - index < 0 || index >= list.length ? null

                  - loop through the list until reaching the index, returning the node at that specific index


          
            ___________________________________________________________________________________________

    
                -----------------------------
                    SET PSEUDO-CODE
                -----------------------------
                ** Changing the value of a node based on it's position in the Linked List
                      -> Set accepts 2 things: a position (index) and a value to update the item at that index to

                  - Define a function that accepts an index and a value

                  - Use get method (defined from before) to find the specific node

                  - node not found ? return false

                  - node found ? set the value of that node to be the value passed to the function and return true


          
            ___________________________________________________________________________________________

    
                -----------------------------
                    INSERT PSEUDO-CODE
                -----------------------------

              *** Like set, Insert takes an index and a value, however, instead of updating an existing node, insert will insert a new node at specified index

                  - Define a function that takes in index and a value

                  - index < 0 || index > length ? return false

                  - index == list.length ? push a new node to the end of the list

                  - index == 0 ? unshift a new node to the start of the list

                  - : using the get method, access the node at the index - 1

                  - Set the next property on that node to be the new node

                  - Set the next property on the new node to be the previous next

                  - Increment the length

                  - Return true


        
            ___________________________________________________________________________________________

    
                -----------------------------
                    REMOVE PSEUDO-CODE
                -----------------------------
                  *** Removing a node from the linked list at a specific position, it patches up the list around it
                  
                  - Define a function that accepts an index

                  - index < 0 || index > list.length ? return undefined

                  - index === list.length - 1 ? pop

                  - index === 0 ? shift

                  - : use the get method, access the node at index - 1

                  - Set the next property on that node to be the next of the next node

                  - Decrement the length

                  - Return the value of the removed node


                   
            ___________________________________________________________________________________________

    
                -----------------------------
                    REVERSE PSEUDO-CODE
                -----------------------------
                *** Reversing the linked list in place (without making a copy/duplicate)

                  - Swap the head and tail

                  - Create a variable (can be called next)

                  - Create another variable called prev

                  - Create a variable called node/current/... and initialize it to the head property

                  - Loop through the list

                  - Set the next variable to be the next property on whatever our current node is (store the current next, so when we change the .next to the item that came before it, we haven't lost that connection forever)

                  - Set the next property on the node to be whatever prev is

                  - Set the prev to be the value of the node variable

                  - Set the node variable to be the value of the next variable





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

    var newNode = new Node(val);

    //    Edge-case if its empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    /*
      important to note in this method, when we remove the last item, resetting the tail to be the item before it is tricky with singly linked lists
      we need to traverse from the beginning up until the last item after pop => remember linked lists are not indexed and singly linked lists are linked in one direction
    */

    if (!this.head) {
      return undefined;
    }

    // when looping, will have 2 variables. 'current' will hit the end, 'newTail' will become the new tail
    // move current, check if end of list, if not move new tail then repeat until end of list, then dont move newTail, rather set as new tail

    // In the beginning they both are the same thing
    var current = this.head;
    var newTail = current;

    // loop over, while there is something (current.next)
    while (current.next) {
      // newTail is always lagging behind
      newTail = current;
      current = current.next;
    }
    // moving the tail
    this.tail = newTail;

    // setting next to be equal null to sever the connection
    this.tail.next = null;

    // decrement length
    this.length--;

    // after removing the last item in the list, make sure to account for head and tail values as they are set to equal each other
    // this is a clunky solution but works, other solutions can be more practical
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    // no nodes? => return undefined
    if (!this.head) {
      return undefined;
    }

    // storing curr head prop
    var currentHead = this.head;

    // move curr head over to be the curr head's next node
    this.head = currentHead.next;

    this.length--;

    // dec len by 1, last decrement, the head will be null but the tail will not, that is not a problem, as soon as we re-assign to the head, the tail will be re-assigned
    // but better to account for it as below
    if (this.length === 0) {
      this.tail = null;
    }

    // this is the removed head returned
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);

    // checking edge case !head
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // else statement allows us to avoid infinite self reference
      newNode.next = this.head;

      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    var counter = 0;
    var current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    // Remember push doesn't return true or false, it returns a whole list
    // !! is used to transform the result to boolean
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);

    // placeholder variable not to lose the connection
    var temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    var previousNode = this.get(index - 1);

    var removed = previousNode.next;

    previousNode.next = removed.next;

    this.length--;

    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next;
    // we want the end of the tail to be null
    var prev = null;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }
    return this;
  }

  // This method is to help visualize that our reverse method worked
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
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
list.push("Hello");
list.push("Goodbye");
list.push("!!!!!!!!");
// console.log(list);
list.shift();
list.unshift("bla bla");

// console.log(list.get(1));

// console.log(list.set(2, "!!!!"));
// console.log(list.insert(0, "first"));
// list.remove(2);

// console.log(list);

// list.remove(0);
list.reverse();
list.print();

// console.log(list);

/*
          _____________________________________________________________________________________________

          Big O of Singly Linked Lists

            - Insertion: O(1)

            - Removal: It depends O(1) || O(N)

            - Searching: O(N)

            - Access: O(N)
            
*/
