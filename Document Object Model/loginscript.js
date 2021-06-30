var user={
    username:"luminar",
    password:"abc@123"
}

localStorage.setItem(user.username,JSON.stringify(user))
//after updating once make it as a comment-- else it gets updated every time the page gets refreshed



function login(){
    let u_name=uname.value;
    let pwd=pswd.value;
    let user=JSON.parse(localStorage.getItem(u_name))
    if(user==null){
        alert("Invalid username")
    }
    if (user.username==u_name & user.password==pwd){
        alert("Login successful")
    }
    else{
        alert("invalid password")
    }
}