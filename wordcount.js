// first recursive character in ABBAC

var pattern="ABAC";
var dict={};
for(let char of pattern){
    if(char in dict){  //A (A not in dict)  B  A(present in char)
        console.log("first recursive character is: "+char);  //first recursive is A  (A:2)
    }
    else{
        dict[char]=1;  //A:1 B:1 
    }
}