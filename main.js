var container;
var canvas;
var ctx;

var canvas_height = 300; // px
var canvas_width = 1000; // px


var bar_width = 20;
var bar_count = 2;
var bar_spacing = 10; // px

var bars = []; // array



function start_visualizer() {
  canvas = document.getElementById("bars");
  ctx = canvas.getContext("2d");


  set_canvas_size();
  generate_bars();
  place_bars();
  window.requestAnimationFrame(run_loop);
}

function run_loop() {
  clear_canvas();
  draw_box();
  window.requestAnimationFrame(run_loop);
}

function set_canvas_size() {
  canvas.width  = canvas_width;
  canvas.height = canvas_height;
  ctx.canvas.width  = canvas_width;
  ctx.canvas.height = canvas_height;
}

function generate_bars() {
  for (i = 1; i <= bar_count; i++) {
    bars.push(new Bar(0, canvas_height, bar_width));
  }
}

function place_bars() {
  for (i = 0; i <= bars.length - 1; i++) {
    bars[i].x = i * (bar_width + bar_spacing);
  }
}

function clear_canvas() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
}

function draw_box() {
  for (i = 0; i <= bars.length - 1; i++) {
    bars[i].draw();
  }
}
