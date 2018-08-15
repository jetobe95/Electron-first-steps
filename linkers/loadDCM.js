/*
Load a dcm file, convert it to png and show it in the img tag
inputType: fixed or moving
imgId: img tag id
*/
function loadDCM(origin, destination, imgId){
    var python = require('python-shell');
    var path = require('path')
    
    var options = {
        mode: 'text',
        pythonPath:'C:/Users/Fabian/Desktop/Fabi_py_Projects/myvirtualenv/Scripts/python.exe',
        scriptPath: path.join(__dirname, '/engine/'),
        args: [destination, origin]
    }
    
    var convert = new python('dcm_to_png.py', options);
    
    convert.on('message', function(message){
        console.log(message);
    })
    
    progessBarTimer(2500);
    
    setTimeout(function(){
        var fixedFile = document.getElementById(imgId);
        fixedFile.src = destination;
    }, 2400);
    
}
