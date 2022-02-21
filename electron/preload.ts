// const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('electron', {
//     doThing: () => ipcRenderer.send('do-a-thing'),
//     fileApi: {
//         readFile(fileName: string) {
//             ipcRenderer.sendSync("read-file", fileName);
//         },
//     },
// });
export { }
declare global {
    interface Window {
        ipcRenderer: any;
    }
}

window.ipcRenderer = require("electron").ipcRenderer;