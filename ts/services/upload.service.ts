import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {UUID} from 'angular2-uuid';

import * as firebase from 'firebase';

import {Observable} from 'rxjs/Observable';

import {UploadFile} from '../models';

@Injectable()
export class UploadService{

    private uploadTask: firebase.storage.UploadTask;
    
    constructor(public db: AngularFireDatabase) {}

    uploadFile(foldername: string, file:File){
        let storageRef = firebase.storage().ref();
        this.uploadTask = storageRef.child(`${foldername}/${UUID.UUID()}/${file.name}`).put(file);

        return this.uploadTask;
    }

    saveFileData(foldername: string, uploadFile: UploadFile){
        let dbRef = this.db.database.ref('folders');

        dbRef.child(`${foldername}/${UUID.UUID()},${uploadFile.title}`).set(uploadFile.downloadUrl);
    }

    getFolders(): firebase.Promise<firebase.database.DataSnapshot>{
        return this.db.database.ref('folders').once('value');
    }

    watchFolders(cb: (snapshot: firebase.database.DataSnapshot) => void){
        this.db.database.ref('folders').on('child_added', (snapshot) => {
            cb(snapshot);
        });
    }

    deleteFile(url: string){
        return firebase.storage().refFromURL(url).delete();
    }

    deleteFileData(foldername: string, filename: string){
        this.db.database.ref('folders').child(foldername).child(filename).set(null);
    }
}