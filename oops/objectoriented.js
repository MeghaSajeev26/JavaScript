//person //setPerson(age,name)  printPerson()

class Person{
    setValues(age,name){
        this.age=age;
        this.name=name;
    }
    printValues(){
        console.log(this.age,this.name);
    }
}
var obj=new Person()
obj.setValues(23,"Ram")
obj.printValues()

// duty of constructor is to initialise instance variable
// constructr gets called when obj is created
//using constructor
class Person{
    constructor(age,name){
        //constructor.log(args);
        this.age=age;
        this.name=name;
    }
    printValues(){
        console.log(this.age,this.name);
    }
}
var obj=new Person(25,"Ram")
obj.printValues()