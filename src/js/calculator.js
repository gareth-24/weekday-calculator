export class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  checkLeapYear() {
    if (this.year%400 === 0)  {
      return true;
    } else {
      return false;
    }
  }
  
}