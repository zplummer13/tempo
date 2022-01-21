import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ipcRenderer } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    ipcRenderer: typeof ipcRenderer;
    fs: typeof fs;
    path: typeof path;

    private userDataPath: string = "";

    constructor(private http: HttpClient) {
        this.ipcRenderer = window.require('electron').ipcRenderer;
        this.fs = window.require('fs');
        this.path = window.require('path');
        // this.getJSON().subscribe(data => {
        //     console.log(data);
        // });
        // this.userDataPath = electron.app.getPath('userData');

        this.ipcRenderer.on('asynchronous-reply', (event, arg) => {
            console.log("Data service: " + arg);

            this.userDataPath = arg;
            
            fs.readFile(path.join(arg,'todo.json'), (err, data) => {
                if (err) throw err;
                let student = JSON.parse(data.toString());
                console.log(student);
            });

            this.saveFile();
        });

        console.log(this.userDataPath);
    }

    public asyncTest() {
        this.ipcRenderer.send('asynchronous-message', 'async ping')
    }

    public getJSON(filename: string): Observable<any> {
        return this.http.get(filename);
    }

    public saveFile() {
        this.fs.writeFile(this.path.join(this.userDataPath,"testFile.json"), '{"data": false}', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Wrote file successfully!")
            }
        })
    }

}