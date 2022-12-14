class Score {
  public posX: number;
  public posY: number;
  public ref: CanvasRenderingContext2D;
  public currentScroll: number = 0;
  public maxWidth: number = 250;

  constructor(ref: CanvasRenderingContext2D, posX: number, posY: number) {
    this.ref = ref;
    this.posX = posX;
    this.posY = posY;
  }

  draw = () => {
    this.ref.font = '20px serif';
    this.ref.fillStyle = '#fff';
    this.ref.fillText(
      'Cчёт: ' + this.currentScroll,
      this.posX,
      this.posY,
      this.maxWidth
    );
  };
}
export { Score };
