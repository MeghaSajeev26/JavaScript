//read value for age , health issue , if age> 65 --print eligible for vaccination 
// if age in range of 18 and 65 and health issues = true  --eligible 
//else --not eligible

var age = 60;
var health_issue=false;
if(age>=65){
    console.log("eligible")
}
else if(18<=age & age>=65 & health_issue){
    console.log("eligible")
}
else{
    console.log("not eligible")
}