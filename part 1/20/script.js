// Whats the msg printed and why? Guess you answer before running it.
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);


// Answer
// 1. The message displayed is hi.
// 2. Only if the string value is empty or null string is validated to false. In our case
//    the value of lemein is "0", so the message is "hi".
// 3. The value of 0 is false in binary terms, so hello will not get printed.