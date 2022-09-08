import Character from '../Character/Character';

class Platform {
  bottom: number;
  left: number;
  ref: any;
  width: number;
  height: number;

  constructor(
    context: CanvasRenderingContext2D,
    widthPlatform: number,
    heightPlatform: number,
    newPlatformBottom: number
  ) {
    this.bottom = context.canvas.height - newPlatformBottom;
    this.left = Math.random() * context.canvas.width;
    this.width = widthPlatform || 120;
    this.height = heightPlatform || 20;

    if (this.left + this.width > context.canvas.width) {
      this.left -= this.width;
    }

    this.ref = context;
  }

  draw() {
    this.ref.fillStyle = 'green';
    this.ref.fillRect(this.left, this.bottom, this.width, this.height);
  }

  clear() {
    this.ref.clearRect(
      this.left - 5,
      this.bottom - 5,
      this.width + 10,
      this.height + 10
    );
  }
}

function createPlatforms(
  context: CanvasRenderingContext2D,
  platformCount: number,
  platforms: Platform[]
) {
  const widthPlatform = 120;
  const heightPlatform = 20;
  for (let i = 0; i < platformCount; i++) {
    let platformSpace = context.canvas.height / platformCount;
    let newPlatformBottom = 250 + i * platformSpace;
    let newPlatform = new Platform(
      context,
      widthPlatform,
      heightPlatform,
      newPlatformBottom
    );
    newPlatform.draw();
    platforms.push(newPlatform);
  }

  return platforms;
}

function movePlatforms(
  context: CanvasRenderingContext2D,
  platforms: Platform[],
  Character: Character,
  stepDown: number
) {
  if (Character.posY < 400) {
    Character.clear();
    Character.posY += stepDown;
    Character.draw();

    platforms.forEach(
      (platform: {
        bottom: number;
        ref: CanvasRenderingContext2D;
        width: number;
        height: number;
        left: number;
        draw: Function;
        clear: Function;
      }) => {
        platform.clear();
        platform.bottom += stepDown;
        platform.draw();

        if (platform.bottom > context.canvas.height) {
          platforms.shift();

          let newPlatform = new Platform(
            context,
            platform.width,
            platform.height,
            context.canvas.height - 50
          );
          newPlatform.draw();
          platforms.push(newPlatform);
        }
      }
    );
    return stepDown;
  }
  return 0;
}

export { createPlatforms, movePlatforms };
