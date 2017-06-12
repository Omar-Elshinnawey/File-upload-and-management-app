import { Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {Folder, UploadFile} from '../models';

import {HeaderService, AuthService, UploadService, SnackBarService} from '../services';

@Component({
    selector: 'add',
    templateUrl: 'views/add-file.component.html',
    styleUrls: ['css/add-file.component.css']
})
export class AddFileComponent {
    @ViewChild('addFileForm') form : HTMLFormElement;

    file:File;
    folderIndex: number;
    folder: string;
    folders: Folder[];

    constructor(public header: HeaderService, 
                private auth: AuthService, 
                private router: Router, 
                private upload: UploadService,
                public snackbar: SnackBarService) {
        this.header.closeSidenav();
        this.header.showAdmin();
        this.folders = new Array();
    }

    ngOnInit(){
        this.auth.onAuthState(
            () => {},
            () => {this.router.navigate(['/resources'])}
        );

        this.upload.getFolders().then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                var folder = new Folder();
                folder.title = childSnapshot.key;

                this.folders.push(folder);
                return false;
            });
        });
    }

    onsubmit(){
        if(!this.file || this.file.size === 0)
            return this.snackbar.open('Please select a valid file');
            
        if(!this.folderIndex || this.folderIndex < -1)
            return this.snackbar.open('Please select a folder or create new');
            
        var foldername = this.folderIndex === -1? this.folder: this.folders[this.folderIndex].title;

        this.upload.uploadFile(foldername, this.file)
        .then((snapshot) => {
            var uploadFile = new UploadFile();
                uploadFile.downloadUrl = snapshot.downloadURL;
                uploadFile.title = this.file.name.substr(0, this.file.name.lastIndexOf('.'));
                this.upload.saveFileData(foldername, uploadFile);
                this.snackbar.open('upload complete');
        }).catch((err) => {this.snackbar.open(err.message)});

        this.form.reset();
    }

    getFile(event: any){
        this.file = event.target.files[0];
    }
}