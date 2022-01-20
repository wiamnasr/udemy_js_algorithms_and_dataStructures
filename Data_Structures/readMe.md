<h1>Data Structures </h1>

<p>Data structures are collections of values, the relationships among them and the functions or operations that can be applied to the data<br></br>There are so many data structures, each excels at different things. Some are highly specialized that require prior implementation, others (like arrays) are more generally used and come for free, require no prior implementation<br></br>- Need an ordered list with fast inserts/removals at the beginning and end? => Linked Lists<br></br>- Web scraping nested HTML? => Use a tree <br></br> - Need to write a scheduler? => Use a binary heap <br></br></p>

<br></br>
<br></br>

<h2>ES2015 Class Syntax</h2>

 <p>Class makes it easy to define a data structure<br></br>-> What is a class? <br></br>-> How does JS implement the idea of classes?<br></br>-> What is 'abstraction', 'encapsulation' and 'polymorphism'?<br></br>-> How to use ES2015 classes to implement data structures?</p>
<br></br>
<br></br>

> ### A class is a blueprint for creating objects with pre-defined properties and methods

<br></br>

  <p>JS takes advantage of prototypal base inheritance, the class syntax does not change how things work behind the scenes, its just an easier way to define class-like structures</p>

<br></br>
<br></br>

> ### Will implement data structures as classes

<br></br>

### Syntax:

```JavaScript

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

```

  <p>The method that creates new objects must be called 'constructor'<br></br>The class keyword creates a constant that cannot be redefined</p>

> ### To create a new instance, the 'new' keyword is used:

```JavaScript

let firstStudent = new Student("Colt", "Steele", 5);
let secondStudent = new Student("Blue", "Steele", 4);

```

<br></br>

### Instance Methods VS Static Methods (Class Methods)

<br></br>

> ### Instance Methods: More frequently used. Provide functionality that pertains to a single instance

```JavaScript

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
    // Instance method
    fullName() {
      // 'this' refers to the particular instance
      return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Colt", "Steele");

firstStudent.fullName();  // "Colt Steele"

```

<br></br>

> ### Class methods: Where we use the 'static' keyword in front of the method definition

<br></br>

                > This allows us to define methods/functionalities that are related to classes but not necessarily to individual instances of the class

                > Not that commonly used. Worth nothing as per the MDN documentation that Static Methods are called without instantiating their class and cannot be called through a class instance

                > Static methods are often used to create utility functions for an application

```JavaScript

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Class method
    static enrollStudents(...students) {
      // WE CAN DO SOMETHING HERE
      return "ENROLLING STUDENTS!";
    }
}

Student.enrollStudents();

```
