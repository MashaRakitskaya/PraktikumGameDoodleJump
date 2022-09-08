class Character {
  width: number; // Ширина персонажа
  height: number; // Высота персонажа
  posX: number; // Позиция верхнего левого угла персонажа по X
  posY: number; // Позиция верхнего левого угла персонажа по Y
  ref: any; // локальный контекст канваса для отрисовки
  upTime: any; // id счетчика setInterval при Jump
  downTime: any; // id счетчика setInterval при Down
  characterGap: number = 300; // Максимально возможная высота прыжка персонажа
  score: number = 0; // Текущая Score игрока
  currentPosition: number = 0; // Текущая позиция персонажа
  isJumpimg: boolean = true;
  stepY: number = 10; // Шаг первонажа при прыжке и падении
  stepX: number = 40; // Шаг первонажа при перемещении влево/вправо
  speedGame: number; // Скорость отрисовки и дествий в игре

  constructor(
    context: CanvasRenderingContext2D,
    posY: number,
    speedGame: number,
    posX?: number,
    width?: number,
    height?: number
  ) {
    this.width = width || 40;
    this.height = height || 60;
    this.posX = posX || (context.canvas.width + this.width) / 2;
    this.posY = posY;
    this.ref = context;
    this.speedGame = speedGame;
  }

  draw() {
    this.ref.fillStyle = 'rgb(0, 0, 0)';
    this.ref.fillRect(this.posX, this.posY, this.width, this.height);
  }

  clear() {
    this.ref.clearRect(
      this.posX - 1,
      this.posY - 1,
      this.width + 2,
      this.height + 2
    );
  }

  jump(platforms: any[]) {
    let currentGap = 0;
    this.isJumpimg = true;

    clearInterval(this.downTime);

    this.upTime = setInterval(() => {
      this.redrawY(-this.stepY);

      currentGap += this.stepY;

      platforms.forEach((platform) => {
        platform.draw();
      });

      if (this.characterGap < currentGap) {
        this.down(platforms);
      }
    }, this.speedGame);
  }

  down(platforms: any[]) {
    this.isJumpimg = false;

    clearInterval(this.upTime);

    this.downTime = setInterval(() => {
      this.redrawY(+this.stepY);

      if (this.posY > this.ref.canvas.height) {
        this.gameOver();
      }

      platforms.forEach((platform) => {
        if (
          this.posY + this.height >= platform.bottom &&
          this.posY + this.height <= platform.bottom + 10 &&
          this.posX + this.width / 3 >= platform.left &&
          this.posX + this.width / 3 <= platform.left + platform.width &&
          !this.isJumpimg
        ) {
          this.jump(platforms);
          this.score = this.currentPosition;
        }

        platform.draw();
      });
      // За счет прибавления 10 мс замедляем падение, чтобы было проще играть
    }, this.speedGame + 10);
  }

  moveLeft() {
    this.clear();
    this.posX -= this.stepX;
    this.draw();
  }

  moveRight() {
    this.clear();
    this.posX += this.stepX;
    this.draw();
  }

  redrawY(step: number) {
    this.clear();
    this.posY += step;
    this.draw();
  }

  controller(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.moveLeft();
    } else if (event.key === 'ArrowRight') {
      this.moveRight();
    }
  }

  gameOver() {
    clearInterval(this.upTime);
    clearInterval(this.downTime);
    alert('Game Over! Congrats!');
    alert('Your score: ' + this.score);
  }
}

export default Character;
