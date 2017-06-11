import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import {UploadFile} from '../models';

@Injectable()
export class UploadService{

    private uploadTask: firebase.storage.UploadTask;
    
    constructor(public db: AngularFireDatabase) {}

    uploadFile(foldername: string, file:File){
        let storageRef = firebase.storage().ref();
        this.uploadTask = storageRef.child(`${foldername}/${file.name}`).put(file);

        return this.uploadTask;
    }

    saveFileData(foldername: string, uploadFile: UploadFile){
        let dbRef = this.db.database.ref('folders');

        dbRef.child(`${foldername}/${uploadFile.title}`).set(uploadFile.downloadUrl);
    }
}