import * as open from 'open';

const { app, BrowserWindow } = require('electron')
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 600, height: 800,
    webPreferences: {
      webSecurity: false

    }
  })

  win.loadURL("file:///Users/florianj/Private/reddit-reader/dist/index.html")
  win.webContents.on('new-window', function(event, url){
    event.preventDefault();
    open(url);
  });
  // win.webContents.openDevTools()
}
app.on('ready', createWindow)
