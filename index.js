
function isPalindrome(word) {
  // Reverse the string
  const reversedWord = word.split('').reverse().join('');
  
  // Check if the original word is the same as the reversed word
  return word === reversedWord;
}

/* 
  Add your pseudocode here:
  1. Convert the string into an array.
  2. Reverse the array.
  3. Convert the reversed array back into a string.
  4. Compare the original string with the reversed string.
  5. Return true if they are the same, else return false.
*/

/*
  Written explanation:
  The function checks if a given word is a palindrome by reversing the string
  and comparing the reversed version with the original string. If they are 
  equal, the function returns true, otherwise false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
