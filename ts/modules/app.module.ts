import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './shared.module';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent, LoginComponent, HeaderComponent, ResourcesComponent } from '../components';


@NgModule({
    imports: [ BrowserModule,
                SharedModule.forRoot(),
                AppRoutingModule ],
    declarations: [ AppComponent,
                    LoginComponent,
                    HeaderComponent,
                    ResourcesComponent ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }