
// create a class for Student with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.


class Student{
     name;
     gender;
     age;
     std;
     ph_no;


     display(name,gender,age,std,ph_no){
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.std=std;
        this.ph_no=ph_no;
     }
}

const het=new Student();
het.display("Het", "Boy", 17, "11th",9903562725)
console.log(het);

const mita=new Student();
mita.display("Mita", "Girl", 18, "12th",9922572725)
console.log(mita);

const piyush=new Student();
piyush.display("Piyush", "Boy", 16, "10th",9903562125)

console.log(piyush);