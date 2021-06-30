function createTodo(){
    let username=uname.value;
    let task_name=task.value;
    let completed_status=com_status.value;
    let todos={
        username,
        task_name,
        completed_status,
    }
    localStorage.setItem(username,JSON.stringify(todos))
    alert("List created")
}

function displayList(items){
    let html_data=`<div class="card" style="width: 18rem;">
    <div class="card-header">List items</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${items.username}</li>
      <li class="list-group-item">${items.task_name}</li>
      <li class="list-group-item">${items.completed_status}</li>
    </ul>
  </div>`
  result.innerHTML=html_data
}

function findList(){
    let username=search.value;
    let task=JSON.parse(localStorage.getItem(username))
    if(task){
        displayList(task)
    }
    else{
        console.log("Not found");
    }
}

function allTodos(){
    let list_items=[];
    for(let i=0;i<localStorage.length;i++){
        list_items.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
    let html_data=""
    for( items of list_items){
        html_data+=`<div class="card" style="width: 18rem;">
        <div class="card-header">List items</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${items.username}</li>
          <li class="list-group-item">${items.task_name}</li>
          <li class="list-group-item">${items.completed_status}</li>
        </ul>
      </div>`
    }
    result.innerHTML=html_data
}
