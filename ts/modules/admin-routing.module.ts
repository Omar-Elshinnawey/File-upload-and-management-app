import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddFileComponent } from '../components';

const routes: Routes = [
    { path: 'add', component: AddFileComponent },
    { path: '', redirectTo: 'add', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}