interface StackOverflowInterface {
  currentScroll: number;
  ref: CanvasRenderingContext2D;
  posX: number;
  posY: number;
  score: number;
  draw: Function;
  jump: Function;
  controller(event: KeyboardEvent): void;
}

class StackOverflow {

}

export default StackOverflow;
export type { StackOverflowInterface };
