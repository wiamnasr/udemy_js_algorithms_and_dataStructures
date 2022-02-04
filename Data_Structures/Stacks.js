/*
    Stacks

            >   What is a stack?

            >   What are the  use-cases?

            >   How to implement operations on a stack data structure?


            ________________________________________________________________________________________

            ***Stacks and Ques are both data collections, an abstract data structure

            ***Stacks abide by the LIFO principle, Last In First Out

            ***Stacks are used to manage function invocations, Undo/Redo functionality, Routing (the history object e.g. the one used by React), stacks are used as an intermediary in the algorithm

            
            ___________________________________________________________________________________________

    
                -----------------------------
                    PUSHING PSEUDO-CODE
                -----------------------------

                -   Function should accept value

                -   Create a new node with that value

                -   no nodes in the stack ? set first and last property to newly created node

                -   If there is at least one node, create a var that stores the current first property on the stack

                -   Reset the first property to be the newly created node

                -   Set the next property on the node to be the previously created var

                -   Increment the size of the stack by 1

                -   Return the size

                   
            ___________________________________________________________________________________________

    
                -----------------------------
                    POP PSEUDO-CODE
                -----------------------------

                -   No nodes in the stack ? return null

                -   : take whatever the first property is  on the stack, store it in a var to return at the very end

                -   If there s only one node, set the first and last property to be null

                -   More than one node ? set the first prop to be the next property on the current first

                -   Decrement the size by 1
                
                -   Return the value of the node removed

                

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    var temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    //   this way we are setting first to be null as well
    this.first = this.first.next;

    this.size--;

    return temp.val;
  }
}

const stack = new Stack();

stack.push("1");
console.log(stack);

stack.push("2");
console.log(stack);

stack.push("3");
console.log(stack);

stack.pop();
console.log(stack);

stack.pop();
console.log(stack);

stack.pop();
console.log(stack);

/*
          _____________________________________________________________________________________________

          Big O of Stacks

            - Insertion: O(1)

            - Removal: O(1)

            - Searching: O(N)

            - Access: O(N)
            
*/
