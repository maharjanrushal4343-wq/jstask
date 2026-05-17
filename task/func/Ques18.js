// Write a function that uses a `for` loop to print the first 10 even numbers.

function evenNumber() {
  for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenNumber();
