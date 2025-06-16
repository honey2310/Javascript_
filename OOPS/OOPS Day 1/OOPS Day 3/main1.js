// // module 5 ques1
// Create a class `Laptop` with private attributes `name`, `price`, `processor`,
//  and a parameterized constructor.
//  Demonstrate the instantiation of objects using this constructor.

class Laptop {
  // class is created with the name of Laptop
  constructor(name, price, processor) {
    // A special method called constructor is created and attributes are aasign to it
    this.name = name; // global attributes is created and local attribute's name value is assgin to this.name global attributes (this defined global attributes)
    this.price = price; // global attributes is created and local attributes's price value is assgin to this.price global attributes (this defined global attributes)
    this.processor = processor; // global attributes is created and local attributes's processor value is assgin to this.processor global attributes (this defined global attributes)
  }

  display() {
    // A method is created with name display (show the values of parameters)
    document.writeln("<br> Name:", this.name); // the name attribute is printed
    document.writeln("<br> Price:", this.price);// the price attribute is printed
    document.writeln("<br> Processor:", this.processor); // the processor attribute is printed
  }
}

const laptop = new Laptop("Mac air 2", "80k", "M2"); // an object is created with name laptop to access the class and values are assign in it,
laptop.display(); // display method is called to show the result
