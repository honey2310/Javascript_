// 1. wap to get input count from user and play counter Till That number.

const preview = document.getElementById("preview");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let inputValue = parseInt(input.value);
  console.log(inputValue);

  if (isNaN(inputValue) || inputValue <= 0) {
    preview.textContent = "Please enter number";
  }

  let counter=1;
  preview.textContent=counter

  const count=setInterval(()=>{
    counter++;
    preview.textContent=counter

    if(counter==inputValue){
        clearInterval(count)
    }
  },1000)
});
