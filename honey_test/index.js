function hideButton() {
  let item = document.getElementById("btn");
  if (item.style.display == "block") item.style.display = "none";
  else item.style.display = "block";
}


function start() {
//анимация меда
let honey = new Image();
honey.src = "./honey.png";
let counter = 0,
  frame_width = 200,
  frame_height = 200;
  honey.onload = function () {
  let canvas = document.getElementById("myCanvas");
  let context = canvas.getContext("2d");
  window.requestAnimationFrame(animate);

  function animate() {
    let frame = Math.floor(counter % 6);
    context.clearRect(0, 0, 0, 0);
    context.drawImage(honey,frame * frame_width,0,frame_width,frame_height,0,400,frame_width,frame_height
    );
    counter = counter + 0.25;
    window.requestAnimationFrame(animate);
  }
};



//анимация фона

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let image = new Image();

image.onload = function () {
  let x = 0;
  let width = image.width;
  let min = 0 - width;
  let step = 1;

  let loop = function () {
    context.drawImage(image, x, 0);
    context.drawImage(image, x + width, 0);
    x -= step;
    if (x < min) {
      x = 0;
    }
  };
  setInterval(loop, 1000 / 600);
};
image.src = "./forest.png";
}