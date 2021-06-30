var arr=[1,2,3,4]
var element=5;

var low=0,upp=arr.length-1;
//lenght--to the last element

while(low<=upp){
    let sum=arr[low]+arr[upp];
    if(element==sum){
        console.log(arr[low],arr[upp]);
        break;
    }
    else if(element>sum){
        low++;
    }
    else if(element<sum){
        upp--;
    }
}


//binary search
//find gcd (14,63)
//common elemnts
//revise dictionary