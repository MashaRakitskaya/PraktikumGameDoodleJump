import Character from '../Character/Character';

interface PlatformInterface {
  bottom: number;
  left: number;
  ref: CanvasRenderingContext2D;
  width: number;
  height: number;
  draw: Function;
}

class Platform {
  bottom: number;
  left: number;
  ref: CanvasRenderingContext2D;
  width: number = 120;
  height: number = 20;

  constructor(context: CanvasRenderingContext2D, newPlatformBottom: number) {
    this.bottom = context.canvas.height - newPlatformBottom;
    this.left = Math.random() * context.canvas.width;

    if (this.left + this.width > context.canvas.width) {
      this.left -= this.width;
    }

    this.ref = context;
  }

  draw = () => {
    this.ref.fillStyle = 'green';
    this.ref.fillRect(this.left, this.bottom, this.width, this.height);
  };
}

function createPlatforms(
  context: CanvasRenderingContext2D,
  platformCount: number
) {
  let platforms = [];

  for (let i = 0; i < platformCount; i++) {
    let platformSpace = context.canvas.height / platformCount;
    let newPlatformBottom = 250 + i * platformSpace; // 250 - минимальный шаг отступа между платформами по Y
    let newPlatform = new Platform(context, newPlatformBottom);
    newPlatform.draw();
    platforms.push(newPlatform);
  }

  return platforms;
}

//Функция вызвращает высоту сдвига платформ по Y
function movePlatforms(
  context: CanvasRenderingContext2D,
  platforms: PlatformInterface[],
  Character: Character,
  stepDown: number
) {
  //Если первонаж достигает высоты более, чем 1/3 экрана, то двигаем платформы
  if (Character.posY < context.canvas.height / 3) {
    Character.posY += stepDown;
    platforms.forEach((platform: PlatformInterface) => {
      platform.bottom += stepDown;

      if (platform.bottom > context.canvas.height) {
        platforms.shift();

        let newPlatform = new Platform(context, context.canvas.height - 50); // каждая новая платформа генерируется с высотой по Y: 100%-50px
        newPlatform.draw();
        platforms.push(newPlatform);
      }
    });
    return stepDown;
  }
  //Возвращаем 0 т.к. условие сдвига не выполнилось
  return 0;
}

export { createPlatforms, movePlatforms };
export type { PlatformInterface };
