import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService implements CanActivate {

    authObserver: Observable<firebase.User>;
    
    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.authObserver = afAuth.authState;
    }

    login(username: string, password: string){
        return this.afAuth.auth.signInWithEmailAndPassword(username, password);
    }

    logout(){
        this.afAuth.auth.signOut();
    }

    onAuthState(isLoggedin: () => void, isNotLoggedin: () => void){
        firebase.auth().onAuthStateChanged((user: firebase.User) => {
            if(user)
                isLoggedin();
            else
                isNotLoggedin();
        });
    }

    canActivate(){
        return this.authObserver.first()
        .map((user) => {
            if(user)
                return true;
            
            this.router.navigate(['/resources']);
            return false;
        });
    }

}