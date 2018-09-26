/* tslint:disable */
export class PersianUtils {

    private arabicNumbers: Array<string> = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
    private persianNumbers: Array<string> = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
    private englishNumbers: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    private replaceAll(text: string, search: string, replacement: string): string {
        return text.replace(new RegExp(search, 'g'), replacement);
    }
    constructor(private text: string) {

    }



}