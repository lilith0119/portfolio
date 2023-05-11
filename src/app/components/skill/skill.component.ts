import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit{

  cube_images: string[] = [
    './assets/images/svg/ng.png',
    './assets/images/svg/js.png',
    './assets/images/svg/css.webp',
    './assets/images/svg/html.png',
    './assets/images/svg/sass.png',
    './assets/images/svg/ts.svg'
  ]

  ngOnInit(): void {
    
  }

}
