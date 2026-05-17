// Write a function that uses a `for` loop to print all even numbers between 1 and 20.

function evenNumbers() {
  for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenNumbers()
