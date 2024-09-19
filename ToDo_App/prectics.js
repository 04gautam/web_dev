let myInput = document.getElementById('myInput')
let myText = document.getElementById('text')
let myButton = document.getElementById('myButton')
let parent = document.getElementById('parent')
let counter = 0
myButton.addEventListener('click',()=>{
  // myText.innerHTML = myInput.value
  
  if(myInput.value.length === 0){
    alert('Write something: ')
  }
  
  else{
         counter+=1
let newButton = document.createElement('p')
newButton.innerHTML = `${counter}: ${myInput.value} `

newButton.id = 'delete'

parent.appendChild(newButton)
  
  newButton.addEventListener('dblclick', ()=>{
    
   newButton.remove(newButton)
  })
  myInput.value = ""
}

  }
  


)