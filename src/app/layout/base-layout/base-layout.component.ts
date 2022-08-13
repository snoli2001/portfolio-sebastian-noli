import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  menuActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getMenuActive(isActive: boolean): void {
    this.menuActive = isActive;
  }
}
