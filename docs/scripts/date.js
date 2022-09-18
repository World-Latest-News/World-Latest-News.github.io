date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
dt = date.getDate();
gmt = date.toGMTString();
day = date.getDay();
if (day == 0) {
  day = "Sunday";
} else if (day == 1) {
  day = "Monday";
} else if (day == 2) {
  day = "Tuesday";
} else if (day == 3) {
  day = "Wednesday";
} else if (day == 4) {
  day = "Thursday";
} else if (day == 5) {
  day = "Friday";
} else if (day == 6) {
  day = "Saturday";
}
if (month == 1) {
  month = "January";
} else if (month == 2) {
  month = "February";
} else if (month == 3) {
  month = "March";
} else if (month == 4) {
  month = "April";
} else if (month == 5) {
  month = "May";
} else if (month == 6) {
  month = "June";
} else if (month == 7) {
  month = "July";
} else if (month == 8) {
  month = "August";
} else if (month == 9) {
  month = "September";
} else if (month == 10) {
  month = "October";
} else if (month == 11) {
  month = "November";
} else if (month == 12) {
  month = "December";
}
var country = date.toString().split("(")[1].split(")")[0];

document.getElementById("current_date").innerHTML =
  day + ", " + month + " " + dt + ", " + year + " ("+country +")";