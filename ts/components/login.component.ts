import { Component } from '@angular/core';

import {HeaderService} from '../services';

@Component({
    selector: 'login',
    templateUrl: 'views/login.component.html',
    styleUrls: ['css/login.component.css']
})
export class LoginComponent{

    constructor(public header: HeaderService) {
        this.header.closeSidenav();
        this.header.showDefault();
    }

}