import { Character } from '../Character/Character';

class Monster {
  readonly width: number = 120; // Ширина Монстра
  readonly height: number = 140; // Высота Монстра
  protected imgObj: HTMLImageElement = new Image();
  public posX: number; // Позиция верхнего левого угла по X
  public posY: number; // Позиция верхнего левого угла по Y
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
}

function moveMonsters(
  context: CanvasRenderingContext2D,
  monsters: Monster[],
  Character: Character,
  stepDown: number
) {
  monsters.forEach((monsterItem: Monster) => {
    monsterItem.posY += stepDown;
    if (monsterItem.posY > context.canvas.height) {
      monsters.shift();
    }
  });
}

function checkMonsterOnPath(Character: Character, monsters: Monster[]) {
  let isMeet = false;
  if (monsters.length > 0) {
    monsters.forEach((monsterItem) => {
      if (
        Character.posY + Character.height >= monsterItem.posY &&
        Character.posY <= monsterItem.posY + monsterItem.height &&
        Character.posX + Character.width >= monsterItem.posX &&
        Character.posX <= monsterItem.posX + monsterItem.width
      ) {
        isMeet = true;
      }
    });
  }
  return isMeet;
}
export { Monster, moveMonsters, checkMonsterOnPath };
