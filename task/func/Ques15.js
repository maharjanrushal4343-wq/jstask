// Write a function that uses a `for` loop to calculate and return the sum of the squares of the first `n`
// natural numbers.

function sumOfSquares(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i * i;
  }
  console.log(sum);
}
sumOfSquares(5);
