export class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.daysSince2001 = 0;
    this.dayOfTheWeek = "";
  }

  convertDateToDays()  {

    const checkLeapYear = (year) => {
      if (year%400 === 0)  {
        return true;
      } else if ((year%4 === 0) && (year%100 !== 0))  {
        return true;
      } else {
        return false;
      }
    };
    let daysInMonthsArray = [];
    // const currentMonth = this.month;
    // const monthsArray = [1,2,3,4,5,6,7,8,9,10,11,12];
    if (this.year >= 2001)  {
      //const extraDaysBetweenYears = (this.year - 2001) * 365;
      for (let year = 2001; year < this.year; year ++)  {
        if (checkLeapYear(year) === false) {
          this.daysSince2001 += 365;
        } else {
          this.daysSince2001 += 366;
        }
      }
      
      if (checkLeapYear(this.year) === true) {
        daysInMonthsArray = [31,29,31,30,31,30,31,31,30,31,30,31];
      } else {
        daysInMonthsArray = [31,28,31,30,31,30,31,31,30,31,30,31];
      }
      for (let i=0; i < this.month-1; i++)  {
        this.daysSince2001 += daysInMonthsArray[i];
      }
      this.daysSince2001+=this.day;
      this.daysSince2001 -= 1;
    } else {
    //For dates before 2001
      for (let year = 2000; year > this.year; year --){
        if (checkLeapYear(year) === false) {
          this.daysSince2001 += 365;
        } else {
          this.daysSince2001 += 366;
        }
      }
      if (checkLeapYear(this.year) === true) {
        daysInMonthsArray = [31,29,31,30,31,30,31,31,30,31,30,31];
        
      } else {
        daysInMonthsArray = [31,28,31,30,31,30,31,31,30,31,30,31];
      }
      for (let i = 11; i > this.month-1; i--) {
        this.daysSince2001 += daysInMonthsArray[i];
        
      }
      this.daysSince2001 = (this.daysSince2001 + (daysInMonthsArray[this.month-1])-this.day + 1);
    }
  } 

  findDayOfWeek() {
    const daysRemainder = this.daysSince2001%7;
    if (this.year >= 2001) {
      if (daysRemainder === 0) {
        this.dayOfTheWeek = "monday";
      } else if (daysRemainder === 1) {
        this.dayOfTheWeek = "tuesday";
      } else if (daysRemainder === 2) {
        this.dayOfTheWeek = "wednesday";
      } else if (daysRemainder === 3) {
        this.dayOfTheWeek = "thursday";
      } else if (daysRemainder === 4) {
        this.dayOfTheWeek = "friday";
      } else if (daysRemainder === 5) {
        this.dayOfTheWeek = "saturday";
      } else {
        this.dayOfTheWeek = "sunday";
      } 
    } else {
      if (daysRemainder === 0) {
        this.dayOfTheWeek = "monday";
      } else if (daysRemainder === 1) {
        this.dayOfTheWeek = "sunday";
      } else if (daysRemainder === 2) {
        this.dayOfTheWeek = "saturday";
      } else if (daysRemainder === 3) {
        this.dayOfTheWeek = "friday";
      } else if (daysRemainder === 4) {
        this.dayOfTheWeek = "thursday";
      } else if (daysRemainder === 5) {
        this.dayOfTheWeek = "wednesday";
      } else {
        this.dayOfTheWeek = "tuesday";
      }
    }
  }


}