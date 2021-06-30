function createBook(){
    let book_name=b_name.value;
    let author=b_author.value;
    let page=pages.value;
    let amount=price.value;
    let book={
        book_name,
        author,page,amount
    }
    localStorage.setItem(book_name,JSON.stringify(book))
alert("Book Created")
}

function displayBook(book){
    let html_data=`<div class="card" style="width: 18rem;">
    <div class="card-header">${book.book_name}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${book.author}</li>
      <li class="list-group-item">${book.page}</li>
      <li class="list-group-item">${book.price}</li>
    </ul>
  </div>`
  document.querySelector("#result").innerHTML=html_data
  //(or) result.innerHTML=html_data
}

function findBook(){
    let book_name=bk_name.value;
    let book=JSON.parse(localStorage.getItem(book_name))
    if(book){
        displayBook(book)
    }
    else{
        console.log("book not found");
    }
}

function allBooks(){
    let books=[];
    for(let i=0;i<localStorage.length;i++){
        books.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    let html_data=""
    for(let book of books){
        html_data+=`<div class="card" style="width: 18rem;">
        <div class="card-header">${book.book_name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${book.author}</li>
          <li class="list-group-item">${book.page}</li>
          <li class="list-group-item">${book.price}</li>
        </ul>
      </div>`
    }
    result.innerHTML=html_data
}