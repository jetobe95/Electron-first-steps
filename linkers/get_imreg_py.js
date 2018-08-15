function get_imreg() {
    var myBar = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            myBar.style.width = '0%';
        } else {
            width++; 
            myBar.style.width = width + '%'; 
        }
    }
}