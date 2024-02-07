const clock = document.querySelector(".clock");
const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const replay = document.querySelector(".replay");
let seconds = 0;
let timer;

const startClock = ()=>{
     timer = setInterval(function(){ seconds++;
     clock.innerHTML = createDate(seconds);},1000);
};

const createDate = (seconds) => {      
    const date = new Date(seconds *1000);
    return date.toLocaleTimeString("pt-BR",{
        hour12:false,
        timeZone: "GMT"
    });

}
document.addEventListener("click",function(e){
    const el = e.target;
    if(el ===play){
        clock.classList.remove("stop-on");
        clearInterval(timer);
        startClock();
    };
    if(el ===stop){
    clock.classList.add("stop-on");
    clearInterval(timer);
    };
    if(el ===replay ){
        clock.classList.remove("stop-on");
        clearInterval(timer);
        seconds = 0;
        clock.innerHTML = "00:00:00";
    };
})
