/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let Str1 = str1.replace(/\s/g, '').toLowerCase();
  let Str2 = str2.replace(/\s/g, '').toLowerCase();

  if (Str1.length!== Str2.length) {
    return false;
  }

  let counter = {};
  
  for (let letter of Str1) {
    counter[letter] = counter[letter]? counter[letter] + 1 : 1;
  }
  
  for (let item of Str2) {
    if (!counter[item]) {
      return false; 
    }
    counter[item] -= 1;
  }
  return true;
}

module.exports = isAnagram;
