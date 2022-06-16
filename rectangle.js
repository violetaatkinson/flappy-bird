class Rectangle{
    constructor(ctx, x, y, w, h, color, randomX) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = color;
  
      this.vx = 2;
      this.vy = 0;
      
      //this.g = 1
    }
  
    move() {
      //this.vy += this.g
      this.y += this.vy;
      this.x += this.vx;
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color
      this.ctx.fillRect(this.x, this.y, this.w, this.h)
      this.ctx.closePath();
    }
  }