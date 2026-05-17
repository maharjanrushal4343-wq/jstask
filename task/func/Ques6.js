// Write a function that uses a `for` loop to print the multiplication table of 5.

function multiplication(num) {
  for (i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplication(5);
