import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-widget',
  templateUrl: './lazy-widget.component.html',
  styleUrls: ['./lazy-widget.component.scss']
})
export class LazyWidgetComponent {

  @Input('info') info: string;

  constructor() { }
}
