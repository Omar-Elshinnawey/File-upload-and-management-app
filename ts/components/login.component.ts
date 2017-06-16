import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {HeaderService, AuthService, SnackBarService} from '../services';

@Component({
    selector: 'login',
    templateUrl: 'views/login.component.html',
    styleUrls: ['css/login.component.css']
})
export class LoginComponent{

    username: string;
    password: string;

    constructor(public header: HeaderService, 
                private auth: AuthService, 
                private router: Router,
                public snackbar: SnackBarService) {
        this.header.closeSidenav();
        this.header.showDefault();
    }

    ngOnInit(){
        this.auth.onAuthState(
            () => {this.router.navigate(['admin'])},
            () => {}
        );
    }

    onsubmit(){
        if(!this.username || !this.password)
            return this.snackbar.open('Email and password are required');

        this.auth.login(this.username, this.password)
        .then((user) => {
            this.router.navigate(['admin']);
        })
        .catch((err) => {this.snackbar.open(err.message)});
    }
}