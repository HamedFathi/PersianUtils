interface JalaliDate {
  jalaliToGregorian(year: number, month: number, day: number): string[];
  checkDate(year: number, month: number, day: number): boolean;
  gregorianToJalali(year: number, month: number, day: number): string[];
}

interface Date {
  setJalaliFullYear(year: number, month: number, day: number): number;
  setJalaliMonth(month: number, day: number): number;
  setJalaliDate(day: number): number;
  getJalaliFullYear(): number;
  getJalaliMonth(): number;
  getJalaliDate(): number;
  getJalaliDay(): number;
  setJalaliUTCFullYear(year: number, month: number, day: number): number;
  setJalaliUTCMonth(month: number, day: number): number;
  setJalaliUTCDate(day: number): number;
  getJalaliUTCFullYear(): number;
  getJalaliUTCMonth(): number;
  getJalaliUTCDate(): number;
  getJalaliUTCDay(): number;
}

declare var JalaliDate: JalaliDate;
