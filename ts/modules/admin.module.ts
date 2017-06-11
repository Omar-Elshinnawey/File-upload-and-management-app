import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared.module';
import {AdminRoutingModule} from './admin-routing.module'

import {AddFileComponent} from '../components';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AdminRoutingModule
    ],
    declarations: [AddFileComponent]
})
export class AdminModule { }