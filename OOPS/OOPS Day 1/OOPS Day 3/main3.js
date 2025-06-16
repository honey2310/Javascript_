// module 4 ques1
// Create a class `Student` with private attributes `name`, `rollNumber`, and a parameterized constructor.
// Demonstrate the instantiation of objects using this constructor with help of array.

class Student {
  // class is created with student name
  #name; // a private attribute is created with name of student
  #rollNumber; // a private attribute is created with rollnumber of student

  constructor(name, rollNumber) {
    // A special method called constructor is created and attributes are aasign to it
    this.name = name; // local attribute is assign to global attribute
    this.#name = name; // local attribute is assign to global attribute
    this.#rollNumber = rollNumber; // local attribute is assign to global attribute
  }

  displayDetails() { // a method is created to display the details of students
    document.writeln("<br>Name :", this.#name); // printed students names
    document.writeln("<br>rollnumber :", this.#rollNumber); // printed roll number of student
  }
}

const students = [ // an array onject is created to display the students name
  new Student("Riya", 16),
  new Student("Rohan", 20),
  new Student("Binod", 12),
];

students.forEach((student) => { // loop is used to show the result
  student.displayDetails(); // display details is called so we can see the result
});
