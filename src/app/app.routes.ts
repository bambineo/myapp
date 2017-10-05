import { Routes, RouterModule } from '@angular/router';
import { CdsComponent } from './cds/cds.component';
import { Gw2Component } from './gw2/gw2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cds', pathMatch: 'full' },
  { path: 'cds', component: CdsComponent },
  { path: 'gw2', component: Gw2Component }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);