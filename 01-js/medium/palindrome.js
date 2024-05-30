/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var str=str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  var str1=str.split('').reverse().join('');

  // for(let i=str.length-1;i>=0;i--){
  //   str1 +=str.charAt(i)
  // }
  
  if(str1===str){
    return true
  }
    return false
}

module.exports = isPalindrome;
