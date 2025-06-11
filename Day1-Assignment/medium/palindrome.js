/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

  function isPalindrome(str) {
  const str1 = str.toLowerCase();
  let reversed = '';

  for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
  }

  return str1 === reversed;
}
module.exports = isPalindrome;

console.log(isPalindrome("Nan"));      
console.log(isPalindrome("malayalaM"));    
console.log(isPalindrome("Hello"));    

  

