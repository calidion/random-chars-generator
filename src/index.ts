import * as iconv from "iconv-lite";
export class RandomChar {
  /**
   * @param locale String
   *
   * locales can be found here: http://www.lingoes.net/en/translator/langcode.htm
   * @param case String [upper|lower]
   */
  public static generate(locale: string = "", charCase: string = ""): string {
    const rc = new RandomChar();
    switch (locale) {
      case "zh":
      case "zh-CN":
      case "zh-SG":
        return rc.simplified();
      case "zh-TW":
      case "zh-HK":
      case "zh-MO":
        return rc.traditional();
      case "en":
      case "en-AU":
      case "en-CA":
      case "en-CB":
      case "en-GB":
      case "en-IE":
      case "en-JM":
      case "en-NZ":
      case "en-PH":
      case "en-TT":
      case "en-ZA":
      case "en-ZW":
      case "en-US":
        return rc.alpha(charCase);
      default:
        throw new Error("Locale Not Supported!");
    }
  }

  public alpha(charCase: string) {
    let a;
    let z;
    if (charCase === "upper") {
      a = "a".charCodeAt(0);
      z = "z".charCodeAt(0);
    } else {
      a = "A".charCodeAt(0);
      z = "Z".charCodeAt(0);
    }

    const variant = Math.floor(Math.random() * (z - a));

    return String.fromCharCode(a + variant);
  }

  public simplified() {
    const gb = this.getGB2312();
    return iconv.decode(Buffer.from(gb), "GB2312");
  }

  public traditional() {
    const gb = this.getBIG5();
    return iconv.decode(Buffer.from(gb), "BIG5");
  }

  public all() {
    return String.fromCharCode(this.range());
  }

  private range(MAX = 0x9fff, MIN = 0x4e00) {
    const DIFF = MAX - MIN;
    return parseInt((Math.random() * DIFF).toFixed(0), 10) + MIN;
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

  private getBIG5() {
    const index = Math.floor(Math.random() * 100) % 2;
    if (index === 1) {
      return this.getBIG5Normal();
    }
    return this.getBIG5Low();
  }

  private getBIG5Normal() {
    const HMAX = 0xc6;
    const HMIN = 0xa4;
    const LMAX = 0x7e;
    const LMIN = 0x40;
    const high = this.range(HMAX, HMIN);
    const low = this.range(LMAX, LMIN);
    return [high, low];
  }

  private getBIG5Low() {
    const HMAX = 0xf9;
    const HMIN = 0xc9;
    const LMAX = 0xd5;
    const LMIN = 0x40;
    const high = this.range(HMAX, HMIN);
    const low = this.range(LMAX, LMIN);
    return [high, low];
  }
}
