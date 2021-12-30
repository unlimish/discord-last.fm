const { app, BrowserWindow, Menu, Tray, nativeTheme } = require("electron");
const path = require("path");

let appIcon = null;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
  });

  mainWindow.hide()

  var icon = null;

  function getIcon(){
    if (process.platform === 'win32') {
      icon = 'icon.png'
    } else {
      if (nativeTheme.shouldUseDarkColors === true) {
        icon = 'icon-light@3x.png';
      } else {
        icon = 'icon-dark@3x.png';
      }
    }
  };

  getIcon()

  appIcon = new Tray(path.join(__dirname + "/img/" + icon));

  var iconMenu = Menu.buildFromTemplate([
    { label: 'Show App', click:  function(){
        mainWindow.show();
    } },
    { label: 'Quit', click:  function(){
        app.isQuiting = true;
        mainWindow.destroy();
        app.quit();
    } }
  ]);

  mainWindow.on("minimize", function (event){
    event.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on('close', function (event) {
    event.preventDefault();
    mainWindow.hide()
    return false;
  });

  appIcon.setToolTip('Discord Last.fm');
  appIcon.setContextMenu(iconMenu);

  mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();
  if (app.dock) app.dock.hide(); 
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});