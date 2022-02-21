const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    store: {
        get(val: any) {
            return ipcRenderer.sendSync('electron-store-get', val);
        },
        set(property: string, val: any) {
            ipcRenderer.send('electron-store-set', property, val);
        },
        // Other method you want to add like has(), reset(), etc.
    },
    // Any other methods you want to expose in the window object.
    // ...
    // files: {
    //     read(fileName) {
    //         return ipcRenderer.sendSync('electron-files-read', fileName);
    //     },
    //     write(fileName, data) {
    //         ipcRenderer.send("election-files-write", fileName, data);
    //     }
    // }
});