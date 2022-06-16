class Player {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = CANVAS_WIDTH / 6
      this.y = CANVAS_HEIGHT / 2
      this.w = 40;
      this.h = 40;
      this.color = 'blue';
      this.img = new Image();
      this.img.src = "http://www.sonarlearning.co.uk/images/icons/courseIcons/cocos2d-x-flappy-bird.png";
  
      this.vx = 0;
      this.vy = 0;
  
      this.actions = {
        up: false,
        down: false,
        left: false,
        right: false
      }
      
      this.g = 0.1
      this._setListeners()
    }
  
    move() {
      this._applyActions()
      this.vx += this.ax
      this.vy += this.ay
      this.vy += this.g
      this.x += this.vx;
      this.y += this.vy;
    }
  
    _setListeners() {
      document.onkeydown = e => this._switchAction(e.keyCode, true)
      document.onkeyup = e => this._switchAction(e.keyCode, false)
    }
  
    _applyActions() {
      this.ay = this.actions.up ? -0.2 : 0
      
      if (this.actions.right) {
        this.ax = 0.1
      } else if (this.actions.left) {
        this.ax = -0.1
      } else {
        this.ax = 0
      }
    }
  
    _switchAction(key, apply) {
      switch (key) {
        case LEFT:
          this.actions.left = apply
          break;
        case RIGHT:
          this.actions.right = apply
          break;
        case UP:
          this.actions.up = apply
          break;
      }
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