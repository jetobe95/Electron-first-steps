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
        
        var fixed_input = abspath.substring(0, abspath.length-1);
        
        var fixed_dest = "./data/fixed.png";
        
        loadDCM(fixed_input, fixed_dest, 'fixedFile');
        
    });
    

}