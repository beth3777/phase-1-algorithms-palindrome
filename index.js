function isPalindrome(word) {
  let left=0;
  let right=word.length-1;
  while (left<right){
    if(word[left]!==word[right])
    return false ;
    left++
    right--
  }
  return true
  // Write your algorithm here
}
isPalindrome('abba')
/* 
function isPalindrome(word)
//store the length of the string 
wordLength=word.length
//initialize the loop from 0to length/2
for i=o to wordLength/2
//check if the character at position i is the same as the character at position wordLength-i-1
if word[1]!==word[wordLength-1-i]
//if the charactersare not equal,then return false 
// if the loop ends with any returning false ,return true
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
