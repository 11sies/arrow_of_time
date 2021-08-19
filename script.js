// return the difference between two given times
function timeDiff(t1, t2){
  return Math.abs(t1.getTime() - t2.getTime());
}

// calculate progress percentage
function progress(start, end, curr) {
  let total = timeDiff(start, end);
  let prog = timeDiff(start, curr);
  let fraction = prog / total;
  let percentage = (fraction * 100).toFixed(2);
  return percentage + "%";
}

// calculate progress of the year
function yearProgress(){
  const year = new Date().getFullYear();
  const start = new Date(year, 0, 1, 0, 0, 0);    // beginning of year
  const end = new Date(year, 11, 31, 23, 59, 59); // end of year
  const curr = new Date();                        // now
  return progress(start, end, curr);
}

// find the number of days in a given month
function daysInMonth(year, month){
  return new Date(year, month + 1, 0).getDate();
}

// calculate progress of the month
function monthProgress(){
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let monthDays = daysInMonth(year, month);
  let start = new Date(year, month, 1, 0, 0, 0);    // beginning of month
  let end = new Date(year, month, monthDays, 23, 59, 59); // end of month
  let curr = new Date();
  return progress(start, end, curr);
}

// calculate progress of the day
function dayProgress(){
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDate();
  let start = new Date(year, month, day, 0, 0, 0);    // beginning of day
  let end = new Date(year, month, day, 23, 59, 59);    // end of day
  let curr = new Date();
  return progress(start, end, curr);
}

yp = yearProgress();
document.getElementsByClassName("yearProg")[0].innerHTML = yp;
document.getElementsByClassName("yearBar")[0].style.width = yp;

mp = monthProgress();
document.getElementsByClassName("monthProg")[0].innerHTML = mp;
document.getElementsByClassName("monthBar")[0].style.width = mp;

dp = dayProgress();
document.getElementsByClassName("dayProg")[0].innerHTML = dp;
document.getElementsByClassName("dayBar")[0].style.width = dp;