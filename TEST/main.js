function hideButton() {
  let item = document.getElementById("btn");
  let hideBg = document.getElementById("bg");
  if (item.style.display == "block") item.style.display = "none", hideBg.style.display = "none";
  else item.style.display = "block";
}

function start(){
const honey = document.getElementById("honey");
const pooh = document.getElementById("pooh");

function jump() {
  if (honey.classList != "jump") {
    honey.classList.add("jump");

    setTimeout(function () {
      honey.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  let honeyTop = parseInt(window.getComputedStyle(honey).getPropertyValue("top"));
  let poohLeft = parseInt(
    window.getComputedStyle(pooh).getPropertyValue("left")
  );
  if (poohLeft < 50 && poohLeft > 0 && honeyTop >= 150) {
    alert("Oh my Pooh! Try again");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
}


