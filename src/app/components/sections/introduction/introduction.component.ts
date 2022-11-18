import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  title3String: string = "I'm Software Developer."
  constructor() { }

  ngOnInit(): void {
  }

}
