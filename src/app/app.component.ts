import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuActive: boolean = false;

  getMenuActive(isActive: boolean): void {
    this.menuActive = isActive;
  }
}
