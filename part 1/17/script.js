// Change the code to print all the gifts

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${'gifts[i]'} and added a bow!'); //Error in this line.
}


// Answer

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ',gifts[i],' and added a bow!');
}