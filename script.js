
let btn  = document.querySelectorAll("#btn");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
var msg = document.getElementById("message");

let youScore = document.getElementById("youScore");
let compsScore = document.getElementById("compsScore");

let count=0;

// ====== random number computer ====== 



let compNumber = Math.ceil(Math.random()*15);

// ========== code for button ===== 

for(let i = 0 ; i<btn.length; i++){
    btn[i].onclick = function(){
        console.log("button number"+this.innerHTML);
        num1.innerText = this.innerHTML;
    

        var yourScore = 0;
        var compScore = 0;
    
// ======= compare numbers ==== 
// ======== game win ========= 


if(num1.innerText == compNumber){
    console.log("you win");
    num2.innerText = compNumber;
    msg.innerText = "You Win"
    yourScore+=1;
    youScore.innerText = yourScore;

}
// ====== you loose ==== 
else{

    console.log("you loose");
    msg.innerText = 'You Losse'
    count++;
   
 // ==== computer score increase ==== 
    if(count == 3){
        compScore+=1;
        compsScore.innerText = compScore;
    }
// ======== alert box======= 
    if(count == 4){
        alert("You get only 3 chance");
        location.reload();
    }

}
    }   
} // for loop
