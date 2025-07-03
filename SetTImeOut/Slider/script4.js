const img = document.getElementById("img");
const next = document.getElementById("Next");
const prev = document.getElementById("Previous");
const auto = document.getElementById("Autoplay");
const stop = document.getElementById("Stopauto");

let arrImg = [
  "https://plus.unsplash.com/premium_photo-1674583546207-3a7a9c98baa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1749729162821-22eb253b6638?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1709310749319-6a0922524ebd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1732538263855-f683642f0799?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1748499429963-85c58cb2b95e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
];

let currIndex = 0;
let id;

function Images(index) {
  img.src = arrImg[index];
}

Images(currIndex);

function NextImg() {
  if (currIndex < arrImg.length - 1) {
    currIndex++;
    Images(currIndex);
  } else {
    currIndex = 0;
    Images(currIndex);
  }
}

next.addEventListener("click", () => {
  NextImg();
});

function PrevImg() {
  if (currIndex > 0) {
    // 4>4
    currIndex--;
    Images(currIndex);
  }
}

prev.addEventListener("click", () => {
  PrevImg();
});

function AutoPlay() {
 id= setInterval(() => {
    if (currIndex < arrImg.length - 1) {
      currIndex++;
      Images(currIndex);
    } else {
      currIndex = 0;
      Images(currIndex);
    }
  },1000);
}

auto.addEventListener('click',()=>{
    AutoPlay()
})

function StopPlay(){
   clearInterval(id)
}

stop.addEventListener('click',()=>{
    StopPlay()
})
