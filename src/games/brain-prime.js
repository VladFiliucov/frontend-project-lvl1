const isPrime = num => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}
