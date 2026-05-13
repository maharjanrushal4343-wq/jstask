//Prime Check: Write an `if-else` statement to check if a number is greater than 1 and divisible only by
//1 and itself. Print "Prime" if true, otherwise "Not prime."

let num = 89;

if (num > 1) {
  if (num === 2 || num === 3) {
    console.log("Prime");
  } else if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    console.log("Not a prime");
  } else {
    console.log("Prime");
  }
}
