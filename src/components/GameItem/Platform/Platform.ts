import { Character } from '../Character/Character';

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
  let platforms: Platform[] = [];
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
  platforms: Platform[],
  Character: Character,
  stepDown: number
) => {
  const TOP_POINT_MAX = -200; // верняя граница, преодолевая которую, плиты удаляются
  platforms.forEach((platform: Platform) => {
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
    if (platform.bottom < TOP_POINT_MAX) {
      platforms.pop();
    }
  });
  return stepDown;
};

export { createPlatforms, movePlatforms, Platform };
