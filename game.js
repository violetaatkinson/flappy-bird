class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalId = null;
        this.player = new Player(this.ctx);
        this.background = new Background(this.ctx);
        this.obstacles = [];
        this.tickObstacle = 0
        this.obstacleUp = false
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.checkCollisions()
            this.move();
            this.tickObstacle++;

            if (this.tickObstacle % 100 === 0) {
                this.addObstacle()
            }
        }, 1000 / 60)
    }

    clear() {
        this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        )
    }

    move() {
        this.background.move()
        this.player.move()
        this.obstacles.forEach(obs => obs.move())
    }

    draw() {
        this.background.draw()
        this.player.draw()
        this.obstacles.forEach(obs => obs.draw())
    }

    checkCollisions() {
        let playerVsObs = this.obstacles.find(obs => obs.collide(this.player))

        if (playerVsObs || this.player.y + this.player.h >= this.ctx.canvas.height) {
            this.gameOver()
        }

        console.log(playerVsObs)
    }

    addObstacle() {
        this.obstacles.push(new Obstacle(this.ctx, this.obstacleUp))
        this.obstacleUp = !this.obstacleUp
    }

    gameOver() {
        clearInterval(this.intervalId);
        this.intervalId = null
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "red";
        this.ctx.textAlign = "center";
        this.ctx.fillText("GAME OVER", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    }
}