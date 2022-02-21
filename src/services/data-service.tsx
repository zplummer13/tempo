import { ipcRenderer } from 'electron';


export function WriteFile(fileName: string, data: string) {
    // return ipcRenderer.send("write-file", fileName, data);
}

export function ReadFile(fileName: string) {
    // return ipcRenderer.sendSync("read-file", fileName);
}