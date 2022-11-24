import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  screenWidth!: number;

  ngOnInit(): void {
    this.handleTabs();
    this.getScreenSize();
  }

  _class(name: string): HTMLCollectionOf<HTMLElement> {
    return document.getElementsByClassName(
      name
    ) as HTMLCollectionOf<HTMLElement>;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.screenWidth = window.innerWidth;
  }

  handleTabs(): void {
    let tabPanes = this._class('tab-header')[0].getElementsByTagName('div');

    for (let i = 0; i < tabPanes.length; i++) {
      tabPanes[i].addEventListener('click', () => {
        this._class('tab-header')[0]
          .getElementsByClassName('tab-header-active')[0]
          .classList.remove('tab-header-active');

        tabPanes[i].classList.add('tab-header-active');

        console.log(this.screenWidth);
        if (this.screenWidth > 768) {
          this._class('tab-indicator')[0].style.top = `calc(50px + ${
            i * 50
          }px)`;
        }
        if (this.screenWidth > 425 && this.screenWidth <= 768) {
          this._class('tab-indicator')[0].style.left = `calc(  ${i * 130}px)`;
        }

        if (this.screenWidth <= 425) {
          this._class('tab-indicator')[0].style.left = `calc(  ${i * 80}px)`;
        }

        this._class('tab-content')[0]
          .getElementsByClassName('tab-content-active')[0]
          .classList.remove('tab-content-active');

        this._class('tab-content')[0]
          .getElementsByTagName('div')
          [i].classList.add('tab-content-active');
      });
    }
  }
}
