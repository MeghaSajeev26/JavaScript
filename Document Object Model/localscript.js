// to set item---key,value
// localStorage.setItem("username","Luminar")
// localStorage.setItem("password","********")

// //to fetch value
// var unmae=localStorage.getItem("username")
// console.log(unmae);

// var pswrd=localStorage.getItem("password")
// console.log(pswrd);

// // to remove item
// localStorage.removeItem("username")
// localStorage.removeItem("password")

// //to clear everything
// // localStorage.clear()

// localStorage.setItem("bookname","alchemist")

// //to access using index
// console.log(localStorage.key(0));
// returns bookname

// var book={
//     book_name:"The Alchemist",
//     author:"Paulo Coelho",
//     price:350,
//     pages:200
// }
// localStorage.setItem(book.book_name,JSON.stringify(book))
// //book_name--id JSON -- to be converted format (string)

// var book={
//     book_name:"The Winner Stands Alone",
//     author:"Paulo Coelho",
//     price:250,
//     pages:250
// }
// localStorage.setItem(book.book_name,JSON.stringify(book))

// //print price of alchemist
// var data=JSON.parse( localStorage.getItem("The Alchemist"))
// //to ocnvert back into object from JSON string
// console.log(data.price).

var user={
    username:"luminar",
    email:"luminar@gmail.com",
    password:"abc123"
}

var user1={
    username:"technolab",
    email:"technolab@gmail.com",
    password:"test123"
}

// localStorage.setItem(user.username,JSON.stringify(user))
// localStorage.setItem(user1.username,JSON.stringify(user1))

var uname="luminar";
var pwd="abc123"

var user=JSON.parse(localStorage.getItem("luminar"))
if(user.username==uname & user.password==pwd){
    console.log("Login success");
}
else{
    console.log("Login failed");
}






