import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent, ResourcesComponent } from '../components';

import {AuthService} from '../services';

declare var require: any;

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'admin', loadChildren: './admin.module#AdminModule?chunkName=bundle', canActivate: [AuthService]},
    { path: '', redirectTo: 'resources', pathMatch: 'full' },
    { path: '**', redirectTo: 'resources', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}