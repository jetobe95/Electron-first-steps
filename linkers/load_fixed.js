function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


function loadFixedImage(){
    var python = require('python-shell');
    var path = require('path')
    
    var options = {
        mode: 'text',
        pythonPath:'C:/Users/Fabian/Desktop/Fabi_py_Projects/myvirtualenv/Scripts/python.exe',
        scriptPath: path.join(__dirname, '/engine/')
    }
    
    var convert = new python('dcm_to_png.py', options);
    
    convert.on('message', function(message){
        console.log(message);
    })
    
    wait(3000);
    
    var fixedFile = document.getElementById('fixedFile');
    fixedFile.src = "./data/fixed.png";
    
}
