import { Character } from '../Character/Character';

class Bonuses {
  private copyCharacterGap: number = 0;
  private copySpeedGame: number = 0;
  private copyStepY: number = 0;
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
    this.posX = posX;
    this.height = height;
    this.width = width;
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
    this.copySpeedGame = Character.speedGame;
    this.copyStepY = Character.stepY;
    Character.imgObj.src = nemUrl;
    Character.characterGap = Character.characterGap * 3;
    Character.speedGame = Character.speedGame * 0.8;
    Character.stepY = Character.stepY * 0.8;
  };

  resetSkillCharacter = (Character: Character) => {
    Character.characterGap = this.copyCharacterGap;
    Character.speedGame = this.copySpeedGame;
    Character.stepY = this.copyStepY;
  };
}

const moveBonuses = (
  context: CanvasRenderingContext2D,
  bonuses: Bonuses[],
  Character: Character,
  stepDown: number
) => {
  bonuses.forEach((bonusesItem: any) => {
    bonusesItem.posY += stepDown;
    if (bonusesItem.posY > context.canvas.height) {
      bonuses.shift();
    }
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
