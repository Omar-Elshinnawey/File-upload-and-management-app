import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared.module';
import {AdminRoutingModule} from './admin-routing.module'

import {AddFileComponent, AdminResourcesComponent, DialogComponent} from '../components';
import { UploadService } from '../services';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AdminRoutingModule
    ],
    declarations: [AddFileComponent,
                   AdminResourcesComponent,
                   DialogComponent],
    providers: [UploadService],
    entryComponents:[DialogComponent]
})
export class AdminModule { }