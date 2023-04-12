export class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.daysSince2001 = 0;
  }

  checkLeapYear() {
    if (this.year%400 === 0)  {
      return true;
    } else if ((this.year%4 === 0) && (this.year%100 !== 0))  {
      return true;
    } else {
      return false;
    }
  }

  convertDateToDays()  {
    // const currentMonth = this.month;
    const monthsArray = [1,2,3,4,5,6,7,8,9,10,11,12];
    const daysInMonthsArray = [31,28,31,30,31,30,31,31,30,31,30,31];
    for (let i=0; i < this.month-1; i++)  {
      this.daysSince2001 += daysInMonthsArray[i];
      console.log(this.daysSince2001);
    }
    this.daysSince2001+=this.day;
  }

}