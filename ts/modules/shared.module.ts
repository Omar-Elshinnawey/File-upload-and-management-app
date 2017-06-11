import { NgModule, ModuleWithProviders } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HeaderService, UploadService, AuthService, SnackBarService} from '../services';

@NgModule({
    exports: [ MaterialModule,
               FormsModule,
               RouterModule ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [
                HeaderService,
                UploadService,
                AuthService,
                SnackBarService
            ]
        }
    }
 }