export class AudioCustom {
  private player: HTMLAudioElement | undefined;
  private name: string;
  private volume: number = 1;
  private isInit: boolean = false;
  private isPause: boolean = false;

  constructor(name: string, volume?: number) {
    this.name = name;
    if (volume) {
      this.volume = volume;
    }
  }

  play = () => {
    this.isInit = true;
    if (this.isPause) {
      this.resume();
    } else {
      this.player = new Audio(this.name);
      this.player.volume = this.volume;
      this.player.play();
    }
  };

  resume = () => {
    if (this.isPause) {
      this.isPause = false;
      // @ts-ignore
      this.player.play();
    }
  };

  pause = () => {
    if (!this.isPause && this.isInit) {
      this.isPause = true;
      // @ts-ignore
      this.player.pause();
    }
  };
}
