// This is the program is information unlock after correct password

// let setPassword = 1234;

// let password = prompt("Enter your password to see Information: ");
// password = Number.parseInt(password);

// if (setPassword == password){
//   console.log("Correct password:");
  

 
//   let oneclick = prompt("Enter y to see the whole information please:");
//   if(oneclick == "y"){
//     alert("Here is your whole information because your all the password is correct:");
//   } 
// }
 
// else{
//   console.log("Error password is incorrect may be:");
// }

// console.log(typeof password);
// console.log('Your password is: ', password);



// let a = prompt('Hey yous your age?');
// a = Number.parseInt(a);
//  // converting the string to a number
// console.log(typeof a);

// let b = prompt('this is STARK: ');
// b = Number.parseInt(b);
// alert("These are number: ", b);

// for (let count = 0; count < 10; count++) {
//   if (count == 5) {
//     break;
//   }
//   alert(count);
// }

// this is the while loop 

// let a = 0;
// while(a<10){
//   alert(a);
//   a++;
// }

//now i while try the do while loop

// let i = 0;
// do{
//   alert(i*2);
//   i++;
// }
// while(i<11);

// now i am prastics the functions in javaScript which is very important in this language

// function greet(){
//   console.log("good morning STARK sir: ");
// }

// greet();

// function addition(a, b){
//   console.log("Answer: ", a+b);
// }

// addition(3,10);

// now making a small project of information protected by password and using loop 

const password = "1234hit";
var enterpass;

for(let counter = 4; counter >=1; counter--){
   if(counter == 1){
    alert("You have final attempt Enter care fully you'll loose all the data: \n");
  }
  
  enterpass = prompt("Enter your password: ");
  
  if(password == enterpass){
    console.log("Your passowrd is correct: ");

    var yes = prompt("Enter 'y' for yes and 'N' for no");
    if(yes == "y"){
      console.log("Name: Hitlar gautam");
      console.log("Father name: Hansraj singh")
      console.log("Class: BCA");
      console.log("Semester: 3rd");
      break;
    }
    else if(yes == "n"){
      alert("OK You dont want to see the information: Thankyou");
      break;
    }
    
  }
  else{
    console.log("Incorrect password:");
  }
  
   
  alert("You have: ", counter-1, " attempts:");

}
