const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL('http://localhost:4000');
});

app.on('window-all-closed', () => {
  if (process.platform != 'darwin')
    app.quit();
});
