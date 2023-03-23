// complete the given function

function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Compare string to the reversed version of itself
  return str === str.split('').reverse().join('');
}

module.exports = palindrome
