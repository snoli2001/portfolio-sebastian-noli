import { Component, OnInit } from '@angular/core';

export interface Skill {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  logosUrl: string = 'assets/images/Logos';

  skillsInfo: Skill[] = [
    { name: 'Javascript', imageUrl: `${this.logosUrl}/logo-javascript.svg` },
    { name: 'Typescript', imageUrl: `${this.logosUrl}/typescript.svg` },
    { name: 'Html', imageUrl: `${this.logosUrl}/html-1.svg` },
    { name: 'CSS', imageUrl: `${this.logosUrl}/css-3.svg` },
    { name: 'Angular', imageUrl: `${this.logosUrl}/angular-icon-1.svg` },
    { name: 'Github', imageUrl: `${this.logosUrl}/github-icon.svg` },
    { name: 'npm', imageUrl: `${this.logosUrl}/npm.svg` },
    { name: 'Tailwind CSS', imageUrl: `${this.logosUrl}/tailwind-css-1-2.svg` },
  ];

  constructor() {}

  ngOnInit(): void {}
}
