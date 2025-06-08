const input = document.querySelector("#input");
const btn = document.querySelector("#button");
const output = document.querySelector(".output");
let arrTodo = [];

function displayTodo() {
  output.innerHTML = "";
  arrTodo.forEach((todo, index) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const delbtn = document.createElement("button");

    div.className = "d-flex justify-content-between align-items-center todo-item";
    delbtn.className = "btn btn-danger";

    p.textContent = todo;
    p.className = "mb-0";

    delbtn.textContent = "Delete";

    div.appendChild(p);
    div.appendChild(delbtn);
    output.appendChild(div);
  });

  input.value = "";
}

btn.addEventListener("click", () => {
  const inputValue = input.value;
    arrTodo.push(inputValue);
    displayTodo();
});
