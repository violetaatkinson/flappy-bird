const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const startBtn = document.getElementById('start-btn')


startBtn.addEventListener('click', () => {
  if (game.intervalId === null) {  
    game.start()
  } else {
    game.stop()
  }
})


/*
const colors = ["red", "green", "yellow", "purple", "gray"]
for (i = 0; i < 6; i++) {
  const h = 15;
  const w = 20;
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const randomX = Math.floor(Math.random() * (canvas.width - w))
  const randomY = Math.floor(Math.random() * (canvas.height - h))
  const rectangle = new Rectangle(ctx, randomX, randomY, w, h, randomColor)
  rectangle.draw()
}
*/


/*
//ctx.fillRect(x, y, width, height)
ctx.beginPath();
ctx.fillStyle = "transparent"
ctx.fillRect(10, 30, 50, 100)
ctx.closePath();

//ctx.arc(x, y, radio, startAngle, endAngle, antihorario);

ctx.beginPath();

ctx.arc(100, 100, 30, 0, 1.)
ctx.fillStyle = "blue";
ctx.fill()
ctx.strokeStyle = "#FF0000";
ctx.lineWidth = 5;
ctx.stroke();

ctx.closePath();
*/