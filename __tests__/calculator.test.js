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

  test('should correctly return the number of days the date is away from January 1, 2001', () => {
    let futureDate = new Date(5,3,2001);
    let pastDate = new Date(25,12,2000);
    futureDate.convertDateToDays();
    pastDate.convertDateToDays();
    expect(futureDate.daysSince2001).toEqual(63);
    expect(pastDate.daysSince2001).toEqual(7);
  });

  test('should correctly return the day of the week for the given date in 2001', () => {
    let maxBDay = new Date(23,8,2001);
    maxBDay.convertDateToDays();
    maxBDay.findDayOfWeek();
    expect(maxBDay.dayOfTheWeek).toEqual("thursday");
  });

  test('should correctly return the number of days the date is away from January 1, 2001 for a date after 2001', () => {
    let futureDate = new Date(5,3,2002);
    let wayFutureDate = new Date(5,3,2012); 
    wayFutureDate.convertDateToDays();
    futureDate.convertDateToDays();
    wayFutureDate.findDayOfWeek();
    expect(futureDate.daysSince2001).toEqual(428);
    expect(wayFutureDate.daysSince2001).toEqual(4081);
    expect(wayFutureDate.dayOfTheWeek).toEqual("monday");
  });

  test('should correctly return the day of the week of a date before 2001', () => {
    let pastDate = new Date(17,12,2000);
    let wayPastDate = new Date(5,3,1999);
    let wayPastDate2 = new Date(4,3,1999);
    let wayPastDate3 = new Date(3,3,1999);
    let wayPastDate4 = new Date(2,3,1999);
    let wayPastDate5 = new Date(1,3,1999);
    let wayPastDate6 = new Date(6,3,1999);
    pastDate.convertDateToDays();
    wayPastDate.convertDateToDays();
    wayPastDate2.convertDateToDays();
    wayPastDate3.convertDateToDays();
    wayPastDate4.convertDateToDays();
    wayPastDate5.convertDateToDays();
    wayPastDate6.convertDateToDays();
    pastDate.findDayOfWeek();
    wayPastDate.findDayOfWeek();
    wayPastDate2.findDayOfWeek();
    wayPastDate3.findDayOfWeek();
    wayPastDate4.findDayOfWeek();
    wayPastDate5.findDayOfWeek();
    wayPastDate6.findDayOfWeek();
    expect(pastDate.dayOfTheWeek).toEqual("sunday");
    expect(wayPastDate.dayOfTheWeek).toEqual("friday");
    expect(wayPastDate2.dayOfTheWeek).toEqual("thursday");
    expect(wayPastDate3.dayOfTheWeek).toEqual("wednesday");
    expect(wayPastDate4.dayOfTheWeek).toEqual("tuesday");
    expect(wayPastDate5.dayOfTheWeek).toEqual("monday");
    expect(wayPastDate6.dayOfTheWeek).toEqual("saturday");
  });
});