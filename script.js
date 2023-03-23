// complete the given function

function isPalindrome(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the original string to its reversed version
  return s === s.split('').reverse().join('');
}
module.exports = palindrome
