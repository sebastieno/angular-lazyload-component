import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { BannerComponent } from './banner/banner.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

@NgModule({
  imports: [
    CommonModule,
    AdRoutingModule
  ],
  declarations: [BannerComponent, TermsAndConditionsComponent],
  entryComponents: [BannerComponent]
})
export class AdModule { }
