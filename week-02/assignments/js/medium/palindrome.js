/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  str = str.split(/[ !,?.]/).join("").toLowerCase();
  
  let s = 0, e = str.length - 1;

  while(s < e) {
    if(str.charAt(s) !== str.charAt(e)) {
      return false;
    }
    s++;
    e--;
  }

  return true;
}
isPalindrome("Able, was I ere I saw Elba!")
module.exports = isPalindrome;
