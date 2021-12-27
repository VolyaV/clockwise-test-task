const DAYS_IN_YEAR = 12 * 28; // 336
const DAYS_IN_INTERCELARY_YEAR = DAYS_IN_YEAR + 1; // 337
 
const WEEK_DAYS = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']; // 01.01.01  is friday
 
const FIRST_DAY = 1;
 
const getDay = (day, month, year) => {
  let daysByEachMonth = 0;
 
  let currentMonth = 1;
  let currentYear = 1;
 
  while (currentYear <= year) {
    if (currentYear === year && currentMonth === month) {
      break;
    }
 
    if (isItercelaryYear(currentYear) && currentMonth === 2) {
      daysByEachMonth += 29;
    } else {
      daysByEachMonth += 28;
    }
 
    if (currentMonth === 12) {
      currentYear += 1;
    }
 
    currentMonth = (currentMonth % 12) + 1;
  }
 
  const daysFromStart = day - FIRST_DAY + daysByEachMonth;
 
  return WEEK_DAYS[daysFromStart % 7];
};
 
console.log(getDay(1, 1, 1)); //Day of birth planet Tempos
console.log(getDay(10, 1, 1001)); //Actual day on Tempos
 
 
function isItercelaryYear(year) {
  if (year % 100 === 0) {
    return year % 500 === 0;
  } else {
    return year % 5 === 0;
  }
}