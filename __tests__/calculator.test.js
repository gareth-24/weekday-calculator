import { Date } from "../src/js/calculator";

describe('Date', () => {
  let date;

  beforeEach(() => {
    date = new Date(2,1,2000);
  });

  test('should correctly create a date object with a day, month, and year', () => {
    expect(date.day).toEqual(2);
    expect(date.month).toEqual(1);
    expect(date.year).toEqual(2000);
  });

});