//I haven't uploaded the HTML file.
// if you want to run with input and button 
//..so make HTML file with input
//..field with id = "result"
// button id = "my button"
// and in end insert this js file path in script tag
let result = document.getElementById("result");

let button = document.getElementById("myButton");

let next = [];

button.addEventListener('click', ()=>{

//this is asynchronous 
async function fetchData(){
  
  response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.9.22/v1/currencies/usd.json")
  
  data = await response.json()
  //making data into JSON formet
  let myusd = data.usd
 
 //pushing every element to make an array //of them so that we can apply filter //method on that.
 
  for (evEl in myusd) {
    
    next.push(evEl)
 
}
//filtering element by first character 
let fill = next.filter((ele)=>{
  //converting character into lowercase 
 let lower = result.value.toLowerCase()
  return ele.charAt(0) === lower
})
 console.log(fill)
 
 // taking key and value in proper form 
 
 for (let prop of fill) {
   // Tab to edit
   console.log(prop," :",myusd[prop])
 }
}

//function call
 fetchData()
 // end of eventListener bracket :)
})
