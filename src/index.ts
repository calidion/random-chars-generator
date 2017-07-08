import * as iconv from "iconv-lite";
export class RandomChar {
  constructor() {
  }
  private range(MAX = 0x9fff, MIN = 0x4e00) {
    const DIFF = MAX - MIN;
    return parseInt((Math.random() * DIFF).toFixed(0)) + MIN;
  }
  private getGB2312() {
    const HMAX = 0xf7;
    const HMIN = 0xb0;
    const LMAX = 0xfe;
    const LMIN = 0xa1;
    const high = this.range(HMAX, HMIN);
    const low = this.range(LMAX, LMIN);
    return [high, low];
  }
  public simplified() {
    const gb = this.getGB2312();
    return iconv.decode(new Buffer(gb), "GB2312");
  }
  public all() {
    return String.fromCharCode(this.range());
  }
}
