let q;
let a;
let timing;
// let currentTime = setInterval(() => {
//   let datee = new Date();
//   datee.getHours() + ":" + datee.getMinutes() + ":" + datee.getSeconds();
// }, 1000);

let date = new Date();
let day = date.getDay();
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

function answer() {
  q = document.querySelector("input").value;

  let rightEye = document.getElementById("rightEye");

  let white = document.getElementById("white");
  let white2 = document.getElementById("white2");
  let leftEye = document.getElementById("leftEye");
  let mouth = document.getElementById("mouth");
  let tongue = document.getElementById("tongue");
  tongue.className = "";
  mouth.className = "mouth-closed";
  rightEye.className = "right-eye-closed";
  leftEye.className = "left-eye-closed";
  white.className = "";

  // console.log(q.length);
  if (q.length < 15) {
    timing = 100;
  } else if (q.length > 15 && q.length < 20) {
    timing = 1000;
  } else if (q.length > 15) {
    timing = 3000;
  }
  setTimeout(() => {
    leftEye.className = "left-eye";
    rightEye.className = "right-eye";
    white2.className = "white";
    white.className = "white";
    mouth.className = "mouth";
    tongue.className = "tongue";
  }, timing);

  switch (day) {
    case (day = 1):
      day = "Monday";
      break;
    case (day = 2):
      day = "Tuesday";
      break;
    case (day = 3):
      day = "wednesday";
      break;
    case (day = 4):
      day = "Thursday";
      break;
    case (day = 5):
      day = "Friday";
      break;
    case (day = 6):
      day = "Saturday";
      break;
    case (day = 7):
      day = "Sunday";
      break;
  }

  switch (q) {
    case "what is your name":
      a = "my name is zoe";
      break;
    case "how old are you":
      a = "no idea...ask my maker";
      break;
    case "what day is today":
      a =
        day +
        " " +
        date.getDate() +
        "/" +
        date.getMonth() +
        "/" +
        date.getFullYear();
      break;
    case "what time is it":
      a = time;
      break;
    default:
      a = "don't know about that yet :( will ask my maker to teach me ";
      break;
  }

  (document.querySelector("label").innerHTML = "processing.."),
    setTimeout(() => {
      document.querySelector("label").innerHTML = a;
    }, timing);
}
// let a = new Date();
// let b = setInterval(() => {
//   console.log(a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());
// }, 1000);
// console.log(b);
