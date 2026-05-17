// Write a function that uses a `for` loop to calculate and return the factorial of a given number `n`.

function factorial(n) {
  let number = 1;

  for (i = 1; i <= n; i++) {
    number = number * i;
  }
  return number;
}
console.log(factorial(5));
