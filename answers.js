let q;
let a;
let timing;

let movie;

let jad = new Audio(
  "Nancy Ajram - Ma Tegi Hena - Official Video Clip  نانسي عجرم - فيديو كليب ما تيجي هنا-[AudioTrimmer.com].mp3"
);
let corona = new Audio("VID-20200318-WA0062(mp3)-[AudioTrimmer.com] (1).mp3");

let time;
setInterval(() => {
  let ora = new Date();
  time =
    ("0" + ora.getHours()).slice(-2) +
    ":" +
    ("0" + ora.getMinutes()).slice(-2) +
    ":" +
    ("0" + ora.getSeconds()).slice(-2);
}, 1000);
//random movie
let request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function() {
  let data = JSON.parse(this.response);
  let index = Math.floor(Math.random() * 10);
  if (request.status >= 200 && request.status < 400) {
    data[index];
    // forEach(movie => {
    //   film = movie.title;
    // });
    console.log(data[index].title);
    movie = data[index].title;
  } else {
    console.log("error");
  }
};
request.send();
//random joke
let joke1;
let joke2;

fetch("https://official-joke-api.appspot.com/random_joke")
  .then(response => response.json())
  .then(data => {
    joke1 = `${data.setup}` + `${data.punchline}`;
  });

// fetch("http://example.com/movies.json")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     movie = data;
//   });

// setTimeout(() => {
//   a = joke1;
// }, 2000);

// function manimu() {
//   let input1 = document.createElement("input");
//   document.body.appendChild(input1);
//   input1.className = "input";
//   let input2 = document.createElement("input");
//   document.body.appendChild(input2);
//   input2.className = "input";
//   let input3 = document.createElement("input");
//   document.body.appendChild(input3);
//   input3.className = "input";
//   let input4 = document.createElement("p");
//   element.insertBefore("hey");
//   input4.className = "para";
// }

function answer() {
  index = Math.ceil(Math.random() * 10);
  let year = new Date().getFullYear();
  let day = new Date().getDay();
  let month = new Date().getMonth();
  let date = new Date().getDate();
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

  if (q.length < 15) {
    timing = 500;
  } else if (q.length > 15 && q.length < 20) {
    timing = 2000;
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
    case (day = 0):
      day = "Sunday";
      break;
    case (day = 1):
      day = "Monday";
      break;
    case (day = 2):
      day = "Tuesday";
      break;
    case (day = 3):
      day = "Wednesday";
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
  }

  switch (month) {
    case (month = 0):
      month = "01";
      break;
    case (month = 1):
      month = "02";
      break;
    case (month = 2):
      month = "03";
      break;
    case (month = 3):
      month = "04";
      break;
    case (month = 4):
      month = "05";
      break;
    case (month = 5):
      month = "06";
      break;
    case (month = 6):
      month = "07";
      break;
    case (month = 7):
      month = "08";
      break;
    case (month = 8):
      month = "09";
      break;
    case (month = 9):
      month = "10";
      break;
    case (month = 10):
      month = "11";
      break;
    case (month = 11):
      month = "12";
      break;
    default:
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
        ("0" + date).slice(-2) +
        "/" +
        ("0" + month).slice(-2) +
        "/" +
        year;
      break;
    case "what time is it":
      a = "it's" + " " + time;
      break;
    case "give me a movie":
      a = movie;
      break;
    // case "bo":
    //   manimu();
    //   a = "here u go";
    //   break;
    case "tell me a joke":
      a = joke1;
      break;
    case "play jad's favourit song":
      setTimeout(() => {
        jad.play();
      }, 3000);
      a = "here you go";
      break;
    case "stop":
      jad.pause();
      a = "hope u enjoyed it dad";
      break;
    case "give me some news about the corona in syria":
      setTimeout(() => {
        corona.play();
        a = `sounds like they are celebrating dad..cool!!`;
      }, timing);

      break;
    default:
      a = "don't know about that yet :( will ask my maker to teach me ";
      break;
  }

  (document.getElementById("div1").innerHTML = "processing.."),
    setTimeout(() => {
      document.getElementById("div1").innerHTML = a;
    }, timing);
}
// let a = new Date();
// let b = setInterval(() => {
//   console.log(a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());
// }, 1000);
// console.log(b)
