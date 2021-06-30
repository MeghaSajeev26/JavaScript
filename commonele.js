//common elements from an array

// var arr1=[10,20,30,40];
// var arr2=[20,21,22,30];
// for(let num1 of arr1){
//     for(let num2 of arr2){
//         if(num1==num2){
//             console.log(num1);
//         }

//     }
// }
//complexity is high -- iteration increases as elements increases

var arr1=[10,20,30,40];
var arr2=[20,21,22,30];
var i=0,j=0;

while(i<arr1.lenght & j<arr2.length){
    if(arr1[i]==arr2[j]){
        console.log(arr1[i]);
        i++
        j++
    }
    else if(arr1[i]<arr2[j]){
        i++
    }
    else{
        j++
    }
}
