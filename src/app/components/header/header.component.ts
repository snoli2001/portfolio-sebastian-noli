import { PdfService } from './../../services/pdf.service';
import {
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
  scrollPosition = 0;
  showLanguagesDropDown: boolean = false;

  constructor(private renderer2: Renderer2, private pdfService: PdfService) {}

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
      if (positionY >= 40 && this.scrollPosition < positionY) {
        this.headerRef.nativeElement.classList.add('nav-scrolled');
      } else {
        this.headerRef.nativeElement.classList.remove('nav-scrolled');
      }

      this.scrollPosition = positionY;
    });
  }

  scrollTo(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  responsiveScrollTo(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
    this.activateHamMenu();
  }

  seeResume(): void {
    this.pdfService
      .downloadPDF('./assets/documents/SebastianNoliCV2022.pdf')
      .subscribe((response) => {
        const fileURL = URL.createObjectURL(response);
        window.open(fileURL, '_blank');
      });
  }

  toggleLanguagesDropdown(): void {
    this.showLanguagesDropDown = !this.showLanguagesDropDown;
  }
}
