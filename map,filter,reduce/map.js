var arr=[2,3,4,5,6];

//MAP
function square(num){
    return num**2
}
var res=arr.map(square)
console.log(res);

//arrow function
var res=arr.map(num=>num**2)
console.log(res);

//FILTER
var evens=arr.filter(num=>num%2==0)
console.log(evens);

//filter num>5
var greater=arr.filter(num=>num>5)
console.log(greater);

//REDUCE
//highest value
var maxele=arr.reduce((num1,num2)=>num1>num2?num1:num2)  //reduce always has 2 parameters
console.log(maxele);

//sum of array
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

//SORT
var sorted=arr.sort((num1,num2)=>num1-num2)  //ascending order --- num2-num1--descending order
console.log(sorted);