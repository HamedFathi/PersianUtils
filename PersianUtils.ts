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
  // Declare Number Arrays in different locales
  private arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
  private persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
  private englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  private replaceAll(
    text: string,
    search: string,
    replacement: string
  ): string {
    return text.replace(new RegExp(search, "g"), replacement);
  }
  constructor(private text: string) {}

  public convertEnToFaNumbers(text: string): string {
    for (let i = 0; i < 10; i++) {
      text = this.replaceAll(
        text,
        this.englishNumbers[i],
        this.persianNumbers[i]
      );
    }
    return text;
  }
  public convertEnToArNumbers(text: string): string {
    for (let i = 0; i < 10; i++) {
      text = this.replaceAll(
        text,
        this.englishNumbers[i],
        this.arabicNumbers[i]
      );
    }
    return "";
  }
  public convertArToEnNumbers(text: string): string {
    for (let i = 0; i < 10; i++) {
      text = this.replaceAll(
        text,
        this.arabicNumbers[i],
        this.englishNumbers[i]
      );
    }
    return "";
  }
  public convertArToFaNumbers(text: string): string {
    for (let i = 0; i < 10; i++) {
      text = this.replaceAll(
        text,
        this.arabicNumbers[i],
        this.persianNumbers[i]
      );
    }
    return "";
  }
  public convertFaToEnNumbers(text: string): string {
    for (let i = 0; i < 10; i++) {
      text = this.replaceAll(
        text,
        this.persianNumbers[i],
        this.englishNumbers[i]
      );
    }
    return "";
  }
  public convertFaToArNumbers(text: string): string {
    for (let i = 0; i < 10; i++) {
      text = this.replaceAll(
        text,
        this.persianNumbers[i],
        this.arabicNumbers[i]
      );
    }
    return "";
  }
}
