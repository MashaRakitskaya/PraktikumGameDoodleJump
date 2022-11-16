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

  checkExpired = (currentScore: number, character: Character) => {
    let isExpire = false;
    if (currentScore > this.expiredFromScore) {
      this.resetSkillCharacter(character);
      isExpire = true;
    }
    return isExpire;
  };

  updateSkillCharacter = (character: Character, nemUrl: string) => {
    this.copyCharacterGap = character.characterGap;
    this.copyImgUrl = character.imgObj.src;
    character.imgObj.src = nemUrl;
    character.characterGap = character.characterGap * 3;
  };

  resetSkillCharacter = (character: Character) => {
    character.characterGap = this.copyCharacterGap;
    character.imgObj.src = this.copyImgUrl;
  };
}

const moveBonuses = (
  context: CanvasRenderingContext2D,
  bonuses: Bonuses[],
  stepDown: number
) => {
  bonuses.forEach((bonusesItem: Bonuses) => {
    bonusesItem.posY += stepDown;
  });
};

const checkBonusesOnPath = (character: Character, bonuses: Bonuses[]) => {
  let isMeet = false;
  if (bonuses.length > 0) {
    bonuses.forEach((bonusesItem) => {
      if (
        character.posY + character.height >= bonusesItem.posY &&
        character.posY <= bonusesItem.posY + bonusesItem.height &&
        character.posX + character.width >= bonusesItem.posX &&
        character.posX <= bonusesItem.posX + bonusesItem.width
      ) {
        isMeet = true;
      }
    });
  }
  return isMeet;
};

export { Bonuses, moveBonuses, checkBonusesOnPath };
