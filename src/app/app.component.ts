import { Component, AfterViewInit, ComponentFactoryResolver, ViewChild, Type, NgModuleFactoryLoader, Injector } from '@angular/core';
import { BannerHostDirective } from './banner-host.directive';
import { BannerComponent } from './ad/banner/banner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(BannerHostDirective) bannerHost: BannerHostDirective;

  // tslint:disable-next-line:max-line-length
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private loader: NgModuleFactoryLoader, private injector: Injector) { }

  ngAfterViewInit() {
    this.loader.load('./ad/ad.module#AdModule').then((value) => {
      const componentFactory = value.create(this.injector).componentFactoryResolver.resolveComponentFactory(BannerComponent);
      this.bannerHost.viewContainerRef.createComponent(componentFactory);
    });
  }
}
