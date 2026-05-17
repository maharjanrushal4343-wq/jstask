//Write a function that uses a `for` loop to print the first 10 numbers in the Fibonacci sequence.

function fibonacciNumber() {
  let a = 0;
  let b = 1;
  for (i = 0; i <= 10; i++) {
      console.log(a);
      let next = a + b;
      a = b;
      b = next;
  }
}
fibonacciNumber()
