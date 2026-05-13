//Check Square Number: Write an `if-else` statement to check if a number is a perfect square. Print
//"Perfect square" if true, otherwise "Not a perfect square."

let num = 16;
let sqr = Math.sqrt(num);

if (Number.isInteger(sqr)) {
  console.log("Perfect square");
} else {
  console.log("Not a perfect square");
}
