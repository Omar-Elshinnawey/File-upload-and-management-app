import { Component} from '@angular/core';
import {Router} from '@angular/router';

import {Folder, UploadFile} from '../models';

import {HeaderService, AuthService, UploadService, SnackBarService} from '../services';

@Component({
    selector: 'add',
    templateUrl: 'views/add-file.component.html',
    styleUrls: ['css/add-file.component.css']
})
export class AddFileComponent {

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
    }

    ngOnInit(){
        this.auth.onAuthState(
            () => {},
            () => {this.router.navigate(['/resources'])}
        );
    }

    onsubmit(){
        var foldername = this.folderIndex === -1? this.folder: this.folders[this.folderIndex].title;

        this.upload.uploadFile(foldername, this.file)
        .then((snapshot) => {
            var uploadFile = new UploadFile();
                uploadFile.downloadUrl = snapshot.downloadURL;
                uploadFile.title = this.file.name.substr(0, this.file.name.lastIndexOf('.'));
                this.upload.saveFileData(foldername, uploadFile);
                this.snackbar.open('upload complete');
        }).catch((err) => {this.snackbar.open(err.message)});
    }

    getFile(event: any){
        this.file = event.target.files[0];
    }
}