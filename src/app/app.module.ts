import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routing, appRoutingProviders } from './app.routes';
import { CdService } from './cd.service';
import { Gw2Service } from './gw2.service';

import { AppComponent } from './app.component';
import { CdsComponent } from './cds/cds.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@angular/material';
import { Gw2Component } from './gw2/gw2.component';


@NgModule({
  declarations: [
    AppComponent,
    CdsComponent,
    NavbarComponent,
    Gw2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    routing,
    [MaterialModule]
  ],
  providers: [CdService, Gw2Service, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
