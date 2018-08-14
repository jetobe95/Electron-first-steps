function get_py(){
    var python = require('python-shell');
    var path = require('path')
    
    var options = {
        mode: 'text',
pythonPath:'C:/Users/Fabian/Desktop/Fabi_py_Projects/myvirtualenv/Scripts/python.exe',
        scriptPath: path.join(__dirname, '/engine/')
    }
    
    var hi = new python('dcm_to_png.py', options);
    
    hi.on('message', function(message){
        console.log(message);
    })
    
}
