"use strict";
exports.__esModule = true;
var open = require("open");
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
function createWindow() {
    // Create the browser window.
    var win = new BrowserWindow({
        width: 600, height: 800,
        webPreferences: {
            webSecurity: false
        }
    });
    win.loadURL("file:///Users/florianj/Private/reddit-reader/dist/index.html");
    win.webContents.on('new-window', function (event, url) {
        event.preventDefault();
        open(url);
    });
    // win.webContents.openDevTools()
}
app.on('ready', createWindow);
