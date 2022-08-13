import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.handleTabs();
  }

  _class(name: string): HTMLCollectionOf<HTMLElement> {
    return document.getElementsByClassName(
      name
    ) as HTMLCollectionOf<HTMLElement>;
  }

  handleTabs(): void {
    let tabPanes = this._class('tab-header')[0].getElementsByTagName('div');

    for (let i = 0; i < tabPanes.length; i++) {
      tabPanes[i].addEventListener('click', () => {
        this._class('tab-header')[0]
          .getElementsByClassName('active')[0]
          .classList.remove('active');

        tabPanes[i].classList.add('active');

        this._class('tab-indicator')[0].style.top = `calc(80px + ${i * 50}px)`;

        this._class('tab-content')[0]
          .getElementsByClassName('active')[0]
          .classList.remove('active');


        this._class('tab-content')[0]
          .getElementsByTagName('div')
          [i].classList.add('active');
      });
    }
  }
}
