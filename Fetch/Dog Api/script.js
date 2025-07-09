const image = document.getElementById("image");
const btn = document.getElementById("btn");


function dogApi(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      image.src = data.message;
    });
}
btn.addEventListener("click", () => {
   dogApi()
});

dogApi();
