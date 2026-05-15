// Sum of First 10 Even Numbers: Write a loop to calculate the sum of the first 10 even numbers (2, 4, 6,
//..., 20).

let sum = 0;

for (i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(sum);
