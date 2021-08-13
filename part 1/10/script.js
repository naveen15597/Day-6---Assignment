// Fix the code to welcome the Employee

let login = 'Employee';
let message = (login == 'Employee') ? ://error
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);



//Answer- fixed code -> Added 'Welcome' when login=='Employee'
let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

