import { CharacterInterface } from '../Character/Character';

class Monster {
  protected width: number = 120; // Ширина Монстра
  protected height: number = 140; // Высота Монстра
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
    this.posY = posY - this.height - 20; // 20 - высота платформы. Пока что костыль
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
  monsters: any[],
  Character: CharacterInterface,
  stepDown: number
) {
  //Если первонаж достигает высоты более, чем 1/3 экрана, то двигаем платформы
  if (Character.posY < context.canvas.height / 3) {
    Character.posY += stepDown / 2;
    monsters.forEach((monsterItem: any) => {
      monsterItem.posY += stepDown;
      if (monsterItem.posY > context.canvas.height) {
        monsters.shift();
      }
    });
  }
}

function checkMonsterOnPath(Character: CharacterInterface, monsters: any[]) {
  let isMeet = false;
  monsters.forEach((monsterItem) => {
    //Условие для определения "Под ногами" персонажа плиты для отталкивания
    if (
      Character.posY + Character.height >= monsterItem.posY &&
      Character.posY <= monsterItem.posY + monsterItem.height &&
      Character.posX + Character.width >= monsterItem.posX &&
      Character.posX <= monsterItem.posX + monsterItem.width
    ) {
      isMeet = true;
    }
  });
  return isMeet;
}
export { Monster, moveMonsters, checkMonsterOnPath };
