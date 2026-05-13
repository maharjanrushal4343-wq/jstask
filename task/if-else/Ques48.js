//Day Check: Write an `if-else` statement to check if today is a weekday (Monday to Friday). Print
//"Weekday" if true, otherwise "Weekend."

let day = new Date().getDay();

console.log(day);

if (day >= 1 && day <= 5) {
  console.log("Weekday");
} else {
  console.log("Weekend");
}
