class Background {
  private ref: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  // @ts-ignore
  private yPositions: any[] = Array(300).join(0).split('');
  private localTimeInterval: any;
  constructor(
    context: CanvasRenderingContext2D,
    height: number,
    width: number
  ) {
    this.ref = context;
    this.width = width;
    this.height = height;
  }
  draw = () => {
    this.ref.fillStyle = 'rgba(0,0,0,.1)';
    this.ref.fillRect(0, 0, this.width, this.height);
    this.ref.fillStyle = '#0F0';
    this.ref.font = '10pt Georgia';
    this.yPositions.map((y: number, index: number) => {
      let text = String.fromCharCode(1e2 + Math.random() * 33);
      let x = index * 10 + 10;
      this.ref.fillText(text, x, y);
      if (y > 100 + Math.random() * 1e4) {
        this.yPositions[index] = 0;
      } else {
        this.yPositions[index] = y + 10;
      }
    });
  };
  run = () => {
    if (this.localTimeInterval) {
      this.stop();
    }
    this.localTimeInterval = setInterval(this.draw, 70);
  };
  stop = () => {
    clearInterval(this.localTimeInterval);
  };
}
export { Background };
