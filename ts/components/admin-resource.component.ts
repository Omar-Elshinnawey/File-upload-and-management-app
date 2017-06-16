import { Component } from '@angular/core';
import {trigger, style, transition, animate} from '@angular/animations';
import {MdDialog} from '@angular/material';
import {Router} from '@angular/router';

import {DialogComponent} from './dialog.component';

import {Folder, UploadFile} from '../models';

import {HeaderService, FilesService, UploadService, AuthService} from '../services';

@Component({
    selector: 'resources',
    templateUrl: 'views/admin-resources.component.html',
    styleUrls: ['css/resources.component.css'],
    animations: [
        trigger('collapse', [
            transition(':enter', [
                style({height: 0, opacity: 0}),
                animate('0.3s', style({height: '*', opacity: 1}))
            ]),
            transition(':leave', [
                style({height: '*', opacity: 1}),
                animate('0.3s', style({height: 0, opacity: 0}))
            ])
        ])
    ]
})
export class AdminResourcesComponent{

    folders: Folder[];

    constructor(public header: HeaderService, 
                private filesService: FilesService, 
                private upload: UploadService, 
                public dialog: MdDialog,
                public auth: AuthService,
                private router: Router) {
        this.header.closeSidenav();
        this.header.showAdmin();

        this.folders = new Array();
    }

    ngOnInit(){
        this.auth.onAuthState(
            () => {},
            () => {this.router.navigate(['/resources'])}
        );

        this.filesService.getFiles()
        .then((foldersSnapshot) => {
            
            foldersSnapshot.forEach((folderSnapshot) => {

                var folder = new Folder();
                folder.title = folderSnapshot.key;
                folder.files = new Array();

                folderSnapshot.forEach((fileSnapshot) => {

                    var file = new UploadFile();

                    file.title = fileSnapshot.key;
                    file.showName = this.getFileName(fileSnapshot.key);
                    file.downloadUrl = fileSnapshot.val();

                    folder.files.push(file);
                    return false;
                });

                this.folders.push(folder);

                return false;
            });
        });
    }

    toggleExpand(folder: Folder){
        folder.expanded = !folder.expanded;
    }

    getFileName(name: string){
        return name.substr(name.indexOf(',') + 1);
    }

    deleteFile(folder:Folder, file: UploadFile){

        this.openDialog().afterClosed().subscribe(
            (result) => {
                if(result === true)
                    this.upload.deleteFile(file.downloadUrl).then(() => {
                        this.upload.deleteFileData(folder.title, file.title);

                        this.removeFileFromView(folder, file);
                    });
            });
    }

    openDialog(){
        return this.dialog.open(DialogComponent);
    }

    removeFileFromView(folder: Folder, file: UploadFile){
        var index;
        if(folder.files.length === 1){
            index = this.folders.indexOf(folder);
            this.folders.splice(index, 1);
        }else{
            index = folder.files.indexOf(file);
            folder.files.splice(index, 1);
        }
    }
}