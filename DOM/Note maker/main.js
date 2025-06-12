const addBtn = document.getElementById("addBtn");
const newNoteInput = document.getElementById("newNote");
const noteList = document.getElementById("noteList");

let arrnotes = [];

function displaynotes() {
  noteList.innerHTML = "";

  arrnotes.forEach((notes, index) => {
    const noteCard = document.createElement("div");
    noteCard.className = "card note p-3 mb-3 shadow";

    const textarea = document.createElement("textarea");
    textarea.className = "form-control border-0";
    textarea.rows = 3;
    textarea.value = notes;
    textarea.readOnly = true;

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning mt-2 me-2";
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger mt-2 me-2";
    deleteBtn.textContent = "Delete";

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    noteCard.appendChild(textarea);
    noteCard.appendChild(actions);
    noteList.appendChild(noteCard);

    newNoteInput.value = "";

    editBtn.addEventListener("click", () => {
      if (textarea.readOnly) {
        textarea.readOnly = false;
        editBtn.textContent = "Save";
        editBtn.classList.remove("btn-warning");
        editBtn.classList.add("btn-success");
      } else {
        textarea.readOnly = true;
        arrnotes[index] = textarea.value;
        editBtn.textContent = "Edit";
        editBtn.classList.remove("btn-success");
        editBtn.classList.add("btn-warning");
      }
    });
    deleteBtn.addEventListener("click", () => {
      delbtn(index);
    });
  });
}

addBtn.addEventListener("click", () => {
  const noteText = newNoteInput.value;
  arrnotes.push(noteText);
  displaynotes();
});

function delbtn(index) {
  arrnotes.splice(index, 1);
  displaynotes();
}
