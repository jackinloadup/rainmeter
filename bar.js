function Bar(min_height, max_height, width) {
  this.max_height = max_height; // px
  this.min_height = min_height; // px

  this.width = width; // px
  this.height = 100; // [x

  this.x = 0;
  this.y = 0;

  this.increment = 2; // px
  this.going_up = true;
}

Bar.prototype.draw = function() {
  ctx.fillStyle = "rgba(150, 0, 200, 1)";
  ctx.fillRect(this.x, this.y, this.width, this.height);


  if (this.going_up) {
    this.height = this.height - this.increment;
  } else {
    this.height = this.height + this.increment;
  }

  if (this.height === this.min_height) this.going_up = false;
  if (this.height === this.max_height) this.going_up = true;
}
 