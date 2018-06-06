import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdModule } from './ad/ad.module';
import { DynamicComponentHostDirective } from './dynamic-component-host.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicComponentHostDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
