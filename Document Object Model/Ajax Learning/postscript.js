function displayPosts(posts){
    let htmldata=""
    for(let post of posts){
    htmldata+=`
    <tr>
    <th scope="row">${post.userId}</th>
    <td>${post.id}</td>
    <td>${post.title}</td>
    <td>${post.body}</td>
  </tr>`
    }
    document.querySelector("#postdata").innerHTML=htmldata
}

var request=new XMLHttpRequest()
request.open("get","https://jsonplaceholder.typicode.com/posts")
request.send()
request.onreadystatechange=()=>{
    if(request.readyState==4){
        if(request.status>199 & request.status<300){
            let posts=JSON.parse(request.responseText)
            console.log(posts);
            displayPosts(posts)
        }
        else{
            console.log("Failed");
        }
    }
}