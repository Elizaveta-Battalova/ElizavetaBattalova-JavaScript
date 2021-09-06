let honey = new Image();
honey.src = "./111.png";
let counter = 0,
  frame_width = 200,
  frame_height = 200;
honey.onload = function () {
  let canvas = document.getElementById("myCanvas");
  let context = canvas.getContext("2d");
  window.requestAnimationFrame(animate);

  function animate() {
    let frame = Math.floor(counter % 6);
    context.clearRect(0,0,200,200);
    context.drawImage(
      honey,
      frame * frame_width,
      0,
      frame_width,
      frame_height,
      0,
      0,
      frame_width,
      frame_height
    );
    counter = counter + 0.25;

    window.requestAnimationFrame(animate);
  }
};

// function keyPressed() {
//   if (key == " ") {
//     honey.jump();
//   }
// }
