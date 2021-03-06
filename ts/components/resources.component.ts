import { Component } from '@angular/core';
import {trigger, style, transition, animate} from '@angular/animations';
import {Router} from '@angular/router';

import {Folder, UploadFile} from '../models';

import {HeaderService, FilesService, AuthService} from '../services';

@Component({
    selector: 'resources',
    templateUrl: 'views/resources.component.html',
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
export class ResourcesComponent{

    folders: Folder[];

    constructor(public header: HeaderService, 
                private filesService: FilesService, 
                public auth: AuthService,
                private router: Router) {
                    
        this.header.closeSidenav();
        this.header.showDefault();

        this.folders = new Array();
    }

    ngOnInit(){
        this.auth.onAuthState(
            () => {this.router.navigate(['admin'])},
            () => {}
        );

        this.filesService.getFiles()
        .then((foldersSnapshot) => {
            
            foldersSnapshot.forEach((folderSnapshot) => {

                var folder = new Folder();
                folder.title = folderSnapshot.key;
                folder.files = new Array();

                folderSnapshot.forEach((fileSnapshot) => {

                    var file = new UploadFile();

                    file.title = this.getFileName(fileSnapshot.key);
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
}