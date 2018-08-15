function openFile(){
    var python = require('python-shell');
    var path = require('path')
    
    var options = {
        mode: 'text',
        pythonPath:'C:/Users/Fabian/Desktop/Fabi_py_Projects/myvirtualenv/Scripts/python.exe',
        scriptPath: path.join(__dirname, '/engine/')
    }
    
    var open = new python('open_file.py', options);
    
    open.on('message', function(message){
        console.log(message);
    })
    
}