import { Character } from '../Character/Character';

class Monster {
  readonly width: number = 120; // Ширина Монстра
  protected imgObj: HTMLImageElement = new Image();
  private isJumping: boolean = false;
  private upTime: NodeJS.Timer | undefined; // id счетчика setInterval при Jump
  private downTime: NodeJS.Timer | undefined; // id счетчика setInterval при Down
  private stepIntervalY: number = 10; // Шаг монстра при движении по Y
  public stepY: number = 1; // Шаг монстра при движении по Y\
  public isDead: boolean = false;
  public height: number = 140; // Высота Монстра
  public currentGap: number = 0;
  public posX: number; // Позиция верхнего левого угла по X
  public posY: number; // Позиция верхнего левого угла по Y
  public speed: number = 35; // Скорость шага монстра при движении по Y
  public ref: CanvasRenderingContext2D; // локальный контекст канваса для отрисовки

  constructor(
    context: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    imgUrl: string
  ) {
    this.imgObj.src = imgUrl;
    this.posX = posX;
    this.posY = posY - this.height;
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

  jump = () => {
    this.currentGap = 0;
    this.isJumping = true;
    clearInterval(this.downTime);

    this.upTime = setInterval(() => {
      this.posY -= this.stepY;
      this.currentGap += this.stepY;

      if (this.stepIntervalY < this.currentGap) {
        this.down();
      }
    }, this.speed);
  };

  down = () => {
    this.isJumping = false;
    this.currentGap = this.stepIntervalY;
    clearInterval(this.upTime);

    this.downTime = setInterval(() => {
      this.posY += this.stepY;
      this.currentGap -= this.stepY;

      if (0 > this.currentGap) {
        this.jump();
      }
    }, this.speed);
  };
  intervalClear = (timeIds: NodeJS.Timer | undefined) => {
    clearInterval(timeIds);
  };

  death = (monsters: Monster[]) => {
    this.height = this.height / 2;
    clearInterval(this.upTime);
    clearInterval(this.downTime);
    this.downTime = setInterval(() => {
      this.posY += this.stepY * 5;

      if (this.ref.canvas.clientHeight < this.posY) {
        monsters.filter((item) => !item.isDead);
        clearInterval(this.downTime);
      }
    }, this.speed);
  };
}

const moveMonsters = (
  context: CanvasRenderingContext2D,
  monsters: Monster[],
  Character: Character,
  stepDown: number
) => {
  monsters.forEach((monsterItem: Monster) => {
    monsterItem.posY += stepDown;
    if (monsterItem.posY > context.canvas.height) {
      monsters.shift();
    }
  });
};

const checkMonsterOnPath = (
  Character: Character,
  monsters: Monster[]
): Monster | undefined => {
  let isMeet = undefined;
  if (monsters.length > 0) {
    monsters.forEach((monsterItem) => {
      if (
        Character.posY + Character.height >= monsterItem.posY &&
        Character.posY <= monsterItem.posY + monsterItem.height &&
        Character.posX + Character.width >= monsterItem.posX &&
        Character.posX <= monsterItem.posX + monsterItem.width
      ) {
        isMeet = monsterItem;
      }
    });
  }
  return isMeet;
};
export { Monster, moveMonsters, checkMonsterOnPath };
