function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  receive word
  iterate through each letter of the word
  if iteration is the same with the letters starting from beginning of word as 
  it is as starting from the end of the word 
  then 'word' is a palindrome
*/

/*
  Add written explanation of your solution here
  receive the string and use the split method to split the 'word' into an array
  then use reverse() to reverse the array and then use join() to return the array
  to a string.
  check if word === to reversedWord, will return true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
