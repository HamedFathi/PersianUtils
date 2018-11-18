/* tslint:disable */

export interface BaseNumber {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
  seven: string;
  eight: string;
  night: string;
  zero: string;
}

export class PersianUtils {
  private arNumbers: BaseNumber = {
    one: "١",
    two: "٢",
    three: "٣",
    four: "٤",
    five: "٥",
    six: "٦",
    seven: "٧",
    eight: "٨",
    night: "٩",
    zero: "٠"
  };
  private faNumbers: BaseNumber = {
    one: "۱",
    two: "۲",
    three: "۳",
    four: "۴",
    five: "۵",
    six: "۶",
    seven: "۷",
    eight: "۸",
    night: "۹",
    zero: "۰"
  };
  private enNumbers: BaseNumber = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    night: "9",
    zero: "0"
  };
  private replaceAll(
    text: string,
    search: string,
    replacement: string
  ): string {
    return text.replace(new RegExp(search, "g"), replacement);
  }
  constructor(private text: string) {}

  public convertEnToFaNumbers(text: string): string {
    /*for (let index = 0; index < 10; index++) {
           Object.values() 

    }*/

    
    return "";
  }
  public convertEnToArNumbers(text: string): string {
    return "";
  }
  public convertArToEnNumbers(text: string): string {
    return "";
  }
  public convertArToFaNumbers(text: string): string {
    return "";
  }
  public convertFaToEnNumbers(text: string): string {
    return "";
  }
  public convertFaToArNumbers(text: string): string {
    return "";
  }
}
