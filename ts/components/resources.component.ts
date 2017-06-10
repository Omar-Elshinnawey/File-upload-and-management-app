import { Component } from '@angular/core';

import {Folder} from '../models';

import {HeaderService} from '../services';

@Component({
    selector: 'resources',
    templateUrl: 'views/resources.component.html',
    styleUrls: ['css/resources.component.css']
})
export class ResourcesComponent{

    folders: Folder[];

    constructor(public header: HeaderService) {
        this.header.closeSidenav();
        this.header.showDefault();
    }

}