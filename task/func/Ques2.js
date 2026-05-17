// Write a function that uses a `for` loop to calculate and return the sum of the first `n` natural numbers.

function natural(n) {
  let sum = 0;
  for (i = 0; i < n; i++) {
    sum += i;
  }
  return sum
}
console.log(natural(20));
