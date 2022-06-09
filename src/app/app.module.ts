import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './shared/layout/layout.module';
import { PagesComponent } from './pages/pages.component';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    LayoutModule,
    ModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
