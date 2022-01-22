import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';


@Injectable({
  providedIn: 'root',
})
export class DataService {
    ipcRenderer: typeof ipcRenderer;
    fs: typeof fs;
    path: typeof path;
    util: typeof util;

    readFile: any;
    writeFile: any;

    private userDataPath: string = "";

    public loading = true;

    constructor() {
        this.ipcRenderer = window.require('electron').ipcRenderer;
        this.fs = window.require('fs').promises;
        this.path = window.require('path');
        this.util = require("util");

        this.readFile = util.promisify(fs.readFile);
        this.writeFile = util.promisify(fs.writeFile);

        if (this.loading) {
            this.userDataPath = this.ipcRenderer.sendSync('user-data-path')
            this.loading = false;
        }
    }

    public saveFile() {
        this.fs.writeFile(this.filepath("testFile.json"), '{"data": false}', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Wrote file successfully!")
            }
        })
    }

    public async loadFile(fileName: string): Promise<any> {

        let fileJSON = JSON.parse(await this.readFile(this.filepath(fileName)));

        console.log(fileJSON);

        return fileJSON;
    }

    private filepath(fileName: string): string {
        return this.path.join(this.userDataPath, fileName);
    }

}