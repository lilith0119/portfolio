import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() theme: string | undefined


  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);

  }
  @HostListener('window:resize', ['$event']) 

  hideNavItems() {
    if(window.innerWidth < 770) {
      this.hide_items = false;
    }
  }
setStyle() {
  if(this.hide_items) {
    return {'justify-content': 'space-between',width: 'unset'}
  } else {
    return {'justify-content': 'center',width: '100%'}
  }
}
  hide_items = true;
  ngOnInit(): void {
    
  }
}
