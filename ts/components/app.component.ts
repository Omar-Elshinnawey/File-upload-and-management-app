import { Component, ViewChild, EventEmitter } from '@angular/core';
import {MdSidenav} from '@angular/material';
import {Router} from '@angular/router'

import {HeaderService, AuthService} from '../services';

import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app',
    templateUrl: 'views/app.component.html',
    styleUrls: ['css/app.component.css']
})
export class AppComponent {

    @ViewChild('sidenav') sidenav: MdSidenav;
    private subs: Subscription[];

    constructor(public header: HeaderService, private auth: AuthService, private router: Router) {
        this.subs = new Array();
    }

    ngOnInit(){
        var sub = this.header.sideNavEvent.subscribe((action: string) => {
            if(action === 'open')
                this.openSideNav();
            else
                this.closeSideNav();
        });

        this.subs.push(sub);
    }

    openSideNav(){
        this.sidenav.open();
    }

    closeSideNav(){
        this.sidenav.close();
    }

    logout(){
        this.auth.logout();
    }

    ngOnDestroy(){
        this.subs.forEach(sub => sub.unsubscribe());
    }
}