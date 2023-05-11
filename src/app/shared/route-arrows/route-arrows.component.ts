import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-arrows',
  templateUrl: './route-arrows.component.html',
  styleUrls: ['./route-arrows.component.scss']
})
export class RouteArrowsComponent implements OnInit {

  constructor(private location: Location, private route: Router) { }

  @Input() page_numbers: number[] | undefined;

  route_path: string[] = [
    'portfolio',
    'experience',
    'skills',
    'about-me',
  ]

  arrowLeft() {
    let num = this.page_numbers![0]
    if (num === 0) {
      this.route.navigateByUrl('')
    } else {
      this.route.navigateByUrl(this.route_path[num - 1])
    }
  }
  arrowRight() {
    let num = this.page_numbers![1]
    if (num === 1 || num < 4) {
      this.route.navigateByUrl(this.route_path[num])
    }
  }

  ngOnInit(): void {

  }

}
