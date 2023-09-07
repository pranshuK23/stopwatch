let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function start(){
    timer = true;
    stopwatch();

}
function stop(){
    timer = false;
}
function reset(){
   
    hr = 0;
    sec = 0;
    min = 0;
    count = 0;
    timer=false;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";

}
function stopwatch(){

    
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count = 0;
        }
        if(sec==60){
            min = min+1;
            sec = 0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
        }


        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;
        if(hr<9){
            hrString = "0"+hrString;
        }
        if(min<9){
            minString = "0"+minString;
        }
        if(sec<9){
            secString = "0"+secString;
        }
        if(count<9){
            countString = "0"+countString;
        }
        console.log("hr",hr);
        document.getElementById("hr").innerHTML=hrString;
        console.log("min",min);
        document.getElementById("min").innerHTML=minString;
        console.log("sec",sec);
        document.getElementById("sec").innerHTML=secString;
        console.log(count);
        document.getElementById("count").innerHTML=countString;
        setTimeout("stopwatch()",10);
    }

}