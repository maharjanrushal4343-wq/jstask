//Check Month: Write an `if-else` statement to check if a month number corresponds to a month with
//31 days. Print "31 days" if true, otherwise "Not 31 days."

let month = 8;

if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  console.log("31 days");
} else {
  console.log("Not 31 days");
}
