let timer=60;
let score=0;
let hitrn=0;

function makeBubble(){
    let cluster="";
    
    for(let i=1;i<=100;i++){
        let number=Math.floor(Math.random()*10);
        cluster+=`<div class="bubble">${number}</div>`;
    }
    document.querySelector("#bottomepanel").innerHTML=cluster

}

function runTimer(){
   let timeint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#bottomepanel").innerHTML=`<h2>Game over your final srore is : ${score}</h2>`
        }
    },1000)
}


function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitrn;
}


function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}


let findHit=document.querySelector("#bottomepanel");
findHit.addEventListener("click",function(details){
    let hitNumber=Number(details.target.textContent);
    if(hitNumber===hitrn){
        increaseScore();
        getNewHit();
    }
    else{
        alert('not matched');
    }
})

makeBubble();
runTimer();
getNewHit();