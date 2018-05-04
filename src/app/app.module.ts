import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BannerHostDirective } from './banner-host.directive';
import { AdModule } from './ad/ad.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerHostDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    // AdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
