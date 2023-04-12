import { Date } from "../src/js/calculator";

describe('Date', () => {
  let date;

  beforeEach(() => {
    date = new Date(1,1,2001);
  });

  test('should correctly create a date object with a day, month, and year', () => {
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(1);
    expect(date.year).toEqual(2001);
  });

  test('should return true if the date occurs on a leap year', () =>  {
    let dateInLeapYear = new Date (1,1,2000); //this leap year is divisible by 400
    let dateInLeapYear2 = new Date (1,1,2004); //divisible by 4 but not by 100
    let dateNotInLeapYear = new Date (1,1,1900); //divisible by 4 and by 100, so not a leap year
    expect(dateInLeapYear.checkLeapYear()).toEqual(true);
    expect(date.checkLeapYear()).toEqual(false);
    expect(dateInLeapYear2.checkLeapYear()).toEqual(true);
    expect(dateNotInLeapYear.checkLeapYear()).toEqual(false);
  });

  test('should correctly return the number of days the date is away from January 1, 2001', () => {
    let futureDate = new Date(5,3,2001);
    let pastDate = new Date(25,12,2000);
    futureDate.convertDateToDays();
    pastDate.convertDateToDays();
    expect(futureDate.daysSince2001).toEqual(63);
    expect(pastDate.daysSince2001).toEqual(6);
  });

  test('should correctly return the day of the week for the given date in 2001', () => {
    let maxBDay = new Date(23,8,2001);
    maxBDay.convertDateToDays();
    maxBDay.findDayOfWeek();
    expect(maxBDay.dayOfTheWeek).toEqual("thursday");
  })

  test('should correctly return the day of the week for a date in 2002', () => {
    let futureDate = new Date(5,3,2002);
    futureDate.convertDateToDays();
    expect(futureDate.daysSince2001).toEqual(428);
  })

});