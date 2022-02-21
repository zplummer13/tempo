import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import * as fs from 'fs';
import * as util from 'util';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";

let win: BrowserWindow | null = null;
let userDataPath: string = "";
let readFile: any;
let writeFile: any;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        // titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: __dirname + '/preload.ts',
        }
    })

    if (isDev) {
        win.loadURL('http://localhost:3000/index.html');
    } else {
        // 'build/index.html'
        win.loadURL(`file://${__dirname}/../index.html`);
    }

    win.on('closed', () => win = null);

    userDataPath = path.join(app.getPath("userData"), "data");

    // Make the data folder
    if (!fs.existsSync(userDataPath)) {
        fs.mkdirSync(userDataPath);
    }

    readFile = util.promisify(fs.readFile);
    writeFile = util.promisify(fs.writeFile);

    // Hot Reloading
    if (isDev) {
        // 'node_modules/.bin/electronPath'
        require('electron-reload')(__dirname, {
            electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
            forceHardReset: true,
            hardResetMethod: 'exit'
        });
    }

    // DevTools
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));

    if (isDev) {
        // win.webContents.openDevTools();
    }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

ipcMain.on('user-data-path', (event) => {
    event.returnValue = userDataPath;
});

ipcMain.on('read-file', async (event, [fileName]) => {
    let fileExists = fs.existsSync(filepath(fileName));

    if (!fileExists) {
        event.returnValue = null;
    } else {
        let fileJSON = JSON.parse(await readFile(filepath(fileName)));
        event.returnValue = fileJSON;
    }
});

function filepath(fileName: string) {
    return path.join(userDataPath, fileName);
}