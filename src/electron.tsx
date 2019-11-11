const { app, BrowserWindow } = require('electron')
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({ width: 600, height: 800 })

  // and load the index.html of the app.
  // win.loadURL('http://localhost:1234')
  win.loadFile('./dist/index.html')
   win.webContents.openDevTools()

 }
  app.on('ready', createWindow)
