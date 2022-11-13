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
    if (this.player && this.isPause) {
      this.resume();
    } else {
      this.player = new Audio(this.name);
      this.player.volume = this.volume;
      this.player.play();
    }
  };

  resume = () => {
    if (this.player && this.isPause) {
      this.isPause = false;
      this.player.play();
    }
  };

  pause = () => {
    if (this.player && !this.isPause && this.isInit) {
      this.isPause = true;
      this.player.pause();
    }
  };
}
