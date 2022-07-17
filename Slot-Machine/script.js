let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')

let inputspeed=document.getElementById('inspeed');


let values=['😃','😇','😊','😂','😎','😭','☹️','😅'];

function getRandomValue(){

    return values[Math.floor(Math.random()*7)]
}

let animationId;

function updateAnimation(newspeed){
    if(animationId)clearInterval(animationId);

    animationId=setInterval(()=>{
        value1.innerText=getRandomValue();
        value2.innerText=getRandomValue();
        value3.innerText=getRandomValue();
    },1000/newspeed)

}


inputspeed.onchange=function(ev){
    document.documentElement.style.setProperty('--speed',ev.target.value);
    updateAnimation(ev.target.value);
}

