// Create a class representing a `Book` with attributes
// like `title`, `author`, and `publishedYear`.
// Demonstrate the instantiation of objects using array and accessing their attributes.

class Book { // class is created with name books
  constructor(title, author, publishedYear) { // a private method is created with details of book
    this.title = title; // a local attribute is assign to global attribute
    this.author = author; // a local attribute is assign to global attribute
    this.publishedYear = publishedYear; // a local attribute is assign to global attribute
  }
  displayresult() { // a methos is created to display the result
    document.writeln(`<br>Title name : ${this.title}`); //printed title of book
    document.writeln(`<br> Author name : ${this.author}`); //printed author of book
    document.writeln(`<br> Publish year: ${this.publishedYear}`); //printed publish year of book
  }
}

const bookdetails = [ // an array object is created to store multiple details
  new Book("The Very Hungry Caterpillar", "Eric Carle", 1969),
  new Book("Charlotte's Web", "E. B. White", 1952),
  new Book("Diary of a Wimpy Kid", "Jeff Kinney", 2007),
];

bookdetails.forEach((books) => { // using for each we can get all details 
  books.displayresult(); // method is called to display the result
});
