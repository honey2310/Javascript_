// Create a class representing a `Movie` with attributes
// like `title`, `genre`, and `releasedYear`.
//  Demonstrate the instantiation of objects using array and accessing their attributes

class Movie { // a movie class is created
  title;// a attribute is assign to store title of movies
  genre;// a attribute is assign to store genre of movies
  releasedYear; // a attribute is assign to store release year of movies
  setValues(title, genre, releasedYear) { // set values method is created to access the values or details of movies 
    this.title = title; //a local attribute is assign to global attribute
    this.genre = genre; //a local attribute is assign to global attribute
    this.releasedYear = releasedYear; // a local attribute is assign to global attribute
  }

  display() { // method is created to display the details of movies
    document.writeln("<br> Movie Title: " + this.title); //printed title of movie
    document.writeln("<br> Movie Genre: " + this.genre);//printed genre of movie
    document.writeln("<br> Released Year: " + this.releasedYear); //printed release year of movie
    document.writeln("<hr>"); // print horizontal lines
  }
}


const movie1 = new Movie(); // created 1st object to access the class movie
movie1.setValues("Inception", "Action", 2010); // set 1st movies values

const movie2 = new Movie();// created 2nd object to access the class movie
movie2.setValues("The Lion King", "Drama", 1994); // set 2nd movies values

const movie3 = new Movie(); // created 3rd object to access the class movie
movie3.setValues("RRR", "Historical", 2022);// set 3rd movies values

// Store in array
const movies = [movie1, movie2, movie3];

// Display all movie details
for (let i = 0; i < movies.length; i++) {
  movies[i].display();
}
