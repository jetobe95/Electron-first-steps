const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

var mainWindow;
app.on('ready',function(){
	mainWindow = new BrowserWindow({
        width: 975, 
        height: 610,
        backgroundColor: '#d9d9d9',
        resizable: false
    });
	//mainWindow.loadURL('https://github.com');
	 mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

    //mainWindow.webContents.openDevTools();
});