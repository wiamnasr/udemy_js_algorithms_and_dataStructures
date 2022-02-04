/*
    Queues

            >   What is a Queue?

            >   What are the  use-cases?

            >   How to implement operations on a queue data structure?


            ________________________________________________________________________________________

            ***Queues are similar to stacks in the sense that both data structures data is added in and removed out

            ***However Queues, unlike stacks have a FIFO data structure, First In First Out

            ***Queues exist everywhere, Background tasks, uploading resources, printing/task processing, ...
             
            ___________________________________________________________________________________________

    
                -----------------------------
                    ENQUEUE PSEUDO-CODE
                -----------------------------

                -   Function accepts some value

                -   Create a new node using that value passed to the function

                -   If there are no nodes in the queue, set this node to be the first and last property

                    
            ___________________________________________________________________________________________

    
                -----------------------------
                    DEQUEUE PSEUDO-CODE
                -----------------------------

                -   Define a function, takes no args

                -   if there's no first property, just return null

                -   : Store first property in a var

                -   See if the first and last are the same (check if there's only one node remaining), if so, set first and last to null

                -   If theres more than one node, set the first prop to be the next prop of first

                -   Decrement size by 1

                -   Return the value of dequeued node


                
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.size--;

    return temp.value;
  }
}

const queue = new Queue();

queue.enqueue("1");
queue.enqueue("2");

console.log(queue);

queue.enqueue("3");
queue.enqueue("4");

console.log(queue);

queue.dequeue();
console.log(queue);

queue.dequeue();
queue.dequeue();
console.log(queue);

queue.dequeue();

console.log(queue);

/*
          _____________________________________________________________________________________________

          Big O of Queues

            - Insertion: O(1)

            - Removal: O(1)

            - Searching: O(N)

            - Access: O(N)
            
*/
