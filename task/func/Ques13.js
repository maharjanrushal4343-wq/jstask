//Write a function that uses a `for` loop to count and return the number of digits in a given positive
// integer.

function positiveInt(num) {
  let count = 0;
  let text = num.toString();

  for (i = 0; i < text.length; i++) {
    count++;
  }
  console.log(count);
}
positiveInt(3451234)