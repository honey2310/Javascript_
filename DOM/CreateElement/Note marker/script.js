const input = document.querySelector("#note-input");
const btn = document.querySelector("#add-note-btn");
const note = document.querySelector(".note-card");

const notes = document.querySelector(".note");

btn.addEventListener("click", () => {
  const value = input.value;
  const div = document.createElement("div");
  div.textContent = value;
  notes.appendChild(div);
  input.value = "";
});
