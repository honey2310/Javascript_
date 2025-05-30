
const sumbit = document.getElementById("sumbit-btn");
const copy = document.getElementById("copy")

sumbit.addEventListener("click", () => {
  //document.body.style.backgroundColor = "#FFC8FF";

  let random_digit = Math.random() * 16777216;
  let random = Math.floor(random_digit);
  let color = "#" + random.toString(16);
  sumbit.textContent=color;
  document.body.style.backgroundColor =color;
});

copy.addEventListener('click',()=>{
    let color_code = sumbit.textContent;
    navigator.clipboard.writeText(color_code);
    alert("copied" + color_code);
})

//#81ffe7



