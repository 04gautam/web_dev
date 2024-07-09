
let runCount = 0;
let wickets = 0;
let ball = 0;
let over = 0;
let extra = 0;
let six = 0;
let four = 0;

let scoreArray = [];


function dark(){
    let el = document.querySelector("body",);
    let ell = document.querySelector(".scoreContainer")
    ell.classList.toggle("darkMode");
    el.classList.toggle("darkMode");
}



function show(){
    document.getElementById("over").innerHTML = `Overs: ${over} Ball: ${ball}`;
    // let el = document.getElementById('display');
   
}

function overBall(){  
    if(ball > 5){
        over+=1;
        ball = 0;

    }
}
function countRun(){
    document.querySelector("#runCount").innerHTML = `Runs: ${runCount}`;

    let el = document.getElementById("realScore");
        el.innerHTML = `${runCount} -  ${wickets } (${over} . ${ball})`;


}



document.getElementById("out").onclick = function(){
    wickets+=1;

    if(wickets <= 10){
        ball+=1;
        overBall();
        document.querySelector("#wickets").innerHTML = `Wickets: ${wickets}`

        let el = document.getElementById("realScore");
        el.innerHTML = `${runCount} -  ${wickets } (${over} . ${ball})`;

        let theArray = document.getElementById('parent');
        let newEl = document.createElement('p');
        newEl.innerHTML =  `W (${over}.${ball}) `;
        theArray.appendChild(newEl);

        show()
           
    }

    else{
        document.querySelector("#wickets").innerHTML = "Sorry! all players are out";


    }
}


document.getElementById("extra").onclick = function(){

    if(wickets <= 10){ 
    runCount+=1;
    ball+=0;

    scoreArray.push(1);

    overBall();
    countRun();
    extra+=1;
    document.getElementById("extraRuns").innerHTML = `Extra runs: ${extra}`

    let theArray = document.getElementById('parent');
    let newEl = document.createElement('p');
    newEl.innerHTML = "Extra:1";
    theArray.appendChild(newEl);

    show();
 }
 else{
    document.querySelector("#wickets").innerHTML = "Sorry! all players are out";

 }
}

document.getElementById("6").onclick = function(){
    if(wickets <= 10){
        runCount+=6;
        ball+=1;  
        six +=1

    scoreArray.push(6);


        overBall();
        countRun();

        let countSix = document.getElementById('sixFour');
        countSix.innerHTML = `Four: ${four} Six: ${six}`;

        let theArray = document.getElementById('parent');
        let newEl = document.createElement('p');
        newEl.innerHTML = `6 (${over}.${ball}) `;
        theArray.appendChild(newEl);

        show();

        // let el = document.createElement('p');
        // el = 6;
        // let el2 = document.querySelector('')  
        
        
    }
    else{
        document.querySelector("#wickets").innerHTML = "Sorry! all players are out";

    }

}

document.getElementById("4").onclick = function(){
    if(wickets <= 10){
        runCount+=4;
        ball+=1;  
        four +=1;

        scoreArray.push(4);

        overBall();
        countRun();

        let countFour = document.getElementById('sixFour');
        countFour.innerHTML = `Four: ${four} Six: ${six}`;

        let theArray = document.getElementById('parent');
        let newEl = document.createElement('p');
        newEl.innerHTML = `4 (${over}.${ball}) `;
        theArray.appendChild(newEl);

        show();
        
    }
    else{
        document.querySelector("#wickets").innerHTML = "Sorry! all players are out";

    }
}

document.getElementById("3").onclick = function(){
    if(wickets <= 10){
        runCount+=3;
        ball+=1;  

        scoreArray.push(3);
        
        overBall();
        countRun();

        let theArray = document.getElementById('parent');
        let newEl = document.createElement('p');
        newEl.innerHTML = `3 (${over}.${ball}) `;
        theArray.appendChild(newEl);

        show();
        
    }
    else{
        document.querySelector("#wickets").innerHTML = "Sorry! all players are out";

    }
}


document.getElementById("0").onclick = function(){
    if(wickets <= 10){
        ball+=1;  
        runCount+=0;

        scoreArray.push(0);
        // console.log(scoreArray);

        overBall();
        countRun();

        let theArray = document.getElementById('parent');
        let newEl = document.createElement('p');
        newEl.innerHTML = `0 (${over}.${ball}) `;
        theArray.appendChild(newEl);

        show();
        
    } else{
        document.querySelector("#wickets").innerHTML = "Sorry! all players are out";

    }

}

document.getElementById("1").onclick = function(){
   
    if(wickets <= 10){
       
        runCount+=1;
        ball+=1;  

        scoreArray.push(1);

        overBall();
        countRun();
        show();
        
        let theArray = document.getElementById('parent');
        let newEl = document.createElement('p');
        newEl.innerHTML = `1 (${over}.${ball}) `;
        theArray.appendChild(newEl); 
        
        
    }
    else{
        document.querySelector("#wickets").innerHTML = "Sorry! all players are out";

    }

}




document.getElementById("2").onclick = function(){
    
    if(wickets <= 10){
        runCount+=2;
        ball+=1;  

        scoreArray.push(2);
        // scoreArray[scoreArray.length-1]
        // console.log(scoreArray);

        overBall();
        countRun();

        let theArray = document.getElementById('parent');
        let newEl = document.createElement('p');
        newEl.innerHTML = `2 (${over}.${ball}) `;
        theArray.appendChild(newEl);

        show();
       
    }
    else{
        document.querySelector("#wickets").innerHTML = "Sorry! all players are out";

 
}
}



 function undo(){
   
   if(wickets <= 10 && runCount >= 1){
    
    let lastArray = scoreArray[scoreArray.length-1];
    // console.log(scoreArray);
    // console.log(lastArray);

    ball-=1; 
    runCount-= lastArray;

    // four -=1
    // six -=1

    // let countSix = document.getElementById('sixFour');
    // countSix.innerHTML = `Four: ${four} Six: ${six}`;

    scoreArray.pop();
    

    
    if(ball < 1){
        // ball -= 1;
        if(over === 0){
            ball -= 1;
            over -= 0;
         ball = 0;
        }
        else{
            ball -= 1;
            over -=1;
            ball = 5;
        }
        
        
    }

    countRun();
    let theArray = document.getElementById('parent');
    let newEl = document.createElement('p');
    newEl.innerHTML = "Undo";
    theArray.appendChild(newEl);
          
   }
   
   else{
       document.querySelector("#wickets").innerHTML = "Wickets:";

   }

}

// we will create an array and push every number
// which we want
// and the use of array only in the undo function
// not in any other else