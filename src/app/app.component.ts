import {
  Component,
  AfterViewInit,
  ComponentFactoryResolver,
  ViewChild,
  Type,
  NgModuleFactoryLoader,
  Injector
} from '@angular/core';
import { BannerComponent } from './ad/banner/banner.component';
import { DynamicComponentHostDirective } from './dynamic-component-host.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DynamicComponentHostDirective)
  bannerHost: DynamicComponentHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.loader.load('./ad/ad.module#AdModule').then(value => {
        const componentFactory = value
          .create(this.injector)
          .componentFactoryResolver.resolveComponentFactory(BannerComponent);
        this.bannerHost.viewContainerRef.createComponent(componentFactory);
      });
    }, 2000);
  }
}
