// Whats the msg printed and why?

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
// the message displayed is hi
// Only if the string value is empty or null string is validated to false. In our case
// the value of lemein is "0", so the message is "hi".