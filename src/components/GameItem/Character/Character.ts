class Character {
  width: number = 40; // Ширина персонажа
  height: number = 60; // Высота персонажа
  posX: number; // Позиция верхнего левого угла персонажа по X
  posY: number; // Позиция верхнего левого угла персонажа по Y
  ref: CanvasRenderingContext2D; // локальный контекст канваса для отрисовки
  upTime: NodeJS.Timer | undefined; // id счетчика setInterval при Jump
  downTime: NodeJS.Timer | undefined; // id счетчика setInterval при Down
  characterGap: number = 300; // Максимально возможная высота прыжка персонажа
  score: number = 0; // Текущая Score игрока
  currentPosition: number = 0; // Текущая позиция персонажа
  isJumpimg: boolean = true;
  stepY: number = 10; // Шаг первонажа при прыжке и падении
  stepX: number = 40; // Шаг первонажа при перемещении влево/вправо
  speedGame: number; // Скорость отрисовки и дествий в игре
  decelerationStep: number = 15; //Шаг замедления. Использутеся для уменьшения скорости падения

  constructor(
    context: CanvasRenderingContext2D,
    posY: number,
    speedGame: number,
    posX?: number
  ) {
    this.posX = posX || (context.canvas.width + this.width) / 2;
    this.posY = posY;
    this.ref = context;
    this.speedGame = speedGame;
  }

  draw = () => {
    this.ref.fillStyle = 'rgb(0, 0, 0)';
    this.ref.fillRect(this.posX, this.posY, this.width, this.height);
  };

  jump = (platforms: any[]) => {
    let currentGap = 0;
    this.isJumpimg = true;

    clearInterval(this.downTime);

    this.upTime = setInterval(() => {
      this.posY -= this.stepY;

      currentGap += this.stepY;

      if (this.characterGap < currentGap) {
        this.down(platforms);
      }
    }, this.speedGame);
  };

  down = (platforms: any[]) => {
    this.isJumpimg = false;

    clearInterval(this.upTime);

    this.downTime = setInterval(() => {
      this.checkPlatformsUnder(platforms);
      this.posY += this.stepY;

      if (this.posY > this.ref.canvas.height) {
        this.gameOver();
      }
    }, this.speedGame + this.decelerationStep);
  };

  moveLeft = () => {
    this.posX -= this.stepX;
  };

  moveRight = () => {
    this.posX += this.stepX;
  };

  checkPlatformsUnder = (platforms: any[]) => {
    platforms.forEach((platform) => {
      //Условие для определения "Под ногами" персонажа плиты для отталкивания
      if (
        //
        this.posY + this.height >= platform.bottom - 10 &&
        this.posY + this.height <= platform.bottom &&
        this.posX + this.width / 3 >= platform.left &&
        this.posX + this.width / 3 <= platform.left + platform.width &&
        !this.isJumpimg
      ) {
        this.jump(platforms);
        this.score = this.currentPosition;
      }
    });
  };

  controller = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      this.moveLeft();
    } else if (event.key === 'ArrowRight') {
      this.moveRight();
    }
  };

  gameOver = () => {
    clearInterval(this.upTime);
    clearInterval(this.downTime);
    alert('Game Over! Congrats!');
    alert('Your score: ' + this.score);
  };
}

export default Character;