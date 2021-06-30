var expenses=[10000,15000,20000,"340000"]

//expenses in march
console.log(expenses[2]);

expenses[1]=24000 
//updation

for(let i=0;i<expenses.length;i++){
    console.log(expenses[i]);
}
//iteration

for(let expen of expenses){
    console.log(expen);
}
expenses.push(340000);
//adding new element

expenses.pop();
//removes last element
//in between elements cannot be removed ,can only be updated