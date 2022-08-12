import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() menuActiveEvent = new EventEmitter<boolean>();
  @ViewChild('someHeader') headerRef!: ElementRef;

  listener: any;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.menuScrollListener();
  }

  hamMenuActive: boolean = false;

  activateHamMenu(): void {
    this.hamMenuActive = !this.hamMenuActive;
    this.menuActiveEvent.emit(this.hamMenuActive);
  }

  menuScrollListener(): void {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      const positionY: number = e.target.documentElement.scrollTop;
      if (positionY >= 40) {
        this.headerRef.nativeElement.classList.add('nav-scrolled');
      } else {
        this.headerRef.nativeElement.classList.remove('nav-scrolled');
      }
    });
  }
}
