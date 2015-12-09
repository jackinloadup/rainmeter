var container;
var canvas;
var ctx;

var canvas_height = 300; // px
var canvas_width = 1000; // px

var height = 100; // [x
var going_down = true;
var max_height = 100; // px
var min_height = 0; // px

var bar_width = 50; // px


var increment = 2; // px


function start_visualizer() {
  canvas = document.getElementById("bars");
  ctx = canvas.getContext("2d");


  set_canvas_size();
  clear_canvas();
  window.requestAnimationFrame(run_loop);
}

function set_canvas_size() {
  canvas.width  = canvas_width;
  canvas.height = canvas_height;
  ctx.canvas.width  = canvas_width;
  ctx.canvas.height = canvas_height;
}

function run_loop() {
  clear_canvas();
  draw_box();
  window.requestAnimationFrame(run_loop);
}

function clear_canvas() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
}

function draw_box() {
  ctx.fillStyle = "rgba(150, 0, 200, 1)";
  ctx.fillRect(10, 10, bar_width, height);

  if (going_down) {
    height = height - increment;
  } else {
    height = height + increment;
  }

  if (height === min_height) going_down = false;
  if (height === max_height) going_down = true;
}
