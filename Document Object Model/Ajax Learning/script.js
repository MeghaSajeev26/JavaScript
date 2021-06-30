function displayValues(users){
    let html_data=""
    for(let user of users){
        html_data+=`<tbody>
        <tr>
          <th scope="row">${user.username}</th>
          <td>${user.email}</td>
          <td>${user.id}</td>
          <td>${user.phone}</td>
          <td>${user.website}</td>
        </tr>`
    }
    document.querySelector("#display").innerHTML=html_data
}
//Step 1 -
    // Create XML-Http-Request
// class Person{

// }
// var obj=new Person()

var request=new XMLHttpRequest();

//Step 2
    //call open() method,
    //this method takes 2 parameters 
    //---1.method -- and 2.url
request.open("get","https://jsonplaceholder.typicode.com/users")

//Step3
    //send XMLHttpRequest object using send() 
request.send()

//to monitor sending request
request.onreadystatechange=()=>{     //value of readyState is changed
    if(request.readyState==4){      //check task is completed or not
        if(request.status>199 & request.status<300){   //check the status code=success
            let users=JSON.parse(request.responseText)  //get the response from responseText
            console.log(users);
            displayValues(users)
        }
        else{
            console.log("Failed")
        }
    }
}
//client sends a request to the server 

//check any response is given back by the server---
        //--using readyState value of request object
        //readyState = 1 -- no request send--task not completed
        //readyState = 4 -- request is send(client) and 
                             //--response is given(server)
                      //-- task is complete
               



