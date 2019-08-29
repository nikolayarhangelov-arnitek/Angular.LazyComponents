import {
  Component, Input, OnInit,
  NgModuleRef, NgModuleFactoryLoader, Injector,
  ElementRef
} from '@angular/core';

const modules = {
  'lazy-components': 'src/app/modules/lazy-components/lazy-components.module#LazyComponentsModule'
};
const cache: { [key: string]: NgModuleRef<any> } = {};

// https://juristr.com/blog/2019/04/state-lazy-loading-components-angular/#manual-lazy-loading-of-modules
// https://github.com/juristr/ng-element-lazy-manual
@Component({
  selector: 'app-lazy-load',
  template: ''
})
export class LazyLoadComponent implements OnInit {

  @Input('module') module: string;
  @Input('component') component: string;
  @Input('initialize') initialize: (HTMLElement) => void;

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    let module = cache[this.module];
    if (module) {
      this.loadComponent();
    } else {
      this.loader.load(modules[this.module]).then(moduleFactory => {
        cache[this.module] = moduleFactory.create(this.injector).instance;
        this.loadComponent();
      });
    }
  }

  loadComponent(): void {
    const component = document.createElement(this.component);
    this.initialize(component);

    this.elementRef.nativeElement.appendChild(component);
  }
}
