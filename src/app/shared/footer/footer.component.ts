import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() theme: string | undefined
  arrow: any;

  scrollTop() {
    window.scrollTo({top: 0})
  }

  ngOnInit(): void {
    
      window.addEventListener("scroll", () => {
        this.arrow = document.querySelector('.arrow-box')
        if(window.pageYOffset > 150) {
          this.arrow.style.display = 'block'
        } else {
          this.arrow.style.display = 'none'
        }
        this.arrow.addEventListener('mouseover', () => {
          this.arrow.style.opacity = 1
        })
      })
  }

}
