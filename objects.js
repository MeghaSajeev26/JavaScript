// create an employeeobject with eid:1000, ename : ram , design : "developer" , salary : 30000

var employee={
    eid:1000,ename:"ajay",designation:"developer",salary:30000
}

//print employee name
console.log(employee.ename);

//print employee designation
console.log(employee.designation);

//updating salary as 4000
employee["salary"]=40000;
console.log(employee);

//adding 5000 to salary --- 
employee["salary"]+=5000;
console.log(employee);

//checking for gender key is present if not add gender as male

//word count pblm
//ABABC first recursive character