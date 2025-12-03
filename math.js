function verifyNumbers(n1, n2, n3, n4) {
  const nums = [n1, n2, n3, n4];

  // sum must equal 50
  if (nums.reduce((a, b) => a + b, 0) !== 50) return false;

  // at least two odd numbers
  const oddCount = nums.filter(n => n % 2 !== 0).length;
  if (oddCount < 2) return false;

  // no number greater than 25
  if (nums.some(n => n > 25)) return false;

  // all unique
  const unique = new Set(nums);
  if (unique.size !== nums.length) return false;

  return true;
}

// Examples
console.log(verifyNumbers(11, 13, 12, 14)); // true
console.log(verifyNumbers(25, 25, 0, 0));   // false
