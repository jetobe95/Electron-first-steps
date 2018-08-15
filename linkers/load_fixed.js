
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
    
    progessBarTimer(2500);
    
    setTimeout(function(){
        var fixedFile = document.getElementById('fixedFile');
        fixedFile.src = "./data/fixed.png";
    }, 2400);
    
}
