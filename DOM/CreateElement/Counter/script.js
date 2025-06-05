const counter = document.querySelector("#counter");
const btn = document.querySelector("#btn");
let count = 0;

btn.addEventListener("click", () => {
  count++;
  const span = document.createElement("span");
  span.textContent=count;
  counter.appendChild(span)
});
