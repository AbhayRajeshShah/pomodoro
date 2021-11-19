var minute = document.getElementById("mins");
var seconds = document.getElementById("secs");
var button=document.getElementById("button");
var coinText = document.getElementById("coins");
var alarm = new Audio("chime.wav");
var tTime = -1;
var mins=0;
var secs=0;
var done=false;
var coins;
const preText = "Coins:"
var streak = 1;
localStorage.getItem("coin")>0?coins=JSON.parse(localStorage.getItem("coin")):coins=0;
localStorage.setItem("coin",JSON.stringify(coins))

coinText.innerText = preText + ` ${coins}`;
button.addEventListener("click",()=>{
    if(tTime==-1){
        tTime=1500;
    }
    
})


const time = ()=>{
    if(tTime==0){
        if(done){
            alarm.play();
            tTime=-1;
            done=false;
        }else{
            coins+=(150*streak);
            streak++;
            localStorage.setItem("coin",JSON.stringify(coins))
            coinText.innerText = preText + ` ${coins}`;
            tTime=300;
            alarm.play();
            done=true;
        }
    }else if(tTime>0){
        tTime--;
        mins = Math.floor(tTime/60);
        secs= tTime%60;
        mins>9?minute.innerText=`${mins}`:minute.innerText=`0${mins}`
        secs>9?seconds.innerText=`${secs}`:seconds.innerText=`0${secs}`
    }
}

setInterval(time,1000);