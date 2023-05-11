import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss', './media-style.scss']
})
export class CatalogComponent {
  imgArr = new Array(6).fill(1)

  text_color = 'dark'

  makeTextColorLight() {
    setTimeout(() => {
      this.text_color = 'light'
    }, 1000)
  }

  ngOnInit(): void {
    
    this.makeTextColorLight()
    
  }
}
