import { Component } from '@angular/core';
import {trigger, style, transition, animate} from '@angular/animations';

import {Folder} from '../models';

import {HeaderService} from '../services';

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

    constructor(public header: HeaderService) {
        this.header.closeSidenav();
        this.header.showDefault();
    }

    toggleExpand(folder: Folder){
        folder.expanded = !folder.expanded;
    }
}