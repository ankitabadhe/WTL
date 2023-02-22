const prompt = require('prompt-sync')();
const n = prompt('Enter integer here:');
for (let i = 1; i <= 10; ++i)
console.log(n + " * " + i +
    " = " + n * i);
function checkPalindrome(str) {  
    const len = str.length;    
    for (let i = 0; i < len / 2; i++) {  
        if (str[i] !== str[len - 1 - i]) {  
          //alert( 'It is not palindrome'); 
          console.log('It is not palindrome');
          return;
        }  
    }  
//alert( 'It is a palindrome'); 
    console.log("It is a palindrome");  
}  
let alert = require('alert'); 
 
const string = prompt('Enter a string or number to check for Palindrome: ');   
checkPalindrome(string);  
function checkLeapYear(year) {
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }
}
const year = prompt('Enter a year:');
checkLeapYear(year);
