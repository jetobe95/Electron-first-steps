function getImreg(){
    var python = require('python-shell');
    var path = require('path')
    
    var options = {
        mode: 'text',
        pythonPath:'C:/Users/Fabian/Desktop/Fabi_py_Projects/myvirtualenv/Scripts/python.exe',
        scriptPath: path.join(__dirname, '/engine/'),
        args: [fixed_dest, moving_dest]
    }
    
    var imreg = new python('registration.py', options);
    
    var text_data = undefined;
    
    imreg.on('message', function(message){
        text_data = message;
        textSplit = text_data.split("_f_");
        text_data = textSplit[0] + "<br>" + textSplit[1] + "<span>|</span>";
    })
    
    progessBarTimer(4000);
    
    setTimeout(function(){
        var myOutput = document.getElementById('myOutput');
        var dataElement = document.getElementById('outputData');
        myOutput.src = './data/output.png';
        imageZoom("myOutput", "myresult");
        dataElement.innerHTML = text_data;
    }, 4000);
    
}