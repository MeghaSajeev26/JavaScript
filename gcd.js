var num1=14,num2=63;
//7
varlow=0;
if(num1<num2){
    low=num1;
}
else{
    low=num2;
}
var factor=0;
for(let i=2;i<=14;i++){
    if(num1%i==0 & num2%i==0){    //14%3==0 & 63%3==0
        factor=i;
    }
}
console.log("GCD "+factor);