import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[bannerHost]'
})
export class BannerHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
