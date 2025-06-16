// 2. Define a class named `Employee` with private attributes `name`, `salary`,
// and `designation`. Encapsulate these attributes using appropriate access specifiers.
// Implement public member functions to set and get the values of these attributes.
//  Demonstrate the encapsulation concept by accessing these attributes
// through the member functions

class Employee {
  // a class is created with name employee
  #name; // a private attribute is assign to store name of employee
  #salary; // a private attribute is assign to store salary of employee
  #designation; // a private attribute is assign to store designation of employee

  set(name, salary, designation) {
    // a set method is created to access the values of employee
    this.#name = name; // a local attribute is assign to global attribute
    this.#salary = salary; // a local attribute is assign to global attribute
    this.#designation = designation; // a local attribute is assign to global attribute
  }

  get() { // a get method is created to display the values/details of employee
    document.writeln("<br> Name : " + this.#name); // printed name of employee
    document.writeln("<br> Salary : " + this.#salary); // printed salary of employee
    document.writeln("<br> Designation : " + this.#designation); //printed designation of employee
  }
}

const employee = new Employee(); // an object is created to access the values of employee
employee.set("Parth", "1L", "Software developer"); // set method is called to give values
employee.get();// get method is called to display the values
