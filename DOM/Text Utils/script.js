// text utils

const InputText = document.getElementById("Inputtext");
const AddText = document.getElementById("AddText");
const preview = document.getElementById("preview");
const upcase = document.getElementById("uppercase");
const lowcase = document.getElementById("lowercase");
const clearbtn = document.getElementById("clearbtn");
const words = document.getElementById("words");
const char = document.getElementById("char");

AddText.addEventListener("click", () => {
  let newtext = InputText.value;
  preview.textContent = newtext;
  let charcount = newtext.length;
  let wordscount = newtext
    .trim()
    .split(" ")
    .filter((word) => word !== "").length;

  char.textContent = "Total character: " + charcount;
  words.textContent = "Total words: " + wordscount;

});

upcase.addEventListener("click", () => {
  preview.textContent = InputText.value.toUpperCase();
});

lowcase.addEventListener("click", () => {
  preview.textContent = InputText.value.toLowerCase();
});

clearbtn.addEventListener("click", () => {
  InputText.value = "";
  preview.textContent = "";
  words.textContent="";
  char.textContent="";
});
