// Define a class named Rectangle with private attributes length and width.
//  Implement public member functions to set and get the values of these attributes.
// Include a method to calculate the area of the rectangle.
// Create an object of the Rectangle class and
//  demonstrate the functionality of the implemented methods.

class Rectangle {
  // a rectangle class is created
  #length; // a private attribute is assign to store length of rectangle
  #width; // a private attribute is assign to store width of rectangle

  setvalues(length, width) {
    // a method set value is created to set values of length and width of rectangle
    this.#length = length; // a local attribute is assign to global attribute
    this.#width = width; // a local attribute is assign to global attribute
  }

  getvalues() { // get values method is created to display the values of length and width
    document.writeln("<br> Length :" + this.#length); //printed length of rectangle
    document.writeln("<br> Width :" + this.#width); // printed width of rectangle
  }

  calculateArea() { // calculate area method is use to calculate area of rectangle
    document.writeln("<br>Area of Rectangle is " + this.#length * this.#width); // area of rectangle is calculated
  }
}

const rectangle = new Rectangle(); // class is access to object with rectangle name

rectangle.setvalues(2, 4); // set values is called and value is assign to it
rectangle.getvalues(); // get values is called to display the values
rectangle.calculateArea(); // calculate the area of rectangle
