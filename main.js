let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let basem = document.querySelector(".basem");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value * 14 + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  basem.style.fontSize = value + "px";
  if (value >= 65) {
    basem.style.fontSize = 65 + "px";
    basem.style.position = "fixed";
    if (value >= 420) {
      basem.style.display = "none";
    } else {
      basem.style.display = "block";
    }
  }
  if (value >= 110) {
    document.querySelector(".main").style.background =
      "linear-gradient(#5782A1,#10001f)";
  } else {
    document.querySelector(".main").style.background =
      "linear-gradient(#200016, #10001f)";
  }
};
