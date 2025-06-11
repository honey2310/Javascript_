// create a class for Car with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.

class Car {
  name;
  seater;
  type;
  price;
  company;

  display(name, seater, type, price, company) {
    this.name = name;
    this.seater = seater;
    this.type = type;
    this.price = price;
    this.company = company;
  }
}

const Innova_Crysta = new Car()
Innova_Crysta.display("Innova Crysta", "7 Seater", "Diesel", "₹19lakh","Toyota")
console.log(Innova_Crysta)

const Verna = new Car()
Verna.display("Verna", "5 Seater", "Petrol", "₹11lakh","Hyundai")
console.log(Verna)

const EV6= new Car()
EV6.display("EV6", "5 Seater", "Electric", "₹60lakh","Kia")
console.log(EV6)

