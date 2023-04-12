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
    let dateInLeapYear = new Date (1,1,2000);
    expect(dateInLeapYear.checkLeapYear()).toEqual(true);
    expect(date.checkLeapYear()).toEqual(false);
  })
});