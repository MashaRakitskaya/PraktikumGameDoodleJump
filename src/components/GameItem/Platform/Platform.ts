import { CharacterInterface } from '../Character/Character';

interface PlatformInterface {
  bottom: number;
  left: number;
  ref: CanvasRenderingContext2D;
  width: number;
  height: number;
  draw: Function;
}

class Platform {
  private width: number = 120;
  private height: number = 20;
  public bottom: number;
  public left: number;
  public ref: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D, newPlatformBottom: number) {
    this.bottom = context.canvas.height - newPlatformBottom;
    this.left = Math.random() * context.canvas.width;

    if (this.left + this.width > context.canvas.width) {
      this.left -= this.width;
    }

    this.ref = context;
  }

  draw = () => {
    this.ref.fillStyle = '#7D3CFF';
    this.ref.fillRect(this.left, this.bottom, this.width, this.height);
  };
}

const createPlatforms = (
  context: CanvasRenderingContext2D,
  platformCount: number
) => {
  let platforms: PlatformInterface[] = [];
  const MIN_INDENTATION = 250; // 250 - минимальный шаг отступа между платформами по Y
  for (let i = 0; i < platformCount; i++) {
    let platformSpace = context.canvas.height / platformCount;
    let newPlatformBottom = MIN_INDENTATION + i * platformSpace;
    // @ts-ignore
    let newPlatform: PlatformInterface = new Platform(
      context,
      newPlatformBottom
    );
    newPlatform.draw();
    platforms.push(newPlatform);
  }

  return platforms;
};

//Функция вызвращает высоту сдвига платформ по Y
const movePlatforms = (
  context: CanvasRenderingContext2D,
  platforms: PlatformInterface[],
  Character: CharacterInterface,
  stepDown: number
) => {
  const ZERO_STEP = 0;
  //Если первонаж достигает высоты более, чем 1/3 экрана, то двигаем платформы
  if (Character.posY < context.canvas.height / 3) {
    Character.posY += stepDown / 2;
    platforms.forEach((platform: PlatformInterface) => {
      platform.bottom += stepDown;

      if (platform.bottom > context.canvas.height) {
        platforms.shift();

        // @ts-ignore
        let newPlatform: PlatformInterface = new Platform(
          context,
          context.canvas.height
        );
        newPlatform.draw();
        platforms.push(newPlatform);
      }
    });
    return stepDown;
  }
  //Возвращаем 0 т.к. условие сдвига не выполнилось
  return ZERO_STEP;
};

export { createPlatforms, movePlatforms };
export type { PlatformInterface };
