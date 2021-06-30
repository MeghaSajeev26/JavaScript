// keyword for inheriting-- extends

class Parent{
    mobile(){
        console.log("inherited from parent");
    }
}
class Child extends Parent{

}
var child=new Child();
child.mobile()

//Multi level
class Parent{
    mobile(){
        console.log("inherited from parent");
    }
}
class Parent2 extends Parent{
    m2(){
        console.log("inside parent2");
    }
}
class Child extends Parent{

}
var child=new Child();
child.mobile()
child.m2()

//JS doesnt support multiple inheritence