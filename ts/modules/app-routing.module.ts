import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent, ResourcesComponent } from '../components';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: '', redirectTo: 'resources', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}