// 1.Write a code to print the numbers in the array
// Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i <= 10; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);


// 2.Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = numsArr[0]+"";
 
for (var i = 1; i < 11; i++) {
 new_string += ',' + numsArr[i]; 
}
console.log(new_string);

// 3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1
var new_string = numsArr[numsArr.length-1]+"";
 
for (var i = 9; i >= 0; i-- ) {
 new_string +=" "+numsArr[i]  
}
console.log(new_string);

// 4.Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr1[i] %2 == 0 )
 {
 numsArr1[i] = "even"
 }
}
console.log(numsArr1);

// 5.Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )
 {
 numsArr2[i] = "even";
 }
}
console.log(numsArr2);

// 6.Write a code to add all the numbers in the array
// Output: 66
var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 sum += numsArr3[i];
}
console.log(sum);

// 7.Write a code to add the even numbers only
// Output: 30
var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i <10; i++) {
 if(numsArr4[i]%2==0)
 sum1 += numsArr4[i];
}
console.log(sum1);

// 8.Write a code to add the even numbers and subract the odd numbers
// Output: 94
var numsArr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr5[i]%2==0)
 {
 sum += numsArr5[i];
 }
 else
 {
 sum -= numsArr5[i]
 }
}
console.log(sum);

// 9.Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]
var numsArr6 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (let i = 0; i < numsArr6.length; i++) {
    for(let j=0;j < numsArr6[i].length; j++)
    {
        console.log(numsArr6[i][j]);
    } 
}

// 10.Write a code to print elements in the inner arrays
// Output: 1234567891011
var numsArr7 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (let i = 0; i < numsArr7.length; i++) {
 let inner_array = numsArr7[i];
 for(let j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);

// 11.Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr8 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (let i = 0; i < numsArr8.length; i++) {
 let inner_array = numsArr8[i];
 for(let j = 0 ; j < inner_array.length;j++ )
      if(numsArr8[i][j] %2 == 0 )
      {
         numsArr8[i][j] = "even";
       }
}
console.log(numsArr8);

// 12.Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr9 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
let str="";
for (let i = numsArr9.length- 1; i>=0; i--) {
 let inner_array = numsArr9[i];
 for(let j = inner_array.length- 1; j >= 0 ;j-- )
     str +=numsArr9[i][j]+" "
}
console.log(str);

// 13.Write a code to add elements in the inner arrays based on odd or even values
Output:
// 36
// 30
var numsArr10 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr10.length; i++) {
 var inner_array = numsArr10[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr10[i][j]%2!=0)
 {
 sum_odd += numsArr10[i][j];
 }
 else
 {
 sum_even += numsArr10[i][j];
 }
}
}
console.log(sum_odd);
console.log(sum_even);
