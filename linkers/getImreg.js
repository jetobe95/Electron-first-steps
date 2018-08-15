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
    
    imreg.on('message', function(message){
        console.log(message);
    })
    
    progessBarTimer(4000);
    
    setTimeout(function(){
        var myOutput = document.getElementById('myOutput');
        myOutput.src = './data/output.png';
        imageZoom("myOutput", "myresult");
    }, 4000);
    
}