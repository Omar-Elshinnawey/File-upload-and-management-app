import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderService {
    
    visible = true;
    default = true;
    sideNavEvent = new EventEmitter<string>();

    constructor() {}

    showDefault(){
        this.visible = this.default = true;
    }

    showAdmin(){
        this.visible = true;
        this.default = false;
    }

    hide(){
        this.visible = false;
    }

    openSidenav(){
        this.sideNavEvent.emit('open');
    }

    closeSidenav(){
        this.sideNavEvent.emit('close');
    }

}