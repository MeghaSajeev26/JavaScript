var arr1=[10,20,30,40];
var arr2=[20,21,22,30];
var i=0,j=0;

while(i<arr1.lenght & j<arr2.length){
    if(arr1[i]==arr2[j]){
        console.log(arr1[i]);
        i++;
        j++;
    }
    else if(arr1[i]<arr2[j]){
        i++;
    }
    else if(arr1[i]>arr2[j]){
        j++;
    }
}