import { Platform } from '../Platform/Platform';
import { AudioCustom } from '../Audio/AudioCustom';

class Character {
  readonly width: number = 80; // Ширина персонажа
  readonly height: number = 110; // Высота персонажа
  private upTime: NodeJS.Timer | undefined; // id счетчика setInterval при Jump
  private downTime: NodeJS.Timer | undefined; // id счетчика setInterval при Down
  private stepX: number = 10; // Шаг первонажа при перемещении влево/вправо
  private goLeftTime: NodeJS.Timer | undefined;
  private goRightTime: NodeJS.Timer | undefined;
  private soundJump: AudioCustom = new AudioCustom('jump.mp3');
  private soundGameOver: AudioCustom = new AudioCustom('gameover.mp3');
  private soundFire: AudioCustom = new AudioCustom('fire.mp3');
  private decelerationStep: number = 15; //Шаг замедления. Использутеся для уменьшения скорости падения
  public isGoLeft: boolean = false;
  public isGoRight: boolean = false;
  public isJumping: boolean = true;
  public speedGame: number = 15.5; // Скорость отрисовки и дествий в игре
  public imgObj: HTMLImageElement = new Image();
  public stepY: number = 10; // Шаг первонажа при прыжке и падении
  public characterGap: number = 300; // Максимально возможная высота прыжка персонажа
  public imgUrl: string = 'character.png';
  public posX: number; // Позиция верхнего левого угла персонажа по X
  public posY: number; // Позиция верхнего левого угла персонажа по Y
  public ref: CanvasRenderingContext2D; // локальный контекст канваса для отрисовки
  public currentScroll: number = 0; // Текущая позиция персонажа
  public isHaveBonus: boolean = false;
  public updateSpeedGap: number = 2500; // каждые 1500 будет понемногу увеличиваться скорость игры

  constructor(context: CanvasRenderingContext2D, posY: number, posX?: number) {
    this.imgObj.src = this.imgUrl;
    this.posX = posX || (context.canvas.width + this.width) / 2;
    this.posY = posY;
    this.ref = context;
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

  jump = (platforms: Platform[]) => {
    let currentGap = 0;
    this.isJumping = true;
    this.soundJump.play();
    clearInterval(this.downTime);

    this.upTime = setInterval(() => {
      this.posY -= this.stepY;
      currentGap += this.stepY;

      if (this.characterGap < currentGap) {
        this.down(platforms);
      }
    }, this.speedGame);
  };

  down = (platforms: Platform[]) => {
    this.isJumping = false;

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
        //Появление с противоположной стороны в случае захода за левый край экрана
        if (this.posX < -(this.width / 2)) {
          this.posX = this.posX + this.ref.canvas.width;
        }
      }, this.speedGame);
      this.isGoLeft = true;
    }
  };

  moveRight = () => {
    clearInterval(this.goLeftTime);
    if (!this.isGoRight) {
      this.goRightTime = setInterval(() => {
        this.posX += this.stepX;
        //Появление с противоположной стороны в случае захода за правый край экрана
        if (this.posX > this.ref.canvas.width + this.width / 2) {
          this.posX = -(this.width / 2);
        }
      }, this.speedGame);
      this.isGoRight = true;
    }
  };

  checkPlatformsUnder = (platforms: Platform[]) => {
    platforms.forEach((platform) => {
      //Условие для определения "Под ногами" персонажа плиты для отталкивания
      if (
        //
        this.posY + this.height >= platform.bottom - 10 &&
        this.posY + this.height <= platform.bottom &&
        this.posX + (this.width / 3) * 2 >= platform.left &&
        this.posX + this.width / 3 <= platform.left + platform.width &&
        !this.isJumping
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
    this.soundGameOver.play();
    this.stop();
  };
}

export { Character };
