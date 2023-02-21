// var minute = 4;
// var second = 60;

// setInterval( function(){
//     if (minute == 0 && second == 1) { 
//         document.getElementById("counter").innerHTML = "00.00";
//     }else{ second--;
//     if( second == 0 ){ minute --; second = 60;
    
//     if( minute == 0){
//         minute = minute;
//     }
// }
// if( minute.toString().length == 1){
//     minute = "0"+minute;
// }

// if( second.toString().length == 1){
//     second = "0"+second;
// }
// document.getElementById("counter").innerHTML = minute + ":" + second;
//     }
// }, 1000)


 setInterval (function startcounter(){
    var timer =  document.getElementById("counter").innerHTML;
 var arr = timer.split(":");
var hour = arr[0];
var min = arr[1];
var sec = arr[2];

if (sec == 59) {
    if (min == 59) {
        hour++;
        min = 0;
        if (hour < 10) hour = "0" + hour;
    } else {min++}
    if (min<10) min= "0" + min;
    sec = 0;
} else {
    sec++;
    if (sec < 10) sec = "0" + sec;
    
}
document.getElementById("counter").innerHTML = hour + ":" + min + ":" + sec;}
, 1000)

    

    

 
