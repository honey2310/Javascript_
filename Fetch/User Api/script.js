const tbody = document.getElementById("tBody");

function todoApi(todos) {
  todos.map((todo, index) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    td1.textContent = todo.userId;
    tr.appendChild(td1);

    td2.textContent = todo.id;
    tr.appendChild(td2);

    td3.textContent = todo.title;
    tr.appendChild(td3);

    td4.textContent = todo.completed;
    tr.appendChild(td4);
    tbody.appendChild(tr);
  });
}

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos)=>{
    todoApi(todos);
  });

todoApi();
