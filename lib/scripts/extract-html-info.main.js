// When an unknown exception occurs, fully bail
// DEV: By default, Electron will log/alert but keep on running
process.on('uncaughtException', function handleUncaughtException (err) {
  throw err;
});

// Load in our dependencies
var assert = require('assert');
var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var ipcMain = require('electron').ipcMain;

// When Electron is done loading
app.on('ready', function handleReady () {
  // Open a browser window on the target page with our preload handler
  var browserWindow = new BrowserWindow({
    preload: __dirname + '/extract-html-info.renderer.js',
    show: false
  });
  browserWindow.loadURL('file://' + __dirname + '/../index.html');

  // When we receive the info via IPC, log it and exit
  ipcMain.on('html-info', function handleHtmlInfo (evt, htmlInfo) {
    console.log(JSON.stringify(htmlInfo, null, 2));
    process.exit(0);
  });
});
