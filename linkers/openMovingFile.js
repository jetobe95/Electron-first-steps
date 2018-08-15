function openMovingFile(){
    var python = require('python-shell');
    var path = require('path')
    
    var options = {
        mode: 'text',
        pythonPath:'C:/Users/Fabian/Desktop/Fabi_py_Projects/myvirtualenv/Scripts/python.exe',
        scriptPath: path.join(__dirname, '/engine/')
    }
    
    var open = new python('open_file.py', options);
    
    var abspath = undefined;
    open.on('message', function(message){
        abspath = message;
        
        moving_input = abspath.substring(0, abspath.length-1);
        
        loadDCM(moving_input, moving_dest, 'movingFile');
        
    })
    

}