export class AudioCustom {
  private player: any;
  private name: string;
  private isInit: boolean = false;
  private isPause: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  play = () => {
    this.isInit = true;
    if (this.isPause) {
      this.resume();
    } else {
      this.player = new Audio(this.name);
      this.player.play();
    }
  };

  resume = () => {
    if (this.isPause) {
      this.isPause = false;
      this.player.play();
    }
  };

  pause = () => {
    if (!this.isPause && this.isInit) {
      this.isPause = true;
      this.player.pause();
    }
  };
}
