/*
Load a dcm file, convert it to png and show it in the img tag
inputType: fixed or moving
imgId: img tag id
*/
function loadDCM(inputType, imgId){
    var python = require('python-shell');
    var path = require('path')
    
    var destination = "./data/" + inputType + ".png";
    
    var options = {
        mode: 'text',
        pythonPath:'C:/Users/Fabian/Desktop/Fabi_py_Projects/myvirtualenv/Scripts/python.exe',
        scriptPath: path.join(__dirname, '/engine/'),
        args: [destination]
    }
    
    var convert = new python('dcm_to_png.py', options);
    
    convert.on('message', function(message){
        console.log(message);
    })
    
    progessBarTimer(2500);
    
    setTimeout(function(){
        var fixedFile = document.getElementById(imgId);
        fixedFile.src = "./data/" + inputType + ".png";
    }, 2400);
    
}
