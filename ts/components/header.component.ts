import { Component } from '@angular/core';

import {HeaderService} from '../services';

@Component({
    selector: 'header',
    templateUrl: 'views/header.component.html',
    styleUrls: ['css/header.component.css']
})
export class HeaderComponent{

    constructor(public header: HeaderService) { }
}