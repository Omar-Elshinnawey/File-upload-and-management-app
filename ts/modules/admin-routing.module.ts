import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddFileComponent, AdminResourcesComponent } from '../components';

const routes: Routes = [
    { path: 'add', component: AddFileComponent },
    { path: 'resources', component: AdminResourcesComponent},
    { path: '', redirectTo: 'resources', pathMatch: 'full'},
    { path: '**', redirectTo: 'resources', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}