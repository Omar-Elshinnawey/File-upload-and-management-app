import { Injectable } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Injectable()
export class FilesService {
    
    constructor(private db: AngularFireDatabase) { }

    getFiles(): firebase.Promise<firebase.database.DataSnapshot>{
        return this.db.database.ref('folders').once('value');
    }
}