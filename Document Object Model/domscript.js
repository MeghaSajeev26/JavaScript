// var current_url=document.URL;
// console.log(current_url);
// alert(current_url)

// // document--object URL--attribute

// var htwos=document.getElementsByTagName("h2");

// for(let tag of htwos){
//     tag.style.color="green";
// }

// var h_one=document.getElementById("one");
// htwo.style.color="red";

// var items=document.getElementsByTagName("li");
// for(let tag of items){
//     tag.style.color="blue";
// }

// var elements=document.getElementsByClassName("second");
// for(let tag of elements){
//     tag.style.color="cyan";
// }

var litems=document.querySelectorAll("li")
for(let tag of litems){
    tag.style.color="blue"
}

var htwo=document.querySelector("#one")
htwo.style.color="purple"

var query=document.querySelectorAll(".third");
for(let tag of query){
    tag.style.color="red";
}

var meth=document.querySelector("#method")
meth.innerHTML="<em>Document Object Model Methods</em>"
// to change the text using js
// if you want to change only the text--use textContent 
// to change the style of text use-- innerHTML

