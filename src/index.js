import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Date } from './js/calculator';

function weekdayCalculator(day, month, year) {
  const newDate = new Date(day, month, year);
  newDate.convertDateToDays();
  newDate.findDayOfWeek();
  return newDate.dayOfTheWeek;
}

function handleFormSubmit(event) {
  event.preventDefault();
  document.getElementById("response").innerText = null;
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  let pTag = document.createElement("p");
  pTag.innerText = weekdayCalculator(day, month, year);
  document.getElementById("response").append(pTag);
}

document.querySelector("form").addEventListener("submit", handleFormSubmit);