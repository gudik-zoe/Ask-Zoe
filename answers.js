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
  }
  document.querySelector("label").innerHTML = a;
}

function style() {
  document.querySelector("p").innerHTML = "changed";
}
