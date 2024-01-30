function prime(num) {
  if (num < 2) {
    return 'not a prime';
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 'not a prime';
    }
  }
  return 'prime';
}
console.log(prime(7));
