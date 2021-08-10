function isPalindrome(str) {
  const revString = str.split('').reverse().join('');
  // if (str !== revString) {
  //   console.log(`${str} is a NOT a palindrome`);
  // } else {
  //   console.log(`${str} is a palindrome`);
  // }
  return revString === str;
}

console.log(isPalindrome('racecar'));
