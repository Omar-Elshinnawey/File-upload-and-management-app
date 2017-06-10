import { NgModule, ModuleWithProviders } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HeaderService} from '../services';

@NgModule({
    exports: [CommonModule,
               BrowserAnimationsModule,
               MaterialModule,
               FormsModule,
               RouterModule ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [
                HeaderService
            ]
        }
    }
 }