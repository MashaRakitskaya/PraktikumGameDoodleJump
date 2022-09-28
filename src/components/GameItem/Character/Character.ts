interface CharacterInterface {
  gameOver: Function;
  currentScroll: number;
  ref: CanvasRenderingContext2D;
  width: number;
  height: number;
  posX: number;
  posY: number;
  score: number;
  draw: Function;
  jump: Function;
  controller(event: KeyboardEvent): void;
}

class Character {
  readonly width: number = 80; // Ширина персонажа
  readonly height: number = 110; // Высота персонажа
  private upTime: NodeJS.Timer | undefined; // id счетчика setInterval при Jump
  private downTime: NodeJS.Timer | undefined; // id счетчика setInterval при Down
  private characterGap: number = 300; // Максимально возможная высота прыжка персонажа
  private isJumpimg: boolean = true;
  private stepY: number = 10; // Шаг первонажа при прыжке и падении
  private stepX: number = 60; // Шаг первонажа при перемещении влево/вправо
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
    alert('Your score: ' + this.currentScroll);
  };
}

export default Character;
export type { CharacterInterface };
