//inputText() style display none ekle 
//eventlisteneronclick
//while button click on setTimer

//const startButton=document.querySelector('#bTimer');
//const addText=document.querySelector('#buttonText');
//const form=document.querySelector('#addTodo');
var myTimer;
var min='25';
var seconds='00';
var startTimerCount=0;

function setUpTimer(){
    var kosul2=true;
    while(kosul2){
    min=prompt("Enter minutes");
    seconds=prompt("Enter seconds");
    if(min<0 || seconds<0){
        alert("Please enter value greater than 0");
    }
    else{
        kosul2=false;
        document.getElementById('clock-middle').innerHTML="<h2>"+min+":"+seconds+"</h2>";
    }
  
}  

}

function inputText(){
    const inputFormu=document.getElementById('inputText1');
    const inputContent=document.getElementById('inputText1').value;
    //var butonTag=document.getElementById('buttonText');
    inputFormu.style.display="inline";   
    createItem(inputContent); 

}
function createItem(inputContent){
    const li=document.createElement('li');
    const text=document.createTextNode(inputContent);
    li.appendChild(text);
    document.getElementById("todoDone").appendChild(li);
    li.classList='list-group-item listItem';
    console.log(inputContent);
}
function startTimer(){
    console.log(startTimerCount);
    var bTimerButton=document.getElementById('bTimer');
    //bTimerButton.innerText+='';
    //bTimerButton.innerText+='Stop';
    startTimerCount++;
    if (startTimerCount==1){
    var timer=document.getElementById('clock-middle');
    var count=0;
    setInterval(countDown,1000);    
    }
    else{
        stopTimer(myTimer);
    }
    

}
function stopTimer(myTimer){
    document.getElementById('bTimer').innerText='';
    document.getElementById('bTimer').innerText+='Start';

}
function countDown(){
    if(seconds==0 || seconds<0){
    min-='1';
    seconds='59';
    document.getElementById('clock-middle').innerHTML="<h2>"+min+":"+seconds+"</h2>";
}
    else if(min<0){
        resetTimer();
    }
    else{
        if(seconds<10){
            seconds="0"+seconds;
        }
        document.getElementById('clock-middle').innerHTML="<h2>"+min+":"+seconds+"</h2>";
        seconds--;
    }

}
function resetTimer(){
    clearInterval(myTimer);
    min=0;
    seconds=0;
    document.getElementById('clock-middle').innerHTML="<h2>"+min+":"+seconds+"</h2>";
}
function stopTimer(myTimer){
    
    clearInterval(myTimer);
}