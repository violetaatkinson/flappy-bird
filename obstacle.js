class Obstacle {
    constructor(ctx, up) {
      this.ctx = ctx;
      this.w = 50;
      this.x = this.ctx.canvas.width;
      this.h = this.ctx.canvas.height;
      this.dist = Math.random() * 100 + 200
      this.y = up ? - this.dist : this.dist
      this.color = 'red';
  
      this.img = new Image();
      this.img.src = "./img/pipe.png"
  
      this.vx = -2;
    }
  
    move() {
      this.x += this.vx;
    }
  
    collide(player) {
      const collideX = player.x + player.w > this.x && player.x < this.x + this.w
      const collideY = player.y < this.y + this.h && player.y + player.h > this.y
  
      return collideX && collideY
    }
  
    draw() {
       this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      )
    }
  }