interface ScoreInterface {
  currentScroll: number;
  ref: CanvasRenderingContext2D;
  posX: number;
  posY: number;
  draw(): void;
}

class Score {
  public posX: number;
  public posY: number;
  public ref: CanvasRenderingContext2D;
  public currentScroll: number = 0;

  constructor(ref: CanvasRenderingContext2D, posX: number, posY: number) {
    this.ref = ref;
    this.posX = posX;
    this.posY = posY;
  }

  draw = () => {
    this.ref.font = '20px serif';
    this.ref.fillStyle = 'black';
    this.ref.fillText(
      'Ваш текущий score: ' + this.currentScroll,
      this.posX,
      this.posY
    );
  };
}
export { Score };
export type { ScoreInterface };
