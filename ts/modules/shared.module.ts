import { NgModule, ModuleWithProviders } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HeaderService, AuthService, SnackBarService, FilesService} from '../services';

@NgModule({
    exports: [ MaterialModule,
               FormsModule,
               RouterModule],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [
                HeaderService,
                AuthService,
                SnackBarService,
                FilesService
            ]
        }
    }
 }