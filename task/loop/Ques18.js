// Print First 5 Prime Numbers: Write a loop to print the first 5 prime numbers.

let counts = 0;

for (num = 2; counts < 5; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
    counts++;
  }
}
