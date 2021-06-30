//assign a value to var num---- if 2--square, 3--cube
//'' '' '' to var low=8
//''' '' to var upp=25

//1,2,3,4,....25
//1**1=1
//2**2=4
//3**2=9 -- print (with in range)
// 4,,5--print squares

var num=2,low=16,upp=64;
for(let i=1;i<=upp;i++){
    let res=i**num;
    if(res>=low & res<=upp){
        console.log(res);
    }
}

