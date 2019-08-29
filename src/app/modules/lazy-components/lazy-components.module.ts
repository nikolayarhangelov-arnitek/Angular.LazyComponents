import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { LazyWidgetComponent } from './components/lazy-widget/lazy-widget.component';

@NgModule({
  declarations: [
    LazyWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    LazyWidgetComponent
  ]
})
export class LazyComponentsModule {
  constructor(injector: Injector) {
    if (!customElements.get('app-lazy-widget')) {
      customElements.define('app-lazy-widget', createCustomElement(LazyWidgetComponent, { injector }));
    }
  }
}
