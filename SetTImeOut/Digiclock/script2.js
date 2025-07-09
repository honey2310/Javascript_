// 2. create a web page to display current date and Time
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

function show() {
  const dateshow = new Date();
  console.log(dateshow);
  let hourtime = dateshow.getHours();
  let minTime=dateshow.getMinutes()
  let sectime=dateshow.getSeconds();


  let arrdays =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let arrmonths=["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

  let day=arrdays[dateshow.getDay()];
  let date=dateshow.getDate()
  let month=arrdays[dateshow.getMonth()];

  timeEl.textContent=`${hourtime}:${minTime}:${sectime}`;
  dateEl.textContent=`${day} ${date} ${month}`;
}

setInterval(show,1000)

show();
