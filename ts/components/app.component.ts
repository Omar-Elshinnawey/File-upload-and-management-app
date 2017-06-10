import { Component, ViewChild, EventEmitter } from '@angular/core';
import {MdSidenav} from '@angular/material';

import {HeaderService} from '../services';

@Component({
    selector: 'app',
    templateUrl: 'views/app.component.html',
    styleUrls: ['css/app.component.css']
})
export class AppComponent {

    @ViewChild('sidenav') sidenav: MdSidenav;

    constructor(public header: HeaderService) { }

    ngOnInit(){
        this.header.sideNavEvent.subscribe((action: string) => {
            if(action === 'open')
                this.openSideNav();
            else
                this.closeSideNav();
        });
    }

    openSideNav(){
        this.sidenav.open();
    }

    closeSideNav(){
        this.sidenav.close();
    }
}