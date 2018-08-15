
//Sleep ms milisecond
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

//Progress bar
function progessBarTimer(time_ms){
    var myBar = document.getElementById("myBar"); 
    var width = 1;
    var period = time_ms/100;
    var id = setInterval(frame, period);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            myBar.style.width = "0%";
        } else {
            width++; 
            myBar.style.width = width + '%'; 
        }
    }
}


