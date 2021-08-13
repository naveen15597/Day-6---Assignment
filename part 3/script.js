// 1.Fix the code to get the largest of three.
// Answers:
// a.Removed decalreation since it is not required.
aa = (f,s,t) => {
//  let f,s,t;      //a.
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);

// 2.Fix the code to Sum of the digits present in the number
// Answer:
// a.changed sum value to 0.
// b.converted n to string.
// c.typecasted n value and added the digits.
let n = 123;
console.log(n.toString())
console.log(add(n));
function add(n)
{
    // let sum = 10; 
    let sum = 0;        //a.
    for(var i=0;i<n.toString().length;i++){ //b.
    sum+=+n.toString()[i];  //c.
}
 return sum;
}

// 3.Fix the code to Sum of all numbers using IIFE function
// Answer:
// a.Removed semicolon in forloop.
const arr = [9,8,5,6,4,3,2,1];
(function() {
    let sum = 0;
    //  for (var i = 0; i < arr.length; i++);{  
    for (var i = 0; i < arr.length; i++){       //a.
    sum += arr[i];
    }
    console.log(sum);
    return sum;
})();

// 4.Fix the code to gen Title caps.
// Answer:
// a.Removed equal to(=) in the for loop condition.
// b.Passed arr1 value to the function;
var arr1 = ['guvi', 'geek', 'zen', 'fullstack'];
var ano = function(arro) {
    // for (var i = 0; i <= arro.length; i++)   
    for (var i = 0; i < arro.length; i++) {     //a.
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
}
ano(arr1);  //b.

// 5.Fix the code to return the Prime numbers
// Answer:
// a.added num!=i condition.
// b.changed value to false.
// c.changed value to true;
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
    for(let i=2;i<=num;i++){
        if(num%i===0 && num!=i) //a.
        {
            // return true;
            return false;   //b.
        }
    }
    // return num===1;
    return true;    //c.
});
console.log(myPrime);

// 6.Fix the code to sum the number in that array
// Answer:
// No fixing needed.
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) => a + b;
const sum1 = num.reduce(sum)
console.log("Reduce dunction",sum1);

// 7.Fix the code to rotate an array by k times and return rotated array using IIFE function
// Answer:
// 
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var k = 3;
// k = arr.length % k;
k =  k % arr.length;
(function() {
//  arr2 = {};
 out = arr//.slice(0, arr2.length);
 var count = out.length;
 for (var i = 0; i < out.length; i++) {
 out[count] = arr2[i];
 count += 1;
 }
 console.log(out);
})();

// 8.Fix the code to gen Title caps.
// Answer:
// a. Removed equal to from for loop.
// b. changed value arr3[0][i] toarr3[i][0].
var arr3 = ['guvi', 'geek', 'zen', 'fullstack'];
(function() {
    // for (var i = 0; i <= arr3.length; i++) {

    for (var i = 0; i < arr3.length; i++) {  //a.
  //console.log(arr3[0][i].toUpperCase() + arr[i].substr(1));

    console.log(arr3[i][0].toUpperCase() + arr3[i].substr(1));  //b.
 }
})();

// 9.print all odd numbers in an array using IIFE function
// Answer:
// a. changed === to !=.
var arr4 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
    for (var i = 0; i < arr4.length; i++) {
        // if (arr4[i] % 2 === 0) {
        if (arr4[i] % 2 != 0) {        //a.
            console.log(arr4[i]);
        }
    }
})();

// 10.Fix the code to reverse.
// Answer:
// a. Changed split condition => (" ") to ("").
(function(str){
//  str1 = str.split(" ").reverse().join("");
str1 = str.split("").reverse().join("");        //a.
 console.log(str1); 
})("abcd")

// 11.Fix the code to remove duplicates.
// Answer:
// a. Changed newArr dclaration outside the forloop.
var res = function(arr){
    newArr = [];    //a.
    for(var i=0; i < arr.length; i++){ 
        // newArr = [];
        if(newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
        } 
    }
    console.log(newArr)
}
res(["guvi","geek","guvi","duplicate","geeK"])

// 12.Fix the code to give the below output:
// Expected Output:
// [
// {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
// {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
// ]
// Answers:
// a.Declared new_object inside first while loop.

var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]
console.log("array length",array.length);
while(array.length!=0)
{
 var outer_remove = array.shift();
 var new_object=[];             //a.
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)
}
console.log(final);

// 13.Fix the code to give the below output:
// Sum of odd numbers in an array
// Answer:
// a. declared summ=0;
// b. added c value to summ if it is odd.
// c. returned summ value.

var as=[12,34,5,6,2,56,6,2,1,5];
let summ=0;     //a.
var s=as.reduce(function(a,c){
    if(c%2!=0)
    {        
        summ+=c;        //b.
        return summ;    //c.
    }
    return a;
});
console.log(s);


