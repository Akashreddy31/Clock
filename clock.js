function updateClock() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
  //displaying time in clock
  hours = hours <10? "0"+hours : hours
 minutes = minutes <10? "0"+minutes : minutes
  seconds= seconds <10? "0"+seconds : seconds
   document.getElementById("time").innerHTML=hours + ":" + minutes +":" +seconds 


}
setInterval(updateClock,1000)
//stopwatch
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopwatch;
let runtime = false;

function start(){
if(!runtime){
     runtime = true 
    stopwatch = setInterval(updateStopwatch,1000)
}
}

function stop(){
       runtime = false;
        clearInterval(stopwatch)
    
}

function reset(){
       runtime = false;
        clearInterval(stopwatch)
        seconds =0;
        minutes =0;
        hours = 0;
        document.getElementById("stopwatch").innerHTML ="00:00:00";

}
function updateStopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    if(minutes == 60){
        minutes = 0
        hours++;
    }
 let displayhours = hours <10? "0"+hours : hours
 let displayminutes = minutes <10? "0"+minutes : minutes
 let displayseconds= seconds <10? "0"+seconds : seconds
 document.getElementById("stopwatch").innerHTML = displayhours + ":" + displayminutes +":" + displayseconds;
}
