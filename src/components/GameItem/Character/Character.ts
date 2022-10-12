class Character {
  readonly width: number = 80; // Ширина персонажа
  readonly height: number = 110; // Высота персонажа
  private upTime: NodeJS.Timer | undefined; // id счетчика setInterval при Jump
  private downTime: NodeJS.Timer | undefined; // id счетчика setInterval при Down
  private characterGap: number = 300; // Максимально возможная высота прыжка персонажа
  private isJumpimg: boolean = true;
  private stepY: number = 10; // Шаг первонажа при прыжке и падении
  private stepX: number = 10; // Шаг первонажа при перемещении влево/вправо
  private goLeftTime: NodeJS.Timer | undefined;
  private goRightTime: NodeJS.Timer | undefined;
  private isGoLeft: boolean = false;
  private isGoRight: boolean = false;
  private decelerationStep: number = 15; //Шаг замедления. Использутеся для уменьшения скорости падения
  private imgUrl: string = 'character.png';
  private imgObj: HTMLImageElement = new Image();
  public posX: number; // Позиция верхнего левого угла персонажа по X
  public posY: number; // Позиция верхнего левого угла персонажа по Y
  public ref: CanvasRenderingContext2D; // локальный контекст канваса для отрисовки
  public score: number = 0; // Текущая Score игрока
  public speedGame: number; // Скорость отрисовки и дествий в игре
  public currentScroll: number = 0; // Текущая позиция персонажа

  constructor(
    context: CanvasRenderingContext2D,
    posY: number,
    speedGame: number,
    posX?: number
  ) {
    this.imgObj.src = this.imgUrl;
    this.posX = posX || (context.canvas.width + this.width) / 2;
    this.posY = posY;
    this.ref = context;
    this.speedGame = speedGame;
  }

  draw = () => {
    this.ref.drawImage(
      this.imgObj,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  };
  private jumpAnumation = () => {};
  private downAnumation = () => {};

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
    }, this.speedGame + this.decelerationStep);
  };

  moveLeft = () => {
    clearInterval(this.goRightTime);
    if (!this.isGoLeft) {
      this.goLeftTime = setInterval(() => {
        this.posX -= this.stepX;
      }, this.speedGame);
      this.isGoLeft = true;
    }
  };

  moveRight = () => {
    clearInterval(this.goLeftTime);
    if (!this.isGoRight) {
      this.goRightTime = setInterval(() => {
        this.posX += this.stepX;
      }, this.speedGame);
      this.isGoRight = true;
    }
  };

  checkPlatformsUnder = (platforms: any[]) => {
    platforms.forEach((platform) => {
      //Условие для определения "Под ногами" персонажа плиты для отталкивания
      if (
        //
        this.posY + this.height >= platform.bottom - 10 &&
        this.posY + this.height <= platform.bottom &&
        this.posX + (this.width / 3) * 2 >= platform.left &&
        this.posX + this.width / 3 <= platform.left + platform.width &&
        !this.isJumpimg
      ) {
        this.jump(platforms);
      }
    });
  };

  controllerStart = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      this.moveLeft();
    } else if (event.key === 'ArrowRight') {
      this.moveRight();
    }
  };

  controllerReset = (event: KeyboardEvent) => {
    clearInterval(this.goLeftTime);
    clearInterval(this.goRightTime);
    this.isGoRight = false;
    this.isGoLeft = false;
  };

  stop = () => {
    clearInterval(this.upTime);
    clearInterval(this.downTime);
    clearInterval(this.goLeftTime);
    clearInterval(this.goRightTime);
  };

  gameOver = () => {
    this.stop();
    alert('Your score: ' + this.currentScroll);
  };
}

export { Character };
