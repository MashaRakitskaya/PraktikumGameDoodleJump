import { Character } from '../Character/Character';

class Bonuses {
  private copyCharacterGap: number = 0;
  private copyImgUrl: string = '';
  public width: number; // Ширина Бонуса
  public height: number; // Высота Бонуса
  protected imgObj: HTMLImageElement = new Image();
  public posX: number; // Позиция верхнего левого угла по X
  public posY: number; // Позиция верхнего левого угла по Y
  public ref: CanvasRenderingContext2D; // локальный контекст канваса для отрисовки
  public expiredFromScore: number;
  public distance: number;

  constructor(
    context: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    imgUrl: string,
    height: number,
    width: number,
    distance: number,
    currentScore: number
  ) {
    this.imgObj.src = imgUrl;
    this.height = height;
    this.width = width;
    this.posX = posX;
    this.posY = posY - this.height;
    this.ref = context;
    this.distance = distance;
    this.expiredFromScore = this.distance + currentScore;
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

  checkExpired = (currentScore: number, Character: Character) => {
    let isExpire = false;
    if (currentScore > this.expiredFromScore) {
      this.resetSkillCharacter(Character);
      isExpire = true;
    }
    return isExpire;
  };

  updateSkillCharacter = (Character: Character, nemUrl: string) => {
    this.copyCharacterGap = Character.characterGap;
    this.copyImgUrl = Character.imgObj.src;
    Character.imgObj.src = nemUrl;
    Character.characterGap = Character.characterGap * 3;
  };

  resetSkillCharacter = (Character: Character) => {
    Character.characterGap = this.copyCharacterGap;
    Character.imgObj.src = this.copyImgUrl;
  };
}

const moveBonuses = (
  context: CanvasRenderingContext2D,
  bonuses: Bonuses[],
  Character: Character,
  stepDown: number
) => {
  bonuses.forEach((bonusesItem: Bonuses) => {
    bonusesItem.posY += stepDown;
  });
};

const checkBonusesOnPath = (Character: Character, bonuses: Bonuses[]) => {
  let isMeet = false;
  if (bonuses.length > 0) {
    bonuses.forEach((bonusesItem) => {
      if (
        Character.posY + Character.height >= bonusesItem.posY &&
        Character.posY <= bonusesItem.posY + bonusesItem.height &&
        Character.posX + Character.width >= bonusesItem.posX &&
        Character.posX <= bonusesItem.posX + bonusesItem.width
      ) {
        isMeet = true;
      }
    });
  }
  return isMeet;
};

export { Bonuses, moveBonuses, checkBonusesOnPath };
