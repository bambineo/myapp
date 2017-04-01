import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CdService } from './cd.service';

import { AppComponent } from './app.component';
import { CdsComponent } from './cds/cds.component';

const appRoutes: Routes = [
  {
    path: 'cds', component: CdsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CdsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
