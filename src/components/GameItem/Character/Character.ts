class Character {
  width: number;
  height: number;
  posX: number;
  posY: number;
  ref: any;
  upTime: any;
  downTime: any;
  characterGap: number = 500;
  currentPoint: number;

  constructor(
    context: any,
    posY: number,
    posX?: number,
    width?: number,
    height?: number
  ) {
    this.width = width || 40;
    this.height = height || 60;
    this.posX = posX || (context.canvas.width + this.width) / 2;
    this.currentPoint = this.posX;
    this.posY = posY;
    this.ref = context;
  }

  draw() {
    this.ref.fillStyle = 'rgb(0, 0, 0)';
    this.ref.fillRect(this.posX, this.posY, this.width, this.height);
  }

  clear() {
    this.ref.clearRect(this.posX - 1, this.posY, this.width + 2, this.height);
  }

  jump(platforms: any[]) {
    let currentGap = 0;
    clearInterval(this.downTime);
    this.upTime = setInterval(() => {
      this.clear();
      this.posY -= 20;
      currentGap += 30;
      this.draw();
      if (this.characterGap < currentGap) {
        this.down(platforms);
      }
    }, 20);
  }

  down(platforms: any[]) {
    clearInterval(this.upTime);
    this.downTime = setInterval(() => {
      this.clear();
      this.posY += 15;
      if (this.posY > this.ref.canvas.height) {
        this.gameOver();
      }
      platforms.forEach((platform) => {
        if (
          this.posY + this.height >= platform.bottom - 20 &&
          this.posY + this.height <= platform.bottom + platform.height &&
          this.posX >= platform.left - this.width / 2 &&
          this.posX <= platform.left + platform.width + this.width / 2
        ) {
          this.currentPoint = this.posY;
          this.jump(platforms);
        }
      });
      this.draw();
    }, 30);
  }

  moveLeft() {
    this.clear();
    this.posX -= 40;
    this.draw();
  }

  moveRight() {
    this.clear();
    this.posX += 40;
    this.draw();
  }

  controller(event: any) {
    if (event.key === 'ArrowLeft') {
      this.moveLeft();
    } else if (event.key === 'ArrowRight') {
      this.moveRight();
    }
  }

  gameOver() {
    clearInterval(this.upTime);
    clearInterval(this.downTime);
    console.log('Game Over!');
  }
}

export default Character;
