//method overloading
//----same method name diff no.of parameters
//recently implemented method is only executed

class Calc{
    add(){
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside one args method");
    }
    add(num1,num2){
        console.log("inside two args method");
    }
}
var obj=new Calc();
obj.add()
obj.add(4)
obj.add(7,8)  //3 times call recently implemented method


//method overriding ---over rides the existing method by newly created method
class Parent3{
    phone(){
        console.log("inside parent3");
    }
}
class Child1 extends Parent3{
    phone(){
        super.phone()
        //super --refers parent --if we need to have parent method working first , preceeding child method
        console.log("inside child1");
    }
}
var obj=new Child1()
obj.phone()