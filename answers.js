let q;
let a;
let timing;
let key;
let time;
let movie;
let joke1;
let clockInterval;
let firstInterval;
let secondInterval;
let thirdInterval;
let year = new Date().getFullYear();
let day = new Date().getDay();
let month = new Date().getMonth();
let date = new Date().getDate();
let hey;
let index = Math.floor(Math.random() * 10);
let number = 0;
let randomNumber;
let space = " ";
let age = 7;
// let age = 7; //days
// let currentAge;

// let randomNumber;

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
let jad = new Audio(
  "Nancy Ajram - Ma Tegi Hena - Official Video Clip  نانسي عجرم - فيديو كليب ما تيجي هنا-[AudioTrimmer.com].mp3"
);
let corona = new Audio("VID-20200318-WA0062(mp3)-[AudioTrimmer.com] (1).mp3");
function film() {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((data) => {
      randomNumber = Math.floor(Math.random() * 10);
      document.getElementById("api").innerHTML = data[randomNumber].title;
    });
}

fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json())
  .then((data) => {
    joke1 = `${data.setup}` + `${data.punchline}`;
  });

function increment() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      randomNumber = Math.floor(Math.random() * 10);
      // console.log(randomNumber);
      document.getElementById("api").innerHTML = data[randomNumber].title;
    });
}
function harry() {
  fetch("spells.txt")
    .then((response) => response.json())
    .then((data) => {
      randomNumber = Math.floor(Math.random() * 10);
      document.getElementById("api").innerHTML =
        data[randomNumber].name +
        ":" +
        space +
        data[randomNumber].effect +
        space +
        "counter-spell:" +
        space +
        data[randomNumber].counter;
    });
}

let countdowner = document.getElementById("cd");
countdowner.className = "hide";
let calculator = document.getElementById("calculator");
calculator.className = "hide";
let pensiero = document.getElementById("container");
let clock = document.getElementById("clock");
clock.className = "hide";
let api = document.getElementById("api");
let title = document.getElementById("title");

title.innerHTML = "Hi! i'm Zoe";
clockInterval = setInterval(() => {
  let ora = new Date();
  document.getElementById("clock").innerHTML =
    ("0" + ora.getHours()).slice(-2) +
    ":" +
    ("0" + ora.getMinutes()).slice(-2) +
    ":" +
    ("0" + ora.getSeconds()).slice(-2);
}, 1000);

function result() {
  document.getElementById("result").innerHTML = "..";
  reaction(500);
  setTimeout(() => {
    let num1 = Number(document.getElementById("num1").value);
    let sign = document.getElementById("sign").value;
    let num2 = Number(document.getElementById("num2").value);
    switch (sign) {
      case "+":
        key = num1 + num2;
        break;
      case "-":
        key = num1 - num2;
        break;
      case "*":
        key = num1 * num2;
        break;
      case "/":
        key = num1 / num2;
        break;
    }
    document.getElementById("result").innerHTML = key;
  }, 500);
}
function reaction(seconds) {
  tongue.className = "";
  mouth.className = "mouth-closed";
  rightEye.className = "right-eye-closed";
  leftEye.className = "left-eye-closed";
  white.className = "";

  setTimeout(() => {
    leftEye.className = "left-eye";
    rightEye.className = "right-eye";
    white2.className = "white";
    white.className = "white";
    mouth.className = "mouth";
    tongue.className = "tongue";
  }, seconds);
}

function start() {
  let secs = parseInt(document.getElementById("seconds").value);
  let mins = parseInt(document.getElementById("minutes").value);

  if (secs > 0 && mins === 0) {
    firstInterval = setInterval(() => {
      document.getElementById("here").innerHTML =
        "00" + ":" + ("0" + secs--).slice(-2);
      if (secs < 0) {
        clearInterval(firstInterval);
        document.getElementById("here").innerHTML = "Attention!";
      }
    }, 1000);
  }

  if (mins > 0 && secs === 0) {
    secs = 59;
    mins = mins - 1;
    secondInterval = setInterval(() => {
      document.getElementById("here").innerHTML =
        ("0" + mins).slice(-2) + ":" + ("0" + secs--).slice(-2);
      if (mins != 0 && secs === 0) {
        mins = mins - 1;
        secs = 59;
        document.getElementById("here").innerHTML =
          ("0" + mins).slice(-2) + ":" + ("0" + secs--).slice(-2);
      } else if (mins === 0 && secs === 0) {
        clearInterval(secondInterval);
        document.getElementById("here").innerHTML = "time's up";
      }
    }, 1000);
  } else if (mins != 0 && secs != 0) {
    thirdInterval = setInterval(() => {
      document.getElementById("here").innerHTML =
        ("0" + mins).slice(-2) + ":" + ("0" + secs--).slice(-2);
      if (secs === -2 && mins != 0) {
        mins = mins - 1;
        secs = 59;
        document.getElementById("here").innerHTML =
          ("0" + mins).slice(-2) + ":" + ("0" + secs--).slice(-2);
      } else if (mins === 0 && secs === 0) {
        clearInterval(thirdInterval);
        document.getElementById("here").innerHTML = "time's up";
      }
    }, 1000);
  }
}
function stop() {
  clearInterval(secondInterval);
  clearInterval(firstInterval);
  clearInterval(thirdInterval);
}
function reset() {
  document.getElementById("here").innerHTML = "";
  document.getElementById("seconds").innerHTML = " ";
  document.getElementById("here").innerHTML = "00" + ":" + "00";
}

function answer() {
  clock.className = "hide";
  api.className = "hide";
  countdowner.className = "hide";
  pensiero.className = "pensiero";
  calculator.className = "hide";
  q = document.querySelector("input").value;
  if (q.length <= 15) {
    timing = 500;
  } else if (q.length > 15 && q.length < 20) {
    timing = 2000;
  } else if (q.length > 15) {
    timing = 2000;
  }

  reaction(timing);

  switch (q) {
    case "what is your name":
      a = "my name is zoe";
      break;
    case "how old are you":
      setInterval(() => {
        age++;
      }, 60000);
      a = age;
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
      setTimeout(() => {
        clock.className = "show";
        showClock();
      }, timing);
      a = "its";
      break;
    case "give me a movie":
      api.className = "show";
      setTimeout(() => {
        film();
        a = " ";
      }, timing);
      break;
    case "give me a title":
      api.className = "show";
      setTimeout(() => {
        increment();
      }, timing);
      a = " ";
      break;
    case "tell me a joke":
      a = joke1;
      break;
    case "give me a magic spell":
      api.className = "show";
      setTimeout(() => {
        harry();
        pensiero.className = "big";
      }, timing);
      a = " ";
      break;
    case "play jad's favourit song":
      setTimeout(() => {
        jad.play();
      }, 2000);
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
    case "give me a calculator":
      setTimeout(() => {
        calculator.className = "show";
      }, timing);
      a = "here you go";
      break;
    case "give me a countdowner":
      setTimeout(() => {
        countdowner.className = "show";
        pensiero.className = "big";
      }, timing);
      a = "here you go";
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
