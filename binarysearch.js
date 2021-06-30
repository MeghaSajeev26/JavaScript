//Binary search using javascript

let arr=[2,33,5,11,67,8];
arr.sort((i,j)=>i-j)
var low=0,upp=arr.length-1,flag=0;
var element=33;

while(low<upp){
	let mid=Math.floor((low+upp/2));
        if(element>arr[mid]){
			low=mid+1;
		}
        else if(element<arr[mid]){
			upp=mid-1;
		} 
        else if (element==arr[mid]){
			console.log("element");
			flag++
			break
		}
	}
	if(flag==0){
		console.log("element found");
	}
	else{
		console.log("not found");
	}