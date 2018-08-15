function openFixedFile(){
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
        
        fixed_input = abspath;
        
        loadDCM(fixed_input.substring(0, fixed_input.length-1), fixed_dest, 'fixedFile');
        
    });
    

}