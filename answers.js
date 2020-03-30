let q;
let a;

function answer() {
  q = document.querySelector("input").value;

  switch (q) {
    case "what is your name":
      a = "my name is zoe";
      break;
    case "how old are you":
      a = "no idea...ask my maker";
      break;
    default:
      a = "don't know about that yet :( will ask my maker to teach me ";
      break;
  }
  (document.querySelector("label").innerHTML = "processing.."),
    setTimeout(() => {
      document.querySelector("label").innerHTML = a;
    }, 2000);
}

function style() {
  document.querySelector("p").innerHTML = "changed";
}
