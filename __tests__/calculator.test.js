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
});