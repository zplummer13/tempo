// import { ipcRenderer } from 'electron';
// import * as fs from 'fs';
// import * as path from 'path';
// import * as util from 'util';

// let r: typeof ipcRenderer;
// let f: typeof fs;
// let p: typeof path;
// let u: typeof util;
// let readFile: any;
// let writeFile: any;

export function WriteFile(fileName: string, data: string) {

}

export function ReadFile(fileName: string) {

}

// function initialize() {
//     r = require("electron").ipcRenderer;
//     f = require('fs').promises;
//     p = require("path");
//     u = require("util");

//     readFile = u.promisify(f.readFile);
//     writeFile = u.promisify(f.writeFile);
// }


// ------------------

// import { IpcRenderer } from 'electron';
// const { ipcRenderer } = require('electron');

// let ipcRenderer: IpcRenderer;

// export function WriteFile(fileName: string, data: string) {
    // if (!ipcRenderer) {
    //     initializeRenderer();
    // }
    // return ipcRenderer.send("write-file", fileName, data);
    // return window.ipcRenderer.send("write-file", fileName, data);
// }

// export function ReadFile(fileName: string) {
    // if (!ipcRenderer) {
    //     initializeRenderer();
    // }
    // return ipcRenderer.sendSync("read-file", fileName);
//     return window.ipcRenderer.sendSync("read-file", fileName)
// }

// function initializeRenderer() {
//     if (!window || !window.process || !window.require) {
//         throw new Error(`Unable to require renderer process`);
//     } else {
//         ipcRenderer = require('electron').ipcRenderer;
//     }
// }