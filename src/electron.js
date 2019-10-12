var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
function createWindow() {
    // Create the browser window.
    var win = new BrowserWindow({ width: 800, height: 600 });
    // and load the index.html of the app.
    // win.loadURL('http://localhost:1234');
    win.loadFile(__dirname+"/../dist/index.html")
    win.webContents.openDevTools();
}
app.on('ready', createWindow);
