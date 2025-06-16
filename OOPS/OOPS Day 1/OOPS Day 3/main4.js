// Module 4 ques 2
// Define a class `Car` with private attributes `model`, `year`, and `speed`. 
// Encapsulate these attributes using appropriate access specifiers. 
// Implement public member functions to set and get the values of these attributes.
// Demonstrate encapsulation by accessing these attributes through the member functions.

class Car{ // class is created with name car
    #model; // a private attritues is created with model name
    #year; // a private attritues is created with year name
    #speed; // a private attritues is created with speed name

    setvalues(model,year,speed){ // a method is created to set the values with different parameters
        this.#model=model; // local attributes value model is assign to global attributes
        this.#year=year; // local attributes value year is assign to global attributes
        this.#speed=speed; // local attributes value speed is assign to global attributes
    }

    getvalues(){ // a method is created to get the values
        document.writeln("Model Name : " + this.#model) // printed the name of model
        document.writeln("<br> Year : " + this.#year) // printed year of car
        document.writeln("<br> Speed : " + this.#speed) // printed speed of car
    }
}

const carvalues=new Car() // an object is created to access the class values
carvalues.setvalues("kia" , "2004", "420km/hr") // set values method is call to set the values of car
carvalues.getvalues() // get values method is call to display the values