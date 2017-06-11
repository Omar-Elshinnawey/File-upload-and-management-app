import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent, LoginComponent, HeaderComponent, ResourcesComponent } from '../components';

export const firebaseConfig = {
    apiKey: "AIzaSyB5QP-hnb9EmX7zh_NvoiAEDmyke3JKiYE",
    authDomain: "melshinnawey-e5880.firebaseapp.com",
    databaseURL: "https://melshinnawey-e5880.firebaseio.com",
    storageBucket: "melshinnawey-e5880.appspot.com",
    messagingSenderId: "643507208251"
}

@NgModule({
    imports: [ BrowserModule,
                BrowserAnimationsModule,
                SharedModule.forRoot(),
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireAuthModule,
                AngularFireDatabaseModule,
                AppRoutingModule ],
    declarations: [ AppComponent,
                    LoginComponent,
                    HeaderComponent,
                    ResourcesComponent ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }