

function send(){

    let mess = document.querySelector("input").value;
  
    if(mess === ""){
  
      alert("write something:");
    }
    else{
      let inMain = document.querySelector(".main");
  
    let para = document.createElement("p");
   
    para.innerHTML = mess;
    inMain.appendChild(para);
   
    
    document.querySelector("input").value = ""
    }
  
  }