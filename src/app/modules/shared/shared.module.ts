import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadComponent } from './components/lazy-load/lazy-load.component';

@NgModule({
  declarations: [
    LazyLoadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyLoadComponent
  ]
})
export class SharedModule { }
