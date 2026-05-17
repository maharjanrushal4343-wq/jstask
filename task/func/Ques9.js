// Write a function that uses a `for` loop to calculate and return the sum of all even numbers between 1
// and 50.

function evenNumbers() {
  for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
evenNumbers();
