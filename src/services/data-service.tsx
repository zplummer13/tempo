// import { IpcRenderer } from 'electron';

// let ipcRenderer: IpcRenderer;

export function WriteFile(fileName: string, data: string) {
    // if (!ipcRenderer) {
    //     initializeRenderer();
    // }
    // return ipcRenderer.send("write-file", fileName, data);
    return window.ipcRenderer.send("write-file", fileName, data);
}

export function ReadFile(fileName: string) {
    // if (!ipcRenderer) {
    //     initializeRenderer();
    // }
    // return ipcRenderer.sendSync("read-file", fileName);
    return window.ipcRenderer.sendSync("read-file", fileName)
}

// function initializeRenderer() {
//     if (!window || !window.process || !window.require) {
//         throw new Error(`Unable to require renderer process`);
//     } else {
//         ipcRenderer = require('electron').ipcRenderer;
//     }
// }