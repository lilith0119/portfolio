import { Component, HostListener, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './media-style.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private aboutMeService: AboutMe) { }

  classArray = new Array(7).fill('')
  num: number = 0
  scrollY: number = 0
  currentScrollY = 330

  @HostListener('window:scroll', ['$event'])

  onScroll() {
    if(window.innerWidth < 1100 || window.innerWidth > 600) {
      this.currentScrollY = 350;
    } else {
      this.currentScrollY = 350;
    }
    setTimeout(() => {
      if (window.scrollY > this.currentScrollY + this.scrollY) {
        this.classArray[this.num] = 'light'
        this.num++
        if(window.innerWidth > 1100 || window.innerWidth < 600) {
          this.scrollY += 350      
        } else {
          this.scrollY += 300      
        }
      }
    }, 1500)
  }


  img = this.aboutMeService.img;
  description = this.aboutMeService.description;

  ngOnInit(): void {
    

  }

}
