import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  initializeWidget(): (HTMLElement) => void {
    return (component: HTMLElement) => {
      component['info'] = 'This was passed during lazy loading.';
    };
  }
}
